import Image from "next/image";
import Link from "next/link";
import styles from './Login.module.css';
import { IoHomeOutline } from "react-icons/io5";

function LoginForm() {
  return (
    <div className={styles.site_content}>
        <div className={styles.login_wrapper}>
            <div className={styles.form_logo}>
            <Image  width={120} height={30} src='/images/logo-gold.png' alt="Logo" />
            </div>
            <h2 className={styles.title_form}>Booking Hotel</h2>
            <form action="" method="POST">
                <input type='email'  name="email" placeholder='Your email'/>
                <input type='password'  name="password" placeholder='Your Password'/>
                <button type='submit' name="submit">Login</button>
            </form>
            <div className={styles.form_ext}>
                  <Link href="/">
                    <a><IoHomeOutline /> Back to Home</a>
                  </Link>
                </div>
        </div>
    </div>
  )
}

export default LoginForm