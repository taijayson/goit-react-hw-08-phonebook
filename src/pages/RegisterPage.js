import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/authOperations";
import RegisterForm from "../components/ContactForm/RegisterForm";

export default function LoginPage() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addName = (event) => setName(event.target.value);
  const addEmail = (event) => setEmail(event.target.value);
  const addPassword = (event) => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");

    // this.props.onLogin(this.state);
    // this.setState({ name: "", email: "", password: "" });
  };

  // const { email, password } = this.state;
  // console.log(this.state);
  return (
    <RegisterForm
      name={name}
      email={email}
      password={password}
      addName={addName}
      addEmail={addEmail}
      addPassword={addPassword}
      handleSubmit={handleSubmit}
    />
  );
}

// class RegisterPage extends Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//   };

//   handleChange = (event) => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

// handleSubmit = (event) => {
//   event.preventDefault();

//   this.props.onRegister(this.state);
//   this.setState({ name: "", email: "", password: "" });
// };

// const mapDispatchToProps = { onRegister: register };

// export default connect(null, mapDispatchToProps)(RegisterPage);
