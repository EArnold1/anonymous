import Layout from "@/components/Layout"
import Link from "next/link"
import { useTheme, Card } from "@nextui-org/react";
import { useRouter } from "next/router"


const messages = () => {
    const { type } = useTheme();

    const router = useRouter();

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
                            <Link href={'/account/dashboard'}>
                                <a className={type === 'dark' ? 'px-3 py-2 bg-gray-700 rounded-md' : 'px-3 py-2 bg-gray-200 rounded-md'}>
                                    Prev
                                </a>
                            </Link>
                            <Link href={'/account/dashboard'}>
                                <a className={type === 'dark' ? 'px-3 py-2 bg-gray-700 rounded-md' : 'px-3 py-2 bg-gray-200 rounded-md'}>
                                    Next
                                </a>
                            </Link>
                        </section>
                    </div>
                    <Card className="border border-blue-500 rounded-md my-8 hidden">
                        <Card.Body>
                            Oops! 😅 No one has sent you a message! Share your profile link and check back later again!
                        </Card.Body>
                    </Card>
                    <br />
                    <div className="my-8 grid grid-cols-1 lg:grid-cols-2 justify-between gap-3">
                        <Card className="border-none">
                            <Card.Header>
                                <p>Message</p>
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
                            <Card.Footer>
                                <button
                                    className={type === 'dark' ? 'px-3 py-2 bg-gray-700 rounded-md' : 'px-3 py-2 bg-gray-200 rounded-md'}>
                                    Share Now
                                </button>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div className="border-b-2 border-cyan-300"></div>
                </section>
            </div>
        </Layout>
    )
}

export default messages
