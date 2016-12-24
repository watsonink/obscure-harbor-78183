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
    const { todos, completeTodo, isEditing, editButtonSubmitted } = this.props;
    return (
      <div>
        {todos.map(todo => (
          <div key={todo.get('id')}>
            <Todo
              key={todo.get('id')}
              id={todo.get('id')}
              text={todo.get('text')}
              complete={todo.get('complete')}
              completeTodo={completeTodo}
              isEditing={todo.get('isEditing')}
              editButtonSubmitted={editButtonSubmitted}/>
            <Input
              id={todo.get('id')}
              text={todo.get('text')}
              isEditing={todo.get('isEditing')}/>
          </div>
        ))}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: ImmutablePropTypes.list.isRequired,
  completeTodo: PropTypes.func.isRequired,
  editButtonSubmitted: PropTypes.func,
  isEditing: PropTypes.bool
};

export default Todos;
