/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './styles.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\nvar display = document.querySelector('.display');\nvar keys = document.querySelector('.keys');\nvar currentValue = '0';\nvar previousValue = '';\nvar operator = '';\nkeys.addEventListener('click', function (event) {\n  console.log('click');\n  var target = event.target;\n  if (!target.matches('button')) return;\n  var buttonText = target.textContent;\n  if (buttonText === 'AC') {\n    // Очистка дисплея\n    currentValue = '0';\n    previousValue = '';\n    operator = '';\n  } else if (buttonText === '+/-') {\n    // Смена знака числа\n    currentValue = currentValue.startsWith('-') ? currentValue.slice(1) : \"-\".concat(currentValue);\n  } else if (buttonText === '%') {\n    // Процент\n    currentValue = String(parseFloat(currentValue) / 100);\n  } else if (['+', '-', '×', '÷'].includes(buttonText)) {\n    // Установка оператора\n    if (previousValue && operator) {\n      calculate();\n    }\n    operator = buttonText;\n    previousValue = currentValue;\n    currentValue = '0';\n  } else if (buttonText === '=') {\n    // Вычисление результата\n    if (previousValue && operator) {\n      calculate();\n      operator = '';\n      previousValue = '';\n    }\n  } else {\n    // Обработка чисел и точки\n    if (currentValue === '0' && buttonText !== '.') {\n      currentValue = buttonText;\n    } else {\n      currentValue += buttonText;\n    }\n  }\n\n  // Обновляем дисплей\n  display.textContent = currentValue;\n});\n\n// Функция для выполнения расчетов\nfunction calculate() {\n  var prev = parseFloat(previousValue);\n  var curr = parseFloat(currentValue);\n  switch (operator) {\n    case '+':\n      currentValue = String(prev + curr);\n      break;\n    case '-':\n      currentValue = String(prev - curr);\n      break;\n    case '×':\n      currentValue = String(prev * curr);\n      break;\n    case '÷':\n      currentValue = String(prev / curr);\n      break;\n    default:\n      return;\n  }\n}\n\n//# sourceURL=webpack://inno-calculator/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;