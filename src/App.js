import React from "react";
import SignUp from "./components/Authnticity/SignUp";
import LogIn from "./components/Authnticity/LogIn";
import { Redirect, Route, Switch } from "react-router-dom";
import Welcome from "./components/Pages/Welcome";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/signUp" />
        </Route>
        <Route path="/logIn">
          <LogIn />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
      </Switch>
    </>
  );
}

export default App;
