import React from 'react'

export default function Footer() {
    return (
        <footer id='footer-menu'>

            {/* Footer */}
            <section className='dark:bg-blue_10 dark:text-white duration-500 px-4 sm:px-7 md:px-14 lg:px-32 xl:px-40 py-4 md:py-8 xl:py-12'>
                <ul className='flex justify-center items-center space-x-10 lg:hidden'>
                    <li className='text-xl text-blue_20 hover:text-blue_30 dark:text-blue_90 dark:hover:text-blue_60 hover:scale-125'>
                        <a href="https://www.linkedin.com/in/suman-saurabh-das/">
                        <i class="fa-brands fa-linkedin-in"></i></a>
                    </li>
                    <li className='text-xl text-blue_20 hover:text-blue_30 dark:text-blue_90 dark:hover:text-blue_60 hover:scale-125'>
                        <a href="https://github.com/suman-saurabh-das">
                        <i class="fa-brands fa-github"></i></a>
                    </li>
                    <li className='text-xl text-blue_20 hover:text-blue_30 dark:text-blue_90 dark:hover:text-blue_60 hover:scale-125'>
                        <a href="https://twitter.com/dsumansaurabh">
                        <i class="fa-brands fa-twitter"></i></a>
                    </li>
                    <li className='text-xl text-blue_20 hover:text-blue_30 dark:text-blue_90 dark:hover:text-blue_60 hover:scale-125'>
                        <a href="mailto:dsumansaurabh@gmail.com">
                        <i class="fa-solid fa-envelope"></i></a>
                    </li>
                </ul>

                <div className='flex flex-col justify-center items-center text-blue_20 dark:text-blue_90'>
                    <p className='font-medium py-3'><a href="https://github.com/suman-saurabh-das/saurabh-portfolio">Handcrafted by Me © twenty'22</a></p>
                    <p className='text-[12px]'>Made with <span className='text-2xl'><i class="text-blue_50 fa-brands fa-react"></i></span>&ensp;&&ensp;
                        <span className='relative -top-1'>
                            <svg className='inline-block' width="2rem" height="2rem" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M489.5 226.499C328 231.632 280 346.999 269 409.499C283.333 386.332 328.5 335.5 395 335.5C472.5 335.5 531.5 422 567.5 449C611.237 481.803 699.123 525.115 814.5 490C906.5 462 949.167 364.332 958.5 317.999C914 378.499 846.5 414.838 763 371.999C705.5 342.499 662.5 221 489.5 226.499Z" fill="#00ccff" />
                                <path d="M261 500.999C99.5 506.132 51.5 621.499 40.5 683.999C54.8333 660.832 100 610 166.5 610C244 610 303 696.5 339 723.5C382.737 756.303 470.623 799.615 586 764.5C678 736.5 720.667 638.832 730 592.499C685.5 652.999 618 689.338 534.5 646.499C477 616.999 434 495.5 261 500.999Z" fill="#00ccff" />
                                {/* Original fill for tailwind logo - #07B6D5 */}
                            </svg>
                        </span>
                    </p>
                </div>
            </section>
        </footer>
    )
}
