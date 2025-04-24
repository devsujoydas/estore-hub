import React from 'react'

const Hero = () => {
  return (
    <div className='portfolio-bg-hero bg-cover bg-no-repeat md:py-0 pt-24'>
      <div className='grid  grid-cols-1 md:grid-cols-3 gap-2 container mx-auto md:min-h-[800px] overflow-hidden'>

        <div className=' z-10 col-span-1 text-4xl  flex justify-center items-center md:text-left text-center flex-col'>
          <h1 className="md:text-4xl ">Hello! I am <br />
            <span className="font-semibold md:text-7xl text-5xl text-blue-700"> Sujoy Das.</span></h1>
        </div>


        <div className='flex col-span-2 gap-2 md:flex-row flex-col-reverse'>

          <div className='relative w-full  flex items-end'>
            <img src="https://pxdraft.com/react/kanye/img/user-image.png" alt="" className='relative z-10' />
            <div className='md:block hidden bg-white h-[80vh] w-[80vh] rounded-full shadow-2xl absolute top-20 -left-26'></div>
          </div>

          <div className=' w-full z-10 md:mt-0 mt-5  flex  md:justify-center items-center flex-col'>
            <h1 className="md:text-3xl font-semibold">Welcome to <span className="md:text-4xl "> eStore_Hub</span></h1>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Hero