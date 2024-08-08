"use client"
import React, { useState } from 'react';
import { Montserrat, Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['300', '400', '500'],
    subsets: ['latin']
})

const montserrat = Montserrat({
    weight: ['300', '400', '500'],
    subsets: ['latin']
})

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false); // New state variable to track submission

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission behavior

        const formData = { name, email, message };

        try {
            const response = await fetch('/api/formSubmit', { // Adjust the endpoint as needed
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result);
                // Handle success (e.g., show a success message)
                // Reset form or redirect user as needed
                setSubmitted(true); // Update the state to indicate successful submission
            } else {
                // Handle error (e.g., show an error message)
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div className="2xl:w-[1250px] xl:w-[1000px] md:w-7/12 w-10/12 my-52 flex lg:flex-row flex-col justify-center mx-auto">
            <div className="flex flex-col lg:mr-[5%]">
                <div className="flex">
                    <div className="bg-white flex justify-center align-center rounded-full">
                        <div className="flex px-2.5 py-0.5 items-center text-black">
                            <h3 className={`${montserrat.className} font-medium mx-1 text-[15px] font-montserrat flex items-center`}>
                                <div className="w-1 h-1 bg-orange-400 rounded-full mr-1.5"/>
                                Contact Us
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="flex mt-3 mb-7">
                    <h1 className={`${poppins.className} font-medium text-[40px]`}>Let's <b className="gold-grad font-semibold">Work</b> Together</h1>
                </div>
                <div className="flex">
                    <h3 className={`${montserrat.className} font-medium md:text-[15px] text-[13.5px] text-white/60`}>Are you ready to take your company to the next level? Let’s embark on a transformative journey together with BGINTL, where innovation meets strategy to unlock your business's full potential.</h3>
                </div>
            </div>
            <div className="flex flex-col lg:ml-[5%] lg:mt-0 mt-14 w-full">
                {!submitted ? ( // Conditional rendering based on the submitted state
                    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Name"
                            className={`bg-transparent border-b border-gray-400 text-white placeholder-white/60 focus:outline-none ${poppins.className} 2xl:text-[40px] lg:text-[36px] md:text-[32px] text-[30px]`}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className={`bg-transparent border-b border-gray-400 text-white placeholder-white/60 focus:outline-none ${poppins.className} 2xl:text-[40px] lg:text-[36px] md:text-[32px] text-[30px]`}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder="Message"
                            className={`bg-transparent border-b border-gray-400 text-white placeholder-white/60 focus:outline-none ${poppins.className} 2xl:text-[40px] lg:text-[36px] md:text-[32px] text-[30px]`}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                        <div className="butt flex pt-[20px]">
                            <button
                                type="submit"
                                className="form-button relative border border-white text-white px-[40px] py-[20px] hover:text-black transition-colors text-[17px]"
                            >
                                <div className="-z-10 absolute w-full h-full bg-white top-0 left-0 form-button-hover origin-left" />
                                Send Message
                            </button>
                        </div>
                        <div className="origin-left form-button-line h-[1px] w-[200px] bg-white mt-4" />
                    </form>
                ) : (
                    <div className="text-white px-4 py-2 border border-white rounded-md">
                        Thanks, your form has been submitted!
                    </div>
                )}
            </div>
        </div>
    )
}

export default Contact