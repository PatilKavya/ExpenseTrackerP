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
import { themeActions } from "../../store";
import EditExpense from "./EditExpense";
import { Link } from "react-router-dom";

const Expenses = () => {
  const theme = useSelector((state) => state.theme.darkTheme);
  const themeButton=useSelector(state=>state.theme.premium)
  const history = useHistory();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.expense.expense);
  const amount = items.reduce((curr, item) => {
    return curr + Number(item.amount);
  }, 0);
  let mail=localStorage.getItem('mail')

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://expencetracker-b2498-default-rtdb.firebaseio.com/expenses/${mail}.json`
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
    localStorage.setItem('token','');
    localStorage.setItem('mail','')
    dispatch(tokenAction.logOut());
    history.replace("/logIn");
  };

  const themeHandler = () => {
    dispatch(themeActions.onclick());
  };


  return (
    <>
      <header>
        <br />
        <div style={{ float: "right" }}>
          <Link to='/ExpenseTrackerP/varify'><Button variant="secondary"> Varify Mail</Button></Link>
        </div>
       { themeButton&&<Button variant="warning" style={{ margin: "3rem" }}  onClick={themeHandler}>
          theme
        </Button>}
        <Button onClick={logOutHandler}>LogOut</Button>
      </header>
      <main>
        <Container className={theme ? styles.dark : styles.light }>
          <Card className={styles.section}>
            <ExpenseForm />
          </Card>
        </Container>
        <div className={styles.container}>
          <h3>Total amount:{amount}</h3>
          {amount > 10000 && (
            <Button variant="info" onClick={()=>{dispatch(themeActions.premium())}}>
              Activate premium features
            </Button>
          )}      
          <ul>
            {items.map((e) => {
              return (
                <li className={styles.expense} key={Math.random().toString()}>
                  {e.amount}-{e.description}-{e.catagory}{" "}
                  <DeleteExpense item={e} /> <EditExpense item={e}/>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Expenses;
