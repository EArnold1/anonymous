import Link from 'next/link'
import React from 'react'
import ToggleTheme from './ToggleTheme'
import { Navbar as NavBarComp, Text } from "@nextui-org/react"
import { useTheme } from "@nextui-org/react";


const NavBar = () => {
    const { type } = useTheme();

    return (
        <NavBarComp isBordered variant="sticky">
            <NavBarComp.Toggle showIn="xs" />
            <NavBarComp.Brand
                css={{
                    "@xs": {
                        w: "12%",
                    },
                }}
            >
                <Text b color="inherit">
                    <Link href={'/'}>
                        ANONYMOUS
                    </Link>
                </Text>
            </NavBarComp.Brand>
            <NavBarComp.Content
                activeColor="secondary"
                variant="highlight-rounded"
                hideIn="xs"
            >
                <Link href="/auth/dashboard">
                    <NavBarComp.Link isActive>
                        Dashboard
                    </NavBarComp.Link>
                </Link>
                <Link href="/account/messages">
                    <NavBarComp.Link>
                        Messages
                    </NavBarComp.Link>
                </Link>
            </NavBarComp.Content>
            {/*  */}
            <NavBarComp.Content
            // activeColor={'secondary'}
            // variant="highlight-rounded"
            >
                <Link href="/auth/login">
                    <NavBarComp.Link hideIn={"xs"}>
                        Login
                    </NavBarComp.Link>
                </Link>
                <Link href="/auth/register">
                    <NavBarComp.Link hideIn={"xs"}>
                        Register
                    </NavBarComp.Link>
                </Link>
                <Link href="/">
                    <NavBarComp.Link hideIn={"xs"}
                        className={type === 'dark' ? 'p-3 bg-gray-600 rounded-2xl' : 'p-3 bg-gray-100 rounded-2xl'}
                    >
                        Logout
                    </NavBarComp.Link>
                </Link>
                <ToggleTheme />
            </NavBarComp.Content>
            <NavBarComp.Collapse>
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

