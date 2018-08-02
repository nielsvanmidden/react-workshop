import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import middleware from './middleware';

const composeEnhancers
  = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose;

export default class Store {
  constructor(initialState = {}) {
    return createStore(
      reducers,
      initialState,
      composeEnhancers(
        applyMiddleware(...middleware()),
      ),
    );
  }
}
