import { cardConstants } from "./../constants";
import { cardsService } from "./../services";

const getCards = (offset, paginationIndex) => ({ type: cardConstants.GET_CARDS_REQUEST, offset, paginationIndex });

export const cardsActions = {
  getCards
};
