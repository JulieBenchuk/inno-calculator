export default function formatResult(result) {
  return parseFloat(result.toPrecision(10))
    .toFixed(10)
    .replace(/\.?0+$/, '');
}
