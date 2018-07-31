import {
  AUTH_PHONE_CHANGED,
  AUTH_PIN_CHANGED,
  AUTH_SUCCESS,
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

export const authSuccess = (user_obj) => {
  return {
    type: AUTH_SUCCESS,
    payload: user_obj,
  };
};
