import React, { Component, PropTypes } from 'react';
import { shouldComponentUpdate as shouldPureComponentUpdate } from 'react-addons-pure-render-mixin';

import styles from './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = shouldPureComponentUpdate.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.editButtonSubmitted = this.editButtonSubmitted.bind(this);
    this.deleteButtonSubmitted = this.deleteButtonSubmitted.bind(this);
  }

  completeTodo() { this.props.completeTodo(this.props.id); }
  editButtonSubmitted() { this.props.editButtonSubmitted(this.props.id); }
  deleteButtonSubmitted() { this.props.deleteButtonSubmitted(this.props.id); }

  render() {
    const { text, complete, isEditing } = this.props;
    return (
      <div>
        {!isEditing ?
          <div className={styles.todo}>
            <span className={complete ? `${styles.check} ${styles.completed}` : styles.check} onClick={this.completeTodo}/>
            <span className={complete ? `${styles.text} ${styles.completed}` : `${styles.text} ${styles.cursor}`} onClick={this.editButtonSubmitted}>
              {text}
            </span>
            <span className={`${styles.filterDelete} ${styles.current}`} onClick={this.deleteButtonSubmitted}>Delete</span>
            <span className={`${styles.filterEdit} ${styles.current}`} onClick={this.editButtonSubmitted}>Edit</span>
          </div>
          : null
        }
      </div>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteButtonSubmitted: PropTypes.func,
  editButtonSubmitted: PropTypes.func,
  isEditing: PropTypes.bool
};

export default Todo;
