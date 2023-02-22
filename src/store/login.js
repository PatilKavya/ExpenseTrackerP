import { createSlice } from "@reduxjs/toolkit";


const initialState={isLoggedIn:false,token:''}

const tokenSlice=createSlice({
    name:'logging',
    initialState:initialState,
    reducers : {
        logIn(state,action){
            state.isLoggedIn=true;
            state.token=action.payload;
            
        },
        logOut(state) {
            state.isLoggedIn=false;
            state.token='';
        }
    }
})


export const tokenAction=tokenSlice.actions;
export default tokenSlice.reducer;