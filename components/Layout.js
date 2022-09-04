import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useRouter } from "next/router";

const Layout = ({ title, children, pagePath }) => {
    // const router = useRouter();
    console.log(process.env.NEXT_PUBLIC_CLIENT_URL)
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <NavBar pagePath={pagePath} />
            <div className="container mx-auto pt-20 mb-5">
                {children}
            </div>
            <br />
            <Footer />
        </div>
    )
}
Layout.defaultProps = {
    title: 'Annoymous',
    pagePath: ''
}

export default Layout;