import {configureStore} from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice";


// creating the store to combaine multiple reducer in one store
const myntraStore = configureStore({
    items : itemsSlice.reducer
})

export default myntraStore;