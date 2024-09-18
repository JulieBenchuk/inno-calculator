import '../styles/calculator.css';
import calculate from '../utils/calculate';
import countPercent from '../utils/countPercent';
import validateResult from '../utils/validateResult';
import { MAX_LENGTH } from '../constants/constants';

const display = document.querySelector('.display');
const keys = document.querySelector('.keys');

let currentValue = '0';
let previousValue = '';
let operator = '';

function handleOperation(buttonText) {
  if (previousValue && operator) {
    const result = calculate(previousValue, currentValue, operator);
    currentValue = result.message;
  }

  operator = buttonText;
  previousValue = currentValue;
  currentValue = '0';
}

function handlePlusMinus() {
  if (currentValue === '0') return;
  currentValue = currentValue.startsWith('-')
    ? currentValue.slice(1)
    : `-${currentValue}`;
}

function handleEquals() {
  if (previousValue && operator) {
    const result = calculate(previousValue, currentValue, operator);

    currentValue = result.message;
    resetPrevAndOperator();
  }
}

function handleNumberInput(buttonText) {
  if (buttonText === '.') {
    if (!currentValue.includes('.')) {
      currentValue += '.';
    }
  } else if (currentValue.length < MAX_LENGTH) {
    currentValue =
      currentValue === '0' ? buttonText : currentValue + buttonText;
  }
}

function handlePercentage() {
  currentValue = countPercent(previousValue, currentValue, operator);
  resetPrevAndOperator();
}

function resetCalculator() {
  currentValue = '0';
  resetPrevAndOperator();
}

function resetPrevAndOperator() {
  previousValue = '';
  operator = '';
}

keys.addEventListener('click', (event) => {
  const target = event.target;

  if (!target.matches('button')) return;

  const buttonText = target.textContent;

  if (!validateResult(currentValue).isValid) {
    resetCalculator();
  }

  switch (buttonText) {
    case 'AC':
      resetCalculator();
      break;
    case '+/-':
      handlePlusMinus();
      break;
    case '%':
      handlePercentage();
      break;
    case '+':
    case '-':
    case '×':
    case '÷':
      handleOperation(buttonText);
      break;
    case '=':
      handleEquals();
      break;
    default:
      handleNumberInput(buttonText);
  }

  display.textContent = currentValue;
});
