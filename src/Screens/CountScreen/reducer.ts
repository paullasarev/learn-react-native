import { createAction, createReducer } from '@reduxjs/toolkit';

export const increment = createAction<number>('counter/increment');
export const decrement = createAction<number>('counter/decrement');
const initialState = 0;

export const counterReducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state, action) => state + action.payload);
  builder.addCase(decrement, (state, action) => state - action.payload);
});
