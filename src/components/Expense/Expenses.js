import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import ExpenseForm from "./Form";
import styles from "./Expenses.module.css";
import axios from "axios";
import DeleteExpense from "./DeleteExpense";

const Expenses = () => {
  const [state, setState] = useState([]);

  const expenseHandler = (item) => {
    setState([...state, item]);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://expensetracker-14e41-default-rtdb.firebaseio.com/expenses.json"
        );
        const arr = Object.keys(res.data);
        console.log(arr);
        let updatedSet = arr.map((key) => {
          return {...res.data[key],key};
        });
        console.log(updatedSet);
        setState(updatedSet);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);








  return (
    <>
      <Container>
        <Card className={styles.section}>
          <ExpenseForm object={expenseHandler} />
          <ul>
            {state.map((e) => {
              return (
                <li className={styles.expense} key={Math.random().toString()}>
                  {e.amount}-{e.description}-{e.catagory} {" "}<DeleteExpense delete={e.key} />{" "}
                  <button>Edit</button>
                </li>
              );
            })}
          </ul>
        </Card>
      </Container>
    </>
  );
};

export default Expenses;
