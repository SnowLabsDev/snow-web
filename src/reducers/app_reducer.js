import {
  SCREEN_TO_FOCUS
} from '../types';

const INIT_STATE = {
  screenToFocus: 'activity'
};

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case SCREEN_TO_FOCUS:

      return {...state, screenToFocus: action.payload};

    default:
      return state;
  }
};
