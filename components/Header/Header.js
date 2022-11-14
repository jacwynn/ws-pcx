import React from 'react'
import { FaPhone } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
        <TopBar />
    </header>
  )
}

const TopBar = () => {
    return (
        <section className="bg-[#FCA223]">
            <container className="flex items-center justify-between max-w-6xl mx-auto p-2.5">
                <div>
                    <a href="tel:9045340486" className="text-white font-abzee"><FaPhone className="inline-block mr-[0.625em]" /><span>(904) 534-0486</span></a>
                </div>
                <div>
                    <Button />
                </div>
            </container>
        </section>
    )
}

// Move this into its on component folder
const Button = ({ ctaText="Contact Us" }) => {
    return (
        <button className="font-abzee bg-[#252B70] rounded-[3.125rem] px-12 py-4 text-white uppercase tracking-widest">
            <a href="#">{ ctaText }</a>
        </button>
    )
}

export default Header