import './styles/styles.css';
import calculate from './utils/calculate';
import formatNumber from './utils/formatNumber';
import { MAX_LENGTH } from './utils/constants';

const display = document.querySelector('.display');
const keys = document.querySelector('.keys');

let currentValue = '0';
let previousValue = '';
let operator = '';

keys.addEventListener('click', (event) => {
  const target = event.target;

  if (!target.matches('button')) return;

  const buttonText = target.textContent;

  if (buttonText === 'AC') {
    currentValue = '0';
    previousValue = '';
    operator = '';
  } else if (buttonText === '+/-') {
    currentValue = currentValue.startsWith('-')
      ? currentValue.slice(1)
      : `-${currentValue}`;
  } else if (buttonText === '%') {
    currentValue = String(parseFloat(currentValue) / 100);
  } else if (['+', '-', '×', '÷'].includes(buttonText)) {
    if (previousValue && operator) {
      currentValue = calculate(
        parseFloat(previousValue),
        parseFloat(currentValue),
        operator,
      );
    }
    operator = buttonText;
    previousValue = currentValue;
    currentValue = '0';
  } else if (buttonText === '=') {
    if (previousValue && operator) {
      currentValue = calculate(
        parseFloat(previousValue),
        parseFloat(currentValue),
        operator,
      );
      currentValue = formatNumber(currentValue);
      operator = '';
      previousValue = '';
    }
  } else {
    if (currentValue === '0' && buttonText !== '.') {
      currentValue = buttonText;
    } else if (currentValue.length < MAX_LENGTH) {
      currentValue += buttonText;
    }
  }

  display.textContent = currentValue;
});
