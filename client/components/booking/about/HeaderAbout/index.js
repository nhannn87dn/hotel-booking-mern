import React from 'react';
import Image from "next/image";
import styles from './HeaderAbout.module.css';

function HeaderAbout() {
  return (
    <section className={styles.section_header_about}>
        <Image src='/images/header_default.png' width={137} height={22} />
        <h1 className={styles.section_heading}>About Sochi</h1>
        <p className={styles.section_desc}>
        The Hotel Luviana is the right choice for visitors who are searching for a combination of charm, peace, quiet and a convenient position from where to explore surroundings.
        </p>
    </section>
  )
}

export default HeaderAbout