import React from 'react';
import PropTypes from 'prop-types';
import Toast from './components/toast';
import Alert from './components/alert';

class Toaster extends React.Component {
  constructor(props) {
    super(props);

    this.onDismissToast = this.onDismissToast.bind(this);

    this.state = {
      data: this.props.data,
    };
  }

  onDismissToast() {
    this.setState();
  }

  render() {
    return (
      <div className="toast toast--bottom">
        Toasts to render
      </div>
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

export default Toaster;
