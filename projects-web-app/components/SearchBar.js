import { BsSearch } from "react-icons/bs";

export const SearchBar = ({ onchange }) => {

    let timeoutId;
    const handleSearch = (e) => {
        // debouncing
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => { onchange(e.target.value); }, 300);
    }

    return (
        <div className="flex w-full shadow-md ">
            <input
                onChange={handleSearch}
                type="text"
                placeholder="Search for projects"
                className="border-[1px] border-slate-300 rounded-tl-lg rounded-bl-lg p-2 w-full text-slate-500 font-medium focus:outline-none focus:border-blue-500 focus:border-2"
            />
            <button
                // onClick={handleSearch}
                className="bg-blue-500 text-white font-bold rounded-tr-lg rounded-br-lg px-5">
                <BsSearch size={22} />
            </button>
        </div>
    );
}