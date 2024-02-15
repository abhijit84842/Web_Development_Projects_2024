import {createSlice} from "@reduxjs/toolkit"

const itemsSlice = createSlice({
   name: 'items',
   initialState: [],
   reducers: {
    addInitialItems: (store , action )=>{
        return store;
    }
   }
});

// EXPORTING THE ACTION OF itemsSlice..
export const itemsActions = itemsSlice.actions;
export default itemsSlice;