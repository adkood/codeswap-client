import Image from "next/image";
import { Inter } from "next/font/google";

import Navbar from "@/Components/Navbar/Navbar";
import HomePage from "@/Components/Home/HomePage";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
    return <HomePage />;
}
