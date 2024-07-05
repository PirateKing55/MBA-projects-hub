import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"

export const LandingPage = () => {
    return (
        <div>
            <section className="bg-white py-12 md:py-16 lg:py-20">
                <div className="container px-4 md:px-6 m-auto">
                    <Heading title={"Tailored for Your Success"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing eli."} />
                    <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 px-10 sm:px-0">
                        <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md dark:bg-gray-950">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
                                <AwardIcon className="h-8 w-8 text-blue-500" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-slate-500">Lorem Ipsum</h3>
                            <p className="mt-2 text-sm text-slate-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing eli.
                            </p>
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md dark:bg-gray-950">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
                                <AwardIcon className="h-8 w-8 text-blue-500" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-slate-500">Lorem Ipsum</h3>
                            <p className="mt-2 text-sm text-slate-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing eli.
                            </p>
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md dark:bg-gray-950">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
                                <AwardIcon className="h-8 w-8 text-blue-500" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-slate-500">Lorem Ipsum</h3>
                            <p className="mt-2 text-sm text-slate-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing eli.
                            </p>
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md dark:bg-gray-950">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
                                <AwardIcon className="h-8 w-8 text-blue-500" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-slate-500">Lorem Ipsum</h3>
                            <p className="mt-2 text-sm text-slate-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing eli.
                            </p>
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md dark:bg-gray-950">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
                                <AwardIcon className="h-8 w-8 text-blue-500" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-slate-500">Lorem Ipsum</h3>
                            <p className="mt-2 text-sm text-slate-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing eli.
                            </p>
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md dark:bg-gray-950">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
                                <AwardIcon className="h-8 w-8 text-blue-500" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-slate-500">Lorem Ipsum</h3>
                            <p className="mt-2 text-sm text-slate-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing eli.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full pb-12 md:pb-20 lg:pb-28 bg-white dark:bg-gray-950">
                <div className="container grid max-w-6xl items-center gap-8 px-4 md:px-6 m-auto">
                    <Heading title={"What Our Customers Say"} text={"Hear from our satisfied customers about their experience with our products."} />
                    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3 px-10 sm:px-24 md:px-36 lg:px-0">
                        <div className="rounded-lg border border-blue-500 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-gray-900">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-blue-500">John Doe</h3>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    <StarIcon className="h-5 w-5" />
                                    <StarIcon className="h-5 w-5" />
                                    <StarIcon className="h-5 w-5" />
                                    <StarIcon className="h-5 w-5" />
                                    <StarIcon className="h-5 w-5" />
                                </div>
                            </div>
                            <p className="mt-4 text-slate-500">
                                &quot;The product has exceeded my expectations. It&apos;s easy to use and has helped me streamline my workflow.&quot;
                            </p>
                        </div>
                        <div className="rounded-lg border border-blue-500 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-gray-900">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-blue-500">Jane Smith</h3>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    <StarIcon className="h-5 w-5" />
                                    <StarIcon className="h-5 w-5" />
                                    <StarIcon className="h-5 w-5" />
                                    <StarIcon className="h-5 w-5" />
                                    <StarIcon className="h-5 w-5" />
                                </div>
                            </div>
                            <p className="mt-4 text-slate-500">
                                &quot;I&apos;m amazed by the level of customer support. They were always there to help me whenever I had a
                                question.&quot;
                            </p>
                        </div>
                        <div className="rounded-lg border border-blue-500 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-gray-900">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-blue-500">Michael Johnson</h3>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    <StarIcon className="h-5 w-5" />
                                    <StarIcon className="h-5 w-5" />
                                    <StarIcon className="h-5 w-5" />
                                    <StarIcon className="h-5 w-5" />
                                    <StarIcon className="h-5 w-5" />
                                </div>
                            </div>
                            <p className="mt-4 text-slate-500">
                                &quot;The product is incredibly versatile and has helped me achieve my business goals. I highly recommend it.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white pb-12 md:pb-16 lg:pb-20">
                <div className="container mx-auto px-4 md:px-6">
                    <Heading title={"Our Top Selling Projects"} text={"Explore our collection of high-quality MBA project templates."} />
                    <div className="flex justify-center items-center pt-10">
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-9/12 md:w-11/12 lg:w-10/12 xl:w-9/12"
                        >
                            <CarouselContent>
                                <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                                    <Card
                                        title="Lorem ipsum dolor sit amet, consectetur adipiscing eli."
                                        price="₹500"
                                        pages="100"
                                        topic="Marketing"
                                        specialization="Finance"
                                    />
                                </CarouselItem>
                                <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                                    <Card
                                        title="Lorem ipsum dolor sit amet, consectetur adipiscing eli."
                                        price="₹500"
                                        pages="100"
                                        topic="Marketing"
                                        specialization="Finance"
                                    />
                                </CarouselItem>
                                <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                                    <Card
                                        title="Lorem ipsum dolor sit amet, consectetur adipiscing eli."
                                        price="₹500"
                                        pages="100"
                                        topic="Marketing"
                                        specialization="Finance"
                                    />
                                </CarouselItem>
                                <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                                    <Card
                                        title="Lorem ipsum dolor sit amet, consectetur adipiscing eli."
                                        price="₹500"
                                        pages="100"
                                        topic="Marketing"
                                        specialization="Finance"
                                    />
                                </CarouselItem>
                                <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                                    <Card
                                        title="Lorem ipsum dolor sit amet, consectetur adipiscing eli."
                                        price="₹500"
                                        pages="100"
                                        topic="Marketing"
                                        specialization="Finance"
                                    />
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="text-blue-500 hover:bg-blue-500 hover:text-white" />
                            <CarouselNext className="text-blue-500 hover:bg-blue-500 hover:text-white" />
                        </Carousel>
                    </div>
                </div>
            </section>
        </div>

    )
};

function Card({ title, price, pages, specialization, topic }) {
    return (
        <div className="cursor-pointer rounded-lg border border-blue-500 bg-white text-slate-500 hover:bg-blue-500 hover:text-white transition duration-00 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
            <div className="flex flex-col space-y-1.5 p-3">
                <h3 className="text-xl font-semibold leading-none tracking-tight mb-3">{title}</h3>
                <p className="text-md font-semibold dark:text-gray-400">Specialization: <span className="font-normal">{specialization}</span></p>
                <p className="text-md font-semibold dark:text-gray-400">Topic area: <span className="font-normal">{topic}</span></p>
                <div className="flex gap-2 pt-5">
                    <p className="text-sm dark:text-gray-400 font-semibold bg-blue-500 rounded-xl px-2 text-white">Price: <span className="font-normal">{price}</span></p>
                    <p className="text-sm dark:text-gray-400 font-semibold bg-blue-500 rounded-xl px-2 text-white">Pages: <span className="font-normal">{pages}</span></p>
                </div>
            </div>
        </div>
    )
}

function StarIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}


function AwardIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
    )
}

function Heading({ title, text }) {
    return (
        <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-blue-500 sm:text-4xl md:text-5xl">
                {title}
            </h2>
            <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {text}
            </p>
        </div>
    )

}
