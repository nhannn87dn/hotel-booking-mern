import Link from 'next/link'
import Image from 'next/image'
import {
    FaChild,
    FaMale,
    FaEye,
    FaExpand,
    FaBed,
    FaBookmark,
    FaStar,
  } from 'react-icons/fa'

import styles from './RoomItem.module.css';

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
    const thumbnail = room.images.length  ? room.images[0].link : null;
    return (
      <div key={room.id} className={styles.room_wapper}>
        <div className={styles.thumbnail}>
        {thumbnail ? <Image width={345} height={345} src={thumbnail} /> : null}
        </div>
        <div className={styles.room_detail}>
          <h2>
            <Link href="#">
              <a className={styles.room_name}>{room.name}</a>
            </Link>
          </h2>
          <p className={styles.room_description}>{room.shortDesc}</p>
          <div className={styles.room_detail_list}>
            <RoomDetailItem
              IconComponent={FaMale}
              iconSize={18}
              textLabel="Adults"
              textContent={room.numOfAdults}
            />
            {room.numOfChildren  && room.numOfChildren > 0 ?
              <RoomDetailItem
                IconComponent={FaChild}
                iconSize={16}
                textLabel="Children"
                textContent={room.numOfChildren}
              />
            : null }
            {room.view && <RoomDetailItem
              IconComponent={FaEye}
              iconSize={16}
              textLabel="View"
              textContent={room.view}
            />}
            <RoomDetailItem
              IconComponent={FaExpand}
              iconSize={16}
              textLabel="Size"
              textContent={room.area}
            />
            <RoomDetailItem
              IconComponent={FaBed}
              iconSize={16}
              textLabel="Bed Type"
              textContent={room.typeOfBeds}
            />
            <RoomDetailItem
              IconComponent={FaBookmark}
              iconSize={16}
              textLabel="Categories"
              textContent={room.category}
            />
            <RoomDetailItem
              IconComponent={FaStar}
              iconSize={16}
              textLabel="Amenities"
              textContent={room.category}
            />
          </div>
        </div>
        <div className={styles.room_orderAction}>
          <p>Prices start at:</p>
          <p className={styles.room_price_wrapper}>
            <span className={styles.room_price_unit}>$</span>
            <span className={styles.room_price}>{room.pricePerNight}</span>/ per night
          </p>
          <Link href={`/rooms/${room._id}`}>
            <a className={styles.book_button + ' button'}>
              BOOK
            </a>
          </Link>
          <Link href={`/rooms/${room._id}`}>
            <a className={styles.viewDetail_button + ' button'}>
              VIEW DETAILS
            </a>
          </Link>
        </div>
      </div>
    )
  }

  export default RoomItem