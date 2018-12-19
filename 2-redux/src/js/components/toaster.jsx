import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onDismissToast } from '../store/actions';
import PropTypes from 'prop-types';
import Toast from './toast';
import Alert from './alert';

const Toaster = ({ toaster }) => (
  <div className="toast  toast--bottom">
    { toaster.data.map((item) => (
      <li />
    ))}
  </div>
);

/* eslint object-curly-newline: 0 */
Toaster.propTypes = {
  actions: PropTypes.shape({
    onDismissToast: PropTypes.func.isRequired,
  }).isRequired,
  toaster: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      uiId: PropTypes.string.isRequired,
    })).isRequired,
  }),
};

export default connect(
  ({ toaster }) => ({ // map state to props
    toaster,
  }),
  () => ({ // map dispatch to props

  }),
)(Toaster);

