import { MAX_LENGTH, OVERFLOW_MESSAGE } from './constants';

export default function calculate(prev, curr, operator) {
  const previousValue = parseFloat(prev);
  const currentValue = parseFloat(curr);
  let result;

  switch (operator) {
    case '+':
      result = previousValue + currentValue;
      break;
    case '-':
      result = previousValue - currentValue;
      break;
    case '×':
      result = previousValue * currentValue;
      break;
    case '÷':
      result = previousValue / currentValue;
      break;
    default:
      return previousValue.toString();
  }

  const formattedResult = parseFloat(result.toPrecision(10))
    .toFixed(10)
    .replace(/\.?0+$/, '');

  if (formattedResult.length > MAX_LENGTH) {
    return OVERFLOW_MESSAGE;
  }

  return formattedResult;
}
