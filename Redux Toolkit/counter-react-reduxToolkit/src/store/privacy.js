import { createSlice } from "@reduxjs/toolkit"

//create slice for privacy..
const privacySlice =createSlice({
    name :'privacy',
    initialState :false,
    reducers : {
        toggle : (state) =>{
            return state =!state
        }
    }
    }

)


export const privacyActions = privacySlice.actions;

export default privacySlice;