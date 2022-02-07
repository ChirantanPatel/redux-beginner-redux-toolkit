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
        }
    }
});

export const { userList, editUser } = userListSlice.actions;

export default userListSlice.reducer;