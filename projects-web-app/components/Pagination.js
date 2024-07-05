"use client"

import { useRouter } from "next/navigation"
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";

export const Pagination = ({ pageNumber, category, specialization, topic, isFirstPage, isLastPage }) => {
    const router = useRouter();
    return (
        <div className="flex gap-1 m-auto mt-5 mb-10">
            {isFirstPage ? <button className="h-8 w-8 flex justify-center items-center text-blue-500 rounded-sm opacity-50" disabled><FaCaretLeft /></button> :
                <button className="h-8 w-8 flex justify-center items-center text-blue-500 rounded-sm active:bg-blue-500 active:text-white" onClick={() => { router.push(`/projects/${category}/${specialization}/${topic}/${Number(pageNumber) - 1}`) }}><FaCaretLeft /></button>}
            <span className="h-8 w-8 flex justify-center items-center text-white bg-blue-500 font-normal rounded-sm">{pageNumber}</span>
            {isLastPage ? <button className="h-8 w-8 flex justify-center items-center text-blue-500 rounded-sm opacity-50" disabled><FaCaretRight /></button> :
                <button className="h-8 w-8 flex justify-center items-center text-blue-500 rounded-sm active:bg-blue-500 active:text-white" onClick={() => { router.push(`/projects/${category}/${specialization}/${topic}/${Number(pageNumber) + 1}`) }}><FaCaretRight /></button>}
        </div >
    )
}