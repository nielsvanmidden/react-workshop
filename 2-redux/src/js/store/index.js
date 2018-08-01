import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import middleware from './middleware';

export default class Store {
  constructor(initialState = {}) {
    return createStore(
      reducers,
      initialState,
      applyMiddleware(...middleware()),
    );
  }
}
