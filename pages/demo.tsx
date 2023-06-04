import Head from "next/head";

import Hero from "../components/Hero";

export default function Home() {
	return (
		<div>
			<Head>
				<title>My Awesome App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="bg-gray-100 min-h-screen">
				<Hero />
				{/* <nav className="bg-white shadow-lg">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex justify-between h-16">
							<div className="flex">
								<div className="flex-shrink-0 flex items-center">
									<img
										className="h-8 w-8"
										src="/logo.svg"
										alt="My Awesome App"
									/>
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
								Features
							</a>
							<a
								href="#"
								className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 block px-3 py-2 rounded-md text-base font-medium"
							>
								Pricing
							</a>
							<a
								href="#"
								className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 block px-3 py-2 rounded-md text-base font-medium"
							>
								Contact
							</a>
						</div>
					</div>
				</nav> */}

				{/* <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
					<div className="px-4 py-6 sm:px-0">
						<h1 className="text-4xl font-bold mb-4">
							Welcome to My Awesome App
						</h1>
						<p className="text-lg mb-8">
							My Awesome App is the best way to do awesome things.
							With our powerful features and intuitive interface,
							you'll be able to get things done faster and more
							efficiently than ever before.
						</p>

						<div className="grid grid-cols-3 gap-4">
							<div className="bg-white rounded-lg shadow-lg p-4">
								<h2 className="text-xl font-bold mb-2">
									Feature 1
								</h2>
								<p className="text-gray-600">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Sed euismod, sapien vel
									bibendum bibendum, velit sapien bibendum
									sapien, vel bibendum sapien velit.
								</p>
							</div>
							<div className="bg-white rounded-lg shadow-lg p-4">
								<h2 className="text-xl font-bold mb-2">
									Feature 2
								</h2>
								<p className="text-gray-600">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Sed euismod, sapien vel
									bibendum bibendum, velit sapien bibendum
									sapien, vel bibendum sapien velit.
								</p>
							</div>
							<div className="bg-white rounded-lg shadow-lg p-4">
								<h2 className="text-xl font-bold mb-2">
									Feature 3
								</h2>
								<p className="text-gray-600">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Sed euismod, sapien vel
									bibendum bibendum, velit sapien bibendum
									sapien, vel bibendum sapien velit.
								</p>
							</div>
						</div>

						<div className="mt-8">
							<a
								href="#"
								className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Sign up now
							</a>
						</div>
					</div>
				</div> */}
			</main>
		</div>
	);
}
