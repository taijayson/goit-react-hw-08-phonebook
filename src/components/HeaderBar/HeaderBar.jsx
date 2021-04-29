import AuthNav from "../AuthNav/AuthNav";
import HomeNav from "../HomeNav/HomeNav";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import styles from "./HeaderBar.module.css";

const HeaderBar = () => {
  const isAuth = useSelector((state) => state.auth.token);
  return (
    <header className={styles.header}>
      <HomeNav />
      {isAuth ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default HeaderBar;
