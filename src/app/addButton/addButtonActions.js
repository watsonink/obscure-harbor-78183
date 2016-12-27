export const ADD_BUTTON_SUBMITTED = 'ADD_BUTTON_SUBMITTED';
export const IS_ADD_TODO = 'IS_ADD_TODO';

export const addButtonSubmitted = id => ({
  type: ADD_BUTTON_SUBMITTED,
  id
});

export const isAddTodo = isAdding => ({
  type: IS_ADD_TODO,
  isAdding
})
