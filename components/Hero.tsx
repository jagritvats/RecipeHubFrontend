import Head from "next/head";
import { useRouter } from "next/router";
import FeaturedRecipes from "./Featured";

export default function Hero() {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>My Recipe App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-gray-100 min-h-screen">
                <nav className="bg-white shadow-lg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="flex-shrink-0 flex items-center">
                                    {/* <img
										className="h-8 w-8"
										src="/logo.svg"
										alt="My Recipe App"
									/> */}
                                </div>
                            </div>
                            <div className="-mr-2 flex items-center sm:hidden">
                                <button
                                    type="button"
                                    className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        ></path>
                                    </svg>
                                    <svg
                                        className="hidden h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="hidden sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a
                                href="#"
                                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Recipes
                            </a>
                            <a
                                href="#"
                                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Categories
                            </a>
                            <a
                                href="#"
                                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </nav>

                <div className="bg-white">
                    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-gray-900">
                                Discover Delicious Recipes
                            </h1>
                            <p className="mt-4 text-lg text-gray-500">
                                Find inspiration for your next meal with our
                                collection of mouth-watering recipes.
                            </p>
                        </div>

                        <div className="mt-10">
                            <form
                                action="#"
                                method="POST"
                                className="sm:flex justify-center"
                            >
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <button
                                        onClick={() => {
                                            router.push("/login");
                                        }}
                                        type="submit"
                                        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                                    >
                                        Get started
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <h2 className="text-2xl font-bold mb-4">
                            Featured Recipes
                        </h2>

                        {/* <div className="grid grid-cols-3 gap-4">
							<div className="bg-white rounded-lg shadow-lg p-4">
								<h3 className="text-xl font-bold mb-2">
									Recipe 1
								</h3>
								<p className="text-gray-600">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Sed euismod, sapien vel
									bibendum bibendum, velit sapien bibendum
									sapien, vel bibendum sapien velit.
								</p>
							</div>
							<div className="bg-white rounded-lg shadow-lg p-4">
								<h3 className="text-xl font-bold mb-2">
									Recipe 2
								</h3>
								<p className="text-gray-600">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Sed euismod, sapien vel
									bibendum bibendum, velit sapien bibendum
									sapien, vel bibendum sapien velit.
								</p>
							</div>
							<div className="bg-white rounded-lg shadow-lg p-4">
								<h3 className="text-xl font-bold mb-2">
									Recipe 3
								</h3>
								<p className="text-gray-600">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Sed euismod, sapien vel
									bibendum bibendum, velit sapien bibendum
									sapien, vel bibendum sapien velit.
								</p>
							</div>
						</div> */}

                        <FeaturedRecipes />
                    </div>
                </div>
            </main>
        </div>
    );
}
