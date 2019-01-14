import { cardConstants } from "./../constants";
import { cardsService } from "./../services";

const getCards = (offset, paginationIndex) => {
  return dispatch => {
    dispatch({ type: cardConstants.GET_CARDS_REQUEST });

    cardsService
      .getCards(offset)
      .then(res => {
        if (typeof res.errors !== "undefined") {
          dispatch({ type: cardConstants.GET_CARDS_FAILURE });
        } else {
          dispatch({
            type: cardConstants.GET_CARDS_SUCCESS,
            cards: res.items,
            total: res.pagination.total,
            limit: res.pagination.limit,
            paginationIndex: paginationIndex
          });
        }
      })
      .catch(err => dispatch({ type: cardConstants.GET_CARDS_FAILURE }));
  };
};

export const cardsActions = {
  getCards
};
