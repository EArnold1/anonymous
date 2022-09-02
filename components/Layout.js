import Head from "next/head";
// import NavBar from "./NavBar";


const Layout = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            {/* <NavBar /> */}
            <div className="container mx-auto pt-20 mb-5">
                {children}
            </div>
        </>
    )
}
Layout.defaultProps = {
    title: 'Annoymous'
}

export default Layout;