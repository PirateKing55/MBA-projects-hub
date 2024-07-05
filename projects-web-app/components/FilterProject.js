"use client";

export const FilterProject = ({ title, array, onclick, specialization, topic }) => {
    return (
        <div className="text-slate-500 w-full rounded-lg border-[1px] border-slate-300 shadow-md p-2 my-5">
            <h2 className="font-semibold text-xl">Filter by {title}:</h2>
            <div className="flex gap-2 lg:gap-3  flex-wrap my-2">
                {array.map((item, index) => {
                    if (specialization) {
                        if (item === specialization) {
                            return <FilterItems key={index} item={item} onclick={onclick} isSelected={true} />
                        }
                    } else if (topic) {
                        if (item === topic) {
                            return <FilterItems key={index} item={item} onclick={onclick} isSelected={true} />
                        }
                    }
                    return <FilterItems key={index} item={item} onclick={onclick} isSelected={false} />
                })}
            </div>
        </div>
    );
};

const FilterItems = ({ item, onclick, isSelected }) => {

    const handleClick = () => {
        onclick(item);
    };

    return (
        <div
            onClick={handleClick}
            className={`text-sm lg:text-lg py-1 px-3 ${isSelected ? "bg-blue-500 text-white" : "bg-white text-blue-500 "} font-semibold rounded-full cursor-pointer border-[1px] border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300`}>
            {item}
        </div>
    );
};