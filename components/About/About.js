import Image from 'next/image'

const About = () => {
    return (
        <section>
            <div className='flex gap-16 items-center py-20 mx-auto max-w-6xl max-[767px]:flex-col max-[767px]:px-12'>
                <div>
                    <Image 
                        src="/images/bucket.png"
                        alt="Cleaning bucket"
                        width={500}
                        height={500}
                    />
                </div>
                <div>
                    <h4 className='text-[1.875rem] text-[#FCA223] font-playfair'>About Us</h4>
                    <h3 className='text-[2.25rem] text-[#252B70] font-playfair'>We’re Professional Cleaning Xperts!</h3>
                    <p className='mb-2 font-abzee text-[1.1875rem]'>We’re a cleaning company based in Jacksonville, FL.</p>
                    <p className='mb-2 font-abzee text-[1.1875rem]'>Let’s face it, life can be messy, and a clean environment enhances all of our lives’ experiences — be it at work or home. We can tackle any kind of cleaning project. No job is too big or too small, we tailor our service to each customer’s needs.</p>
                    <p className='font-abzee text-[1.1875rem]'>Our professional and experienced cleaning staff does the job right the first time, giving you confidence that your office and other buildings will always look their best and make a great first impression on your clients.</p>
                </div>
            </div>
        </section>
    )
}

export default About