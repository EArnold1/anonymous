import Link from "next/link"
import { Input } from "@nextui-org/react";
import Head from "next/head";

const Register = () => {
    return (
        <div className="flex h-screen">
            <Head>
                <title>Registration Page</title>
            </Head>
            <div className="m-auto p-5 rounded-md bg-gray-800 w-4/5 lg:w-1/3">
                <section className="px-2 md:px-10 text-white">
                    <h3 className="text-blue-500 text-xl my-10">ACCOUNT SIGN-UP</h3>
                    <form className="grid grid-cols-1 gap-y-10">
                        <Input bordered
                            clearable
                            labelPlaceholder="Username"
                            required
                            name="username"
                            color="primary"
                            className="bg-white"
                        />
                        <Input bordered
                            clearable
                            labelPlaceholder="Email"
                            required name="email"
                            color="primary"
                            className="bg-white"
                        />
                        <Input.Password bordered
                            labelPlaceholder="Password"
                            name="password"
                            className="bg-white"
                            color="primary"
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
