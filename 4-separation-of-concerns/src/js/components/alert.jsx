import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const Alert = ({ description, onClick, title, type, uiId }) => (
  <div className={ `alert  alert--toast alert--${type}` } role="alert">
    <h3 className="alert__title">{ title }</h3>
    <div className="c-media  c-media--center">
      <div className="c-media__body">{ description }</div>
    </div>
    <Button onClick={ onClick } uiId={ uiId } />
  </div>
);

Alert.propTypes = {
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  uiId: PropTypes.string.isRequired,
};

export default Alert;
