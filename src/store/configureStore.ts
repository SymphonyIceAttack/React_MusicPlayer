import { configureStore } from "@reduxjs/toolkit";
import MusicPlayList from "./reducers/MusicPlay"
export const store = configureStore({
    reducer: {
        MusicPlayList
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
