import React from "react";
import SignUp from "./components/Authnticity/SignUp";
import LogIn from "./components/Authnticity/LogIn";
import { Redirect, Route, Switch } from "react-router-dom";
import Welcome from "./components/Pages/Welcome";
import ProfilePage from "./components/Pages/ProfilePage";
import Varification from "./components/Pages/VerificationPage";
import Password from "./components/Pages/Password";
import Expenses from "./components/Expense/Expenses";
import { useSelector } from "react-redux";

function App() {

 let auth=localStorage.getItem('token')!==''? true : false;
 console.log(auth)
  return (
    <>
     
        <Switch>
          <Route path="/" exact>
            <Redirect to="/signUp" />
          </Route>
        <Route path="/logIn">
            <LogIn />
          </Route>
        { auth&& <Route path="/signUp">
            <SignUp />
          </Route>}
        { auth&&  <Route path="/welcome">
            <Welcome />
          </Route>}
        { auth&&<Route path="/profile">
            <ProfilePage />
          </Route>}
        {/* { auth&&<Route path="/varify">
            <Varification />
          </Route>} */}
       {  auth&&  <Route path='/password'>
            <Password/>
          </Route>}
         { auth&& <Route path='/expense'>
            <Expenses/>
          </Route>}
        </Switch>
    </>
  );
}

export default App;
