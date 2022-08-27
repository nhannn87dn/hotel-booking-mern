import styles from './Layout.module.css';

export default function Layout({ children,pageId = ''}) {
  return <div className={styles._pages + " " +pageId}>{children}</div>;
}