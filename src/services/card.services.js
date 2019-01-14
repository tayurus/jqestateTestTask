import { api } from "./../constants";

async function getCards(offset = 0) {
  const data = await fetch(api + "/v1/properties/country?pagination[offset]=" + offset);
  return data.json();
}

export const cardsService = {
  getCards
};
