import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../redux/auth/authOperations";
import styles from "./MainPage.module.css";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onLogin(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    console.log(this.state);
    return (
      <div className={styles.wrap}>
        <h1>Login</h1>
        <form
          onSubmit={this.handleSubmit}
          autoComplete="off"
          className={styles.form}
        >
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
            Go
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { onLogin: logIn };

export default connect(null, mapDispatchToProps)(LoginPage);
