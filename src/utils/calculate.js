import { MAX_LENGTH, OVERFLOW_MESSAGE } from './constants';
import { validateResult } from './validateResult';

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
    return { isValid: false, message: OVERFLOW_MESSAGE };
  } else return validateResult(formattedResult);
}
