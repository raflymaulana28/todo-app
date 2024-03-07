// Actions
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const ADD_TODO_ASYNC = "ADD_TODO_ASYNC";

// Action Types
interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: string; // ID of the todo
}

interface AddTodoAsyncAction {
  type: typeof ADD_TODO_ASYNC;
  payload: Todo;
}

export type TodoActionTypes =
  | AddTodoAction
  | RemoveTodoAction
  | AddTodoAsyncAction;
export interface RootState {
  todos: TodoState;
  // Tambahkan tipe data state lain di sini jika ada
}
// Todo object type
export interface Todo {
  id: string;
  title: string;
  description?: string;
  date?: string;
  startTime?: string;
  endTime?: string;
}

// State type
export interface TodoState {
  todos: Todo[];
}
