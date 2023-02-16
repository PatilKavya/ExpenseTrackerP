import React from 'react'

const TokenContext=React.createContext({
token:'',
addToken:()=>{},
removeToken:()=>{},
isLoggedIn:false
})

export default TokenContext;