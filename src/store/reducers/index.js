import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import CommonReducer from './commonReducer';

export default combineReducers({
  user: UserReducer,
  common: CommonReducer,
});