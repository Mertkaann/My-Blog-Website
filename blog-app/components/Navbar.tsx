import { useState, type FC } from 'react';
import Link from 'next/link';
import React from 'react';




export function Navbar() {
    const pages = [
        { name: "Home", href: "/", label: "HOME" },
        { name: "About", href: "/about", label: "ABOUT" }
    ];
    const [active, setActive] = useState(0);


    return (
        <div className='text-left flex flex-col '>
            {
                pages.map((link, i) => (
                    <Link className='text-xs pt-1' key={link.name} href={link.href} onClick={() => setActive(i)}>

                        {link.label}
                    </Link>
                ))
            }
        </div >
    )
}
