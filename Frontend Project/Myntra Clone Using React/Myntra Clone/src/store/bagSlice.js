import {createSlice} from "@reduxjs/toolkit";

const bagSlice = createSlice({
    name: 'bag',
    initialState: ["002"],
    reducers: {
        addTobag: (state , action)=>{
            state.push(action.payload);
        },
        removeFromBag: (state , action)=>{
            return state.filter(itemId => itemId !== action.payload)
        }
    }
})

export const bagSliceActions =bagSlice.actions;
export default bagSlice;
