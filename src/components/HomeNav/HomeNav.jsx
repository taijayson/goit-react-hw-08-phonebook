import React from "react";
import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
import styles from "./HomeNav.module.css";

const HomeNav = () => {
  //   const isAuth = useSelector((state) => state.auth.token);
  return (
    <div className={styles.wrap}>
      <NavLink className={styles.title} exact to="/">
        Home
      </NavLink>
      <NavLink className={styles.title} to="/contacts">
        Contacts
      </NavLink>
    </div>
  );
};

export default HomeNav;
