// Inspiration from http://www.datchley.name/es6-eventemitter/

const isFunction = obj => typeof obj === 'function' || false;

export default class EventEmitter {
  constructor() {
    this.listeners = new Map();
  }

  addListener(label, callback) {
    if (!this.listeners.has(label)) {
      this.listeners.set(label, []);
    }
    this.listeners.get(label).push(callback);
  }

  removeListener(label, callback) {
    let index;
    const listeners = this.listeners.get(label);

    if (listeners && listeners.length) {
      index = listeners.reduce((i, listener, _index) => {
        let _i = i;
        return (isFunction(listener) && listener === callback) ? (_i = _index) : _i;
      }, -1);

      if (index > -1) {
        listeners.splice(index, 1);
        this.listeners.set(label, listeners);
        return true;
      }
    }

    return false;
  }

  emit(label, ...args) {
    const listeners = this.listeners.get(label);

    if (listeners && listeners.length) {
      listeners.forEach((listener) => {
        listener(...args);
      });

      return true;
    }

    return false;
  }
}
