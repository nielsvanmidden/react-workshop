import React from 'react';

import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';

import Toaster from '../index';
import data from '../__data__/index.json';

const notes = 'Awesome Bol.com Toaster';

const App = (<div><Toaster data={ data } /></div>);

if (window.addonsDefaultChannel) {
    storiesOf('Toaster', module)
        .add('default', withNotes(notes)(() => (
            App
        )));
}

export default App;
