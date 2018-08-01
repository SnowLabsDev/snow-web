import {
  AUTH_PHONE_CHANGED,
  AUTH_PIN_CHANGED,
  AUTH_SUCCESS,
  AUTH_FAILURE,
} from '../types';
import axios from 'axios';

import history from '../history';

const TEST_OR_NAH = true;
const API_URL = TEST_OR_NAH ? "http://localhost:3050/api/" : "https://snowlabsdev-api.herokuapp.com/api/";

export const authPhoneChanged = (text) => {
  console.log(text);
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

export const trySignIn = async ({ auth_phone, auth_pin }) => {
  const from_url = API_URL + "users/auth/" + auth_phone + "/"+ auth_pin;
  console.log(from_url);

  /*
  try {
    const user = await axios.get(from_url);
    console.log(user.data);

    return {
      type: AUTH_SUCCESS,
      payload: user.data,
    };
  } catch (err) {
    console.log(err);
  }
  */


  const res = await axios.get(from_url);
  console.log(res.data);

  if (res.hasOwnProperty('err')) { // bad error handling
    console.log('fail');
  } else {

    return {
      type: AUTH_FAILURE,
      payload: res.data,
    };
  }

};
