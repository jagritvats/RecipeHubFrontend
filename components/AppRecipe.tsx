import useUser from "@/utils/auth";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Loading from "./Loading";
import { toast } from "react-toastify";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
});

export default function AddRecipe() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageSrc, setImageUrl] = useState("");
    const [isPrivate, setIsPrivate] = useState(false);
    const [ingredients, setIngredients] = useState([]);

    const { user, loading } = useUser();
    const router = useRouter();
    if (loading) {
        return <Loading />;
    }
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const author = user.email;
        const newRecipe: any = {
            id: Date.now(),
            title,
            description,
            imageSrc,
            ingredients,
            isPrivate,
            author: author,
        };
        //  Send new recipe to API

        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/recipes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRecipe),
        })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Error Adding Data");
                }
                return response.json();
            })
            .then((data) => {
                // console.log("Success:", data);
                router.push("/dashboard");
            })
            .catch((error) => {
                console.error("Error:", error);
                const msg = error.msg || "Error adding recipe";
                console.log(msg);
                toast(msg, {
                    type: "error",
                    position: "bottom-right",
                });
            });
    }

    return (
        <div className="max-w-2xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-3xl font-bold mb-6">Add Recipe</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="title"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="description"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Description
                        </label>
                        {/* <textarea
                            id="description"
                            name="description"
                            rows={3}
                            value={description}
                            onChange={(event) =>
                                setDescription(event.target.value)
                            }
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        ></textarea> */}
                        <QuillNoSSRWrapper
                            theme="snow"
                            value={description}
                            placeholder={
                                "Write instructions for your cool recipe here !"
                            }
                            style={{
                                minHeight: "200px",
                            }}
                            onChange={(txt) => {
                                setDescription(txt);
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="imageSrc"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Image URL
                        </label>
                        <input
                            type="text"
                            name="imageSrc"
                            id="imageSrc"
                            value={imageSrc}
                            onChange={(event) =>
                                setImageUrl(event.target.value)
                            }
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="imageSrc"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Ingredients
                        </label>

                        <div className="flex flex-col">
                            {ingredients.map((ingredient, index) => (
                                <div key={index} className="flex">
                                    <input
                                        type="text"
                                        name="ingredient"
                                        id="ingredient"
                                        value={ingredient}
                                        onChange={(event) => {
                                            const newIngredients = [
                                                ...ingredients,
                                            ];
                                            newIngredients[index] =
                                                event.target.value;
                                            setIngredients(newIngredients);
                                        }}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => {
                                            const newIngredients = [
                                                ...ingredients,
                                            ];
                                            newIngredients.splice(index, 1);
                                            setIngredients(newIngredients);
                                        }}
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() =>
                                    setIngredients([...ingredients, ""])
                                }
                                className="hover:opacity-70 text-green-500 font-bold py-1 px-2 rounded w-fit"
                            >
                                + Add Ingredient 🍴
                            </button>
                        </div>
                    </div>
                    {/* Radio button to check if the recipe should be private */}
                    <div className="mb-4 flex gap-4 justify-between">
                        <label
                            htmlFor="private"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Private 🔐
                        </label>

                        <input
                            type="checkbox"
                            name="private"
                            id="private"
                            className="p-2"
                            onChange={(e) => {
                                setIsPrivate(e.target.checked);
                            }}
                        />
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Add Recipe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
