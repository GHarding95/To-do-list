import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text.trim()));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 animate-fade-in">
      <div className="relative">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new to-do item..."
          className="input pr-12 text-lg"
        />
        <button
          type="submit"
          disabled={!text.trim()}
          className={`absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
            text.trim()
              ? 'bg-primary-500 text-white hover:bg-primary-600'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Add
        </button>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Press Enter to add a new to-do item
      </p>
    </form>
  );
};

export default TodoForm; 