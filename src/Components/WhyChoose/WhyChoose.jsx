import React from 'react'

const WhyChoose = () => {
    return (
        <div>
            <section className="md:py-10 py-5 ">
                <div className="container md:mx-auto lg:px-16 px-5">
                    <p className="mb-4 text-sm text-zinc-600 lg:text-base">OUR VALUES</p>
                    <h2 className="text-3xl font-medium lg:text-4xl">Why Choose Us?</h2>
                    <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
                        <div className="rounded-lg bg-zinc-100 p-5">
                            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-white"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="lucide lucide-timer size-6">
                                <line x1="10" x2="14" y1="2" y2="2"></line>
                                <line x1="12" x2="15" y1="14" y2="11"></line>
                                <circle cx="12" cy="14" r="8"></circle>
                            </svg></span>
                            <h3 className="mb-2 text-xl font-medium">Performance</h3>
                            <p className="leading-7 text-zinc-600">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut
                                blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.
                            </p>
                        </div>
                        <div className="rounded-lg bg-zinc-100 p-5">
                            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-white"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="lucide lucide-zoom-in size-6">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
                                <line x1="11" x2="11" y1="8" y2="14"></line>
                                <line x1="8" x2="14" y1="11" y2="11"></line>
                            </svg></span>
                            <h3 className="mb-2 text-xl font-medium">Quality</h3>
                            <p className="leading-7 text-zinc-600">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut
                                blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.
                            </p>
                        </div>
                        <div className="rounded-lg bg-zinc-100 p-5">
                            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-white"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="lucide lucide-zap size-6">
                                <path
                                    d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
                                </path>
                            </svg></span>
                            <h3 className="mb-2 text-xl font-medium">Innovation</h3>
                            <p className="leading-7 text-zinc-600">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut
                                blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WhyChoose