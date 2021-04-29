import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import { isAuth } from "../redux/auth/authSelectors";

const PrivateRoute = ({ component: Component, isAuth, ...routeProps }) => {
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuth: isAuth(state),
});

export default connect(mapStateToProps)(PrivateRoute);
