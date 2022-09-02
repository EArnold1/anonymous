import { useState } from "react";
import Link from "next/link"
import { Input } from "@nextui-org/react";
import Head from "next/head";
import { ToastContainer, toast } from 'react-toastify';

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const Register = () => {
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
        <div className="flex h-screen">
            <Head>
                <title>Registration Page</title>
            </Head>
            <div className="m-auto p-5 rounded-md bg-gray-800 w-4/5 lg:w-1/3">
                <ToastContainer theme="colored" />
                <section className="px-2 md:px-10 text-white">
                    <h3 className="text-white text-2xl my-10">ACCOUNT SIGN-UP</h3>
                    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-y-10">
                        <Input
                            bordered
                            clearable
                            labelPlaceholder="Username"
                            name="username"
                            status={usernameErr}
                            className="bg-white"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input bordered
                            clearable
                            labelPlaceholder="Email"
                            name="email"
                            status={emailErr}
                            className="bg-white"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input.Password bordered
                            labelPlaceholder="Password"
                            name="password"
                            className="bg-white"
                            status={passwordErr}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <input type="submit"
                            value="Register"
                            className="my-5 w-full py-2 text-black bg-white rounded-md hover:bg-stone-700
                         hover:text-blue-500 hover:cursor-pointer"
                        />
                    </form>
                    <div className="my-5 text-center">
                        <p className="text-gray-400">Already have an account?{' '}
                            <Link href={'/auth/login'}>
                                <a className="text-blue-500">Login</a>
                            </Link>
                        </p>
                        <br />
                        <p className="text-xs text-gray-200">
                            By using this service, you agree to our Privacy Policy, Terms of Service and any related policies.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Register
