import { configureStore } from "@reduxjs/toolkit";
import bagSlice from "./bagSlice";

const wearCollectionsStore =configureStore({reducer:{
    bag: bagSlice.reducer,
}})


export default wearCollectionsStore;