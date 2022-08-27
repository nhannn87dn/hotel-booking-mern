import React from 'react'
import styles from './Footer.module.css'
import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline, IoChatboxEllipsesOutline, IoMailOpenOutline, IoCallOutline } from "react-icons/io5";

function Footer() {
  return (
    <footer className={styles.site_footer + " clearfix"}>
        <div className={styles.footer_widgets}>
          <div className={styles.wrapper + " clearfix"}>
            <div className={styles.footer_widgets_wrapper}>
              <div className={styles.widget_area}>
                <div className={styles.textwidget}>
                  <p>
                    <Link href="#">
                      <a className={styles.clearfix}>
                      <Image width={120} height={30} src="/images/logo-gold.png" alt="Logo" />
                      </a>
                      </Link>
                    </p>
                    <p>
                    All hotels and vacation rental properties listed on this website are independently owned and operated. Accepted payment methods:
                    </p>
                    <p>
                      <Image width={183} height={17} src="/images/payments.png" alt="payment" />
                    </p>
                </div>
              </div>
              <div className={styles.widget_area}>
                <h4 className={styles.widget_title}>For Customers</h4>
                <ul className={styles.menu_footer}>
                  <li>
                  <Link href="#"><a>About</a></Link>
                  </li>
                  <li>
                  <Link href="#"><a>Customer Care/Help</a></Link>
                  </li>
                  <li>
                  <Link href="#"><a>Corporate Accounts</a></Link>
                  </li>
                  <li>
                  <Link href="#"><a>Financial Information</a></Link>
                  </li>
                  <li>
                  <Link href="#"><a>Terms - Conditions</a></Link>
                  </li>
                </ul>
              </div>
              <div className={styles.widget_area}>
                <h4 className={styles.widget_title}>Us Services</h4>
                <ul className={styles.menu_footer}>
                  <li>
                  <Link href="#"><a>About</a></Link>
                  </li>
                  <li>
                  <Link href="#"><a>Customer Care/Help</a></Link>
                  </li>
                  <li>
                  <Link href="#"><a>Corporate Accounts</a></Link>
                  </li>
                  <li>
                  <Link href="#"><a>Financial Information</a></Link>
                  </li>
                  <li>
                  <Link href="#"><a>Terms - Conditions</a></Link>
                  </li>
                </ul>
              </div>
              <div className={styles.widget_area}>
                <h4 className={styles.widget_title}>Contact Us</h4>
                <div className={styles.textwidget}>
                  <p><IoLocationOutline /> 3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345</p>
                  <p><IoMailOpenOutline /> hello@luviana.com</p>
                  <p><IoCallOutline /> 1.954.456.6789</p>
                  <p><IoChatboxEllipsesOutline /> 24/7 Customer Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.site_info_wrapper}>
          <div className={styles.wrapper + " clearfix"}>
            <div className={styles.site_info}>Luvíana © 2022 All Rights Reserved</div>
          </div>
        </div>
    </footer>
  )
}

export default Footer