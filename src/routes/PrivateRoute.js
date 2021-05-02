import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuth } from "../redux/auth/authSelectors";

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const authorised = useSelector(isAuth);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        authorised ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
