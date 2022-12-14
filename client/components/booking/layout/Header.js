import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from './Header.module.css';
import { IoPersonOutline, IoPersonCircle, IoLogOut } from "react-icons/io5";

/* Mặc định là header nền trắng */
function Header({whiteBg = true, me=null}) {
  const router = useRouter();
  const {pathname} = router;
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
        <nav className={toggled}>
        <button className={styles.menu_toggle} onClick={()=> {
                setToggleMenu(v => !v);
              }}
          > 
          <span className={styles.line}></span> 
          <span className={styles.line}></span> 
          <span className={styles.line}></span>  
        </button>
        <div className={styles.header_menus_wrappers}>
          <ul className={styles.menu}>
          <li>
              {" "}
              <Link href="/">
                <a>Home</a>
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/about">
              <a>About</a>
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/rooms">
              <a>Rooms</a>
              </Link>{" "}
            </li>
            
           
            <li>
              {" "}
              <Link href="/contact">
              <a>Contact</a>
              </Link>{" "}
            </li>
          </ul>
          {!me ? (
            <div className={styles.socials_menu_container}>
              <Link href="/me">
                <a><IoPersonOutline /> Sign in</a>
              </Link>{" "}
            </div>
           )
           : (
            <div className={styles.socials_menu_container}>
              <Link href="/me">
                <a><IoPersonCircle /> {me.name}</a>
              </Link>{" "}
              <Link href="/me/logout">
                <a><IoLogOut /> Logout</a>
              </Link>{" "}
            </div>
           )}
          </div>
        </nav>
        
      </div>
    </header>
  );
}

export default Header;
