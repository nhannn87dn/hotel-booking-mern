import Head from 'next/head'
import { useEffect } from "react";
import {Layout} from '../../components/me/layout';
import {useAuth} from "../../components/Auth"
import { useRouter } from 'next/router';
import { localStorageHelper } from "../../utils/localStorageHelper";
/**
 * Thông tin cơ bản khách hàng
 * 
 */

function MeLogout() {
  const {auth} = useAuth();
  const router = useRouter();

  useEffect(()=> {
    const logOut = () => {
        localStorageHelper.delete("meToken");
        router.push("/me/login")
    }
    let timer = setTimeout(() => {
      logOut()
    }, 1000);
    // Có return trả về --> Unmouting
    return () => clearTimeout(timer)
  },[])

  return (
    <Layout me={auth}>
       <Head>
        <title>Me Logout | Hotel Booking</title>
        <meta content="noindex,noffolow" name="robots"/>
        <link rel="canonical" href="/me/profile" />
      </Head>
      <div className="success_box">Logout Successfully !</div>
    </Layout>
  )
}

export default MeLogout

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
      userTypes: "me"
    }
  };
}
