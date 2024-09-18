import { MAX_LENGTH, OVERFLOW_MESSAGE } from '../constants/constants';
import validateResult from './validateResult';
import formatResult from './formatResult';

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

  const formattedResult = formatResult(result);

  if (formattedResult.length > MAX_LENGTH) {
    return { isValid: false, message: OVERFLOW_MESSAGE };
  } else return validateResult(formattedResult);
}
