import React from 'react'
import Coding from './coding.gif'

export default function About() {
  return (
    <main>
      <section className='dark:bg-blue_10 dark:text-white duration-500 px-4 sm:px-7 md:px-14 lg:px-28 xl:px-32 py-4 md:py-8 xl:py-12'>
        {/* <div className='flex gap-2'>
          <h1 className='font-bold text-4xl'>&lt;About Me/&gt;</h1>
          <div className='border-b-gray-300 border-b w-1/4'></div>
        </div> */}

        <div className='grid col-span-12 sm:grid-cols-12 items-center'>
          <div className='col-span-7'>
            {/* content */}
            <p className='font-medium xl:text-lg text-blue_30 dark:text-blue_90 py-2 md:py-3'>Hi my name is,</p>
            <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-blue_10 dark:text-blue_50 py-1'>Suman Saurabh Das</h1>
            <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-blue_10 dark:text-blue_90 py-1'>&lt;I build things for the web/&gt;</h1>
            <p className='font-medium xl:text-lg text-blue_30 dark:text-blue_90 py-5 w-full sm:w-4/5 lg:w-2/3'>I am a software engineering specializing in building (and occasionally designing) awesome digital experience. I design and code beautifully simple things, and I love what I do. Currently I am working in <span className='text-blue_10 dark:text-blue_50'>Accenture</span>.</p>
          </div>

          <div className='col-span-12 sm:col-span-5'>
            {/* coding gif */}
            <img src={Coding} alt="" />
          </div>
        </div>
      </section>
    </main>
  )
}