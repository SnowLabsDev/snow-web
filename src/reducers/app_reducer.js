import {
  SCREEN_TO_FOCUS,
  SEARCH_TO_FOCUS,
  SEARCH_TERM_CHANGED,
  DROPDOWN_IN_FOCUS,
} from '../types';

const INIT_STATE = {
  screenToFocus: '',
  searchToFocus: false,
  searchTerm: '',
  dropdownType: '',
  dropdownToFocus: false,
};

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case SCREEN_TO_FOCUS:

      return {...state, screenToFocus: action.payload};

    case SEARCH_TO_FOCUS:
      // if we don't control whether dropdownType gets updated, then the event
      // listener in the searchbar also closes other open components that
      // reference dropdownType

      let nextState;

      if (action.payload) {
        nextState = {
          searchToFocus: action.payload,
          searchTerm: '',
          dropdownType: 'Search',
          dropdownToFocus: false,
        };
      } else {
        nextState = {
          searchToFocus: action.payload,
          searchTerm: '',
          dropdownType: '',
        };
      }
      return {
        ...state,
        ...nextState
      };

    case SEARCH_TERM_CHANGED:
      return {...state, searchTerm: action.payload};

    case DROPDOWN_IN_FOCUS:
      return {
        ...state,
        dropdownType: action.payload.type,
        dropdownToFocus: action.payload.bool,
        searchToFocus: false,
      };

    default:
      return state;
  }
};
