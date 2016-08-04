import { combineReducers } from 'redux-immutable';
import filterReducer from './footer/filterReducer';
import todosReducer from './todos/todosReducer';

const rootReducer = combineReducers({
  filter: filterReducer,
  todos: todosReducer
});

export default rootReducer;
