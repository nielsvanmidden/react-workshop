import { createReducer } from '../utils';
import {
  SET_PRISTINE,
  DISMISS_TOAST,
  DISMISS_TOAST_LAST_ITEM,
} from '../actions';

export const removeLastArrayItem = (array = []) =>
  array.filter((item, index) => index !== (array.length - 1));

/* eslint object-curly-newline: 0 */
const setPristine = (state, { payload: { data } } ) => ({
  data,
});

const removeArrayItemById = (array, uiId) => array.filter((item) => item.uiId !== uiId);

const onDismissToast = (state, { uiId }) => {
  const data = removeArrayItemById(state.data, uiId);
  return Object.assign({}, state, { data });
};

const onDismissToastLastItem = (state) => {
  const data = removeLastArrayItem(state.data);
  return Object.assign({}, state, { data });
};

export default createReducer({ data: [] }, {
  [SET_PRISTINE]: setPristine,
  [DISMISS_TOAST]: onDismissToast,
  [DISMISS_TOAST_LAST_ITEM]: onDismissToastLastItem,
});