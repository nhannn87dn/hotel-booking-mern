import React from 'react';
import Image from "next/image";
import styles from './HeaderContact.module.css';

function HeaderContact() {
  return (
    <section className={styles.section_header_about}>
        <Image src='/images/header_default.png' width={137} height={22} />
        <h1 className={styles.section_heading}>Contact Us</h1>
        <p className={styles.section_desc}>
        Feel free to contact us directly if you have any inquiries regarding accommodation. We would love to have you stay with us!
        </p>
    </section>
  )
}

export default HeaderContact