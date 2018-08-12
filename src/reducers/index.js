import { combineReducers } from 'redux';
import AuthReducer from './auth_reducer';
import MainReducer from './main_reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  main: MainReducer,
});

export default rootReducer;
