import React from 'react'
import Coding from './coding.gif'

export default function Home() {
  return (
    <main>
      <section className='dark:bg-blue_10 dark:text-white duration-500 px-4 sm:px-7 md:px-14 lg:px-28 py-4 md:py-8 xl:py-20'>

        {/* Home container */}
        <div className='grid col-span-12 sm:grid-cols-12 items-center'>
          <div className='col-span-7'>
            
            {/* Home Content */}
            <p className='font-medium xl:text-lg text-blue_30 dark:text-blue_90 py-2 md:py-3'>Hi my name is,</p>
            <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-blue_10 dark:text-blue_50 py-1 lg:py-2'>Suman Saurabh Das</h1>
            <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-blue_10 dark:text-blue_90 py-1 lg:py-2'>&lt;I build things for the web/&gt;</h1>
            <p className='font-medium xl:text-lg text-blue_30 dark:text-blue_90 py-5 w-full sm:w-4/5 lg:w-2/3'>I am a software engineering specializing in building (and occasionally designing) awesome digital experience. I design and code beautifully simple things, and I love what I do. Currently I am working in <span className='text-blue_10 dark:text-blue_50'>Accenture</span>.</p>
            
            {/* Resume Download button */}
            <button type='button' className='py-4 pb-8 md:py-6 md:pb-6 block'>
              <a target='_blank' rel='noreferrer' href="https://drive.google.com/file/d/1yqYOgTB8W5QAN8B5FG0SwEs5fzVhYErY/view?usp=sharing" className='outline-btn'><i className="uil uil-file-download-alt"></i> resume()</a>
            </button>
          </div>

          {/* Home Gif */}
          <div className='col-span-12 sm:col-span-5'>
            <img src={Coding} alt="Person Coding gif" />
          </div>
        </div>
      </section>
    </main>
  )
}