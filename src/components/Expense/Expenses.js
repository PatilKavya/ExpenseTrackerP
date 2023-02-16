import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import ExpenseForm from "./Form";
import styles from './Expenses.module.css';

const Expenses = () => {
const[state,setState]=useState([]);


  const expenseHandler=(item)=>{
     setState([...state,item])
  }

  return (
    <>
      <Container>
        <Card className={styles.section}>
          <ExpenseForm object={expenseHandler}/>
          <ul>
            {state.map(e=>{
              return (<li className={styles.expense}>{e.amount}-{e.description}-{e.catagory}</li>)
            })}
          </ul>
        </Card>
      </Container>
    </>
  );
};

export default Expenses;
