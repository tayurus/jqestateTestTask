export const cardsService = {
  getCards
};

async function getCards(offset = 0) {
  const data = await fetch("https://api.jqestate.ru/v1/properties/country?pagination[offset]=" + offset);
  return data.json();
}
