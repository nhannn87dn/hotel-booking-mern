import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import { Layout } from "../../components/booking/layout";
import CheckoutForm from "../../components/checkout/CheckoutForm";
import { localStorageHelper } from "../../utils/localStorageHelper";
import moment from "moment";
import { useSelector } from "react-redux";
import {
  settingSelector,
  getSettings,
} from "../../redux/reducer/settingsSlice";
import { wrapper } from "../../redux/store";
import NoSelectedRoom from "../../components/checkout/noSelectedRoom";
import {useAuth} from "../../components/Auth"
import { useRouter } from 'next/router';

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  
  const {data: data} = await axios
          .get(process.env.apiEndPoint + "/v1/payments/list")
          .then((response) => response.data)
          .catch(error=> console.log(error));
 
  await store.dispatch(getSettings());

  return {
    props: {
      payments: data,
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
export default function Checkout({payments = null}) {
 
  const {
    settings: { data },
  } = useSelector(settingSelector);
  
  const [loading, setLoading] = useState(true);
  const [room, setRoom] = useState(null);
  const [roomId, setRoomId] = useState(null);
  const [selected, setSelected] = useState(null);
  const [customer, setCustomer] = useState(null);
  const {auth} = useAuth();
  const router = useRouter()

  useEffect(() => {
    if(auth && !auth.isLoggedIn ){
        router.push("/me/login")
      }
  },[auth])
  

  useEffect(() => {
    const fetchMe = async () => {
          try {
            setLoading(true);
            const data = await axios
              .get(process.env.apiEndPoint + "/v1/me/profile", {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${auth.token}`,
                },
              })
              .then((response) => response.data)
              .catch((error)=> error.response.data);

            if (data && data.status === 200) {
              data.data.birthday = moment(data.data.birthday).format(
                "YYYY-MM-DD"
              );
              setCustomer((prev) => (prev = data.data));
              setLoading(false);
            }
          } catch (error) {
            console.log("handleLogin", error);
          }
    }
    fetchMe();
  }, [auth.token]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const localroomFilters = localStorageHelper.get("roomFilters");
        setSelected((prev) => (prev = localroomFilters));
        let roomId =
          localroomFilters !== undefined && localroomFilters.roomId
            ? localroomFilters.roomId
            : "";
        setRoomId((prev) => (prev = roomId));
        const {
          data: { data },
        } = await axios.get(
          `${process.env.apiEndPoint}/v1/rooms/${roomId}/details`
        );
        setRoom((prev) => (prev = data));
      } catch (error) {
        console.error(error.response.data);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  //console.log(me);

  return (
    <Layout pageId="_checkout" settings={data} me={auth}>
      <Head>
        <title>Checkout | Sochi Hotel Booking</title>
        <link rel="canonical" href="/checkout" />
      </Head>
      {loading && <div>Loading...</div>}
      {!roomId && roomId != null && <NoSelectedRoom />}
      {!loading && roomId && selected && room && payments && customer && (<CheckoutForm token={auth.token} room={room} me={customer} selected={selected} payments={payments} />)}
    </Layout>
  );
}
