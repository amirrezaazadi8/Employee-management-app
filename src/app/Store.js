import { configureStore } from "@reduxjs/toolkit";
import ListSlice from "../features/ListSlice";

const store = configureStore({
    reducer: {
        list: ListSlice,
    }
})


export default store;