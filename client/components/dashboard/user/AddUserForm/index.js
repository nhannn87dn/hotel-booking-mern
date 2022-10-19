import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const AddUserSchema = Yup.object().shape({
  name: Yup.string().required("Name is Required").max(255).min(4),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .required("Password is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Password is invalid"
    ),
  password_confirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  role: Yup.string().oneOf(["user", "admin", "booking"]).default("user"),
});

function AddUserForm() {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          password_confirm: "",
          role: "user",
        }}
        validationSchema={AddUserSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched, dirty, isValid }) => (
          <Form className="horizontal_form">
            <div className="group_inline">
            <label htmlFor="name">Name</label>
              <div className="input_form">
                <Field type="text" name="name" />
                {errors.name && touched.name ? (
                  <p className="input_note error">{errors.name}</p>
                ) : (
                  <p className="input_note">Max length 255 character</p>
                )}
              </div>
            </div>
            <div className="group_inline">
              <label htmlFor="email">Email</label>
              <div className="input_form">
              
                <Field
                  ut
                  type="text"
                  name="email"
                  placeholder="Ex: yourname@gmail.com"
                />
                {errors.email && touched.email ? (
                  <p className="input_note error">{errors.email}</p>
                ) : null}
              </div>
            </div>
            <div className="group_inline">
            <label htmlFor="password">Password</label>
              <div className="input_form">
               
                <Field type="password" name="password" />
                {errors.password && touched.password ? (
                  <p className="input_note error">{errors.password}</p>
                ) : (
                  <p className="input_note">
                    Must Contain 8 Characters, One Uppercase, One Lowercase, One
                    Number and One Special Case Character
                  </p>
                )}
              </div>
            </div>
            <div className="group_inline">
              <label htmlFor="password_confirm">Password Confirm</label>
              <div className="input_form">
                <Field type="password" name="password_confirm" />
                {errors.password_confirm && touched.password_confirm ? (
                  <p className="input_note error">{errors.password_confirm}</p>
                ) : null}
              </div>
            </div>
            <div className="group_inline">
              <label>Role</label> 
                  <div className="input_radio stack">
                  <label>
                    <Field type="radio" name="role" value="user" /> User
                  </label>
                  <label>
                    <Field type="radio" name="role" value="admin" /> Administrator{" "}
                  </label>
                  <label>
                    <Field type="radio" name="role" value="booking" /> Booking{" "}
                  </label>
                </div>  
            </div>
           
            
            <div className="form_action">
              <button type="submit" disabled={!isValid || !dirty} name="submit">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddUserForm;
