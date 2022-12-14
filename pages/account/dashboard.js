import { useContext, useEffect, useState } from "react";
import Layout from "@/components/Layout"
import Link from "next/link"
import { useRouter } from "next/router"
import { useTheme, Card, User, Badge, Text, Popover } from "@nextui-org/react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaMailBulk } from 'react-icons/fa'
import DasboardBtnComp from "@/components/DasboardBtnComp";
import AuthContext from "context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { API_URL } from "@/config/index";
import Loader from "@/components/Loader";
import { parseCookies } from "@/helpers/index";
import moment from 'moment'
import runNotification from "notification/notification";
import { toPng } from 'html-to-image';
import download from 'downloadjs';

const dashboard = ({ message, url }) => {
    const { user, authenticated } = useContext(AuthContext);

    // notification
    if (user !== null) {
        runNotification(user.username)
    }

    // if (localStorage.getItem('isPushNotificationsEnabled') !== true)

    const { type } = useTheme()

    const router = useRouter();

    const username = user !== null && user.username

    const messageText = `Hey there 👋, Send me an anonymous message with this link ${url}/m/${username}`

    const [copy, setCopy] = useState(false);

    const shareNow = () => {
        if (navigator.share) {
            navigator.share({ text: messageText })
        }
    }

    const getImage = async () => {
        const node = document.getElementById('share-image');
        try {
            const dataUrl = await toPng(node);
            const date = moment().format('LTS').replace(/\:/g, '')

            download(dataUrl, date.replace(/\s/g, ''));
        } catch (err) {
            toast.error('Something went wrong, try again.');
            console.log(err);
        }
    };

    useEffect(() => {
        if (!localStorage.getItem('isValid')) {
            router.push('/auth/login')
        }

        if (copy) {
            toast.success('Link copied')
        }
    }, [copy]);

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
        <Layout title={'Dashboard Page'} pagePath={router.pathname}>
            {user !== null && (
                <div className="px-3">
                    <ToastContainer theme="colored" />
                    <User
                        bordered
                        src={`https://avatars.dicebear.com/api/adventurer-neutral/${user.username}.svg`} // change image
                        name={`${user.username}'s Profile`} //dynamic
                        color="primary"
                        className="mb-5 px-0"
                        size="xl"
                        css={{
                            fontSize: '$2xl'
                        }}
                    >
                        <p className="text-lg">@{user.username}</p>
                    </User>
                    <br />
                    <p className="text-md">
                        Share your profile link ❤️ to get responses from your friend. Go to "View Messages" to check out the responses. 👌
                    </p>
                    <br />
                    {/* latest message */}
                    <section className="order py-8">
                        {message.length === 0 ? (
                            <Card className="border-none">
                                <Card.Header>
                                    <p className="font-bold">No message yet, share your link to your friends 😉.</p>
                                </Card.Header>
                                <Card.Divider />
                                <Card.Footer className="gap-x-3">
                                    {/* copy link */}
                                    <CopyToClipboard text={`${url}/m/${user.username}`} onCopy={() => {
                                        setCopy(true)
                                        setTimeout(() => setCopy(false), 3000)
                                    }}>
                                        <button className={`${type === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} py-2 rounded-md px-4`}>
                                            Click to Copy Link
                                        </button>
                                    </CopyToClipboard>
                                    {/* click to share */}
                                    <button
                                        onClick={shareNow}
                                        className={`${type === 'dark' ? 'bg-amber-600' : 'bg-amber-200'} py-2 rounded-md px-4`}>
                                        Share now
                                    </button>
                                </Card.Footer>
                            </Card>
                        ) : (
                            <Card className="border-none" id="share-image">
                                <Card.Header>
                                    <div className="relative mt-2">
                                        <p>Message</p>
                                        <Badge color={'error'} size={'xs'}
                                            className="absolute bottom-5 -right-5"
                                        >new</Badge>
                                    </div>
                                </Card.Header>
                                <Card.Divider />
                                <Card.Body>
                                    <Text h4 size={25}
                                        css={{
                                            color: '$primary'
                                        }}
                                    >
                                        {message.text}
                                    </Text>
                                    <Text
                                        css={{
                                            color: '$neutral'
                                        }}
                                        className="my-2">
                                        Anonymous - {moment(message.date).format('LL')}
                                    </Text>
                                </Card.Body>
                                <Card.Footer className="gap-x-3 justify-between lg:justify-start">
                                    {/* share post */}
                                    <button className={`${type === 'dark' ? 'bg-purple-600' : 'bg-purple-200'} py-2 rounded-md px-4`}
                                        onClick={getImage}
                                    >
                                        Share
                                    </button>

                                    {/* view more */}
                                    <Link href={'/account/messages'}>
                                        <a className={`${type === 'dark' ? 'bg-teal-600' : 'bg-teal-200'} py-2 rounded-md px-4 flex gap-x-2`}>
                                            <FaMailBulk className="my-auto" /> Messages
                                        </a>
                                    </Link>
                                </Card.Footer>
                            </Card>
                        )}
                        <br />
                        <DasboardBtnComp user={user} toast={toast} />
                        {/*  */}
                        <div className="border-b-2 border-cyan-300 mt-5"></div>
                    </section>
                </div>
            )}
        </Layout>
    )
}


export async function getServerSideProps({ req }) {
    const { token } = parseCookies(req);

    try {
        const res = await axios.get(`${API_URL}/api/message`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = res.data

        const messageData = data.message;

        return {
            props: {
                message: messageData,
                url: req.headers.host,
                token: token !== undefined ? token : ''
            }
        }
    } catch (err) {
        return {
            props: {
                message: [],
                url: req.headers.host,
                token: ''
            }
        }
    }
}

export default dashboard
