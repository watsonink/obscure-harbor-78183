import { combineReducers } from 'redux-immutable';
import filterReducer from './filterReducer';
import todosReducer from './todosReducer';
import coreReducer from './coreReducer';
import addButtonReducer from './addButtonReducer';

const rootReducer = combineReducers({
  filter: filterReducer,
  todos: todosReducer,
  page: coreReducer,
  isAdding: addButtonReducer
});

export default rootReducer;
