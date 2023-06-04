import AddRecipe from "@/components/AppRecipe";
import Head from "next/head";
import React from "react";

const CreateRecipe = () => {
    return (
        <div className="bg-gray-100">
            <Head>
                <title>Create Recipe - Recipe Hub</title>
            </Head>
            <AddRecipe />
        </div>
    );
};

export default CreateRecipe;
