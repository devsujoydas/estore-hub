import moment from 'moment';
const Hero = () => {
  return (
    <div>
      <div className="w-full hero-bg bg-center bg-cover h-[48rem]" >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className='text-white text-2xl font-semibold font-poppine'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h1>
            <h1 className="text-3xl flex flex-wrap justify-center items-center gap-2 font-semibold text-white lg:text-4xl">
              Welcome To Our
              <a href='/' className= "text-3xl text-blue-200 italic font-bold font-carter-one">ESTORE_HUB</a>
            </h1>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero