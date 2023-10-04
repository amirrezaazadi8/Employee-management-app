import { configureStore } from "@reduxjs/toolkit";
import ListSlice from "../features/ListSlice";

import logger from "redux-logger";

const store = configureStore({
    reducer: {
        list: ListSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})


export default store;