
const About = () => {
    return (
        <div>
            <div className="container mx-auto md:px-0 px-5 ">
                <h1 className="text-5xl font-semibold text-center my-10">About Me</h1>

                <div className="flex justify-center md:flex-row flex-col items-center gap-14">
                    <div>
                        <img src="https://pxdraft.com/react/kanye/img/about-me.png" alt="" />
                    </div>

                    <div className="space-y-8">



                        <h1 className="text-xl text-blue-900 font-semibold">MY INTRO</h1>

                        <h1 className="text-4xl">I am<span className="font-semibold"> Sujoy Das.</span></h1>
                        
                        <p className="text-2xl">A lead Frontend Developer based in Bangladesh</p>

                        <p className="text-gray-500">I design and develop services for customers of all sizes, specializing <br /> in creating stylish, modern websites, web services and online stores. <br /> My passion is to design digital user experiences through the bold <br /> interface and meaningful interactions. Check out my Portfolio.</p>
                        <p className="text-gray-500">I like work with new people. New people new Experiences.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                            <div className="space-y-2">
                                <h1>Birthday : <span>2th October 2003</span></h1>
                                <h1>Age : <span>22 years</span></h1>
                                <h1>Address : <span>Bangladesh</span></h1>
                            </div>
                            <div className="space-y-2">
                                <h1>Phone : <a href="">+880 1303-436299</a></h1>
                                <h1>Email : <a href="mailto:sdsujoy920243@gmail.com">sdsujoy920243@gmail.com</a></h1>
                                <h1>Facebook : <a href="www.facebook.com/sujoydas36">Sujoy Das</a></h1>
                            </div>
                        </div>

                        <a target="bla" href="/Sujoy Das Resume.pdf" className="">
                            <div  className="w-fit bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-600 cursor-pointer active:scale-95 hover:-translate-y-1 transition-all">Download CV</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About