import { connect } from 'react-redux';
import Input from './Input.view';

import { addTodo, editTodo } from './inputActions';

const mapStateToProps = state => ({
  canShowCaret: state.get('todos').size !== 0
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => {
    dispatch(addTodo(text));
  },
  editTodo: text => {
    dispatch(editTodo(text));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
