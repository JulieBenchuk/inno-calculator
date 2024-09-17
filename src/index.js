import './styles/styles.css';
import calculate from './utils/calculate';
import { MAX_LENGTH, NAN_MESSAGE, OVERFLOW_MESSAGE } from './utils/constants';

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
      const result = calculate(previousValue, currentValue, operator);
      if (result === OVERFLOW_MESSAGE || result === 'NaN') {
        display.textContent =
          result === OVERFLOW_MESSAGE ? OVERFLOW_MESSAGE : NAN_MESSAGE;
        currentValue = '0';
        previousValue = '';
        operator = '';
        return;
      }
      currentValue = result;
    }
    operator = buttonText;
    previousValue = currentValue;
    currentValue = '0';
  } else if (buttonText === '=') {
    if (previousValue && operator) {
      const result = calculate(previousValue, currentValue, operator);
      if (result === OVERFLOW_MESSAGE || result === 'NaN') {
        display.textContent =
          result === OVERFLOW_MESSAGE ? OVERFLOW_MESSAGE : NAN_MESSAGE;
        currentValue = '0';
        previousValue = '';
        operator = '';
        return;
      }
      currentValue = result;
      previousValue = result;
      operator = '';
    }
  } else {
    if (buttonText === '.') {
      if (!currentValue.includes('.')) {
        currentValue += '.';
      }
    } else if (currentValue.length < MAX_LENGTH) {
      currentValue =
        currentValue === '0' ? buttonText : currentValue + buttonText;
    }
  }

  display.textContent = currentValue;
});
