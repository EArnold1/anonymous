import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: React.Children.toArray([initialProps.styles]),
        };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="https://ershemug.sirv.com/anonymous-app/3800_1_02.jpg" />
                    <link rel="apple-touch-icon" href="https://ershemug.sirv.com/anonymous-app/3800_1_02.jpg" />
                    <meta name="description" content="Hey there 👋, this is an anonymous texting app. You can use it to know your enemies 😅" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap" rel="stylesheet" />
                    {CssBaseline.flush()}
                </Head>
                <body className="font-custom">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
