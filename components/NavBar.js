import Link from 'next/link'
import React from 'react'
import ToggleTheme from './ToggleTheme'

const NavBar = () => {
    return (
        <div className='flex justify-between py-4 mb-10 px-3 bg-slate-500'>
            <Link href={'/'}>
                <a className="text-2xl text-cyan-500">
                    ANNOYMOUS
                </a>
            </Link>
            <ToggleTheme />
        </div>
    )
}

export default NavBar
