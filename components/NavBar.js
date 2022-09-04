import { useContext } from 'react';
import Link from 'next/link'
import ToggleTheme from './ToggleTheme'
import { Navbar as NavBarComp, Text } from "@nextui-org/react"
import { useTheme } from "@nextui-org/react";
import { useRouter } from 'next/router';
import AuthContext from 'context/AuthContext';

const NavBar = ({ pagePath }) => {
    const { user, logout } = useContext(AuthContext);

    const { type } = useTheme();

    const router = useRouter()

    return (
        <NavBarComp isBordered maxWidth={'fluid'} variant="sticky">
            <NavBarComp.Toggle showIn="xs" />
            <NavBarComp.Brand
                css={{
                    "@xs": {
                        w: "12%",
                    },
                }}
            >
                <Text h1 size={30} b color="inherit">
                    <Link href={'/'}>
                        ANONYMOUS
                    </Link>
                </Text>
            </NavBarComp.Brand>
            <NavBarComp.Content
                activeColor="secondary"
                variant="highlight-solid-rounded"
                hideIn="xs"
            >
                {
                    user !== null ? (
                        <>
                            <Link href="/account/dashboard">
                                <NavBarComp.Link isActive={'/account/dashboard' === pagePath}>
                                    Dashboard
                                </NavBarComp.Link>
                            </Link>
                            <Link href="/account/messages">
                                <NavBarComp.Link isActive={'/account/messages' === pagePath}>
                                    Messages
                                </NavBarComp.Link>
                            </Link></>
                    ) : (
                        <>
                            <Link href="/auth/login">
                                <NavBarComp.Link
                                    className="hidden md:flex"
                                    isActive={'/auth/login' === pagePath}>
                                    Login
                                </NavBarComp.Link>
                            </Link>
                            <Link href="/auth/register">
                                <NavBarComp.Link
                                    className="hidden md:flex"
                                    isActive={'/auth/register' === pagePath}>
                                    Register
                                </NavBarComp.Link>
                            </Link>
                        </>
                    )
                }

            </NavBarComp.Content>
            {/*  */}
            <NavBarComp.Content
            // activeColor={'primary'}
            // variant="highlight-solid-rounded"
            >
                <Link href="/contact">
                    <NavBarComp.Link
                        className="hidden md:flex"
                        isActive={'/contact' === pagePath}>
                        Contact
                    </NavBarComp.Link>
                </Link>
                {user !== null &&
                    <Link href="/">
                        <NavBarComp.Link
                            hideIn={"xs"}
                            className={type === 'dark' ? 'p-2 bg-red-600 rounded-2xl mx-2 hidden md:flex' : 'p-2 bg-red-100 rounded-2xl mx-2 hidden md:flex'}
                            onClick={logout}
                        >
                            Logout
                        </NavBarComp.Link>
                    </Link>}
                <ToggleTheme />
            </NavBarComp.Content>
            <NavBarComp.Collapse
                showIn={"xs"}
            >
                <NavBarComp.CollapseItem
                >
                    <Link
                        color="inherit"
                        css={{
                            minWidth: "100%",
                        }}
                        href="/account/messages"
                    >
                        Messages
                    </Link>
                </NavBarComp.CollapseItem>
                <NavBarComp.CollapseItem
                >
                    <Link href={'/account/dashboard'}
                        color="inherit"
                        css={{
                            minWidth: "100%",
                        }}
                    >
                        Dashboard
                    </Link>
                </NavBarComp.CollapseItem>
                <NavBarComp.CollapseItem
                >
                    <Link href={'/'}
                        color="inherit"
                        css={{
                            minWidth: "100%",
                        }}
                    >
                        Logout
                    </Link>
                </NavBarComp.CollapseItem>
            </NavBarComp.Collapse>
        </NavBarComp>
    )
}

export default NavBar

