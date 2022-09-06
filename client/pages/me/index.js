import Head from 'next/head';
import Link from "next/link";
import {Footer, Header, Footer} from '../../components/me/layout';
import styles from '../../styles/Me.module.css';

/**
 * Show form điền email đã Booking
 * Hệ thống sẽ xác nhận và send một OTP vào email
 * Nhập OTP để đi vào trang cá  nhân me
 * 
 */
function Index() {

  return (
    <Layout>

      <Head>
        <title>Me Dashboard | Hotel Booking</title>
        <meta content="noindex,noffolow" name="robots"/>
        <link rel="canonical" href="/me" />
      </Head>
      <Header />
      <div className={styles.site_content}>
      Me Dashboard
      </div>
      
      <Footer />
    </Layout>
  )
}

export default Index