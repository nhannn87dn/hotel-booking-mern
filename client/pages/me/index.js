import {useEffect } from "react";
import Head from 'next/head';
import {Layout} from '../../components/me/layout';
import {useAuth} from "../../components/Auth";
import { useRouter } from 'next/router';
/**
 * Show form điền email đã Booking
 * Hệ thống sẽ xác nhận và send một OTP vào email
 * Nhập OTP để đi vào trang cá  nhân me
 * 
 */
function MeIndex() {
  const {auth} = useAuth()
  
  const router = useRouter()

  console.log("MeIndex",auth)

  useEffect(() => {
      if(auth && !auth.isLoggedIn ){
        router.push("/me/login")
      }
  },[auth])

  return (
    <Layout me={auth}>

      <Head>
        <title>Me Dashboard | Hotel Booking</title>
        <meta content="noindex,noffolow" name="robots"/>
        <link rel="canonical" href="/me" />
      </Head>
       Dashboard Me {auth.name}
    </Layout>
  )
}

export default MeIndex

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
      userTypes: "me"
    }
  };
}
