import React from 'react';
import Image from "next/image";
import styles from './PagesHeader.module.css';

function PagesHeader({heading='', children}) {
  return (
    <section className={styles.section_header_about}>
        <Image src='/images/header_default.png' width={137} height={22} />
        <h1 className={styles.section_heading}>{heading}</h1>
        <div className={styles.section_desc}>{children}</div>
    </section>
  )
}

export default PagesHeader