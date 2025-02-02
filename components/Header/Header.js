import Image from 'next/image';
import { FaPhone } from 'react-icons/fa'

import logo from '../../public/images/logo.png'

const Header = () => {
  return (
    <header>
        <TopBar />
        <Navigation />
    </header>
  )
}

const TopBar = () => {
    return (
        <section className="bg-[#FCA223]">
            <container className="flex justify-between items-center py-2.5 mx-auto max-w-6xl">
                <div>
                    <a href="tel:9045340486" className="text-white font-abzee"><FaPhone className="inline-block mr-[0.625em]" /><span>(904) 534-0486</span></a>
                </div>
                <div>
                    <Button isTopBarCTA />
                </div>
            </container>
        </section>
    )
}

// Move this into its on component folder
const Button = ({ ctaText="Contact Us", isTopBarCTA }) => {
    return (
        <button className={`font-abzee bg-[#252B70] rounded-[3.125rem] px-12 py-4 text-white uppercase tracking-widest ${isTopBarCTA ? 'max-[767px]:hidden' : ''}`}>
            <a href="#contact">{ ctaText }</a>
        </button>
    )
}

const Navigation = () => {
    return (
        <nav className='py-5'>
            <div className='flex justify-center mb-8 max-[767px]:mb-0'>
                <Image 
                    src={logo}
                    alt="Professional Cleaing Xperts Logo"
                    width={150}
                    height={150}
                />
            </div>
            <div className='flex justify-center max-[767px]:hidden'>
                <ul className='flex space-x-8 font-abzee text-[1.0625rem]'>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#testimonials">Testimonials</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header