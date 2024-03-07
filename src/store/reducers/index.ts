import { combineReducers } from 'redux';
import todosReducer from './todos';
import { RootState } from '../types';

const rootReducer = combineReducers<RootState>({
  todos: todosReducer as any,
});

export default rootReducer;