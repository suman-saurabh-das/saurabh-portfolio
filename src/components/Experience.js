import React from 'react';
import Development from './development.gif';

export default function Experience() {
    return (
        <main id='experience-section'>

            {/* Work Experience Container */}
            <section className='dark:bg-blue_10 dark:text-white duration-500 px-4 sm:px-7 md:px-14 lg:px-32 xl:px-40 py-4 md:py-8 xl:py-12'>

                {/* Experience heading container */}
                <div className='flex gap-2'>
                    <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-blue_10 dark:text-blue_50 py-1 lg:py-2'>&lt;Where I've Worked/&gt;</h1>
                    <div className='border-b-gray-300 border-b w-1/4 hidden sm:block'></div>
                </div>

                {/* Experience content container */}
                <div className='grid col-span-12 sm:grid-cols-12 items-center'>
                    {/* Experience content */}
                    <div className='col-span-7 font-medium xl:text-lg text-blue_30 dark:text-blue_90 py-5 sm:py-10'>
                        <h3 className='text-sm'><span className='text-xl text-blue_10 dark:text-blue_50'>
                            Analyst @ Accenture</span><br />(2021 - Present)</h3>
                        <h4 className='mt-5'>Key Responsibilities</h4>
                        <p className='pl-5'>
                            <i class="uil uil-angle-double-right text-blue_10 dark:text-blue_50"></i> Implementing and supporting real-time data management applications using OSI-suite of products such as PI interfaces, PI AF, PI server, etc. <br />
                            <i class="uil uil-angle-double-right text-blue_10 dark:text-blue_50"></i> Collecting, analyzing and visualizing real-time data. <br />
                            <i class="uil uil-angle-double-right text-blue_10 dark:text-blue_50"></i> Advocating for customer's needs. <br />
                            <i class="uil uil-angle-double-right text-blue_10 dark:text-blue_50"></i> Coordinating with clients, project team and stakeholders.
                        </p>
                        <h4 className='mt-5'>Key Achievement</h4>
                        <p className='pl-5'>
                            <i class="uil uil-angle-double-right text-blue_10 dark:text-blue_50"></i> Published and currently implementing a continuous improvement idea to automate the process of data backfilling to reduce manual efforts and
                            errors thereby saving time and improving the process.
                        </p>
                    </div>

                    {/* Experience Image / gif */}
                    <div className='col-span-12 sm:col-span-5'>
                        <img src={Development} alt="App development gif" />
                    </div>
                </div>
            </section>
        </main>
    )
}
