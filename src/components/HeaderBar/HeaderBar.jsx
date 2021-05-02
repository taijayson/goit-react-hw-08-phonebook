import AuthNav from "../AuthNav/AuthNav";
import HomeNav from "../HomeNav/HomeNav";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/auth/authSelectors";
import styles from "./HeaderBar.module.css";

const HeaderBar = () => {
  const authorised = useSelector(isAuth);
  return (
    <header className={styles.header}>
      <HomeNav />
      {authorised ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default HeaderBar;
