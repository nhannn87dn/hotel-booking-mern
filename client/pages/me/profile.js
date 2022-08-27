import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";
import Footer from '../../components/me/layout/Footer';
import Header from '../../components/me/layout/Header';
import Layout from '../../components/me/layout/Layout';
import styles from '../../styles/Me.module.css';

/**
 * Thông tin cơ bản khách hàng
 * 
 */

function Profile() {

  

  return (
    <Layout>
       <Head>
        <title>Me Profile | Hotel Booking</title>
        <meta content="noindex,noffolow" name="robots"/>
        <link rel="canonical" href="/me/profile" />
      </Head>
      <Header />
      <div className={styles.site_content}>
      Me Profile
      </div>
      
      <Footer />
      </Layout>
  )
}

export default Profile