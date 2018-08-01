import React from 'react';
import PropTypes from 'prop-types';

const Toast = ({ children }) => (<div>{ children }</div>);

Toast.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Toast;
