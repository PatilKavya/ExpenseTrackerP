import React from "react";
import axios from "axios";

const DeleteExpense = (props) => {
    console.log(props.delete)
  const deleteHandler = async () => {
    try {
      const res = await axios.delete(
        `https://expensetracker-14e41-default-rtdb.firebaseio.com/expenses/${props.delete}.json`
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={deleteHandler}>Delete</button>
    </>
  );
};

export default DeleteExpense;
