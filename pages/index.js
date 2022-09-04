import Layout from "@/components/Layout";
import Image from "next/image";
import { Text } from "@nextui-org/react";
import { FaRocket } from 'react-icons/fa'
import Link from "next/link";
import About from "@/components/About";

export default function Home() {
  return (
    <Layout title={'Home Page'}>
      <div className="px-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-8">
          <section>
            <Text h1
              size={50}
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
              }}
              weight="bold"
            >
              Send Secret
            </Text>
            <Text h1
              size={50}
              css={{
                textGradient: "45deg, $purple600 -20%, $pink600 90%",
              }}
              weight="bold"
            >
              Anonymous Messages
            </Text>
            <Text h1
              size={50}
              css={{
                textGradient: "45deg, $blue800 -20%, $pink600 50%",
              }}
              weight="bold"
            >
              Online
            </Text>

            <Text size={"$xl"} className="my-8">
              Anonymous is an interactive anonymous messaging app with a dare game. Create your Profile Link and Send it to all your contacts to check what your friends think about you. With the help of Anonymous, you can send and recieve anonymous compliments easily and for free!
            </Text>
          </section>
          <section className="m-auto">
            <Image src={'https://ershemug.sirv.com/anonymous-app/IMG_9570.PNG'}
              className="h-full"
              alt="message man" width={400} height={400} />
          </section>
        </div>
        <Link href={'/auth/register'}>
          <a
            className="w-full py-2 rounded-md 
            flex justify-center gap-x-1
             bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
             "
          >
            <span className="text-2xl">
              Get Started
            </span>
            <FaRocket className="my-auto w-8 h-6 text-gradient-to-l from-red-500 to-pink-500" />
          </a>
        </Link>
        <br />
        <About />
      </div>
    </Layout>
  )
}
