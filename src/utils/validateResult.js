import { ERROR, OVERFLOW_MESSAGE } from '../constants/constants';

export default function validateResult(result) {
  const invalidResults = ['NaN', 'Infinity', '-Infinity'];

  if (result === OVERFLOW_MESSAGE || result === ERROR) {
    return {
      isValid: false,
      message: result,
    };
  }

  if (invalidResults.includes(result)) {
    return {
      isValid: false,
      message: ERROR,
    };
  }

  return { isValid: true, message: result };
}
