import Head from 'next/head'
import Link from "next/link";
import {Footer, Header, Footer} from '../../components/me/layout';
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