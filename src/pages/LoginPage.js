import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/authOperations";
import LoginForm from "../components/ContactForm/LoginForm";
// import styles from "./MainPage.module.css";

// class LoginPage extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   handleChange = (event) => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

export default function LoginPage() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addEmail = (event) => setEmail(event.target.value);
  const addPassword = (event) => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");

    // this.props.onLogin(this.state);
    // this.setState({ name: "", email: "", password: "" });
  };

  // const { email, password } = this.state;
  // console.log(this.state);
  return (
    <LoginForm
      email={email}
      password={password}
      addEmail={addEmail}
      addPassword={addPassword}
      handleSubmit={handleSubmit}
    />
  );
}

// const mapDispatchToProps = { onLogin: logIn };

// export default connect(null, mapDispatchToProps)(LoginPage);
