import AuthNav from "../AuthNav/AuthNav";
import HomeNav from "../HomeNav/HomeNav";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/auth/authSelectors";
import styles from "./HeaderBar.module.css";

const HeaderBar = () => {
  // const isAuth = useSelector((state) => state.auth.token);
  const authorise = useSelector(isAuth);
  return (
    <header className={styles.header}>
      <HomeNav />
      {authorise ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default HeaderBar;
