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

/***/ "./src/content-control.js":
/*!********************************!*\
  !*** ./src/content-control.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodoArrayToContent\": () => (/* binding */ addTodoArrayToContent),\n/* harmony export */   \"createDom\": () => (/* binding */ createDom),\n/* harmony export */   \"displayNewItem\": () => (/* binding */ displayNewItem),\n/* harmony export */   \"homeBtnEventListener\": () => (/* binding */ homeBtnEventListener),\n/* harmony export */   \"itemControl\": () => (/* binding */ itemControl)\n/* harmony export */ });\n/* harmony import */ var _create_todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-todo-item */ \"./src/create-todo-item.js\");\n\r\n\r\nfunction createDom(item) {\r\n  const taskContainer = document.querySelector('.task-container');\r\n  const itemContainer = document.createElement('div');\r\n  itemContainer.classList.add('itemContainer');\r\n  if (item.checked == true) {\r\n    itemContainer.classList.add('item-checked');\r\n  }\r\n  itemContainer.setAttribute('data-id', item.idNum);\r\n  taskContainer.appendChild(itemContainer);\r\n  const checkbox = document.createElement('input');\r\n  checkbox.setAttribute('type', 'checkbox');\r\n  checkbox.classList.add('checkbox');\r\n  itemContainer.appendChild(checkbox);\r\n  const itemTitle = document.createElement('div');\r\n  itemTitle.classList.add('task-item-title');\r\n  itemTitle.textContent = item.title;\r\n  itemContainer.appendChild(itemTitle);\r\n  const description = document.createElement('div');\r\n  description.classList.add('task-item-description');\r\n  description.textContent = item.description;\r\n  itemContainer.appendChild(description);\r\n  const dateInput = document.createElement('input');\r\n  dateInput.classList.add('task-item-date');\r\n  dateInput.value = item.date;\r\n  dateInput.setAttribute('type', 'date');\r\n  itemContainer.appendChild(dateInput);\r\n  itemContainer.appendChild(createPriorityLabel('high', 'High'));\r\n  itemContainer.appendChild(createPriorityInput('high', item.idNum));\r\n  itemContainer.appendChild(createPriorityLabel('medium', 'Medium'));\r\n  itemContainer.appendChild(createPriorityInput('medium', item.idNum));\r\n  itemContainer.appendChild(createPriorityLabel('low', 'Low'));\r\n  itemContainer.appendChild(createPriorityInput('low', item.idNum));\r\n  const priority = document.querySelectorAll('.radio-dom');\r\n  priority.forEach((p) => {\r\n    if (p.classList.contains('checked')) {\r\n      return;\r\n    } if (p.value == item.priority) {\r\n      p.checked = true;\r\n    }\r\n    p.classList.add('checked');\r\n\r\n    if (item.priority == 'high') {\r\n      p.parentElement.classList.add('high');\r\n    }\r\n\r\n    if (item.priority == 'medium') {\r\n      p.parentElement.classList.add('medium');\r\n    }\r\n\r\n    if (item.priority == 'low') {\r\n      p.parentElement.classList.add('low');\r\n    }\r\n  });\r\n\r\n  const trash = document.createElement('img');\r\n  trash.setAttribute('src', 'images/trash.png');\r\n  trash.setAttribute('alt', 'trash icon');\r\n  trash.classList.add('trash');\r\n  itemContainer.appendChild(trash);\r\n\r\n  document.addEventListener('click', (e) => {\r\n    if (e.target.getAttribute('id') == 'high') {\r\n      const parent = e.target.parentElement;\r\n      parent.classList.remove('medium');\r\n      parent.classList.remove('low');\r\n      parent.classList.add('high');\r\n\r\n      const dataId = parent.dataset.id;\r\n      const selectedObject = _create_todo_item__WEBPACK_IMPORTED_MODULE_0__.todoArray.find((obj) => obj.idNum == dataId);\r\n      selectedObject.priority = 'high';\r\n    }\r\n\r\n    if (e.target.getAttribute('id') == 'medium') {\r\n      const parent = e.target.parentElement;\r\n      parent.classList.remove('high');\r\n      parent.classList.remove('low');\r\n      parent.classList.add('medium');\r\n\r\n      const dataId = parent.dataset.id;\r\n      const selectedObject = _create_todo_item__WEBPACK_IMPORTED_MODULE_0__.todoArray.find((obj) => obj.idNum == dataId);\r\n      selectedObject.priority = 'medium';\r\n    }\r\n\r\n    if (e.target.getAttribute('id') == 'low') {\r\n      const parent = e.target.parentElement;\r\n      parent.classList.remove('medium');\r\n      parent.classList.remove('high');\r\n      parent.classList.add('low');\r\n\r\n      const dataId = parent.dataset.id;\r\n      const selectedObject = _create_todo_item__WEBPACK_IMPORTED_MODULE_0__.todoArray.find((obj) => obj.idNum == dataId);\r\n      selectedObject.priority = 'low';\r\n    }\r\n    localStorage.setItem('todoArrayStorage', JSON.stringify(_create_todo_item__WEBPACK_IMPORTED_MODULE_0__.todoArray));\r\n  });\r\n\r\n  document.addEventListener('change', (e) => {\r\n    const selectedDate = e.target;\r\n    if (selectedDate.classList.contains('task-item-date')) {\r\n      const parent = selectedDate.parentElement;\r\n      const dataId = parent.dataset.id;\r\n      const selectedObject = _create_todo_item__WEBPACK_IMPORTED_MODULE_0__.todoArray.find((obj) => obj.idNum == dataId);\r\n      selectedObject.date = selectedDate.value;\r\n    }\r\n    localStorage.setItem('todoArrayStorage', JSON.stringify(_create_todo_item__WEBPACK_IMPORTED_MODULE_0__.todoArray));\r\n  });\r\n}\r\n\r\n// creates dom\r\nfunction addTodoArrayToContent() {\r\n  if (document.querySelector('.content-heading').dataset.projectName == 'home') {\r\n    _create_todo_item__WEBPACK_IMPORTED_MODULE_0__.todoArray.forEach((item) => {\r\n      createDom(item);\r\n    });\r\n  } else {\r\n    addProjectToContent().forEach((item) => {\r\n      createDom(item);\r\n    });\r\n  }\r\n}\r\n\r\nfunction createPriorityLabel(priority, text) {\r\n  const label = document.createElement('label');\r\n  label.setAttribute('for', priority);\r\n  label.textContent = text;\r\n  return label;\r\n}\r\n\r\nfunction createPriorityInput(priority, id) {\r\n  const input = document.createElement('input');\r\n  input.setAttribute('id', priority);\r\n  input.setAttribute('type', 'radio');\r\n  input.setAttribute('name', id);\r\n  input.setAttribute('value', priority);\r\n  input.classList.add('radio-dom');\r\n  return input;\r\n}\r\n\r\nfunction displayNewItem() {\r\n  const itemContainer = document.querySelectorAll('.itemContainer');\r\n  itemContainer.forEach((itemContainer) => {\r\n    itemContainer.remove();\r\n  });\r\n}\r\n\r\n// removes item from content\r\nfunction itemControl() {\r\n  // remove item\r\n  document.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('trash')) {\r\n      const parent = e.target.parentElement;\r\n      const selected = parent.dataset.id;\r\n      const indexOfObject = _create_todo_item__WEBPACK_IMPORTED_MODULE_0__.todoArray.findIndex((object) => object.idNum == selected);\r\n      _create_todo_item__WEBPACK_IMPORTED_MODULE_0__.todoArray.splice(indexOfObject, 1);\r\n      console.log(_create_todo_item__WEBPACK_IMPORTED_MODULE_0__.todoArray);\r\n\r\n      localStorage.setItem('todoArrayStorage', JSON.stringify(_create_todo_item__WEBPACK_IMPORTED_MODULE_0__.todoArray));\r\n\r\n      // remove object from project array\r\n      const indexOfProject = _create_todo_item__WEBPACK_IMPORTED_MODULE_0__.projectArray.findIndex((object) => object.idNum == selected);\r\n      _create_todo_item__WEBPACK_IMPORTED_MODULE_0__.projectArray.splice(indexOfProject, 1);\r\n      localStorage.setItem('projectStorage', JSON.stringify(_create_todo_item__WEBPACK_IMPORTED_MODULE_0__.projectArray));\r\n      console.log(_create_todo_item__WEBPACK_IMPORTED_MODULE_0__.projectArray);\r\n\r\n      displayNewItem();\r\n      addTodoArrayToContent();\r\n    }\r\n  });\r\n\r\n  // cross item\r\n  document.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('checkbox')) {\r\n      if (e.target.checked) {\r\n        const parent = e.target.parentElement;\r\n        parent.classList.add('item-checked');\r\n        const dataId = parent.dataset.id;\r\n        const selectedObject = _create_todo_item__WEBPACK_IMPORTED_MODULE_0__.todoArray.find((obj) => obj.idNum == dataId);\r\n        selectedObject.checked = true;\r\n      } else {\r\n        const parent = e.target.parentElement;\r\n        parent.classList.add('item-checked');\r\n        const dataId = parent.dataset.id;\r\n        const selectedObject = _create_todo_item__WEBPACK_IMPORTED_MODULE_0__.todoArray.find((obj) => obj.idNum == dataId);\r\n        parent.classList.remove('item-checked');\r\n        selectedObject.checked = false;\r\n      }\r\n    }\r\n  });\r\n}\r\n\r\nfunction addProjectToContent() {\r\n  const heading = document.querySelector('.content-heading');\r\n  const projectNameFromHeading = heading.dataset.projectName;\r\n  const projectFilter = _create_todo_item__WEBPACK_IMPORTED_MODULE_0__.todoArray.filter((obj) => obj.project == projectNameFromHeading);\r\n  return projectFilter;\r\n}\r\n\r\nfunction homeBtnEventListener() {\r\n  _create_todo_item__WEBPACK_IMPORTED_MODULE_0__.todoArray.forEach((item) => {\r\n    createDom(item);\r\n  });\r\n  document.querySelector('.content-heading').textContent = 'Home';\r\n  document.querySelector('.content-heading').setAttribute('data-project-name', 'home');\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/content-control.js?");

