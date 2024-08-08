"use client"
import React, { useState } from 'react'
import { Montserrat, Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['300', '400', '500'],
    subsets: ['latin'],
})

const montserrat = Montserrat({
    weight: ['300', '400', '500'],
    subsets: ['latin'],
})

const IndustryNames = ["Agriculture", "Energy", "Healthcare", "Infrastructure", "Consumer & Retail", "E-commerce", "Real Estate", "Digital Services"]
const IndustryDescriptions = ["Revolutionizing agricultural practices by investing in innovative farming technologies and sustainable growth strategies to secure the future of food production.", "Focusing on the transformation of the energy sector through the acquisition of forward-thinking companies specializing in renewable resources and efficient power solutions.", "Improving patient care and healthcare delivery by integrating cutting-edge technology and services through strategic partnerships and acquisitions.", "Building the backbone of tomorrow’s cities by investing in and expanding companies dedicated to modernizing global infrastructure, from transportation to utilities.", "Elevating the consumer experience by bringing innovative retail solutions and products to market through strategic acquisitions and growth initiatives.", "Capturing the digital marketplace by aligning with e-commerce platforms and logistic innovators poised for exponential growth in the online shopping ecosystem.", "Transforming the real estate landscape by acquiring and developing properties with potential for high returns, focusing on sustainability and community impact.", "Leading the digital transformation by investing in services and platforms that redefine how businesses operate and engage with their customers in the digital age."]
const IndustryImageURL = ["/Agriculture Industry.png", "/Energy Industry.png", "/Healthcare Industry.png", "/Infrastructure Industry.png", "/Consumer & Retail Industry.png", "/E-commerce Industry.png", "/Real Estate Industry.png", "/Digital Services Industry.png"]


const Industries = () => {
    // Initialize state to null since no industry is clicked by default
    const [clickedIndustryIndex, setClickedIndustryIndex] = useState<null | number>(null);

    // Function to handle click event, setting the clicked industry's index
    const handleDescriptionClick = (index: number) => {
        // Toggle the description: if already shown, hide it; otherwise, show it
        if (clickedIndustryIndex === index) {
            setClickedIndustryIndex(null); // Hide the description if the same industry is clicked again
        } else {
            setClickedIndustryIndex(index); // Show the description of the clicked industry
        }
    };
    return (
        <div className="flex flex-col 2xl:max-w-[1250px] xl:max-w-[1100px] mx-auto">
            <div className="flex flex-col justify-between md:mb-0 mb-4 max-w-11/12">
                <div className="flex">
                    <h1 className={`${poppins.className} text-3xl`}><b className="gold-grad mr-2">Industries</b>We Work With.</h1>
                </div>
                <div className="flex mt-4 mb-8">
                    <h3 className={`${montserrat.className} text-white/60 text-sm`}>We specialize in transforming businesses to build the next generation of wealth and society.</h3>
                </div>
            </div>
            <div className="flex">
                <div className="flex flex-wrap justify-center">
                    {IndustryNames.map((industry: string, index): JSX.Element => {
                        return (
                            <div key={index} className={`flex flex-col border-b border-b-white/20 hover:border-b-white/50 industry-container px-4 my-3 mx-5`}>
                                <div onClick={() => handleDescriptionClick(index)} className="flex justify-between cursor-pointer">
                                    <div className="flex items-center">
                                        <img
                                            src={IndustryImageURL[index]}
                                            className="w-[50px]"
                                        />
                                        <h1 className="text-[20px] ml-8">{industry}</h1>
                                    </div>
                                    <div>
                                        <div className="relative h-14 flex items-center justify-center">
                                            <div className="h-[1px] w-4 bg-white"></div>
                                            <div className={`absolute w-[1px] h-4 bg-white ${clickedIndustryIndex === index && "rotate-90"}`}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="industry-description 2xl:max-w-[550px] xl:max-w-[450px]">
                                    <h3 className={`${clickedIndustryIndex === index ? "expanded" : "collapsed"} text-[16px] translate-y-[0] text-white/60`}>
                                        {IndustryDescriptions[index]}
                                    </h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Industries