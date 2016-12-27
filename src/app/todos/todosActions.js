export const COMPLETE_TODO = 'COMPLETE_TODO';
export const EDIT_BUTTON_SUBMITTED = 'EDIT_BUTTON_SUBMITTED';
export const DELETE_BUTTON_SUBMITTED = 'DELETE_BUTTON_SUBMITTED';
export const CANCEL_BUTTON_SUBMITTED = 'CANCEL_BUTTON_SUBMITTED';


export const completeTodo = id => ({
  type: COMPLETE_TODO,
  id
});

export const editButtonSubmitted = id => ({
  type: EDIT_BUTTON_SUBMITTED,
  id
});

export const deleteButtonSubmitted = id => ({
  type: DELETE_BUTTON_SUBMITTED,
  id
});

export const cancelButtonSubmitted = id => ({
  type: CANCEL_BUTTON_SUBMITTED,
  id
});
