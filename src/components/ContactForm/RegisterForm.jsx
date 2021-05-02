import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOperations";
import styles from "./ContactForm.module.css";

export default function RegisterForm() {
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
  };

  return (
    <div className={styles.wrap}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="name"
            name="name"
            value={name}
            onChange={addName}
          />
        </label>
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
        <button type="submit" className={styles.button}>
          Enjoy
        </button>
      </form>
    </div>
  );
}
