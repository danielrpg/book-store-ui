import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { PrivateRoute } from "./components/common/PrivateRoute";
import { LoginComponent, RegisterComponent } from "./components/auth";
import { DashboardComponent } from "./components/dashboard/DashboardComponent";
import { AuthContext } from "./hooks/AuthContext";
import { AddBookComponent } from "./components/book";

const App = () => {
  return (
    <AuthContext.Provider>
      <Router>
        <Switch>
          <Route path="/login" component={LoginComponent} />
          <Route path="/sigin" component={RegisterComponent} />
          <Route path="/dashboard" component={DashboardComponent} />
          <Route path="/add-book" component={AddBookComponent} />
          
          {/* <PrivateRoute>
            <DashboardComponent />
          </PrivateRoute> */}
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
