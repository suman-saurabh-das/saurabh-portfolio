import React, { useEffect } from 'react'

export default function Navbar({ darkTheme, setDarkTheme }) {
  useEffect(() => {
    // Function to hide/show navbar on scroll
    const navbar = document.querySelector('#navbar');
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
      let scrollTop = this.window.pageYOffset || this.document.documentElement.scrollTop;
      if(scrollTop > lastScrollTop){
        navbar.style.top = '-8rem';
      }
      else{
        navbar.style.top = '0';
      }
      lastScrollTop = scrollTop;
    })

    // Function to stop scrolling when side bar menu is open in small screens
    const toggleSideMenu = document.querySelector('#toggle-side-menu');
    toggleSideMenu.addEventListener("click", function () {
      if (toggleSideMenu.checked) {
        document.body.style.overflow = "hidden";
      }
      else {
        document.body.style.overflow = "auto";
      }
    })

    const listItemsArr = document.querySelectorAll('.list-item');
    for(let i=0; i<listItemsArr.length; i++){
      listItemsArr[i].addEventListener('click', function() {
        toggleSideMenu.checked = false;
        document.body.style.overflow = "auto";
      })
    }
  })

  return (
    <header id='navbar' className='bg-blue_90 dark:bg-blue_10 dark:text-white duration-500 fixed w-full z-20'>

      {/* Navbar Container */}
      <nav className='flex items-center justify-between px-4 sm:px-7 md:px-14 lg:px-8 py-7 md:py-0 lg:py-3 w-full'>

        {/* Navbar logo (for light & dark mode) */}
        <div>
          <a href="/">
            <img className='w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 hover:scale-110'
              src={darkTheme ? 'https://drive.google.com/uc?export=view&id=1chxlRVlZc3jZ0nc1Ac86xhh--qqxp3fv' : 'https://drive.google.com/uc?export=view&id=1qnwSfFJ2L6i1QnAUdOSiHfqH6vPq3AP0'} alt="Logo" />
          </a>
        </div>

        {/* Navigation Menu */}
        <div className='flex items-center justify-between'>

          {/* Hamburger icon toggle checkbox */}
          <input type="checkbox" id='toggle-side-menu' className='absolute h-7 w-7 cursor-pointer opacity-0 md:hidden z-50 peer' />

          {/* Hamburger icon */}
          <div id='ham-icon' className='z-40'><i className="uil uil-bars text-2xl md:hidden z-40"></i></div>

          {/* Navigation Menu Container */}
          <ul className='fixed top-0 -right-2/3 peer-checked:right-0 duration-500 pt-20 md:pt-0 pb-32 md:pb-0 bg-blue_90 w-2/3 md:w-full h-full dark:bg-blue_10 md:static font-semibold flex flex-col md:flex-row items-center justify-around md:justify-center md:text-sm lg:text-base z-30'>

            {/* Navigation Menu Links */}
            <li className='md:px-2 md:py-3 lg:px-4 lg:py-8'>
              <a className='list-item hover:text-blue_30 dark:hover:text-blue_60' href="#about-section">&lt;About Me/&gt;</a>
            </li>
            <li className='md:px-2 md:py-3 lg:px-4 lg:py-8'>
              <a className='list-item hover:text-blue_30 dark:hover:text-blue_60' href="#experience-section">&lt;Experience/&gt;</a>
            </li>
            <li className='md:px-2 md:py-3 lg:px-4 lg:py-8'>
              <a className='list-item hover:text-blue_30 dark:hover:text-blue_60' href="#work-section">&lt;Work/&gt;</a>
            </li>
            <li className='md:px-2 md:py-3 lg:px-4 lg:py-8'>
              <a className='list-item hover:text-blue_30 dark:hover:text-blue_60' href="#contact-section">&lt;Contact/&gt;</a>
            </li>

            {/* Light/Dark mode button */}
            <button type='button' onClick={() => setDarkTheme(!darkTheme)} className='list-item md:px-1 lg:px-2 md:py-8'>
              {darkTheme ? <span className="uil uil-brightness outline-btn"> light()</span> : <span className="uil uil-moon outline-btn"> dark()</span>}
            </button>
          </ul>
        </div>
      </nav>
    </header>
  )
}