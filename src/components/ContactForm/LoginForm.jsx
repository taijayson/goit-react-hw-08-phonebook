import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/authOperations";
import Button from "@material-ui/core/Button";
import styles from "./ContactForm.module.css";

export default function LoginForm() {
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
  };
  return (
    <div className={styles.wrap}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={addEmail}
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={addPassword}
          />
        </label>
        <Button type="submit" variant="contained" color="primary">
          Go
        </Button>
      </form>
    </div>
  );
}
