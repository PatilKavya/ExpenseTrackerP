import React, {  useEffect, useRef } from 'react'
import { Button, Card, Container, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import styles from './Login.module.css'
import { useDispatch } from 'react-redux';
import { tokenAction } from '../../store/login';

const LogIn=()=>{
   const dispatch= useDispatch()
const mailRef=useRef();
const passwordRef=useRef();

 const history = useHistory();

async function submitHandler(e){
e.preventDefault();

const res=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCsrrZtiK7noLGBRqsN-7Z4fLuJFuP1m48',{
    method:'POST',
    body:JSON.stringify({
        email:mailRef.current.value,
        password:passwordRef.current.value,
        returnSecureToken:true,
    }),
    headers:{
      'Content-Type':'application/json'}
    })
 
    if(res.ok){
      const data= await res.json();
    //   console.log(data.email);
    //   console.log(data.idToken)
    //    context.addToken(data.idToken)
    localStorage.setItem('token',data.idToken) 
    dispatch(tokenAction.logIn(localStorage.getItem('token'))) 
    
      history.replace('/expense')
    }
    else{
        const data=await res.json();
        alert(data.error.message)
    }
}

// useEffect(()=>{
//     dispatch(tokenAction.logIn(localStorage.getItem('token'))) 
// },[])

return (
    <>
    <Container>
        <Card className={styles.section}>
            <h2>LogIn</h2>
            <Form onSubmit={submitHandler}>
                <FormGroup className={styles.input}>
                    <FormLabel htmlFor='mail'>Email</FormLabel>
                    <FormControl type='mail' id='mail' ref={mailRef} required/>
                </FormGroup>
                <FormGroup className={styles.input}>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <FormControl type='password' id='password' ref={passwordRef} required/>
                </FormGroup>
                  <Link to='/password' style={{textDecoration:'none'}}>Forgot Password?</Link><br/>
                <Button type='submit'  className={styles.button} variant='secondary'>LogIn</Button><br/>
                <Link to='/signUp'><Button className={styles.button1} variant='info'>Create Account</Button></Link>
            </Form>
        </Card>
    </Container>
    </>
)


}

export default LogIn;