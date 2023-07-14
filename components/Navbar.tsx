import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import AuthProviders from './AuthProviders'
import { NavLinks } from '@constant'


const Navbar = () => {
    const session = false
    return (
        <nav  className="flexBetween navbar">
            <div className="flex-1 flexStart gap-10">
                <Link href="/">
                    <Image 
                        src="/diyers.svg"
                        width={115}
                        height={43}
                        alt="Diy-ers"
                    />
                </Link>
                <ul className="xl:flex hidden text-small gap-7">
                    {NavLinks.map((nav)=>(
                        <Link href={nav.href} key={nav.key}>{nav.text}</Link>
                    ))}
                </ul>
            </div>
            <div className="flexCenter gap-4">
                {session ? (
                <>
                    UserPhoto

                    <Link href='./create-diy'>
                        Create DIY
                    </Link>
                </>): <AuthProviders />}
            </div>
        </nav>
    )
}


export default Navbar 