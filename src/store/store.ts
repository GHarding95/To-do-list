import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import { TodoState } from '../types/todo';

export interface RootState {
  todos: TodoState;
}

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type AppDispatch = typeof store.dispatch; 