export const WHAT_PAGE_TO_DO = 'WHAT_PAGE_TO_DO';
export const WHAT_PAGE_SELECTED = "WHAT_PAGE_SELECTED";

export const whatPageTodo = id => ({
  type: WHAT_PAGE_TO_DO,
  id
});

export const whatPageSelected = id => ({
  type: WHAT_PAGE_SELECTED,
  id
});
