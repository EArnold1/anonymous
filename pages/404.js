import Head from "next/head"
import { Text, Card, useTheme } from "@nextui-org/react";
import ToggleTheme from "@/components/ToggleTheme";
import Link from "next/link";

const notfound = () => {
    const { type } = useTheme();
    return (
        <>
            <Head>
                <title>404 | PAGE NOT FOUND</title>
            </Head>

            <div className="flex h-screen">
                <div className="my-auto md:m-auto">
                    <Card className="border-none p-2">
                        <Card.Header className="flex justify-end">
                            <ToggleTheme />
                        </Card.Header>
                        <Card.Body>
                            <Text size={30} >
                                404 | PAGE NOT FOUND
                            </Text>
                            <Text size="$md"
                                color="error"
                                className="text-center">
                                It seems you are lost
                            </Text>
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

export default notfound
