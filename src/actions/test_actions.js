import {
  AUTH_PHONE_CHANGED,
  AUTH_PIN_CHANGED,
} from '../types';

export const authPhoneChanged = (text) => {
  return {
    type: AUTH_PHONE_CHANGED,
    payload: text,
  };
};

export const authPinChanged = (text) => {
  return {
    type: AUTH_PIN_CHANGED,
    payload: text,
  };
};
