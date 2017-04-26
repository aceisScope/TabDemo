import { combineReducers } from 'redux';
import * as tabReducer from './tab';

export default combineReducers(Object.assign(
  tabReducer,
));
