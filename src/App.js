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
          <Route path="https://PatilKavya.github.io/ExpenseTrackerP/" exact>
            <Redirect to="https://PatilKavya.github.io/ExpenseTrackerP/signUp" />
          </Route>
        <Route path="https://PatilKavya.github.io/ExpenseTrackerP/logIn">
            <LogIn />
          </Route>
         <Route path="https://PatilKavya.github.io/ExpenseTrackerP/signUp">
            <SignUp />
          </Route>
        { auth&&  <Route path="https://PatilKavya.github.io/ExpenseTrackerP/welcome">
            <Welcome />
          </Route>}
        { auth&&<Route path="https://PatilKavya.github.io/ExpenseTrackerP/profile">
            <ProfilePage />
          </Route>}
        {auth&&<Route path="https://PatilKavya.github.io/ExpenseTrackerP/varify">
            <Varification />
          </Route>} 
       {  auth&&  <Route path='https://PatilKavya.github.io/ExpenseTrackerP/password'>
            <Password/>
          </Route>}
         { auth&& <Route path='https://PatilKavya.github.io/ExpenseTrackerP/expense'>
            <Expenses/>
          </Route>}
        </Switch>
    </div>
  );
}

export default App;
