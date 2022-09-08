import Head from 'next/head'
import { Fragment } from 'react';
import styles from '../../styles/Me.module.css';
import {VerifyForm, SideBox} from '../../components/me';
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
    <Fragment>

      <Head>
        <title>Me Verify | Hotel Booking</title>
        <meta content="noindex,noffolow" name="robots"/>
        <link rel="canonical" href="/me/verify" />
      </Head>

      <div className={styles.me_flex_wrapper}>
          <SideBox />
          <VerifyForm />
      </div>

    </Fragment>
  )
}

export default Index