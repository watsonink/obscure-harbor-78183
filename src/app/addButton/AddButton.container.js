import { connect } from 'react-redux';
import { addButtonSubmitted, cancelButtonSubmitted, isAddTodo } from './addButtonActions';
import AddButton from './AddButton.view';

const mapStateToProps = state => ({
  isAdding: state.get('isAdding')
});

const mapDispatchToProps = dispatch => ({
  addButtonSubmitted: id => {
    dispatch(addButtonSubmitted(id));
  },
  cancelButtonSubmitted: id => {
    dispatch(cancelButtonSubmitted(id));
  },
  isAddTodo: id => {
    dispatch(isAddTodo(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);
