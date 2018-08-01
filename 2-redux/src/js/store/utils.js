const identity = x => x;
const handler = (handlers, actionType) => handlers[actionType] || identity;
export const createReducer = (initialState, handlers) =>
  (state = initialState, action) => handler(handlers, action.type)(state, action);