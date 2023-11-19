const STEP = 10;

const findMinPrice = data => {
  if (data.length === 0) {
    return 0;
  }

  return data.reduce((minPrice, currentPrice) => {
    const currentNumber = parseInt(
      currentPrice['rentalPrice'].replace(/\D/g, '')
    );

    return currentNumber < minPrice ? currentNumber : minPrice;
  }, 100000);
};

const findMaxPrice = data => {
  if (data.length === 0) {
    return 0;
  }

  return data.reduce((maxPrice, currentPrice) => {
    const currentNumber = parseInt(
      currentPrice['rentalPrice'].replace(/\D/g, '')
    );

    return currentNumber > maxPrice ? currentNumber : maxPrice;
  }, 0);
};

const priceSelectOption = data => {
  const maxPrice = Math.ceil((findMaxPrice(data) - STEP) / STEP) * STEP + STEP;
  const minPrice = Math.ceil((findMinPrice(data) - STEP) / STEP) * STEP + STEP;

  const result = [];

  for (let i = minPrice; i <= maxPrice; i += 10) {
    result.push({ value: `${i}`, label: `${i}` });
  }

  return [{ label: 'To $' }, ...result];
};

export default priceSelectOption;
