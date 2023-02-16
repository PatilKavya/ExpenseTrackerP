import React, { useState } from 'react'
import TokenContext from './TokenContext'

const TokenContextProvider=(props)=>{
    const initialToken=localStorage.getItem('token')
const [token,setToken]=useState(initialToken);

const userLoggedIn=!!token;

const tokenHandler=(token)=>{
 
    localStorage.setItem('token',token)
    setToken( localStorage.getItem('token'))
}

const removeTokenHandler=()=>{
    localStorage.removeItem('token')
}
const tokenContext={
    token:token,
    addToken:tokenHandler,
    removeToken:removeTokenHandler,
    isLoggedIn:userLoggedIn
}

return (
    
<TokenContext.Provider value={tokenContext}>
{props.children}
</TokenContext.Provider> 
    
)


}

export default TokenContextProvider;