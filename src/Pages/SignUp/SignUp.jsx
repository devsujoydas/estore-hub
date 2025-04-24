import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Firebase/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';


const SignUp = () => {

    const [showhide, setShowHide] = useState(1)
    const { signUpUser, setUser, signInWithGoogle } = useContext(AuthContext)
    const notify = (msg) => toast(msg);
    const navigate = useNavigate()

    const formHandler = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")
        signUpUser(email, password)
            .then((result) => {
                setUser(result.user)
                notify("Account Create Successfully")
                console.log(result.user);
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                console.log(error.message);
                notify(error.message);
            });
    }

    const googleSignInHandler = () => {
        signInWithGoogle()
            .then((result) => {
                setUser(result.user)
                console.log(result.user);
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <section className="w-full">
            <div><ToastContainer /></div>
            <div className="mx-5 md:mx-auto md:py-14 py-10">
                <div
                    className="flex shadow-2xl border-t border-gray-200 flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-2xl md:mt-0">
                    <div className="mt-8">
                        <h1 className="text-center text-3xl font-bold text-blue-600">Sign Up</h1>
                        <div className="mt-6">

                            <form className="space-y-6" onSubmit={formHandler}>

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-600"> Full Name </label>
                                    <div className="mt-1">
                                        <input id="name" name="name" type="text" placeholder="Your Full Name"
                                            className="block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-600"> Email address </label>
                                    <div className="mt-1">
                                        <input id="email" name="email" type="email" required placeholder="Your Email"
                                            className="block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-600"> Password </label>
                                    <div className="mt-1 relative">
                                        <input id="password" name="password" type={showhide ? "password" : "text"} required
                                            placeholder="Your Password"
                                            className="block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        <div className="absolute text-xl text-gray-600 active:scale-95 transition-all cursor-pointer right-3 bottom-3.5" onClick={() => { setShowHide(!showhide) }}>
                                            {showhide ? <FaRegEyeSlash /> : <FaRegEye />}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox" placeholder="Your password"
                                            className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500 cursor-pointer" />
                                        <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-600 cursor-pointer"> Terms & Condition </label>
                                    </div>

                                </div>

                                <div>
                                    <button type="submit"
                                        className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition  ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 active:scale-95 cursor-pointer">Sign Up</button>
                                </div>
                            </form>
                            <div className="relative my-4">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 text-gray-600 bg-white"> Or continue with </span>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => { googleSignInHandler() }}
                                    className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition  ease-in-out transform border-2 border-white shadow-md rounded-xl  active:scale-95 cursor-pointer">
                                    <div className="flex items-center justify-center">
                                        <img className="w-5 h-5 mr-2"
                                            src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                                            alt="Google Logo" />
                                        <span className="ml-4"> Sign Up with Google</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="mt-4 text-sm text-gray-600 text-center">
                            <p>Already have an account? <Link to={"/login"} className="font-semibold hover:underline transition-all hover:text-blue-600">Log In</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp;
