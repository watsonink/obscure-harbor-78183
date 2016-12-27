import { IS_ADD_TODO } from './../app/addButton/addButtonActions';
import { CANCEL_ADD_TODO } from './../app/input/inputActions';

export const initialIsAdding = false;

const addButtonReducer = (state = initialIsAdding, action) => {
  switch (action.type) {

    case IS_ADD_TODO:
      return !action.id;

    case CANCEL_ADD_TODO:
      return action.isAdding;

    default:
      return state;
  }
};

export default addButtonReducer;
