import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/Rooms.module.css';
import Header from '../../components/booking/layout/Header';
import Footer from '../../components/booking/layout/Footer';
import Layout from '../../components/booking/layout/Layout';

export default function Room({ roomId, title }) {

  function addRoomJsonLd() {
    return {
      __html: `{
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Executive Anvil",
      "image": [
        "https://example.com/photos/1x1/photo.jpg",
        "https://example.com/photos/4x3/photo.jpg",
        "https://example.com/photos/16x9/photo.jpg"
       ],
      "description": "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
      "sku": "0446310786",
      "mpn": "925872",
      "brand": {
        "@type": "Brand",
        "name": "ACME"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Fred Benson"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.4",
        "reviewCount": "89"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://example.com/anvil",
        "priceCurrency": "USD",
        "price": "119.99",
        "priceValidUntil": "2020-11-20",
        "itemCondition": "https://schema.org/UsedCondition",
        "availability": "https://schema.org/InStock"
      }
    }
  `,
    };
  }

  return (

    <Layout pageId='_rooms_list'>
      <Head>
        <title>{`Rooms ${title} | Hotel Booking`}</title>

        <link rel="canonical" href={`/roomms/${roomId}`} />
      
        <meta property="og:title" content={`Rooms ${title} | Hotel Booking`} />
        <meta property="og:description" content={`Rooms ${title} | Hotel Booking`} />
        <meta property="og:site_name" content={`Rooms ${title} | Hotel Booking`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />    
        <meta property="og:url" itemprop="url" content={`/roomms/${roomId}`} />
        <meta itemprop="image" content="/images/logo.png" />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:image:secure_url" itemprop="thumbnailUrl" content="/images/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addRoomJsonLd()}
          key="room-jsonld"
        />
      </Head>

      <Header />
      <div className={styles.site_content}>
        <main className={styles.main}>
          <h1 className={styles.title}>{ title }</h1>
          <p>Room ID: { roomId }</p>
        </main>
      </div>
      <Footer />
    </Layout>
    
  )
}

export async function getStaticProps({ params = {} } = {}) {
  return {
    props: {
      roomId: params.roomId,
      title: `Room ${params.roomId}`
    }
  }
}

export async function getStaticPaths() {
  const paths = [...new Array(5)].map((i, index) => {
    return {
      params: {
        roomId: `${index + 1}`,
      }
    };
  });
  return {
    paths,
    fallback: false,
  };
}