import ServiceKeyPressControls from '../../services/service-key-press-controls';
import { compose } from 'redux';

const keyPressControlEnhancer = ({ store }) => {
  const dispatchActions = compose(
    () => store.dispatch(), // action
  );

  ServiceKeyPressControls.observable.addListener('onkeypressescape', dispatchActions);
};

export default keyPressControlEnhancer;
