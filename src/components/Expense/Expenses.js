import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import ExpenseForm from "./Form";
import styles from "./Expenses.module.css";
import axios from "axios";
import DeleteExpense from "./DeleteExpense";
import { useDispatch, useSelector } from "react-redux";
import { expenseActions } from "../../store/expense";
import Varification from "../Pages/VerificationPage";
import { tokenAction } from "../../store/login";
import { useHistory } from "react-router-dom";

const Expenses = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.expense.expense);
  const amount=items.reduce((curr,item)=>{
    return curr+Number(item.amount);
  },0)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://expensetracker-14e41-default-rtdb.firebaseio.com/expenses.json"
        );
        const arr = Object.keys(res.data);
        console.log(arr);
        let updatedSet = arr.map((key) => {
          return { ...res.data[key], key };
        });
        console.log(updatedSet);
        // setState(updatedSet);
        dispatch(expenseActions.firebase(updatedSet));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const logOutHandler = () => {
    dispatch(tokenAction.logOut());
    history.replace("/logIn");
  };

  return (
    <>
      <header>
        <br/>
        <div style={{float:'right'}}>
        <Varification />
        </div>
        <Button onClick={logOutHandler}>LogOut</Button>
      </header>
      <main>
        <Container>
          <Card className={styles.section}>
            <ExpenseForm />
            <h3>Total amount:{amount}</h3>
            {amount>10000 && <Button variant="info">Activate premium features</Button>}
            <ul>
              {items.map((e) => {
                return (
                  <li className={styles.expense} key={Math.random().toString()}>
                    {e.amount}-{e.description}-{e.catagory}{" "}
                    <DeleteExpense item={e} /> <button>Edit</button>
                  </li>
                );
              })}
            </ul>
          </Card>
        </Container>
      </main>
    </>
  );
};

export default Expenses;
