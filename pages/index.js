import Head from 'next/head'
import Header from '../components/Header/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Professional Cleaning Xperts</title>
        <meta name="description" content="We’re a cleaning company based in Jacksonville, FL. Our professional and experienced cleaning staff does the job right the first time, giving you confidence that your office and other buildings will always look their best and make a great first impression on your clients." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
    </>
  )
}
