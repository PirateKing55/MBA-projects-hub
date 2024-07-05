'use client';

import { BACKEND_URL } from "@/app/config/config";
import { useState } from "react";
import { FilterComponent } from "./FilterComponent";
import { useEffect } from "react";
import axios from "axios";
import Link from 'next/link';
import { FaAward } from "react-icons/fa6";
import studentImg from "@/assets/images/student.png";
import Image from "next/image";
import curvedArrow from "@/assets/images/curve-arrow.png";
import arrow from "@/assets/images/arrow.png";
import shining from "@/assets/images/shining.png";
import downArrow from "@/assets/images/down-arrow.png";
import lights from "@/assets/images/lights.png";
import business from "@/assets/images/business.png";

export const Header = ({ router }) => {

    const [specializations, setSpecializations] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);


    useEffect(() => {
        axios.get(`${BACKEND_URL}/specializations/?category=MBA`).then((res) => {
            setSpecializations(res.data);
            setIsLoaded(true);
        });
    }, []);

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
        <div className={`${width < 500 ? "h-[99vh]" : "h-[95vh]"} overflow-hidden relative w-full px-6 sm:px-16 lg:pl-44 lg:pr-10 sm:h-[85vh] flex justify-between items-center text-blue-500 bg-blue-500`}>
            <div className="text-left w-full lg:w-2/5">
                <div className="flex gap-3 text-white font-medium text-base mb-5">
                    <Link href="/projects/all/all/all/1">
                        <span className="cursor-pointer">Projects</span>
                    </Link>
                    <span>//</span>
                    <Link href="/contact">
                        <span className="cursor-pointer">Contact</span>
                    </Link>
                </div>
                <div className="relative">
                    {/* <div className="hidden md:block absolute left-[-170px]"><Image src={closure} alt="closure" width={150} height={150} /></div> */}
                    <div className={`${width < 460 ? "text-2xl" : "text-4xl"} mb-8 sm:text-5xl font-bold text-white`}>
                        We specialize in expert tailored <span className="relative">
                            <Image className="absolute top-[-20px] right-[-40px]" src={shining} alt="stars" width={50} height={50} />
                            MBA
                        </span> projects.
                    </div>
                </div>
                {/* <div className="flex justify-stretch items-center">
                    <FilterComponent array={specializations} isLoaded={isLoaded} />
                </div> */}
                <div className="relative">
                    <Link href="/projects/all/all/all/1">
                        <button className="bg-white active:scale-105 text-blue-500 px-5 py-2 rounded-lg font-semibold hover:scale-105 transition text-lg duration-200">Projects</button>
                    </Link>
                    <Image className="absolute left-[130px] bottom-5 rotate-12" src={arrow} alt="arrow" width={50} height={50} />
                </div>
            </div>
            <div className="relative hidden lg:flex justify-center items-center gap-16 pl-32">
                <div className="absolute top-0 left-0 p-2 rounded-full border-[2px] border-white">
                    <div className=" p-5 rounded-full bg-white">
                        <FaAward className="text-blue-500 text-7xl" />
                    </div>
                </div>
                <Image src={studentImg} alt="student" width={500} height={500} />
                <div className="absolute animate-loop top-[-30px] left-[200px]">
                    <Image src={curvedArrow} alt="curved-arrow" width={130} height={130} />
                </div>
            </div>
            {width > 460 ? (<div className="block lg:hidden">
                <Image src={business} alt="business" width={600} height={600} />
            </div>) : (
                <div className="block lg:hidden">
                    <Image src={business} alt="business" width={900} height={900} />
                </div>
            )}
            <div className="w-full flex justify-center absolute left-0 bottom-0">
                <div className="absolute bottom-16 animate-upDown">
                    <Image src={downArrow} alt="down-arrow" width={50} height={50} />
                    <Image className="absolute bottom-5" src={downArrow} alt="down-arrow" width={50} height={50} />
                </div>
            </div>
            <div className="absolute right-[-28px] bottom-[-15px]">
                <Image src={lights} alt="lights" width={200} height={200} />
            </div>
        </div >
    );
}