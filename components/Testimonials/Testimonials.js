import react from 'react';

import data from './data.json';

const Testimonials = () => {
    return (
        <section className='relative' style={{ backgroundImage: "url('/images/cleanliness-bg.jpg')", backgroundSize: 'cover' }}>
            <div className='absolute inset-0 bg-[#252B70] opacity-90'></div>

            <div className='relative z-10 py-20 text-center text-white'>
                <h3 className='text-[2.5625rem] font-playfair pb-8'>What Our Customers Say</h3>
                <div className='flex gap-12 justify-around mx-auto max-w-6xl max-[767px]:flex-col max-[767px]:px-12'>
                    {data && data.testimonials && data.testimonials.map((testimony, idx) => {
                        return <Card key={idx} content={testimony} />
                    })}
                </div>
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