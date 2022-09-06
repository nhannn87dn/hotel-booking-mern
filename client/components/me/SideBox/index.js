import React from 'react'
import Image from "next/image";
import styles from './SideBox.module.css';

function SideBox() {

    const bg_style = {
        background: 'linear-gradient(0deg,#222,rgb(0,0,0,.1)), url(/images/gallery/g1.jpg)'
    };

    
  return (
    <div 
    className={styles.me_sidebox}
    style={bg_style}
    >
    <Image width={120} height={30} src='/images/logo.png' alt="Logo" />
    </div>
  )
}

export default SideBox