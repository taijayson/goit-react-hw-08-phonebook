import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/auth/authSelectors";
import styles from "./HomeNav.module.css";

const HomeNav = () => {
  const authorise = useSelector(isAuth);
  return (
    <div className={styles.wrap}>
      <NavLink className={styles.title} exact to="/">
        Home
      </NavLink>
      {authorise && (
        <NavLink className={styles.title} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default HomeNav;
