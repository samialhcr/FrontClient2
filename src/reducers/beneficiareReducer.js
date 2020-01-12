import { GET_BENEFICIARES, GET_BENEFICIARE } from "../actions/types";

const intitialState = {
  beneficiares: [],
  beneficiare: {}
};

export default function(state = intitialState, action) {
  switch (action.type) {
    case GET_BENEFICIARES:
      return {
        ...state,
        beneficiares: action.payload
      };
    case GET_BENEFICIARE:
      return {
        ...state,
        beneficiare: action.payload
      };

    default:
      return state;
  }
}
