import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../Layouts/AlertMessage";

function RegisterForm() {
  //Context
  const { registerUser } = useContext(AuthContext);
  //Local state
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [alert, setAlert] = useState(null);

  const { username, password, confirmPassword } = registerForm;
  const onChangeRegisterForm = (event) =>
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  const register = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setAlert({ type: "danger", message: "Password do not match" });
      setTimeout(() => setAlert(null), 4000);
      return;
    }
    try {
      const regsiterData = await registerUser(registerForm);
      console.log(regsiterData);
      if (!regsiterData.success) {
        setAlert({
          type: "danger",
          message: regsiterData.message,
        });
        setTimeout(() => setAlert(null), 4000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form className="my-4" onSubmit={register}>
        <AlertMessage info={alert} />
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="username"
            name="username"
            required
            value={username}
            onChange={onChangeRegisterForm}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChangeRegisterForm}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={onChangeRegisterForm}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Button variant="success" type="submit">
            Register
          </Button>
        </Form.Group>
        <p>
          Already have an account?
          <Link to="/login">
            <Button variant="info" size="sm" className="ml-3">
              Login
            </Button>
          </Link>
        </p>
      </Form>
    </>
  );
}

export default RegisterForm;
