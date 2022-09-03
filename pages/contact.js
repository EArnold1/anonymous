import Head from "next/head"
import { Text, Card, useTheme } from "@nextui-org/react";
import ToggleTheme from "@/components/ToggleTheme";
import Link from "next/link";

const contact = () => {
    const { type } = useTheme();
    return (
        <>
            <Head>
                <title>Contact Page</title>
            </Head>

            <div className="flex h-screen">
                <div className="mx-5 my-auto md:m-auto">
                    <Card className="border-none p-2">
                        <Card.Header className="flex justify-end">
                            <ToggleTheme />
                        </Card.Header>
                        <Card.Body>
                            <Text h1 size={50} className="text-center" >
                                CONTACT US
                            </Text>
                            <br />
                            <p className="text-lg">
                                You can contact us through the following platforms listed down below:
                            </p>
                            <br />
                            <div className="grid grid-cols-1 gap-y-5">
                                <div className="flex gap-x-2">
                                    <p className="">Twitter:</p>
                                    <p className="text-gray-500">
                                        <a href="http://twitter.com/qrArnoldd" target="_blank" rel="noopener noreferrer">@qrArnoldd</a>
                                    </p>
                                </div>
                                <div className="flex gap-x-2">
                                    <p className="">Email:</p>
                                    <p className="text-gray-500">
                                        <a href="mailto:talk2arnoldemmanuel@gmail.com">talk2arnoldemmanuel@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Divider />
                        <Card.Footer className="text-center">
                            <Link href={'/'}>
                                <a className={type === 'dark' ? 'bg-gray-600 p-2 rounded-md w-full' : 'bg-gray-200 p-2 rounded-md w-full'}>Go Home</a>
                            </Link>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default contact
