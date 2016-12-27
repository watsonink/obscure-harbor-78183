import { Map, List } from 'immutable';

import { ADD_TODO, EDIT_TODO, DELETE_TODO, CANCEL_TODO } from './../app/input/inputActions';
import { COMPLETE_TODO, EDIT_BUTTON_SUBMITTED, DELETE_BUTTON_SUBMITTED, CANCEL_BUTTON_SUBMITTED } from './../app/todos/todosActions';
import { CLEAR_COMPLETED } from './../app/footer/footerActions';

export const initialTodos = List([
  Map({
    id: 0,
    text: 'Learn React & Redux',
    complete: false,
    isEditing: false,
    isDeleted: false
  }), Map({
    id: 1,
    text: "Utilize Webpack's Hot Module Reloading",
    complete: false,
    isEditing: false,
    isDeleted: false
  }), Map({
    id: 2,
    text: 'Set up Redux DevTools',
    complete: false,
    isEditing: false,
    isDeleted: false
  }), Map({
    id: 3,
    text: 'Optimize using immutability :)',
    complete: false,
    isEditing: false,
    isDeleted: false
  })
]);

const todosReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.push(Map({
        id: state.reduce((maxId, todo) => Math.max(todo.get('id'), maxId), -1) + 1,
        text: action.text,
        complete: false
      }));

    case DELETE_TODO:
      return state.map(todo =>
        todo.get('id') === action.id.id ?
          todo.set('isDeleted', !todo.get('isDeleted'))
              .set('text', action.id.text) :
          todo
      );

    case EDIT_TODO:
      return state.map(todo =>
        todo.get('id') === action.id.id ?
          todo.set('isEditing', !todo.get('isEditing'))
              .set('text', action.id.text) :
          todo
      );

    case CANCEL_TODO:
      return state.map(todo =>
        todo.get('id') === action.id ?
          todo.set('isEditing', !todo.get('isEditing')) :
          todo
      );

    case DELETE_BUTTON_SUBMITTED:
      return state.map(todo =>
        todo.get('id') === action.id ?
          todo.set('isDeleted', !todo.get('isDeleted')) :
          todo
      );

    case CANCEL_BUTTON_SUBMITTED:
      return state.map(todo =>
        todo.get('id') === action.id ?
          todo.set('isEditing', !todo.get('isEditing')) :
          todo
      );

    case EDIT_BUTTON_SUBMITTED:
      return state.map(todo =>
        todo.get('id') === action.id ?
          todo.set('isEditing', !todo.get('isEditing')) :
          todo
      );

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.get('id') === action.id ?
          todo.set('complete', !todo.get('complete')) :
          todo
      );

    case CLEAR_COMPLETED:
      return state.filter(todo => !todo.get('complete'));
    default:
      return state;
  }
};

export default todosReducer;
