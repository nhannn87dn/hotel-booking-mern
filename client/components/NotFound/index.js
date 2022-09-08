import Link from 'next/link';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.wrapper}>
            <h1>404!</h1>
            <h3>Page Not Found. Go to <Link href='/'>Homepage</Link> </h3>
        </div>
    )
}

export default NotFound