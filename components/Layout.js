import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";


const Layout = ({ title, children, pagePath }) => {
    return (
        <div className="relative lg:h-screen">
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