export const COMPLETE_TODO = 'COMPLETE_TODO';
export const EDIT_BUTTON_SUBMITTED = 'EDIT_BUTTON_SUBMITTED';

export const completeTodo = id => ({
  type: COMPLETE_TODO,
  id
});

export const editButtonSubmitted = id => ({
  type: EDIT_BUTTON_SUBMITTED,
  id
});
