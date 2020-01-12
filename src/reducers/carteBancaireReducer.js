import { GET_CARTESBANCAIRES, GET_CARTEBANCAIREBYID } from "../actions/types";

const intitialState = {
  cartesbancaires: [],
  cartebancaire: {}
};

export default function(state = intitialState, action) {
  switch (action.type) {
    case GET_CARTESBANCAIRES:
      return {
        ...state,
        cartesbancaires: action.payload
      };
    case GET_CARTEBANCAIREBYID:
      return {
        ...state,
        cartebancaire: action.payload
      };

    default:
      return state;
  }
}
