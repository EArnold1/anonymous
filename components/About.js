import { Text, Card } from "@nextui-org/react";
import Image from "next/image";
const About = () => {
    return (
        <div className='text-center my-8'>
            <header className="w-full lg:w-2/4 mx-auto">
                <Text h1
                    size={40}
                    css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    }}
                    weight="bold"
                >
                    Why use Anonymous?
                </Text>
                <br />
                <Text size={'xl'}>
                    Our Anonymous Messaging App comes along with many great features. Here we are going to list some of them. Have a look below.
                </Text>
            </header>
            <br />
            <section className="grid grid-cols-1 lg:grid-cols-4 gap-5 mb-20">
                <Card className="border-none relative py-8">
                    <Card.Header>
                        <div className="absolute top-0 right-0">
                            <Image src={'https://ershemug.sirv.com/anonymous-app/IMG_9570.PNG'}
                                alt="message man" width={100} height={100} />
                        </div>
                        <Text h3
                            css={{
                                textGradient: "45deg, $cyan600 -20%, $blue600 80%",
                            }}
                        >
                            ANONYMITY
                        </Text>

                    </Card.Header>
                    <Card.Body>
                        <Text size={'md'}
                        >
                            Our Platform ensures your privacy so that you stay anonymous everytime you send someone a secret message. You are anonymous until you ever choose to reveal your identity.
                        </Text>

                    </Card.Body>
                </Card>
                {/*  */}
                <Card className="border-none relative py-8">
                    <Card.Header>
                        <div className="absolute top-0 right-0">
                            <Image src={'https://ershemug.sirv.com/anonymous-app/IMG_9746.PNG'}
                                alt="message man" width={100} height={100} />
                        </div>
                        <Text h3
                            css={{
                                textGradient: "45deg, $green600 -20%, $pink600 100%",
                            }}
                        >
                            SAFE &amp; SECURE
                        </Text>

                    </Card.Header>
                    <Card.Body>
                        <Text size={'md'}
                        >
                            Safety of our users using this anonymous messaging platform is very important for us. We have got reporting systems so that you can report anything that you do not like to see.
                        </Text>

                    </Card.Body>
                </Card>
                {/*  */}
                <Card className="border-none relative py-8">
                    <Card.Header>
                        <div className="absolute top-0 right-0">
                            <Image src={'https://ershemug.sirv.com/anonymous-app/IMG_9745.PNG'}
                                alt="message man" width={100} height={100} />
                        </div>
                        <Text h3
                            css={{
                                textGradient: "45deg, $yellow600 -20%, $purple600 100%",
                            }}
                        >
                            24/7 SUPPORT
                        </Text>

                    </Card.Header>
                    <Card.Body>
                        <Text size={'md'}
                        >
                            If there is anything that you need help with related to our anonymous messaging and feedback platform, We are always here for you. 24 hours a day and 7 days a week.
                        </Text>
                    </Card.Body>
                </Card>
                {/*  */}
                <Card className="border-none relative py-8">
                    <Card.Header>
                        <div className="absolute top-0 right-0">
                            <Image src={'https://ershemug.sirv.com/anonymous-app/IMG_9570.PNG'}
                                alt="message man" width={100} height={100} />
                        </div>
                        <Text h3
                            css={{
                                textGradient: "45deg, $red700 -20%, $cyan600 80%",
                            }}
                        >
                            EASY 2 USE
                        </Text>

                    </Card.Header>
                    <Card.Body>
                        <Text size={'md'}
                        >
                            We are constantly working on Kubool as a platform to make it as user friendly as possible. As of now you can just download our app, fill in your username & pass to get started.
                        </Text>

                    </Card.Body>
                </Card>
            </section>
        </div>
    )
}

export default About
