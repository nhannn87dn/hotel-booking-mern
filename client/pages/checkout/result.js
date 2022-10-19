import React, { useState, useEffect } from "react";
import axios from 'axios'
import Head from "next/head";
import {Layout } from "../../components/booking/layout";
import { localStorageHelper } from "../../utils/localStorageHelper";
import { useSelector} from "react-redux";
import {settingSelector, getSettings} from "../../redux/reducer/settingsSlice";
import { wrapper } from "../../redux/store";
import ReslutSuccess from "../../components/checkout/ReslutSuccess";
import {useAuth} from "../../components/Auth"
import { useRouter } from 'next/router';

export const getStaticProps = wrapper.getStaticProps(store => async() => {
  await store.dispatch(getSettings());

  return {
    props: {
      protected: true,
      userTypes: "me"
    },
    revalidate: 3600, // In seconds
  }

});

/**
 * Check nếu chưa đăng nhập thì trả về me/login
 * 
 */
export default function CheckoutResult() {
  const router = useRouter();
  const {settings: {data}} = useSelector(settingSelector);
  const [loading, setLoading] = useState(false);
  const [booking, setBooking] = useState(null);
  const {auth} = useAuth();

  useEffect(() => {
    if(auth && !auth.isLoggedIn ){
      router.push("/me/login")
    }
},[auth])
  
  useEffect(() => {
    const fetchBooking= async () => {
          console.log("0.fetchBooking")
          try {
            setLoading(true);
            const localBooked = await localStorageHelper.get("booked");
            if (localBooked !== undefined) {
              try {
                console.log("1.Getbooking")
                const data = await axios
                  .get(`${process.env.apiEndPoint}/v1/bookings/details/${localBooked.bookingId}`, 
                  {
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${auth.token}`,
                    }
                  })
                  .then((response) => response.data);
                  console.log("2.Getbooking success",data)
                  if (data && data.status === 200) {
                    setBooking(data.data);
                    setLoading(false);
                    localStorageHelper.delete("booked");
                  }
            
              } catch (error) {
                console.log("3.Getbooking error",error.response)
              }
            }else{
              console.log("3.fetchBooking no Booked")
              router.push("/rooms")
            }

          } catch (error) {
            console.log("2.fetchBooking",error)
            
          }
   }
  fetchBooking();
  }, [auth.token]);



  return (
    <Layout pageId="_checkout" settings={data} me={auth}>
      <Head>
        <title>Checkout Result | Sochi Hotel Booking</title>
        <meta content="noindex,noffolow" name="robots"/>
        <link
          rel="canonical"
          href="/checkout/result"
        />
      </Head>
      {loading && (<div>Loading...</div>)}
      {!loading && booking && <ReslutSuccess booking={booking} />}
    
      
    </Layout>
  );
}
