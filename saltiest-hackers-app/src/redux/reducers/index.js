import { combineReducers } from 'redux';
import { userReducer } from './userReducer.js';
import { commentReducer } from './commentReducer.js';

export default combineReducers({
  userReducer,
  commentReducer
});
