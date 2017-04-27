import * as types from './types';

export function switchTabs(newTab) {
  return {
    type: types.SWITCH_TAB,
    payload: newTab
  }
}
