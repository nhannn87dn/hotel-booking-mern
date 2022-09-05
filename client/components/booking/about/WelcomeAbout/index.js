import React from 'react';
import styles from './WelcomeAbout.module.css';
import Image from "next/image";

function WelcomeAbout() {
  return (
    <section className={styles.section_wrapper}>
      <div className="flex_columns column_gap_2">
        <div className="flex_column">
          <p className="flex_heading__content">RAISING COMFORT TO THE HIGHEST LEVEL</p>
          <h2 className="flex_heading">Welcome to Luviana Hotel</h2>
           
        </div>
        <div className="flex_column">
          <div className="flex_desc">
            <p>It is a small comfortable hotel. Our staff offers an attentive high-quality service and is always ready to offer any help to guests.</p>
            <p>The hotel is arranged on three floors. On the ground floor, apart from the reception, there is a comfortable lounge where you can sit and drink tea or just read. There is also a splendid terrace, where you can relax and immerse yourself into upcoming morning of a new wonderful day in the atmosphere of Venetian daily life, watch the city fuss & people who are gathering together and whose conversations fill all the streets and alleys. There is an amazing fusion of calm and tranquility at hotel with hectic outside.</p>
          </div>
        </div>
      </div>
      <div className="flex_columns column_gap_2">
        <div className="flex_column">
          <Image layout='responsive' width={569} height={569} src='/images/gallery/g1.jpg' />
        </div>
        <div className="flex_column">
          <Image layout='responsive' width={569} height={569} src='/images/gallery/g2.jpg' />
        </div>
      </div>
    </section>
  )
}

export default WelcomeAbout