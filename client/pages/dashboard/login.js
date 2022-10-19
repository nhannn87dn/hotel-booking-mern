import {useEffect } from "react";
import Head from 'next/head';
import { Fragment } from 'react';
import LoginForm from '../../components/dashboard/LoginForm';
import {useAuth} from "../../components/Auth";
import { useRouter } from 'next/router';

function Login() {

  const {auth} = useAuth()
  const router = useRouter()

  useEffect(() => {
      if(auth && auth.isLoggedIn ){
        router.push("/dashboard")
      }
  },[auth])

  return (
    <Fragment>
       <Head>
          <title>Login | Hotel Booking</title>
          <meta content="noindex,noffolow" name="robots"/>
          <link rel="canonical" href="/dashboard/login" />
        </Head>
      <LoginForm />
       
    </Fragment>
  )
}

export default Login

export async function getStaticProps(context) {
  return {
    props: {
      userTypes: "admin"
    }
  };
}