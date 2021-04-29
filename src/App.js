// import React from "react";
// import ContactForm from "./components/ContactForm/ContactForm";
// import Filter from "./components/Filter/Filter";
// import ContactList from "./components/ContactList/ContactList";
// import { v4 as uuidv4 } from "uuid";

import React, { Component, Suspense, lazy } from "react";
import { Switch } from "react-router";
import { connect } from "react-redux";

import HeaderBar from "./components/HeaderBar/HeaderBar";
import { getCurrentUser } from "./redux/auth/authOperations";

import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublickRoute";

import "./App.css";

const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }
  render() {
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
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = { getCurrentUser: getCurrentUser };

export default connect(null, mapDispatchToProps)(App);

// export const App = () => {
//   return (
//     <div className="wrap">
//       <div className="section">
//         <h1 className="title">Phonebook</h1>
//         <ContactForm />
//       </div>
//       <div className="section">
//         <h2 className="title">Contacts</h2>
//         <Filter />
//         <ContactList />
//       </div>
//     </div>
//   );
// };

// export default App;
