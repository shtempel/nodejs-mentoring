/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.ts":
/*!**************************!*\
  !*** ./config/config.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const dialect = 'postgres';
/* harmony default export */ __webpack_exports__["default"] = ({
    dialect: dialect,
    host: "ec2-54-246-100-246.eu-west-1.compute.amazonaws.com",
    port: 5432,
    database: "d3ovs0khj82a3h",
    username: "xddqvrfzwdwecr",
    password: "3f41b5047cddbb5261d07e2a6e82eb3f6451de8b3885e01cf6136af5954d7a37",
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000
    }
});


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-access */ "./src/data-access/index.ts");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middlewares */ "./src/middlewares/index.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ "./src/routes/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());
app.use(_middlewares__WEBPACK_IMPORTED_MODULE_3__["httpLogger"]);
app.use(_routes__WEBPACK_IMPORTED_MODULE_4__["default"]);
Object(_middlewares__WEBPACK_IMPORTED_MODULE_3__["processUnhandledError"])();
app.listen(_constants__WEBPACK_IMPORTED_MODULE_1__["PORT"], () => __awaiter(void 0, void 0, void 0, function* () {
    _middlewares__WEBPACK_IMPORTED_MODULE_3__["logger"].info(`${_constants__WEBPACK_IMPORTED_MODULE_1__["LOG_MESSAGES"].portListening} ${_constants__WEBPACK_IMPORTED_MODULE_1__["PORT"]}`);
    try {
        yield Object(_data_access__WEBPACK_IMPORTED_MODULE_2__["dbConnect"])();
    }
    catch (error) {
        _middlewares__WEBPACK_IMPORTED_MODULE_3__["logger"].error(error);
        throw error;
    }
}));


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: PORT, ERRORS, LOG_MESSAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT", function() { return PORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERRORS", function() { return ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_MESSAGES", function() { return LOG_MESSAGES; });
const PORT = process.env.PORT || 4001;
const ERRORS = {
    notFound: 'not found!',
    groupNotFound: 'Group not Found!',
    methodNotAllowed: 'Method not allowed here!',
    exist: 'already exist!',
    routNotExist: 'This route is not exist!'
};
const LOG_MESSAGES = {
    connectionSuccess: 'Connection has been established successfully!',
    connectionFailed: 'Unable to connect to the database:',
    portListening: 'Listening on port...',
    dataBaseRestoringInProcess: 'Database restoring in process...',
    dataBaseRestoringComplete: 'Database restoring complete!'
};


/***/ }),

/***/ "./src/controllers/group.controller.ts":
/*!*********************************************!*\
  !*** ./src/controllers/group.controller.ts ***!
  \*********************************************/
/*! exports provided: groupController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupController", function() { return groupController; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./src/services/index.ts");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/controllers/helper.ts");


const getGroups = (request, response) => Object(_helper__WEBPACK_IMPORTED_MODULE_1__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_0__["groupService"].getAllGroups(request.query), response, request);
const getGroupById = (request, response) => Object(_helper__WEBPACK_IMPORTED_MODULE_1__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_0__["groupService"].getGroupById(request.params.group_id), response, request);
const addGroup = (request, response) => Object(_helper__WEBPACK_IMPORTED_MODULE_1__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_0__["groupService"].addGroup(request.body), response, request);
const addUsersToGroup = (request, response) => Object(_helper__WEBPACK_IMPORTED_MODULE_1__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_0__["groupService"].addUsersToGroup(request.params.group_id, request.body.userIds), response, request);
const updateGroup = (request, response) => Object(_helper__WEBPACK_IMPORTED_MODULE_1__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_0__["groupService"].updateGroup(request.params.group_id, request.body), response, request);
const deleteGroup = (request, response) => Object(_helper__WEBPACK_IMPORTED_MODULE_1__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_0__["groupService"].deleteGroup(request.params.group_id), response, request);
const groupController = {
    getGroups,
    getGroupById,
    addGroup,
    updateGroup,
    deleteGroup,
    addUsersToGroup
};


/***/ }),

/***/ "./src/controllers/helper.ts":
/*!***********************************!*\
  !*** ./src/controllers/helper.ts ***!
  \***********************************/
/*! exports provided: requestHelper, notAllowed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestHelper", function() { return requestHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notAllowed", function() { return notAllowed; });
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-errors */ "http-errors");
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares */ "./src/middlewares/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const getLogMessage = (request) => {
    const params = `params: ${JSON.stringify(request.params)}`;
    const body = `body: ${JSON.stringify(request.body)}`;
    const query = `query: ${JSON.stringify(request.query)}`;
    const url = `url: ${request.url}`;
    const method = `method: ${request.method}`;
    return `${method} ${url} ${params} ${query} ${body}`;
};
const requestHelper = (fn, response, request) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fn();
        return data
            ? response.send({ data, status: 'success' })
            : response.send({ status: 'success' });
    }
    catch (error) {
        _middlewares__WEBPACK_IMPORTED_MODULE_2__["logger"].error(`status: ${error.status || 500}, message: ${error.message}, ${getLogMessage(request)}`);
        response.status(error.status || 500).send({ error: { message: error.message } });
    }
});
const notAllowed = (request, response) => {
    let error = http_errors__WEBPACK_IMPORTED_MODULE_0___default()(405, _constants__WEBPACK_IMPORTED_MODULE_1__["ERRORS"].methodNotAllowed);
    _middlewares__WEBPACK_IMPORTED_MODULE_2__["logger"].error(`status: ${405}, message: ${error.message}`);
    response.status(error.status).send({ status: error.status, message: error.message });
};


/***/ }),

/***/ "./src/controllers/index.ts":
/*!**********************************!*\
  !*** ./src/controllers/index.ts ***!
  \**********************************/
/*! exports provided: usersController, groupController, usersGroupController, invalidController, requestHelper, notAllowed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _users_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.controller */ "./src/controllers/users.controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usersController", function() { return _users_controller__WEBPACK_IMPORTED_MODULE_0__["usersController"]; });

/* harmony import */ var _group_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group.controller */ "./src/controllers/group.controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupController", function() { return _group_controller__WEBPACK_IMPORTED_MODULE_1__["groupController"]; });

/* harmony import */ var _users_group_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-group.controller */ "./src/controllers/users-group.controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usersGroupController", function() { return _users_group_controller__WEBPACK_IMPORTED_MODULE_2__["usersGroupController"]; });

/* harmony import */ var _invalid_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invalid.controller */ "./src/controllers/invalid.controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invalidController", function() { return _invalid_controller__WEBPACK_IMPORTED_MODULE_3__["invalidController"]; });

/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper */ "./src/controllers/helper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestHelper", function() { return _helper__WEBPACK_IMPORTED_MODULE_4__["requestHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notAllowed", function() { return _helper__WEBPACK_IMPORTED_MODULE_4__["notAllowed"]; });








/***/ }),

/***/ "./src/controllers/invalid.controller.ts":
/*!***********************************************!*\
  !*** ./src/controllers/invalid.controller.ts ***!
  \***********************************************/
/*! exports provided: invalidController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidController", function() { return invalidController; });
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-errors */ "http-errors");
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares */ "./src/middlewares/index.ts");



const notAllowed = (request, response) => {
    let error = http_errors__WEBPACK_IMPORTED_MODULE_0___default()(404, _constants__WEBPACK_IMPORTED_MODULE_1__["ERRORS"].routNotExist);
    _middlewares__WEBPACK_IMPORTED_MODULE_2__["logger"].error(`status: ${404}, message: ${error.message}`);
    response.status(error.status).send({ status: error.status, message: error.message });
};
const invalidController = { notAllowed };


/***/ }),

/***/ "./src/controllers/users-group.controller.ts":
/*!***************************************************!*\
  !*** ./src/controllers/users-group.controller.ts ***!
  \***************************************************/
/*! exports provided: usersGroupController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersGroupController", function() { return usersGroupController; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./src/services/index.ts");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/controllers/helper.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const addUsersToGroup = (request, response) => __awaiter(void 0, void 0, void 0, function* () { return Object(_helper__WEBPACK_IMPORTED_MODULE_1__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_0__["usersGroupService"].addUsersToGroup(request.params.group_id, request.body.userIds), response, request); });
const usersGroupController = { addUsersToGroup };


/***/ }),

/***/ "./src/controllers/users.controller.ts":
/*!*********************************************!*\
  !*** ./src/controllers/users.controller.ts ***!
  \*********************************************/
/*! exports provided: usersController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersController", function() { return usersController; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./src/services/index.ts");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/controllers/helper.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const getUsers = (request, response) => __awaiter(void 0, void 0, void 0, function* () { return Object(_helper__WEBPACK_IMPORTED_MODULE_1__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_0__["userService"].getAllUsers(request.query), response, request); });
const getUserById = (request, response) => __awaiter(void 0, void 0, void 0, function* () { return Object(_helper__WEBPACK_IMPORTED_MODULE_1__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_0__["userService"].getUserById(request.params.user_id), response, request); });
const addUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () { return Object(_helper__WEBPACK_IMPORTED_MODULE_1__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_0__["userService"].addUser(request.body), response, request); });
const updateUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () { return Object(_helper__WEBPACK_IMPORTED_MODULE_1__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_0__["userService"].updateUser(request.params.user_id, request.body), response, request); });
const deleteUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () { return Object(_helper__WEBPACK_IMPORTED_MODULE_1__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_0__["userService"].deleteUser(request.params.user_id), response, request); });
const usersController = {
    getUsers,
    deleteUser,
    updateUser,
    getUserById,
    addUser
};


/***/ }),

/***/ "./src/data-access/backup.ts":
/*!***********************************!*\
  !*** ./src/data-access/backup.ts ***!
  \***********************************/
/*! exports provided: dataBaseRestoring, users, groups, userGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataBaseRestoring", function() { return dataBaseRestoring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groups", function() { return groups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userGroups", function() { return userGroups; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const dataBaseRestoring = () => __awaiter(void 0, void 0, void 0, function* () {
    yield _models__WEBPACK_IMPORTED_MODULE_1__["User"].bulkCreate(users);
    yield _models__WEBPACK_IMPORTED_MODULE_1__["Group"].bulkCreate(groups);
    yield _models__WEBPACK_IMPORTED_MODULE_1__["UserGroup"].bulkCreate(userGroups);
});
const users = [
    {
        user_id: 'anakin',
        login: 'AnakinSkywalker',
        password: 'anakinpass',
        age: 32
    },
    {
        user_id: 'maceWindu',
        login: 'MaceWindu',
        password: 'macepass',
        age: 72
    },
    {
        user_id: 'lukeSkywalker',
        login: 'LukeSkywalker',
        password: 'lukepass',
        age: 23
    },
    {
        user_id: 'c3p0',
        login: 'C-3PO',
        password: 'c3p0pass',
        age: 32
    },
    {
        user_id: 'darthMaul',
        login: 'DarthMaul',
        password: 'darthpass',
        age: 44
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: 'QuiGonJinn',
        password: 'quipass',
        age: 80
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: 'ObiWanKenobi',
        password: 'obipass',
        age: 47
    },
    {
        user_id: 'palpatine',
        login: 'Palpatine',
        password: 'palpatinepass',
        age: 82
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: 'Yoda',
        password: 'yodapass',
        age: 130
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: 'Snoke',
        password: 'snokepass',
        age: 53
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: 'BobaFett',
        password: 'bobapass',
        age: 36
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: 'Chewbacca',
        password: 'chewbaccapass',
        age: 130
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: 'HanSolo',
        password: 'hanpass',
        age: 66
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: 'KyloRen',
        password: 'kylopass',
        age: 30
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: 'LeiaOrgana',
        password: 'leiapass',
        age: 53
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: 'PadmeAmidala',
        password: 'padmepass',
        age: 27
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: 'CountDooku',
        password: 'dokoopass',
        age: 102
    }
];
const groups = [
    {
        group_id: 'light_side',
        name: 'light_side',
        permissions: ['WRITE', 'DELETE']
    },
    {
        group_id: 'dark_side',
        name: 'dark_side',
        permissions: ['WRITE', 'READ']
    }
];
const userGroups = [
    {
        group_id: 'light_side',
        user_id: 'anakin'
    },
    {
        group_id: 'dark_side',
        user_id: 'palpatine'
    },
    {
        group_id: 'light_side',
        user_id: 'maceWindu'
    },
    {
        group_id: 'light_side',
        user_id: 'lukeSkywalker'
    },
    {
        group_id: 'dark_side',
        user_id: 'anakin'
    },
    {
        group_id: 'dark_side',
        user_id: 'darthMaul'
    }
];


/***/ }),

/***/ "./src/data-access/dal/group.DAL.ts":
/*!******************************************!*\
  !*** ./src/data-access/dal/group.DAL.ts ***!
  \******************************************/
/*! exports provided: groupDAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupDAL", function() { return groupDAL; });
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-errors */ "http-errors");
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./src/models/index.ts");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../middlewares */ "./src/middlewares/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const ENTITY_NAME = 'group';
const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT = 10;
const getAll = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, offsetParam, limitParam } = params;
    const offset = offsetParam && parseInt(offsetParam, 10) || DEFAULT_OFFSET;
    const limit = limitParam && parseInt(limitParam, 10) + offset || DEFAULT_LIMIT;
    const where = name ? { name: { [sequelize__WEBPACK_IMPORTED_MODULE_1__["Op"].iLike]: `%${name}%` } } : {};
    const groups = yield _models__WEBPACK_IMPORTED_MODULE_3__["Group"].findAll({ offset: offset, limit: limit, where });
    return Object(_middlewares__WEBPACK_IMPORTED_MODULE_4__["groupsToResponse"])(groups);
});
const getGroup = (group_id) => __awaiter(void 0, void 0, void 0, function* () {
    const group = yield _models__WEBPACK_IMPORTED_MODULE_3__["Group"].findOne({ where: { group_id: group_id } });
    if (!group)
        throw http_errors__WEBPACK_IMPORTED_MODULE_0___default()(404, { message: `${ENTITY_NAME} ${_constants__WEBPACK_IMPORTED_MODULE_2__["ERRORS"].notFound}` });
    return Object(_middlewares__WEBPACK_IMPORTED_MODULE_4__["groupToResponse"])(group);
});
const insertGroup = (groupModel) => __awaiter(void 0, void 0, void 0, function* () {
    const group = yield _models__WEBPACK_IMPORTED_MODULE_3__["Group"].findOne({ where: { name: groupModel.name } });
    if (group)
        throw http_errors__WEBPACK_IMPORTED_MODULE_0___default()(400, { message: `${ENTITY_NAME} ${_constants__WEBPACK_IMPORTED_MODULE_2__["ERRORS"].exist}` });
    groupModel.save();
});
const updateGroup = (group_id, groupToUpdate) => __awaiter(void 0, void 0, void 0, function* () {
    const group = yield _models__WEBPACK_IMPORTED_MODULE_3__["Group"].findOne({ where: { group_id: group_id } });
    if (!group)
        throw http_errors__WEBPACK_IMPORTED_MODULE_0___default()(404, { message: `${ENTITY_NAME} ${_constants__WEBPACK_IMPORTED_MODULE_2__["ERRORS"].notFound}` });
    group.name = groupToUpdate.name;
    group.permissions = groupToUpdate.permissions;
    group.save();
});
const deleteGroup = (group_id) => __awaiter(void 0, void 0, void 0, function* () {
    const group = yield _models__WEBPACK_IMPORTED_MODULE_3__["Group"].findOne({ where: { group_id: group_id } });
    if (!group)
        throw http_errors__WEBPACK_IMPORTED_MODULE_0___default()(404, { message: `${ENTITY_NAME} ${_constants__WEBPACK_IMPORTED_MODULE_2__["ERRORS"].notFound}` });
    group.destroy();
});
const groupDAL = {
    getAll,
    getGroup,
    insertGroup,
    updateGroup,
    deleteGroup
};


