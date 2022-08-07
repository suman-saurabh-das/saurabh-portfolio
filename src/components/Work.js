import React from 'react';
import WorkCard from './WorkCard';

export default function Work() {
    return (
        <main id='work-section'>

            {/* Work container */}
            <section className='dark:bg-blue_10 dark:text-white duration-500 px-4 sm:px-7 md:px-14 lg:px-32 xl:px-40 py-4 md:py-8 xl:py-12'>

                {/* Work heading container */}
                <div className='flex gap-2 sm:pb-10 justify-center sm:justify-start'>
                    <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-blue_10 dark:text-blue_50 py-1 lg:py-2'>&lt;Some things I've built/&gt;</h1>
                    <div className='border-b-gray-300 border-b w-1/4 hidden sm:block'></div>
                </div>

                {/* Work content container */}
                <div className='grid grid-cols-12 gap-4 items-center justify-around py-10 font-medium text-sm md:text-md xl:text-base text-blue_30 dark:text-blue_90'>
                    <WorkCard
                        title='Advait-bookings'
                        content='Freelance frontend project for travel agency. Created using Bootstrap & JS.'
                        link='https://suman-saurabh-das.github.io/travel-bookings/'
                        bgImageLink='https://drive.google.com/uc?export=view&id=1kRYdI1SrAPXk_fI0V7RjkeJZrqZ9H7Bx'
                    />
                    <WorkCard
                        title='Urban Homes'
                        content='Front-end landing page for a real estate company. Created using Bootstrap.'
                        link='https://suman-saurabh-das.github.io/urban-homes/'
                        bgImageLink='https://drive.google.com/uc?export=view&id=1AmU4hr6atxGl0SOBm-5WT3FbX6HL_Dfc'
                    />
                    <WorkCard
                        title='Vegan Store'
                        content='Front-end landing page for a food store. Created using HTML, CSS & JS.'
                        link='https://suman-saurabh-das.github.io/vegan-store/'
                        bgImageLink='https://drive.google.com/uc?export=view&id=1rt5xUiLFINyA5J-d3bZahaYsFdVdyh38'
                    />
                    <WorkCard
                        title='Text-Utils'
                        content='A single page web app used to manipulate the text. Created using React & Bootstrap.'
                        link='https://suman-saurabh-das.github.io/text-utils-react/'
                        bgImageLink='https://drive.google.com/uc?export=view&id=1bb2viRul7JJYiOanGDwP9hlpsQKhQQtK'
                    />
                    <WorkCard
                        title='Crispz.eth'
                        content='Custom Portfolio website built as per users design using React & Tailwind CSS'
                        link='https://suman-saurabh-das.github.io/crispz-portfolio/'
                        bgImageLink='https://drive.google.com/uc?export=view&id=1NTn7as6pA56Uh_86y49EJrChpehWBY8O'
                    />
                    <WorkCard
                        title='Simon-game'
                        content='JavaScript based single player game built using HTML CSS & JS'
                        link='https://suman-saurabh-das.github.io/simon-game/'
                        bgImageLink='https://drive.google.com/uc?export=view&id=1u1E8EGjjGoc1BgCbgb0RGVEaI_mfULcw'
                    />
                </div>
            </section>
        </main>
    )
}
