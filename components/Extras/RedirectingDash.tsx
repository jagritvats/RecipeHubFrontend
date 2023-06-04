import React from "react";

const RedirectingDash = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
            <div className="text-white p-8">
                <h1 className="text-4xl font-bold mb-4">
                    Welcome to the Dashboard!
                </h1>
                <p className="text-lg">Just wait a few seconds...</p>
                <div className="mt-6">
                    <div className="h-2 bg-white rounded-full">
                        <div className="h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RedirectingDash;
