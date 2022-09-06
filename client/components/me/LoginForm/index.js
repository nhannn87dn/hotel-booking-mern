import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import styles from "./LoginForm.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
});

function LoginForm() {
  return (
    <div className={styles.me_formbox}>
      <div className={styles.me_form_wrapper}>
        <div className={styles.form_logo}>
          <Image
            width={120}
            height={30}
            src="/images/logo-gold.png"
            alt="Logo"
          />
        </div>
        <h2 className={styles.title_form}>Login</h2>
        <p>To Login, enter your email haven booking before, please !</p>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
          <Form>
            <Field className={styles.input_form} placeholder='Enter your email' name="email" type="email" />
            {errors.email && touched.email ? <div className="error_box">{errors.email}</div> : null}
            <button type="submit">Sign in</button>
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
