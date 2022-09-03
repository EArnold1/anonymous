import Layout from "@/components/Layout"
import Link from "next/link"
import { useRouter } from "next/router"
import { useTheme, Card, User, Badge } from "@nextui-org/react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaMailBulk } from 'react-icons/fa'
import DasboardBtnComp from "@/components/DasboardBtnComp";

const dashboard = () => {
    const { type } = useTheme()

    const router = useRouter();

    return (
        <Layout title={'Dashboard Page'} pagePath={router.pathname}>
            <div className="px-3">
                <User
                    bordered
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d" // change image
                    name="aarnold's profile" //dynamic
                    color="primary"
                    className="mb-5"
                    size="xl"
                    css={{
                        fontSize: '$2xl'
                    }}
                >
                    <p className="text-lg">aarnold</p>
                </User>
                <br />
                <p className="text-md">
                    Share your profile link ❤️ to get responses from your friend. Go to "View Messages" to check out the responses. 👌
                </p>
                <br />
                {/* latest message */}
                <section className="order py-8">
                    <Card className="border-none hidden">
                        <Card.Header>
                            <p className="font-bold">No message yet, share your link to your friends 😉.</p>
                        </Card.Header>
                        <Card.Divider />
                        <Card.Footer className="gap-x-3">
                            {/* copy link */}
                            <CopyToClipboard text="link">
                                <button className={`${type === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} py-2 rounded-md px-4`}>
                                    Click to Copy Link
                                </button>
                            </CopyToClipboard>
                            {/* click to share */}
                            <button className={`${type === 'dark' ? 'bg-amber-600' : 'bg-amber-200'} py-2 rounded-md px-4`}>
                                Share now
                            </button>
                        </Card.Footer>
                    </Card>
                    {/*  */}
                    <Card className="border-none">
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
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae harum est ea placeat pariatur temporibus itaque! Alias commodi neque ab doloribus, delectus possimus sed. Perspiciatis molestiae quasi suscipit! Accusantium, quos.
                            </p>
                            <p className="my-2">
                                Annonymous - [ 2022-8-15 ]
                            </p>
                        </Card.Body>
                        <Card.Footer className="gap-x-3 justify-between lg:justify-start">
                            {/* share post */}
                            <button className={`${type === 'dark' ? 'bg-purple-600' : 'bg-purple-200'} py-2 rounded-md px-4`}>
                                Share now
                            </button>
                            {/* view more */}
                            <Link href={'/account/messages'}>
                                <a className={`${type === 'dark' ? 'bg-teal-600' : 'bg-teal-200'} py-2 rounded-md px-4 flex gap-x-2`}>
                                    <FaMailBulk className="my-auto" /> View Messages
                                </a>
                            </Link>
                        </Card.Footer>
                    </Card>
                    <br />
                    <DasboardBtnComp />
                    {/*  */}
                    <div className="border-b-2 border-cyan-300 mt-5"></div>
                </section>
            </div>
        </Layout>
    )
}

export default dashboard
