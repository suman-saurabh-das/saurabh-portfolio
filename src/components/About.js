import React from 'react'

export default function About() {
  return (
    <main>

      {/* About Container */}
      <section className='dark:bg-blue_10 dark:text-white duration-500 px-4 sm:px-7 md:px-14 lg:px-28 py-4 md:py-8 xl:py-12'>

        {/* About Heading Container */}
        <div className='flex gap-2'>
          <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-blue_10 dark:text-blue_50 py-1 lg:py-2'>&lt;About Me/&gt;</h1>
          <div className='border-b-gray-300 border-b w-1/4 hidden sm:block'></div>
        </div>

        {/* About Content Container */}
        <div className="flex">
          
        </div>

      </section>
    </main>
  )
}