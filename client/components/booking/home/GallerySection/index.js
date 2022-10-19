import React from 'react';
import Link from "next/link";
import styles from "./GallerySection.module.css";
import GallerySlider from './GallerySlider';

function GallerySection({gallery}) {
 
  return (
    <section className={styles.section_gallery}>
        <div className={styles.section_header}>
        <div className={styles.section_header_title}>
          <p className={styles.section_heading__content}>
          WELCOME TO OUR PHOTO GALLERY
          </p>
          <h2 className={styles.section_heading}>Photo Gallery of Our Hotel</h2>
        </div>
        
      </div>
      <GallerySlider gallery={gallery} />
    </section>
  )
}

export default GallerySection