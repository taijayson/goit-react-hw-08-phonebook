import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import { isAuth } from "../redux/auth/authSelectors";

const PublicRoute = ({
  component: Component,
  isAuth,
  redirectTo,
  ...routeProps
}) => {
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuth && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuth: isAuth(state),
});

export default connect(mapStateToProps)(PublicRoute);
