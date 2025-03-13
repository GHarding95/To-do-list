import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../store/todoSlice';
import { RootState } from '../store/store';
import { TodoButtonEvent } from '../types/todo';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleToggle = (id: string): void => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id: string): void => {
    dispatch(removeTodo(id));
  };

  if (todos.length === 0) {
    return (
      <div className="card text-center py-8">
        <p className="text-gray-500 text-lg">No to-do items yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo, index) => (
        <div
          key={todo.id}
          className="card group flex items-center justify-between animate-slide-in hover:shadow-md transition-all duration-200"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div className="flex items-center space-x-4 flex-1">
            <button
              onClick={(e: TodoButtonEvent) => handleToggle(todo.id)}
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                todo.completed
                  ? 'bg-primary-500 border-primary-500'
                  : 'border-gray-300 hover:border-primary-500'
              }`}
              aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
            >
              {todo.completed && (
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
            <span
              className={`text-lg transition-all duration-200 ${
                todo.completed ? 'text-gray-400 line-through' : 'text-gray-800'
              }`}
            >
              {todo.text}
            </span>
          </div>
          <button
            onClick={(e: TodoButtonEvent) => handleDelete(todo.id)}
            className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-all duration-200 opacity-100 group-hover:opacity-100 hover:scale-110"
            aria-label="Delete to-do item"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList; 