/***/ }),

/***/ "./src/data-access/dal/user-group.DAL.ts":
/*!***********************************************!*\
  !*** ./src/data-access/dal/user-group.DAL.ts ***!
  \***********************************************/
/*! exports provided: usersGroupDAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersGroupDAL", function() { return usersGroupDAL; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ "./src/models/index.ts");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db */ "./src/data-access/db.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const addUsersToGroup = (group_id, user_ids) => _db__WEBPACK_IMPORTED_MODULE_1__["sequelize"].transaction((transaction) => __awaiter(void 0, void 0, void 0, function* () {
    yield _models__WEBPACK_IMPORTED_MODULE_0__["Group"].findOne({ where: { group_id: group_id }, transaction });
    const groups = user_ids.map((userId) => ({
        group_id: group_id,
        user_id: userId
    }));
    yield _models__WEBPACK_IMPORTED_MODULE_0__["UserGroup"].bulkCreate(groups, { transaction });
    // await group.addUsers(user_ids, { transaction }); just an example of using method defined in model
}));
const usersGroupDAL = { addUsersToGroup };


/***/ }),

/***/ "./src/data-access/dal/user.DAL.ts":
/*!*****************************************!*\
  !*** ./src/data-access/dal/user.DAL.ts ***!
  \*****************************************/
/*! exports provided: userDAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userDAL", function() { return userDAL; });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http-errors */ "http-errors");
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./src/models/index.ts");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../middlewares */ "./src/middlewares/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const ENTITY_NAME = 'user';
const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT = 10;
const getAll = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { login, offsetParam, limitParam } = params;
    const offset = offsetParam && parseInt(offsetParam, 10) || DEFAULT_OFFSET;
    const limit = limitParam && parseInt(limitParam, 10) + offset || DEFAULT_LIMIT;
    const where = login ? { login: { [sequelize__WEBPACK_IMPORTED_MODULE_0__["Op"].iLike]: `%${login}%` } } : {};
    const users = yield _models__WEBPACK_IMPORTED_MODULE_3__["User"].findAll({ offset: offset, limit: limit, where });
    return Object(_middlewares__WEBPACK_IMPORTED_MODULE_4__["usersToResponse"])(users);
});
const getUser = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield _models__WEBPACK_IMPORTED_MODULE_3__["User"].findOne({ where: { user_id: user_id } });
    if (!user)
        throw http_errors__WEBPACK_IMPORTED_MODULE_1___default()(404, { message: `${ENTITY_NAME} ${_constants__WEBPACK_IMPORTED_MODULE_2__["ERRORS"].notFound}` });
    return Object(_middlewares__WEBPACK_IMPORTED_MODULE_4__["userToResponse"])(user);
});
const insertUser = (userModel) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield _models__WEBPACK_IMPORTED_MODULE_3__["User"].findOne({ where: { login: userModel.login } });
    if (user)
        throw http_errors__WEBPACK_IMPORTED_MODULE_1___default()(400, { message: `${ENTITY_NAME} ${_constants__WEBPACK_IMPORTED_MODULE_2__["ERRORS"].exist}` });
    userModel.save();
});
const updateUser = (user_id, userToUpdate) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield _models__WEBPACK_IMPORTED_MODULE_3__["User"].findOne({ where: { user_id: user_id } });
    if (!user)
        throw http_errors__WEBPACK_IMPORTED_MODULE_1___default()(404, { message: `${ENTITY_NAME} ${_constants__WEBPACK_IMPORTED_MODULE_2__["ERRORS"].notFound}` });
    user.login = userToUpdate.login;
    user.age = userToUpdate.age;
    user.save();
});
const deleteUser = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield _models__WEBPACK_IMPORTED_MODULE_3__["User"].findOne({ where: { user_id: user_id } });
    if (!user)
        throw http_errors__WEBPACK_IMPORTED_MODULE_1___default()(404, { message: `${ENTITY_NAME} ${_constants__WEBPACK_IMPORTED_MODULE_2__["ERRORS"].notFound}` });
    user.destroy();
});
const userDAL = {
    getAll,
    getUser,
    insertUser,
    updateUser,
    deleteUser
};


/***/ }),

/***/ "./src/data-access/db.ts":
/*!*******************************!*\
  !*** ./src/data-access/db.ts ***!
  \*******************************/
/*! exports provided: sequelize, dbConnect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequelize", function() { return sequelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbConnect", function() { return dbConnect; });
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middlewares */ "./src/middlewares/index.ts");
/* harmony import */ var _backup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backup */ "./src/data-access/backup.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../config/config */ "./config/config.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






const models = [_models__WEBPACK_IMPORTED_MODULE_4__["User"], _models__WEBPACK_IMPORTED_MODULE_4__["Group"], _models__WEBPACK_IMPORTED_MODULE_4__["UserGroup"]];
const sequelize = new sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Sequelize"](_config_config__WEBPACK_IMPORTED_MODULE_5__["default"].database, _config_config__WEBPACK_IMPORTED_MODULE_5__["default"].username, _config_config__WEBPACK_IMPORTED_MODULE_5__["default"].password, {
    define: { timestamps: true },
    port: _config_config__WEBPACK_IMPORTED_MODULE_5__["default"].port,
    dialect: _config_config__WEBPACK_IMPORTED_MODULE_5__["default"].dialect,
    host: _config_config__WEBPACK_IMPORTED_MODULE_5__["default"].host,
    dialectOptions: { ssl: true },
    pool: _config_config__WEBPACK_IMPORTED_MODULE_5__["default"].pool,
    models: [...models]
});
const dbConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    yield sequelize.sync({ force: true });
    _middlewares__WEBPACK_IMPORTED_MODULE_1__["logger"].info(_constants__WEBPACK_IMPORTED_MODULE_3__["LOG_MESSAGES"].connectionSuccess);
    try {
        _middlewares__WEBPACK_IMPORTED_MODULE_1__["logger"].info(_constants__WEBPACK_IMPORTED_MODULE_3__["LOG_MESSAGES"].dataBaseRestoringInProcess);
        yield Object(_backup__WEBPACK_IMPORTED_MODULE_2__["dataBaseRestoring"])();
        _middlewares__WEBPACK_IMPORTED_MODULE_1__["logger"].info(_constants__WEBPACK_IMPORTED_MODULE_3__["LOG_MESSAGES"].dataBaseRestoringComplete);
    }
    catch (error) {
        _middlewares__WEBPACK_IMPORTED_MODULE_1__["logger"].error({ name: error.name, message: error.message, stack: error.stack });
    }
});


/***/ }),

/***/ "./src/data-access/index.ts":
/*!**********************************!*\
  !*** ./src/data-access/index.ts ***!
  \**********************************/
/*! exports provided: userDAL, groupDAL, usersGroupDAL, sequelize, dbConnect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dal_user_DAL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dal/user.DAL */ "./src/data-access/dal/user.DAL.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userDAL", function() { return _dal_user_DAL__WEBPACK_IMPORTED_MODULE_0__["userDAL"]; });

/* harmony import */ var _dal_group_DAL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dal/group.DAL */ "./src/data-access/dal/group.DAL.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupDAL", function() { return _dal_group_DAL__WEBPACK_IMPORTED_MODULE_1__["groupDAL"]; });

/* harmony import */ var _dal_user_group_DAL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dal/user-group.DAL */ "./src/data-access/dal/user-group.DAL.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usersGroupDAL", function() { return _dal_user_group_DAL__WEBPACK_IMPORTED_MODULE_2__["usersGroupDAL"]; });

/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./db */ "./src/data-access/db.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sequelize", function() { return _db__WEBPACK_IMPORTED_MODULE_3__["sequelize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dbConnect", function() { return _db__WEBPACK_IMPORTED_MODULE_3__["dbConnect"]; });







/***/ }),

/***/ "./src/middlewares/constants.ts":
/*!**************************************!*\
  !*** ./src/middlewares/constants.ts ***!
  \**************************************/
/*! exports provided: LOG_DIRNAME, HANDLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_DIRNAME", function() { return LOG_DIRNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HANDLE", function() { return HANDLE; });
const LOG_DIRNAME = 'logs';
const HANDLE = {
    ['unhandledRejection']: {
        message: 'Unhandled Rejection at'
    },
    ['uncaughtException']: {
        message: 'Uncaught Exception thrown'
    }
};


/***/ }),

/***/ "./src/middlewares/http-logger.ts":
/*!****************************************!*\
  !*** ./src/middlewares/http-logger.ts ***!
  \****************************************/
/*! exports provided: httpLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpLogger", function() { return httpLogger; });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./src/middlewares/logger.ts");

const httpLogger = (request, response, next) => {
    const params = `params: ${JSON.stringify(request.params)}`;
    const body = `body: ${JSON.stringify(request.body)}`;
    const query = `query: ${JSON.stringify(request.query)}`;
    const url = `url: ${request.url}`;
    const method = `method: ${request.method}`;
    try {
        const start = new Date().getTime();
        let executionTime;
        request.on('close', () => {
            executionTime = `executionTime: ${new Date().getTime() - start} mls`;
            _logger__WEBPACK_IMPORTED_MODULE_0__["logger"].info(`${method} ${url} ${params} ${query} ${body} ${executionTime}`);
        });
    }
    catch (error) {
        _logger__WEBPACK_IMPORTED_MODULE_0__["logger"].error(error);
    }
    next();
};


/***/ }),

/***/ "./src/middlewares/index.ts":
/*!**********************************!*\
  !*** ./src/middlewares/index.ts ***!
  \**********************************/
/*! exports provided: httpLogger, validator, addUserBodySchema, updateUserBodySchema, updateUserQuerySchema, addGroupBodySchema, updateGroupQuerySchema, updateGroupBodySchema, addUsersToGroupQuerySchema, addUsersToGroupBodySchema, groupToResponse, groupsToResponse, groupToDb, userToResponse, usersToResponse, userToDb, logger, processUnhandledError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-logger */ "./src/middlewares/http-logger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "httpLogger", function() { return _http_logger__WEBPACK_IMPORTED_MODULE_0__["httpLogger"]; });

/* harmony import */ var _validation_servise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation.servise */ "./src/middlewares/validation.servise.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validator", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_1__["validator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addUserBodySchema", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_1__["addUserBodySchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateUserBodySchema", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_1__["updateUserBodySchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateUserQuerySchema", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_1__["updateUserQuerySchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addGroupBodySchema", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_1__["addGroupBodySchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateGroupQuerySchema", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_1__["updateGroupQuerySchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateGroupBodySchema", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_1__["updateGroupBodySchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addUsersToGroupQuerySchema", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_1__["addUsersToGroupQuerySchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addUsersToGroupBodySchema", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_1__["addUsersToGroupBodySchema"]; });

/* harmony import */ var _parsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsers */ "./src/middlewares/parsers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupToResponse", function() { return _parsers__WEBPACK_IMPORTED_MODULE_2__["groupToResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupsToResponse", function() { return _parsers__WEBPACK_IMPORTED_MODULE_2__["groupsToResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupToDb", function() { return _parsers__WEBPACK_IMPORTED_MODULE_2__["groupToDb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userToResponse", function() { return _parsers__WEBPACK_IMPORTED_MODULE_2__["userToResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usersToResponse", function() { return _parsers__WEBPACK_IMPORTED_MODULE_2__["usersToResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userToDb", function() { return _parsers__WEBPACK_IMPORTED_MODULE_2__["userToDb"]; });

/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "./src/middlewares/logger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return _logger__WEBPACK_IMPORTED_MODULE_3__["logger"]; });

/* harmony import */ var _process_unhandledError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./process.unhandledError */ "./src/middlewares/process.unhandledError.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "processUnhandledError", function() { return _process_unhandledError__WEBPACK_IMPORTED_MODULE_4__["processUnhandledError"]; });








/***/ }),

/***/ "./src/middlewares/logger.ts":
/*!***********************************!*\
  !*** ./src/middlewares/logger.ts ***!
  \***********************************/
/*! exports provided: logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ "winston");
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/middlewares/constants.ts");


const LOG_FILE_MAX_SIZE = 5000;
const createFileTransport = (filename, level) => new winston__WEBPACK_IMPORTED_MODULE_0__["transports"].File({ dirname: _constants__WEBPACK_IMPORTED_MODULE_1__["LOG_DIRNAME"], filename, level, maxsize: LOG_FILE_MAX_SIZE });
const { colorize, combine, printf, timestamp } = winston__WEBPACK_IMPORTED_MODULE_0__["format"];
const formatter = printf(({ level, message, timestamp }) => `${timestamp} [${level}]: ${message}`);
const consoleTransport = new winston__WEBPACK_IMPORTED_MODULE_0__["transports"].Console({ format: combine(colorize(), timestamp(), formatter) });
const errorTransport = createFileTransport('errors.log', 'error');
const warnTransport = createFileTransport('warnings.log', 'warn');
const infoTransport = createFileTransport('info.log', 'info');
const loggerTransports = [consoleTransport, errorTransport, infoTransport, warnTransport];
// Logger instance
const logger = Object(winston__WEBPACK_IMPORTED_MODULE_0__["createLogger"])({
    exitOnError: false,
    format: combine(timestamp(), formatter),
    transports: loggerTransports
});


/***/ }),

/***/ "./src/middlewares/parsers.ts":
/*!************************************!*\
  !*** ./src/middlewares/parsers.ts ***!
  \************************************/
/*! exports provided: groupToResponse, groupsToResponse, groupToDb, userToResponse, usersToResponse, userToDb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupToResponse", function() { return groupToResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupsToResponse", function() { return groupsToResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupToDb", function() { return groupToDb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userToResponse", function() { return userToResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersToResponse", function() { return usersToResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userToDb", function() { return userToDb; });
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ "./src/models/user.model.ts");
/* harmony import */ var _models_group_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/group.model */ "./src/models/group.model.ts");


const groupToResponse = (group) => ({
    group_id: group.group_id,
    name: group.name,
    permissions: group.permissions
});
const groupsToResponse = (groups) => groups.map(group => groupToResponse(group));
const groupToDb = (group, group_id) => new _models_group_model__WEBPACK_IMPORTED_MODULE_1__["Group"]({
    group_id: group_id,
    name: group.name,
    permissions: group.permissions
});
const userToResponse = (user) => ({
    user_id: user.user_id,
    login: user.login,
    age: user.age
});
const usersToResponse = (users) => users.map(user => userToResponse(user));
const userToDb = (user, user_id) => new _models_user_model__WEBPACK_IMPORTED_MODULE_0__["User"]({
    user_id: user_id,
    login: user.login,
    age: user.age,
    password: user.password
});


/***/ }),

/***/ "./src/middlewares/process.unhandledError.ts":
/*!***************************************************!*\
  !*** ./src/middlewares/process.unhandledError.ts ***!
  \***************************************************/
/*! exports provided: processUnhandledError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processUnhandledError", function() { return processUnhandledError; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/middlewares/constants.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./src/middlewares/logger.ts");


const processUnhandledError = () => {
    process
        .on('unhandledRejection', (reason, promise) => {
        _logger__WEBPACK_IMPORTED_MODULE_1__["logger"].error(`${_constants__WEBPACK_IMPORTED_MODULE_0__["HANDLE"]['unhandledRejection'].message}: ${JSON.stringify(promise)}, reason: ${reason}`);
        process.exit(1);
    })
        .on('uncaughtException', (error) => {
        _logger__WEBPACK_IMPORTED_MODULE_1__["logger"].error(`${_constants__WEBPACK_IMPORTED_MODULE_0__["HANDLE"]['uncaughtException'].message} - ${error}`);
        process.exit(1);
    });
};


/***/ }),

/***/ "./src/middlewares/validation.servise.ts":
/*!***********************************************!*\
  !*** ./src/middlewares/validation.servise.ts ***!
  \***********************************************/
/*! exports provided: validator, addUserBodySchema, updateUserBodySchema, updateUserQuerySchema, addGroupBodySchema, updateGroupQuerySchema, updateGroupBodySchema, addUsersToGroupQuerySchema, addUsersToGroupBodySchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validator", function() { return validator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUserBodySchema", function() { return addUserBodySchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserBodySchema", function() { return updateUserBodySchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserQuerySchema", function() { return updateUserQuerySchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGroupBodySchema", function() { return addGroupBodySchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGroupQuerySchema", function() { return updateGroupQuerySchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGroupBodySchema", function() { return updateGroupBodySchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUsersToGroupQuerySchema", function() { return addUsersToGroupQuerySchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUsersToGroupBodySchema", function() { return addUsersToGroupBodySchema; });
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/joi */ "@hapi/joi");
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express_joi_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-joi-validation */ "express-joi-validation");
/* harmony import */ var express_joi_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_joi_validation__WEBPACK_IMPORTED_MODULE_1__);


const MIN_AGE = 4;
const MAX_AGE = 130;
const validator = Object(express_joi_validation__WEBPACK_IMPORTED_MODULE_1__["createValidator"])();
const addUserBodySchema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["object"]({
    login: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["string"]().required(),
    age: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["number"]().greater(MIN_AGE).less(MAX_AGE).required(),
    password: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["string"]().alphanum().required()
});
const updateUserBodySchema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["object"]({
    login: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["string"]().required(),
    age: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["number"]().greater(MIN_AGE).less(MAX_AGE).required()
});
const updateUserQuerySchema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["object"]({
    user_id: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["string"]().required()
});
const addGroupBodySchema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["object"]({
    name: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["string"]().required(),
    permissions: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["array"]().items(_hapi_joi__WEBPACK_IMPORTED_MODULE_0__["string"]()).required()
});
const updateGroupQuerySchema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["object"]({
    group_id: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["string"]().required()
});
const updateGroupBodySchema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["object"]({
    name: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["string"]().required(),
    permissions: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["array"]().items(_hapi_joi__WEBPACK_IMPORTED_MODULE_0__["string"]()).required()
});
const addUsersToGroupQuerySchema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["object"]({
    group_id: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["string"]().required()
});
const addUsersToGroupBodySchema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["object"]({
    userIds: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["array"]().items(_hapi_joi__WEBPACK_IMPORTED_MODULE_0__["string"]()).required()
});


/***/ }),

/***/ "./src/models/config.ts":
/*!******************************!*\
  !*** ./src/models/config.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    schema: 'new',
    tables: {
        users: 'users',
        groups: 'groups',
        userGroups: 'user-groups'
    }
});


/***/ }),

