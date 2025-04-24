import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <div>
            <section className="md:py-24 py-10">
                <div className="container md:mx-auto px-5">
                    <footer>
                        <a href='/'><h1 className=' text-2xl text-blue-600 italic font-bold font-carter-one'>ESTORE_HUB</h1></a>
                        <div className="md:mt-14 mt-5 grid md:gap-8 gap-5 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4">
                            <div>
                                <h3 className="md:mb-4 mb-2 font-bold">Company</h3>
                                <ul className=" md:space-y-4 space-y-1 text-zinc-600">
                                    <li className="font-medium hover:text-gray-800"><Link to={"/"}>Home</Link> </li>
                                    <li className="font-medium hover:text-gray-800"><Link to={"/profile"}>Profile</Link>   </li>
                                    <li className="font-medium hover:text-gray-800"><Link to={"/projects"}>Projects</Link> </li>
                                    <li className="font-medium hover:text-gray-800"><Link to={"/about"}>About</Link>   </li>
                                    <li className="font-medium hover:text-gray-800"><Link to={"/courses"}>Courses</Link>   </li>
                                    <li className="font-medium hover:text-gray-800"><Link to={"/products"}>Products</Link> </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="md:mb-4 mb-2 font-bold">Product</h3>
                                <ul className=" md:space-y-4 space-y-1 text-zinc-600">
                                    <li className="font-medium hover:text-gray-800"><Link to={"/"}>Overview</Link> </li>
                                    <li className="font-medium hover:text-gray-800"><Link to={"/"}>Pricing</Link>  </li>
                                    <li className="font-medium hover:text-gray-800"><Link to={"/"}>Marketplace</Link>  </li>
                                    <li className="font-medium hover:text-gray-800"><Link to={"/"}>Features</Link> </li>
                                    <li className="font-medium hover:text-gray-800"><Link to={"/"}>Integrations</Link> </li>
                                    <li className="font-medium hover:text-gray-800"><Link to={"/"}>Pricing</Link>  </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="md:mb-4 mb-2 font-bold">Resources</h3>
                                <ul className=" md:space-y-4 space-y-1 text-zinc-600">
                                    <li className="font-medium hover:text-gray-800"><Link to={"/"}>Help</Link> </li>
                                    <li className="font-medium hover:text-gray-800"><Link to={"/"}>Sales</Link></li>
                                    <li className="font-medium hover:text-gray-800"><Link to={"/"}>Advertise</Link></li>
                                </ul>
                            </div>
                            <div className="lg:col-span-2 xl:col-span-1">
                                <ul className="mb-10 flex items-center gap-2 text-zinc-600">
                                    <li className="font-medium">
                                        <a href="#"><span
                                            className="flex size-12 items-center justify-center rounded-full bg-zinc-100 transition-colors hover:text-gray-800"><svg
                                                stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="size-6"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z">
                                                </path>
                                            </svg></span></a>
                                    </li>
                                    <li className="font-medium">
                                        <a href="#"><span
                                            className="flex size-12 items-center justify-center rounded-full bg-zinc-100 transition-colors hover:text-gray-800"><svg
                                                stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="size-6"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z">
                                                </path>
                                            </svg></span></a>
                                    </li>
                                    <li className="font-medium">
                                        <a href="#"><span
                                            className="flex size-12 items-center justify-center rounded-full bg-zinc-100 transition-colors hover:text-gray-800"><svg
                                                stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="size-6"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                                </path>
                                            </svg></span></a>
                                    </li>
                                    <li className="font-medium">
                                        <a href="#"><span
                                            className="flex size-12 items-center justify-center rounded-full bg-zinc-100 transition-colors hover:text-gray-800"><svg
                                                stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="size-6"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z">
                                                </path>
                                            </svg></span></a>
                                    </li>
                                    <li className="font-medium">
                                        <a href="#"><span
                                            className="flex size-12 items-center justify-center rounded-full bg-zinc-100 transition-colors hover:text-gray-800"><svg
                                                stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="size-6"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
                                                </path>
                                            </svg></span></a>
                                    </li>
                                </ul>
                                <div className="grid w-full  items-center gap-1.5">
                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="email">Subscribe to our newsletter</label>
                                    <div className="flex w-full  items-center space-x-2">
                                        <input type="email"
                                            className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="Email" />
                                            <button
                                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2"
                                                type="submit">
                                            Subscribe
                                        </button>
                                    </div>
                                    <p className="mt-1 text-xs text-zinc-600">
                                        By submitting, you agree to our<a href="#" className="ml-1 text-gray-800 hover:underline">Privacy Policy</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="md:mt-20 mt-10 flex flex-col flex-wrap justify-between gap-4 border-t pt-8 text-sm font-medium text-zinc-600 md:flex-row md:items-center">
                            <p>© 2025 Sujoy Das. All rights reserved.</p>
                            <ul className="flex gap-4">
                                <li className="whitespace-nowrap underline hover:text-gray-800">
                                    <a href="#">Terms and Conditions</a>
                                </li>
                                <li className="whitespace-nowrap underline hover:text-gray-800">
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </section>
        </div>
    )
}

export default Footer