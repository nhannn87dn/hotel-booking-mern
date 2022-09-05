import React from 'react';
import styles from './AboutSection.module.css';
import Link from "next/link";
import Image from "next/image";

function AboutSection() {
  return (
    <section className={styles.section_about}>
        <div className={styles.row_flex}>
            <div className={styles.about_photo}>
                <div className={styles.about_photo__first} >
                <Image width={304} height={450} src='/images/homepage/welcome-1.jpg' />
                </div>
                <div className={styles.about_photo__second} >
                    <Image width={324} height={220} src='/images/homepage/welcome-2.jpg' />
                </div>
                
            </div>
            <div className={styles.about_content}>
                <p className={styles.section_heading__content}>RAISING COMFORT TO THE HIGHEST LEVEL</p>
                <h2 className={styles.section_heading}>Welcome to Sochi Hotel Resort</h2>
                <div className={styles.section_desc}>
                    <p>
                    The Hotel Sochi is the right choice for visitors who are searching for a combination of charm and a convenient position from where to explore surroundings.
                    </p>
                    <p>The rooms are arranged on the first, second and third floors. On the top floor, there is also a charming terrace or solarium available for the use of guests, from where you can enjoy the view.</p>
                    <div className={styles.section_button}>
                        <Link href="#">
                        <a className={styles.custom_button + " button"} href="#">Read More</a>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default AboutSection