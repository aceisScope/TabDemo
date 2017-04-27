import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export default function switchTabs(state = 'home', action) {
  switch (action.type) {
    case types.SWITCH_TAB:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
