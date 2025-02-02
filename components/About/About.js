import Image from 'next/image'
import bucketImg from '../../public/images/bucket.png'

const About = () => {
    return (
        <section id='about' className='relative'>
            <div className='flex gap-16 items-center py-20 pb-32 mx-auto max-w-6xl max-[767px]:flex-col max-[767px]:px-12'>
                <div>
                    <Image 
                        src={bucketImg}
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
            <div className='absolute bottom-[-1px] w-[100%]'>
                <svg className="h-[2.5rem] left-[50%] w-[100%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path class="elementor-shape-fill" fill='#77B4E0' d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3 c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
                </svg>
            </div>
        </section>
    )
}

export default About