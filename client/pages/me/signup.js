import React, { useState } from "react";
import Head from "next/head";
import { Fragment } from "react";
import { SignUpForm, SideBox } from "../../components/me";
import styles from "../../styles/Me.module.css";
import axios from "axios";
import { useRouter } from 'next/router';
/**
 * Show form điền email đã Booking
 * Hệ thống sẽ xác nhận và send một OTP vào email
 * Nhập OTP để đi vào trang cá  nhân me
 *
 */
function MeSignUp() {
  const router = useRouter();
  const [failed, setFailed] = useState(false);

  const handleSignUp = async (payload) => {
    //gọi xác nhận
    try {
      const data = await axios.post(
        process.env.apiEndPoint + "/v1/me/signup",
        payload
       ,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(response => response.data);
      
      if(data && data.status === 200){
        router.push("/me/login")
      }else{
        setFailed(true)
      }
      
    } catch (error) {
      setFailed(true)
      console.log("handleSignUp",error.response.data);
    }
  };
  

  return (
    <Fragment>
      <Head>
        <title>Me SignUp | Hotel Booking</title>
        <meta content="noindex,noffolow" name="robots" />
        <link rel="canonical" href="/me/signup" />
      </Head>

      <div className={styles.me_flex_wrapper}>
        <SideBox />
        <SignUpForm failed={failed} handleSignUp={handleSignUp} />
      </div>
    </Fragment>
  );
}

export default MeSignUp;

export async function getStaticProps(context) {
  return {
    props: {
      userTypes: "me"
    }
  };
}