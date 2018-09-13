import ServiceKeyPressControls from '../../services/service-key-press-controls';
import { compose } from 'redux';
import { onDismissToastLastItem } from '../actions';

const keyPressControlEnhancer = ({ store }) => {
  const dispatchActions = compose(
    () => store.dispatch(onDismissToastLastItem()), // action
  );

  ServiceKeyPressControls.observable.addListener('onkeypressescape', dispatchActions);
};

export default keyPressControlEnhancer;
