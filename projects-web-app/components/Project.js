import { MdOutlineFileDownload } from "react-icons/md";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { useRouter } from 'next/navigation';
import projectImg from "@/assets/images/project.png";

export const Project = ({ project }) => {
    const router = useRouter();
    return (
        <div
            onClick={() => router.push(`/ProjectDetail/${project._id}`)}
            className="relative text-slate-500 w-full rounded-lg border-[1px] border-[rgb(212,224,252)] cursor-pointer"
        >
            <p className="absolute text-sm lg:text-base top-0 right-0 px-2 py-1 font-medium bg-blue-500 text-white rounded-tr-lg rounded-bl-lg">Rs. {project.cost}</p>
            <div className="p-5 pt-10 flex gap-5 flex-wrap justify-between">
                <div className="flex gap-3 w-full md:w-1/2">
                    <div
                        style={{ backgroundImage: `url(${projectImg.src})` }}
                        className="rounded-lg flex-shrink-0 w-20 h-20 bg-cover bg-center"></div>
                    {/* <div> */}
                    <h3 className="font-semibold flex-1 text-base lg:text-xl">{project.title}</h3>
                    {/* </div> */}
                </div>
                <div className="flex h-20 flex-wrap gap-3">
                    {/* <p className="w-24 font-normal text-xs lg:text-sm px-2 py-1 flex justify-center items-center bg-blue-500 text-white rounded-2xl">Project ID <span className="font-normal">: {project.projectID}</span></p>
                    <p className="font-normal text-xs lg:text-sm px-2 py-1 flex justify-center items-center bg-blue-500 text-white rounded-2xl">Pages <span className="font-normal">: {project.pages}</span></p>
                    <p className="font-normal text-xs lg:text-sm px-2 py-1 flex justify-center items-center bg-blue-500 text-white rounded-2xl">Delivery within <span className="font-normal">: {project.deliveryTime}</span></p> */}

                    <div className="w-20 h-20 sm:w-24 px-2 sm:px-0 sm:h-20 font-normal text-xs lg:text-sm text-center flex justify-center items-center bg-[rgb(228,236,254)] rounded-lg">
                        <div>
                            <p className="text-black">Project ID</p>
                            <p className="font-semibold text-lg text-blue-500">{project.projectID}</p>
                        </div>
                    </div>
                    <div className="w-20 h-20 sm:w-24 px-2 sm:px-0 sm:h-20 font-normal text-xs lg:text-sm text-center flex justify-center items-center bg-[rgb(228,236,254)] rounded-lg">
                        <div>
                            <p className="text-black">Pages</p>
                            <p className="font-semibold text-lg text-blue-500">{project.pages}</p>
                        </div>
                    </div>
                    <div className="w-20 h-20 sm:w-24 px-2 sm:px-0 sm:h-20 font-normal text-xs lg:text-sm text-center flex justify-center items-center bg-[rgb(228,236,254)] rounded-lg">
                        <div>
                            <p className="text-black">Delivery</p>
                            <p className="font-semibold text-lg text-blue-500">{project.deliveryTime}</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="py-2 px-5 bg-[rgb(228,236,254)] rounded-b-lg flex md:justify-between justify-end">
                <div className="font-semibold hidden md:block text-sm lg:text-base">
                    Topic Area: <span className="font-normal">{project.topicArea}</span>
                </div>
                <div className="flex gap-2 text-xs lg:text-sm">
                    <button className="px-2 py-1 bg-blue-500 text-white rounded-2xl flex gap-1 justify-center items-center">
                        <MdOutlineFileDownload size={18} />
                        <span>Download Project proposal</span>
                    </button>
                    <button className="px-2 py-1 bg-blue-500 text-white rounded-2xl flex gap-1 justify-center items-center">
                        <BiPurchaseTagAlt size={18} />
                        <span>Buy </span>
                    </button>
                </div>
            </div>
        </div >
    )
}


// import { MdOutlineFileDownload } from "react-icons/md";
// import { BiPurchaseTagAlt } from "react-icons/bi";
// import { useRouter } from 'next/navigation';

// export const Project = ({ project }) => {
//     const router = useRouter();
//     return (
//         <div
//             onClick={() => router.push(`/ProjectDetail/${project._id}`)}
//             className="relative text-slate-500 w-full rounded-lg border-[1px] border-slate-300 shadow-md cursor-pointer"
//         >
//             <h3 className="font-semibold text-base lg:text-xl m-2 mr-28">{project.title}</h3>
//             <p className="absolute text-sm lg:text-base top-0 right-0 px-2 py-1 font-medium bg-blue-500 text-white rounded-tr-lg rounded-bl-lg">Rs. {project.cost}</p>
//             <div className="flex flex-wrap gap-3 p-2">
//                 <p className="font-normal text-xs lg:text-sm px-2 py-1 flex justify-center items-center bg-blue-500 text-white rounded-2xl">Project ID <span className="font-normal">: {project.projectID}</span></p>
//                 <p className="font-normal text-xs lg:text-sm px-2 py-1 flex justify-center items-center bg-blue-500 text-white rounded-2xl">Pages <span className="font-normal">: {project.pages}</span></p>
//                 <p className="font-normal text-xs lg:text-sm px-2 py-1 flex justify-center items-center bg-blue-500 text-white rounded-2xl">Delivery within <span className="font-normal">: {project.deliveryTime}</span></p>
//             </div>
//             <div className="p-2 bg-slate-200 rounded-b-lg flex md:justify-between justify-end">
//                 <div className="font-semibold hidden md:block text-sm lg:text-base">
//                     Topic Area: <span className="font-normal">{project.topicArea}</span>
//                 </div>
//                 <div className="flex gap-2 text-xs lg:text-sm">
//                     <button className="px-2 py-1 bg-blue-500 text-white rounded-2xl flex gap-1 justify-center items-center">
//                         <MdOutlineFileDownload size={18} />
//                         <span>Download Project proposal</span>
//                     </button>
//                     <button className="px-2 py-1 bg-blue-500 text-white rounded-2xl flex gap-1 justify-center items-center">
//                         <BiPurchaseTagAlt size={18} />
//                         <span>Buy </span>
//                     </button>
//                 </div>
//             </div>
//         </div >
//     )
// }