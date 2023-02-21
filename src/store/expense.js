import { createSlice } from "@reduxjs/toolkit";

const initialState = { expense: [],item:{},edit:false };

const expenseSlice = createSlice({
  name: "expense",
  initialState: initialState,
  reducers: {
    add(state, action) {
      state.expense.push(action.payload);
    },

    firebase(state, action) {
      state.expense = action.payload;
    },
    remove(state, action) {
      const updatedExpense = state.expense.filter(
        (item) => item.description !== action.payload.description
      );
      state.expense = updatedExpense;
    },
    edit(state,action){
      const updatedExpense = state.expense.filter(
        (item) => item.description !== action.payload.description
      );
      state.expense = updatedExpense;
      state.item=action.payload;
      state.edit=true;
    },
    back(state){
      state.edit=false;
    }
  },
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer;
