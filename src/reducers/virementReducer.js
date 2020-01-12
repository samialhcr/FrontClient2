import {
  GET_VIREMENTS,
  GET_VIREMENTSBYID,
  GET_TYPEVIREMENT
} from "../actions/types";

const intitialState = {
  virements: [],
  virement: {},
  type: []
};

export default function(state = intitialState, action) {
  switch (action.type) {
    case GET_VIREMENTS:
      return {
        ...state,
        virements: action.payload
      };

    case GET_VIREMENTSBYID:
      return {
        ...state,
        virement: action.payload
      };
    case GET_TYPEVIREMENT:
      return {
        ...state,
        type: action.payload
      };
    default:
      return state;
  }
}
