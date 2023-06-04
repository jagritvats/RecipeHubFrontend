import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";

import app from "../firebase";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    // console.log(app);
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between  md:p-16 lg:p-24 ${inter.className}`}
        >
            <main className="bg-gray-100 min-h-screen">
                <Hero />
            </main>
        </main>
    );
}
