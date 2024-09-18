import { MAX_LENGTH, OVERFLOW_MESSAGE } from '../constants/constants';
import validateResult from './validateResult';
import formatResult from './formatResult';

export default function countPercent(previousValue, currentValue, operator) {
  let result;

  if (previousValue && operator) {
    const previousValueParsed = parseFloat(previousValue);
    const currentValueParsed = parseFloat(currentValue) / 100;

    switch (operator) {
      case '+':
        result = previousValueParsed + previousValueParsed * currentValueParsed;
        break;
      case '-':
        result = previousValueParsed - previousValueParsed * currentValueParsed;
        break;
      case '×':
        result = previousValueParsed * currentValueParsed;
        break;
      case '÷':
        result = previousValueParsed / currentValueParsed;
        break;
      default:
        result = currentValueParsed;
    }
  } else {
    result = parseFloat(currentValue) / 100;
  }

  const formattedResult = formatResult(result);

  if (formattedResult.length > MAX_LENGTH) {
    return OVERFLOW_MESSAGE;
  }

  return validateResult(formattedResult).message;
}
