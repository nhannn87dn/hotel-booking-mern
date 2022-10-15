import Image from "next/image";
import Link from "next/link";
import styles from "./Login.module.css";
import { IoHomeOutline } from "react-icons/io5";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .required("Password is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Password is invalid"
    ),
});

function LoginForm() {
  return (
    <div className={styles.site_content}>
      <div className={styles.login_wrapper}>
        <div className={styles.form_logo}>
          <Image
            width={120}
            height={30}
            src="/images/logo-gold.png"
            alt="Logo"
          />
        </div>
        <h2 className={styles.title_form}>Booking Hotel</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
               <div className="input_form">
                <Field placeholder="Enter your email" name="email" type="email" />
                {errors.email && touched.email ? (
                  <p className="input_note error">{errors.email}</p>
                ) : null}
              </div>
               <div className="input_form">
                <Field
                  type="password"
                  name="password"
                  placeholder="Your Password"
                />
                {errors.password && touched.password ? (
                  <p className="input_note error">{errors.password}</p>
                ) : null}
              </div>
              <button type="submit" name="submit">
                Login
              </button>
            </Form>
          )}
        </Formik>
        <div className={styles.form_ext}>
          <Link href="/">
            <a>
              <IoHomeOutline /> Back to Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
