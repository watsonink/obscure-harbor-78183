import { connect } from 'react-redux';
import { completeTodo, deleteButtonSubmitted, editButtonSubmitted, cancelButtonSubmitted } from './todosActions';
import Todos from './Todos.view';

import { ALL, ACTIVE, COMPLETED } from './../../state/filterTypes';

const applyFilter = (todos, filter) => {
  switch (filter) {
    case ALL:
      return todos;
    case ACTIVE:
      return todos.filter(todo => !todo.get('complete'));
    case COMPLETED:
      return todos.filter(todo => todo.get('complete'));
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: applyFilter(state.get('todos'), state.get('filter'))
});

const mapDispatchToProps = dispatch => ({
  completeTodo: id => {
    dispatch(completeTodo(id));
  },
  editButtonSubmitted: id => {
    dispatch(editButtonSubmitted(id));
  },
  deleteButtonSubmitted: id => {
    dispatch(deleteButtonSubmitted(id));
  },
  cancelButtonSubmitted: id => {
    dispatch(cancelButtonSubmitted(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
