import React, {useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const Varification = () => {
  const token=useSelector(state=>state.token.token)
  const [mail,setMail]=useState(false)

  const mailVarifyHandler = async () => {

  try  {
      let res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCsrrZtiK7noLGBRqsN-7Z4fLuJFuP1m48",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "VERIFY_EMAIL",
            idToken: token,
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        if(res.ok){
            const data= await res.json();
            console.log(data)
          setMail(true);
        }
     }catch(error){
        console.log(error)
    }
    
  };

  return (
    <>
    <Container>
      <Button onClick={mailVarifyHandler} variant='secondary'>Varify Email</Button>
      {mail && (<h6>Link is sent to your email, check and verify</h6>)}
      </Container>
    </>
  );
};

export default Varification;
