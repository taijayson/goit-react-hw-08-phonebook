import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../redux/auth/authOperations";
import styles from "./MainPage.module.css";

class RegisterPage extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onRegister(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className={styles.wrap}>
        <h1>Register</h1>
        <form
          onSubmit={this.handleSubmit}
          autoComplete="off"
          className={styles.form}
        >
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              type="name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Password
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={styles.button}>
            Enjoy
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { onRegister: register };

export default connect(null, mapDispatchToProps)(RegisterPage);
