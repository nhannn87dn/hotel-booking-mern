import Head from 'next/head';
import {Layout} from '../components/booking/layout';
import {BodyContact} from '../components/booking/contact';
import PagesHeader from '../components/booking/PagesHeader';

export default function Contact() {
  return (
    <Layout pageId='_contact'>
      <Head>
        <title>Contact Us | Hotel Booking</title>

        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_ENV_BASE_PATH}/contact`} />
      
        <meta property="og:title" content="Contact Us | Hotel Booking" />
        <meta property="og:description" content="Contact Us Hotel Booking" />
        <meta property="og:site_name" content="Contact Us Hotel Booking" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />    
        <meta property="og:url" itemprop="url" content="/contact" />
        <meta itemprop="image" content="/images/logo.png" />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:image:secure_url" itemprop="thumbnailUrl" content="/images/logo.png" />
       
      </Head>
    
      <PagesHeader heading='Contact Us' >
      Feel free to contact us directly if you have any inquiries regarding accommodation. We would love to have you stay with us!
      </PagesHeader>
      <BodyContact />
     
    </Layout>
  )
}
