import React from 'react';
import { Provider } from 'react-redux';

import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';

import Store from '../store';
import { setPristine } from '../store/actions';
import Toaster from '../components/toaster';
import data from '../__data__/index.json';

const notes = 'Awesome Bol.com Toaster in Redux';

const App = (<div><Toaster /></div>);

const store = new Store();
store.dispatch(setPristine({ data }));

if (window.addonsDefaultChannel) {
  storiesOf('Toaster in Redux', module)
    .addDecorator(story => (
      <Provider store={ store}>
        { story() }
      </Provider>))
    .add('default', withNotes(notes)(() => (
      App
    )));
}

export default App;
