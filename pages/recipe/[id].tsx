import { useRouter } from "next/router";
import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import useUser from "@/utils/auth";
import Link from "next/link";

const RecipePage = () => {
    const router = useRouter();
    const id = router.query?.id;

    const { user, loading } = useUser();

    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        if (!id) {
            return;
        }
        const fetchRecipe = async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/recipes/${id}`
            );
            const data = await res.json();
            console.log(data);
            setRecipe(data);
        };

        fetchRecipe();
    }, [id]);

    if (!id) {
        return <p>Invalid Page, Return home!</p>;
    }

    if (!recipe) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen m-4">
                <div className="animate-pulse bg-gray-300 rounded-lg h-64 w-full"></div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex justify-center items-center min-h-full m-4">
            <div className="bg-gray-100 rounded-lg p-6 flex flex-col gap-4 w-full max-w-lg">
                <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

                <div className="mb-4">
                    <h3 className="font-bold">How to Prepare?</h3>
                    <p className="text-gray-600 mt-2">
                        {recipe?.description ? parse(recipe.description) : ""}
                    </p>
                </div>

                <img
                    className="rounded-lg mb-4"
                    src={recipe.imageSrc}
                    alt={recipe.title}
                />

                <div className="recipe__ingredients">
                    <h2 className="text-xl font-bold mb-2">Ingredients</h2>
                    <ul className="list-disc list-inside">
                        {recipe.ingredients?.map((ingredient) => (
                            <li key={ingredient} className="mb-1">
                                {ingredient}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* contributed by */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3>Contributed by : </h3>
                    <Link
                        href={`/profile/${encodeURIComponent(recipe.author)}`}
                        className="flex items-center gap-1"
                    >
                        <img
                            className="w-10 h-10 rounded-full mr-2"
                            src={
                                recipe.authorImage ||
                                "data:image/png;base64,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"
                            }
                            alt={recipe.author}
                        />
                        <div className="text-sm">
                            <p className="text-gray-900 leading-none">
                                {recipe.author}
                            </p>
                        </div>
                    </Link>
                </div>

                <button
                    onClick={async () => {
                        // delete recipe and refresh

                        const res = await fetch(
                            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/recipes/${id}`,
                            {
                                method: "DELETE",
                            }
                        );

                        router.replace("/dashboard");
                    }}
                    className="btn bg-red-600 text-white p-2 rounded-md hover:bg-red-800 disabled:hidden"
                    disabled={!user || user?.email != recipe.author}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default RecipePage;
