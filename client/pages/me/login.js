import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";
import Layout from '../../components/me/layout/Layout';
import styles from '../../styles/Me.module.css';
import { IoHomeOutline } from "react-icons/io5";
/**
 * Show form điền email đã Booking
 * Hệ thống sẽ xác nhận và send một OTP vào email
 * Nhập OTP để đi vào trang cá  nhân me
 * 
 */
function Login() {

  const bg_style = {
      background: 'linear-gradient(0deg,#222,rgb(0,0,0,.5)), url(/images/g1.jpg)'
  };

  return (
    <Layout>

      <Head>
        <title>Me | Hotel Booking</title>
        <meta content="noindex,noffolow" name="robots"/>
        <link rel="canonical" href="/me" />
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
                <h2 className={styles.title_form}>Login</h2>
                <p>To Login, enter your email haven booking before, please !</p>
                <form action="/me" method='POST'>
                    <input className={styles.input_form} type="email" placeholder='Your Email' />
                    <button type='submit'>Sign in</button>
                </form>
                <div className={styles.form_ext}>
                  <Link href="/">
                    <a><IoHomeOutline /> Back to Home</a>
                  </Link>
                </div>
              </div>
          </div>
      </div>

    </Layout>
  )
}

export default Login