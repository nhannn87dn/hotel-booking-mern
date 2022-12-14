import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoChevronBackOutline, IoHomeOutline } from "react-icons/io5";
import styles from "../LoginForm/LoginForm.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  otp: Yup.string().min(6).required("OTP is Required"),
});


function VerifyForm({handleVerifyOTP,email}) {
  return (
    <div className={styles.me_formbox}>
            <div className={styles.me_form_wrapper}>
            <div className={styles.form_logo}>
            <Image  width={120} height={30} src='/images/logo-gold.png' alt="Logo" />
            </div>
            <h2 className={styles.title_form}>Verify</h2>
            <p>Please enter the <strong>OTP</strong> that was sent to your otp {email}</p>
            <Formik
            initialValues={{
                otp: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
                // same shape as initial values
                const OTP = values.otp;
                handleVerifyOTP({
                  otp: OTP,
                  email: email
                });
            }}
            >
            {({ errors, touched, isSubmitting, isValid }) => (
            <Form>
                <Field className={styles.input_form} placeholder='Enter your otp' name="otp" type="text" />
                {errors.otp && touched.otp ? <div className="error_box">{errors.otp}</div> : null}
                {!isSubmitting && <button type="submit">Verify</button>}
                {isSubmitting && isValid && <button type="button" disabled>Processing...</button>}
            </Form>
            )}
            </Formik>
            <div className={styles.form_ext}>
                <Link href="/me">
                <a><IoChevronBackOutline /> Back</a>
                </Link>
                <Link href="/">
                <a style={{float:'right'}}><IoHomeOutline /> Home</a>
                </Link>
            </div>
            </div>
        </div>
  )
}

export default VerifyForm