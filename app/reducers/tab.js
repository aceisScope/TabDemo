import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
  currentTab: 'home'
};

export const switchTabs = createReducer('home', {
  [types.SWITCH_TAB](state, action) {
    return action.payload;
  },
});
