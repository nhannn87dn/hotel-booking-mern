import Head from 'next/head';
import {Layout} from '../components/booking/layout';
import {BodyContact} from '../components/booking/contact';
import PagesHeader from '../components/booking/PagesHeader';
import { useSelector } from "react-redux";
import {settingSelector, getSettings} from "../redux/reducer/settingsSlice";
import { wrapper } from "../redux/store";
import {useAuth} from "../components/Auth";


export const getStaticProps = wrapper.getStaticProps(store => async() => {
  console.log('2. Page.getStaticProps uses the store to dispatch things');
  await store.dispatch(getSettings());
});


export default function Contact() {
  const {settings: {data}} = useSelector(settingSelector);
  const {auth} = useAuth()
  return (
    <Layout pageId='_contact' settings={data} me={auth}>
      <Head>
      <title>Contact us | Hotel Booking</title>
        <link rel="canonical" href="/contact" />
        <meta property="og:title" content="Contact us | Sochi Booking" />
        <meta property="og:description" content="{data.metaDescription}" />
        <meta property="og:site_name" content="{data.name}" />
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
