import React, { useContext, useRef } from "react";
import { Button, Card, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import TokenContext from "../Context/TokenContext";
import styles from './ProfilePage.module.css'

const ProfilePage = () => {
const nameRef=useRef();
const urlRef=useRef();
const context=useContext(TokenContext);

   const submitHandler= async (e)=>{
    e.preventDefault();
   const res=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCsrrZtiK7noLGBRqsN-7Z4fLuJFuP1m48',{ 
     method:'POST',
   body:JSON.stringify({
       idToken:context.token,
       displayName:nameRef.current.value,
       photoUrl:urlRef.current.value,
       returnSecureToken:true,
   }),
   headers:{
     'Content-Type':'application/json'}
   })

   if(res.ok){
    const data= await res.json();
    console.log(data);
 
//   history.replace('/logIn')
  }
  else{
      const data=await res.json();
      alert(data.error.message)
  }
   }




  return (
    <>
      <header>
        <span style={{ textAlign: "start", fontSize: "1.35rem" }}>
          Winners never quite, Quitters never win.
        </span>
          <span style={{marginLeft:'30rem' ,backgroundColor: "lightgrey" ,fontSize: "1.15rem"}}>
            Your Profile is 64% completed. A complete Profile has a higher
            chances of landing a job .
            <Link
              to="/profile"
              style={{ color: "blue", textDecoration: "none" }}
            >
              Complete Now
            </Link>
          </span>
      </header> <hr />
      <main>
        <Container>
        <Card className={styles.section}>
        <h3>Contact Details</h3>
        <Button variant='light' className={styles.button1}>Cancel</Button>
            <Form onSubmit={submitHandler}>
                <FormGroup className={styles.input} >
                    <FormLabel>Full Name:</FormLabel>
                    <FormControl type="text" ref={nameRef}/>
                </FormGroup>
                <FormGroup className={styles.input}>
                    <FormLabel>Profile Photo URL</FormLabel>
                    <FormControl type="url" ref={urlRef}/>
                </FormGroup>
                <Button className={styles.button} variant='light' type="submit">Update</Button> 
            </Form>
        </Card>
        </Container>
      </main>
    </>
  );
};

export default ProfilePage;
