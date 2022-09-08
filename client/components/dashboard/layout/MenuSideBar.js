import React from "react";
import {
  IoBed,
  IoApps,
  IoCart,
  IoShieldCheckmark,
  IoPeople,
  IoSettings,
  IoMailOpen,
  IoMenu
} from "react-icons/io5";
import styles from "./MenuSideBar.module.css";
import Link from "next/link";

function MenuSideBar() {
  return (
      <ul className={styles.nav_links}>
        <li>
          <Link href="/dashboard">
            <a>
              <span className={styles.links_icon}>
                <IoApps />
              </span>
              <span className={styles.links_name}>Dashboard</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/room">
            <a>
              <span className={styles.links_icon}>
                <IoBed />
              </span>
              <span className={styles.links_name}>Room</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/booking">
            <a>
              <span className={styles.links_icon}>
                <IoCart />
              </span>
              <span className={styles.links_name}>Booking</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/user">
            <a>
              <span className={styles.links_icon}>
                <IoShieldCheckmark />
              </span>
              <span className={styles.links_name}>User</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/customer">
            <a>
              <span className={styles.links_icon}>
                <IoPeople />
              </span>
              <span className={styles.links_name}>Customer</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/messages">
            <a>
              <span className={styles.links_icon}>
                <IoMailOpen />
              </span>
              <span className={styles.links_name}>Messages</span>
            </a>
          </Link>
        </li>
      
        <li>
          <Link href="/dashboard/settings">
            <a>
              <span className={styles.links_icon}>
                <IoSettings />
              </span>
              <span className={styles.links_name}>Setting</span>
            </a>
          </Link>
        </li>
        
      </ul>
    
  );
}

export default MenuSideBar;
