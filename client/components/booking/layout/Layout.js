import Header from "./Header";
import Footer from "./Footer";
import styles from './Layout.module.css';


export default function Layout({ children,pageId = ''}) {

  return <main className={styles._pages + " " + styles[pageId] + " " +pageId}>
    <Header whiteBg={pageId == '_home' ? false: true} />
      <div className={styles.site_content}>{children}</div>
    <Footer />
    </main>
}