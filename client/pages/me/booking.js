import Head from 'next/head';

import {Layout} from '../../components/me/layout';
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
     
      Me Booking
     
      </Layout>
  )
}

export default Booking