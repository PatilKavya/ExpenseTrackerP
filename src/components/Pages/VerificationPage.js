import React, { useContext,useState } from "react";
import { Button, Container } from "react-bootstrap";
import TokenContext from "../Context/TokenContext";

const Varification = () => {
  const context = useContext(TokenContext);
  const [mail,setMail]=useState(false)

  const mailVarifyHandler = async () => {

  try  {
      let res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCsrrZtiK7noLGBRqsN-7Z4fLuJFuP1m48",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "VERIFY_EMAIL",
            idToken: context.token,
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
    <Container style={{marginTop:'10rem'}}>
      <Button onClick={mailVarifyHandler} variant='secondary'>Varify Email</Button>
      {mail && (<h6>Link is sent to your email, check and verify</h6>)}
      </Container>
    </>
  );
};

export default Varification;
