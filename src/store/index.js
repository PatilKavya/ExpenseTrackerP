import { configureStore,createSlice } from "@reduxjs/toolkit";
import expenseReducer from './expense'
import tokenReducer from './login'

const initialState={darkTheme:false,premium:false}

const themeSlice=createSlice({
    name:'theme',
    initialState:initialState,
    reducers:{
        onclick(state){
            state.darkTheme=!state.darkTheme;
        },
        premium(state){
            state.darkTheme=true;
state.premium=true;
        }
    }
})
export const themeActions=themeSlice.actions;

const store=configureStore({
    reducer:{token:tokenReducer,expense:expenseReducer,theme:themeSlice.reducer}
})

export default store;