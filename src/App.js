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
import styles from './App.module.css'

function App() {
  const theme=useSelector(state=>state.theme.darkTheme)
 let auth=localStorage.getItem('token')!==''? true : false;
 console.log(auth)

  return (
    <div className={theme ? styles.dark : styles.light} >
     
        <Switch>
          <Route path="/ExpenseTrackerP" exact>
            <Redirect to="/ExpenseTrackerP/signUp" />
          </Route>
        <Route path="/ExpenseTrackerP/logIn">
            <LogIn />
          </Route>
         <Route path="/ExpenseTrackerP/signUp">
            <SignUp />
          </Route>
        { auth&&  <Route path="/ExpenseTrackerP/welcome">
            <Welcome />
          </Route>}
        { auth&&<Route path="/ExpenseTrackerP/profile">
            <ProfilePage />
          </Route>}
        {auth&&<Route path="/ExpenseTrackerP/varify">
            <Varification />
          </Route>} 
       {  auth&&  <Route path='/ExpenseTrackerP/password'>
            <Password/>
          </Route>}
         { auth&& <Route path='/ExpenseTrackerP/expense'>
            <Expenses/>
          </Route>}
        </Switch>
    </div>
  );
}

export default App;
