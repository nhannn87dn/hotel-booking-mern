import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";
import Footer from '../../components/me/layout/Footer';
import Header from '../../components/me/layout/Header';
import Layout from '../../components/me/layout/Layout';
import styles from '../../styles/Me.module.css';

/**
 * Danh sách phòng đã book của khách hàng
 * 
 */

function Booking() {
  return (
    <Layout>
      <Head>
        <title>My Booking | Hotel Booking</title>
        <meta content="noindex,noffolow" name="robots"/>
        <link rel="canonical" href="/me/booking" />
      </Head>
      <Header />
      <div className={styles.site_content}>
      Me Booking
      </div>
      
      <Footer />
      </Layout>
  )
}

export default Booking