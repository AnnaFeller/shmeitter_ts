import {createAsyncThunk} from "@reduxjs/toolkit";

export const changeName = createAsyncThunk(
    'user/changeName',
    async (newAvatar:string) => {
        return newAvatar;
    }
)

export const changeAvatar = createAsyncThunk(
 'user/changeAvatar',
    async (newName:string)=> {
     return newName
    }
)