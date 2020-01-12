import { GET_COMPTES, GET_COMPTEBYID } from "../actions/types";

const intitialState = {
  comptes: [],
  compte: {}
};

export default function(state = intitialState, action) {
  switch (action.type) {
    case GET_COMPTES:
      return {
        ...state,
        comptes: action.payload
      };
    case GET_COMPTEBYID:
      return {
        ...state,
        compte: action.payload
      };

    default:
      return state;
  }
}
