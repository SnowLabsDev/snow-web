import {
  SCREEN_TO_FOCUS,
  SEARCH_TO_FOCUS,
} from '../types';

const INIT_STATE = {
  screenToFocus: '',
  searchToFocus: false,
};

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case SCREEN_TO_FOCUS:

      return {...state, screenToFocus: action.payload};

    case SEARCH_TO_FOCUS:
      return {...state, searchToFocus: action.payload};
      
    default:
      return state;
  }
};
