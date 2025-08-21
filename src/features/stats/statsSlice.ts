import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {StatsType} from "../utils/enum.ts";


// type StatsType = typeof followers | typeof following;

interface ChangeStatsPayload {
    statsType: StatsType;
    sum: number;
}

const statsSlice = createSlice({
    name: 'stats',
    initialState: {
        followers: 0,
        following: 0
    },
    reducers: {
        changeStats: {
            reducer: (state, action: PayloadAction<ChangeStatsPayload>) => {
                const res = state[action.payload.statsType] + action.payload.sum;
                state[action.payload.statsType] = res >= 0 ? res : 0;
            },
            prepare: (statsType: StatsType, sum: number) => ({payload: {statsType, sum}})
        }
    }
})

export const {changeStats} = statsSlice.actions;
export default statsSlice.reducer;