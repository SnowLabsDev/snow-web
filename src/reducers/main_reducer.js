import {
  LINK_PRESSED,
  FOCUS_INFO_USER,
  FOCUS_INFO_FUNCTION,
  FOCUS_INFO_UNKNOWN,
} from '../types';

const INIT_STATE = {
  contract: {},
  focusInfoView: false,
  focusedType: '',
  focusedObj: {
    name: ''
  }
};

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case LINK_PRESSED:
      return {...state, contract: action.payload};

    case FOCUS_INFO_USER:
      return {
        ...state,
        focusInfoView: true,
        focusedObj: action.payload.focusedObj,
        focusedType: action.payload.type
      };

    case FOCUS_INFO_FUNCTION:
      return {
        ...state,
        focusInfoView: true,
        focusedObj: action.payload.focusedObj,
        focusedType: action.payload.type
      };

    default:
      return state;
  }
};