/***/ }),

/***/ "./src/create-todo-item.js":
/*!*********************************!*\
  !*** ./src/create-todo-item.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoItem\": () => (/* binding */ TodoItem),\n/* harmony export */   \"createTodoItem\": () => (/* binding */ createTodoItem),\n/* harmony export */   \"loadLocalStorage\": () => (/* binding */ loadLocalStorage),\n/* harmony export */   \"projectArray\": () => (/* binding */ projectArray),\n/* harmony export */   \"todoArray\": () => (/* binding */ todoArray)\n/* harmony export */ });\n/* harmony import */ var _content_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-control */ \"./src/content-control.js\");\n/* harmony import */ var _project_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-control */ \"./src/project-control.js\");\n\r\n\r\n\r\nlet todoArray = [];\r\n\r\nlet projectArray = [];\r\nlet id = null;\r\nlet firstLoad = true;\r\n\r\nclass TodoItem {\r\n  constructor(title, priority, description, date, project) {\r\n    this.title = title;\r\n    this.priority = priority;\r\n    this.description = description;\r\n    this.date = date;\r\n    this.idNum = ++id;\r\n    this.project = project;\r\n    this.checked = false;\r\n  }\r\n}\r\n\r\nfunction createTodoItem() {\r\n  const title = document.querySelector('#task-title').value;\r\n  const priority = document.querySelector('input[name=\"priority\"]:checked').value;\r\n  const description = document.querySelector('#task-description').value;\r\n  const date = document.querySelector('#due-date').value;\r\n  const heading = document.querySelector('.content-heading');\r\n  const project = heading.dataset.projectName;\r\n  const newItem = new TodoItem(title, priority, description, date, project);\r\n  todoArray.push(newItem);\r\n  console.log(todoArray);\r\n\r\n  if (newItem.project !== 'home') {\r\n    projectArray.push(newItem);\r\n  }\r\n  console.log(projectArray);\r\n  firstLoad = false;\r\n\r\n  // local storage\r\n  localStorage.setItem('todoArrayStorage', JSON.stringify(todoArray));\r\n  localStorage.setItem('idCount', JSON.stringify(id));\r\n  localStorage.setItem('firstLoad', JSON.stringify(firstLoad));\r\n  localStorage.setItem('projectStorage', JSON.stringify(projectArray));\r\n}\r\n\r\nfunction loadLocalStorage() {\r\n  const firstLoadInquiry = JSON.parse(localStorage.getItem('firstLoad'));\r\n  firstLoad = firstLoadInquiry;\r\n\r\n  if (firstLoad == false) {\r\n    console.log('loading array');\r\n    const userLocalData = JSON.parse(localStorage.getItem('todoArrayStorage'));\r\n    todoArray = userLocalData;\r\n    const idCount = JSON.parse(localStorage.getItem('idCount'));\r\n    id = idCount;\r\n    const projectStorage = JSON.parse(localStorage.getItem('projectStorage'));\r\n    projectArray = projectStorage;\r\n\r\n    todoArray.forEach((item) => {\r\n      (0,_content_control__WEBPACK_IMPORTED_MODULE_0__.createDom)(item);\r\n    });\r\n\r\n    projectArray.forEach((item) => {\r\n      const projectItem = document.createElement('p');\r\n      projectItem.textContent = item.project;\r\n      projectItem.classList.add('project-item');\r\n      _project_control__WEBPACK_IMPORTED_MODULE_1__.projectItemContainer.appendChild(projectItem);\r\n    });\r\n\r\n    (0,_project_control__WEBPACK_IMPORTED_MODULE_1__.changeToProject)();\r\n  } else {\r\n\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/create-todo-item.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-control */ \"./src/modal-control.js\");\n/* harmony import */ var _content_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-control */ \"./src/content-control.js\");\n/* harmony import */ var _create_todo_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-todo-item */ \"./src/create-todo-item.js\");\n\r\n\r\n\r\n\r\n(0,_modal_control__WEBPACK_IMPORTED_MODULE_0__.modalControl)();\r\n(0,_content_control__WEBPACK_IMPORTED_MODULE_1__.itemControl)();\r\n(0,_create_todo_item__WEBPACK_IMPORTED_MODULE_2__.loadLocalStorage)();\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modal-control.js":
