import React from 'react'
import styles from "./AmenitiesBlock.module.css"

const AmenitiesBlock = ({attributes=[]}) => {
  return (
    <>
    <h3 className={styles.heading}>Features</h3>
    <ul className={styles.amenities_list}>
        <li>Balcony</li>
        <li>Internet</li>
        <li>Parking space</li>
        <li>Pet-friendly</li>
        <li>Washing machine</li>
        <li>Tv cable</li>
        <li>Furnished</li>
    </ul>
    </>
  )
}

export default AmenitiesBlock