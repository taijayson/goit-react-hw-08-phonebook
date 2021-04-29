import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={styles.wrap}>
      <NavLink className={styles.title} exact to="/register">
        Registration
      </NavLink>
      <NavLink className={styles.title} exact to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
