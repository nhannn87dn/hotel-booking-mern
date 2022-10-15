import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.site_footer + " clearfix"}>
        
        <div className={styles.site_info_wrapper}>
          <div className={styles.wrapper + " clearfix"}>
            <div className={styles.site_info}>Sochi © 2022 All Rights Reserved</div>
          </div>
        </div>
    </footer>
  )
}

export default Footer