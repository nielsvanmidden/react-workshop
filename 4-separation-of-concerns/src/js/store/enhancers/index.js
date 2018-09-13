import keyPressControlEnhancer from './enhancer-global-controls';

export default () => createStore => (...args) => {
  const store = createStore(...args);

  if (typeof window !== 'undefined') {
    // adds event listener
    // that dispatches an action when breakpoints changes
    viewportEnhancer({ store, calculateInitialState });
    // Adds keydown event listener
    // that dispatches actions on global key events
    keyPressControlEnhancer({ store });
  }

  return store;
};