/*!******************************!*\
  !*** ./src/modal-control.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalControl\": () => (/* binding */ modalControl)\n/* harmony export */ });\n/* harmony import */ var _create_todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-todo-item */ \"./src/create-todo-item.js\");\n/* harmony import */ var _content_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-control */ \"./src/content-control.js\");\n/* harmony import */ var _project_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-control */ \"./src/project-control.js\");\n\r\n\r\n\r\n\r\n\r\nfunction modalControl() {\r\n  const modal = document.getElementById('task-modal');\r\n  const taskBtn = document.querySelectorAll('#add-task-btn');\r\n  const closeBtn = document.querySelectorAll('.close');\r\n  const submitBtn = document.querySelector('.submit');\r\n  const overlay = document.getElementById('overlay');\r\n  const projectModal = document.getElementById('project-modal');\r\n  const projectBtn = document.getElementById('add-project-btn');\r\n  const submitProject = document.getElementById('submit-project-btn');\r\n  const homeBtn = document.querySelector('#home-btn');\r\n\r\n  function clearModal() {\r\n    const taskTitle = document.querySelector('#task-title');\r\n    taskTitle.value = '';\r\n    const taskDescription = document.querySelector('#task-description');\r\n    taskDescription.value = '';\r\n    const date = document.querySelector('#due-date');\r\n    date.value = '';\r\n    closeModal(modal);\r\n  }\r\n\r\n  taskBtn.forEach((btn) => {\r\n    btn.onclick = function () {\r\n      modal.classList.add('active');\r\n      overlay.classList.add('active');\r\n    };\r\n  });\r\n\r\n  closeBtn.forEach((btn) => {\r\n    btn.onclick = function () {\r\n      const modal = btn.closest('.modal');\r\n      closeModal(modal);\r\n    };\r\n  });\r\n\r\n  overlay.addEventListener('click', () => {\r\n    const modals = document.querySelectorAll('.modal.active');\r\n    modals.forEach((modal) => {\r\n      closeModal(modal);\r\n    });\r\n  });\r\n\r\n  function closeModal(modal) {\r\n    modal.classList.remove('active');\r\n    overlay.classList.remove('active');\r\n  }\r\n\r\n  submitBtn.onclick = function () {\r\n    (0,_content_control__WEBPACK_IMPORTED_MODULE_1__.displayNewItem)();\r\n    (0,_create_todo_item__WEBPACK_IMPORTED_MODULE_0__.createTodoItem)();\r\n    (0,_content_control__WEBPACK_IMPORTED_MODULE_1__.addTodoArrayToContent)();\r\n    clearModal();\r\n  };\r\n\r\n  projectBtn.onclick = function () {\r\n    projectModal.classList.add('active');\r\n    overlay.classList.add('active');\r\n  };\r\n\r\n  submitProject.addEventListener('click', () => {\r\n    (0,_project_control__WEBPACK_IMPORTED_MODULE_2__.addProject)();\r\n  });\r\n\r\n  homeBtn.addEventListener('click', () => {\r\n    (0,_content_control__WEBPACK_IMPORTED_MODULE_1__.displayNewItem)();\r\n    (0,_content_control__WEBPACK_IMPORTED_MODULE_1__.homeBtnEventListener)();\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/modal-control.js?");

