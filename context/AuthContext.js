import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NEXT_URL } from '@/config/index';
import axios from 'axios'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const router = useRouter();

    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true)

    const setLoadingFunc = () => {
        setLoading(false)
        setTimeout(() => setLoading(true), 3000)
    }

    // Register
    const register = async (user) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify(user)
        try {
            const res = await axios.post(`${NEXT_URL}/api/register`, body, config);

            const resData = res.data;

            if (resData.data.token) {
                getLogs();
                localStorage.setItem('isValid', true)
                router.push('/account/dashboard')
            }

        } catch (err) {
            const errors = err.response.data
            setError(errors.errors);
            setTimeout(() => setError(null), 3000)
        }
    }

    // Login
    const login = async (user) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify(user)
        try {
            const res = await axios.post(`${NEXT_URL}/api/login`, body, config);

            const resData = res.data;

            if (resData.data.token) {
                getLogs()
                localStorage.setItem('isValid', true)
                router.push('/account/dashboard');
                setLoadingFunc()
            }
        } catch (err) {
            setLoadingFunc()
            const errors = err.response.data
            setError(errors.errors);
            setTimeout(() => setError(null), 3000)
        }
    }

    // Presist login
    const getLogs = async () => {
        try {
            const res = await axios.get(`${NEXT_URL}/api/user`);

            const resData = res.data;

            setUser(resData.data);
            setAuthenticated(true)
        } catch (err) {
            setUser(null)
            localStorage.removeItem('isValid')
        }
    }

    // Logout
    const logout = async () => {
        const res = await fetch(`${NEXT_URL}/api/logout`, {
            method: 'POST',
        })

        if (res.ok) {
            setUser(null)
            localStorage.removeItem('isValid')
            setAuthenticated(false)
            router.push('/')
        }
    }

    useEffect(() => {
        getLogs()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                user,
                error,
                authenticated,
                loading,
                register,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}


export default AuthContext;