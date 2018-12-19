import React from 'react';
import PropTypes from 'prop-types';

/* eslint max-len: 0 */
const Button = ({ onClick }) => {

  return (
    <button
      type="button"
      onClick={ onClick }
      className="alert__close  ui-btn  ui-btn--icon  ui-btn--lg"
      aria-label="Close">
      <svg version="1.1" viewBox="0 0 14 14" className="svg-inline--bi bi-cross bi-lg" aria-hidden="true">
        <path fillRule="evenodd" d="M7 7.378l3.363 3.363a.496.496 0 0 0 .703-.004c.19-.19.197-.51.004-.703L7.707 6.67l3.363-3.363a.496.496 0 0 0-.004-.703.502.502 0 0 0-.703-.004L7 5.964 3.637 2.6a.496.496 0 0 0-.703.004.502.502 0 0 0-.004.703L6.293 6.67 2.93 10.034a.496.496 0 0 0 .004.703c.19.19.51.197.703.004L7 7.378z" />
      </svg>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
