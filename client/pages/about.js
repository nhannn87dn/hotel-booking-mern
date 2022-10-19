import Head from "next/head";
import { Layout } from "../components/booking/layout";
import {
  WelcomeAbout,
  RoomsAbout,
  HistoryAbout,
} from "../components/booking/about";
import PagesHeader from "../components/booking/PagesHeader";

import { useSelector } from "react-redux";
import {settingSelector, getSettings} from "../redux/reducer/settingsSlice";
import { wrapper } from "../redux/store";
import {useAuth} from "../components/Auth";


export const getStaticProps = wrapper.getStaticProps(store => async() => {
  console.log('2. Page.getStaticProps uses the store to dispatch things');
  await store.dispatch(getSettings());
});


export default function About() {
  const {settings: {data}} = useSelector(settingSelector);
  const {auth} = useAuth()
  return (
    <Layout pageId="_about" settings={data} me={auth}>
      <Head>
      <title>{data.metaTitle} | Hotel Booking</title>
        <link rel="canonical" href="/about" />
        <meta property="og:title" content="{data.metaTitle}" />
        <meta property="og:description" content="{data.metaDescription}" />
        <meta property="og:site_name" content="{data.name}" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:url" itemprop="url" content="/about" />
        <meta itemprop="image" content="/images/logo.png" />
        <meta property="og:image" content="/images/logo.png" />
        <meta
          property="og:image:secure_url"
          itemprop="thumbnailUrl"
          content="/images/logo.png"
        />
      </Head>
      <PagesHeader heading="About Sochi">
        The Hotel Sochi is the right choice for visitors who are searching for a combination of charm, peace, quiet and a convenient position from where to explore surroundings.
      </PagesHeader>
      <WelcomeAbout />
      <RoomsAbout />
      <HistoryAbout />
     
    </Layout>
  );
}
