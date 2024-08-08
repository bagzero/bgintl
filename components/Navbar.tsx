"use client"
import React, { useEffect, useState } from 'react'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'

const montserrat = Montserrat({
    weight: ['300', '400'],
    subsets: ['latin']
})

const Navbar = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Set state to true if page is scrolled down by any amount, otherwise false
            const scrollPosition = window.scrollY;
            setHasScrolled(scrollPosition > 0);
        };

        // Add event listener when component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener when component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="flex justify-center sticky z-10 top-0 backdrop-blur-sm rounded-b-3xl">
            <div className={`md:w-3/4 w-11/12 ${montserrat.className} flex justify-between py-6`}>
                <Link
                    href="/"
                    className="md:-ml-14"
                >
                    <img
                        src="/BGINTL white logo horiz.png"
                        className="w-[200px]"
                    />
                </Link>
                <div className="md:hidden flex flex-col">

                </div>
                <div className="font-light text-[12px] items-center md:flex hidden">
                    <Link
                        href="/"
                        className=""
                    >
                        <h1 className={`nav-item  ${hasScrolled ? "text-white/80 hover:text-white" : "text-black"}`}>ABOUT</h1>
                        <div className={`w-1/2 mx-auto h-[1px] nav-underline ${hasScrolled ? "bg-white" : "bg-black"}`}></div>
                    </Link>
                    <Link
                        href="/"
                        className="mx-8 "
                    >
                        <h1 className={`nav-item  ${hasScrolled ? "text-white/80 hover:text-white" : "text-black"}`}>CREATORS</h1>
                        <div className={`w-1/2 mx-auto h-[1px] nav-underline ${hasScrolled ? "bg-white" : "bg-black"}`}></div>
                    </Link>
                    <Link
                        href="https://calendly.com"
                        className=""
                    >
                        <h1 className={`nav-item  ${hasScrolled ? "text-white/80 hover:text-white" : "text-black"}`}>CONTACT</h1>
                        <div className={`w-1/2 mx-auto h-[1px] nav-underline ${hasScrolled ? "bg-white" : "bg-black"}`}></div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar