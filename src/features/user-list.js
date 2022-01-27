import { createSlice } from "@reduxjs/toolkit"; 

export const userListSlice = createSlice({
    name : "userList",
    initialState: { value : []},
    reducers : {
        userList : (state, action) => {
            if(!state.value) {
                state.value = [];
            }
            state.value.push(action.payload);
        }
    }
});

export const { userList } = userListSlice.actions;

export default userListSlice.reducer;