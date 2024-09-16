import { MAX_LENGTH } from './constants';

export default function formatNumber(result) {
  let resultString = String(result);

  if (resultString.length > MAX_LENGTH) {
    resultString = resultString.slice(0, MAX_LENGTH);
  }

  return resultString;
}
