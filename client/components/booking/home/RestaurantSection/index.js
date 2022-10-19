import React from 'react';
import styles from './RestaurantSection.module.css';
import Image from "next/image";
import Accordtions from '../Accordtion';

function RestaurantSection({restaurant_type}) {
   
  return (
    <section className={styles.section_restaurant}>
        <div className={styles.restaurant_wrapper}>
            <div className={styles.restaurant_photo}>
               <Image layout='responsive' width={585} height={561} src='/images/homepage/restaurant.jpg' alt='Restaurant' />
            </div>
            <div className={styles.restaurant_content}>
                <h2 className={styles.section_heading}>Our Restaurant</h2>
                <p className={styles.section_desc}>The buffet breakfast is served in the lounge on the ground floor and also outside on our little patio.</p>
                <Accordtions tabs={restaurant_type} type='single' />
            </div>
            
        </div>
    </section>
  )
}

export default RestaurantSection