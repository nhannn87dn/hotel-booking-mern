import styles from "./Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <main className={styles._pages}>
      <Header />
      <div className={styles.site_content}>{children}</div>
      <Footer />
    </main>
  )
}
