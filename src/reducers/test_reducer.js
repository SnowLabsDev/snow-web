import {
  AUTH_PHONE_CHANGED,
  AUTH_PIN_CHANGED,
} from '../types';

const INIT_STATE = {
  auth_phone: '',
  auth_pin: '',
};

export default function(state = INIT_STATE, action) {
  switch (action.type) {

    case AUTH_PHONE_CHANGED:
      // might need to be an array???
      return {...state, auth_phone: action.payload};

    case AUTH_PIN_CHANGED:
      return {...state, auth_pin: action.payload};

    default:
      return state;
  }
};
