import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoState, StorageError } from '../types/todo';

// Load initial state from localStorage
const loadState = (): TodoState => {
  try {
    const serializedState = localStorage.getItem('todos');
    if (serializedState === null) {
      return { todos: [] };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    const error: StorageError = {
      message: 'Error loading state from localStorage',
      error: err
    };
    console.error(error);
    return { todos: [] };
  }
};

const initialState: TodoState = loadState();

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>): void => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
      saveToLocalStorage(state);
    },
    removeTodo: (state, action: PayloadAction<string>): void => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      saveToLocalStorage(state);
    },
    toggleTodo: (state, action: PayloadAction<string>): void => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveToLocalStorage(state);
      }
    },
  },
});

const saveToLocalStorage = (state: TodoState): void => {
  try {
    localStorage.setItem('todos', JSON.stringify(state));
  } catch (err) {
    const error: StorageError = {
      message: 'Error saving state to localStorage',
      error: err
    };
    console.error(error);
  }
};

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer; 