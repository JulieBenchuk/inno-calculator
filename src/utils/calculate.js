import formatNumber from './formatNumber';

export default function calculate(prev, curr, operator) {
  let result;

  switch (operator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '×':
      result = prev * curr;
      break;
    case '÷':
      result = prev / curr;
      break;
    default:
      return;
  }

  return formatNumber(result);
}
