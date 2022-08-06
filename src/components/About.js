import React from 'react'

export default function About() {
  return (
    <main>

      {/* About Container */}
      <section className='dark:bg-blue_10 dark:text-white duration-500 px-4 sm:px-7 md:px-14 lg:px-32 xl:px-40 py-4 md:py-8 xl:py-12'>

        {/* About Heading Container */}
        <div className='flex gap-2'>
          <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-blue_10 dark:text-blue_50 py-1 lg:py-2'>&lt;About Me/&gt;</h1>
          <div className='border-b-gray-300 border-b w-1/4 hidden sm:block'></div>
        </div>

        {/* About Content Container */}
        <div className='grid col-span-12 md:grid-cols-12 py-10'>
          {/* Text container */}
          <div className='col-span-12 md:col-span-7 font-medium xl:text-lg text-blue_30 dark:text-blue_90 order-2'>
            <p className='pb-5'>
              Hi there ! My name is Saurabh and I enjoy creating things for the web. I was always curious about websites so I started learning how they are built and technologies behind it. With time my interest grew more & more and I decided to start a career in this field.
            </p>
            <p className='pb-5'>
              Currently I am working as an analyst in <a href='/' className='text-blue_10 dark:text-blue_50 hover:underline'>Accenture</a>. My main focus these days are on improving my skills on React.js and tinkering with what I have learned to create some awesome digital experiences. Recently I have developed the frontend for a <a href='/' className='text-blue_10 dark:text-blue_50 hover:underline'>travel booking website</a> as a freelance project.
            </p>
            <p className='pb-5'>
              Here are the technologies and frameworks that I have explored so far -
              <div className='flex'>
                <ul className='mr-10'>
                  <li><i class="uil uil-angle-double-right text-blue_10 dark:text-blue_50"></i> Javascript (ES6+) </li>
                  <li><i class="uil uil-angle-double-right text-blue_10 dark:text-blue_50"></i> React</li>
                  <li><i class="uil uil-angle-double-right text-blue_10 dark:text-blue_50"></i> Git</li>
                </ul>
                <ul className=''>
                  <li><i class="uil uil-angle-double-right text-blue_10 dark:text-blue_50"></i> Tailwind</li>
                  <li><i class="uil uil-angle-double-right text-blue_10 dark:text-blue_50"></i> Bootstrap</li>
                  <li><i class="uil uil-angle-double-right text-blue_10 dark:text-blue_50"></i> Figma</li>
                </ul>
              </div>
            </p>

          </div>
          {/* Image container */}
          <div className='col-span-12 md:col-span-5 order-1 md:order-3 pb-5'>
            <div className='flex justify-center items-center'>
              <div className='border-2 border-blue_10 dark:border-blue_50 h-60 sm:h-64 md:h-56 lg:h-72 aspect-square box-border shadow-sm shadow-blue_10 dark:shadow-blue_50 relative'>
                <img className='absolute object-cover w-full -top-2 -left-2 border-2 border-blue_10 dark:border-blue_50' src="https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}