'use client';

import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const Navbar = () => {
    const pathname = usePathname();
    const [count, setCount] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);
    const [isScrolled, setIsScrolled] = useState(false);

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


    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // const handleScroll = () => {
    //     if (window.scrollY > 50) {
    //         setIsScrolled(true);
    //     } else {
    //         setIsScrolled(false);
    //     }
    // };

    return (
        <div className={`${(pathname === "/" && width >= 500) ? "hidden" : ""} ${(pathname === "/") ? "" : "fixed top-0 left-0 right-0"} ${(width < 500) ? "fixed top-0 left-0 right-0" : ""} z-10 flex justify-between items-center h-[10vh] px-4 sm:px-10 md:px-20 bg-blue-500 text-white`}>
            <div className="font-semibold text-4xl">Navbar</div>
            {width > 500 ? (<ul className="flex gap-5 md:gap-7 lg:gap-7 justify-center items-center font-medium">
                <Link href="/">
                    <li onClick={handleRender} className={`${(pathname === "/") ? "border-white" : ""} border-b-2 border-blue-500 hover:border-white transition animation-100 cursor-pointer`}>Home</li>
                </Link>
                <Link href="/projects/all/all/all/1">
                    <li onClick={handleRender} className={`${pathname.includes("/projects") ? "border-white" : ""} border-b-2 border-blue-500 hover:border-white transition animation-100 cursor-pointer`}>Projects</li>
                </Link>
                <Link href="/contact">
                    <li onClick={handleRender} className={`${(pathname === "/contact") ? "border-white" : ""} border-b-2 border-blue-500 hover:border-white transition animation-100 cursor-pointer`}>Contact</li>
                </Link>
            </ul>) : (<div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="default" className="bg-blue-500 hover:bg-blue-500 px-2"><RxHamburgerMenu size={30} /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-0">
                        <DropdownMenuRadioGroup>
                            <Link href="/">
                                <DropdownMenuRadioItem onClick={handleRender} className={`${(pathname === "/") ? "bg-blue-500 text-white" : "bg-white text-blue-500"} font-medium text-base active:bg-blue-500 active:text-white hover:border-white transition animation-100 cursor-pointer`}>Home</DropdownMenuRadioItem>
                            </Link>
                            <Link href="/projects/all/all/all/1">
                                <DropdownMenuRadioItem onClick={handleRender} className={`${pathname.includes("/projects") ? "bg-blue-500 text-white" : "bg-white text-blue-500"} font-medium text-base active:bg-blue-500 active:text-white hover:border-white transition animation-100 cursor-pointer`}>Projects</DropdownMenuRadioItem>
                            </Link>
                            <Link href="/contact">
                                <DropdownMenuRadioItem onClick={handleRender} className={`${(pathname === "/contact") ? "bg-blue-500 text-white" : "bg-white text-blue-500"} font-medium text-base active:bg-blue-500 active:text-white hover:border-white transition animation-100 cursor-pointer`}>Contact</DropdownMenuRadioItem>
                            </Link>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>)}

        </div>
    );
}