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

/***/ "./src/content-control":
/*!*****************************!*\
  !*** ./src/content-control ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodoArrayToContent\": () => (/* binding */ addTodoArrayToContent),\n/* harmony export */   \"displayNewItem\": () => (/* binding */ displayNewItem)\n/* harmony export */ });\n/* harmony import */ var _create_todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-todo-item */ \"./src/create-todo-item.js\");\n\r\n\r\nfunction addTodoArrayToContent() {\r\n    _create_todo_item__WEBPACK_IMPORTED_MODULE_0__.todoArray.forEach(item => {\r\n        const taskContainer = document.querySelector('.task-container');\r\n        \r\n        const itemContainer = document.createElement('div');\r\n        itemContainer.classList.add('itemContainer');\r\n        taskContainer.appendChild(itemContainer);\r\n\r\n        const itemTitle = document.createElement('div');\r\n        itemTitle.classList.add('task-item-title');\r\n        itemTitle.textContent = item.title;\r\n        itemContainer.appendChild(itemTitle);\r\n\r\n        const description = document.createElement('div');\r\n        description.classList.add('task-item-description');\r\n        description.textContent = item.description;\r\n        itemContainer.appendChild(description);\r\n\r\n        const dateInput = document.createElement('input');\r\n        dateInput.classList.add('task-item-date');\r\n        dateInput.value = item.date;\r\n        dateInput.setAttribute('type', 'date');\r\n        itemContainer.appendChild(dateInput);\r\n\r\n        itemContainer.appendChild(createPriorityLabel('high', 'High'));\r\n        itemContainer.appendChild(createPriorityInput('high'));\r\n\r\n        itemContainer.appendChild(createPriorityLabel('medium', 'Medium'));\r\n        itemContainer.appendChild(createPriorityInput('medium'));\r\n\r\n        itemContainer.appendChild(createPriorityLabel('low', 'Low'));\r\n        itemContainer.appendChild(createPriorityInput('low'));\r\n\r\n        let priority = document.querySelectorAll('input[name=\"priority-dom\"]');\r\n        priority.forEach(p => {\r\n            if (p.classList.contains('checked')) {\r\n                return;\r\n            } else if (p.value == item.priority) {\r\n                p.checked = true;\r\n            }\r\n            p.classList.add('checked');\r\n        })\r\n    })\r\n}\r\n\r\nfunction createPriorityLabel(priority, text) {\r\n    const label = document.createElement('label');\r\n    label.setAttribute('for', priority);\r\n    label.textContent = text;\r\n    return label;\r\n}\r\n\r\nfunction createPriorityInput(priority) {\r\n    const input = document.createElement('input');\r\n    input.setAttribute('id', priority);\r\n    input.setAttribute('type', 'radio');\r\n    input.setAttribute('name', 'priority-dom');\r\n    input.setAttribute('value', priority);\r\n    return input;\r\n}\r\n\r\nfunction displayNewItem() {\r\n    let itemContainer = document.querySelectorAll('.itemContainer');\r\n    itemContainer.forEach(itemContainer => {\r\n      itemContainer.remove();\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/content-control?");

/***/ }),

/***/ "./src/create-todo-item.js":
/*!*********************************!*\
  !*** ./src/create-todo-item.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoItem\": () => (/* binding */ TodoItem),\n/* harmony export */   \"createTodoItem\": () => (/* binding */ createTodoItem),\n/* harmony export */   \"todoArray\": () => (/* binding */ todoArray)\n/* harmony export */ });\nconst todoArray = [];\r\nlet id = null;\r\n\r\nclass TodoItem {\r\n    constructor(title, priority, description, date) {\r\n        this.title = title;\r\n        this.priority = priority;\r\n        this.description = description;\r\n        this.date = date;\r\n        this.idNum = ++id;\r\n    }\r\n}\r\n\r\nfunction createTodoItem() {\r\n    let title = document.querySelector('#task-title').value;\r\n    console.log(title);\r\n    let priority = document.querySelector('input[name=\"priority\"]:checked').value;\r\n    console.log(priority);\r\n    let description = document.querySelector('#task-description').value;\r\n    console.log(description);\r\n    let date = document.querySelector('#due-date').value;\r\n    console.log(date);\r\n\r\n    let newItem = new TodoItem(title, priority, description, date);\r\n    console.log(newItem);\r\n    todoArray.push(newItem); \r\n    console.log(todoArray);\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/create-todo-item.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-control */ \"./src/modal-control.js\");\nconsole.log('Testing index.js');\r\n// import { createTodoItem } from \"./todo-item\";\r\n\r\n// createTodoItem();\r\n(0,_modal_control__WEBPACK_IMPORTED_MODULE_0__.modalControl)();\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modal-control.js":
/*!******************************!*\
  !*** ./src/modal-control.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalControl\": () => (/* binding */ modalControl)\n/* harmony export */ });\n/* harmony import */ var _create_todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-todo-item */ \"./src/create-todo-item.js\");\n/* harmony import */ var _content_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-control */ \"./src/content-control\");\n\r\n\r\n\r\n\r\nfunction modalControl() {\r\n    const modal = document.getElementById('task-modal');\r\n    const taskBtn = document.querySelectorAll('#add-task-btn');\r\n    const closeBtn = document.getElementsByClassName('close')[0];\r\n    const submitBtn = document.querySelector('.submit');\r\n\r\n    taskBtn.forEach(btn => {\r\n        btn.onclick = function() {\r\n            modal.style.display = 'block';\r\n        }\r\n    })\r\n\r\n    closeBtn.onclick = function() {\r\n        modal.style.display = 'none';\r\n    }\r\n\r\n    window.onclick = function(event) {\r\n        if (event.target == modal) {\r\n            modal.style.display = 'none';\r\n        }\r\n    }\r\n\r\n    submitBtn.onclick = function() {\r\n        ;(0,_content_control__WEBPACK_IMPORTED_MODULE_1__.displayNewItem)();\r\n        (0,_create_todo_item__WEBPACK_IMPORTED_MODULE_0__.createTodoItem)();\r\n        (0,_content_control__WEBPACK_IMPORTED_MODULE_1__.addTodoArrayToContent)();\r\n    } \r\n}\n\n//# sourceURL=webpack://todo-list/./src/modal-control.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;