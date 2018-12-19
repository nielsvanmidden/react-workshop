import React from "react";

import Toaster from "../components/toaster";
import Store from "../store";
import { setPristine } from "../store/actions";
import data from "../__data__";

const store = new Store();
store.dispatch(setPristine({ data }));

const App = (<div><Toaster store={store}/></div>);

describe('<App />', () => {
  describe('Snaphot', () => {
    test('should match default', () => {
      expect(global.renderToJSON(App)).toMatchSnapshot();
    });
  });
});
