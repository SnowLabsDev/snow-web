import {
  LINK_PRESSED,
  FOCUS_INFO_FUNCTION,
  FOCUS_INFO_USER,
  FOCUS_INFO_UNKNOWN
} from '../types';

import axios from 'axios';

const TEST_OR_NAH = true;
const API_URL = TEST_OR_NAH ? "http://localhost:3050/api/" : "https://snowlabsdev-api.herokuapp.com/api/";

export const linkPressed = async (contract_id) => {
  let from_url = `${API_URL}contracts/id/${contract_id}`
  let res = await axios.get(from_url);

  return {
    type: LINK_PRESSED,
    payload: res.data,
  };
};

export const setIntoFocus = (focusedObj, type) => {
  if (focusedObj !== undefined) { //sometimes recieves undefined object?
    switch (type) {
      case 'user':
        return {
          type: FOCUS_INFO_USER,
          payload: {focusedObj, type}
        };
      case 'function':
        return {
          type: FOCUS_INFO_FUNCTION,
          payload: {focusedObj, type}
        };
      default:
        return {
          type: FOCUS_INFO_UNKNOWN,
          payload: {focusedObj, type}
        }
    }
  }

};
