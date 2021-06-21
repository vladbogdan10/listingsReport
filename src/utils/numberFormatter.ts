export const priceFormatter = (n: number) => {
  const roundedPrice = Math.floor(n);
  const priceString = toNumberString(roundedPrice);
  return `€ ${priceString},-`;
};

export const toNumberString = (n: number) => {
  return new Intl.NumberFormat('de-DE').format(n);
};
