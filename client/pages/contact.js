import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Rooms.module.css';
import Header from '../components/booking/layout/Header';
import Footer from '../components/booking/layout/Footer';
import Layout from '../components/booking/layout/Layout';

export default function Home() {
  return (
    <Layout pageId='_contact'>
      <Head>
        <title>Rooms List | Hotel Booking</title>

        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_ENV_BASE_PATH}/contact`} />
      
        <meta property="og:title" content="Rooms List | Hotel Booking" />
        <meta property="og:description" content="Rooms List | Hotel Booking" />
        <meta property="og:site_name" content="Rooms List | Hotel Booking" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />    
        <meta property="og:url" itemprop="url" content="/contact" />
        <meta itemprop="image" content="/images/logo.png" />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:image:secure_url" itemprop="thumbnailUrl" content="/images/logo.png" />
       
      </Head>

      <Header />
      <div className={styles.site_content}>
      contact
      </div>
      <Footer />
    </Layout>
  )
}
