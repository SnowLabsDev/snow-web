import {
  AUTH_PHONE_CHANGED,
  AUTH_PIN_CHANGED,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  LINK_PRESSED,
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

  const res = await axios.get(from_url);
  console.log(res.data);

  if (res.hasOwnProperty('err')) { // bad error handling
    console.log('fail');
    return {
      type: AUTH_FAILURE,
      payload: res.err,
    };
  }
  else {
    // successful login, change to app
    history.push(
      {
        pathname: `users/id/${res.data._id}`,
        state: { user_info: res.data }
      }
    );

    return {
      type: AUTH_SUCCESS,
      payload: res.data,
    };
  }
};


export const linkPressed = async ({user_id, ctr_id}) => {
  console.log(user_id);
  console.log(ctr_id);
  let from_url = `${API_URL}contracts/id/${ctr_id}`
  let res = await axios.get(from_url);
  console.log(res.data);

  history.push(
    {
      pathname: `/test/users/id/${user_id}/contracts/id/${ctr_id}`
    }
  )

  return {
    type: LINK_PRESSED,
    payload: res.data,
  };
};
