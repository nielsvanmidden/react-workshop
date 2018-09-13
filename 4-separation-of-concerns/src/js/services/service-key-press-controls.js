import EventEmitter from '../observable/event-emitter';

class ServiceKeyPressControls {
  constructor() {
    this.observable = new EventEmitter();
    this.onKeyPress = this.onKeyPress.bind(this);

    if (document) {
      document.addEventListener('keydown', this.onKeyPress, true);
    }
  }

  onKeyPress(evt) {
    if (evt.key === 'Escape') {
      this.observable.emit('onkeypressescape');
    }
  }

  destroy() {
    window.removeEventListener('keydown', this.onKeyPress, true);
  }
}

export default new ServiceKeyPressControls();
