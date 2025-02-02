import Head from 'next/head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>Professional Cleaning Xperts</title>
        <meta name="description" content="We’re a cleaning company based in Jacksonville, FL. Our professional and experienced cleaning staff does the job right the first time, giving you confidence that your office and other buildings will always look their best and make a great first impression on your clients." />
        <link rel="icon" href="/favicon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Playfair+Display:wght@600&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
