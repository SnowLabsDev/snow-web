import {
  ACTIVE_CONTRACT_LINK_PRESSED,
  DRAFT_CONTRACT_LINK_PRESSED,
  FOCUS_INFO_FUNCTION,
  FOCUS_INFO_USER,
  FOCUS_INFO_UNKNOWN,
  CREATE_VIEW_CHANGED,
  DRAFT_VIEW_CHANGED,
} from '../types';

import axios from 'axios';

const TEST_OR_NAH = true;
const API_URL = TEST_OR_NAH ? "http://localhost:3050/api/" : "https://snowlabsdev-api.herokuapp.com/api/";

export const contractPressed = async (contract_id, type) => {
  let from_url = `${API_URL}contracts/id/${contract_id}`
  let res = await axios.get(from_url);

  switch (type) {
    case 'active':
      return {
        type: ACTIVE_CONTRACT_LINK_PRESSED,
        payload: res.data,
      };

    case 'inactive': // returning the same thing for now since we just want to open ContractView
      return {
        type: ACTIVE_CONTRACT_LINK_PRESSED,
        payload: res.data,
      };

    case 'draft':
      console.log('firing draft');
      return {
        type: DRAFT_CONTRACT_LINK_PRESSED,
        payload: res.data,
      };
  }
};

export const draftContractPressed = async (contract_id) => {
  console.log(contract_id);
  let from_url = `${API_URL}contracts/id/${contract_id}` // need draft url
  let res = await axios.get(from_url);

  return {
    type: DRAFT_CONTRACT_LINK_PRESSED,
    payload: res.data
  }
}

export const changeCreateViewStatus = (openOrClose) => {
  if (openOrClose === 'open') {
    return {
      type: CREATE_VIEW_CHANGED,
      payload: true
    };
  } else {
    return {
      type: CREATE_VIEW_CHANGED,
      payload: false
    }
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
