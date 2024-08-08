import React from 'react'
import { Montserrat, Teko } from 'next/font/google'
import { CustomButton } from '.'

const teko = Teko({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
})

const montserrat = Montserrat({
    weight: ['300', '400', '500'],
    subsets: ['latin'],
})

const Hero = () => {
    return (
        <div className="relative w-full flex flex-col items-center justify-center">
            <div className="absolute lg:-top-[150px] md:-top-[330px] -top-[280px] -z-10">
                <video autoPlay muted loop className="hero-video-background relative min-h-svh w-svw duration-0">
                    <source src="/BGINTL homepage video.mp4" type="video/mp4" />
                </video>
                <div className="bg-gradient-to-b from-transparent to-black h-[40%] w-full z-10 top-[60%] absolute" />
            </div>
            <div className="2xl:mt-[150px] xl:mt-[100px] lg:mt-[100px] mt-[150px] md:w-7/12 w-9/12">
                <div className="lg:h-2 md:h-1.5 h-1.5 w-12 bg-white rounded-sm -mt-[40px] -ml-4 lg:m-0 md:mb-4 mb-4" />
                <div className="flex flex-col">
                    <div className={`2xl:text-[300px] lg:text-[220px] md:text-[180px] text-[100px] flex font-normal 2xl:max-h-[350px] leading-[1] text-white`}>
                        <h1 className={`${teko.className}`}>B</h1>
                        <h1 className={`${teko.className}`}>G</h1>
                        <h1 className={`${teko.className} lg:ml-16 ml-8`}>I</h1>
                        <h1 className={`${teko.className}`}>N</h1>
                        <h1 className={`${teko.className}`}>T</h1>
                        <h1 className={`${teko.className}`}>L</h1>
                        <h1 className={`${teko.className}`}>.</h1>
                    </div>
                    <div>
                        <div className={`${montserrat.className} text-[16px] ml-3`}>
                            <h1 className="text-white/70 lg:my-0 md:my-4 my-8">
                                Leading the way in business expansion, we are transforming industries through the acquisition and improvement of companies, paving the path for a new era of worldwide prosperity.
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="flex xl:my-16 md:my-8 my-6 z-10 animation-delay-400">
                    <CustomButton
                        textPos="left"
                        text="Get Involved"
                        styles={`xl:mx-4 mx-3 bg-transparent border-white border flex rounded-sm 2xl:text-xl md:text-[18px] text-xs text-white hover:shadow-lg tracking-wider hover:bg-white/15 ${montserrat.className}`}
                        itemPadding="px-1"
                        imageUrl="/white right arrow.png"
                        imageSize="w-[25px]"
                        imageMove="rotate(45deg)"
                        buttonPadding={'2xl:p-4 md:p-4 p-3'}
                        destination="https://calendly.com/"
                    />
                    {/* <div className="flex flex-col relative"> */}
                    {/* <div className="w-3/4 absolute h-10 bg-white top mx-auto" /> */}
                </div>
                <div className="text-center">
                    <h1 className={`${montserrat.className} animate-bounce opacity-65 2xl:mt-32 lg:mt-32 mt-40`}>scroll</h1>
                </div>
            </div>
        </div>

    )
}

export default Hero