import Head from "next/head";
import { Layout } from "../components/booking/layout";
import {
  WelcomeAbout,
  RoomsAbout,
  HistoryAbout,
} from "../components/booking/about";
import PagesHeader from "../components/booking/PagesHeader";

export default function About() {
  return (
    <Layout pageId="_about">
      <Head>
        <title>About | Hotel Booking</title>

        <link rel="canonical" href="/about" />

        <meta property="og:title" content="About | Hotel Booking" />
        <meta property="og:description" content="About | Hotel Booking" />
        <meta property="og:site_name" content="About | Hotel Booking" />
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
        The Hotel Luviana is the right choice for visitors who are searching for a combination of charm, peace, quiet and a convenient position from where to explore surroundings.
      </PagesHeader>
      <WelcomeAbout />
      <RoomsAbout />
      <HistoryAbout />
     
    </Layout>
  );
}
