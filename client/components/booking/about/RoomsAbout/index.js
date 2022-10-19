import React from 'react';
import styles from './RoomsAbout.module.css';
import Image from "next/image";


function RoomsAbout() {
  return (
    <section className={styles.section_wrapper}>
      <div className="flex_columns column_gap_2">
        <div className="flex_column">
          <p className="flex_heading__content">DISCOVER THE CHARM OF THE Sochi</p>
          <h2 className="flex_heading">Rooms & Luxury Suites</h2>
           
        </div>
        <div className="flex_column">
          <div className="flex_desc">
            <p>The rooms are arranged on the first, second and third floors. On the top floor, there is also a charming terrace or solarium available for the use of guests, from where you can enjoy the wonderful view. A cup of tee or coffee, favorite book on the table and breath-taking view in front – this is all you need to relax and to feel delightful emotions of your vacation.</p>
          </div>
        </div>
      </div>
      <div className={styles.flex_columns_4 + " flex_columns column_gap_2"}>
        <div className={styles.flex_column_4 + " flex_column"}>
          <Image layout='responsive'  width={284} height={284} src='/images/gallery/g3.jpg' />
        </div>
        <div className={styles.flex_column_4 + " flex_column"}>
        <Image  layout='responsive' width={284} height={284} src='/images/gallery/g4.jpg' />
        </div>
        <div className={styles.flex_column_4 + " flex_column"}>
          <Image layout='responsive' width={284} height={284} src='/images/gallery/g5.jpg' />
        </div>
        <div className={styles.flex_column_4 + " flex_column"}>
        <Image layout='responsive' width={284} height={284} src='/images/gallery/g6.jpg' />
        </div>
      </div>
    </section>
  )
}

export default RoomsAbout