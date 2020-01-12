import { GET_OPERATIONS, GET_OPERATIONBYID } from "../actions/types";

const intitialState = {
  operations: [],
  operation: {}
};

export default function(state = intitialState, action) {
  switch (action.type) {
    case GET_OPERATIONS:
      return {
        ...state,
        operations: action.payload
      };

    case GET_OPERATIONBYID:
      return {
        ...state,
        operation: action.payload
      };

    default:
      return state;
  }
}
