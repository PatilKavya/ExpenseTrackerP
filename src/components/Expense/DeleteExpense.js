import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { expenseActions } from "../../store/expense";


const DeleteExpense = (props) => {
const dispatch=useDispatch()
const item=props.item;
  console.log(item)
  let mail=localStorage.getItem('mail');

  
  const deleteHandler = async () => {
    try {
      const res = await axios.delete(
        `https://expencetracker-b2498-default-rtdb.firebaseio.com/expenses/${mail}/${item.key}.json`
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
    dispatch(expenseActions.remove(item))
  };

  return (
    <>
      <button onClick={deleteHandler}>Delete</button>
    </>
  );
};

export default DeleteExpense;
