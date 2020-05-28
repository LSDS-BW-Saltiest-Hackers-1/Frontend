import { combineReducers } from 'redux';
import { navbarReducer } from './navbarReducer.js';
import { userReducer } from './userReducer.js';
import { commentReducer } from './commentReducer.js';

export default combineReducers({
  navbarReducer,
  userReducer,
  commentReducer
});
