import React, { useContext } from 'react'
import { AuthContext } from '../Firebase/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import Loader from '../Components/Loader/Loader'

const PrivateRoutes = ({ children }) => {
    const { user, Loading } = useContext(AuthContext)
    const location = useLocation()
    // console.log("location from private route",location.pathname);
    if (Loading) {
        return <Loader />
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
}

export default PrivateRoutes