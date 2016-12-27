import { connect } from 'react-redux';
import { whatPage, whatPageSelected } from './navigationActions';

import Navigation from './Navigation.view';

const mapStateToProps = state => ({
  showNavBar: true,
  whatPage: state.get('page')
});

const mapDispatchToProps = dispatch => ({
  whatPageSelected: id => {
    dispatch(whatPageSelected(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
