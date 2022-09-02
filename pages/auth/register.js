import { useState } from "react";
import Link from "next/link"
import { Input, Switch, useTheme } from "@nextui-org/react";
import Head from "next/head";
import { ToastContainer, toast } from 'react-toastify';
import { useTheme as useNextTheme } from 'next-themes'
import Layout from "@/components/Layout";


const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const Register = () => {
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();


    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [err, setErr] = useState({
        usernameErr: 'primary',
        emailErr: 'primary',
        passwordErr: 'primary'
    })

    const { usernameErr, emailErr, passwordErr } = err;

    const onSubmit = (e) => {
        e.preventDefault();

        const hasEmptyFields = Object.values({ username, email, password }).some((el) => el === '');

        if (hasEmptyFields) {
            toast.error('Please fill every field');
            setErr({
                usernameErr: 'error',
                emailErr: 'error',
                passwordErr: 'error'
            })
            resetErr()
            return
        }

        if (!email.match(mailformat)) {
            toast.error('Invalid email')
            setErr({ ...err, emailErr: 'error' })
            resetErr()
            return
        }

        if (username.match(/\s/g)) {
            toast.error('Invalid username');
            setErr({ ...err, usernameErr: 'error' })
            resetErr()
            return
        }

        console.log({ username, password, email })
    }

    const resetErr = () => {
        setTimeout(() => {
            setErr({
                usernameErr: 'primary',
                emailErr: 'primary',
                passwordErr: 'primary'
            })
        }, 3000)
    }

    return (
        <Layout title={'Registration Page'}>
            <div className={type === 'dark' ? 'mx-auto p-5 bg-white text-black rounded-md w-4/5 lg:w-1/3' : 'mx-auto bg-gray-800 text-white p-5 rounded-md w-4/5 lg:w-1/3'}>
                <div>
                    The current theme is: {type}
                    <Switch
                        checked={isDark}
                        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                    />
                </div>
                <ToastContainer theme="colored" />
                <section className="px-2 md:px-10">
                    <h3 className="text-2xl my-10">ACCOUNT SIGN-UP</h3>
                    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-y-10">
                        <Input
                            bordered
                            clearable
                            labelPlaceholder="Username"
                            name="username"
                            status={usernameErr}
                            className={type === 'dark' ? 'bg-white border-2' : 'bg-black'}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input
                            bordered
                            clearable
                            labelPlaceholder="Email"
                            name="email"
                            status={emailErr}
                            className={type === 'dark' ? 'bg-white border-2' : 'bg-black'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input.Password
                            bordered
                            labelPlaceholder="Password"
                            name="password"
                            className={type === 'dark' ? 'bg-white border-2' : 'bg-black'}
                            status={passwordErr}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <input type="submit"
                            value="Register"
                            className={`my-5 w-full py-2   rounded-md hover:bg-stone-700
                         hover:text-blue-500 hover:cursor-pointer ${type === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
                        />
                    </form>
                    <div className="my-5 text-center">
                        <p className="text-gray-400">Already have an account?{' '}
                            <Link href={'/auth/login'}>
                                <a className="text-blue-500">Login</a>
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

export default Register
