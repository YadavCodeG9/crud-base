import { COUNTER_CHANGE } from "../constants";

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_CHANGE:
      return {
        ...state,
        count: action.payload,
      };
      break;
    default:
      return state;
      break;
  }
};

export default countReducer;
