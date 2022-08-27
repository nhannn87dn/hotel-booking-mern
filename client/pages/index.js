import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Home.module.css';
import Header from '../components/booking/layout/Header';
import Footer from '../components/booking/layout/Footer';
import Layout from '../components/booking/layout/Layout';

export default function Home() {
  return (
    <Layout pageId='_home'>
      <Head>
        <title>Hotel Booking</title>
        

        <link rel="canonical" href="/" />
       
      
        <meta property="og:title" content="Hotel Booking" />
        <meta property="og:description" content="Hotel Booking" />
        <meta property="og:site_name" content="Hotel Booking" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />    
        <meta property="og:url" itemprop="url" content="/" />
        <meta itemprop="image" content="/images/logo.png" />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:image:secure_url" itemprop="thumbnailUrl" content="/images/logo.png" />
       
      </Head>

      <Header />
      <div className="site_content">
        <div className={styles.home_slides}>
          <div className={styles.item}>
            <div className={styles.item_content}>
              <h2 className={styles.slide_title}>Hello.Salut.Hola</h2>
              <div className={styles.slide_content}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link href="/about">
                <a className={styles.more_link_slide + " more_link"}>More Info</a>
                </Link>
              </div>
            </div>
            <div className={styles.item_image}>
              <Image layout='fill' src='/images/home4.jpg' alt='Home 1' />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}
