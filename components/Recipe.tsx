import useUser from "@/utils/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import parse from "html-react-parser";

type Props = {
    imageSrc?: string;
    id?: string;
    preview?: boolean;
    title: string;
    description: string;
    author: string;
    ingredients: [string];
};

const Recipe = (props: Props) => {
    const {
        imageSrc,
        title,
        description,
        id,
        preview,
        author,
        ingredients,
        qry,
    } = props;
    // console.log(props);

    const { user } = useUser();

    // console.log(user?.email, author);

    const router = useRouter();
    return (
        <div className="max-w-md md:max-w-sm w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl flex flex-col justify-between">
            {imageSrc && (
                <div className="md:flex-shrink-0 flex-1">
                    <img
                        width={300}
                        height={300}
                        className=" w-full object-cover md:h-full max-h-46"
                        src={imageSrc}
                        alt={title}
                    />
                </div>
            )}
            <div className="p-8 h-full flex flex-col justify-end flex-1">
                <div>
                    <h3 className="text-2xl font-bold text">{title}</h3>

                    <p className="mt-2 text-gray-600 max-h-20 text-ellipsis overflow-hidden">
                        {parse(description)}
                    </p>

                    {/* Ingredients */}
                    <div className="mt-4">
                        <h3 className="font-bold">Ingredients</h3>
                        <ul className="flex flex-row text-ellipsis overflow-clip list-disc list-inside">
                            {ingredients?.map((ingredient) => (
                                <li
                                    className={
                                        ingredient.includes(qry) && qry != ""
                                            ? "bg-blue-100"
                                            : ""
                                    }
                                    key={ingredient}
                                >
                                    {ingredient}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                    <Link
                        href={`/recipe/${id}`}
                        className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        View recipe
                    </Link>
                    {preview ? (
                        ""
                    ) : (
                        <button
                            onClick={async () => {
                                // delete recipe and refresh

                                const res = await fetch(
                                    `${process.env.BACKEND_URL}/api/recipes/${id}`,
                                    {
                                        method: "DELETE",
                                    }
                                );

                                router.reload();
                            }}
                            className="btn bg-red-600 text-white p-2 rounded-md hover:bg-red-800 disabled:hidden"
                            disabled={!user || user?.email != author}
                        >
                            Delete
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Recipe;
