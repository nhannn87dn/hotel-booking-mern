import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from './Header.module.css';
import { IoPersonCircleOutline, IoPowerOutline } from "react-icons/io5";


function Header({me=null}) {
  const router = useRouter();
  const {pathname} = router;
  const homeHeaderClass = pathname === '/' ? styles.site_header + " " + styles.home_header : styles.site_header;
  const logoName = pathname === '/' ? 'logo' : 'logo-gold';
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
              <Link href="/me">
                <a>Me</a>
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/me/profile">
              <a>Profile</a>
              </Link>{" "}
            </li>
           
          </ul>
          <div className={styles.socials_menu_container}>
            <Link href="/me/profile">
              <a><IoPersonCircleOutline /> {me.name}</a>
              </Link>{"  "}
              <Link href="/me/logout">
              <a><IoPowerOutline /> Logout</a>
              </Link>
        </div>
          </div>
        </nav>
       
      </div>
    </header>
  );
}

export default Header;
