import React from 'react'
import ContactImg from './contact.gif';

export default function Contact() {
    return (
        <main id='contact-section'>

            {/* Contact container */}
            <section className='dark:bg-blue_10 dark:text-white duration-500 px-4 sm:px-7 md:px-14 lg:px-32 xl:px-40 py-4 md:py-8 xl:py-12'>

                {/* Contact heading container */}
                <div className='flex gap-2 justify-center sm:justify-start'>
                    <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-blue_10 dark:text-blue_50 py-1 lg:py-2'>&lt;Get in touch/&gt;</h1>
                    <div className='border-b-gray-300 border-b w-1/4 hidden sm:block'></div>
                </div>

                {/* Contact content container */}
                <div className='grid col-span-12 md:grid-cols-12 pt-4 pb-10 sm:py-10'>
                    {/* Text container */}
                    <div className='col-span-12 md:col-span-8 order-2 md:w-11/12'>
                        <div className='flex flex-col justify-center items-center font-medium xl:text-lg text-blue_30 dark:text-blue_90'>
                            <p className='text-center pb-10 md:py-10'>
                                Whether you have a project in mind that you want to get built or just want to say hi, I’ll try my best to get back to you! Let me know if you are interested in working together. We should queue up a time to chat & I’ll buy the coffee <i className="fa-solid fa-mug-hot"></i>.
                            </p>
                            <button className='outline-btn hover:solid-btn border-blue_30 dark:border-blue_90 w-3/5 sm:w-2/5'>
                                <a href="mailto:dsumansaurabh@gmail.com">Let's do this <i className="fa-solid fa-face-laugh-wink"></i></a>
                            </button>
                        </div>
                    </div>
                    {/* Image container */}
                    <div className='col-span-12 ml-auto mr-auto md:col-span-4 order-1 md:order-3'>
                        <div className='h-40 md:h-56 aspect-square'>
                            <img className='h-full w-full rounded-lg' src={ContactImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
