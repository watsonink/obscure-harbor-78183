import React, { PropTypes, Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { shouldComponentUpdate as shouldPureComponentUpdate } from 'react-addons-pure-render-mixin';
import styles from './Todo.css';

import Input from '../input/Input.container';
import Todo from './Todo';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = shouldPureComponentUpdate.bind(this);
  }

  render() {
    const { todos, completeTodo, isEditing, isDeleted, deleteButtonSubmitted, editButtonSubmitted, cancelButtonSubmitted } = this.props;
    return (
      <div>
        {todos.map(todo => (
          <div key={todo.get('id')}>
            {!todo.get('isDeleted') ?
              <div>
                <Todo
                  key={todo.get('id')}
                  id={todo.get('id')}
                  text={todo.get('text')}
                  complete={todo.get('complete')}
                  completeTodo={completeTodo}
                  isEditing={todo.get('isEditing')}
                  isDeleted={todo.get('isDeleted')}
                  deleteButtonSubmitted={deleteButtonSubmitted}
                  editButtonSubmitted={editButtonSubmitted}/>
                <Input
                  id={todo.get('id')}
                  text={todo.get('text')}
                  cancelButtonSubmitted={cancelButtonSubmitted}
                  isEditing={todo.get('isEditing')}/>
              </div>
            : null
            }
          </div>
        ))}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: ImmutablePropTypes.list.isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteButtonSubmitted: PropTypes.func.isRequired,
  cancelButtonSubmitted: PropTypes.func,
  editButtonSubmitted: PropTypes.func,
  isEditing: PropTypes.bool,
  isDeleted: PropTypes.bool
};

export default Todos;
