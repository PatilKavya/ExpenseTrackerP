import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import styles from './Form.module.css';
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { expenseActions } from "../../store/expense";

const ExpenseForm = (props) => {
  const theme=useSelector(state=>state.theme.darkTheme)

  const dispatch=useDispatch()
const amountRef=useRef()
const detailsRef=useRef()
const catagoryRef=useRef()

const submitHandler=async(e)=>{
e.preventDefault();
const obj={amount:amountRef.current.value,description:detailsRef.current.value,catagory:catagoryRef.current.value}
dispatch(expenseActions.add(obj))
try {const res=await axios.post('https://expensetracker-14e41-default-rtdb.firebaseio.com/expenses.json',obj)
if(res.ok){
 const data=await res.json();
  console.log(data)
}} catch(error){
  console.log(error)
}


}

  return (
    <>
      <Form onSubmit={submitHandler} className={theme? styles.dark:styles.light}>
        <Form.Group className={styles.input}>
          <Form.Label>Amount:</Form.Label>
          <Form.Control type="number" ref={amountRef} />
        </Form.Group>
        <Form.Group className={styles.input}>
          <Form.Label>Description:</Form.Label>
          <Form.Control type="text" ref={detailsRef} />
        </Form.Group>
        <Form.Group className={styles.input}>
          <Form.Label>Catagory</Form.Label>
          <Form.Select ref={catagoryRef}>
            <option>Food</option>
            <option>Books</option>
            <option>Travel</option>
            <option>Movie</option>
            <option>Shopping</option>
          </Form.Select>
        </Form.Group>
        <Button type='submit' className={styles.button} variant='secondary'>Add</Button>
      </Form>
    </>
  );
};

export default ExpenseForm;
