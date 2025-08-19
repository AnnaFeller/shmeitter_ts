import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    },
    reducers: {
        changeAvatar: (state, action) => {
            state.avatar = action.payload || state.avatar
        },
        changeName: (state, action) => {
            state.name = action.payload || state.name
        }
    }
});

export const {changeAvatar, changeName} = userSlice.actions;
export default userSlice.reducer;