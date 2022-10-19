import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Fragment } from "react";
import { LoginForm, VerifyForm, SideBox } from "../../components/me";
import styles from "../../styles/Me.module.css";
import axios from "axios";
import { localStorageHelper } from "../../utils/localStorageHelper";
import { useRouter } from 'next/router';
import {useAuth} from "../../components/Auth";
/**
 * Show form điền email đã Booking
 * Hệ thống sẽ xác nhận và send một OTP vào email
 * Nhập OTP để đi vào trang cá  nhân me
 *
 */
function MeLogin() {
  const {auth} = useAuth()

  const router = useRouter();
    useEffect(() => {
      if(auth && !auth.isLoggedIn ){
        router.push("/me/login")
      }
  },[auth])

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  

  const handleLogin = async (email) => {
    setEmail((prev) => (prev = email));
    //gọi xác nhận
    try {
      const data = await axios.post(
        process.env.apiEndPoint + "/v1/me/login",
        {
          email: email
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(response => response.data);
      
      if(data && data.status === 200){
        setSuccess(prev=>prev = true)
      }
      
    } catch (error) {
      setError(error.response.data.message)
      console.log("handleLogin",error.response.data);
    }
  };

  const handleVerifyOTP = async (verify)=> {
    console.log(verify);
    //gọi xác nhận
    try {
      const data = await axios.post(
        process.env.apiEndPoint + "/v1/me/verify",
        verify,
        {
          headers: {
            "Content-Type": "application/json",
          },
         }
      ).then(response => response.data);
      
      if(data && data.status === 200){
        localStorageHelper.set("meToken",data.data);
        router.push('/me')
      }
      
    } catch (error) {
      console.log("handleVerifyOTP",error);
    }
   
  }

  return (
    <Fragment>
      <Head>
        <title>Me Login | Hotel Booking</title>
        <meta content="noindex,noffolow" name="robots" />
        <link rel="canonical" href="/me/login" />
      </Head>

      <div className={styles.me_flex_wrapper}>
        <SideBox />
        {!success && !email && <LoginForm error={error} handleLogin={handleLogin} />}
        {email && success && <VerifyForm email={email} handleVerifyOTP={handleVerifyOTP} />}
      </div>
    </Fragment>
  );
}

export default MeLogin;


export async function getStaticProps(context) {
  return {
    props: {
      userTypes: "me"
    }
  };
}