/***/ "./src/models/group.model.ts":
/*!***********************************!*\
  !*** ./src/models/group.model.ts ***!
  \***********************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/models/config.ts");
/* harmony import */ var _user_group_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-group.model */ "./src/models/user-group.model.ts");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.model */ "./src/models/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let Group = class Group extends sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Model"] {
};
__decorate([
    Object(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["BelongsToMany"])(() => _user_model__WEBPACK_IMPORTED_MODULE_3__["User"], () => _user_group_model__WEBPACK_IMPORTED_MODULE_2__["UserGroup"]),
    __metadata("design:type", Array)
], Group.prototype, "users", void 0);
__decorate([
    sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["PrimaryKey"],
    Object(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Unique"])(true),
    Object(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["AllowNull"])(false),
    sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Column"],
    __metadata("design:type", String)
], Group.prototype, "group_id", void 0);
__decorate([
    sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Column"],
    __metadata("design:type", String)
], Group.prototype, "name", void 0);
__decorate([
    Object(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Column"])(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["DataType"].ARRAY(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["DataType"].STRING)),
    __metadata("design:type", Array)
], Group.prototype, "permissions", void 0);
Group = __decorate([
    Object(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Table"])({
        schema: _config__WEBPACK_IMPORTED_MODULE_1__["default"].schema,
        tableName: _config__WEBPACK_IMPORTED_MODULE_1__["default"].tables.groups,
        paranoid: false
    })
], Group);



/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/*! exports provided: User, Group, UserGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ "./src/models/user.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user_model__WEBPACK_IMPORTED_MODULE_0__["User"]; });

/* harmony import */ var _group_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group.model */ "./src/models/group.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _group_model__WEBPACK_IMPORTED_MODULE_1__["Group"]; });

/* harmony import */ var _user_group_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-group.model */ "./src/models/user-group.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserGroup", function() { return _user_group_model__WEBPACK_IMPORTED_MODULE_2__["UserGroup"]; });






/***/ }),

/***/ "./src/models/user-group.model.ts":
/*!****************************************!*\
  !*** ./src/models/user-group.model.ts ***!
  \****************************************/
/*! exports provided: UserGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroup", function() { return UserGroup; });
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/models/config.ts");
/* harmony import */ var _group_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group.model */ "./src/models/group.model.ts");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.model */ "./src/models/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let UserGroup = class UserGroup extends sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Model"] {
};
__decorate([
    sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["PrimaryKey"],
    sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["AutoIncrement"],
    sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Column"],
    __metadata("design:type", Number)
], UserGroup.prototype, "user_group_id", void 0);
__decorate([
    Object(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["ForeignKey"])(() => _group_model__WEBPACK_IMPORTED_MODULE_2__["Group"]),
    sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Column"],
    __metadata("design:type", String)
], UserGroup.prototype, "group_id", void 0);
__decorate([
    Object(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["ForeignKey"])(() => _user_model__WEBPACK_IMPORTED_MODULE_3__["User"]),
    sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Column"],
    __metadata("design:type", String)
], UserGroup.prototype, "user_id", void 0);
UserGroup = __decorate([
    Object(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Table"])({
        schema: _config__WEBPACK_IMPORTED_MODULE_1__["default"].schema,
        tableName: _config__WEBPACK_IMPORTED_MODULE_1__["default"].tables.userGroups,
        paranoid: true
    })
], UserGroup);



/***/ }),

/***/ "./src/models/user.model.ts":
/*!**********************************!*\
  !*** ./src/models/user.model.ts ***!
  \**********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/models/config.ts");
/* harmony import */ var _group_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group.model */ "./src/models/group.model.ts");
/* harmony import */ var _user_group_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-group.model */ "./src/models/user-group.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let User = class User extends sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Model"] {
};
__decorate([
    Object(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["BelongsToMany"])(() => _group_model__WEBPACK_IMPORTED_MODULE_2__["Group"], () => _user_group_model__WEBPACK_IMPORTED_MODULE_3__["UserGroup"]),
    __metadata("design:type", Array)
], User.prototype, "groups", void 0);
__decorate([
    sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["PrimaryKey"],
    Object(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["AllowNull"])(false),
    Object(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Unique"])(true),
    Object(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Column"])(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["DataType"].STRING),
    __metadata("design:type", String)
], User.prototype, "user_id", void 0);
__decorate([
    Object(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["AllowNull"])(false),
    Object(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Unique"])(true),
    sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Column"],
    __metadata("design:type", String)
], User.prototype, "login", void 0);
__decorate([
    Object(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["AllowNull"])(false),
    sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Column"],
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    Object(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["AllowNull"])(false),
    sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Column"],
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
User = __decorate([
    Object(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Table"])({
        schema: _config__WEBPACK_IMPORTED_MODULE_1__["default"].schema,
        tableName: _config__WEBPACK_IMPORTED_MODULE_1__["default"].tables.users,
        paranoid: true
    })
], User);



/***/ }),

/***/ "./src/routes/constants.ts":
/*!*********************************!*\
  !*** ./src/routes/constants.ts ***!
  \*********************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
const ROUTES = {
    userRoutes: {
        root: '/',
        user_id: '/:user_id',
        users: '/users'
    },
    groupRoutes: {
        root: '/',
        group_id: '/:group_id/',
        users: '/:group_id/users',
        groups: '/groups'
    },
    userGroupRoutes: {
        root: '/',
        group_id: '/:group_id',
        users_group: '/users_group',
    },
    invalid: {
        root: '*'
    }
};


/***/ }),

/***/ "./src/routes/group-router.ts":
/*!************************************!*\
  !*** ./src/routes/group-router.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers */ "./src/controllers/index.ts");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares */ "./src/middlewares/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/routes/constants.ts");





const groupRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
const routes = _constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].groupRoutes;
groupRouter.route(routes.root)
    .get(_controllers__WEBPACK_IMPORTED_MODULE_1__["groupController"].getGroups)
    .post(_middlewares__WEBPACK_IMPORTED_MODULE_2__["validator"].body(_middlewares__WEBPACK_IMPORTED_MODULE_2__["addGroupBodySchema"]), _controllers__WEBPACK_IMPORTED_MODULE_1__["groupController"].addGroup)
    .all(_controllers__WEBPACK_IMPORTED_MODULE_1__["notAllowed"]);
groupRouter.route(routes.group_id)
    .get(_controllers__WEBPACK_IMPORTED_MODULE_1__["groupController"].getGroupById)
    .put(_middlewares__WEBPACK_IMPORTED_MODULE_2__["validator"].params(_middlewares__WEBPACK_IMPORTED_MODULE_2__["updateGroupQuerySchema"]), _middlewares__WEBPACK_IMPORTED_MODULE_2__["validator"].body(_middlewares__WEBPACK_IMPORTED_MODULE_2__["updateGroupBodySchema"]), _controllers__WEBPACK_IMPORTED_MODULE_1__["groupController"].updateGroup)
    .delete(_controllers__WEBPACK_IMPORTED_MODULE_1__["groupController"].deleteGroup)
    .all(_controllers__WEBPACK_IMPORTED_MODULE_1__["notAllowed"]);
groupRouter.route(routes.users)
    .post(_middlewares__WEBPACK_IMPORTED_MODULE_2__["validator"].params(_middlewares__WEBPACK_IMPORTED_MODULE_2__["addUsersToGroupQuerySchema"]), _middlewares__WEBPACK_IMPORTED_MODULE_2__["validator"].body(_middlewares__WEBPACK_IMPORTED_MODULE_2__["addUsersToGroupBodySchema"]), _controllers__WEBPACK_IMPORTED_MODULE_1__["usersGroupController"].addUsersToGroup)
    .all(_controllers__WEBPACK_IMPORTED_MODULE_1__["notAllowed"]);
/* harmony default export */ __webpack_exports__["default"] = (groupRouter);


/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/routes/constants.ts");
/* harmony import */ var _group_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group-router */ "./src/routes/group-router.ts");
/* harmony import */ var _user_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-router */ "./src/routes/user-router.ts");
/* harmony import */ var _invalid_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invalid-routes */ "./src/routes/invalid-routes.ts");





const rootRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
rootRouter.use(_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].userRoutes.users, _user_router__WEBPACK_IMPORTED_MODULE_3__["default"]);
rootRouter.use(_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].groupRoutes.groups, _group_router__WEBPACK_IMPORTED_MODULE_2__["default"]);
rootRouter.use(_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].invalid.root, _invalid_routes__WEBPACK_IMPORTED_MODULE_4__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (rootRouter);


/***/ }),

/***/ "./src/routes/invalid-routes.ts":
/*!**************************************!*\
  !*** ./src/routes/invalid-routes.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers */ "./src/controllers/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/routes/constants.ts");



const invalidRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
const routes = _constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].invalid;
invalidRouter.route(routes.root).all(_controllers__WEBPACK_IMPORTED_MODULE_1__["invalidController"].notAllowed);
/* harmony default export */ __webpack_exports__["default"] = (invalidRouter);


/***/ }),

/***/ "./src/routes/user-router.ts":
/*!***********************************!*\
  !*** ./src/routes/user-router.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers */ "./src/controllers/index.ts");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares */ "./src/middlewares/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/routes/constants.ts");





const userRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
const routes = _constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].userRoutes;
userRouter.route(routes.root)
    .get(_controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].getUsers)
    .post(_middlewares__WEBPACK_IMPORTED_MODULE_2__["validator"].body(_middlewares__WEBPACK_IMPORTED_MODULE_2__["addUserBodySchema"]), _controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].addUser)
    .all(_controllers__WEBPACK_IMPORTED_MODULE_1__["notAllowed"]);
userRouter.route(routes.user_id)
    .get(_controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].getUserById)
    .put(_middlewares__WEBPACK_IMPORTED_MODULE_2__["validator"].params(_middlewares__WEBPACK_IMPORTED_MODULE_2__["updateUserQuerySchema"]), _middlewares__WEBPACK_IMPORTED_MODULE_2__["validator"].body(_middlewares__WEBPACK_IMPORTED_MODULE_2__["updateUserBodySchema"]), _controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].updateUser)
    .delete(_controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].deleteUser)
    .all(_controllers__WEBPACK_IMPORTED_MODULE_1__["notAllowed"]);
/* harmony default export */ __webpack_exports__["default"] = (userRouter);


/***/ }),

/***/ "./src/services/group.servise.ts":
/*!***************************************!*\
  !*** ./src/services/group.servise.ts ***!
  \***************************************/
/*! exports provided: groupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupService", function() { return groupService; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-access */ "./src/data-access/index.ts");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares */ "./src/middlewares/index.ts");
/* harmony import */ var _users_group_servise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-group.servise */ "./src/services/users-group.servise.ts");




const getAllGroups = (query) => _data_access__WEBPACK_IMPORTED_MODULE_1__["groupDAL"].getAll(query);
const getGroupById = (group_id) => _data_access__WEBPACK_IMPORTED_MODULE_1__["groupDAL"].getGroup(group_id);
const addGroup = (newGroup) => _data_access__WEBPACK_IMPORTED_MODULE_1__["groupDAL"].insertGroup(Object(_middlewares__WEBPACK_IMPORTED_MODULE_2__["groupToDb"])(newGroup, uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString()));
const updateGroup = (group_id, groupToUpdate) => _data_access__WEBPACK_IMPORTED_MODULE_1__["groupDAL"].updateGroup(group_id, groupToUpdate);
const deleteGroup = (group_id) => _data_access__WEBPACK_IMPORTED_MODULE_1__["groupDAL"].deleteGroup(group_id);
const addUsersToGroup = _users_group_servise__WEBPACK_IMPORTED_MODULE_3__["usersGroupService"].addUsersToGroup;
const groupService = {
    getAllGroups,
    getGroupById,
    addGroup,
    updateGroup,
    deleteGroup,
    addUsersToGroup
};


/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/*! exports provided: userService, groupService, usersGroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_servise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.servise */ "./src/services/user.servise.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userService", function() { return _user_servise__WEBPACK_IMPORTED_MODULE_0__["userService"]; });

/* harmony import */ var _group_servise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group.servise */ "./src/services/group.servise.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupService", function() { return _group_servise__WEBPACK_IMPORTED_MODULE_1__["groupService"]; });

