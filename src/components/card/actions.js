import { cardConstants } from "./constants";

const getCards = () => {
  return { type: cardConstants.GET_CARDS_REQUEST };
};

export const cardsActions = {
  getCards
};
