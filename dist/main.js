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

/***/ "./src/create-todo-item.js":
/*!*********************************!*\
  !*** ./src/create-todo-item.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoItem\": () => (/* binding */ TodoItem),\n/* harmony export */   \"createTodoItem\": () => (/* binding */ createTodoItem),\n/* harmony export */   \"todoArray\": () => (/* binding */ todoArray)\n/* harmony export */ });\nconst todoArray = [];\r\n\r\nclass TodoItem {\r\n    constructor(title, priority, description, date) {\r\n        this.title = title;\r\n        this.priority = priority;\r\n        this.description = description;\r\n        this.date = date;\r\n    }\r\n\r\n    addTodoArrayToDisplay() {\r\n        const taskContainer = document.querySelector('.task-container');\r\n        const title = document.createElement('div');\r\n        taskContainer.appendChild(newTask);\r\n    }\r\n}\r\n\r\nfunction createTodoItem() {\r\n    let title = document.querySelector('#task-title').value;\r\n    console.log(title);\r\n    let priority = document.querySelector('input[name=\"priority\"]:checked').value;\r\n    console.log(priority);\r\n    let description = document.querySelector('#task-description').value;\r\n    console.log(description);\r\n    let date = document.querySelector('#due-date').value;\r\n    console.log(date);\r\n\r\n    let newItem = new TodoItem(title, priority, description, date);\r\n    console.log(newItem);\r\n    todoArray.push(newItem); \r\n    console.log(todoArray);\r\n}\r\n\r\n\r\n\r\n// createTodoItem () {\r\n//     let title = document.querySelector('#task-title').value;\r\n//     let priority = document.querySelector\r\n//     alert('test');\r\n//     let newItem = new ToDoItem(title, priority, description, date);\r\n// }\r\n\r\n{/* <div class=\"task-item-title\">Placeholder title</div>\r\n    <div class=\"task-item-description\">Placeholder description</div>\r\n    <input type=\"date\" value=\"2021-08-25\" class=\"task-item-date\">\r\n    <p>Priority: </p>\r\n        <label for=\"high\">High</label>\r\n        <input type=\"radio\" id=\"high\" name=\"priority\" value=\"high\">\r\n        <label for=\"medium\">Medium</label>\r\n        <input type=\"radio\" id=\"medium\" name=\"priority\" value=\"medium\">\r\n        <label for=\"low\">Low</label>\r\n        <input type=\"radio\" id=\"low\" name=\"priority\" value=\"low\"></input> */}\n\n//# sourceURL=webpack://todo-list/./src/create-todo-item.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalControl\": () => (/* binding */ modalControl)\n/* harmony export */ });\n/* harmony import */ var _create_todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-todo-item */ \"./src/create-todo-item.js\");\n\r\n\r\n\r\nfunction modalControl() {\r\n    const modal = document.getElementById('task-modal');\r\n    const taskBtn = document.querySelectorAll('#add-task-btn');\r\n    const closeBtn = document.getElementsByClassName('close')[0];\r\n    const submitBtn = document.querySelector('.submit');\r\n\r\n    taskBtn.forEach(btn => {\r\n        btn.onclick = function() {\r\n            modal.style.display = 'block';\r\n        }\r\n    })\r\n\r\n    closeBtn.onclick = function() {\r\n        modal.style.display = 'none';\r\n    }\r\n\r\n    window.onclick = function(event) {\r\n        if (event.target == modal) {\r\n            modal.style.display = 'none';\r\n        }\r\n    }\r\n\r\n    submitBtn.onclick = function(event) {\r\n        ;(0,_create_todo_item__WEBPACK_IMPORTED_MODULE_0__.createTodoItem)();\r\n    } \r\n}\n\n//# sourceURL=webpack://todo-list/./src/modal-control.js?");

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