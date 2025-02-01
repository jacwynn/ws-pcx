import React from 'react'
import { FaPhone } from 'react-icons/fa';

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
            <a href="#">{ ctaText }</a>
        </button>
    )
}

const Navigation = () => {
    return (
        <nav>
            <h1>Hello world</h1>
        </nav>
    )
}

export default Header