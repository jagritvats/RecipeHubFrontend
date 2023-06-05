import { useState, useEffect } from "react";
import Recipe from "./Recipe";
import Link from "next/link";

type Recipe = any;

export default function Recipes(props: { qry: string | null }) {
    const qry = props.qry;

    const [recipes, setRecipes] = useState<Recipe[] | null>([]);
    const [filteredRecipe, setFilteredRecipe] = useState<Recipe[] | null>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (qry == "" || qry?.trim() == "") {
            setFilteredRecipe(recipes);
        }
        if (qry && qry !== "") {
            if (!recipes) {
                return;
            }
            // console.log(qry, recipes);
            setFilteredRecipe(
                recipes.filter(
                    (recipe: Recipe) =>
                        recipe.title
                            .toLowerCase()
                            .includes(qry.toLowerCase()) ||
                        recipe.ingredients.find((ingredient) =>
                            ingredient.toLowerCase().includes(qry.toLowerCase())
                        )
                )
            );
            // console.log("filtered!", filteredRecipe);
        }
    }, [qry, recipes]);

    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/recipes`
            );
            const data = await res.json();
            console.log("data", data);

            setRecipes(data);
            setFilteredRecipe(data);
            setLoading(false);
        };
        // fetch recipes

        fetchRecipes();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Create Recipe */}
            <div className="mt-6 flex justify-between items-center">
                {" "}
                <h1 className="text-3xl font-bold text-gray-900 mt-4">
                    Recipes
                </h1>
                <Link
                    href="/create"
                    className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                >
                    Create Recipe
                </Link>
            </div>

            <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredRecipe &&
                    filteredRecipe.length &&
                    filteredRecipe.map((recipe) => (
                        <Recipe
                            key={recipe._id}
                            id={recipe._id}
                            {...recipe}
                            qry={qry}
                        />
                    ))}

                {recipes && recipes.length === 0 && (
                    <div className="text-center text-gray-600">
                        No recipes exist. Try creating one.
                    </div>
                )}

                {filteredRecipe?.length === 0 ? (
                    <div className="text-center text-gray-600">
                        No recipes found. Try a different search query.
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}
