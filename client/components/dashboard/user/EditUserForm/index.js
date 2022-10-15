import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const EditUserSchema = Yup.object().shape({
  name: Yup.string().required("Name is Required").max(255).min(4),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  role: Yup.string().oneOf(["user", "admin", "booking"]).default("user"),
});

function EditUserForm() {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          role: "user",
        }}
        validationSchema={EditUserSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched, dirty, isValid }) => (
          <Form>
            <div className="input_form">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" />
              {errors.name && touched.name ? (
                <p className="input_note error">{errors.name}</p>
              ) : (
                <p className="input_note">Max length 255 character</p>
              )}
            </div>
            <div className="input_form">
              <label htmlFor="email">Email</label>
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
            
            <div className="input_form">
              <label>Role</label>
            </div>
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

export default EditUserForm;
