import styles from './Layout.module.css';

export default function Layout({ children,pageId = ''}) {
  return <main className={styles._pages + " " +pageId}>{children}</main>;
}