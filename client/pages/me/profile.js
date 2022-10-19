import Head from 'next/head'
import {useEffect } from "react";
import {Layout} from '../../components/me/layout';
import {useAuth} from "../../components/Auth"
import { useRouter } from 'next/router';
/**
 * Thông tin cơ bản khách hàng
 * 
 */

function MeProfile() {
  const {auth} = useAuth()

  const router = useRouter()

  console.log(auth)

  useEffect(() => {
      if(auth && !auth.isLoggedIn ){
        router.push("/me/login")
      }
  },[auth])
  
  return (
    <Layout me={auth}>
       <Head>
        <title>Me Profile | Hotel Booking</title>
        <meta content="noindex,noffolow" name="robots"/>
        <link rel="canonical" href="/me/profile" />
      </Head>
      Me Profile: {auth.name}
    </Layout>
  )
}

export default MeProfile

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
      userTypes: "me"
    }
  };
}
