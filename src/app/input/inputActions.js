export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export const addTodo = text => ({
  type: ADD_TODO,
  text
});

export const editTodo = (id) => ({
  type: EDIT_TODO,
  id
});
