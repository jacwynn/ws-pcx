const Footer = () => {
    return (
        <footer className="bg-[#252B70]">
            <container className='flex flex-col py-10 mx-auto max-w-6xl'>
                <div className='flex w-[100%] justify-between text-white pb-5 border-b border-dotted max-[767px]:hidden'>
                    <ul className='flex justify-between space-x-5'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Testimonials</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                    <a href="tel:9043621259">(904) 362-1259</a>
                </div>
                <div className='max-[767px]:text-center'>
                    <p className='pt-5 text-xs max-[767px]:pt-0 text-white'>Copyright © {new Date().getFullYear()} Professional Cleaning Xperts</p>
                </div>
            </container>
        </footer>
    )
}

export default Footer