/* harmony import */ var _users_group_servise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-group.servise */ "./src/services/users-group.servise.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usersGroupService", function() { return _users_group_servise__WEBPACK_IMPORTED_MODULE_2__["usersGroupService"]; });






/***/ }),

/***/ "./src/services/user.servise.ts":
/*!**************************************!*\
  !*** ./src/services/user.servise.ts ***!
  \**************************************/
/*! exports provided: userService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userService", function() { return userService; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-access */ "./src/data-access/index.ts");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares */ "./src/middlewares/index.ts");



const getAllUsers = (query) => _data_access__WEBPACK_IMPORTED_MODULE_1__["userDAL"].getAll(query);
const getUserById = (user_id) => _data_access__WEBPACK_IMPORTED_MODULE_1__["userDAL"].getUser(user_id);
const addUser = (newUser) => _data_access__WEBPACK_IMPORTED_MODULE_1__["userDAL"].insertUser(Object(_middlewares__WEBPACK_IMPORTED_MODULE_2__["userToDb"])(newUser, uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString()));
const updateUser = (user_id, userToUpdate) => _data_access__WEBPACK_IMPORTED_MODULE_1__["userDAL"].updateUser(user_id, userToUpdate);
const deleteUser = (user_id) => _data_access__WEBPACK_IMPORTED_MODULE_1__["userDAL"].deleteUser(user_id);
const userService = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};


/***/ }),

/***/ "./src/services/users-group.servise.ts":
/*!*********************************************!*\
  !*** ./src/services/users-group.servise.ts ***!
  \*********************************************/
/*! exports provided: usersGroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersGroupService", function() { return usersGroupService; });
/* harmony import */ var _data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-access */ "./src/data-access/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const addUsersToGroup = (group_id, user_ids) => __awaiter(void 0, void 0, void 0, function* () { return yield _data_access__WEBPACK_IMPORTED_MODULE_0__["usersGroupDAL"].addUsersToGroup(group_id, user_ids); });
const usersGroupService = { addUsersToGroup };


/***/ }),

