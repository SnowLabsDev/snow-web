import {
  AUTH_PHONE_CHANGED,
  AUTH_PIN_CHANGED,
  AUTH_SUCCESS,
  AUTH_FAILURE,
} from '../types';

const INIT_STATE = {
  auth_phone: '',
  auth_pin: '',
  auth_status: false,
  user_info: {},
  error_message: '',
};

export default function(state = INIT_STATE, action) {
  switch (action.type) {

    case AUTH_PHONE_CHANGED:
      // might need to be an array???
      return {...state, auth_phone: action.payload};

    case AUTH_PIN_CHANGED:
      return {...state, auth_pin: action.payload};

    case AUTH_SUCCESS:
      console.log('success');
      return {...state, auth_status: true, user_info: action.payload}

    case AUTH_FAILURE:
      console.log('failure');
      return {...state, auth_state: false, error_message: 'yah done fucked up homie'}

    default:
      return state;
  }
};
