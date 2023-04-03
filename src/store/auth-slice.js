import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
    name: 'auth',
    initialState: {isLoggedin: false, userName: ''},
    reducers: {
        logIn(state) {
            state.isLoggedin = true
        },
        logOut(state) {
            state.isLoggedin = false
        },
        changeUserName(state, action) {
            state.userName = action.payload
        }
    }

})

export const authActions = authSlice.actions;

export default authSlice;