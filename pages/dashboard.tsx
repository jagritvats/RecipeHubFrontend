import React, { useState } from "react";
import RedirectingDash from "@/components/Extras/RedirectingDash";
import Loading from "@/components/Loading";
import Recipes from "@/components/Recipes";
import useUser from "@/utils/auth";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const Dashboard = () => {
    const { user, loading } = useUser();

    const [searchQuery, setSearchQuery] = useState("");

    const router = useRouter();

    if (loading) {
        return <RedirectingDash />;
    }

    if (!user) {
        router.push("/login");
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="bg-white rounded-lg p-8 shadow-md">
                    <h1 className="text-3xl font-bold mb-4">
                        Redirecting to Login...
                    </h1>
                    <p className="text-gray-600">
                        Please wait while we redirect you to the login screen.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>Dashboard - Recipe Hub</title>
            </Head>
            <div className="bg-gray-100 p-4">
                <div className="recipes bg-gray-100 my-4">
                    <div className="ml-2">
                        <h1 className="text-4xl font-bold mb-4 text-center">
                            Welcome to Recipe Hub
                        </h1>
                        <p className="text-lg text-gray-600 mb-4 text-center">
                            Discover and share amazing recipes from around the
                            world
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <div className="px-4 py-6 sm:px-0">
                            <input
                                type="text"
                                placeholder="Search by ingredients or title"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {/* {searchResults.length === 0 && (
                                <div className="text-center text-gray-600">
                                    No recipes found. Try a different search
                                    query.
                                </div>
                            )} */}

                            <Recipes qry={searchQuery} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
