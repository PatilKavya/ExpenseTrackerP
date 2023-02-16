import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import TokenContext from "../Context/TokenContext";

const Varification = () => {
  const context = useContext(TokenContext);

  const mailVarifyHandler = async () => {
  try  {
      var res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCsrrZtiK7noLGBRqsN-7Z4fLuJFuP1m48",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "VERIFY_EMAIL",
            idToken: context.token,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
        if(res.ok){
            const data= await res.json();
            console.log(data)
        }
     }catch(error){
        console.log(res.json().error.message)
    }
  };

  return (
    <>
    <Container>
      <Button onClick={mailVarifyHandler} variant='secondary'>Varify Email</Button>
      </Container>
    </>
  );
};

export default Varification;
