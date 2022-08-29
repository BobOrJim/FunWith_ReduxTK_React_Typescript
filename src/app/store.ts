import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

//Systet med detta, är att wrappa redux funktioner till övrig applikation. See nästa fil.
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
