import React, { Component, PropTypes } from 'react';
import styles from './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { text: this.props.text || '' };
    this.handleChangeAdd = this.handleChangeAdd.bind(this);
    this.handleChangeEdit = this.handleChangeEdit.bind(this);
    this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    this.handleSubmitCancel = this.handleSubmitCancel.bind(this);
    this.handleSubmitAddCancel = this.handleSubmitAddCancel.bind(this);
  }

  handleSubmitAdd(e) {
    const text = e.target.value;
    if (e.which === 13 && text.trim() !== '') {
      this.props.addTodo(text);
      this.setState({text: ''});
    }
  }

  handleSubmitEdit(e) {
    const text = e.target.value;
    if (e.which === 13 && text.trim() !== '') {
      const id = this.props.id;
      this.props.editTodo({id, text});
      this.setState({text: text});
    }
  }

  handleSubmitCancel() {
    const id = this.props.id;
    this.props.cancelTodo(id);
  }

  handleSubmitAddCancel() {
    const isAdding = this.props.isAdding;
    console.debug(isAdding, !isAdding);
    this.props.cancelAddTodo(!isAdding);
  }

  handleChangeAdd(e) {this.setState({ text: e.target.value });}
  handleChangeEdit(e) {this.setState({ text: e.target.value });}

  render() {
    const { canShowCaret, isEditing, isAdding, isAddingBtn, text } = this.props;
    console.debug(this.props);
    return (
      <div className={styles.wrapper}>
        {isEditing || isAdding && isAddingBtn
          ? <div className={isAdding ? styles.inputAdd : styles.inputEdit}>
              {isAdding && canShowCaret ?
                <span className={`${styles.caret} ${styles.green}`} /> :
                <span className={`${styles.caret} ${styles.red} ${styles.rotate}`} />
              }
              <input
                className={styles.text}
                type="text"
                placeholder="What needs to be done?"
                value={this.state.text}
                id={!isAdding ? this.state.id : null}
                onChange={isAdding ? this.handleChangeAdd : this.handleChangeEdit}
                onKeyDown={isAdding ? this.handleSubmitAdd : this.handleSubmitEdit}
              />
              {isEditing || isAdding
                ? <span className={`${styles.filterCancel} ${styles.current}`} onClick={isEditing?this.handleSubmitCancel:this.handleSubmitAddCancel}>Cancel</span>
                : null
              }
            </div>
          : null
        }
      </div>
    );
  }
}

Input.propTypes = {
  canShowCaret: React.PropTypes.bool.isRequired,
  addButtonClicked: React.PropTypes.bool,
  addTodo: React.PropTypes.func.isRequired,
  editToDo: React.PropTypes.func,
  cancelTodo: React.PropTypes.func,
  isEditing: React.PropTypes.bool,
  isAdding: React.PropTypes.bool
};

export default Input;
