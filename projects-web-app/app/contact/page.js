import { BiPhoneCall } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

export default function Contact() {
    return (
        <section className="mt-28 mb-10 m-auto w-full sm:w-[500px] lg:w-fit p-4 sm:p-16 rounded-xl sm:border-[1px] sm:border-[rgb(198,215,254)] flex gap-20 flex-wrap justify-center">
            <div className="bg-[rgb(228,236,254)] rounded-xl p-8 sm:p-16">
                <div className="border-b-[1px] border-[rgb(165,192,255)] flex gap-5 items-center pb-10 mb-10">
                    <div className="rounded-full border-[1px] border-[rgb(165,192,255)] p-3">
                        <div className="rounded-full bg-white p-3">
                            <BiPhoneCall className="text-blue-500 text-3xl" />
                        </div>
                    </div>
                    <div>
                        <p className="text-slate-600">Phone No.</p>
                        <p className="text-blue-500 font-semibold text-lg">000-000-0000</p>
                    </div>
                </div>
                <div className="border-b-[1px] border-[rgb(165,192,255)] flex gap-5 items-center pb-10 mb-10">
                    <div className="rounded-full border-[1px] border-[rgb(165,192,255)] p-3">
                        <div className="rounded-full bg-white p-3">
                            <IoMailOutline className="text-blue-500 text-3xl" />
                        </div>
                    </div>
                    <div>
                        <p className="text-slate-600">Email Address</p>
                        <p className="text-blue-500 font-semibold text-lg">000-000-0000</p>
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    <div className="rounded-full border-[1px] border-[rgb(165,192,255)] p-3">
                        <div className="rounded-full bg-white p-3">
                            <IoLocationOutline className="text-blue-500 text-3xl" />
                        </div>
                    </div>
                    <div className="w-36">
                        <p className="text-slate-600">Office Address</p>
                        <p className="text-blue-500 font-semibold text-lg">000-000-0000</p>
                    </div>
                </div>
            </div>
            <div className="rounded-xl flex flex-col w-[300px] sm:w-[400px]">
                <h2 className="text-slate-700 font-semibold text-3xl">Get in Touch <span className="text-blue-500">With Us.</span></h2>
                <input type="text" placeholder="Name" className="focus:outline-none text-slate-500 focus:border-blue-500 focus:border-[1px] w-full p-3 mt-5 rounded-md border-[1px] border-[rgb(183,204,254)]" />
                <input type="email" placeholder="Email" className="focus:outline-none text-slate-500 focus:border-blue-500 focus:border-[1px] w-full p-3 mt-5 rounded-md border-[1px] border-[rgb(183,204,254)]" />
                <input type="text" placeholder="Subject" className="focus:outline-none text-slate-500 focus:border-blue-500 focus:border-[1px] w-full p-3 mt-5 rounded-md border-[1px] border-[rgb(183,204,254)]" />
                <textarea placeholder="Your Message" className="flex-1 focus:outline-none text-slate-500 focus:border-blue-500 focus:border-[1px] w-full p-3 mt-5 rounded-md border-[1px] border-[rgb(183,204,254)]"></textarea>
                <button className="bg-blue-500 text-white font-semibold text-lg w-full p-3 mt-5 rounded-md hover:scale-105 transition duration-300">Send Message</button>
            </div>
        </section>
    );
}

// export default function Contact() {
//     return (
//         <section className="dark:bg-slate-800 pt-24" id="contact">
//             <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-10">
//                 <div>
//                     <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-10">
//                         <h2
//                             className="font-heading mb-4 font-bold tracking-tight text-blue-500 dark:text-white text-3xl sm:text-5xl">
//                             Get in Touch
//                         </h2>
//                         <p className="mx-auto mt-4 max-w-3xl text-xl text-slate-500 dark:text-slate-400">In hac habitasse platea
//                             dictumst
//                         </p>
//                     </div>
//                 </div>
//                 <div className="flex items-stretch justify-center">
//                     <div className="grid lg:grid-cols-2">
//                         <div className="h-full pr-6">
//                             <ul className="p-5 md:p-20 mb-6 md:mb-0">
//                                 <li className="flex">
//                                     <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-500 text-gray-50">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                                             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                                             stroke-linejoin="round" className="h-6 w-6">
//                                             <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
//                                             <path
//                                                 d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
//                                             </path>
//                                         </svg>
//                                     </div>
//                                     <div className="ml-4 mb-4">
//                                         <h3 className="mb-2 text-lg font-semibold leading-6 text-slate-500 dark:text-white">Our Address
//                                         </h3>
//                                         <p className="text-slate-500 dark:text-slate-400">1230 Maecenas Street Donec Road</p>
//                                         <p className="text-slate-500 dark:text-slate-400">New York, EEUU</p>
//                                     </div>
//                                 </li>
//                                 <li className="flex">
//                                     <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-500 text-gray-50">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                                             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                                             stroke-linejoin="round" className="h-6 w-6">
//                                             <path
//                                                 d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
//                                             </path>
//                                             <path d="M15 7a2 2 0 0 1 2 2"></path>
//                                             <path d="M15 3a6 6 0 0 1 6 6"></path>
//                                         </svg>
//                                     </div>
//                                     <div className="ml-4 mb-4">
//                                         <h3 className="mb-2 text-lg font-semibold leading-6 text-slate-500 dark:text-white">Contact
//                                         </h3>
//                                         <p className="text-slate-500 dark:text-slate-400">Mobile: +1 (123) 456-7890</p>
//                                         <p className="text-slate-500 dark:text-slate-400">Mail: tailnext@gmail.com</p>
//                                     </div>
//                                 </li>
//                                 <li className="flex">
//                                     <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-500 text-gray-50">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                                             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                                             stroke-linejoin="round" className="h-6 w-6">
//                                             <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
//                                             <path d="M12 7v5l3 3"></path>
//                                         </svg>
//                                     </div>
//                                     <div className="ml-4 mb-4">
//                                         <h3 className="mb-2 text-lg font-semibold leading-6 text-slate-500 dark:text-white">Working
//                                             hours</h3>
//                                         <p className="text-slate-500 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
//                                         <p className="text-slate-500 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
//                             <h2 className="mb-4 text-2xl font-bold text-slate-500 dark:text-white">Ready to Get Started?</h2>
//                             <form id="contactForm">
//                                 <div className="mb-6">
//                                     <div className="mx-0 mb-1 sm:mb-4">
//                                         <div className="mx-0 mb-1 sm:mb-4">
//                                             <label for="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autocomplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border text-slate-500 font-medium focus:outline-none focus:border-blue-500 focus:border-2 border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name"></input>
//                                         </div>
//                                         <div className="mx-0 mb-1 sm:mb-4">
//                                             <label for="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autocomplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border text-slate-500 font-medium focus:outline-none focus:border-blue-500 focus:border-2 border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"></input>
//                                         </div>
//                                     </div>
//                                     <div className="mx-0 mb-1 sm:mb-4">
//                                         <label for="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border text-slate-500 font-medium focus:outline-none focus:border-blue-500 focus:border-2 border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
//                                     </div>
//                                 </div>
//                                 <div className="text-center">
//                                     <button type="submit" className="w-full bg-blue-500 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }