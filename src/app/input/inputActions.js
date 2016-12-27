export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CANCEL_TODO = 'CANCEL_TODO';
export const CANCEL_ADD_TODO = 'CANCEL_ADD_TODO';

export const addTodo = text => ({
  type: ADD_TODO,
  text
});

export const editTodo = (id) => ({
  type: EDIT_TODO,
  id
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

export const cancelTodo = id => ({
  type: CANCEL_TODO,
  id
});

export const cancelAddTodo = isAdding => ({
  type: CANCEL_ADD_TODO,
  isAdding
});
