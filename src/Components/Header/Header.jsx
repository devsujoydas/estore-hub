import { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from '../../Firebase/AuthProvider';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const navigate = useNavigate()

  const { user, signOutUser } = useContext(AuthContext)
  const navigateProfle = () => {
    navigate("/profile")
    setShowProfile(!showProfile)
    setIsOpen(!isOpen)
  }

  const signOutHander = () => {
    signOutUser()
      .then(() => {
        console.log("Sign Out Successfull");
      })
      .catch((error) => {
        console.log(error.message);
      });
    navigate("/login")
    setShowProfile(!showProfile)
    setIsOpen(!isOpen)
  }




  return (
    <nav className='relative bg-[#E4EBFE]  dark:bg-gray-800'>
      <div className='container px-6 py-4 mx-auto'>
        <div className='lg:flex lg:items-center lg:justify-between'>
          <div className='flex items-center justify-between'>
            <a href='/'>
              <h1 className=' text-2xl text-blue-600 italic font-bold font-carter-one'>ESTORE_HUB </h1>
            </a>

            {/* Mobile menu button */}
            <div className='flex lg:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='text-gray-500 text-4xl dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none'
                aria-label='toggle menu'
              >
                {isOpen ? (
                  <IoClose />
                ) : (
                  <GiHamburgerMenu />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}
          >
            <div onClick={() => setIsOpen(!isOpen)} className='flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8'>

              <NavLink to={'/'} className='px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'> Home </NavLink>

              <NavLink to={'/about'} className='px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'> About </NavLink>
             

              <NavLink to={'/projects'} className='px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'> Projects </NavLink>

              {!user && <NavLink to={'/login'} className='px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'> Log In </NavLink>}

            </div>

            <div className='flex items-center mt-4 lg:mt-0'>
              <button
                className='hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none'
                aria-label='show notifications'
              >
                <svg className='w-6 h-6' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </button>



              <div>

                <button onClick={() => { setShowProfile(!showProfile) }} className='flex justify-center items-center gap-2 cursor-pointer'>

                  {user
                    ?
                    <img alt="Profile Img" src={user?.photoURL} className=" h-12 w-12  rounded-full active:scale-95 transition-all " />

                    :
                    <div className='overflow-hidden active:scale-95 rounded-full'>
                      <img alt="Profile Img" src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" className=" h-12 w-12   scale-150 transition-all " />
                    </div>
                  }
                  <h1>Hi! <span className='font-semibold'>{user?.displayName}</span></h1>
                </button>

                {showProfile && user &&
                  <ul className="absolute mt-2  z-10 flex min-w-[180px] text-black flex-col gap-2 overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-poppins shadow-lg " >

                    <button onClick={() => { navigateProfle() }} className="py-2 cursor-pointer active:scale-95  rounded-md lg:mt-0  hover:bg-gray-200 dark:hover:bg-gray-700 text-xl flex justify-center items-center gap-2 transition-all" >
                      <CgProfile />
                      <p className="block text-black text-[15px]"> My Profile </p>

                    </button>

                    <hr className="my-2 border-blue-gray-50" tabIndex="-1" role="menuitem" />

                    <button onClick={() => { signOutHander() }} className="py-2 cursor-pointer active:scale-95  rounded-md lg:mt-0  hover:bg-gray-200 dark:hover:bg-gray-700 text-xl flex justify-center items-center gap-2 transition-all" >
                      <FaSignOutAlt />
                      <p className="text-black block text-[15px]"> Sign Out </p>
                    </button>

                  </ul>
                }

              </div>


            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header