/***/ }),

/***/ "./src/project-control.js":
/*!********************************!*\
  !*** ./src/project-control.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"changeToProject\": () => (/* binding */ changeToProject),\n/* harmony export */   \"projectItemContainer\": () => (/* binding */ projectItemContainer)\n/* harmony export */ });\n/* harmony import */ var _content_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-control */ \"./src/content-control.js\");\n\r\n\r\nconst submitProject = document.getElementById('submit-project-btn');\r\nconst projectItemContainer = document.querySelector('.project-item-container');\r\nconst projectInput = document.getElementById('project-input');\r\nconst contentHeading = document.querySelector('.content-heading');\r\n\r\nfunction addProject() {\r\n  addProjectNameToSideBar();\r\n}\r\n\r\nfunction addProjectNameToSideBar() {\r\n  submitProject.onclick = function () {\r\n    const projectItem = document.createElement('p');\r\n    projectItem.textContent = projectInput.value;\r\n    projectItem.classList.add('project-item');\r\n    projectItemContainer.appendChild(projectItem);\r\n\r\n    changeToProject();\r\n  };\r\n}\r\n\r\nfunction changeToProject() {\r\n  const projectItems = document.querySelectorAll('.project-item');\r\n  projectItems.forEach((project) => {\r\n    project.onclick = function (e) {\r\n      const projectName = e.target.textContent;\r\n      contentHeading.textContent = projectName;\r\n      contentHeading.setAttribute('data-project-name', contentHeading.textContent);\r\n      (0,_content_control__WEBPACK_IMPORTED_MODULE_0__.displayNewItem)();\r\n      (0,_content_control__WEBPACK_IMPORTED_MODULE_0__.addTodoArrayToContent)();\r\n    };\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/project-control.js?");

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