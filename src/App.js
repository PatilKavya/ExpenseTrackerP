import React from "react";
import SignUp from "./components/Authnticity/SignUp";
import LogIn from "./components/Authnticity/LogIn";
import { Redirect, Route, Switch } from "react-router-dom";
import Welcome from "./components/Pages/Welcome";
import TokenContextProvider from "./components/Context/TokenContextProvider";
import ProfilePage from "./components/Pages/ProfilePage";
import Varification from "./components/Pages/VerificationPage";
import Password from "./components/Pages/Password";
import Expenses from "./components/Expense/Expenses";

function App() {
  return (
    <>
      <TokenContextProvider>
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
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/varify">
            <Varification />
          </Route>
          <Route path='/password'>
            <Password/>
          </Route>
          <Route path='/expense'>
            <Expenses/>
          </Route>
        </Switch>
      </TokenContextProvider>
    </>
  );
}

export default App;
