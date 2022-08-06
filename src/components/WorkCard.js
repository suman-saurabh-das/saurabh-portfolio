import React from 'react'

export default function WorkCard({title, content, link, bgImageLink}) {
    return (
        <>
            <div className="col-span-12 sm:col-span-6 xl:col-span-4 relative max-h-64">
                <div>
                    <img className='object-cover rounded-2xl max-h-64 w-full' src={bgImageLink} alt="" />
                </div>

                {/* Overlay container */}
                <div className='flex flex-col justify-center items-center text-center absolute top-0 right-0 left-0 bottom-0 opacity-0 hover:opacity-100 transition-all duration-500 bg-blue_90 dark:bg-blue_20 rounded-2xl cursor-pointer box-content'>

                    {/* Content container */}
                    <div className='p-2 box-content'>
                        <h5 className='mb-2 font-semibold text-xl xl:text-2xl text-blue_20 dark:text-blue_60'>
                            {title}
                        </h5>
                        <p className='mb-5'>
                            {content}
                        </p>
                        <a target='_blank' rel='noreferrer' className='outline-btn hover:solid-btn border-blue_20 dark:border-blue_60 px-3 py-1 hover:px-3 hover:py-1' href={link}>
                            Visit Site <i class="uil uil-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
