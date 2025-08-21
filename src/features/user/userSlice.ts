import {createSlice} from "@reduxjs/toolkit";
import {changeAvatar, changeName} from "../async/asyncTunk.ts";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(changeAvatar.pending, (state) => {
                state.avatar = 'Pending..'
            })
            .addCase(changeAvatar.rejected, (state) => {
                state.avatar = "Failed to fetch quotes"
            })
            .addCase(changeAvatar.fulfilled, (state, action) => {
                state.avatar = action.payload
            })

            .addCase(changeName.pending, (state) => {
                state.name=  'Pending..'
            })
            .addCase(changeName.rejected, (state) => {
                state.name= "Failed to fetch quotes"
            })
            .addCase(changeName.fulfilled, (state, action) => {
                state.name = action.payload;
            })
    }
})
export default userSlice.reducer;