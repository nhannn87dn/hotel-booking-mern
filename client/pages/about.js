import Head from "next/head";
import { Header, Footer, Layout } from "../components/booking/layout";
import {
  HeaderAbout,
  WelcomeAbout,
  RoomsAbout,
  HistoryAbout,
} from "../components/booking/about";

export default function Home() {
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

      <Header />
      <HeaderAbout />
      <WelcomeAbout />
      <RoomsAbout />
      <HistoryAbout />
      <Footer />
    </Layout>
  );
}
