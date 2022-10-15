import React, { useEffect } from "react";
import Head from "next/head";
import { Layout } from "../components/booking/layout";
import {
  SlideShow,
  AboutSection,
  AmenitiesSection,
  RoomSection,
  FeedbackSection,
  RestaurantSection,
  GallerySection
} from "../components/booking/home";
import SearchRooms from "../components/booking/SearchRooms";
import { useSelector, useDispatch } from "react-redux";
import {settingSelector, getSettings, updateMessage} from "../redux/reducer/settingsSlice";
import { wrapper } from "../redux/store";

export const getStaticProps = wrapper.getStaticProps(store => async() => {
  console.log('2. Page.getStaticProps uses the store to dispatch things');
  await store.dispatch(getSettings());
});


function Index () {
  const dispatch = useDispatch();
  let { settings } = useSelector(settingSelector);

  console.log("Index page",settings)

  settings = settings?.data;

  
  
  // /* first time, get all room */
  useEffect(() => {
    //dispatch(getSettings());

    dispatch(updateMessage('test'));

  }, []);

  const rooms = [
    {
      id: 1,
      name: "Superior Double Room",
      price: 129,
      thumb: "/images/homepage/r1.jpg",
      url: "#",
    },
    {
      id: 2,
      name: "Classic Double Room",
      price: 159,
      thumb: "/images/homepage/r2.jpg",
      url: "#",
    },
    {
      id: 3,
      name: "Comfort Triple Room",
      price: 179,
      thumb: "/images/homepage/r3.jpg",
      url: "#",
    },
  ];

  const restaurant_type = [
    {
      id: 1,
      tabTitle: "Italian Kitchen",
      icon: "",
      content:
        "With our Italian dishes cooked by professional chefs you will be feeling as if you are at authentic Italian restaurant. Olive oil, vines and wheat bread are the keys of Italian kitchen.",
    },
    {
      id: 2,
      tabTitle: "Mexican Kitchen",
      icon: "",
      content:
        "Genuine Mexican prepared at out restaurant is delicious, fresh and vibrant. Main feature here is chilly – both dried and fresh. Also key ingredients of Mexican kitchen are beans and corn. ",
    },
    {
      id: 3,
      tabTitle: "Japanise Kitchen",
      icon: "",
      content:
        "You can taste some extraordinary dishes which became popular in the whole world. Any sushi you want you will get at out restaurant. We have an authentic cook from Japan to meet your desires.",
    },
    {
      id: 4,
      tabTitle: "Indian Kitchen",
      icon: "",
      content:
        "Indian food is known for its spiciness. The most frequently used are chilly pepper, black mustard seed, cumin, tumeric, ginger etc. We will transfer you to India via our dishes.",
    },
  ];

  const gallery = [
    { id: 1, link: "/images/gallery/g1.jpg", alt: "gallery 1" },
    { id: 2, link: "/images/gallery/g2.jpg", alt: "gallery 1" },
    { id: 3, link: "/images/gallery/g3.jpg", alt: "gallery 1" },
    { id: 4, link: "/images/gallery/g4.jpg", alt: "gallery 1" },
    { id: 5, link: "/images/gallery/g5.jpg", alt: "gallery 1" },
    { id: 6, link: "/images/gallery/g6.jpg", alt: "gallery 1" },
    { id: 7, link: "/images/gallery/g7.jpg", alt: "gallery 1" },
    { id: 8, link: "/images/gallery/g8.jpg", alt: "gallery 1" },
  ];

  return (
   
    <Layout pageId="_home" settings={settings}>
     
      <Head>
        <title>{settings && settings.metaTitle.length ? settings.metaTitle : null} | Hotel Booking</title>
        <link rel="canonical" href="/" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:url" itemprop="url" content="/" />
        <meta itemprop="image" content="/images/logo.png" />
        <meta property="og:image" content="/images/logo.png" />
        <meta
          property="og:image:secure_url"
          itemprop="thumbnailUrl"
          content="/images/logo.png"
        />
      </Head>
     
    
    
        <SlideShow />
        <SearchRooms page='home' />
        <AboutSection />
        <AmenitiesSection />
        <RoomSection rooms={rooms} />
        <FeedbackSection />
        <RestaurantSection restaurant_type={restaurant_type} />
        <GallerySection gallery={gallery} />
     
     
    </Layout>
  );
}

export default Index;