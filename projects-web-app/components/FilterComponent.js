"use client";

import { useRouter } from 'next/navigation';

export const FilterComponent = ({ array, isLoaded }) => {
    return (
        <div className={`${isLoaded ? "" : "bg-black opacity-15 p-5 w-full h-20 rounded-xl"} flex gap-3 flex-wrap`}>
            {array.map((item, index) => (
                <FilterItems key={index} item={item} />
            ))}
        </div>
    );
};

const FilterItems = ({ item }) => {

    const router = useRouter()

    const handleClick = () => {
        router.push(`/projects/MBA/${item}/all/1`);
    };

    return (
        <div
            onClick={handleClick}
            className="py-[1px] px-3 bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-semibold rounded-full border-[2px] border-white cursor-pointer transition animation-200">
            {item}
        </div>
    );
};