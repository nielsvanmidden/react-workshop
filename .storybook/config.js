/* eslint global-require : 0 */
import { configure } from '@storybook/react';
import './checkout-2018.min.css';

const initialize = (req) => {
  window.addonsDefaultChannel = require('@storybook/addons').default.channel;

  const loadStories = () => {
    req.keys().forEach((filename) => req(filename));
  };

  configure(loadStories, module);
};

initialize(require.context('../1-introduction/src/', true, /\.stories\.js$/));
