import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuth } from "../redux/auth/authSelectors";

const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const authorised = useSelector(isAuth);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        authorised && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
