import { store, RootState, AppDispatch } from "./configureStore";

export default store;

export type { RootState, AppDispatch };

export { increment, decrement } from "./reducers/MusicPlay";
