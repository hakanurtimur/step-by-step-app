import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import goalsSlice from "./goals-slice";






const store = configureStore({
    reducer: {auth: authSlice.reducer, goals: goalsSlice.reducer}
})


export default store;