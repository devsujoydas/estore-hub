import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Root_Page from './Root_Page/Root_Page.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import LogIn from './Pages/Login/Login.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import ContactUs from './Pages/ContactUs/ContactUs.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import Projects from './Pages/Projects/Projects.jsx';
import Courses from './Pages/Courses/Courses.jsx';
import Products from './Pages/Products/Products.jsx';
import AuthProvider from './Firebase/AuthProvider.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import ProjectDetails from './Pages/Projects/ProjectDetails.jsx';
import PrivateRoutes from './Root_Page/PrivateRoutes.jsx';
import Animated from './Pages/Animated/Animated.jsx';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root_Page />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/contactus", element: <ContactUs /> },
            { path: "/products", element: <Products /> },
            { path: "/courses", element: <Courses /> },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/projects/:id",
                element: <PrivateRoutes><ProjectDetails /></PrivateRoutes>,
            },
            { path: "/login", element: <LogIn /> },
            { path: "/animated", element: <Animated /> },
            { path: "/signup", element: <SignUp /> },
            { path: "/profile", element: <Profile /> },
        ]
    },
]);
createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
)
