import {
  AUTH_PHONE_CHANGED,
  AUTH_PIN_CHANGED,
  AUTH_SUCCESS,
} from '../types';

const INIT_STATE = {
  auth_phone: '',
  auth_pin: '',
  auth_status: false,
  user_info: { // added to make render.  Probably want to handle render side, but too tired to find a real solution right now
    ownContracts: [],
    inContracts: [],
    _id: "",
    name: "",
    phone: "",
    pin: "",
    __v: 0,
    solidityContract: {
        constructorArguments: [],
        functions: [],
     _id: '',
     type: '',
     description: '',
     __v: 0 },
  },
};

export default function(state = INIT_STATE, action) {
  switch (action.type) {

    case AUTH_PHONE_CHANGED:
      return {...state, auth_phone: action.payload};

    case AUTH_PIN_CHANGED:
      return {...state, auth_pin: action.payload};

    case AUTH_SUCCESS:
      return {...state, auth_status: true, user_info: action.payload};

    default:
      return state;
  }
};
