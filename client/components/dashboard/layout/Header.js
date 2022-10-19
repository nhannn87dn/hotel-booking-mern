import React from 'react';
import styles from './Header.module.css';
import { Fragment } from 'react';
import Link from 'next/link';
import {IoChevronDownOutline,IoPersonCircle } from "react-icons/io5";
import { localStorageHelper } from "../../../utils/localStorageHelper";
import { useRouter } from 'next/router';

function Header({user=null}) {
  const [toggle, setToggle] = React.useState(false);
  const router = useRouter();
  const handleToggle = ()=> {
    setToggle(prev=> !prev)
  }

  const handleSignOut = ()=> {
    localStorageHelper.delete("userToken");
    router.push("/dashboard/login")
  }

  return (
    <Fragment>
      
      <div className={styles.quick_links}>
        Quick Action
      </div>
      
      <div className={styles.profile_details}>
       <span className={styles.toggle_user} onClick={handleToggle}>
          <IoPersonCircle />
          <span className={styles.admin_name}>{user && user.name ? user.name : "Unknowư"}</span>
          <IoChevronDownOutline />
        </span> 
        <div className={toggle ? styles.user_menu + " "+ styles.active_menu : styles.user_menu}>
          <ul>
            <li>
            <Link href="/dashboard/users"><a>Profile</a></Link>
            </li>
            <li><span onClick={handleSignOut}>Logout</span></li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default Header