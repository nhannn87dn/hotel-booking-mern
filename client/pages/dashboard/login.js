import Head from 'next/head';
import Layout from '../../components/dashboard/layout/Layout'
import LoginForm from '../../components/dashboard/Login';

function Login() {
  return (
    <Layout>
       <Head>
          <title>Login | Hotel Booking</title>
          <meta content="noindex,noffolow" name="robots"/>
          <link rel="canonical" href="/dashboard/login" />
        </Head>
      <LoginForm />
       
    </Layout>
  )
}

export default Login