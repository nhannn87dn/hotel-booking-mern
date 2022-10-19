import React from "react";
import Link from "next/link";
import { IoHomeOutline , IoPerson} from "react-icons/io5";
import styles from "./SignUpForm.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";


const SignUpSchema = Yup.object().shape({
    name: Yup.string().max(160).required("Name is Required"),
    email: Yup.string().max(255).email("Invalid email").required("Email is Required"),
});

// 
function SignUpForm({handleSignUp,failed=null}) {
  return (
    <div className={styles.me_formbox}>
      <div className={styles.me_form_wrapper}>
       
        <h2 className={styles.title_form}>SingUp</h2>
        <p>To SingUp, enter fields bellow, please !</p>
        {failed && <div className="error_box">SignUp failed !</div>}
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={(values) => {
            handleSignUp({
                name: values.name,
                email: values.email
            });
          }}
        >
          {({ errors, touched, isValid, isSubmitting }) => (
          <Form>
             <Field className={styles.input_form} placeholder='Enter your name' name="name" type="text" />
            {errors.name && touched.name ? <div className="error_box">{errors.name}</div> : null}
            <Field className={styles.input_form} placeholder='Enter your email' name="email" type="email" />
            {errors.email && touched.email ? <div className="error_box">{errors.email}</div> : null}
            {(!isSubmitting || failed ) && <button type="submit">SignUp</button>}
            {isSubmitting && !failed && isValid && <button type="button" disabled>Processing...</button>}
          </Form>
          )}
        </Formik>

        <div className={styles.form_ext}>
          <Link href="/">
            <a>
              <IoHomeOutline /> Back to Home
            </a>
          </Link>{ "    "}
          <Link href="/me/login">
            <a>
              <IoPerson /> SingIn
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
