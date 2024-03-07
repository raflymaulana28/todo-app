import { combineReducers } from "redux";
import { TodoActionTypes, TodoState, ADD_TODO, REMOVE_TODO } from "../types";

const initialState: TodoState = {
  todos: [],
};

const todosReducer = (
  state = initialState,
  action: TodoActionTypes
): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default combineReducers({
  todos: todosReducer,
});
