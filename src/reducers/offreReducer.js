import { GET_OFFRES, GET_OFFREBYID } from "../actions/types";

const intitialState = {
  offres: [],
  offre: {}
};

export default function(state = intitialState, action) {
  switch (action.type) {
    case GET_OFFRES:
      return {
        ...state,
        offres: action.payload
      };
    case GET_OFFREBYID:
      return {
        ...state,
        offre: action.payload
      };

    default:
      return state;
  }
}
