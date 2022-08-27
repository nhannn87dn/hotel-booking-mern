import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";
import Layout from '../../components/me/layout/Layout';
import styles from '../../styles/Me.module.css';
import { IoChevronBackOutline, IoHomeOutline } from "react-icons/io5";
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
          <div 
          className={styles.me_sidebox}
          style={bg_style}
          >
            <Image width={120} height={30} src='/images/logo.png' alt="Logo" />
          </div>
          <div className={styles.me_formbox}>
              <div className={styles.me_form_wrapper}>
                <div className={styles.form_logo}>
                <Image  width={120} height={30} src='/images/logo-gold.png' alt="Logo" />
                </div>
                <h2 className={styles.title_form}>Verify</h2>
                <p>Please enter the <strong>OTP</strong> that was sent to your email youremxxx@gmail.com</p>
                <form action="/me" method='POST'>
                    <input className={styles.input_form} type="email" placeholder='Your OTP' />
                    <button type='submit'>Confirm</button>
                </form>
                <div className={styles.form_ext}>
                  <Link href="/me">
                    <a><IoChevronBackOutline /> Back</a>
                  </Link>
                  <Link href="/">
                    <a style={{float:'right'}}><IoHomeOutline /> Home</a>
                  </Link>
                </div>
              </div>
          </div>
      </div>

    </Layout>
  )
}

export default Index