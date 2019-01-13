import { cardConstants } from "./constants.js";

const initialState = { cards: [], paginationIndex: 1 };
export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case cardConstants.GET_CARDS_REQUEST:
      return { ...state, loading: true, error: false };

    case cardConstants.GET_CARDS_FAILURE:
      return { ...state, loading: false, error: true };

    case cardConstants.GET_CARDS_SUCCESS:
      return {
        ...state,
        cards: action.cards,
        total: action.total,
        limit: action.limit,
        paginationIndex: action.paginationIndex,
        loading: false,
        error: false
      };

    default:
      return state;
  }
  return state;
};
