import React from "react";
import MenuSideBar from "./MenuSideBar";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";
import { IoLogoSlack, IoMenu, IoEllipsisVertical } from "react-icons/io5";

export default function Layout({ children, pageId = '' }) {
  const [collapse, setCollapse] = React.useState(false);
  const toggledSidebar = collapse ? styles.sidebar + " " + styles.active : styles.sidebar;
  const handleonClickLogo = () => {
    setCollapse(pre=>!pre);
  }
  return (
    <main className={styles._layout+ " " +pageId}>
      <section className={toggledSidebar}>
        <div className={styles.logo_details} >
          <span className={styles.logo_icon}>
            <IoLogoSlack />
          </span>
          <span className={styles.logo_name}>Sochi Hotel</span>
        </div>
        <MenuSideBar />
      </section>
      <section className={styles.home_section}>
        <nav className={styles.navigation}>
          <div className={styles.sidebar_button}onClick={handleonClickLogo}>
         {collapse ?  <IoMenu /> : <IoEllipsisVertical />  } 
        </div>
          <Header />
        </nav>
        <div className={styles.home_content}>{children}</div>
        <Footer />
      </section>
    </main>
  );
}
