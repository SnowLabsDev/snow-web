import {
  SCREEN_TO_FOCUS,
  SEARCH_TO_FOCUS,
  DROPDOWN_IN_FOCUS,
  SEARCH_TERM_CHANGED,
} from '../types';

import axios from 'axios';

const TEST_OR_NAH = true;
const API_URL = TEST_OR_NAH ? "http://localhost:3050/api/" : "https://snowlabsdev-api.herokuapp.com/api/";

export const setScreenIntoFocus = (screenToFocus) => {

  return {
    type: SCREEN_TO_FOCUS,
    payload: screenToFocus,
  };
};

export const setSearchbarIntoFocus = (searchToFocus) => {

  return {
    type: SEARCH_TO_FOCUS,
    payload: searchToFocus, //allows us to toggle with the same action creator
  };
};

export const updateSearchTerm = (searchTerm) => {
  return {
    type: SEARCH_TERM_CHANGED,
    payload: searchTerm,
  };
};

export const setDropdownMenuIntoFocus = (dropdownType, bool) => {
  return {
    type: DROPDOWN_IN_FOCUS,
    payload: {type: dropdownType, bool: bool}
  };
};
