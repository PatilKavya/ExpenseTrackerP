import React from 'react'
import { useDispatch } from 'react-redux'
import { expenseActions } from '../../store/expense';
import axios from 'axios';


const EditExpense=(props)=>{
const dispatch=useDispatch();
const item=props.item;

const editHandler=async()=>{
    try {
        const res = await axios.delete(
          `https://expensetracker-14e41-default-rtdb.firebaseio.com/expenses/${item.key}.json`
        );
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
dispatch(expenseActions.edit(item))

}

    return (
        <>
        <button onClick={editHandler}> Edit</button>
        </>
    )
}

export default EditExpense;