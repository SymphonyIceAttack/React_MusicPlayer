import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
const initialState = {
    count: 0,
};
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count = state.count + 1;
        },
        decrement: (state) => {
            state.count = state.count - 1;
        },
    },
});

export const useCounterStore = () => (state: RootState) => state.counter.count;

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
