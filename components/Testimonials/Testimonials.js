import react from 'react';

import data from './data.json';

const Testimonials = () => {
    return (
        <section id='testimonials' className='relative' style={{ backgroundImage: "url('/images/cleanliness-bg.jpg')", backgroundSize: 'cover' }}>
            <div className='absolute inset-0 bg-[#252B70] opacity-90'></div>

            <div className='relative z-10 py-20 text-center text-white'>
                <h3 className='text-[2.5625rem] font-playfair pb-8'>What Our Customers Say</h3>
                <div className='flex gap-12 justify-around mx-auto max-w-6xl max-[767px]:flex-col max-[767px]:px-12'>
                    {data && data.testimonials && data.testimonials.map((testimony, idx) => {
                        return <Card key={idx} content={testimony} />
                    })}
                </div>
            </div>
            <div className="absolute left-0 bottom-[-1px] w-[100%] rotate-180">
                <svg className="h-[0.9375rem] left-[50%] w-[100%]" xmlns="http://www.w3.org/2000/svg" fill='#ffffff' viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path class="elementor-shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
                        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
                        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                </svg>
            </div>
        </section>
    )
}

const Card = ({ content }) => {
    return (
        <div className='flex-1 py-20 px-[2rem] bg-[#FFFFFF40] font-abzee'>
            <div className='text-[1.375rem] mb-5'>{content.name}</div>
            <div>{content.content}</div>
        </div>
    )
}

export default Testimonials