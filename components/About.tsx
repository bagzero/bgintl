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

const text = [
    "A Venture Conglomerate,",
    "Building the Future",
    "With Global Enterprises."
]

const About = () => {
    return (
        <div className="mt-52 mb-52 flex justify-center items-center">
            <div className="xl:w-[1250px] md:w-2/3 w-10/12 lg:flex-row flex-col flex justify-between">
                <div className="flex flex-col justify-center lg:mb-0 mb-8">
                    <div className=''>
                        <h1 className={`${montserrat.className} text-[14px] md:mb-4 mb-6`}>We are:</h1>
                        {text.map((para: string): JSX.Element => {
                            return (
                                // FOR THE PREVIOUS OUTLINE TO ORANGE FILL HOVER EFFECT
                                // <div className="flex mb-4 text-wrapper 2xl:text-[95px] xl:text-[90px] text-[60px]">
                                //     <div className="w-[1px] bg-white/20 mr-[20px]"/>
                                //     <h1 className={`${teko.className} leading-[1] text-outline max-h-[100px] text-white/80 font-light hover-text-outline`}>
                                //         {para}
                                //     </h1>
                                //     <h1 className={`${teko.className} text-fill leading-[1] max-h-[100px] text-white/80 font-light hover-text-outline`}>
                                //         {para}
                                //     </h1>
                                // </div>
                                <div className="flex mb-6 text-wrapper 2xl:text-[95px] xl:text-[70px] md:text-[65px] text-[35px]">
                                    <div className="w-[1px] bg-white/20 mr-[20px]" />
                                    <h1 className={`${teko.className} leading-[1] max-h-[100px] text-white/60 font-light`}>
                                        {para}
                                    </h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="from-black/50 to-black p-[1px] rounded-2xl hover:scale-95 border-black hover:border hover:border-orange-300/60 flex justify-center">
                        <img
                            src="/BGINTL white symbol.png"
                            alt=""
                            className="rounded-2xl 2xl:w-[488px] xl:w-[350px] md:w-[350px] w-[220px] bg-gradient-to-b from-neutral-900 to-black"
                        />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default About