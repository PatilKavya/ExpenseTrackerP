import React, { useRef, useState } from 'react'
import { Button, Card, Container, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import styles from './SignUp.module.css'

const SignUp=()=>{
   const [pass,setPass] = useState(false);
const mailRef=useRef();
const passwordRef=useRef();
const confirmPasswordRef=useRef();
const history=useHistory()

async function submitHandler(e){
e.preventDefault();


const res=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC4RU6TNNl20tludmX4qvSjb3R98k7ZEKQ',{
    method:'POST',
    body:JSON.stringify({
        email:mailRef.current.value,
        password:passwordRef.current.value,
        cofirmPassword:confirmPasswordRef.current.value,
        returnSecureToken:true,
    }),
    headers:{
      'Content-Type':'application/json'}
    })
 
    if(res.ok){
      const data= await res.json();
      console.log(data.email);
    //   context.addToken(data.idToken)
    //   context.addmail(data.email)
    //   history.replace('/product')
    history.replace('/logIn')
    }
    else{
        const data=await res.json();
        alert(data.error.message)
    }
}

const changeHandler=(e)=>{
    if(confirmPasswordRef.current.value===passwordRef.current.value){
        setPass(true)
    }
}

return (
    <>
    <Container>
        <Card className={styles.section}>
        <h2>SignUp</h2>
            <Form onSubmit={submitHandler}>
                <FormGroup className={styles.input}>
                    <FormLabel htmlFor='mail'>Email</FormLabel>
                    <FormControl type='mail' id='mail' ref={mailRef} required/>
                </FormGroup>
                <FormGroup className={styles.input}>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <FormControl type='password' id='password' ref={passwordRef} required/>
                </FormGroup>
                <FormGroup className={styles.input}>
                    <FormLabel htmlFor='confirmPassword'>Confirm Password</FormLabel>
                    <FormControl type='password' id='confirmPassword' ref={confirmPasswordRef} required onChange={changeHandler}/>
                </FormGroup>
                <Button type='submit' className={styles.button} style={{visibility:pass ? 'visible':'hidden'}}>SignUp</Button><br/><hr/>
                <Link to='/ExpenseTrackerP/logIn'><Button className={styles.button1}>Have account?,LogIn</Button></Link>
            </Form>
        </Card>
    </Container>
    </>
)


}

export default SignUp;