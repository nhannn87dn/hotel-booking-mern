import React from "react";
import Link from "next/link";
import RoomSingle from "./RoomSingle";
import styles from "./RoomSection.module.css";

function RoomSection({ rooms }) {
  return (
    <section className={styles.section_rooms}>
      <div className={styles.section_header}>
        <div className={styles.section_header_title}>
          <p className={styles.section_heading__content}>
            RAISING COMFORT TO THE HIGHEST LEVEL
          </p>
          <h2 className={styles.section_heading}>Rooms &#38; Suites</h2>
        </div>
        <div className={styles.section_header_action}>
          <Link href="#">
            <a className={styles.custom_button + " button"} href="/rooms">
              View All
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.rooms_list}>
        {rooms.map((room) => (
          <RoomSingle  key={room.id}  room={room} />
        ))}
      </div>
    </section>
  );
}

export default RoomSection;
