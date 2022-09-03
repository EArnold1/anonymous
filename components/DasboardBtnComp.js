import { Card, useTheme } from "@nextui-org/react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy, FaFacebook, FaInstagram, FaMailBulk, FaShareAlt, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import Link from "next/link";

const DasboardBtnComp = () => {
    const { type } = useTheme()
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
                        <CopyToClipboard text="link">
                            <button className={`${type === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} py-2 rounded-md px-4 justify-center flex gap-x-2`}>
                                <FaCopy className="my-auto" />  Click to Copy Link
                            </button>
                        </CopyToClipboard>
                        {/* click to share */}
                        <button className={`${type === 'dark' ? 'bg-cyan-600' : 'bg-cyan-200'} py-2 rounded-md px-4 justify-center flex gap-x-2`}>
                            <FaShareAlt className="my-auto" /> Share Profile
                        </button>
                        {/* view messages */}

                        <button className={`${type === 'dark' ? 'bg-blue-600' : 'bg-blue-200'} py-2 rounded-md px-4 justify-center flex gap-x-2`}>
                            <FaFacebook className="my-auto" /> Share on Facebook
                        </button>
                        <button className={`${type === 'dark' ? 'bg-green-600' : 'bg-green-200'} py-2 rounded-md px-4 justify-center flex gap-x-2`}>
                            <FaWhatsapp className="my-auto" /> Share on Whatsapp
                        </button>
                        <button className={`${type === 'dark' ? 'bg-pink-600' : 'bg-pink-200'} py-2 rounded-md px-4 justify-center flex gap-x-2 lg:col-span-2`}>
                            <FaInstagram className="my-auto" /> Share on Instagram
                        </button>
                        <button className={`${type === 'dark' ? 'bg-indigo-600' : 'bg-indigo-200'} py-2 rounded-md px-4 justify-center flex gap-x-2 lg:col-span-2`}>
                            <FaTwitter className="my-auto" /> Share on Twitter
                        </button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DasboardBtnComp
