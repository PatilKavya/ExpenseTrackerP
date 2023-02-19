import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from './expense'
import tokenReducer from './login'


const store=configureStore({
    reducer:{token:tokenReducer,expense:expenseReducer}
})

export default store;