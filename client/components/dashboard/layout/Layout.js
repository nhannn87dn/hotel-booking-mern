import styles from './Layout.module.css';

export default function Layout({ children }) {
  return <div className={styles._pages}>{children}</div>;
}