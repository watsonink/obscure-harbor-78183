import React, { PropTypes, Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { shouldComponentUpdate as shouldPureComponentUpdate } from 'react-addons-pure-render-mixin';

import Input from '../input/Input.container';
import styles from './AddButton.css';

class AddButton extends Component {
  constructor(props) {
    super(props);
    // this.state = { isAddingBtn: false };
    this.shouldComponentUpdate = shouldPureComponentUpdate.bind(this);
    this.handleChangeAdd = this.handleChangeAdd.bind(this);
  }

  handleChangeAdd(e) {
    const { isAdding } = this.props;
    this.props.isAddTodo(isAdding);
    this.setState({isAdding: true});
    // console.debug(this.props);
  }

  render() {
    const { isAdding } = this.props;
    // console.debug(this.props);
    return (
      <div className={styles.addContainer}>
      {isAdding
        ? <div><Input isAddingBtn={true} isAdding={isAdding}/>
          </div>
        : <div className={styles.addButton} onClick={this.handleChangeAdd}>Add</div>
      }
      </div>
    );
  }
}

AddButton.propTypes = {
  addButtonSubmitted: PropTypes.func,
  handleChangeAdd: PropTypes.func,
  isAdding: PropTypes.bool,
  isAddingBtn: PropTypes.bool,
  isAddTodo: PropTypes.func
};

export default AddButton;
