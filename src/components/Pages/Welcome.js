import React from 'react'
import { Link } from 'react-router-dom'


const Welcome=()=>{
 
    return(
        <>
        <header>
            <div>
            <span style={{textAlign:'start',fontSize:'1.25rem'}}>Welcome to the Expense Tracker page! </span>
            <span style={{marginLeft:'60rem',backgroundColor:'lightGrey'}}>Your Profile is Incomplete.<Link to='/profile' style={{color:'blue',textDecoration:'none'}}>Complete Now</Link></span>
            </div><hr/>
        </header>
        <main >
       
        </main>
        
        
        </>
    )
}

export default Welcome