import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 666,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //Immers fixar så vi inte pillar i ett imutable state. Detta sker i bakgrunden.
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    addAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, reset, addAmount } = counterSlice.actions;
export default counterSlice.reducer;
export const selectValue = (state: { counter: { value: number } }) => state.counter.value;
