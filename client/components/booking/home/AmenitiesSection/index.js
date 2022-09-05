import React from 'react';
import styles from './AmenitiesSection.module.css';

function AmenitiesSection() {
  return (
    <section className={styles.section__amenities} style={{backgroundImage: 'url(/images/homepage/bg-section-amenities.jpg)'}}>
        <div className={styles.section__amenities_container}>
            <div className={styles.section__inner_content} style={{backgroundImage: 'url(/images/homepage/image_testimonials.png)'}}>
                <h2 className={styles.section_heading}>Our Amenities</h2>
                <p className={styles.section_desc}>The hotel is arranged on three floors without a lift. On the ground floor, apart from the reception, there is a comfortable lounge where you can sit and drink tea.</p>
                <ul className={styles.amenities__list + " clearfix"}>
                    <li>Swimming pool</li>
                    <li>Gym &#38; yoga</li>
                    <li>Spa &#38; massage</li>
                    <li>Boat tours</li>
                    <li>Surfing lessons</li>
                    <li>Conference room</li>
                    <li>Diving  &#38; snorkling</li>
                    <li>Private Beach</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default AmenitiesSection