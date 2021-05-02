import React, { Suspense, useEffect, lazy } from "react";
import { Redirect, Switch } from "react-router";
import { useDispatch } from "react-redux";

import HeaderBar from "./components/HeaderBar/HeaderBar";
import { getCurrentUser } from "./redux/auth/authOperations";

import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublickRoute";

import "./App.css";

const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <div className="wrap">
      <HeaderBar />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <PublicRoute exact path="/" component={HomePage} />
          <PrivateRoute exact path="/contacts" component={ContactsPage} />
          <PublicRoute
            exact
            path="/register"
            restricted
            redirectTo="/contacts"
            component={RegisterPage}
          />
          <PublicRoute
            exact
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginPage}
          />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}
