const Hero = () => {
    return (
        <section className="relative" style={{ backgroundImage: "url('/images/hero.jpg')", backgroundSize: 'cover' }}>
            <div className="py-36 mx-auto max-w-6xl max-[767px]:px-12">
                <div className="p-8 space-y-8 max-w-md bg-white max-[767px]:mx-auto">
                    <div className="text-[2.375rem] font-playfair leading-none">
                        <p>Clean Space.</p>
                        <p>Professional Service.</p>
                        <p>Fair Price.</p>
                    </div>
                    <div className="text-[1.1875rem] font-abzee">
                        <p>Our professional and experienced cleaning staff does the job right the first time.</p>
                    </div>
                    <div>
                        <button className="font-abzee bg-[#252B70] rounded-[3.125rem] px-12 py-4 text-white uppercase tracking-widest">
                            <a href="#contact">Contact Us</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute left-0 bottom-[-1px] w-[100%]">
                <svg className="h-[2.75rem] left-[50%] w-[100%]" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path class="elementor-shape-fill" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
                        c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
                        c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
                </svg>
            </div>
        </section>
    )
}

export default Hero