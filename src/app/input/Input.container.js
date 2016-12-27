import { connect } from 'react-redux';
import Input from './Input.view';

import { addTodo, editTodo, cancelTodo, cancelAddTodo } from './inputActions';

const mapStateToProps = state => ({
  canShowCaret: state.get('todos').size !== 0,
  isAdding: state.get('isAdding')
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => {
    dispatch(addTodo(text));
  },
  editTodo: text => {
    dispatch(editTodo(text));
  },
  cancelTodo: id => {
    dispatch(cancelTodo(id));
  },
  cancelAddTodo: isAdding => {
    dispatch(cancelAddTodo(isAdding));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
