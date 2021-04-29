import React from "react";
import { connect } from "react-redux";
import { getUsername } from "../../redux/auth/authSelectors";
import { logOut } from "../../redux/auth/authOperations";
import styles from "./UserMenu.module.css";

const UserMenu = ({ name, onLogout }) => {
  return (
    <div className={styles.wrap}>
      <span className={styles.welcome}>It's you: {name}</span>

      <button type="button" onClick={onLogout} className={styles.button}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: getUsername(state),
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
