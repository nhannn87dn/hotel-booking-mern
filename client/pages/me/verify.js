import Head from 'next/head'
import Layout from '../../components/me/layout/Layout';
import styles from '../../styles/Me.module.css';
import VerifyForm from '../../components/me/VerifyForm';
import SideBox from '../../components/me/SideBox';
/**
 * Show form điền email đã Booking
 * Hệ thống sẽ xác nhận và send một OTP vào email
 * Nhập OTP để đi vào trang cá  nhân me
 * 
 */
function Index() {
  
  const bg_style = {
      background: 'linear-gradient(0deg,#222,rgb(0,0,0,.5)), url(/images/g1.jpg)'
  };

  return (
    <Layout>

      <Head>
        <title>Me Verify | Hotel Booking</title>
        <meta content="noindex,noffolow" name="robots"/>
        <link rel="canonical" href="/me/verify" />
      </Head>

      <div className={styles.me_flex_wrapper}>
          <SideBox />
          <VerifyForm />
      </div>

    </Layout>
  )
}

export default Index