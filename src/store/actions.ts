import { TodoActionTypes, Todo } from './types';

// Action types
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// Action creators
export const addTodo = (todo: Todo): TodoActionTypes => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = (id: string): TodoActionTypes => ({
  type: REMOVE_TODO,
  payload: id,
});