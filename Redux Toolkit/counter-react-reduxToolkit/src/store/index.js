import {configureStore, createSlice} from "@reduxjs/toolkit"
//define initial value
/*const INITIAL_VALUE ={
    counter : 0,
    privacy: false
}*/

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
            console.log(state , action)
        }
    }
})
/*const counterReducer = (store=INITIAL_VALUE , action)=>{
    let newStore =store
    if(action.type === 'INCREMENT'){
        newStore ={...store , counter : store.counter +1 }
    }else if (action.type==='DECREMENT'){
        newStore={...store ,  counter: store.counter - 1 }
    }else if(action.type==='ADD'){
        newStore ={...store ,  counter : store.counter + Number(action.payload.num) }
    }else if(action.type==='SUB'){
        newStore={...store ,  counter : store.counter - Number(action.payload.num)}
    }else if(action.type === 'PRIVACY_TOGGLE'){
        newStore={...store ,  privacy: !store.privacy}
    }
    return newStore;
} */

const counterStore = configureStore({reducer : {counter : counterSlice.reducer}});


export const counterActions = counterSlice.actions
export default counterStore;