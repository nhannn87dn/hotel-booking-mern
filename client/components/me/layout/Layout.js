import styles from "./Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children,me=null }) {
  return (
    <main className={styles._pages}>
      <Header me={me}/>
      <div className={styles.site_content}>{children}</div>
      <Footer />
    </main>
  )
}
