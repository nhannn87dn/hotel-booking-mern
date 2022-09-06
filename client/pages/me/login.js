import Head from 'next/head'
import Layout from '../../components/me/layout/Layout';
import {LoginForm, SideBox} from '../../components/me';
import styles from '../../styles/Me.module.css';

/**
 * Show form điền email đã Booking
 * Hệ thống sẽ xác nhận và send một OTP vào email
 * Nhập OTP để đi vào trang cá  nhân me
 * 
 */
function Login() {

 
  return (
    <Layout>

      <Head>
        <title>Me Login | Hotel Booking</title>
        <meta content="noindex,noffolow" name="robots"/>
        <link rel="canonical" href="/me/login" />
      </Head>

      <div className={styles.me_flex_wrapper}>
          <SideBox />
          <LoginForm />
      </div>

    </Layout>
  )
}

export default Login