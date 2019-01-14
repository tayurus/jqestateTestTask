export const detectCurrency = currency => {
  let table = {
    RUB: "₽",
    USD: "$",
    EUR: "€"
  };

  return table[currency];
};
