import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/carprofileActions";

import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/common/PrivateRoute";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import CreateCarProfile from "./components/create-carprofile/CreateCarProfile";
import EditCarProfile from "./components/edit-carprofile/EditCarProfile";
import AddMaintenance from "./components/add-credentials/AddMaintenance";
import AddMileage from "./components/add-credentials/AddMileage";
import AddExpense from "./components/add-credentials/AddExpense";
import Reports from "./components/add-credentials/Reports";
import "./App.css";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-carprofile"
                  component={CreateCarProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/edit-carprofile"
                  component={EditCarProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-maintenance"
                  component={AddMaintenance}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-mileage"
                  component={AddMileage}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-expense"
                  component={AddExpense}
                />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/add-reports" component={Reports} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
