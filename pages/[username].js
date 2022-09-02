import Layout from "@/components/Layout";
import { useRouter } from "next/router"
import { Textarea } from "@nextui-org/react";
import { IoRocket } from 'react-icons/io5'
import { useTheme, Card } from "@nextui-org/react";


const MessageComp = () => {
    const router = useRouter();

    const { type } = useTheme();

    return (
        <Layout title={'Send Message'}>
            <div className="px-3">
                <h2 className="text-center text-xl lg:text-3xl mb-8 font-semibold">
                    Send a message anonymously to {router.query.username}
                </h2>
                <div className="flex h-96">
                    {/* <section className="mb-5 mx-auto my-20 md:my-52 lg:my-auto w-4/5">
                        <Card className="border-none p-3">
                            <Card.Header>
                                <p className="mb-10">Say Something About Me</p>
                            </Card.Header>
                            <Textarea
                                width="100%"
                                rows={4}
                                underlined
                                color="primary"
                                labelPlaceholder={`Leave a message for >${router.query.username}< here....`}
                            />

                            <button
                                className={`flex gap-x-3 justify-center w-full my-5 py-2 rounded-md 
                        ${type === 'dark' ? 'bg-slate-700' : 'bg-slate-200'}`}>
                                <span>Send Message</span>
                                <span className="my-auto"> <IoRocket /> </span>
                            </button>
                            <Card.Divider />
                            <Card.Footer className="grid grid-cols-1 gap-y-3">
                                <p className="mt-5">
                                    Say what do you think about {router.query.username} or Leave a feedback for {router.query.username} anonymously using the form <strong>above..</strong> 🥰
                                </p>
                                <p>
                                    Thank You!! 😍😊
                                </p>
                            </Card.Footer>
                        </Card>
                    </section> */}
                    <section className="mb-5 mx-auto my-20 md:my-52 lg:my-auto w-4/5">
                        <Card className="p-1 border-none">
                            <Card.Header className="justify-center">
                                <h1 className="text-3xl">Oops..!</h1>
                                <br />
                            </Card.Header>
                            <Card.Body className="text-center">
                                <p>There is no one with the username <strong>{router.query.username}</strong>. Try looking for any possible typos.</p>
                                <br />
                                <p>
                                    Or, you can get started by registering with the username <strong>{router.query.username}</strong> right now. Tap on "Register Now" button!
                                </p>
                                <button
                                    className={`w-full lg:w-4/5 mx-auto my-5 py-2 rounded-md 
                                     ${type === 'dark' ? 'bg-slate-700' : 'bg-slate-200'}`}>
                                    Register
                                </button>
                                <p className="text-sm">
                                    By using this service, you agree to our Privacy Policy, Terms of Service and any related policies.
                                </p>
                                <button
                                    className={`w-full lg:w-4/5 mx-auto my-5 py-2 rounded-md 
                                     ${type === 'dark' ? 'bg-cyan-700' : 'bg-cyan-200'}`}>
                                    Go Home
                                </button>
                            </Card.Body>
                        </Card>
                    </section>
                </div>
            </div>
        </Layout>
    )
}

export default MessageComp
