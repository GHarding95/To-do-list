export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export type TodoAction = 
  | { type: 'todos/addTodo'; payload: string }
  | { type: 'todos/removeTodo'; payload: string }
  | { type: 'todos/toggleTodo'; payload: string };

export type StorageError = {
  message: string;
  error: unknown;
};

export type TodoFormEvent = React.FormEvent<HTMLFormElement>;
export type TodoInputEvent = React.ChangeEvent<HTMLInputElement>;
export type TodoButtonEvent = React.MouseEvent<HTMLButtonElement>; 