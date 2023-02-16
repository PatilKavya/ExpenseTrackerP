import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import TokenContext from '../Context/TokenContext'
import styles from './Welcome.module.css'

const Welcome=()=>{
const context=useContext(TokenContext);
const history=useHistory()

const logOutHandler=()=>{
context.removeToken();
console.log(context.token)
history.replace('/logIn')
}

    return(
        <>
        <header>
            <div>
            <span style={{textAlign:'start',fontSize:'1.25rem'}}>Welcome to the Expense Tracker page! </span>
            <span style={{marginLeft:'60rem',backgroundColor:'lightGrey'}}>Your Profile is Incomplete.<Link to='/profile' style={{color:'blue',textDecoration:'none'}}>Complete Now</Link></span>
            </div><hr/>
        </header>
        <main >
        <button onClick={logOutHandler} className={styles.button}>LogOut</button>
        </main>
        
        
        </>
    )
}

export default Welcome