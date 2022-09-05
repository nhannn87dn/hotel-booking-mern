import React from 'react';
import styles from './RoomSingle.module.css';
import Image from "next/image";
import Link from "next/link";

function RoomSingle({room}) {
  return (
    <div className={styles.room_item}>
        <div className={styles.room_thumb}>
          <Image layout='responsive' src={room.thumb} width={369.5} height={369.5} />
        </div>
        <div className={styles.room_detail}>
          <h2 className={styles.room_name}>
            <Link href={`/rooms/${room.id}`}>
              <a>{room.name}</a>
            </Link>
          </h2>
          <div className={styles.room_price}>
            <strong>{room.price}</strong> <span>/per night</span>  
          </div>
        </div>
    </div>
  )
}

export default RoomSingle