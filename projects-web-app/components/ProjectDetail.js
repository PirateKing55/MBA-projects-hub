import { MdOutlineFileDownload } from "react-icons/md";
import { BiPurchaseTagAlt } from "react-icons/bi";

export const ProjectDetail = ({ project }) => {
    return (
        <div className="w-full px-5 pb-5 m-auto flex gap-10 justify-center flex-wrap">
            <div className="w-[700px]">
                <h2 className="font-medium text-2xl text-slate-600 mb-2">{project.title}</h2>
                <p className="text-blue-500 font-normal text-sm mb-5">Bought by {project.sold ? project.sold : "100"} people <span className="text-slate-400">|| </span><span className="bg-blue-500 text-white px-2 py-1 rounded-md">Rating: {project.rating ? project.rating : "5.0"}/5.0</span></p>
                <button className="m-auto my-5 px-2 py-2 w-[250px] hover:scale-105 transition duration-300 bg-blue-500 text-white rounded-md flex gap-1 justify-center items-center">
                    <MdOutlineFileDownload size={18} />
                    <span>Download Project proposal</span>
                </button>
                <h2 className="font-medium text-xl text-slate-600 mb-3">Description:</h2>
                <p className="text-slate-500">{project.description ? project.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
            </div>
            <div className="bg-[rgb(228,236,254)] border-[rgb(198,215,254)] border-[1px] py-10 px-7 rounded-lg w-[350px] flex flex-col items-center">
                <h2 className="font-bold text-blue-500 text-3xl border-[rgb(171,196,252)] border-b-[1px] text-center w-full pb-10">Rs. {project.cost}</h2>
                <div className="flex justify-between border-[rgb(171,196,252)] border-b-[1px] w-full py-3">
                    <div className="font-semibold text-slate-600">Topic Area</div>
                    <div className="text-slate-500 w-[130px] text-end">{project.topicArea}</div>
                </div>
                <div className="flex justify-between border-[rgb(171,196,252)] border-b-[1px] w-full py-3">
                    <div className="font-semibold text-slate-600">Specialization</div>
                    <div className="text-slate-500  w-[130px] text-end">{project.specialization}</div>
                </div>
                <div className="flex justify-between border-[rgb(171,196,252)] border-b-[1px] w-full py-3">
                    <div className="font-semibold text-slate-600">Pages</div>
                    <div className="text-slate-500  w-[130px] text-end">{project.pages}</div>
                </div>
                <div className="flex justify-between border-[rgb(171,196,252)] border-b-[1px] w-full py-3">
                    <div className="font-semibold text-slate-600">Delivery Withing</div>
                    <div className="text-slate-500  w-[130px] text-end">{project.deliveryTime}</div>
                </div>
                <div className="flex justify-between border-[rgb(171,196,252)] border-b-[1px] w-full py-3">
                    <div className="font-semibold text-slate-600">Project ID</div>
                    <div className="text-slate-500  w-[130px] text-end">{project.projectID}</div>
                </div>
                <button className="text-white bg-blue-500 text-xl font-semibold px-5 py-3 mt-10 rounded-lg hover:scale-105 transition duration-300">Buy Now</button>
            </div>
        </div >
    )
}

// import { MdOutlineFileDownload } from "react-icons/md";
// import { BiPurchaseTagAlt } from "react-icons/bi";

// export const ProjectDetail = ({ project }) => {
//     return (
//         <div className="relative text-slate-500 w-5/6 md:w-4/6 m-auto">
//             <h2 className="font-bold text-blue-500 text-4xl text-center mb-5">Project Details</h2>
//             <h3 className="font-semibold text-base lg:text-2xl mb-5">{project.title}</h3>
//             <p className="font-semibold text-sm lg:text-base">Description:</p>
//             <p className="text-sm lg:text-base mb-5">
//                 {project.description ? project.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
//             {/* <p className="absolute text-sm lg:text-base top-0 right-0 px-2 py-1 font-medium bg-blue-500 text-white rounded-tr-lg rounded-bl-lg">Rs. {project.cost}</p> */}
//             <div className="font-semibold text-sm lg:text-base">
//                 Specialization: <span className="font-normal">{project.specialization}</span>
//             </div>
//             <div className="font-semibold text-sm lg:text-base mb-5">
//                 Topic Area: <span className="font-normal">{project.topicArea}</span>
//             </div>
//             <div className="flex flex-wrap gap-3 mb-7 justify-center items-center">
//                 <p className="font-normal text-xs lg:text-sm px-2 py-1 flex justify-center items-center bg-blue-500 text-white rounded-2xl">Project ID <span className="font-normal">: {project.projectID}</span></p>
//                 <p className="font-normal text-xs lg:text-sm px-2 py-1 flex justify-center items-center bg-blue-500 text-white rounded-2xl">Pages <span className="font-normal">: {project.pages}</span></p>
//                 <p className="font-normal text-xs lg:text-sm px-2 py-1 flex justify-center items-center bg-blue-500 text-white rounded-2xl">Delivery within <span className="font-normal">: {project.deliveryTime}</span></p>
//             </div>
//             {/* <div className="relative"> */}
//             <div className="text-center flex flex-wrap justify-center mb-5 gap-3 text-xs lg:text-sm">
//                 <button className="px-2 py-2 w-[220px] hover:scale-105 transition duration-300 bg-blue-500 text-white rounded-md flex gap-1 justify-center items-center">
//                     <MdOutlineFileDownload size={18} />
//                     <span>Download Project proposal</span>
//                 </button>
//                 <button className="px-2 py-2 w-[220px] hover:scale-105 transition duration-300 bg-blue-500 text-white rounded-md flex gap-1 justify-center items-center">
//                     <BiPurchaseTagAlt size={18} />
//                     <span>Buy Now @ Rs. {project.cost} </span>
//                 </button>
//             </div>
//             {/* </div> */}
//         </div >
//     )
// }