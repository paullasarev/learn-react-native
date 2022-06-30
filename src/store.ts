import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { counterReducer } from './Screens/CountScreen/reducer';

const isDev = process.env.NODE_ENV !== 'production';

const reducer = {
  counter: counterReducer,
};

export const store = configureStore({
  reducer,
  middleware: isDev
    ? (getDefaultMiddleware) => getDefaultMiddleware().concat(logger as any)
    : (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: isDev,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
