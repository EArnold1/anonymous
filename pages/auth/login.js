import { useState, useContext, useEffect } from "react";
import Link from "next/link"
import { Input, useTheme, Loading } from "@nextui-org/react";
import { ToastContainer, toast } from 'react-toastify';
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import AuthContext from "context/AuthContext";
import { parseCookies } from "@/helpers/index";


const Login = ({ token }) => {
    const { error, login, loading } = useContext(AuthContext);

    const { type } = useTheme();

    const router = useRouter()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [err, setErr] = useState({
        usernameErr: 'primary',
        passwordErr: 'primary'
    })

    const [loader, setLoader] = useState(false)

    const { usernameErr, passwordErr } = err;

    const onSubmit = (e) => {
        e.preventDefault();

        const hasEmptyFields = Object.values({ username, password }).some((el) => el === '');

        if (hasEmptyFields) {
            toast.error('Please fill every field');
            setErr({
                usernameErr: 'error',
                passwordErr: 'error'
            })
            resetErr()
            return
        }

        if (username.match(/\s/g)) {
            toast.error('Invalid username');
            setErr({ ...err, usernameErr: 'error' })
            resetErr()
            return
        }

        login({ username, password });
        setLoader(true)
        // setUsername('');
        // setPassword('')
    }

    const resetErr = () => {
        setTimeout(() => {
            setErr({
                usernameErr: 'primary',
                passwordErr: 'primary'
            })
        }, 3000)
    }

    useEffect(() => {
        if (error) {
            toast.error(error)
            setLoader(false)
        }

        if (loading) {
            setLoader(false)
        }

        if (token !== '') {
            router.push('/account/dashboard')
        }
    }, [error, loading])


    return (
        <Layout title={'Login Page'} pagePath={router.pathname}>
            <div className={type !== 'dark' ? 'mx-auto p-5 bg-zinc-200 text-black rounded-md w-4/5 lg:w-1/3' : 'mx-auto bg-gray-900 text-white p-5 rounded-md w-4/5 lg:w-1/3'}>
                <ToastContainer theme="colored" />
                <section className="px-2 md:px-10">
                    <h3 className="text-2xl my-10">ACCOUNT SIGN-IN</h3>
                    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-y-10">
                        <Input
                            bordered
                            clearable
                            labelPlaceholder="Username"
                            name="username"
                            status={usernameErr}
                            className={type !== 'dark' ? 'bg-white' : 'bg-black'}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <Input.Password
                            bordered
                            labelPlaceholder="Password"
                            name="password"
                            className={type !== 'dark' ? 'bg-white' : 'bg-black'}
                            status={passwordErr}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {
                            loader ? (
                                <Loading />
                            ) : (
                                <input type="submit"
                                    value={'Login'}
                                    className={`my-5 w-full py-2   rounded-md hover:bg-stone-700
                         hover:text-blue-500 hover:cursor-pointer ${type === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
                                />
                            )
                        }


                    </form>
                    <div className="my-5 text-center">
                        <p className="text-gray-400">Don't have an account?{' '}
                            <Link href={'/auth/register'}>
                                <a className="text-blue-500">Register</a>
                            </Link>
                        </p>
                        <br />
                        <p className="text-xs text-gray-500">
                            By using this service, you agree to our Privacy Policy, Terms of Service and any related policies.
                        </p>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ req }) {
    const { token } = parseCookies(req);
    return {
        props: {
            token: token !== undefined ? token : ''
        }
    }
}

export default Login
