'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

export const NavbarLanding = () => {
    const [count, setCount] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);

    const pathname = usePathname();

    const handleRender = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`${(!(pathname === "/") || (width < 500)) ? "hidden" : ""} bg-blue-500 pt-7 pb-2 px-10 sm:px-16 lg:px-40 h-[15vh]`}>
            <div className={` flex justify-between items-center h-[10vh] px-5 md:px-5 text-white border-[1px] border-white rounded-lg`}>
                <div className="font-semibold text-4xl">Navbar</div>
                <ul className="flex gap-5 md:gap-7 lg:gap-7 justify-center items-center font-medium">
                    <Link href="/">
                        <li onClick={handleRender} className={`${(pathname === "/") ? "border-white" : ""} border-b-2 border-blue-500 hover:border-white transition animation-100 cursor-pointer`}>Home</li>
                    </Link>
                    <Link href="/projects/all/all/all/1">
                        <li onClick={handleRender} className={`${pathname.includes("/projects") ? "border-white" : ""} border-b-2 border-blue-500 hover:border-white transition animation-100 cursor-pointer`}>Projects</li>
                    </Link>
                    <Link href="/contact">
                        <li onClick={handleRender} className={`${(pathname === "/contact") ? "border-white" : ""} border-b-2 border-blue-500 hover:border-white transition animation-100 cursor-pointer`}>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
};