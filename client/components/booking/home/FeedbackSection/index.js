import React from 'react';
import styles from './FeedbackSection.module.css';
import Image from "next/image";

function FeedbackSection() {
  return (
    <section className={styles.section__feedback} style={{backgroundImage: 'url(/images/homepage/feedback-bg.jpg)'}}>
        <div className={styles.section__feedback_container}>
            <div className={styles.section__inner_content} style={{backgroundImage: 'url(/images/homepage/image_testimonials.png)'}}>
              <p className={styles.section_heading__content}>AT THE HEART OF COMMUNITIES</p>
              <h2 className={styles.section_heading}>People Say</h2>
              <div className={styles.section_content}>
                  <p className={styles.section_desc}>
                    “We stayed here with our family and are fully satisfied with our vacation. Rooms are very modern, have all needed amenities, the kitchen is very delicious and service is just perfect. We will for sure come back.”
                  </p>
                  <div className={styles.feedback_pepole}>
                    <div className={styles.feedback_avatar}>
                      <Image width={70} height={70} src="/images/homepage/avatar.jpg" alt="Avatar" />
                    </div>
                    <div className={styles.feedback_name}>
                      <p className={styles.feedback_name__title}>Kate Palmer</p>
                      <p className={styles.feedback_name__subtitle}>Idaho</p>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default FeedbackSection