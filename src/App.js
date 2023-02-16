import React from 'react'
import SignUp from './components/Authnticity/SignUp';
import LogIn from './components/Authnticity/LogIn';
import { Route, Switch } from 'react-router-dom';




function App() {
  return (
       <>
       <Switch>
       <Route path='/logIn'>
         <LogIn/>
       </Route>
      <Route path='/signup'>
      <SignUp/>
      </Route>
      </Switch>
      </>
  );
}

export default App;
