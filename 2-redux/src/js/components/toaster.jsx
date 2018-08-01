import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toast from './toast';
import Alert from './alert';

/* eslint object-curly-newline: 0 */
class Toaster extends React.Component {
  render() {
    return (
      <div className="toast toast--bottom" />
    );
  }
}

Toaster.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    uiId: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(
  ({ toaster }) => ({ // map state to props
    toaster,
  }),
  dispatch => ({ // map dispatch to props

  }),
)(Toaster);

