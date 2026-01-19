import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    performedAction: "--No Action --",
  },
  reducers: {
    incrementCounter: (state, action) => {
      state.value += 1;
      state.performedAction = action.payload;
    },
    decrementCounter: (state, action) => {
      state.value -= 1;
      state.performedAction = action.payload;
    },
    resetCounter: (state, action) => {
      state.value = 0;
      state.performedAction = action.payload;
    },
  },
});

export const { incrementCounter, decrementCounter, resetCounter } =
  counterSlice.actions;

export default counterSlice.reducer;
