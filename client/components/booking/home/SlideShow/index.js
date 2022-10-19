import React from 'react'
import Image from "next/image";
import Link from "next/link";
import styles from './SlideShow.module.css';

function SlideShow() {
  return (
    <section className={styles.home_slides}>
        <div className={styles.item}>
            <div className={styles.item_content}>
                <h2 className={styles.slide_title}>Hello.Salut.Hola</h2>
                <div className={styles.slide_content}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link href="/about">
                <a className={styles.more_link_slide + " more_link"}>More Info</a>
                </Link>
                </div>
            </div>
           
        </div>
        <div className={styles.item_image}>
                <Image priority layout='fill' src='/images/homepage/home4.jpg' alt='Home 1' />
            </div>
    </section>
  )
}

export default SlideShow