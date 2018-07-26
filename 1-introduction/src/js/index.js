import React from 'react';
import PropTypes from 'prop-types';
import Toast from './components/toast';
import Alert from './components/alert';

class Toaster extends React.Component {
  state = { data: this.props.data };

  onDismissToast = (uiId) => {
    this.setState(({ data }) => ({ data: data.filter((item) => item.uiId !== uiId) }));
  }

  render() {
    return (
      <div className="toast toast--bottom">
        { this.state.data.map((item) => (
          <Toast key={ item.uiId }>
            <Alert { ...item } onClick={ this.onDismissToast } />
          </Toast>
        ))}
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
