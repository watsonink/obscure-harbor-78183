import React, { PropTypes, Component } from 'react';
import { shouldComponentUpdate as shouldPureComponentUpdate } from 'react-addons-pure-render-mixin';

import styles from './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = shouldPureComponentUpdate.bind(this);
  }

  render() {
    const {
      showFooter,
      numIncomplete,
      numTotal,
      numInDeleted,
      canClearCompleted,
      clearCompleted,
      showAll,
      showActive,
      showCompleted,
      filterAll,
      filterActive,
      filterCompleted
    } = this.props;

    const numIncompleteText = numIncomplete === 1 ? 'item left | ' : 'items left | ';
    const numTotalText = numTotal === 1 ? 'item total' : 'items total';
    const numDeletedText = numInDeleted < 2 ? 'item deleted' : 'items deleted';
    const numDeletedCount = numInDeleted > 0 ? true : false;

    return showFooter ?
      <div className={styles.footer}>
        <span className={styles.remaining}>

          {`${numIncomplete.toString()} ${numIncompleteText}`}
          {`${numTotal.toString()} ${numTotalText}`}
          {numDeletedCount > 0 ? `${' | '} ${numInDeleted.toString()} ${numDeletedText}` : null}

        </span>
        <div className={styles.filters}>
          <span className={showAll ? `${styles.filter} ${styles.current}` : styles.filter} onClick={filterAll}>All</span>
          <span className={showActive ? `${styles.filter} ${styles.current}` : styles.filter} onClick={filterActive}>Active</span>
          <span className={showCompleted ? `${styles.filter} ${styles.current}` : styles.filter} onClick={filterCompleted}>Completed</span>
        </div>
        {canClearCompleted
          ? <span className={styles.clear} onClick={clearCompleted}>Clear completed</span>
          : null
        }
      </div> :
      null;
  }
}

Footer.propTypes = {
  showFooter: React.PropTypes.bool.isRequired,
  numIncomplete: React.PropTypes.number.isRequired,
  numTotal: React.PropTypes.number.isRequired,
  numInDeleted: React.PropTypes.number.isRequired,
  canClearCompleted: React.PropTypes.bool.isRequired,
  clearCompleted: React.PropTypes.func.isRequired,
  showAll: React.PropTypes.bool.isRequired,
  showActive: React.PropTypes.bool.isRequired,
  showCompleted: React.PropTypes.bool.isRequired,
  filterAll: React.PropTypes.func.isRequired,
  filterActive: React.PropTypes.func.isRequired,
  filterCompleted: React.PropTypes.func.isRequired
};

export default Footer;
