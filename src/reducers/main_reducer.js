import {
  ACTIVE_CONTRACT_LINK_PRESSED,
  DRAFT_CONTRACT_LINK_PRESSED,
  FOCUS_INFO_USER,
  FOCUS_INFO_FUNCTION,
  FOCUS_INFO_UNKNOWN,
  CREATE_VIEW_CHANGED,
} from '../types';

const INIT_STATE = {
  contract: {},
  focusInfoView: false,
  focusContractView: false,
  focusCreateView: false,
  focusDraftView: false,
  focusedType: '',
  focusedObj: {
    name: ''
  }
};

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIVE_CONTRACT_LINK_PRESSED:
      return {
        ...state,
        focusCreateView: false,
        focusInfoView: false,
        focusDraftView: false,
        focusContractView: true,
        contract: action.payload
      };

    case DRAFT_CONTRACT_LINK_PRESSED:
      return {
        ...state,
        focusCreateView: false,
        focusInfoView: false,
        focusContractView: false,
        focusDraftView: true,
        contract: action.payload
      };

    case CREATE_VIEW_CHANGED:
      return {
        ...state,
        focusContractView: false,
        focusInfoView: false,
        focusDraftView: false,
        focusCreateView: action.payload,
      }

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
