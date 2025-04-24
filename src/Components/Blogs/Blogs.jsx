
const Blogs = () => {
    return (
        <div>
            <section className="md:py-5 py-5">
                <div className="container px-3 md:mx-auto flex flex-col items-center gap-16 lg:px-16">

                    <div className="text-center">
                        <p className="mb-6 text-xs font-medium uppercase ">Tag Line</p>
                        <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
                            Blog Posts
                        </h2>
                        <p className="mb-8 text-zinc-700 md:text-base lg:max-w-2xl lg:text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat
                            omnis! Porro facilis quo animi consequatur. Explicabo.
                        </p>
                        <button
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-zinc-600 underline-offset-4 hover:underline h-10 px-4 py-2 w-full sm:w-auto">
                            Explore all posts<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="lucide lucide-arrow-right ml-2 size-4">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">

                        <a href="#" className="flex flex-col overflow-clip rounded-xl border ">
                            <div>
                                <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Wickedblocks "
                                    className="aspect-[16/9] h-full w-full object-cover object-center" />
                            </div>
                            <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl lg:mb-6">
                                    Understanding Component Libraries and Their Benefits
                                </h3>
                                <p className="mb-3 text-zinc-600 md:mb-4 lg:mb-6">
                                    Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis
                                    metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.
                                </p>
                                <p className="flex items-center hover:underline">
                                    Read more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-arrow-right ml-2 size-4">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </p>
                            </div>
                        </a>

                        <a href="#" className="flex flex-col overflow-clip rounded-xl border ">
                            <div>
                                <img src="https://images.pexels.com/photos/414523/pexels-photo-414523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Wickedblocks "
                                    className="aspect-[16/9] h-full w-full object-cover object-center" />
                            </div>
                            <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl lg:mb-6">
                                    Top 5 Component Libraries for React Developers
                                </h3>
                                <p className="mb-3 text-zinc-600 md:mb-4 lg:mb-6">
                                    Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis
                                    metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.
                                </p>
                                <p className="flex items-center hover:underline">
                                    Read more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-arrow-right ml-2 size-4">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </p>
                            </div>
                        </a>

                        <a href="#" className="flex flex-col overflow-clip rounded-xl border ">
                            <div>
                                <img src="https://images.pexels.com/photos/5895915/pexels-photo-5895915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Wickedblocks "
                                    className="aspect-[16/9] h-full w-full object-cover object-center" />
                            </div>
                            <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl lg:mb-6">
                                    to Choose the Right Component Library for Your Project
                                </h3>
                                <p className="mb-3 text-zinc-600 md:mb-4 lg:mb-6">
                                    Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis
                                    metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.
                                </p>
                                <p className="flex items-center hover:underline">
                                    Read more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-arrow-right ml-2 size-4">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </p>
                            </div>
                        </a>



                        <a href="#" className="flex flex-col overflow-clip rounded-xl border ">
                            <div>
                                <img src="https://images.pexels.com/photos/5895915/pexels-photo-5895915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Wickedblocks "
                                    className="aspect-[16/9] h-full w-full object-cover object-center" />
                            </div>
                            <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl lg:mb-6">
                                    to Choose the Right Component Library for Your Project
                                </h3>
                                <p className="mb-3 text-zinc-600 md:mb-4 lg:mb-6">
                                    Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis
                                    metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.
                                </p>
                                <p className="flex items-center hover:underline">
                                    Read more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-arrow-right ml-2 size-4">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </p>
                            </div>
                        </a>

                        <a href="#" className="flex flex-col overflow-clip rounded-xl border ">
                            <div>
                                <img src="https://images.pexels.com/photos/414523/pexels-photo-414523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Wickedblocks "
                                    className="aspect-[16/9] h-full w-full object-cover object-center" />
                            </div>
                            <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl lg:mb-6">
                                    Top 5 Component Libraries for React Developers
                                </h3>
                                <p className="mb-3 text-zinc-600 md:mb-4 lg:mb-6">
                                    Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis
                                    metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.
                                </p>
                                <p className="flex items-center hover:underline">
                                    Read more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-arrow-right ml-2 size-4">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </p>
                            </div>
                        </a>

                        <a href="#" className="flex flex-col overflow-clip rounded-xl border ">
                            <div>
                                <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Wickedblocks "
                                    className="aspect-[16/9] h-full w-full object-cover object-center" />
                            </div>
                            <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl lg:mb-6">
                                    Understanding Component Libraries and Their Benefits
                                </h3>
                                <p className="mb-3 text-zinc-600 md:mb-4 lg:mb-6">
                                    Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis
                                    metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.
                                </p>
                                <p className="flex items-center hover:underline">
                                    Read more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-arrow-right ml-2 size-4">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </p>
                            </div>
                        </a>


                    </div>

                </div>
            </section>
        </div>

    )
}

export default Blogs