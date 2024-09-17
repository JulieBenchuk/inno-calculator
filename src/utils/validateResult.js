import { ERROR, OVERFLOW_MESSAGE } from './constants';

export function validateResult(result) {
  if (result === OVERFLOW_MESSAGE || result === ERROR) {
    return {
      isValid: false,
      message: result,
    };
  } else if (
    result === 'NaN' ||
    result === 'Infinity' ||
    result === '-Infinity'
  ) {
    return {
      isValid: false,
      message: ERROR,
    };
  }
  return { isValid: true, message: result };
}
