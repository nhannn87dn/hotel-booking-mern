import React from 'react';
import styles from './Header.module.css';
import { Fragment } from 'react';
import {IoChevronDownOutline,IoPersonCircle } from "react-icons/io5";

function Header() {
  return (
    <Fragment>
      
      <div className={styles.quick_links}>
        Quick Action
      </div>
      
      <div className={styles.profile_details}>
        <IoPersonCircle />
        <span className={styles.admin_name}>Admin</span>
        <IoChevronDownOutline />
      </div>
    </Fragment>
  )
}

export default Header