import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name : 'counter',
    initialState : {counterVal : 0},        // Define the Initial value in each slice
    reducers : {
        increment : (state)=>{
            //console.log(state , action)
            state.counterVal++;

        },
        decrement : (state)=>{
            //console.log(state , action)
            state.counterVal--;
        },
        add: (state , action)=>{
            //console.log(state , action)
            state.counterVal += Number(action.payload.num)
             
        },
        subtract :(state , action)=>{
            //console.log(state , action)
            state.counterVal -= Number(action.payload.num)

        }
    }
})


export const counterActions = counterSlice.actions;

export default counterSlice;