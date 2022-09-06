import { useContext, useEffect } from "react";
import Layout from "@/components/Layout"
import Link from "next/link"
import { useTheme, Card } from "@nextui-org/react";
import { useRouter } from "next/router"
import { API_URL } from "@/config/index";
import { parseCookies } from "@/helpers/index";
import axios from 'axios';
import MessageContainer from "@/components/MessageContainer";
import AuthContext from "context/AuthContext";
import Loader from "@/components/Loader";

const messages = ({ data, token }) => {
    const { type } = useTheme();

    const { user, authenticated } = useContext(AuthContext);

    const router = useRouter();

    useEffect(() => {
        if (token === '') {
            router.push('/auth/login')
        }
    }, [])

    if (user === null) {
        return (
            <div className="flex h-screen">
                <div className="m-auto">
                    <Loader showBtn={authenticated} />
                </div>
            </div>
        )
    }

    return (
        <Layout title={'Messages'} pagePath={router.pathname}>
            <div className="px-3">
                <h2 className="text-2xl">My Messages</h2>
                <section className="my-20">
                    <div className="flex justify-between">
                        <Link href={'/account/dashboard'}>
                            <a className={type === 'dark' ? 'px-3 py-2 bg-yellow-700 rounded-md' : 'px-3 py-2 bg-yellow-200 rounded-md'}>
                                Go Back
                            </a>
                        </Link>
                        {/* show if user has messages */}
                        <section className="flex gap-x-3">
                            {data.prevPage.page !== 0 &&
                                <Link href={`/account/messages?page=${data.prevPage.page}`}>
                                    <a className={type === 'dark' ? 'px-3 py-2 bg-gray-700 rounded-md' : 'px-3 py-2 bg-gray-200 rounded-md'}>
                                        Prev
                                    </a>
                                </Link>
                            }
                            {data.nextPage.page !== 0 &&
                                <Link href={`/account/messages?page=${data.nextPage.page}`}>
                                    <a className={type === 'dark' ? 'px-3 py-2 bg-gray-700 rounded-md' : 'px-3 py-2 bg-gray-200 rounded-md'}>
                                        Next
                                    </a>
                                </Link>
                            }
                        </section>
                    </div>
                    {
                        data.messages.length === 0 ? (
                            <Card className="border border-blue-500 rounded-md my-8">
                                <Card.Body>
                                    Oops! 😅 No one has sent you a message! Share your profile link and check back later again!
                                </Card.Body>
                            </Card>
                        ) : (

                            <div className="my-8 grid grid-cols-1 lg:grid-cols-2 justify-between gap-3">
                                {data.messages.map(msg => (
                                    <MessageContainer text={msg.text} date={msg.date} key={msg._id} />
                                ))}
                            </div>
                        )
                    }
                    <div className="border-b-2 border-cyan-300"></div>
                </section>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ req, query: { page = 1 } }) {
    const { token } = parseCookies(req);

    const limit = 4;

    try {
        const res = await axios.get(`${API_URL}/api/messages?page=${page}&limit=${limit}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = res.data

        return {
            props: {
                data,
                token
            }
        }
    } catch (err) {
        return {
            props: {
                data: [],
                token: ''
            }
        }
    }

}

export default messages
