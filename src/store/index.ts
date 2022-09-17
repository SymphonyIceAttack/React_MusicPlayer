import { store, RootState, AppDispatch } from "./configureStore";

export default store;

export type { RootState, AppDispatch };

export { increment, decrement, useCounterStore } from "./reducers/Counter";
