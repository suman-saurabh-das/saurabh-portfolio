import React from 'react'

export default function EdgeMenu() {
  return (
    <main>
      <section className='hidden lg:block'>
        <div className='fixed bottom-0 left-10 flex flex-col text-xl'>
          {/* <a className='relative bottom-32 hover:text-blue_30 dark:text-white dark:hover:text-blue_60' href="/"><i class="uil uil-instagram"></i></a> */}
          <a className='relative bottom-24 hover:text-blue_30 dark:text-white dark:hover:text-blue_60' href="/"><i class="uil uil-linkedin-alt"></i></a>
          <a className='relative bottom-16 hover:text-blue_30 dark:text-white dark:hover:text-blue_60' href="/"><i class="uil uil-github-alt"></i></a>
          <a className='relative bottom-8 hover:text-blue_30 dark:text-white dark:hover:text-blue_60' href="/"><i class="uil uil-twitter-alt"></i></a>
          <div className='border-l-2 border-gray-500 h-40 relative bottom-0 left-1'></div>
        </div>
        <div className='fixed bottom-0 right-12'>
          <a className='absolute bottom-44 text-sm font-semibold hover:text-blue_30 dark:text-white dark:hover:text-blue_60' style={{writingMode:'vertical-rl'}} href="/">dsumansaurabh@gmail.com</a>
          <div className='border-l-2 border-gray-500 h-40 absolute bottom-0 left-2'></div>
        </div>
      </section>
    </main>
  )
}
