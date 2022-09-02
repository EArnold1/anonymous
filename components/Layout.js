import Head from "next/head";


const Layout = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <div className="container mx-auto pt-20">
                {children}
            </div>
        </>
    )
}
Layout.defaultProps = {
    title: 'Annoymous'
}

export default Layout;