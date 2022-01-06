import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name : "", age : 0, email : "" };

export const userSlice = createSlice({
    name : "user",
    initialState: { value : initialStateValue},
    reducers : {
        login : (state, action) => {
            state.value = action.payload;
        },

        logout : (state) => {
            state.value = initialStateValue;
        },

        userFormUpdate : (state, action) => {
            state.value = action.payload;
        },
    }
});

export const { login , logout, userFormUpdate } = userSlice.actions;

export default userSlice.reducer;