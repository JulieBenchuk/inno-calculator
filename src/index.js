import './styles.css';

const display = document.querySelector('.display');
const keys = document.querySelector('.keys');

const MAX_LENGTH = 14;

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
    currentValue = formatNumber(currentValue);
  } else if (['+', '-', '×', '÷'].includes(buttonText)) {
    if (previousValue && operator) {
      calculate();
    }
    operator = buttonText;
    previousValue = currentValue;
    currentValue = '0';
  } else if (buttonText === '=') {
    if (previousValue && operator) {
      calculate();
      operator = '';
      previousValue = '';
    }
  } else {
    if (currentValue === '0' && buttonText !== '.') {
      currentValue = buttonText;
    } else {
      if (currentValue.length < MAX_LENGTH) {
        currentValue += buttonText;
        if (currentValue.length > MAX_LENGTH) {
          currentValue = currentValue.slice(0, MAX_LENGTH);
        }
      }
    }
  }

  display.textContent = currentValue;
});

function calculate() {
  const prev = parseFloat(previousValue);
  const curr = parseFloat(currentValue);

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

  currentValue = formatNumber(result);
}

function formatNumber(num) {
  const formatted = num.toString().slice(0, MAX_LENGTH);

  return formatted.length > MAX_LENGTH
    ? formatted.slice(0, MAX_LENGTH)
    : formatted;
}
