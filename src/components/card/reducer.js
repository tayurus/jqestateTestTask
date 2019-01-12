import { cardConstants } from "./constants.js";

const initialState = { cards: [] };
export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case cardConstants.GET_CARDS_REQUEST:
      return state;

    case cardConstants.GET_CARDS_FAILURE:
      return state;

    case cardConstants.GET_CARDS_SUCCESS:
      return { ...state, cards: action.cards };

    default:
      return state;
  }
  return state;
};
