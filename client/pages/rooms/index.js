import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Rooms.module.css'
import Header from '../../components/booking/layout/Header'
import Footer from '../../components/booking/layout/Footer'
import Layout from '../../components/booking/layout/Layout'
import {
  FaChild,
  FaMale,
  FaEye,
  FaExpand,
  FaBed,
  FaBookmark,
  AiFillStar,
  FaStar,
} from 'react-icons/fa'

export default function Rooms() {
  const roomList = [
    {
      id: 1,
      name: 'Standard Single Room',
      description:
        'Standard Single Rooms are designed in open-concept living area and have many facilities.',
      numberOfAdults: 2,
      view: 'beach',
      size: '20m²',
      bedType: 'queen bed',
      categories: 'single',
      amenities:
        'air-conditioning, free wi-fi, hairdryer, in-room safety, laundry, minibar, telephone',
      image: '/images/gallery/g5.jpg',
      price: 119,
    },
    {
      id: 2,
      name: 'Superior Double Room',
      description:
        'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
      numberOfAdults: 2,
      view: 'swimming pool',
      size: '30m²',
      bedType: 'queen bed',
      categories: 'double',
      amenities:
        'air-conditioning, free wi-fi, hairdryer, in-room safety, laundry, minibar, telephone',
      image: '/images/gallery/g6.jpg',
      price: 129,
    },
    {
      id: 3,
      name: 'Classic Double Room',
      description:
        'Have lots of in-room facilities and are designed in open-concept living area.',
      numberOfAdults: 2,
      view: 'beach',
      size: '25m²',
      bedType: 'queen bed',
      categories: 'double',
      amenities:
        'air-conditioning, free wi-fi, hairdryer, in-room safety, laundry, minibar, telephone',
      image: '/images/gallery/g7.jpg',
      price: 159,
    },
    {
      id: 4,
      name: 'Comfort Triple Room',
      description:
        'Perfectly suitable for family vacation or for big companies.',
      numberOfAdults: 3,
      numberOfChildren: 1,
      view: 'ocean, beach',
      size: '40m²',
      bedType: 'queen bed, sofa bed',
      categories: 'triple',
      amenities:
        'air-conditioning, free wi-fi, hairdryer, in-room safety, laundry, minibar, telephone',
      image: '/images/gallery/g8.jpg',
      price: 179,
    },
  ]

  const RoomDetailItem = ({
    IconComponent,
    iconSize,
    textLabel,
    textContent,
  }) => {
    return (
      <div className={styles.room_detail_item}>
        <IconComponent
          color="#c1b086"
          className={styles.room_detail_icon}
          size={iconSize}
        />
        <p className={styles.room_detail_text}>
          {textLabel}: {textContent}
        </p>
      </div>
    )
  }

  const RoomItem = ({ room }) => {
    return (
      <div key={room.id} className={styles.room_wapper}>
        <Image width={345} height={345} src={room.image} />
        <div className={styles.room_detail}>
          <h2>
            <Link href="#">
              <a className={styles.room_name}>{room.name}</a>
            </Link>
          </h2>
          <p className={styles.room_description}>{room.description}</p>
          <div className={styles.room_detail_list}>
            <RoomDetailItem
              IconComponent={FaMale}
              iconSize={18}
              textLabel="Adults"
              textContent={room.numberOfAdults}
            />
            {room.numberOfChildren ? (
              <RoomDetailItem
                IconComponent={FaChild}
                iconSize={16}
                textLabel="Children"
                textContent={room.numberOfChildren}
              />
            ) : null}
            <RoomDetailItem
              IconComponent={FaEye}
              iconSize={16}
              textLabel="View"
              textContent={room.view}
            />
            <RoomDetailItem
              IconComponent={FaExpand}
              iconSize={16}
              textLabel="Size"
              textContent={room.size}
            />
            <RoomDetailItem
              IconComponent={FaBed}
              iconSize={16}
              textLabel="Bed Type"
              textContent={room.bedType}
            />
            <RoomDetailItem
              IconComponent={FaBookmark}
              iconSize={16}
              textLabel="Categories"
              textContent={room.categories}
            />
            <RoomDetailItem
              IconComponent={FaStar}
              iconSize={16}
              textLabel="Amenities"
              textContent={room.amenities}
            />
          </div>
        </div>
        <div className={styles.room_orderAction}>
          <p>Prices start at:</p>
          <p className={styles.room_price_wrapper}>
            <span className={styles.room_price_unit}>$</span>
            <span className={styles.room_price}>{room.price}</span>/ per night
          </p>
          <Link href="#">
            <a className={styles.book_button + ' button'} href="#">
              BOOK
            </a>
          </Link>
          <Link href="#">
            <a className={styles.viewDetail_button + ' button'} href="#">
              VIEW DETAILS
            </a>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <Layout pageId="_rooms">
      <Head>
        <title>Rooms List | Hotel Booking</title>

        <link rel="canonical" href="/rooms" />

        <meta property="og:title" content="Rooms List | Hotel Booking" />
        <meta property="og:description" content="Rooms List | Hotel Booking" />
        <meta property="og:site_name" content="Rooms List | Hotel Booking" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:url" itemprop="url" content="/rooms" />
        <meta itemprop="image" content="/images/logo.png" />
        <meta property="og:image" content="/images/logo.png" />
        <meta
          property="og:image:secure_url"
          itemprop="thumbnailUrl"
          content="/images/logo.png"
        />
      </Head>

      <Header />
      <div className={styles.site_content}>
        <div className={styles.introduction_container}>
          <Image width={138} height={22} src="/images/header_default.png" />
          <h1 className={styles.introduction_title}>Rooms & Suites</h1>
          <p className={styles.introduction_description}>
            The hotel is arranged on three floors, without a lift. On the ground
            floor, apart from the reception, there is a comfortable lounge where
            you can sit and drink tea.
          </p>
        </div>

        <div className={styles.roomList_container}>
          {roomList.map((room) => (
            <RoomItem room={room} />
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  )
}
