import { useState, useEffect } from 'react';
import { Card, useTheme, Popover, Text } from "@nextui-org/react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy, FaFacebook, FaInstagram, FaMailBulk, FaShareAlt, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import Link from "next/link";

const DasboardBtnComp = ({ user, toast }) => {
    const { type } = useTheme();

    const HOMEPAGE_URL = window.location.origin;
    const messageText = `Hey there 👋, Send me an anonymous message with this link ${HOMEPAGE_URL}/m/${user.username}`

    const [copy, setCopy] = useState(false);

    const shareNow = () => {
        if (navigator.share) {
            navigator.share({ text: messageText })
        }
    }

    useEffect(() => {
        if (copy) {
            toast.success('Link copied')
        }
    }, [copy])

    return (
        <div className="my-8">
            <Card>
                <Card.Body>
                    <div className="grid gird-cols-1 lg:grid-cols-4 gap-5">
                        <Link href={'/account/messages'}>
                            <a className={`${type === 'dark' ? 'bg-teal-600' : 'bg-teal-200'} py-2 rounded-md px-4 justify-center flex gap-x-2 lg:col-span-4`}>
                                <FaMailBulk className="my-auto" /> View Messages
                            </a>
                        </Link>
                        {/* copy link */}
                        <CopyToClipboard text={`${HOMEPAGE_URL}/m/${user.username}`} onCopy={() => {
                            setCopy(true)
                            setTimeout(() => setCopy(false), 3000)
                        }}>
                            <button className={`${type === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} py-2 rounded-md px-4 justify-center flex gap-x-2`}>
                                <FaCopy className="my-auto" />  Click to Copy Link
                            </button>
                        </CopyToClipboard>
                        {/* click to share */}
                        <button
                            onClick={shareNow}
                            className={`${type === 'dark' ? 'bg-cyan-600' : 'bg-cyan-200'} py-2 rounded-md px-4 justify-center flex gap-x-2`}>
                            <FaShareAlt className="my-auto" /> Share Profile
                        </button>
                        {/* view messages */}
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${HOMEPAGE_URL}/m/${user.username}`}
                            target="_blank" rel="noopener noreferrer"
                            className={`${type === 'dark' ? 'bg-blue-600' : 'bg-blue-200'} py-2 rounded-md px-4 justify-center flex gap-x-2`}>
                            <FaFacebook className="my-auto" /> Share on Facebook
                        </a>
                        <a
                            href={`whatsapp://send?text=${messageText}`} data-action="share/whatsapp/share"
                            className={`${type === 'dark' ? 'bg-green-600' : 'bg-green-200'} py-2 rounded-md px-4 justify-center flex gap-x-2`}>
                            <FaWhatsapp className="my-auto" /> Share on Whatsapp
                        </a>
                        <Popover placement='top-left'>
                            <Popover.Trigger>
                                <button className={`${type === 'dark' ? 'bg-pink-600' : 'bg-pink-200'} py-2 rounded-md px-4 justify-center flex gap-x-2 lg:col-span-2`}>
                                    <FaInstagram className="my-auto" /> Share on Instagram
                                </button>
                            </Popover.Trigger>
                            <Popover.Content className='p-3'>
                                <Text>Coming soon to instagram, for now just copy your link and share</Text>
                            </Popover.Content>
                        </Popover>
                        <a
                            href={`https://twitter.com/intent/tweet?text=${messageText}`}
                            target="_blank" rel="noopener noreferrer"
                            className={`${type === 'dark' ? 'bg-indigo-600' : 'bg-indigo-200'} py-2 rounded-md px-4 justify-center flex gap-x-2 lg:col-span-2`}>
                            <FaTwitter className="my-auto" /> Share on Twitter
                        </a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DasboardBtnComp
