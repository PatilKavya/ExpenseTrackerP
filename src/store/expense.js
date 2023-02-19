import { createSlice } from "@reduxjs/toolkit";

const initialState = { expense: [] };

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
  },
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer;
