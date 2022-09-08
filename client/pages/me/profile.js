import Head from 'next/head'

import {Layout} from '../../components/me/layout';
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
    
      Me Profile
      
     
      </Layout>
  )
}

export default Profile