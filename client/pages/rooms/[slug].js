import axios from 'axios'
import Head from 'next/head'
import styles from '../../styles/booking/RoomDetail.module.css';
import Layout from '../../components/booking/layout/Layout';
import PagesHeader from '../../components/booking/PagesHeader';

import BookingForm from '../../components/booking/room/BookingForm';
import PriceBlock from '../../components/booking/room/PriceBlock';
import ContentBlock from '../../components/booking/room/ContentBlock';
import GalleryBlock from '../../components/booking/room/GalleryBlock';
import AmenitiesBlock from '../../components/booking/room/AmenitiesBlock';

import { useSelector} from "react-redux";
import {settingSelector, getSettings} from "../../redux/reducer/settingsSlice";
import { wrapper } from "../../redux/store";
export default function Room({room}) {

  const {settings: {data}} = useSelector(settingSelector);

  return (

    <Layout pageId='_rooms_list' settings={data}>
      <Head>
        <title>{`${room.metaTitle} | Hotel Booking`}</title>

        <link rel="canonical" href={`/roomms/${room._id}`} />
      
        <meta property="og:title" content={`${room.metaTitle} | Hotel Booking`} />
        <meta property="og:description" content={`${room.metaDescription} | Hotel Booking`} />
        <meta property="og:site_name" content="Sochi Hotel" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />    
        <meta property="og:url" itemprop="url" content={`/roomms/${room._id}`} />
        <meta itemprop="image" content="/images/logo.png" />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:image:secure_url" itemprop="thumbnailUrl" content="/images/logo.png" />
       
      </Head>
      <PagesHeader heading={room.name}>
      {room.shortDesc}
      </PagesHeader>
      <div className={styles.flex_columns_gap + " flex_columns"}>
        <aside className={styles.flex_main + " flex_column"}>
            <GalleryBlock gallery={room.images}/>
            <ContentBlock content={room.content} />
            <AmenitiesBlock attributes={room.attributes} />
            <h3 className={styles.heading}>Helpful Details</h3>
            <div className={styles.helpful}>
              <p><strong>Room Occupancy</strong></p>
               <p>All the rooms above are guaranteed to fit guest. Extra guests are at the hotel's discretion and may be subject to additional fees.</p> 
               <p><strong>Check-in/out</strong></p>
               <p>Check-in is at 14:00 PM and Check-out is at 12:00 PM.</p>
            </div>
            <h3 className={styles.heading}>Property on Map</h3>
        </aside>
        <aside className={styles.flex_sidebar + " flex_column"}>
          
            <div className={styles.sidebar_form}>
              <PriceBlock price={room.pricePerNight} promoPrice={room.pricePromote} />
              <BookingForm roomId={room._id} />
            </div>
         
          
        </aside>
      </div>
    </Layout>
    
  )
}
// https://nextjs.org/docs/api-reference/data-fetching/get-static-props#getstaticprops-return-values
export const getStaticProps = wrapper.getStaticProps(store => async({params}) => {
  await store.dispatch(getSettings());

  console.log(params);
  
  const { data } = await axios.get(`${process.env.apiEndPoint}/v1/rooms/${params.slug}`);
  const room = data.data;
  console.log("2 room Detail",room);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      room
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 minutes
    revalidate: 60 * 5, // In seconds
  }
});

/**
 * https://nextjs.org/docs/basic-features/data-fetching/get-static-paths#generating-paths-on-demand
 */
export async function getStaticPaths() {

  // Call an external API endpoint to get posts
    const { data } = await axios.get(process.env.apiEndPoint + '/v1/rooms/list');
    const paths = data.data.allRooms.map((room) => ({ params: { slug: String(room.slug) } }));
 

  return {
    paths,
    fallback: false,
  };
}