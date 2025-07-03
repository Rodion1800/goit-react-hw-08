import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations.js";
import css from "./RegistrationForm.module.css";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={RegisterSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label>
          Name:
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" style={{ color: "red" }} />
        </label>
        <br />
        <label>
          Email:
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />
        </label>
        <br />
        <label>
          Password:
          <Field type="password" name="password" />
          <ErrorMessage
            name="password"
            component="div"
            style={{ color: "red" }}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
