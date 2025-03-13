import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            To-do list
          </h1>
          <div className="space-y-6">
            <TodoForm />
            <TodoList />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App; 