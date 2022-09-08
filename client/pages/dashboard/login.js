import Head from 'next/head';
import { Fragment } from 'react';
import LoginForm from '../../components/dashboard/LoginForm';

function Login() {
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