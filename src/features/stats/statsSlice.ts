import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {StatsKey} from "../utils/statsKey.ts";


type StatsType = StatsKey;



const statsSlice = createSlice({
    name: 'stats',
    initialState: {
        followers: 0,
        following: 0
    },
    reducers: {
        changeStats: {
            reducer: (state, action: PayloadAction<{statsType: StatsType, sum:number}>) => {
                const res = state[action.payload.statsType] + action.payload.sum;
                state[action.payload.statsType] = res >= 0 ? res : 0;
            },
            prepare: (statsType: StatsType, sum: number) => ({payload: {statsType, sum}})
        }
    }
})

export const {changeStats} = statsSlice.actions;
export default statsSlice.reducer;