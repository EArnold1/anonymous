import Link from 'next/link'
import React from 'react'
import ToggleTheme from './ToggleTheme'
import { Navbar as NavBarComp, Link as UiLink, Text } from "@nextui-org/react"
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
                        ANNONYMOUS
                    </Link>
                </Text>
            </NavBarComp.Brand>
            <NavBarComp.Content
                activeColor="secondary"
                variant="highlight-rounded"
                hideIn="xs"
            >
                <NavBarComp.Link href="/account/dashboard">
                    Dashboard
                </NavBarComp.Link>
                <NavBarComp.Link href="/account/messages">
                    Messages
                </NavBarComp.Link>

            </NavBarComp.Content>
            {/*  */}
            <NavBarComp.Content
            // activeColor={'secondary'}
            // variant="highlight-rounded"
            >
                <NavBarComp.Link
                    hideIn="xs"
                    href="/auth/login">
                    Login
                </NavBarComp.Link>
                <NavBarComp.Link href="/auth/register"
                    hideIn="xs"
                >
                    Register
                </NavBarComp.Link>
                <NavBarComp.Link href="/"
                    hideIn="xs"
                    className={type === 'dark' ? 'p-3 bg-gray-600 rounded-2xl' : 'p-3 bg-gray-100 rounded-2xl'}
                >
                    Logout
                </NavBarComp.Link>
                <ToggleTheme />
            </NavBarComp.Content>
            <NavBarComp.Collapse>
                <NavBarComp.CollapseItem
                >
                    <UiLink href={'/account/messages'}
                        color="inherit"
                        css={{
                            minWidth: "100%",
                        }}
                    >
                        Messages
                    </UiLink>
                </NavBarComp.CollapseItem>
                <NavBarComp.CollapseItem
                >
                    <UiLink href={'/account/dashboard'}
                        color="inherit"
                        css={{
                            minWidth: "100%",
                        }}
                    >
                        Dashboard
                    </UiLink>
                </NavBarComp.CollapseItem>
                <NavBarComp.CollapseItem
                >
                    <UiLink href={'/'}
                        color="inherit"
                        css={{
                            minWidth: "100%",
                        }}
                    >
                        Logout
                    </UiLink>
                </NavBarComp.CollapseItem>
            </NavBarComp.Collapse>
        </NavBarComp>
    )
}

export default NavBar

