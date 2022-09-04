import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NEXT_URL } from '@/config/index';
import axios from 'axios'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const router = useRouter();

    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    //register
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
                getLogs()
                router.push('/account/dashboard')
            }

        } catch (err) {
            const errors = err.response.data
            setError(errors.errors);
            setTimeout(() => setError(null), 3000)
        }
    }

    //login


    // Presist login
    const getLogs = async () => {
        try {
            const res = await axios.get(`${NEXT_URL}/api/user`);

            const resData = res.data;

            setUser(resData.data)

        } catch (err) {
            const errors = err.response.data
            setError(errors.errors);
            setTimeout(() => setError(null), 3000)
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
                register
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}


export default AuthContext;