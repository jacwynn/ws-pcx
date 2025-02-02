import Image from 'next/image'
import data from './data'

const Services = () => {
    return (
        <section id='services'>
            <div className="py-20 text-center">
                <h4 className="text-[1.875rem] text-[#FCA223] font-playfair">Services</h4>
                <h3 className='text-[2.25rem] text-[#252B70] font-playfair'>A cleaning service you can trust</h3>
                <div className='mx-auto max-w-6xl'>
                    {data && data.services.map((service, idx) => {
                        return <ImageAndText key={idx} content={service} index={idx} />
                    })}
                </div>
            </div>
        </section>
    )
}

const ImageAndText = ({ content, index }) => {
    const isEven = index % 2 === 0;
    const isLastItem = index === data.services.length - 1;

    return (
        <>
            <div className={`flex gap-28 justify-center items-center space-y-16 max-[767px]:flex-col-reverse max-[767px]:gap-4 ${!isEven ? 'flex-row-reverse' : ''}`}>
                <div className={`flex-1 ${isEven ? 'text-right max-[480px]:text-center' : 'text-left max-[480px]:text-center'}`}>
                    <h4 className='text-[1.625rem] font-abzee max-[767px]:text-[1.5rem]'>{content.title}</h4>
                </div>
                <div className={`flex-1 ${!isEven ? 'flex justify-end':''}`}>
                    {/* <Image 
                        src={content.image}
                        alt="service-photo"
                        width={400}
                        height={400}
                    /> */}
                    <img src={content.image.src} className='w-[25rem]' />
                </div>
            </div>
            {!isLastItem && <hr className='mt-16 max-[767px]:hidden' />}
        </>
    )
}

export default Services