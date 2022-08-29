import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 666,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //Immers fixar så vi inte pillar i ett imutable state. Detta sker i bakgrunden.
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    addAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, reset, addAmount } = counterSlice.actions;
export default counterSlice.reducer;
