import { IS_ADDING, WHAT_PAGE_TO_DO, WHAT_PAGE_SELECTED } from './../app/navigation/navigationActions';

export const initialPage = 0;

const coreReducer = (state = initialPage, action) => {
  switch (action.type) {
    case WHAT_PAGE_TO_DO:
      return action.id;

    case WHAT_PAGE_SELECTED:
      return action.id;
    default:
      return state;
  }
};

export default coreReducer;
