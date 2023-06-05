import Loading from "@/components/Loading";
import Recipe from "@/components/Recipe";
import useUser from "@/utils/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProfilePage = () => {
    const [activeTab, setActiveTab] = React.useState("created");
    const [recipes, setRecipes] = React.useState([]);
    const [privateRecipes, setPrivateRecipes] = React.useState([]);
    const router = useRouter();
    const id = router.query?.id;
    const [restricted, setRestricted] = useState(true);
    const { user, loading } = useUser();

    // get recipes the user is author of
    useEffect(() => {
        if (!id) {
            // router.push("/dashboard");
            return;
        }
        let authorEmail = decodeURIComponent(id);
        // if (authorEmail.includes("=")) {
        //     authorEmail = authorEmail.replace("=", "");
        // }
        const fetchRecipe = async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/recipes/author/${authorEmail}/public`
            );
            const data = await res.json();
            // console.log(data);
            setRecipes(data);
        };

        const fetchPrivateRecipe = async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/recipes/author/${authorEmail}/private`
            );
            const data = await res.json();
            // console.log(data);
            setPrivateRecipes(data);
        };

        fetchRecipe();

        if (user?.email == id) {
            setRestricted(false);
            fetchPrivateRecipe();
        } else {
            setRestricted(true);
        }
    }, [user, id]);

    if (loading) {
        return <Loading />;
    }
    if (!id) {
        return router.push("/dashboard");
    }
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    // const recipesFavorited = 5;

    // const favoritedRecipes = [];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-2">
                <div>
                    <h1 className="text-3xl font-bold">Authors Profile</h1>
                    <p className="text-gray-600 mt-2">Email: {id}</p>
                </div>

                <Link
                    href="/create"
                    className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                >
                    Create Recipe
                </Link>
                <div className="flex mt-4 md:mt-0">
                    <div
                        className={`mr-4 cursor-pointer ${
                            activeTab === "created"
                                ? "font-bold"
                                : "text-gray-600"
                        }`}
                        onClick={() => handleTabChange("created")}
                    >
                        Public Created ({recipes?.length || 0})
                    </div>
                    {/* <div
                        className={`mr-4 cursor-pointer ${
                            activeTab === "favorited"
                                ? "font-bold"
                                : "text-gray-600"
                        }`}
                        onClick={() => handleTabChange("favorited")}
                    >
                        Favorited ({recipesFavorited})
                    </div> */}
                    <div
                        className={`mr-4 cursor-pointer ${
                            activeTab === "private"
                                ? "font-bold"
                                : "text-gray-600"
                        }`}
                        onClick={() => handleTabChange("private")}
                    >
                        Private ({privateRecipes?.length || 0})
                    </div>
                </div>
            </div>
            <div>
                {activeTab === "created" && (
                    <div>
                        <h2 className="text-xl font-bold mb-4">
                            Created Recipes
                        </h2>
                        <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {recipes.map((recipe) => (
                                <Recipe
                                    key={recipe._id}
                                    id={recipe._id}
                                    {...recipe}
                                />
                            ))}
                        </div>
                    </div>
                )}
                {/* {activeTab === "favorited" && (
                    <div>
                        <h2 className="text-xl font-bold mb-4">
                            Favorited Recipes
                        </h2>
                        {favoritedRecipes.map((recipe) => (
                            <div key={recipe.id} className="mb-4">
                                <p>{recipe.title}</p>
                            </div>
                        ))}
                    </div>
                )} */}
                {activeTab === "private" && (
                    <div>
                        <h2 className="text-xl font-bold mb-4">
                            Private Recipes
                        </h2>
                        <div>
                            {" "}
                            {privateRecipes.map((recipe) => (
                                <Recipe
                                    key={recipe._id}
                                    id={recipe._id}
                                    {...recipe}
                                />
                            ))}
                        </div>

                        {!restricted && privateRecipes.length === 0 && (
                            <p className="italic">No private recipes yet.</p>
                        )}
                        {restricted && (
                            <p className="italic">
                                You are not authorized to view this users
                                private recipes.
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
