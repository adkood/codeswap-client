import { themes } from "@/Utils/themes";
import { getRandomValues, randomInt } from "crypto";
import Link from "next/link";
import React from "react";
import { CgDarkMode } from "react-icons/cg";
import { MdSwapCalls } from "react-icons/md";
function getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const Navbar: React.FC<{ setTheme: any }> = ({ setTheme }) => {
    const themeChangeHandler = () => {
        setTheme((prev: string) =>
            prev == "default" ? "default2" : "default"
        );
        // setTheme(() => "light");
    };
    return (
        <div className="navbar bg-secondary h-24">
            <div className="flex-1 pl-2 h-full">
                <Link
                    className=" flex items-center h-full normal-case text-gray-600 text-3xl font-bold  tracking-tight leading-none md:text-4xl lg:text-5xl "
                    href="/"
                >
                    {/* <MdSwapCalls className="ml-2 text-5xl" /> */}

                    <text>CodeSwap</text>
                </Link>
            </div>
            <div className="flex-none">
                <ul className=" menu menu-horizontal px-1">
                    <li>
                        <button className="btn" onClick={themeChangeHandler}>
                            <CgDarkMode className="text-2xl " />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
