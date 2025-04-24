import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import auth from "./firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [projectList, setProjects] = useState([])
    const [Loading, setLoading] = useState(true)
    const [user, setUser] = useState()

    useEffect(() => {
        fetch("/LongDes.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)

    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            // console.log(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])






    const data = {
        user,
        Loading,
        setUser,
        projectList,
        logInUser,
        signUpUser,
        signOutUser,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider