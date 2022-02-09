import { createSlice } from "@reduxjs/toolkit"; 

export const userListSlice = createSlice({
    name : "userList",
    initialState: { value : [], userDetail : {} },
    reducers : {
        userList : (state, action) => {
            if(!state.value) {
                state.value = [];
            }
            state.value.push(action.payload);
        },
        editUser : (state, action) => {
            state.userDetail = action.payload;
        },
        deleteUser : (state, action) => {
            state.value = action.payload;
        },
    }
});

export const { userList, editUser, deleteUser } = userListSlice.actions;

export default userListSlice.reducer;