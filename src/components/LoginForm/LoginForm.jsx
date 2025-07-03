import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

export default function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleSubmit = (values, actions) => {
      dispatch(login(values))
        .unwrap()
        .then(() => {
            console.log("Login successful, navigating...");
            actions.resetForm();
            navigate("/contacts");
          })
        .catch(error => {
          alert(error);
        });
    };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
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
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
