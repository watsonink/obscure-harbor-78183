import React, { Component, PropTypes } from 'react';
import styles from './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const text = e.target.value;
    if (e.which === 13 && text.trim() !== '') {
      this.props.addTodo(text);
      this.setState({ text: '' });
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div className={styles.input}>
        <span className={styles.icon} />
        <input
          className={styles.text}
          type="text"
          placeholder="What needs to be done?"
          value={this.state.text}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
        />
      </div>
    );
  }
}

Input.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Input;
