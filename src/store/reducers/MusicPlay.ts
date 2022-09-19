import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";

export type MusicPlayItem = {
    url: string
}
const initialState: MusicPlayItem[] = []
export const MusicPlaySlice = createSlice({
    name: "MusicPlay",
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<MusicPlayItem>) => {
            state.push(action.payload)
        },
        decrement: (state) => {
            state.shift()
        },
    },
});


export const { increment, decrement } = MusicPlaySlice.actions;

export default MusicPlaySlice.reducer;
