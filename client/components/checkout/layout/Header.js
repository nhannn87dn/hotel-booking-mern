import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './Header.module.css';

/* Mặc định là header nền trắng */
function HeaderCheckout({whiteBg = true}) {
  
  const homeHeaderClass = whiteBg ?  styles.site_header : styles.site_header + " " + styles.home_header;
  const logoName = whiteBg ? 'logo-gold' : 'logo';
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const toggled = toggleMenu ? styles.main_navigation + (" ") + styles.main_navigation_toggled : styles.main_navigation ;

  return (
    <header className={ homeHeaderClass + " clearfix" }>
      <div className={styles.site_header_wrapper}>
        <div className={styles.site_branding}>
        <Link href="/">
        <a className={styles.logo}>
          <Image width={120} height={30} src={`/images/${logoName}.png`} alt="Logo" />
        </a>
           </Link>
        </div>
        <div className={styles.progressbar_wrapper}>
          <ul className={styles.progressbar}>
            <li className={styles.active}>Infomations</li>
            <li>Payment</li>
            <li>Succcessfull</li>
          </ul>
        </div>
       
        
      </div>
    </header>
  );
}

export default HeaderCheckout;
