import {
  SCREEN_TO_FOCUS
} from '../types';

import axios from 'axios';

const TEST_OR_NAH = true;
const API_URL = TEST_OR_NAH ? "http://localhost:3050/api/" : "https://snowlabsdev-api.herokuapp.com/api/";

export const setScreenIntoFocus = (screenToFocus) => {
  console.log(screenToFocus);
  return {
    type: SCREEN_TO_FOCUS,
    payload: screenToFocus,
  };
};
