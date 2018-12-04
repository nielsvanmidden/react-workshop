/* eslint global-require : 0 */
import { configure } from '@storybook/react';
import './checkout-2018.min.css';

const initialize = (req) => {
  window.addonsDefaultChannel = require('@storybook/addons').default.channel;

  const loadStories = () => {
    require('../1-introduction/src/js/__stories__/index.stories');
    // require('../2-redux/src/js/__stories__/index.stories');
    // require('../4-separation-of-concerns/src/js/__stories__/index.stories');
  };

  configure(loadStories, module);
};

initialize();