import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsername } from "../../redux/auth/authSelectors";
import { logOut } from "../../redux/auth/authOperations";
import styles from "./UserMenu.module.css";

// const UserMenu = ({ name, onLogout }) => {
const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  const logout = () => {
    dispatch(logOut());
  };
  return (
    <div className={styles.wrap}>
      <span className={styles.welcome}>It's you: {name}</span>

      <button type="button" onClick={logout} className={styles.button}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;

// const mapStateToProps = (state) => ({
//   name: getUsername(state),
// });

// const mapDispatchToProps = {
//   onLogout: logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