/***/ "@hapi/joi":
/*!****************************!*\
  !*** external "@hapi/joi" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@hapi/joi");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-joi-validation":
/*!*****************************************!*\
  !*** external "express-joi-validation" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-joi-validation");

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http-errors");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),

/***/ "sequelize-typescript":
/*!***************************************!*\
  !*** external "sequelize-typescript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize-typescript");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2dyb3VwLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2hlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2ludmFsaWQuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvdXNlcnMtZ3JvdXAuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvdXNlcnMuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1hY2Nlc3MvYmFja3VwLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLWFjY2Vzcy9kYWwvZ3JvdXAuREFMLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLWFjY2Vzcy9kYWwvdXNlci1ncm91cC5EQUwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtYWNjZXNzL2RhbC91c2VyLkRBTC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1hY2Nlc3MvZGIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtYWNjZXNzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlcy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pZGRsZXdhcmVzL2h0dHAtbG9nZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvbG9nZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlcy9wYXJzZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlcy9wcm9jZXNzLnVuaGFuZGxlZEVycm9yLnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlcy92YWxpZGF0aW9uLnNlcnZpc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9ncm91cC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvdXNlci1ncm91cC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3VzZXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9ncm91cC1yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2ludmFsaWQtcm91dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvdXNlci1yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2dyb3VwLnNlcnZpc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy91c2VyLnNlcnZpc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3VzZXJzLWdyb3VwLnNlcnZpc2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGhhcGkvam9pXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3Mtam9pLXZhbGlkYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwLWVycm9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbnN0b25cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQUEsTUFBTSxPQUFPLEdBQVksVUFBVSxDQUFDO0FBRXJCO0lBQ1gsT0FBTyxFQUFFLE9BQU87SUFDaEIsSUFBSSxFQUFFLG9EQUFvRDtJQUMxRCxJQUFJLEVBQUUsSUFBSTtJQUNWLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixRQUFRLEVBQUUsa0VBQWtFO0lBQzVFLElBQUksRUFBRTtRQUNGLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLENBQUM7UUFDTixPQUFPLEVBQUUsS0FBSztRQUNkLElBQUksRUFBRSxLQUFLO0tBQ2Q7Q0FD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LFdBQVcsR0FBRyxDQUFDLE9BQWUsRUFBMkIsRUFBRSxDQUFDLG9EQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTNGLE1BQU0sT0FBTyxHQUFHLENBQUMsT0FBa0IsRUFBaUIsRUFBRSxDQUFDLG9EQUFPLENBQUMsVUFBVSxDQUFDLDZEQUFRLENBQUMsT0FBTyxFQUFFLDJDQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRW5ILE1BQU0sVUFBVSxHQUFHLENBQUMsT0FBZSxFQUFFLFlBQTBCLEVBQWlCLEVBQUUsQ0FBQyxvREFBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFFN0gsTUFBTSxVQUFVLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRSxDQUFDLG9EQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTdELE1BQU0sV0FBVyxHQUFHO0lBQ3ZCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsT0FBTztJQUNQLFVBQVU7SUFDVixVQUFVO0NBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCNkM7QUFFL0MsTUFBTSxlQUFlLEdBQUcsQ0FBTyxRQUFnQixFQUFFLFFBQWtCLEVBQWdCLEVBQUUsa0RBQ2pGLGFBQU0sMERBQWEsQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxLQUFDO0FBRXJELE1BQU0saUJBQWlCLEdBQUcsRUFBRSxlQUFlLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7O0FDTHJELHNDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InNlcnZlci1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAudHNcIik7XG4iLCJpbXBvcnQgeyBEaWFsZWN0IH0gZnJvbSAnc2VxdWVsaXplJztcclxuXHJcbmNvbnN0IGRpYWxlY3Q6IERpYWxlY3QgPSAncG9zdGdyZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGlhbGVjdDogZGlhbGVjdCxcclxuICAgIGhvc3Q6IFwiZWMyLTU0LTI0Ni0xMDAtMjQ2LmV1LXdlc3QtMS5jb21wdXRlLmFtYXpvbmF3cy5jb21cIixcclxuICAgIHBvcnQ6IDU0MzIsXHJcbiAgICBkYXRhYmFzZTogXCJkM292czBraGo4MmEzaFwiLFxyXG4gICAgdXNlcm5hbWU6IFwieGRkcXZyZnp3ZHdlY3JcIixcclxuICAgIHBhc3N3b3JkOiBcIjNmNDFiNTA0N2NkZGJiNTI2MWQwN2UyYTZlODJlYjNmNjQ1MWRlOGIzODg1ZTAxY2Y2MTM2YWY1OTU0ZDdhMzdcIixcclxuICAgIHBvb2w6IHtcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgbWF4OiA1LFxyXG4gICAgICAgIGFjcXVpcmU6IDMwMDAwLFxyXG4gICAgICAgIGlkbGU6IDEwMDAwXHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCBleHByZXNzLCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBMT0dfTUVTU0FHRVMsIFBPUlQgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGRiQ29ubmVjdCB9IGZyb20gJy4vZGF0YS1hY2Nlc3MnO1xyXG5pbXBvcnQgeyBodHRwTG9nZ2VyLCBsb2dnZXIsIHByb2Nlc3NVbmhhbmRsZWRFcnJvciB9IGZyb20gJy4vbWlkZGxld2FyZXMnO1xyXG5pbXBvcnQgcm9vdFJvdXRlciBmcm9tICcuL3JvdXRlcyc7XHJcblxyXG5jb25zdCBhcHA6IEFwcGxpY2F0aW9uID0gZXhwcmVzcygpO1xyXG5cclxuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XHJcbmFwcC51c2UoaHR0cExvZ2dlcik7XHJcbmFwcC51c2Uocm9vdFJvdXRlcik7XHJcblxyXG5wcm9jZXNzVW5oYW5kbGVkRXJyb3IoKTtcclxuXHJcbmFwcC5saXN0ZW4oUE9SVCwgYXN5bmMgKCkgPT4ge1xyXG4gICAgbG9nZ2VyLmluZm8oYCR7IExPR19NRVNTQUdFUy5wb3J0TGlzdGVuaW5nIH0gJHsgUE9SVCB9YCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBsb2dnZXIuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG59KTtcclxuIiwiZXhwb3J0IGNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQwMDE7XHJcblxyXG5leHBvcnQgY29uc3QgRVJST1JTID0ge1xyXG4gICAgbm90Rm91bmQ6ICdub3QgZm91bmQhJyxcclxuICAgIGdyb3VwTm90Rm91bmQ6ICdHcm91cCBub3QgRm91bmQhJyxcclxuICAgIG1ldGhvZE5vdEFsbG93ZWQ6ICdNZXRob2Qgbm90IGFsbG93ZWQgaGVyZSEnLFxyXG4gICAgZXhpc3Q6ICdhbHJlYWR5IGV4aXN0IScsXHJcbiAgICByb3V0Tm90RXhpc3Q6ICdUaGlzIHJvdXRlIGlzIG5vdCBleGlzdCEnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX01FU1NBR0VTID0ge1xyXG4gICAgY29ubmVjdGlvblN1Y2Nlc3M6ICdDb25uZWN0aW9uIGhhcyBiZWVuIGVzdGFibGlzaGVkIHN1Y2Nlc3NmdWxseSEnLFxyXG4gICAgY29ubmVjdGlvbkZhaWxlZDogJ1VuYWJsZSB0byBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZTonLFxyXG4gICAgcG9ydExpc3RlbmluZzogJ0xpc3RlbmluZyBvbiBwb3J0Li4uJyxcclxuICAgIGRhdGFCYXNlUmVzdG9yaW5nSW5Qcm9jZXNzOiAnRGF0YWJhc2UgcmVzdG9yaW5nIGluIHByb2Nlc3MuLi4nLFxyXG4gICAgZGF0YUJhc2VSZXN0b3JpbmdDb21wbGV0ZTogJ0RhdGFiYXNlIHJlc3RvcmluZyBjb21wbGV0ZSEnXHJcbn07XHJcblxyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgZ3JvdXBTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQgeyByZXF1ZXN0SGVscGVyIH0gZnJvbSAnLi9oZWxwZXInO1xyXG5cclxuY29uc3QgZ2V0R3JvdXBzID0gKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gZ3JvdXBTZXJ2aWNlLmdldEFsbEdyb3VwcyhyZXF1ZXN0LnF1ZXJ5KSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuY29uc3QgZ2V0R3JvdXBCeUlkID0gKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gZ3JvdXBTZXJ2aWNlLmdldEdyb3VwQnlJZChyZXF1ZXN0LnBhcmFtcy5ncm91cF9pZCksIHJlc3BvbnNlLCByZXF1ZXN0KTtcclxuXHJcbmNvbnN0IGFkZEdyb3VwID0gKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gZ3JvdXBTZXJ2aWNlLmFkZEdyb3VwKHJlcXVlc3QuYm9keSksIHJlc3BvbnNlLCByZXF1ZXN0KTtcclxuXHJcbmNvbnN0IGFkZFVzZXJzVG9Hcm91cCA9IChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IGdyb3VwU2VydmljZS5hZGRVc2Vyc1RvR3JvdXAocmVxdWVzdC5wYXJhbXMuZ3JvdXBfaWQsIHJlcXVlc3QuYm9keS51c2VySWRzKSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuY29uc3QgdXBkYXRlR3JvdXAgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiBncm91cFNlcnZpY2UudXBkYXRlR3JvdXAocmVxdWVzdC5wYXJhbXMuZ3JvdXBfaWQsIHJlcXVlc3QuYm9keSksIHJlc3BvbnNlLCByZXF1ZXN0KTtcclxuXHJcbmNvbnN0IGRlbGV0ZUdyb3VwID0gKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVxdWVzdEhlbHBlcigoKSA9PlxyXG4gICAgZ3JvdXBTZXJ2aWNlLmRlbGV0ZUdyb3VwKHJlcXVlc3QucGFyYW1zLmdyb3VwX2lkKSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyb3VwQ29udHJvbGxlciA9IHtcclxuICAgIGdldEdyb3VwcyxcclxuICAgIGdldEdyb3VwQnlJZCxcclxuICAgIGFkZEdyb3VwLFxyXG4gICAgdXBkYXRlR3JvdXAsXHJcbiAgICBkZWxldGVHcm91cCxcclxuICAgIGFkZFVzZXJzVG9Hcm91cFxyXG59O1xyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IsIHsgSHR0cEVycm9yIH0gZnJvbSAnaHR0cC1lcnJvcnMnO1xyXG5cclxuaW1wb3J0IHsgRVJST1JTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi4vbWlkZGxld2FyZXMnO1xyXG5cclxuY29uc3QgZ2V0TG9nTWVzc2FnZSA9IChyZXF1ZXN0OiBSZXF1ZXN0KTogc3RyaW5nID0+IHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IGBwYXJhbXM6ICR7IEpTT04uc3RyaW5naWZ5KHJlcXVlc3QucGFyYW1zKSB9YDtcclxuICAgIGNvbnN0IGJvZHkgPSBgYm9keTogJHsgSlNPTi5zdHJpbmdpZnkocmVxdWVzdC5ib2R5KSB9YDtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYHF1ZXJ5OiAkeyBKU09OLnN0cmluZ2lmeShyZXF1ZXN0LnF1ZXJ5KSB9YDtcclxuICAgIGNvbnN0IHVybCA9IGB1cmw6ICR7IHJlcXVlc3QudXJsIH1gO1xyXG4gICAgY29uc3QgbWV0aG9kID0gYG1ldGhvZDogJHsgcmVxdWVzdC5tZXRob2QgfWA7XHJcblxyXG4gICAgcmV0dXJuIGAkeyBtZXRob2QgfSAkeyB1cmwgfSAkeyBwYXJhbXMgfSAkeyBxdWVyeSB9ICR7IGJvZHkgfWA7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdEhlbHBlciA9IGFzeW5jIChmbjogYW55LCByZXNwb25zZTogUmVzcG9uc2UsIHJlcXVlc3Q6IFJlcXVlc3QpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZuKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgICAgICAgPyByZXNwb25zZS5zZW5kKHsgZGF0YSwgc3RhdHVzOiAnc3VjY2VzcycgfSlcclxuICAgICAgICAgICAgOiByZXNwb25zZS5zZW5kKHsgc3RhdHVzOiAnc3VjY2VzcycgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGxvZ2dlci5lcnJvcihgc3RhdHVzOiAkeyBlcnJvci5zdGF0dXMgfHwgNTAwIH0sIG1lc3NhZ2U6ICR7IGVycm9yLm1lc3NhZ2UgfSwgJHsgZ2V0TG9nTWVzc2FnZShyZXF1ZXN0KSB9YCk7XHJcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzKGVycm9yLnN0YXR1cyB8fCA1MDApLnNlbmQoeyBlcnJvcjogeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0gfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgbm90QWxsb3dlZCA9IChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgIGxldCBlcnJvcjogSHR0cEVycm9yID0gY3JlYXRlRXJyb3IoNDA1LCBFUlJPUlMubWV0aG9kTm90QWxsb3dlZCk7XHJcbiAgICBsb2dnZXIuZXJyb3IoYHN0YXR1czogJHsgNDA1IH0sIG1lc3NhZ2U6ICR7IGVycm9yLm1lc3NhZ2UgfWApO1xyXG5cclxuICAgIHJlc3BvbnNlLnN0YXR1cyhlcnJvci5zdGF0dXMpLnNlbmQoeyBzdGF0dXM6IGVycm9yLnN0YXR1cywgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi91c2Vycy5jb250cm9sbGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9ncm91cC5jb250cm9sbGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi91c2Vycy1ncm91cC5jb250cm9sbGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9pbnZhbGlkLmNvbnRyb2xsZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2hlbHBlcic7XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBjcmVhdGVFcnJvciwgeyBIdHRwRXJyb3IgfSBmcm9tICdodHRwLWVycm9ycyc7XHJcblxyXG5pbXBvcnQgeyBFUlJPUlMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi9taWRkbGV3YXJlcyc7XHJcblxyXG5jb25zdCBub3RBbGxvd2VkID0gKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgbGV0IGVycm9yOiBIdHRwRXJyb3IgPSBjcmVhdGVFcnJvcig0MDQsIEVSUk9SUy5yb3V0Tm90RXhpc3QpO1xyXG5cclxuICAgIGxvZ2dlci5lcnJvcihgc3RhdHVzOiAkeyA0MDQgfSwgbWVzc2FnZTogJHsgZXJyb3IubWVzc2FnZSB9YCk7XHJcbiAgICByZXNwb25zZS5zdGF0dXMoZXJyb3Iuc3RhdHVzKS5zZW5kKHsgc3RhdHVzOiBlcnJvci5zdGF0dXMsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW52YWxpZENvbnRyb2xsZXIgPSB7IG5vdEFsbG93ZWQgfTtcclxuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IHVzZXJzR3JvdXBTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQgeyByZXF1ZXN0SGVscGVyIH0gZnJvbSAnLi9oZWxwZXInO1xyXG5cclxuY29uc3QgYWRkVXNlcnNUb0dyb3VwID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gdXNlcnNHcm91cFNlcnZpY2UuYWRkVXNlcnNUb0dyb3VwKHJlcXVlc3QucGFyYW1zLmdyb3VwX2lkLCByZXF1ZXN0LmJvZHkudXNlcklkcyksIHJlc3BvbnNlLCByZXF1ZXN0KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2Vyc0dyb3VwQ29udHJvbGxlciA9IHsgYWRkVXNlcnNUb0dyb3VwIH07XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyB1c2VyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgcmVxdWVzdEhlbHBlciB9IGZyb20gJy4vaGVscGVyJztcclxuXHJcbmNvbnN0IGdldFVzZXJzID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gdXNlclNlcnZpY2UuZ2V0QWxsVXNlcnMocmVxdWVzdC5xdWVyeSksIHJlc3BvbnNlLCByZXF1ZXN0KTtcclxuXHJcbmNvbnN0IGdldFVzZXJCeUlkID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gdXNlclNlcnZpY2UuZ2V0VXNlckJ5SWQocmVxdWVzdC5wYXJhbXMudXNlcl9pZCksIHJlc3BvbnNlLCByZXF1ZXN0KTtcclxuXHJcbmNvbnN0IGFkZFVzZXIgPSBhc3luYyAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiB1c2VyU2VydmljZS5hZGRVc2VyKHJlcXVlc3QuYm9keSksIHJlc3BvbnNlLCByZXF1ZXN0KTtcclxuXHJcbmNvbnN0IHVwZGF0ZVVzZXIgPSBhc3luYyAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiB1c2VyU2VydmljZS51cGRhdGVVc2VyKHJlcXVlc3QucGFyYW1zLnVzZXJfaWQsIHJlcXVlc3QuYm9keSksIHJlc3BvbnNlLCByZXF1ZXN0KTtcclxuXHJcbmNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiB1c2VyU2VydmljZS5kZWxldGVVc2VyKHJlcXVlc3QucGFyYW1zLnVzZXJfaWQpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlcnNDb250cm9sbGVyID0ge1xyXG4gICAgZ2V0VXNlcnMsXHJcbiAgICBkZWxldGVVc2VyLFxyXG4gICAgdXBkYXRlVXNlcixcclxuICAgIGdldFVzZXJCeUlkLFxyXG4gICAgYWRkVXNlclxyXG59O1xyXG4iLCJpbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcclxuXHJcbmltcG9ydCB7IEdyb3VwLCBVc2VyLCBVc2Vyc0dyb3VwIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90eXBpbmdzJztcclxuaW1wb3J0IHsgVXNlciBhcyBVc2VyTW9kZWwsIEdyb3VwIGFzIEdyb3VwTW9kZWwsIFVzZXJHcm91cCBhcyBVc2VyR3JvdXBNb2RlbCB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgY29uc3QgZGF0YUJhc2VSZXN0b3JpbmcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBVc2VyTW9kZWwuYnVsa0NyZWF0ZSh1c2Vycyk7XHJcbiAgICBhd2FpdCBHcm91cE1vZGVsLmJ1bGtDcmVhdGUoZ3JvdXBzKTtcclxuICAgIGF3YWl0IFVzZXJHcm91cE1vZGVsLmJ1bGtDcmVhdGUodXNlckdyb3Vwcyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlcnM6IFVzZXJbXSA9IFtcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiAnYW5ha2luJyxcclxuICAgICAgICBsb2dpbjogJ0FuYWtpblNreXdhbGtlcicsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdhbmFraW5wYXNzJyxcclxuICAgICAgICBhZ2U6IDMyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6ICdtYWNlV2luZHUnLFxyXG4gICAgICAgIGxvZ2luOiAnTWFjZVdpbmR1JyxcclxuICAgICAgICBwYXNzd29yZDogJ21hY2VwYXNzJyxcclxuICAgICAgICBhZ2U6IDcyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6ICdsdWtlU2t5d2Fsa2VyJyxcclxuICAgICAgICBsb2dpbjogJ0x1a2VTa3l3YWxrZXInLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnbHVrZXBhc3MnLFxyXG4gICAgICAgIGFnZTogMjNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogJ2MzcDAnLFxyXG4gICAgICAgIGxvZ2luOiAnQy0zUE8nLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnYzNwMHBhc3MnLFxyXG4gICAgICAgIGFnZTogMzJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogJ2RhcnRoTWF1bCcsXHJcbiAgICAgICAgbG9naW46ICdEYXJ0aE1hdWwnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnZGFydGhwYXNzJyxcclxuICAgICAgICBhZ2U6IDQ0XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiAnUXVpR29uSmlubicsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdxdWlwYXNzJyxcclxuICAgICAgICBhZ2U6IDgwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiAnT2JpV2FuS2Vub2JpJyxcclxuICAgICAgICBwYXNzd29yZDogJ29iaXBhc3MnLFxyXG4gICAgICAgIGFnZTogNDdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogJ3BhbHBhdGluZScsXHJcbiAgICAgICAgbG9naW46ICdQYWxwYXRpbmUnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAncGFscGF0aW5lcGFzcycsXHJcbiAgICAgICAgYWdlOiA4MlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogJ1lvZGEnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAneW9kYXBhc3MnLFxyXG4gICAgICAgIGFnZTogMTMwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiAnU25va2UnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnc25va2VwYXNzJyxcclxuICAgICAgICBhZ2U6IDUzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiAnQm9iYUZldHQnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnYm9iYXBhc3MnLFxyXG4gICAgICAgIGFnZTogMzZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdDaGV3YmFjY2EnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnY2hld2JhY2NhcGFzcycsXHJcbiAgICAgICAgYWdlOiAxMzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdIYW5Tb2xvJyxcclxuICAgICAgICBwYXNzd29yZDogJ2hhbnBhc3MnLFxyXG4gICAgICAgIGFnZTogNjZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdLeWxvUmVuJyxcclxuICAgICAgICBwYXNzd29yZDogJ2t5bG9wYXNzJyxcclxuICAgICAgICBhZ2U6IDMwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiAnTGVpYU9yZ2FuYScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdsZWlhcGFzcycsXHJcbiAgICAgICAgYWdlOiA1M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogJ1BhZG1lQW1pZGFsYScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdwYWRtZXBhc3MnLFxyXG4gICAgICAgIGFnZTogMjdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdDb3VudERvb2t1JyxcclxuICAgICAgICBwYXNzd29yZDogJ2Rva29vcGFzcycsXHJcbiAgICAgICAgYWdlOiAxMDJcclxuICAgIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cHM6IEdyb3VwW10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgZ3JvdXBfaWQ6ICdsaWdodF9zaWRlJyxcclxuICAgICAgICBuYW1lOiAnbGlnaHRfc2lkZScsXHJcbiAgICAgICAgcGVybWlzc2lvbnM6IFsgJ1dSSVRFJywgJ0RFTEVURScgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBncm91cF9pZDogJ2Rhcmtfc2lkZScsXHJcbiAgICAgICAgbmFtZTogJ2Rhcmtfc2lkZScsXHJcbiAgICAgICAgcGVybWlzc2lvbnM6IFsgJ1dSSVRFJywgJ1JFQUQnIF1cclxuICAgIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyR3JvdXBzOiBVc2Vyc0dyb3VwW10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgZ3JvdXBfaWQ6ICdsaWdodF9zaWRlJyxcclxuICAgICAgICB1c2VyX2lkOiAnYW5ha2luJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBncm91cF9pZDogJ2Rhcmtfc2lkZScsXHJcbiAgICAgICAgdXNlcl9pZDogJ3BhbHBhdGluZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZ3JvdXBfaWQ6ICdsaWdodF9zaWRlJyxcclxuICAgICAgICB1c2VyX2lkOiAnbWFjZVdpbmR1J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBncm91cF9pZDogJ2xpZ2h0X3NpZGUnLFxyXG4gICAgICAgIHVzZXJfaWQ6ICdsdWtlU2t5d2Fsa2VyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBncm91cF9pZDogJ2Rhcmtfc2lkZScsXHJcbiAgICAgICAgdXNlcl9pZDogJ2FuYWtpbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZ3JvdXBfaWQ6ICdkYXJrX3NpZGUnLFxyXG4gICAgICAgIHVzZXJfaWQ6ICdkYXJ0aE1hdWwnXHJcbiAgICB9XHJcbl07XHJcbiIsImltcG9ydCBjcmVhdGVFcnJvciBmcm9tICdodHRwLWVycm9ycyc7XHJcbmltcG9ydCB7IE9wLCBXaGVyZU9wdGlvbnMgfSBmcm9tICdzZXF1ZWxpemUnO1xyXG5cclxuaW1wb3J0IHsgRVJST1JTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgR3JvdXAgYXMgR3JvdXBUb0RCLCBHcm91cFRvVXBkYXRlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy90eXBpbmdzJztcclxuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBncm91cHNUb1Jlc3BvbnNlLCBncm91cFRvUmVzcG9uc2UsIH0gZnJvbSAnLi4vLi4vbWlkZGxld2FyZXMnO1xyXG5pbXBvcnQgeyBRdWVyeVBhcmFtcyB9IGZyb20gJy4uL3R5cGluZ3MnO1xyXG5cclxuY29uc3QgRU5USVRZX05BTUU6IHN0cmluZyA9ICdncm91cCc7XHJcbmNvbnN0IERFRkFVTFRfT0ZGU0VUOiBudW1iZXIgPSAwO1xyXG5jb25zdCBERUZBVUxUX0xJTUlUOiBudW1iZXIgPSAxMDtcclxuXHJcbmNvbnN0IGdldEFsbCA9IGFzeW5jIChwYXJhbXM6IFF1ZXJ5UGFyYW1zKTogUHJvbWlzZTxHcm91cFRvREJbXT4gPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCBvZmZzZXRQYXJhbSwgbGltaXRQYXJhbSB9ID0gcGFyYW1zO1xyXG4gICAgY29uc3Qgb2Zmc2V0OiBudW1iZXIgPSBvZmZzZXRQYXJhbSAmJiBwYXJzZUludChvZmZzZXRQYXJhbSwgMTApIHx8IERFRkFVTFRfT0ZGU0VUO1xyXG4gICAgY29uc3QgbGltaXQ6IG51bWJlciA9IGxpbWl0UGFyYW0gJiYgcGFyc2VJbnQobGltaXRQYXJhbSwgMTApICsgb2Zmc2V0IHx8IERFRkFVTFRfTElNSVQ7XHJcbiAgICBjb25zdCB3aGVyZTogV2hlcmVPcHRpb25zID0gbmFtZSA/IHsgbmFtZTogeyBbIE9wLmlMaWtlIF06IGAlJHsgbmFtZSB9JWAgfSB9IDoge307XHJcbiAgICBjb25zdCBncm91cHMgPSBhd2FpdCBHcm91cC5maW5kQWxsKHsgb2Zmc2V0OiBvZmZzZXQsIGxpbWl0OiBsaW1pdCwgd2hlcmUgfSk7XHJcblxyXG4gICAgcmV0dXJuIGdyb3Vwc1RvUmVzcG9uc2UoZ3JvdXBzKTtcclxufTtcclxuXHJcbmNvbnN0IGdldEdyb3VwID0gYXN5bmMgKGdyb3VwX2lkOiBzdHJpbmcpOiBQcm9taXNlPEdyb3VwVG9EQj4gPT4ge1xyXG4gICAgY29uc3QgZ3JvdXAgPSBhd2FpdCBHcm91cC5maW5kT25lKHsgd2hlcmU6IHsgZ3JvdXBfaWQ6IGdyb3VwX2lkIH0gfSk7XHJcblxyXG4gICAgaWYgKCAhZ3JvdXAgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDQsIHsgbWVzc2FnZTogYCR7IEVOVElUWV9OQU1FIH0gJHsgRVJST1JTLm5vdEZvdW5kIH1gIH0pO1xyXG5cclxuICAgIHJldHVybiBncm91cFRvUmVzcG9uc2UoZ3JvdXApO1xyXG59O1xyXG5cclxuY29uc3QgaW5zZXJ0R3JvdXAgPSBhc3luYyAoZ3JvdXBNb2RlbDogR3JvdXApOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnN0IGdyb3VwID0gYXdhaXQgR3JvdXAuZmluZE9uZSh7IHdoZXJlOiB7IG5hbWU6IGdyb3VwTW9kZWwubmFtZSB9IH0pO1xyXG5cclxuICAgIGlmICggZ3JvdXAgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDAsIHsgbWVzc2FnZTogYCR7IEVOVElUWV9OQU1FIH0gJHsgRVJST1JTLmV4aXN0IH1gIH0pO1xyXG5cclxuICAgIGdyb3VwTW9kZWwuc2F2ZSgpO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlR3JvdXAgPSBhc3luYyAoZ3JvdXBfaWQ6IHN0cmluZywgZ3JvdXBUb1VwZGF0ZTogR3JvdXBUb1VwZGF0ZSk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc3QgZ3JvdXAgPSBhd2FpdCBHcm91cC5maW5kT25lKHsgd2hlcmU6IHsgZ3JvdXBfaWQ6IGdyb3VwX2lkIH0gfSk7XHJcblxyXG4gICAgaWYgKCAhZ3JvdXAgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDQsIHsgbWVzc2FnZTogYCR7IEVOVElUWV9OQU1FIH0gJHsgRVJST1JTLm5vdEZvdW5kIH1gIH0pO1xyXG5cclxuICAgIGdyb3VwLm5hbWUgPSBncm91cFRvVXBkYXRlLm5hbWU7XHJcbiAgICBncm91cC5wZXJtaXNzaW9ucyA9IGdyb3VwVG9VcGRhdGUucGVybWlzc2lvbnM7XHJcblxyXG4gICAgZ3JvdXAuc2F2ZSgpO1xyXG59O1xyXG5cclxuY29uc3QgZGVsZXRlR3JvdXAgPSBhc3luYyAoZ3JvdXBfaWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc3QgZ3JvdXAgPSBhd2FpdCBHcm91cC5maW5kT25lKHsgd2hlcmU6IHsgZ3JvdXBfaWQ6IGdyb3VwX2lkIH0gfSk7XHJcblxyXG4gICAgaWYgKCAhZ3JvdXAgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDQsIHsgbWVzc2FnZTogYCR7IEVOVElUWV9OQU1FIH0gJHsgRVJST1JTLm5vdEZvdW5kIH1gIH0pO1xyXG5cclxuICAgIGdyb3VwLmRlc3Ryb3koKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cERBTCA9IHtcclxuICAgIGdldEFsbCxcclxuICAgIGdldEdyb3VwLFxyXG4gICAgaW5zZXJ0R3JvdXAsXHJcbiAgICB1cGRhdGVHcm91cCxcclxuICAgIGRlbGV0ZUdyb3VwXHJcbn07XHJcbiIsImltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSAnc2VxdWVsaXplJztcclxuXHJcbmltcG9ydCB7IFVzZXJzR3JvdXAgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3R5cGluZ3MnO1xyXG5pbXBvcnQgeyBHcm91cCwgVXNlckdyb3VwIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgc2VxdWVsaXplIGFzIGRiSW5zdGFuY2UgfSBmcm9tICcuLi9kYic7XHJcblxyXG5jb25zdCBhZGRVc2Vyc1RvR3JvdXAgPSAoZ3JvdXBfaWQ6IHN0cmluZywgdXNlcl9pZHM6IHN0cmluZ1tdKTogUHJvbWlzZTx2b2lkPiA9PlxyXG4gICAgZGJJbnN0YW5jZS50cmFuc2FjdGlvbihcclxuICAgICAgICBhc3luYyAodHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IEdyb3VwLmZpbmRPbmUoeyB3aGVyZTogeyBncm91cF9pZDogZ3JvdXBfaWQgfSwgdHJhbnNhY3Rpb24gfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBncm91cHM6IFVzZXJzR3JvdXBbXSA9XHJcbiAgICAgICAgICAgICAgICB1c2VyX2lkcy5tYXAoKHVzZXJJZDogc3RyaW5nKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwX2lkOiBncm91cF9pZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VySWRcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IFVzZXJHcm91cC5idWxrQ3JlYXRlKGdyb3VwcywgeyB0cmFuc2FjdGlvbiB9KTtcclxuICAgICAgICAgICAgLy8gYXdhaXQgZ3JvdXAuYWRkVXNlcnModXNlcl9pZHMsIHsgdHJhbnNhY3Rpb24gfSk7IGp1c3QgYW4gZXhhbXBsZSBvZiB1c2luZyBtZXRob2QgZGVmaW5lZCBpbiBtb2RlbFxyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlcnNHcm91cERBTCA9IHsgYWRkVXNlcnNUb0dyb3VwIH07XHJcbiIsImltcG9ydCB7IE9wLCBXaGVyZU9wdGlvbnMgfSBmcm9tICdzZXF1ZWxpemUnO1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IgZnJvbSAnaHR0cC1lcnJvcnMnO1xyXG5cclxuaW1wb3J0IHsgRVJST1JTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgVXNlclRvUmVzcG9uc2UsIFVzZXJUb1VwZGF0ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyB1c2Vyc1RvUmVzcG9uc2UsIHVzZXJUb1Jlc3BvbnNlIH0gZnJvbSAnLi4vLi4vbWlkZGxld2FyZXMnO1xyXG5pbXBvcnQgeyBRdWVyeVBhcmFtcyB9IGZyb20gJy4uL3R5cGluZ3MnO1xyXG5cclxuY29uc3QgRU5USVRZX05BTUU6IHN0cmluZyA9ICd1c2VyJztcclxuY29uc3QgREVGQVVMVF9PRkZTRVQ6IG51bWJlciA9IDA7XHJcbmNvbnN0IERFRkFVTFRfTElNSVQ6IG51bWJlciA9IDEwO1xyXG5cclxuY29uc3QgZ2V0QWxsID0gYXN5bmMgKHBhcmFtczogUXVlcnlQYXJhbXMpOiBQcm9taXNlPFVzZXJUb1Jlc3BvbnNlW10+ID0+IHtcclxuICAgIGNvbnN0IHsgbG9naW4sIG9mZnNldFBhcmFtLCBsaW1pdFBhcmFtIH0gPSBwYXJhbXM7XHJcbiAgICBjb25zdCBvZmZzZXQ6IG51bWJlciA9IG9mZnNldFBhcmFtICYmIHBhcnNlSW50KG9mZnNldFBhcmFtLCAxMCkgfHwgREVGQVVMVF9PRkZTRVQ7XHJcbiAgICBjb25zdCBsaW1pdDogbnVtYmVyID0gbGltaXRQYXJhbSAmJiBwYXJzZUludChsaW1pdFBhcmFtLCAxMCkgKyBvZmZzZXQgfHwgREVGQVVMVF9MSU1JVDtcclxuICAgIGNvbnN0IHdoZXJlOiBXaGVyZU9wdGlvbnMgPSBsb2dpbiA/IHsgbG9naW46IHsgWyBPcC5pTGlrZSBdOiBgJSR7IGxvZ2luIH0lYCB9IH0gOiB7fTtcclxuICAgIGNvbnN0IHVzZXJzOiBVc2VyW10gPSBhd2FpdCBVc2VyLmZpbmRBbGwoeyBvZmZzZXQ6IG9mZnNldCwgbGltaXQ6IGxpbWl0LCB3aGVyZSB9KTtcclxuXHJcbiAgICByZXR1cm4gdXNlcnNUb1Jlc3BvbnNlKHVzZXJzKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFVzZXIgPSBhc3luYyAodXNlcl9pZDogc3RyaW5nKTogUHJvbWlzZTxVc2VyVG9SZXNwb25zZT4gPT4ge1xyXG4gICAgY29uc3QgdXNlcjogVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IHdoZXJlOiB7IHVzZXJfaWQ6IHVzZXJfaWQgfSB9KTtcclxuXHJcbiAgICBpZiAoICF1c2VyICkgdGhyb3cgY3JlYXRlRXJyb3IoNDA0LCB7IG1lc3NhZ2U6IGAkeyBFTlRJVFlfTkFNRSB9ICR7IEVSUk9SUy5ub3RGb3VuZCB9YCB9KTtcclxuXHJcbiAgICByZXR1cm4gdXNlclRvUmVzcG9uc2UodXNlcik7XHJcbn07XHJcblxyXG5jb25zdCBpbnNlcnRVc2VyID0gYXN5bmMgKHVzZXJNb2RlbDogVXNlcik6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc3QgdXNlcjogVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IHdoZXJlOiB7IGxvZ2luOiB1c2VyTW9kZWwubG9naW4gfSB9KTtcclxuXHJcbiAgICBpZiAoIHVzZXIgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDAsIHsgbWVzc2FnZTogYCR7IEVOVElUWV9OQU1FIH0gJHsgRVJST1JTLmV4aXN0IH1gIH0pO1xyXG5cclxuICAgIHVzZXJNb2RlbC5zYXZlKCk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKHVzZXJfaWQ6IHN0cmluZywgdXNlclRvVXBkYXRlOiBVc2VyVG9VcGRhdGUpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnN0IHVzZXI6IFVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyB3aGVyZTogeyB1c2VyX2lkOiB1c2VyX2lkIH0gfSk7XHJcblxyXG4gICAgaWYgKCAhdXNlciApIHRocm93IGNyZWF0ZUVycm9yKDQwNCwgeyBtZXNzYWdlOiBgJHsgRU5USVRZX05BTUUgfSAkeyBFUlJPUlMubm90Rm91bmQgfWAgfSk7XHJcblxyXG4gICAgdXNlci5sb2dpbiA9IHVzZXJUb1VwZGF0ZS5sb2dpbjtcclxuICAgIHVzZXIuYWdlID0gdXNlclRvVXBkYXRlLmFnZTtcclxuXHJcbiAgICB1c2VyLnNhdmUoKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAodXNlcl9pZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBjb25zdCB1c2VyOiBVc2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgd2hlcmU6IHsgdXNlcl9pZDogdXNlcl9pZCB9IH0pO1xyXG5cclxuICAgIGlmICggIXVzZXIgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDQsIHsgbWVzc2FnZTogYCR7IEVOVElUWV9OQU1FIH0gJHsgRVJST1JTLm5vdEZvdW5kIH1gIH0pO1xyXG5cclxuICAgIHVzZXIuZGVzdHJveSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJEQUwgPSB7XHJcbiAgICBnZXRBbGwsXHJcbiAgICBnZXRVc2VyLFxyXG4gICAgaW5zZXJ0VXNlcixcclxuICAgIHVwZGF0ZVVzZXIsXHJcbiAgICBkZWxldGVVc2VyXHJcbn07XHJcbiIsImltcG9ydCB7IFNlcXVlbGl6ZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcclxuXHJcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uL21pZGRsZXdhcmVzJztcclxuaW1wb3J0IHsgZGF0YUJhc2VSZXN0b3JpbmcgfSBmcm9tICcuL2JhY2t1cCc7XHJcbmltcG9ydCB7IExPR19NRVNTQUdFUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFVzZXIsIEdyb3VwLCBVc2VyR3JvdXAgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgZGJDb25maWcgZnJvbSAnLi8uLi8uLi9jb25maWcvY29uZmlnJztcclxuXHJcbmNvbnN0IG1vZGVscyA9IFsgVXNlciwgR3JvdXAsIFVzZXJHcm91cCBdO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoXHJcbiAgICBkYkNvbmZpZy5kYXRhYmFzZSxcclxuICAgIGRiQ29uZmlnLnVzZXJuYW1lLFxyXG4gICAgZGJDb25maWcucGFzc3dvcmQsXHJcbiAgICB7XHJcbiAgICAgICAgZGVmaW5lOiB7IHRpbWVzdGFtcHM6IHRydWUgfSxcclxuICAgICAgICBwb3J0OiBkYkNvbmZpZy5wb3J0LFxyXG4gICAgICAgIGRpYWxlY3Q6IGRiQ29uZmlnLmRpYWxlY3QsXHJcbiAgICAgICAgaG9zdDogZGJDb25maWcuaG9zdCxcclxuICAgICAgICBkaWFsZWN0T3B0aW9uczogeyBzc2w6IHRydWUgfSxcclxuICAgICAgICBwb29sOiBkYkNvbmZpZy5wb29sLFxyXG4gICAgICAgIG1vZGVsczogWyAuLi5tb2RlbHMgXVxyXG4gICAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRiQ29ubmVjdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IHNlcXVlbGl6ZS5zeW5jKHsgZm9yY2U6IHRydWUgfSk7XHJcbiAgICBsb2dnZXIuaW5mbyhMT0dfTUVTU0FHRVMuY29ubmVjdGlvblN1Y2Nlc3MpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsb2dnZXIuaW5mbyhMT0dfTUVTU0FHRVMuZGF0YUJhc2VSZXN0b3JpbmdJblByb2Nlc3MpO1xyXG4gICAgICAgIGF3YWl0IGRhdGFCYXNlUmVzdG9yaW5nKCk7XHJcbiAgICAgICAgbG9nZ2VyLmluZm8oTE9HX01FU1NBR0VTLmRhdGFCYXNlUmVzdG9yaW5nQ29tcGxldGUpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBsb2dnZXIuZXJyb3IoeyBuYW1lOiBlcnJvci5uYW1lLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLCBzdGFjazogZXJyb3Iuc3RhY2sgfSk7XHJcbiAgICB9XHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vZGFsL3VzZXIuREFMJztcclxuZXhwb3J0ICogZnJvbSAnLi9kYWwvZ3JvdXAuREFMJztcclxuZXhwb3J0ICogZnJvbSAnLi9kYWwvdXNlci1ncm91cC5EQUwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RiJztcclxuZXhwb3J0ICogZnJvbSAnLi90eXBpbmdzJztcclxuIiwiZXhwb3J0IGNvbnN0IExPR19ESVJOQU1FOiBzdHJpbmcgPSAnbG9ncyc7XHJcblxyXG5leHBvcnQgY29uc3QgSEFORExFOiB7IFsga2V5OiBzdHJpbmcgXTogeyBtZXNzYWdlOiBzdHJpbmc7IH0gfSA9IHtcclxuICAgIFsgJ3VuaGFuZGxlZFJlamVjdGlvbicgXToge1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVbmhhbmRsZWQgUmVqZWN0aW9uIGF0J1xyXG4gICAgfSxcclxuICAgIFsgJ3VuY2F1Z2h0RXhjZXB0aW9uJyBdOiB7XHJcbiAgICAgICAgbWVzc2FnZTogJ1VuY2F1Z2h0IEV4Y2VwdGlvbiB0aHJvd24nXHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBodHRwTG9nZ2VyID0gKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBgcGFyYW1zOiAkeyBKU09OLnN0cmluZ2lmeShyZXF1ZXN0LnBhcmFtcykgfWA7XHJcbiAgICBjb25zdCBib2R5ID0gYGJvZHk6ICR7IEpTT04uc3RyaW5naWZ5KHJlcXVlc3QuYm9keSkgfWA7XHJcbiAgICBjb25zdCBxdWVyeSA9IGBxdWVyeTogJHsgSlNPTi5zdHJpbmdpZnkocmVxdWVzdC5xdWVyeSkgfWA7XHJcbiAgICBjb25zdCB1cmwgPSBgdXJsOiAkeyByZXF1ZXN0LnVybCB9YDtcclxuICAgIGNvbnN0IG1ldGhvZCA9IGBtZXRob2Q6ICR7IHJlcXVlc3QubWV0aG9kIH1gO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQ6IG51bWJlciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGxldCBleGVjdXRpb25UaW1lOiBzdHJpbmc7XHJcbiAgICAgICAgcmVxdWVzdC5vbignY2xvc2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGV4ZWN1dGlvblRpbWUgPSBgZXhlY3V0aW9uVGltZTogJHsgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydCB9IG1sc2A7XHJcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvKGAkeyBtZXRob2QgfSAkeyB1cmwgfSAkeyBwYXJhbXMgfSAkeyBxdWVyeSB9ICR7IGJvZHkgfSAkeyBleGVjdXRpb25UaW1lIH1gKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgbG9nZ2VyLmVycm9yKGVycm9yKSB9XHJcblxyXG4gICAgbmV4dCgpO1xyXG59O1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL2h0dHAtbG9nZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi92YWxpZGF0aW9uLnNlcnZpc2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3BhcnNlcnMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2xvZ2dlcic7XHJcbmV4cG9ydCAqIGZyb20nLi9wcm9jZXNzLnVuaGFuZGxlZEVycm9yJztcclxuIiwiaW1wb3J0IHsgY3JlYXRlTG9nZ2VyLCB0cmFuc3BvcnRzLCBmb3JtYXQgfSBmcm9tICd3aW5zdG9uJ1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm1hYmxlSW5mbyB9IGZyb20gJ2xvZ2Zvcm0nO1xyXG5pbXBvcnQgeyBGaWxlVHJhbnNwb3J0SW5zdGFuY2UgfSBmcm9tICd3aW5zdG9uL2xpYi93aW5zdG9uL3RyYW5zcG9ydHMnO1xyXG5cclxuaW1wb3J0IHsgTE9HX0RJUk5BTUUgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBMT0dfRklMRV9NQVhfU0laRTogbnVtYmVyID0gNTAwMDtcclxuXHJcbmNvbnN0IGNyZWF0ZUZpbGVUcmFuc3BvcnQgPSAoZmlsZW5hbWU6IHN0cmluZywgbGV2ZWw6IHN0cmluZyk6IEZpbGVUcmFuc3BvcnRJbnN0YW5jZSA9PlxyXG4gICAgbmV3IHRyYW5zcG9ydHMuRmlsZSh7IGRpcm5hbWU6IExPR19ESVJOQU1FLCBmaWxlbmFtZSwgbGV2ZWwsIG1heHNpemU6IExPR19GSUxFX01BWF9TSVpFIH0pO1xyXG5cclxuY29uc3QgeyBjb2xvcml6ZSwgY29tYmluZSwgcHJpbnRmLCB0aW1lc3RhbXAgfSA9IGZvcm1hdDtcclxuY29uc3QgZm9ybWF0dGVyID0gcHJpbnRmKCh7IGxldmVsLCBtZXNzYWdlLCB0aW1lc3RhbXAgfTogVHJhbnNmb3JtYWJsZUluZm8pOiBzdHJpbmcgPT4gYCR7IHRpbWVzdGFtcCB9IFskeyBsZXZlbCB9XTogJHsgbWVzc2FnZSB9YCk7XHJcblxyXG5jb25zdCBjb25zb2xlVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydHMuQ29uc29sZSh7IGZvcm1hdDogY29tYmluZShjb2xvcml6ZSgpLCB0aW1lc3RhbXAoKSwgZm9ybWF0dGVyKSB9KTtcclxuY29uc3QgZXJyb3JUcmFuc3BvcnQgPSBjcmVhdGVGaWxlVHJhbnNwb3J0KCdlcnJvcnMubG9nJywgJ2Vycm9yJyk7XHJcbmNvbnN0IHdhcm5UcmFuc3BvcnQgPSBjcmVhdGVGaWxlVHJhbnNwb3J0KCd3YXJuaW5ncy5sb2cnLCAnd2FybicpO1xyXG5jb25zdCBpbmZvVHJhbnNwb3J0ID0gY3JlYXRlRmlsZVRyYW5zcG9ydCgnaW5mby5sb2cnLCAnaW5mbycpO1xyXG5cclxuY29uc3QgbG9nZ2VyVHJhbnNwb3J0cyA9IFsgY29uc29sZVRyYW5zcG9ydCwgZXJyb3JUcmFuc3BvcnQsIGluZm9UcmFuc3BvcnQsIHdhcm5UcmFuc3BvcnQgXTtcclxuXHJcbi8vIExvZ2dlciBpbnN0YW5jZVxyXG5leHBvcnQgY29uc3QgbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKHtcclxuICAgIGV4aXRPbkVycm9yOiBmYWxzZSxcclxuICAgIGZvcm1hdDogY29tYmluZSh0aW1lc3RhbXAoKSwgZm9ybWF0dGVyKSxcclxuICAgIHRyYW5zcG9ydHM6IGxvZ2dlclRyYW5zcG9ydHNcclxufSk7XHJcbiIsImltcG9ydCB7IEdyb3VwLCBHcm91cFRvRGIsIFVzZXIsIFVzZXJUb0FkZCwgVXNlclRvUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3R5cGluZ3MnO1xyXG5pbXBvcnQgeyBVc2VyIGFzIFVzZXJNb2RlbCB9IGZyb20gJy4uL21vZGVscy91c2VyLm1vZGVsJztcclxuaW1wb3J0IHsgR3JvdXAgYXMgR3JvdXBNb2RlbCB9IGZyb20gJy4vLi4vbW9kZWxzL2dyb3VwLm1vZGVsJztcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cFRvUmVzcG9uc2UgPSAoZ3JvdXA6IEdyb3VwKTogR3JvdXAgPT4gKHtcclxuICAgIGdyb3VwX2lkOiBncm91cC5ncm91cF9pZCxcclxuICAgIG5hbWU6IGdyb3VwLm5hbWUsXHJcbiAgICBwZXJtaXNzaW9uczogZ3JvdXAucGVybWlzc2lvbnNcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ3JvdXBzVG9SZXNwb25zZSA9IChncm91cHM6IEdyb3VwW10pOiBHcm91cFtdID0+IGdyb3Vwcy5tYXAoZ3JvdXAgPT4gZ3JvdXBUb1Jlc3BvbnNlKGdyb3VwKSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ3JvdXBUb0RiID0gKGdyb3VwOiBHcm91cFRvRGIsIGdyb3VwX2lkOiBzdHJpbmcpID0+XHJcbiAgICBuZXcgR3JvdXBNb2RlbCh7XHJcbiAgICAgICAgZ3JvdXBfaWQ6IGdyb3VwX2lkLFxyXG4gICAgICAgIG5hbWU6IGdyb3VwLm5hbWUsXHJcbiAgICAgICAgcGVybWlzc2lvbnM6IGdyb3VwLnBlcm1pc3Npb25zXHJcbiAgICB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyVG9SZXNwb25zZSA9ICh1c2VyOiBVc2VyKTogVXNlclRvUmVzcG9uc2UgPT4gKHtcclxuICAgIHVzZXJfaWQ6IHVzZXIudXNlcl9pZCxcclxuICAgIGxvZ2luOiB1c2VyLmxvZ2luLFxyXG4gICAgYWdlOiB1c2VyLmFnZVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2Vyc1RvUmVzcG9uc2UgPSAodXNlcnM6IFVzZXJbXSk6IFVzZXJUb1Jlc3BvbnNlW10gPT4gdXNlcnMubWFwKHVzZXIgPT4gdXNlclRvUmVzcG9uc2UodXNlcikpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJUb0RiID0gKHVzZXI6IFVzZXJUb0FkZCwgdXNlcl9pZDogc3RyaW5nKTogVXNlck1vZGVsID0+XHJcbiAgICBuZXcgVXNlck1vZGVsKHtcclxuICAgICAgICB1c2VyX2lkOiB1c2VyX2lkLFxyXG4gICAgICAgIGxvZ2luOiB1c2VyLmxvZ2luLFxyXG4gICAgICAgIGFnZTogdXNlci5hZ2UsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcclxuICAgIH0pO1xyXG4iLCJpbXBvcnQgeyBIQU5ETEUgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9jZXNzVW5oYW5kbGVkRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBwcm9jZXNzXHJcbiAgICAgICAgLm9uKCd1bmhhbmRsZWRSZWplY3Rpb24nLCAocmVhc29uOiBudW1iZXIsIHByb21pc2U6IFByb21pc2U8YW55PikgPT4ge1xyXG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoYCR7IEhBTkRMRVsgJ3VuaGFuZGxlZFJlamVjdGlvbicgXS5tZXNzYWdlIH06ICR7IEpTT04uc3RyaW5naWZ5KHByb21pc2UpIH0sIHJlYXNvbjogJHsgcmVhc29uIH1gKTtcclxuICAgICAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKCd1bmNhdWdodEV4Y2VwdGlvbicsIChlcnJvcjogRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGAkeyBIQU5ETEVbICd1bmNhdWdodEV4Y2VwdGlvbicgXS5tZXNzYWdlIH0gLSAkeyBlcnJvciB9YCk7XHJcbiAgICAgICAgICAgIHByb2Nlc3MuZXhpdCgxKTtcclxuICAgICAgICB9KTtcclxufTtcclxuIiwiaW1wb3J0ICogYXMgSm9pIGZyb20gJ0BoYXBpL2pvaSc7XHJcbmltcG9ydCB7IGNyZWF0ZVZhbGlkYXRvciB9IGZyb20gJ2V4cHJlc3Mtam9pLXZhbGlkYXRpb24nO1xyXG5cclxuY29uc3QgTUlOX0FHRSA9IDQ7XHJcbmNvbnN0IE1BWF9BR0UgPSAxMzA7XHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRhdG9yID0gY3JlYXRlVmFsaWRhdG9yKCk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVXNlckJvZHlTY2hlbWEgPSBKb2kub2JqZWN0KHtcclxuICAgIGxvZ2luOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIGFnZTogSm9pLm51bWJlcigpLmdyZWF0ZXIoTUlOX0FHRSkubGVzcyhNQVhfQUdFKS5yZXF1aXJlZCgpLFxyXG4gICAgcGFzc3dvcmQ6IEpvaS5zdHJpbmcoKS5hbHBoYW51bSgpLnJlcXVpcmVkKClcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlckJvZHlTY2hlbWEgPSBKb2kub2JqZWN0KHtcclxuICAgIGxvZ2luOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIGFnZTogSm9pLm51bWJlcigpLmdyZWF0ZXIoTUlOX0FHRSkubGVzcyhNQVhfQUdFKS5yZXF1aXJlZCgpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXJRdWVyeVNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgdXNlcl9pZDogSm9pLnN0cmluZygpLnJlcXVpcmVkKClcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkR3JvdXBCb2R5U2NoZW1hID0gSm9pLm9iamVjdCh7XHJcbiAgICBuYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIHBlcm1pc3Npb25zOiBKb2kuYXJyYXkoKS5pdGVtcyhKb2kuc3RyaW5nKCkpLnJlcXVpcmVkKClcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlR3JvdXBRdWVyeVNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgZ3JvdXBfaWQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUdyb3VwQm9keVNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgbmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICBwZXJtaXNzaW9uczogSm9pLmFycmF5KCkuaXRlbXMoSm9pLnN0cmluZygpKS5yZXF1aXJlZCgpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFVzZXJzVG9Hcm91cFF1ZXJ5U2NoZW1hID0gSm9pLm9iamVjdCh7XHJcbiAgICBncm91cF9pZDogSm9pLnN0cmluZygpLnJlcXVpcmVkKClcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVXNlcnNUb0dyb3VwQm9keVNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgdXNlcklkczogSm9pLmFycmF5KCkuaXRlbXMoSm9pLnN0cmluZygpKS5yZXF1aXJlZCgpXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzY2hlbWE6ICduZXcnLFxyXG4gICAgdGFibGVzOiB7XHJcbiAgICAgICAgdXNlcnM6ICd1c2VycycsXHJcbiAgICAgICAgZ3JvdXBzOiAnZ3JvdXBzJyxcclxuICAgICAgICB1c2VyR3JvdXBzOiAndXNlci1ncm91cHMnXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWxsb3dOdWxsLCBCZWxvbmdzVG9NYW55LCBDb2x1bW4sIERhdGFUeXBlLCBNb2RlbCwgUHJpbWFyeUtleSwgVGFibGUsIFVuaXF1ZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgeyBVc2VyR3JvdXAgfSBmcm9tICcuL3VzZXItZ3JvdXAubW9kZWwnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyLm1vZGVsJztcclxuXHJcbmV4cG9ydCB0eXBlIFBlcm1pc3Npb25zVHlwZSA9ICdSRUFEJyB8ICdXUklURScgfCAnREVMRVRFJyB8ICdTSEFSRScgfCAnVVBMT0FEX0ZJTEVTJztcclxuXHJcbkBUYWJsZSh7XHJcbiAgICBzY2hlbWE6IGNvbmZpZy5zY2hlbWEsXHJcbiAgICB0YWJsZU5hbWU6IGNvbmZpZy50YWJsZXMuZ3JvdXBzLFxyXG4gICAgcGFyYW5vaWQ6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcm91cCBleHRlbmRzIE1vZGVsPEdyb3VwPiB7XHJcbiAgICBAQmVsb25nc1RvTWFueSgoKSA9PiBVc2VyLCAoKSA9PiBVc2VyR3JvdXApXHJcbiAgICB1c2VyczogVXNlcltdO1xyXG5cclxuICAgIC8vIGFkZFVzZXJzOiBCZWxvbmdzVG9NYW55QWRkQXNzb2NpYXRpb25zTWl4aW48VXNlciwgc3RyaW5nPjsgSnVzdCBhbiBleGFtcGxlIG9mIGFkZGluZyBtZXRob2RzIHRvIG1vZGVsXHJcblxyXG4gICAgQFByaW1hcnlLZXlcclxuICAgIEBVbmlxdWUodHJ1ZSlcclxuICAgIEBBbGxvd051bGwoZmFsc2UpXHJcbiAgICBAQ29sdW1uXHJcbiAgICBncm91cF9pZDogc3RyaW5nO1xyXG5cclxuICAgIEBDb2x1bW5cclxuICAgIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBAQ29sdW1uKERhdGFUeXBlLkFSUkFZKERhdGFUeXBlLlNUUklORykpXHJcbiAgICBwZXJtaXNzaW9uczogUGVybWlzc2lvbnNUeXBlW107XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi91c2VyLm1vZGVsJztcclxuZXhwb3J0ICogZnJvbSAnLi9ncm91cC5tb2RlbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdXNlci1ncm91cC5tb2RlbCc7XHJcbiIsImltcG9ydCB7IEF1dG9JbmNyZW1lbnQsIENvbHVtbiwgRm9yZWlnbktleSwgTW9kZWwsIFByaW1hcnlLZXksIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi9ncm91cC5tb2RlbCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXIubW9kZWwnO1xyXG5cclxuQFRhYmxlKHtcclxuICAgIHNjaGVtYTogY29uZmlnLnNjaGVtYSxcclxuICAgIHRhYmxlTmFtZTogY29uZmlnLnRhYmxlcy51c2VyR3JvdXBzLFxyXG4gICAgcGFyYW5vaWQ6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJHcm91cCBleHRlbmRzIE1vZGVsPFVzZXJHcm91cD4ge1xyXG4gICAgQFByaW1hcnlLZXlcclxuICAgIEBBdXRvSW5jcmVtZW50XHJcbiAgICBAQ29sdW1uXHJcbiAgICB1c2VyX2dyb3VwX2lkOiBudW1iZXI7XHJcblxyXG4gICAgQEZvcmVpZ25LZXkoKCkgPT4gR3JvdXApXHJcbiAgICBAQ29sdW1uXHJcbiAgICBncm91cF9pZDogc3RyaW5nO1xyXG5cclxuICAgIEBGb3JlaWduS2V5KCgpID0+IFVzZXIpXHJcbiAgICBAQ29sdW1uXHJcbiAgICB1c2VyX2lkOiBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29sdW1uLCBUYWJsZSwgTW9kZWwsIFByaW1hcnlLZXksIEFsbG93TnVsbCwgVW5pcXVlLCBCZWxvbmdzVG9NYW55LCBEYXRhVHlwZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4vZ3JvdXAubW9kZWwnO1xyXG5pbXBvcnQgeyBVc2VyR3JvdXAgfSBmcm9tICcuL3VzZXItZ3JvdXAubW9kZWwnO1xyXG5cclxuQFRhYmxlKHtcclxuICAgIHNjaGVtYTogY29uZmlnLnNjaGVtYSxcclxuICAgIHRhYmxlTmFtZTogY29uZmlnLnRhYmxlcy51c2VycyxcclxuICAgIHBhcmFub2lkOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgTW9kZWw8VXNlcj4ge1xyXG4gICAgQEJlbG9uZ3NUb01hbnkoKCkgPT4gR3JvdXAsICgpID0+IFVzZXJHcm91cClcclxuICAgIGdyb3VwczogR3JvdXBbXTtcclxuXHJcbiAgICBAUHJpbWFyeUtleVxyXG4gICAgQEFsbG93TnVsbChmYWxzZSlcclxuICAgIEBVbmlxdWUodHJ1ZSlcclxuICAgIEBDb2x1bW4oRGF0YVR5cGUuU1RSSU5HKVxyXG4gICAgdXNlcl9pZDogc3RyaW5nO1xyXG5cclxuICAgIEBBbGxvd051bGwoZmFsc2UpXHJcbiAgICBAVW5pcXVlKHRydWUpXHJcbiAgICBAQ29sdW1uXHJcbiAgICBsb2dpbjogc3RyaW5nO1xyXG5cclxuICAgIEBBbGxvd051bGwoZmFsc2UpXHJcbiAgICBAQ29sdW1uXHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuICAgIEBBbGxvd051bGwoZmFsc2UpXHJcbiAgICBAQ29sdW1uXHJcbiAgICBhZ2U6IG51bWJlcjtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgUk9VVEVTID0ge1xyXG4gICAgdXNlclJvdXRlczoge1xyXG4gICAgICAgIHJvb3Q6ICcvJyxcclxuICAgICAgICB1c2VyX2lkOiAnLzp1c2VyX2lkJyxcclxuICAgICAgICB1c2VyczogJy91c2VycydcclxuICAgIH0sXHJcbiAgICBncm91cFJvdXRlczoge1xyXG4gICAgICAgIHJvb3Q6ICcvJyxcclxuICAgICAgICBncm91cF9pZDogJy86Z3JvdXBfaWQvJyxcclxuICAgICAgICB1c2VyczogJy86Z3JvdXBfaWQvdXNlcnMnLFxyXG4gICAgICAgIGdyb3VwczogJy9ncm91cHMnXHJcbiAgICB9LFxyXG4gICAgdXNlckdyb3VwUm91dGVzOiB7XHJcbiAgICAgICAgcm9vdDogJy8nLFxyXG4gICAgICAgIGdyb3VwX2lkOiAnLzpncm91cF9pZCcsXHJcbiAgICAgICAgdXNlcnNfZ3JvdXA6ICcvdXNlcnNfZ3JvdXAnLFxyXG4gICAgfSxcclxuICAgIGludmFsaWQ6IHtcclxuICAgICAgICByb290OiAnKidcclxuICAgIH1cclxufTtcclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBncm91cENvbnRyb2xsZXIsIHVzZXJzR3JvdXBDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMnO1xyXG5pbXBvcnQgeyBub3RBbGxvd2VkIH0gZnJvbSAnLi4vY29udHJvbGxlcnMnO1xyXG5pbXBvcnQge1xyXG4gICAgYWRkR3JvdXBCb2R5U2NoZW1hLFxyXG4gICAgYWRkVXNlcnNUb0dyb3VwQm9keVNjaGVtYSxcclxuICAgIGFkZFVzZXJzVG9Hcm91cFF1ZXJ5U2NoZW1hLFxyXG4gICAgdXBkYXRlR3JvdXBCb2R5U2NoZW1hLFxyXG4gICAgdXBkYXRlR3JvdXBRdWVyeVNjaGVtYSxcclxuICAgIHZhbGlkYXRvclxyXG59IGZyb20gJy4uL21pZGRsZXdhcmVzJztcclxuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgZ3JvdXBSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5jb25zdCByb3V0ZXMgPSBST1VURVMuZ3JvdXBSb3V0ZXM7XHJcblxyXG5ncm91cFJvdXRlci5yb3V0ZShyb3V0ZXMucm9vdClcclxuICAgIC5nZXQoZ3JvdXBDb250cm9sbGVyLmdldEdyb3VwcylcclxuICAgIC5wb3N0KHZhbGlkYXRvci5ib2R5KGFkZEdyb3VwQm9keVNjaGVtYSksIGdyb3VwQ29udHJvbGxlci5hZGRHcm91cClcclxuICAgIC5hbGwobm90QWxsb3dlZCk7XHJcblxyXG5ncm91cFJvdXRlci5yb3V0ZShyb3V0ZXMuZ3JvdXBfaWQpXHJcbiAgICAuZ2V0KGdyb3VwQ29udHJvbGxlci5nZXRHcm91cEJ5SWQpXHJcbiAgICAucHV0KHZhbGlkYXRvci5wYXJhbXModXBkYXRlR3JvdXBRdWVyeVNjaGVtYSksIHZhbGlkYXRvci5ib2R5KHVwZGF0ZUdyb3VwQm9keVNjaGVtYSksIGdyb3VwQ29udHJvbGxlci51cGRhdGVHcm91cClcclxuICAgIC5kZWxldGUoZ3JvdXBDb250cm9sbGVyLmRlbGV0ZUdyb3VwKVxyXG4gICAgLmFsbChub3RBbGxvd2VkKTtcclxuXHJcbmdyb3VwUm91dGVyLnJvdXRlKHJvdXRlcy51c2VycylcclxuICAgIC5wb3N0KFxyXG4gICAgICAgIHZhbGlkYXRvci5wYXJhbXMoYWRkVXNlcnNUb0dyb3VwUXVlcnlTY2hlbWEpLFxyXG4gICAgICAgIHZhbGlkYXRvci5ib2R5KGFkZFVzZXJzVG9Hcm91cEJvZHlTY2hlbWEpLFxyXG4gICAgICAgIHVzZXJzR3JvdXBDb250cm9sbGVyLmFkZFVzZXJzVG9Hcm91cFxyXG4gICAgKVxyXG4gICAgLmFsbChub3RBbGxvd2VkKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdyb3VwUm91dGVyO1xyXG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IGdyb3VwUm91dGVyIGZyb20gJy4vZ3JvdXAtcm91dGVyJztcclxuaW1wb3J0IHVzZXJSb3V0ZXIgZnJvbSAnLi91c2VyLXJvdXRlcic7XHJcbmltcG9ydCBpbnZhbGlkUm91dGVyIGZyb20gJy4vaW52YWxpZC1yb3V0ZXMnO1xyXG5cclxuY29uc3Qgcm9vdFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbnJvb3RSb3V0ZXIudXNlKFJPVVRFUy51c2VyUm91dGVzLnVzZXJzLCB1c2VyUm91dGVyKTtcclxucm9vdFJvdXRlci51c2UoUk9VVEVTLmdyb3VwUm91dGVzLmdyb3VwcywgZ3JvdXBSb3V0ZXIpO1xyXG5yb290Um91dGVyLnVzZShST1VURVMuaW52YWxpZC5yb290LCBpbnZhbGlkUm91dGVyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSb3V0ZXI7XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgaW52YWxpZENvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVycyc7XHJcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IGludmFsaWRSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5jb25zdCByb3V0ZXMgPSBST1VURVMuaW52YWxpZDtcclxuXHJcbmludmFsaWRSb3V0ZXIucm91dGUocm91dGVzLnJvb3QpLmFsbChpbnZhbGlkQ29udHJvbGxlci5ub3RBbGxvd2VkKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludmFsaWRSb3V0ZXI7XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgdXNlcnNDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMnO1xyXG5pbXBvcnQgeyBub3RBbGxvd2VkIH0gZnJvbSAnLi4vY29udHJvbGxlcnMnO1xyXG5pbXBvcnQgeyBhZGRVc2VyQm9keVNjaGVtYSwgdXBkYXRlVXNlckJvZHlTY2hlbWEsIHVwZGF0ZVVzZXJRdWVyeVNjaGVtYSwgdmFsaWRhdG9yIH0gZnJvbSAnLi4vbWlkZGxld2FyZXMnO1xyXG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCB1c2VyUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuY29uc3Qgcm91dGVzID0gUk9VVEVTLnVzZXJSb3V0ZXM7XHJcblxyXG51c2VyUm91dGVyLnJvdXRlKHJvdXRlcy5yb290KVxyXG4gICAgLmdldCh1c2Vyc0NvbnRyb2xsZXIuZ2V0VXNlcnMpXHJcbiAgICAucG9zdCh2YWxpZGF0b3IuYm9keShhZGRVc2VyQm9keVNjaGVtYSksIHVzZXJzQ29udHJvbGxlci5hZGRVc2VyKVxyXG4gICAgLmFsbChub3RBbGxvd2VkKTtcclxuXHJcbnVzZXJSb3V0ZXIucm91dGUocm91dGVzLnVzZXJfaWQpXHJcbiAgICAuZ2V0KHVzZXJzQ29udHJvbGxlci5nZXRVc2VyQnlJZClcclxuICAgIC5wdXQodmFsaWRhdG9yLnBhcmFtcyh1cGRhdGVVc2VyUXVlcnlTY2hlbWEpLCB2YWxpZGF0b3IuYm9keSh1cGRhdGVVc2VyQm9keVNjaGVtYSksIHVzZXJzQ29udHJvbGxlci51cGRhdGVVc2VyKVxyXG4gICAgLmRlbGV0ZSh1c2Vyc0NvbnRyb2xsZXIuZGVsZXRlVXNlcilcclxuICAgIC5hbGwobm90QWxsb3dlZCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyUm91dGVyO1xyXG4iLCJpbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcclxuXHJcbmltcG9ydCB7IGdyb3VwREFMLCBRdWVyeVBhcmFtcyB9IGZyb20gJy4uL2RhdGEtYWNjZXNzJztcclxuaW1wb3J0IHsgR3JvdXAsIEdyb3VwVG9EYiwgR3JvdXBUb1VwZGF0ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcbmltcG9ydCB7IGdyb3VwVG9EYiB9IGZyb20gJy4uL21pZGRsZXdhcmVzJztcclxuaW1wb3J0IHsgdXNlcnNHcm91cFNlcnZpY2UgfSBmcm9tICcuL3VzZXJzLWdyb3VwLnNlcnZpc2UnO1xyXG5cclxuY29uc3QgZ2V0QWxsR3JvdXBzID0gKHF1ZXJ5OiBRdWVyeVBhcmFtcyk6IFByb21pc2U8R3JvdXBbXT4gPT5cclxuICAgIGdyb3VwREFMLmdldEFsbChxdWVyeSk7XHJcblxyXG5jb25zdCBnZXRHcm91cEJ5SWQgPSAoZ3JvdXBfaWQ6IHN0cmluZyk6IFByb21pc2U8R3JvdXA+ID0+XHJcbiAgICBncm91cERBTC5nZXRHcm91cChncm91cF9pZCk7XHJcblxyXG5jb25zdCBhZGRHcm91cCA9IChuZXdHcm91cDogR3JvdXBUb0RiKTogUHJvbWlzZTx2b2lkPiA9PlxyXG4gICAgZ3JvdXBEQUwuaW5zZXJ0R3JvdXAoZ3JvdXBUb0RiKG5ld0dyb3VwLCB1dWlkLnYxKCkudG9TdHJpbmcoKSkpO1xyXG5cclxuY29uc3QgdXBkYXRlR3JvdXAgPSAoZ3JvdXBfaWQ6IHN0cmluZywgZ3JvdXBUb1VwZGF0ZTogR3JvdXBUb1VwZGF0ZSk6IFByb21pc2U8dm9pZD4gPT5cclxuICAgIGdyb3VwREFMLnVwZGF0ZUdyb3VwKGdyb3VwX2lkLCBncm91cFRvVXBkYXRlKTtcclxuXHJcbmNvbnN0IGRlbGV0ZUdyb3VwID0gKGdyb3VwX2lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+XHJcbiAgICBncm91cERBTC5kZWxldGVHcm91cChncm91cF9pZCk7XHJcblxyXG5jb25zdCBhZGRVc2Vyc1RvR3JvdXAgPSB1c2Vyc0dyb3VwU2VydmljZS5hZGRVc2Vyc1RvR3JvdXA7XHJcblxyXG5leHBvcnQgY29uc3QgZ3JvdXBTZXJ2aWNlID0ge1xyXG4gICAgZ2V0QWxsR3JvdXBzLFxyXG4gICAgZ2V0R3JvdXBCeUlkLFxyXG4gICAgYWRkR3JvdXAsXHJcbiAgICB1cGRhdGVHcm91cCxcclxuICAgIGRlbGV0ZUdyb3VwLFxyXG4gICAgYWRkVXNlcnNUb0dyb3VwXHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vdXNlci5zZXJ2aXNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9ncm91cC5zZXJ2aXNlJztcclxuZXhwb3J0ICogZnJvbSAnLi91c2Vycy1ncm91cC5zZXJ2aXNlJ1xyXG4iLCJpbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcclxuXHJcbmltcG9ydCB7IFF1ZXJ5UGFyYW1zLCB1c2VyREFMIH0gZnJvbSAnLi4vZGF0YS1hY2Nlc3MnO1xyXG5pbXBvcnQgeyBVc2VyVG9BZGQsIFVzZXJUb1Jlc3BvbnNlLCBVc2VyVG9VcGRhdGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3R5cGluZ3MnO1xyXG5pbXBvcnQgeyB1c2VyVG9EYiB9IGZyb20gJy4uL21pZGRsZXdhcmVzJztcclxuXHJcbmNvbnN0IGdldEFsbFVzZXJzID0gKHF1ZXJ5OiBRdWVyeVBhcmFtcyk6IFByb21pc2U8VXNlclRvUmVzcG9uc2VbXT4gPT4gdXNlckRBTC5nZXRBbGwocXVlcnkpO1xyXG5cclxuY29uc3QgZ2V0VXNlckJ5SWQgPSAodXNlcl9pZDogc3RyaW5nKTogUHJvbWlzZTxVc2VyVG9SZXNwb25zZT4gPT4gdXNlckRBTC5nZXRVc2VyKHVzZXJfaWQpO1xyXG5cclxuY29uc3QgYWRkVXNlciA9IChuZXdVc2VyOiBVc2VyVG9BZGQpOiBQcm9taXNlPHZvaWQ+ID0+IHVzZXJEQUwuaW5zZXJ0VXNlcih1c2VyVG9EYihuZXdVc2VyLCB1dWlkLnYxKCkudG9TdHJpbmcoKSkpO1xyXG5cclxuY29uc3QgdXBkYXRlVXNlciA9ICh1c2VyX2lkOiBzdHJpbmcsIHVzZXJUb1VwZGF0ZTogVXNlclRvVXBkYXRlKTogUHJvbWlzZTx2b2lkPiA9PiB1c2VyREFMLnVwZGF0ZVVzZXIodXNlcl9pZCwgdXNlclRvVXBkYXRlKTtcclxuXHJcbmNvbnN0IGRlbGV0ZVVzZXIgPSAodXNlcl9pZDogc3RyaW5nKSA9PiB1c2VyREFMLmRlbGV0ZVVzZXIodXNlcl9pZCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclNlcnZpY2UgPSB7XHJcbiAgICBnZXRBbGxVc2VycyxcclxuICAgIGdldFVzZXJCeUlkLFxyXG4gICAgYWRkVXNlcixcclxuICAgIHVwZGF0ZVVzZXIsXHJcbiAgICBkZWxldGVVc2VyXHJcbn07XHJcbiIsImltcG9ydCB7IHVzZXJzR3JvdXBEQUwgfSBmcm9tICcuLi9kYXRhLWFjY2Vzcyc7XHJcblxyXG5jb25zdCBhZGRVc2Vyc1RvR3JvdXAgPSBhc3luYyAoZ3JvdXBfaWQ6IHN0cmluZywgdXNlcl9pZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+ID0+XHJcbiAgICBhd2FpdCB1c2Vyc0dyb3VwREFMLmFkZFVzZXJzVG9Hcm91cChncm91cF9pZCwgdXNlcl9pZHMpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJzR3JvdXBTZXJ2aWNlID0geyBhZGRVc2Vyc1RvR3JvdXAgfTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGhhcGkvam9pXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1qb2ktdmFsaWRhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwLWVycm9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplLXR5cGVzY3JpcHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3aW5zdG9uXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=