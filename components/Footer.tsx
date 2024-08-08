"use client"
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    // Function to copy email to clipboard
    const copyEmailToClipboard = async () => {
        try {
            await navigator.clipboard.writeText("rkam1@bgintl.org");
        } catch (err) {
            console.error("Failed to copy email: ", err); // Error handling
        }
    };
    return (
        <footer className="flex justify-center">
            <div className="2xl:w-[1400px] xl:w-[1300px] w-3/4 border-t border-t-white/30 flex flex-col">
                <div className="mt-14 flex justify-between items-center">
                    <div onClick={copyEmailToClipboard} className="opacity-60 flex cursor-pointer hover:opacity-80">
                        <h1 className="md:text-sm text-xs">Rkam1@bgintl.org</h1>
                        <img
                            src="/copy symbol.png"
                            className="w-[20px] ml-3"
                        />
                    </div>
                    <div className="flex">
                        <Link
                            href="https://www.instagram.com/"
                            className='text-white hover:-translate-y-1 mr-6'
                        >
                            <h1 className="md:text-sm text-xs hover:text-white/60">Instagram</h1>
                        </Link>
                        <Link
                            href="https://linkedin.com/"
                            className='text-white hover:-translate-y-1'
                        >
                            <h1 className="md:text-sm text-xs hover:text-white/60">LinkedIn</h1>
                        </Link>
                    </div>
                </div>
                <div className="justify-between text-white/60 flex lg:flex-row flex-col md:text-sm text-xs items-center mt-12 mb-4">
                    <div className="w-full flex justify-center lg:justify-start">
                        <Link href="/">
                            <img src="/BGINTL white logo horiz.png"
                                className="h-[40px] -ml-3"
                            />
                        </Link>
                    </div>
                    <div className="w-full text-center lg:my-0 mt-5">
                        <h1>© 2024 BGINTL. All Rights Reserved.</h1>
                    </div>
                    <div className="w-full flex lg:justify-end justify-center">
                        <Link
                            href="/"
                        >
                            <div className="flex lucidify-hover">
                                <h1 className="mr-1">Designed & Developed by
                                </h1>
                                <div className="text-white">
                                    <h1 className="lucidify-text">Lucidify.</h1>
                                    <div className="h-[1px] bg-white/60 w-5/6 lucidify-underline" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer