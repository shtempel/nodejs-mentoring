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
/* harmony import */ var _middlewares_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middlewares/logger */ "./src/middlewares/logger.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ "./src/routes/index.ts");
/* harmony import */ var _middlewares_http_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middlewares/http-logger */ "./src/middlewares/http-logger.ts");
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
app.use(_middlewares_http_logger__WEBPACK_IMPORTED_MODULE_6__["default"]);
app.use(_routes__WEBPACK_IMPORTED_MODULE_5__["default"]);
Object(_middlewares__WEBPACK_IMPORTED_MODULE_3__["processUnhandledError"])();
app.listen(_constants__WEBPACK_IMPORTED_MODULE_1__["PORT"], () => __awaiter(void 0, void 0, void 0, function* () {
    _middlewares_logger__WEBPACK_IMPORTED_MODULE_4__["logger"].info(`${_constants__WEBPACK_IMPORTED_MODULE_1__["LOG_MESSAGES"].portListening} ${_constants__WEBPACK_IMPORTED_MODULE_1__["PORT"]}`);
    try {
        yield Object(_data_access__WEBPACK_IMPORTED_MODULE_2__["dbConnect"])();
    }
    catch (error) {
        _middlewares_logger__WEBPACK_IMPORTED_MODULE_4__["logger"].error(error);
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
    portListening: 'Listening on port...'
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
/* harmony import */ var _middlewares_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares/logger */ "./src/middlewares/logger.ts");
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
        _middlewares_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error(`status: ${error.status || 500}, message: ${error.message}, ${getLogMessage(request)}`);
        response.status(error.status || 500).send({ error: { message: error.message } });
    }
});
const notAllowed = (request, response) => {
    let error = http_errors__WEBPACK_IMPORTED_MODULE_0___default()(405, _constants__WEBPACK_IMPORTED_MODULE_1__["ERRORS"].methodNotAllowed);
    _middlewares_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error(`status: ${405}, message: ${error.message}`);
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
/* harmony import */ var _middlewares_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares/logger */ "./src/middlewares/logger.ts");



const notAllowed = (request, response) => {
    let error = http_errors__WEBPACK_IMPORTED_MODULE_0___default()(404, _constants__WEBPACK_IMPORTED_MODULE_1__["ERRORS"].routNotExist);
    _middlewares_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error(`status: ${404}, message: ${error.message}`);
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
/*! exports provided: users, groups, userGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groups", function() { return groups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userGroups", function() { return userGroups; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

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
/* harmony import */ var _middlewares_parsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../middlewares/parsers */ "./src/middlewares/parsers.ts");
/* harmony import */ var _models_group_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/group.model */ "./src/models/group.model.ts");
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
    const groups = yield _models_group_model__WEBPACK_IMPORTED_MODULE_3__["Group"].findAll({ offset: offset, limit: limit, where });
    return Object(_middlewares_parsers__WEBPACK_IMPORTED_MODULE_2__["groupsToResponse"])(groups);
});
const getGroup = (group_id) => __awaiter(void 0, void 0, void 0, function* () {
    const group = yield _models_group_model__WEBPACK_IMPORTED_MODULE_3__["Group"].findOne({ where: { group_id: group_id } });
    if (!group)
        throw http_errors__WEBPACK_IMPORTED_MODULE_0___default()(404, { message: `${ENTITY_NAME} ERRORS.notFound` });
    return Object(_middlewares_parsers__WEBPACK_IMPORTED_MODULE_2__["groupToResponse"])(group);
});
const insertGroup = (groupModel) => __awaiter(void 0, void 0, void 0, function* () {
    const group = yield _models_group_model__WEBPACK_IMPORTED_MODULE_3__["Group"].findOne({ where: { name: groupModel.name } });
    if (group)
        throw http_errors__WEBPACK_IMPORTED_MODULE_0___default()(400, { message: `${ENTITY_NAME} ERRORS.exist` });
    groupModel.save();
});
const updateGroup = (group_id, groupToUpdate) => __awaiter(void 0, void 0, void 0, function* () {
    const group = yield _models_group_model__WEBPACK_IMPORTED_MODULE_3__["Group"].findOne({ where: { group_id: group_id } });
    if (!group)
        throw http_errors__WEBPACK_IMPORTED_MODULE_0___default()(404, { message: `${ENTITY_NAME} ERRORS.notFound ` });
    group.name = groupToUpdate.name;
    group.permissions = groupToUpdate.permissions;
    group.save();
});
const deleteGroup = (group_id) => __awaiter(void 0, void 0, void 0, function* () {
    const group = yield _models_group_model__WEBPACK_IMPORTED_MODULE_3__["Group"].findOne({ where: { group_id: group_id } });
    if (!group)
        throw http_errors__WEBPACK_IMPORTED_MODULE_0___default()(404, { message: `${ENTITY_NAME} ERRORS.notFound` });
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

/***/ "./src/data-access/dal/userDAL.ts":
/*!****************************************!*\
  !*** ./src/data-access/dal/userDAL.ts ***!
  \****************************************/
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
/* harmony import */ var _middlewares_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middlewares/logger */ "./src/middlewares/logger.ts");
/* harmony import */ var _models___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/ */ "./src/models/index.ts");
/* harmony import */ var _backup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backup */ "./src/data-access/backup.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
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






const models = [
    _models___WEBPACK_IMPORTED_MODULE_2__["User"],
    _models___WEBPACK_IMPORTED_MODULE_2__["Group"],
    _models___WEBPACK_IMPORTED_MODULE_2__["UserGroup"]
];
const sequelize = new sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Sequelize"](_config_config__WEBPACK_IMPORTED_MODULE_5__["default"].database, _config_config__WEBPACK_IMPORTED_MODULE_5__["default"].username, _config_config__WEBPACK_IMPORTED_MODULE_5__["default"].password, {
    define: {
        timestamps: true
    },
    port: _config_config__WEBPACK_IMPORTED_MODULE_5__["default"].port,
    dialect: _config_config__WEBPACK_IMPORTED_MODULE_5__["default"].dialect,
    host: _config_config__WEBPACK_IMPORTED_MODULE_5__["default"].host,
    dialectOptions: { ssl: true },
    pool: _config_config__WEBPACK_IMPORTED_MODULE_5__["default"].pool,
    models: [...models]
});
const dbConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    yield sequelize.sync({ force: true });
    _middlewares_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].info(_constants__WEBPACK_IMPORTED_MODULE_4__["LOG_MESSAGES"].connectionSuccess);
    try {
        _middlewares_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].info('Database restoring in process...');
        yield _models___WEBPACK_IMPORTED_MODULE_2__["User"].bulkCreate(_backup__WEBPACK_IMPORTED_MODULE_3__["users"]);
        yield _models___WEBPACK_IMPORTED_MODULE_2__["Group"].bulkCreate(_backup__WEBPACK_IMPORTED_MODULE_3__["groups"]);
        yield _models___WEBPACK_IMPORTED_MODULE_2__["UserGroup"].bulkCreate(_backup__WEBPACK_IMPORTED_MODULE_3__["userGroups"]);
        _middlewares_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].info('Database restoring complete!');
    }
    catch (error) {
        _middlewares_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].error({ name: error.name, message: error.message, stack: error.stack });
        throw error;
    }
});


/***/ }),

/***/ "./src/data-access/index.ts":
/*!**********************************!*\
  !*** ./src/data-access/index.ts ***!
  \**********************************/
/*! exports provided: userDAL, groupDAL, usersGroupDAL, sequelize, dbConnect, userToResponse, usersToResponse, userToDb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dal_userDAL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dal/userDAL */ "./src/data-access/dal/userDAL.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userDAL", function() { return _dal_userDAL__WEBPACK_IMPORTED_MODULE_0__["userDAL"]; });

/* harmony import */ var _dal_group_DAL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dal/group.DAL */ "./src/data-access/dal/group.DAL.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupDAL", function() { return _dal_group_DAL__WEBPACK_IMPORTED_MODULE_1__["groupDAL"]; });

/* harmony import */ var _dal_user_group_DAL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dal/user-group.DAL */ "./src/data-access/dal/user-group.DAL.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usersGroupDAL", function() { return _dal_user_group_DAL__WEBPACK_IMPORTED_MODULE_2__["usersGroupDAL"]; });

/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./db */ "./src/data-access/db.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sequelize", function() { return _db__WEBPACK_IMPORTED_MODULE_3__["sequelize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dbConnect", function() { return _db__WEBPACK_IMPORTED_MODULE_3__["dbConnect"]; });

/* harmony import */ var _users_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.parser */ "./src/data-access/users.parser.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userToResponse", function() { return _users_parser__WEBPACK_IMPORTED_MODULE_4__["userToResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usersToResponse", function() { return _users_parser__WEBPACK_IMPORTED_MODULE_4__["usersToResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userToDb", function() { return _users_parser__WEBPACK_IMPORTED_MODULE_4__["userToDb"]; });








/***/ }),

/***/ "./src/data-access/users.parser.ts":
/*!*****************************************!*\
  !*** ./src/data-access/users.parser.ts ***!
  \*****************************************/
/*! exports provided: userToResponse, usersToResponse, userToDb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userToResponse", function() { return userToResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersToResponse", function() { return usersToResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userToDb", function() { return userToDb; });
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/user.model */ "./src/models/user.model.ts");

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./src/middlewares/logger.ts");

/* harmony default export */ __webpack_exports__["default"] = ((request, response, next) => {
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
});


/***/ }),

/***/ "./src/middlewares/index.ts":
/*!**********************************!*\
  !*** ./src/middlewares/index.ts ***!
  \**********************************/
/*! exports provided: validator, addUserBodySchema, updateUserBodySchema, updateUserQuerySchema, addGroupBodySchema, updateGroupQuerySchema, updateGroupBodySchema, addUsersToGroupQuerySchema, addUsersToGroupBodySchema, groupToResponse, groupsToResponse, groupToDb, userToResponse, usersToResponse, userToDb, processUnhandledError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validation_servise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation.servise */ "./src/middlewares/validation.servise.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validator", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_0__["validator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addUserBodySchema", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_0__["addUserBodySchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateUserBodySchema", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_0__["updateUserBodySchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateUserQuerySchema", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_0__["updateUserQuerySchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addGroupBodySchema", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_0__["addGroupBodySchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateGroupQuerySchema", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_0__["updateGroupQuerySchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateGroupBodySchema", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_0__["updateGroupBodySchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addUsersToGroupQuerySchema", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_0__["addUsersToGroupQuerySchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addUsersToGroupBodySchema", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_0__["addUsersToGroupBodySchema"]; });

/* harmony import */ var _parsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsers */ "./src/middlewares/parsers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupToResponse", function() { return _parsers__WEBPACK_IMPORTED_MODULE_1__["groupToResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupsToResponse", function() { return _parsers__WEBPACK_IMPORTED_MODULE_1__["groupsToResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupToDb", function() { return _parsers__WEBPACK_IMPORTED_MODULE_1__["groupToDb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userToResponse", function() { return _parsers__WEBPACK_IMPORTED_MODULE_1__["userToResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usersToResponse", function() { return _parsers__WEBPACK_IMPORTED_MODULE_1__["usersToResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userToDb", function() { return _parsers__WEBPACK_IMPORTED_MODULE_1__["userToDb"]; });

/* harmony import */ var _process_unhandledError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./process.unhandledError */ "./src/middlewares/process.unhandledError.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "processUnhandledError", function() { return _process_unhandledError__WEBPACK_IMPORTED_MODULE_2__["processUnhandledError"]; });

/* harmony import */ var _http_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-logger */ "./src/middlewares/http-logger.ts");
/* empty/unused harmony star reexport */





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

const LOG_DIRNAME = 'logs';
const LOG_FILE_MAX_SIZE = 5000;
const { colorize, combine, printf, timestamp } = winston__WEBPACK_IMPORTED_MODULE_0__["format"];
const formatter = printf(({ level, message, timestamp }) => `${timestamp} [${level}]: ${message}`);
const consoleTransport = new winston__WEBPACK_IMPORTED_MODULE_0__["transports"].Console({ format: combine(colorize(), timestamp(), formatter) });
const errorTransport = new winston__WEBPACK_IMPORTED_MODULE_0__["transports"].File({ dirname: LOG_DIRNAME, filename: 'errors.log', level: 'error', maxsize: LOG_FILE_MAX_SIZE });
const warnTransport = new winston__WEBPACK_IMPORTED_MODULE_0__["transports"].File({ dirname: LOG_DIRNAME, filename: 'warnings.log', level: 'warn', maxsize: LOG_FILE_MAX_SIZE });
const infoTransport = new winston__WEBPACK_IMPORTED_MODULE_0__["transports"].File({ dirname: LOG_DIRNAME, filename: 'info.log', level: 'info', maxsize: LOG_FILE_MAX_SIZE });
const logger = Object(winston__WEBPACK_IMPORTED_MODULE_0__["createLogger"])({
    exitOnError: false,
    format: combine(timestamp(), formatter),
    transports: [
        consoleTransport,
        errorTransport,
        infoTransport,
        warnTransport
    ]
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
    Object(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Unique"])(true),
    Object(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["AllowNull"])(false),
    Object(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Column"])(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["DataType"].STRING),
    sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Column"],
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
/* harmony import */ var _invalid_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invalid-routes */ "./src/routes/invalid-routes.ts");
/* harmony import */ var _user_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-router */ "./src/routes/user-router.ts");





const rootRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
rootRouter.use(_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].userRoutes.users, _user_router__WEBPACK_IMPORTED_MODULE_4__["default"]);
rootRouter.use(_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].groupRoutes.groups, _group_router__WEBPACK_IMPORTED_MODULE_2__["default"]);
rootRouter.use(_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].invalid.root, _invalid_routes__WEBPACK_IMPORTED_MODULE_3__["default"]);
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


const getAllUsers = (query) => _data_access__WEBPACK_IMPORTED_MODULE_1__["userDAL"].getAll(query);
const getUserById = (user_id) => _data_access__WEBPACK_IMPORTED_MODULE_1__["userDAL"].getUser(user_id);
const addUser = (newUser) => _data_access__WEBPACK_IMPORTED_MODULE_1__["userDAL"].insertUser(Object(_data_access__WEBPACK_IMPORTED_MODULE_1__["userToDb"])(newUser, uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString()));
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
/* harmony import */ var _data_access_dal_user_group_DAL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-access/dal/user-group.DAL */ "./src/data-access/dal/user-group.DAL.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const addUsersToGroup = (group_id, user_ids) => __awaiter(void 0, void 0, void 0, function* () { return yield _data_access_dal_user_group_DAL__WEBPACK_IMPORTED_MODULE_0__["usersGroupDAL"].addUsersToGroup(group_id, user_ids); });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2dyb3VwLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2hlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2ludmFsaWQuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvdXNlcnMtZ3JvdXAuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvdXNlcnMuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1hY2Nlc3MvYmFja3VwLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLWFjY2Vzcy9kYWwvZ3JvdXAuREFMLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLWFjY2Vzcy9kYWwvdXNlci1ncm91cC5EQUwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtYWNjZXNzL2RhbC91c2VyREFMLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLWFjY2Vzcy9kYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1hY2Nlc3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtYWNjZXNzL3VzZXJzLnBhcnNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlcy9odHRwLWxvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pZGRsZXdhcmVzL2xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvcGFyc2Vycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvcHJvY2Vzcy51bmhhbmRsZWRFcnJvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvdmFsaWRhdGlvbi5zZXJ2aXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvZ3JvdXAubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3VzZXItZ3JvdXAubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy91c2VyLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvZ3JvdXAtcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9pbnZhbGlkLXJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3VzZXItcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9ncm91cC5zZXJ2aXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdXNlci5zZXJ2aXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy91c2Vycy1ncm91cC5zZXJ2aXNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBoYXBpL2pvaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLWpvaS12YWxpZGF0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cC1lcnJvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemUtdHlwZXNjcmlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV1aWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5zdG9uXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUFBLE1BQU0sT0FBTyxHQUFZLFVBQVUsQ0FBQztBQUVyQjtJQUNYLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLElBQUksRUFBRSxvREFBb0Q7SUFDMUQsSUFBSSxFQUFFLElBQUk7SUFDVixRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsUUFBUSxFQUFFLGtFQUFrRTtJQUM1RSxJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUUsQ0FBQztRQUNOLEdBQUcsRUFBRSxDQUFDO1FB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QUFVO0NBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCZ0U7QUFFbEUsTUFBTSxlQUFlLEdBQUcsQ0FBTyxRQUFnQixFQUFFLFFBQWtCLEVBQWdCLEVBQUUsa0RBQ2pGLGFBQU0sNkVBQWEsQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxLQUFDO0FBRXJELE1BQU0saUJBQWlCLEdBQUcsRUFBRSxlQUFlLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7O0FDTHJELHNDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InNlcnZlci1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAudHNcIik7XG4iLCJpbXBvcnQgeyBEaWFsZWN0IH0gZnJvbSAnc2VxdWVsaXplJztcclxuXHJcbmNvbnN0IGRpYWxlY3Q6IERpYWxlY3QgPSAncG9zdGdyZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGlhbGVjdDogZGlhbGVjdCxcclxuICAgIGhvc3Q6IFwiZWMyLTU0LTI0Ni0xMDAtMjQ2LmV1LXdlc3QtMS5jb21wdXRlLmFtYXpvbmF3cy5jb21cIixcclxuICAgIHBvcnQ6IDU0MzIsXHJcbiAgICBkYXRhYmFzZTogXCJkM292czBraGo4MmEzaFwiLFxyXG4gICAgdXNlcm5hbWU6IFwieGRkcXZyZnp3ZHdlY3JcIixcclxuICAgIHBhc3N3b3JkOiBcIjNmNDFiNTA0N2NkZGJiNTI2MWQwN2UyYTZlODJlYjNmNjQ1MWRlOGIzODg1ZTAxY2Y2MTM2YWY1OTU0ZDdhMzdcIixcclxuICAgIHBvb2w6IHtcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgbWF4OiA1LFxyXG4gICAgICAgIGFjcXVpcmU6IDMwMDAwLFxyXG4gICAgICAgIGlkbGU6IDEwMDAwXHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCBleHByZXNzLCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBMT0dfTUVTU0FHRVMsIFBPUlQgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGRiQ29ubmVjdCB9IGZyb20gJy4vZGF0YS1hY2Nlc3MnO1xyXG5pbXBvcnQgeyBwcm9jZXNzVW5oYW5kbGVkRXJyb3IgfSBmcm9tICcuL21pZGRsZXdhcmVzJztcclxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9taWRkbGV3YXJlcy9sb2dnZXInO1xyXG5pbXBvcnQgcm9vdFJvdXRlciBmcm9tICcuL3JvdXRlcyc7XHJcbmltcG9ydCBodHRwTG9nZ2VyIGZyb20gJy4vbWlkZGxld2FyZXMvaHR0cC1sb2dnZXInO1xyXG5cclxuY29uc3QgYXBwOiBBcHBsaWNhdGlvbiA9IGV4cHJlc3MoKTtcclxuXHJcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xyXG5hcHAudXNlKGh0dHBMb2dnZXIpO1xyXG5hcHAudXNlKHJvb3RSb3V0ZXIpO1xyXG5cclxucHJvY2Vzc1VuaGFuZGxlZEVycm9yKCk7XHJcblxyXG5hcHAubGlzdGVuKFBPUlQsIGFzeW5jICgpID0+IHtcclxuICAgIGxvZ2dlci5pbmZvKGAkeyBMT0dfTUVTU0FHRVMucG9ydExpc3RlbmluZyB9ICR7IFBPUlQgfWApO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgbG9nZ2VyLmVycm9yKGVycm9yKTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxufSk7XHJcbiIsImV4cG9ydCBjb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA0MDAxO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVSUk9SUyA9IHtcclxuICAgIG5vdEZvdW5kOiAnbm90IGZvdW5kIScsXHJcbiAgICBncm91cE5vdEZvdW5kOiAnR3JvdXAgbm90IEZvdW5kIScsXHJcbiAgICBtZXRob2ROb3RBbGxvd2VkOiAnTWV0aG9kIG5vdCBhbGxvd2VkIGhlcmUhJyxcclxuICAgIGV4aXN0OiAnYWxyZWFkeSBleGlzdCEnLFxyXG4gICAgcm91dE5vdEV4aXN0OiAnVGhpcyByb3V0ZSBpcyBub3QgZXhpc3QhJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19NRVNTQUdFUyA9IHtcclxuICAgIGNvbm5lY3Rpb25TdWNjZXNzOiAnQ29ubmVjdGlvbiBoYXMgYmVlbiBlc3RhYmxpc2hlZCBzdWNjZXNzZnVsbHkhJyxcclxuICAgIGNvbm5lY3Rpb25GYWlsZWQ6ICdVbmFibGUgdG8gY29ubmVjdCB0byB0aGUgZGF0YWJhc2U6JyxcclxuICAgIHBvcnRMaXN0ZW5pbmc6ICdMaXN0ZW5pbmcgb24gcG9ydC4uLidcclxufTtcclxuXHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBncm91cFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IHJlcXVlc3RIZWxwZXIgfSBmcm9tICcuL2hlbHBlcic7XHJcblxyXG5jb25zdCBnZXRHcm91cHMgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiBncm91cFNlcnZpY2UuZ2V0QWxsR3JvdXBzKHJlcXVlc3QucXVlcnkpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCBnZXRHcm91cEJ5SWQgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiBncm91cFNlcnZpY2UuZ2V0R3JvdXBCeUlkKHJlcXVlc3QucGFyYW1zLmdyb3VwX2lkKSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuY29uc3QgYWRkR3JvdXAgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiBncm91cFNlcnZpY2UuYWRkR3JvdXAocmVxdWVzdC5ib2R5KSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuY29uc3QgYWRkVXNlcnNUb0dyb3VwID0gKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gZ3JvdXBTZXJ2aWNlLmFkZFVzZXJzVG9Hcm91cChyZXF1ZXN0LnBhcmFtcy5ncm91cF9pZCwgcmVxdWVzdC5ib2R5LnVzZXJJZHMpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCB1cGRhdGVHcm91cCA9IChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IGdyb3VwU2VydmljZS51cGRhdGVHcm91cChyZXF1ZXN0LnBhcmFtcy5ncm91cF9pZCwgcmVxdWVzdC5ib2R5KSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuY29uc3QgZGVsZXRlR3JvdXAgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXF1ZXN0SGVscGVyKCgpID0+XHJcbiAgICBncm91cFNlcnZpY2UuZGVsZXRlR3JvdXAocmVxdWVzdC5wYXJhbXMuZ3JvdXBfaWQpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5leHBvcnQgY29uc3QgZ3JvdXBDb250cm9sbGVyID0ge1xyXG4gICAgZ2V0R3JvdXBzLFxyXG4gICAgZ2V0R3JvdXBCeUlkLFxyXG4gICAgYWRkR3JvdXAsXHJcbiAgICB1cGRhdGVHcm91cCxcclxuICAgIGRlbGV0ZUdyb3VwLFxyXG4gICAgYWRkVXNlcnNUb0dyb3VwXHJcbn07XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBjcmVhdGVFcnJvciwgeyBIdHRwRXJyb3IgfSBmcm9tICdodHRwLWVycm9ycyc7XHJcblxyXG5pbXBvcnQgeyBFUlJPUlMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi9taWRkbGV3YXJlcy9sb2dnZXInO1xyXG5cclxuY29uc3QgZ2V0TG9nTWVzc2FnZSA9IChyZXF1ZXN0OiBSZXF1ZXN0KTogc3RyaW5nID0+IHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IGBwYXJhbXM6ICR7IEpTT04uc3RyaW5naWZ5KHJlcXVlc3QucGFyYW1zKSB9YDtcclxuICAgIGNvbnN0IGJvZHkgPSBgYm9keTogJHsgSlNPTi5zdHJpbmdpZnkocmVxdWVzdC5ib2R5KSB9YDtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYHF1ZXJ5OiAkeyBKU09OLnN0cmluZ2lmeShyZXF1ZXN0LnF1ZXJ5KSB9YDtcclxuICAgIGNvbnN0IHVybCA9IGB1cmw6ICR7IHJlcXVlc3QudXJsIH1gO1xyXG4gICAgY29uc3QgbWV0aG9kID0gYG1ldGhvZDogJHsgcmVxdWVzdC5tZXRob2QgfWA7XHJcblxyXG4gICAgcmV0dXJuIGAkeyBtZXRob2QgfSAkeyB1cmwgfSAkeyBwYXJhbXMgfSAkeyBxdWVyeSB9ICR7IGJvZHkgfWA7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdEhlbHBlciA9IGFzeW5jIChmbjogYW55LCByZXNwb25zZTogUmVzcG9uc2UsIHJlcXVlc3Q6IFJlcXVlc3QpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZuKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgICAgICAgPyByZXNwb25zZS5zZW5kKHsgZGF0YSwgc3RhdHVzOiAnc3VjY2VzcycgfSlcclxuICAgICAgICAgICAgOiByZXNwb25zZS5zZW5kKHsgc3RhdHVzOiAnc3VjY2VzcycgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGxvZ2dlci5lcnJvcihgc3RhdHVzOiAkeyBlcnJvci5zdGF0dXMgfHwgNTAwIH0sIG1lc3NhZ2U6ICR7IGVycm9yLm1lc3NhZ2UgfSwgJHsgZ2V0TG9nTWVzc2FnZShyZXF1ZXN0KSB9YCk7XHJcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzKGVycm9yLnN0YXR1cyB8fCA1MDApLnNlbmQoeyBlcnJvcjogeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0gfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgbm90QWxsb3dlZCA9IChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgIGxldCBlcnJvcjogSHR0cEVycm9yID0gY3JlYXRlRXJyb3IoNDA1LCBFUlJPUlMubWV0aG9kTm90QWxsb3dlZCk7XHJcbiAgICBsb2dnZXIuZXJyb3IoYHN0YXR1czogJHsgNDA1IH0sIG1lc3NhZ2U6ICR7IGVycm9yLm1lc3NhZ2UgfWApO1xyXG5cclxuICAgIHJlc3BvbnNlLnN0YXR1cyhlcnJvci5zdGF0dXMpLnNlbmQoeyBzdGF0dXM6IGVycm9yLnN0YXR1cywgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi91c2Vycy5jb250cm9sbGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9ncm91cC5jb250cm9sbGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi91c2Vycy1ncm91cC5jb250cm9sbGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9pbnZhbGlkLmNvbnRyb2xsZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2hlbHBlcic7XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBjcmVhdGVFcnJvciwgeyBIdHRwRXJyb3IgfSBmcm9tICdodHRwLWVycm9ycyc7XHJcblxyXG5pbXBvcnQgeyBFUlJPUlMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi9taWRkbGV3YXJlcy9sb2dnZXInO1xyXG5cclxuY29uc3Qgbm90QWxsb3dlZCA9IChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgIGxldCBlcnJvcjogSHR0cEVycm9yID0gY3JlYXRlRXJyb3IoNDA0LCBFUlJPUlMucm91dE5vdEV4aXN0KTtcclxuXHJcbiAgICBsb2dnZXIuZXJyb3IoYHN0YXR1czogJHsgNDA0IH0sIG1lc3NhZ2U6ICR7IGVycm9yLm1lc3NhZ2UgfWApO1xyXG4gICAgcmVzcG9uc2Uuc3RhdHVzKGVycm9yLnN0YXR1cykuc2VuZCh7IHN0YXR1czogZXJyb3Iuc3RhdHVzLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGludmFsaWRDb250cm9sbGVyID0geyBub3RBbGxvd2VkIH07XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyB1c2Vyc0dyb3VwU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgcmVxdWVzdEhlbHBlciB9IGZyb20gJy4vaGVscGVyJztcclxuXHJcbmNvbnN0IGFkZFVzZXJzVG9Hcm91cCA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJzR3JvdXBTZXJ2aWNlLmFkZFVzZXJzVG9Hcm91cChyZXF1ZXN0LnBhcmFtcy5ncm91cF9pZCwgcmVxdWVzdC5ib2R5LnVzZXJJZHMpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlcnNHcm91cENvbnRyb2xsZXIgPSB7IGFkZFVzZXJzVG9Hcm91cCB9O1xyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgdXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IHJlcXVlc3RIZWxwZXIgfSBmcm9tICcuL2hlbHBlcic7XHJcblxyXG5jb25zdCBnZXRVc2VycyA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJTZXJ2aWNlLmdldEFsbFVzZXJzKHJlcXVlc3QucXVlcnkpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCBnZXRVc2VyQnlJZCA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJTZXJ2aWNlLmdldFVzZXJCeUlkKHJlcXVlc3QucGFyYW1zLnVzZXJfaWQpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCBhZGRVc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gdXNlclNlcnZpY2UuYWRkVXNlcihyZXF1ZXN0LmJvZHkpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gdXNlclNlcnZpY2UudXBkYXRlVXNlcihyZXF1ZXN0LnBhcmFtcy51c2VyX2lkLCByZXF1ZXN0LmJvZHkpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gdXNlclNlcnZpY2UuZGVsZXRlVXNlcihyZXF1ZXN0LnBhcmFtcy51c2VyX2lkKSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJzQ29udHJvbGxlciA9IHtcclxuICAgIGdldFVzZXJzLFxyXG4gICAgZGVsZXRlVXNlcixcclxuICAgIHVwZGF0ZVVzZXIsXHJcbiAgICBnZXRVc2VyQnlJZCxcclxuICAgIGFkZFVzZXJcclxufTtcclxuIiwiaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90eXBpbmdzJztcclxuaW1wb3J0IHsgUGVybWlzc2lvbnNUeXBlIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyczogVXNlcltdID0gW1xyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6ICdhbmFraW4nLFxyXG4gICAgICAgIGxvZ2luOiAnQW5ha2luU2t5d2Fsa2VyJyxcclxuICAgICAgICBwYXNzd29yZDogJ2FuYWtpbnBhc3MnLFxyXG4gICAgICAgIGFnZTogMzJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogJ21hY2VXaW5kdScsXHJcbiAgICAgICAgbG9naW46ICdNYWNlV2luZHUnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnbWFjZXBhc3MnLFxyXG4gICAgICAgIGFnZTogNzJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogJ2x1a2VTa3l3YWxrZXInLFxyXG4gICAgICAgIGxvZ2luOiAnTHVrZVNreXdhbGtlcicsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdsdWtlcGFzcycsXHJcbiAgICAgICAgYWdlOiAyM1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiAnYzNwMCcsXHJcbiAgICAgICAgbG9naW46ICdDLTNQTycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdjM3AwcGFzcycsXHJcbiAgICAgICAgYWdlOiAzMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiAnZGFydGhNYXVsJyxcclxuICAgICAgICBsb2dpbjogJ0RhcnRoTWF1bCcsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdkYXJ0aHBhc3MnLFxyXG4gICAgICAgIGFnZTogNDRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdRdWlHb25KaW5uJyxcclxuICAgICAgICBwYXNzd29yZDogJ3F1aXBhc3MnLFxyXG4gICAgICAgIGFnZTogODBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdPYmlXYW5LZW5vYmknLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnb2JpcGFzcycsXHJcbiAgICAgICAgYWdlOiA0N1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiAncGFscGF0aW5lJyxcclxuICAgICAgICBsb2dpbjogJ1BhbHBhdGluZScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdwYWxwYXRpbmVwYXNzJyxcclxuICAgICAgICBhZ2U6IDgyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiAnWW9kYScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICd5b2RhcGFzcycsXHJcbiAgICAgICAgYWdlOiAxMzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdTbm9rZScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdzbm9rZXBhc3MnLFxyXG4gICAgICAgIGFnZTogNTNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdCb2JhRmV0dCcsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdib2JhcGFzcycsXHJcbiAgICAgICAgYWdlOiAzNlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogJ0NoZXdiYWNjYScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdjaGV3YmFjY2FwYXNzJyxcclxuICAgICAgICBhZ2U6IDEzMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogJ0hhblNvbG8nLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnaGFucGFzcycsXHJcbiAgICAgICAgYWdlOiA2NlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogJ0t5bG9SZW4nLFxyXG4gICAgICAgIHBhc3N3b3JkOiAna3lsb3Bhc3MnLFxyXG4gICAgICAgIGFnZTogMzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdMZWlhT3JnYW5hJyxcclxuICAgICAgICBwYXNzd29yZDogJ2xlaWFwYXNzJyxcclxuICAgICAgICBhZ2U6IDUzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiAnUGFkbWVBbWlkYWxhJyxcclxuICAgICAgICBwYXNzd29yZDogJ3BhZG1lcGFzcycsXHJcbiAgICAgICAgYWdlOiAyN1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogJ0NvdW50RG9va3UnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnZG9rb29wYXNzJyxcclxuICAgICAgICBhZ2U6IDEwMlxyXG4gICAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyb3VwczogeyBncm91cF9pZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9uc1R5cGVbXSB9W10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgZ3JvdXBfaWQ6ICdsaWdodF9zaWRlJyxcclxuICAgICAgICBuYW1lOiAnbGlnaHRfc2lkZScsXHJcbiAgICAgICAgcGVybWlzc2lvbnM6IFsgJ1dSSVRFJywgJ0RFTEVURScgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBncm91cF9pZDogJ2Rhcmtfc2lkZScsXHJcbiAgICAgICAgbmFtZTogJ2Rhcmtfc2lkZScsXHJcbiAgICAgICAgcGVybWlzc2lvbnM6IFsgJ1dSSVRFJywgJ1JFQUQnIF1cclxuICAgIH1cclxuXTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgdXNlckdyb3VwczogeyBncm91cF9pZDogc3RyaW5nLCB1c2VyX2lkOiBzdHJpbmcgfVtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIGdyb3VwX2lkOiAnbGlnaHRfc2lkZScsXHJcbiAgICAgICAgdXNlcl9pZDogJ2FuYWtpbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZ3JvdXBfaWQ6ICdkYXJrX3NpZGUnLFxyXG4gICAgICAgIHVzZXJfaWQ6ICdwYWxwYXRpbmUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGdyb3VwX2lkOiAnbGlnaHRfc2lkZScsXHJcbiAgICAgICAgdXNlcl9pZDogJ21hY2VXaW5kdSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZ3JvdXBfaWQ6ICdsaWdodF9zaWRlJyxcclxuICAgICAgICB1c2VyX2lkOiAnbHVrZVNreXdhbGtlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZ3JvdXBfaWQ6ICdkYXJrX3NpZGUnLFxyXG4gICAgICAgIHVzZXJfaWQ6ICdhbmFraW4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGdyb3VwX2lkOiAnZGFya19zaWRlJyxcclxuICAgICAgICB1c2VyX2lkOiAnZGFydGhNYXVsJ1xyXG4gICAgfVxyXG5dO1xyXG4iLCJpbXBvcnQgY3JlYXRlRXJyb3IgZnJvbSAnaHR0cC1lcnJvcnMnO1xyXG5pbXBvcnQgeyBPcCwgV2hlcmVPcHRpb25zIH0gZnJvbSAnc2VxdWVsaXplJztcclxuaW1wb3J0IHsgZ3JvdXBzVG9SZXNwb25zZSwgZ3JvdXBUb1Jlc3BvbnNlIH0gZnJvbSAnLi4vLi4vbWlkZGxld2FyZXMvcGFyc2Vycyc7XHJcblxyXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uLy4uL21vZGVscy9ncm91cC5tb2RlbCc7XHJcblxyXG5cclxuY29uc3QgRU5USVRZX05BTUU6IHN0cmluZyA9ICdncm91cCc7XHJcbmNvbnN0IERFRkFVTFRfT0ZGU0VUOiBudW1iZXIgPSAwO1xyXG5jb25zdCBERUZBVUxUX0xJTUlUOiBudW1iZXIgPSAxMDtcclxuXHJcbmNvbnN0IGdldEFsbCA9IGFzeW5jIChwYXJhbXM6IGFueSk6IFByb21pc2U8YW55W10+ID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgb2Zmc2V0UGFyYW0sIGxpbWl0UGFyYW0gfSA9IHBhcmFtcztcclxuICAgIGNvbnN0IG9mZnNldDogbnVtYmVyID0gb2Zmc2V0UGFyYW0gJiYgcGFyc2VJbnQob2Zmc2V0UGFyYW0sIDEwKSB8fCBERUZBVUxUX09GRlNFVDtcclxuICAgIGNvbnN0IGxpbWl0OiBudW1iZXIgPSBsaW1pdFBhcmFtICYmIHBhcnNlSW50KGxpbWl0UGFyYW0sIDEwKSArIG9mZnNldCB8fCBERUZBVUxUX0xJTUlUO1xyXG4gICAgY29uc3Qgd2hlcmU6IFdoZXJlT3B0aW9ucyA9IG5hbWUgPyB7IG5hbWU6IHsgWyBPcC5pTGlrZSBdOiBgJSR7IG5hbWUgfSVgIH0gfSA6IHt9O1xyXG4gICAgY29uc3QgZ3JvdXBzID0gYXdhaXQgR3JvdXAuZmluZEFsbCh7IG9mZnNldDogb2Zmc2V0LCBsaW1pdDogbGltaXQsIHdoZXJlIH0pO1xyXG5cclxuICAgIHJldHVybiBncm91cHNUb1Jlc3BvbnNlKGdyb3Vwcyk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRHcm91cCA9IGFzeW5jIChncm91cF9pZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IGdyb3VwID0gYXdhaXQgR3JvdXAuZmluZE9uZSh7IHdoZXJlOiB7IGdyb3VwX2lkOiBncm91cF9pZCB9IH0pO1xyXG5cclxuICAgIGlmICggIWdyb3VwICkgdGhyb3cgY3JlYXRlRXJyb3IoNDA0LCB7IG1lc3NhZ2U6IGAkeyBFTlRJVFlfTkFNRSB9IEVSUk9SUy5ub3RGb3VuZGAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGdyb3VwVG9SZXNwb25zZShncm91cCk7XHJcbn07XHJcblxyXG5jb25zdCBpbnNlcnRHcm91cCA9IGFzeW5jIChncm91cE1vZGVsOiBHcm91cCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc3QgZ3JvdXAgPSBhd2FpdCBHcm91cC5maW5kT25lKHsgd2hlcmU6IHsgbmFtZTogZ3JvdXBNb2RlbC5uYW1lIH0gfSk7XHJcblxyXG4gICAgaWYgKCBncm91cCApIHRocm93IGNyZWF0ZUVycm9yKDQwMCwgeyBtZXNzYWdlOiBgJHsgRU5USVRZX05BTUUgfSBFUlJPUlMuZXhpc3RgIH0pO1xyXG5cclxuICAgIGdyb3VwTW9kZWwuc2F2ZSgpO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlR3JvdXAgPSBhc3luYyAoZ3JvdXBfaWQ6IHN0cmluZywgZ3JvdXBUb1VwZGF0ZTogYW55KTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBjb25zdCBncm91cCA9IGF3YWl0IEdyb3VwLmZpbmRPbmUoeyB3aGVyZTogeyBncm91cF9pZDogZ3JvdXBfaWQgfSB9KTtcclxuXHJcbiAgICBpZiAoICFncm91cCApIHRocm93IGNyZWF0ZUVycm9yKDQwNCwgeyBtZXNzYWdlOiBgJHsgRU5USVRZX05BTUUgfSBFUlJPUlMubm90Rm91bmQgYCB9KTtcclxuXHJcbiAgICBncm91cC5uYW1lID0gZ3JvdXBUb1VwZGF0ZS5uYW1lO1xyXG4gICAgZ3JvdXAucGVybWlzc2lvbnMgPSBncm91cFRvVXBkYXRlLnBlcm1pc3Npb25zO1xyXG5cclxuICAgIGdyb3VwLnNhdmUoKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZUdyb3VwID0gYXN5bmMgKGdyb3VwX2lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnN0IGdyb3VwID0gYXdhaXQgR3JvdXAuZmluZE9uZSh7IHdoZXJlOiB7IGdyb3VwX2lkOiBncm91cF9pZCB9IH0pO1xyXG5cclxuICAgIGlmICggIWdyb3VwICkgdGhyb3cgY3JlYXRlRXJyb3IoNDA0LCB7IG1lc3NhZ2U6IGAkeyBFTlRJVFlfTkFNRSB9IEVSUk9SUy5ub3RGb3VuZGAgfSk7XHJcblxyXG4gICAgZ3JvdXAuZGVzdHJveSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyb3VwREFMID0ge1xyXG4gICAgZ2V0QWxsLFxyXG4gICAgZ2V0R3JvdXAsXHJcbiAgICBpbnNlcnRHcm91cCxcclxuICAgIHVwZGF0ZUdyb3VwLFxyXG4gICAgZGVsZXRlR3JvdXBcclxufTtcclxuIiwiaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tICdzZXF1ZWxpemUnO1xyXG5cclxuaW1wb3J0IHsgVXNlcnNHcm91cCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcbmltcG9ydCB7IEdyb3VwLCBVc2VyR3JvdXAgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBzZXF1ZWxpemUgYXMgZGJJbnN0YW5jZSB9IGZyb20gJy4uL2RiJztcclxuXHJcbmNvbnN0IGFkZFVzZXJzVG9Hcm91cCA9IChncm91cF9pZDogc3RyaW5nLCB1c2VyX2lkczogc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+ID0+XHJcbiAgICBkYkluc3RhbmNlLnRyYW5zYWN0aW9uKFxyXG4gICAgICAgIGFzeW5jICh0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgR3JvdXAuZmluZE9uZSh7IHdoZXJlOiB7IGdyb3VwX2lkOiBncm91cF9pZCB9LCB0cmFuc2FjdGlvbiB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwczogVXNlcnNHcm91cFtdID1cclxuICAgICAgICAgICAgICAgIHVzZXJfaWRzLm1hcCgodXNlcklkOiBzdHJpbmcpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBfaWQ6IGdyb3VwX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJJZFxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgVXNlckdyb3VwLmJ1bGtDcmVhdGUoZ3JvdXBzLCB7IHRyYW5zYWN0aW9uIH0pO1xyXG4gICAgICAgICAgICAvLyBhd2FpdCBncm91cC5hZGRVc2Vycyh1c2VyX2lkcywgeyB0cmFuc2FjdGlvbiB9KTsganVzdCBhbiBleGFtcGxlIG9mIHVzaW5nIG1ldGhvZCBkZWZpbmVkIGluIG1vZGVsXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2Vyc0dyb3VwREFMID0geyBhZGRVc2Vyc1RvR3JvdXAgfTtcclxuIiwiaW1wb3J0IHsgT3AsIFdoZXJlT3B0aW9ucyB9IGZyb20gJ3NlcXVlbGl6ZSc7XHJcbmltcG9ydCBjcmVhdGVFcnJvciBmcm9tICdodHRwLWVycm9ycyc7XHJcblxyXG5pbXBvcnQgeyBFUlJPUlMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBVc2VyVG9SZXNwb25zZSwgVXNlclRvVXBkYXRlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy90eXBpbmdzJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcbmltcG9ydCB7IHVzZXJzVG9SZXNwb25zZSwgdXNlclRvUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9taWRkbGV3YXJlcyc7XHJcbmltcG9ydCB7IFF1ZXJ5UGFyYW1zIH0gZnJvbSAnLi4vdHlwaW5ncyc7XHJcblxyXG5jb25zdCBFTlRJVFlfTkFNRTogc3RyaW5nID0gJ3VzZXInO1xyXG5jb25zdCBERUZBVUxUX09GRlNFVDogbnVtYmVyID0gMDtcclxuY29uc3QgREVGQVVMVF9MSU1JVDogbnVtYmVyID0gMTA7XHJcblxyXG5jb25zdCBnZXRBbGwgPSBhc3luYyAocGFyYW1zOiBRdWVyeVBhcmFtcyk6IFByb21pc2U8VXNlclRvUmVzcG9uc2VbXT4gPT4ge1xyXG4gICAgY29uc3QgeyBsb2dpbiwgb2Zmc2V0UGFyYW0sIGxpbWl0UGFyYW0gfSA9IHBhcmFtcztcclxuICAgIGNvbnN0IG9mZnNldDogbnVtYmVyID0gb2Zmc2V0UGFyYW0gJiYgcGFyc2VJbnQob2Zmc2V0UGFyYW0sIDEwKSB8fCBERUZBVUxUX09GRlNFVDtcclxuICAgIGNvbnN0IGxpbWl0OiBudW1iZXIgPSBsaW1pdFBhcmFtICYmIHBhcnNlSW50KGxpbWl0UGFyYW0sIDEwKSArIG9mZnNldCB8fCBERUZBVUxUX0xJTUlUO1xyXG4gICAgY29uc3Qgd2hlcmU6IFdoZXJlT3B0aW9ucyA9IGxvZ2luID8geyBsb2dpbjogeyBbIE9wLmlMaWtlIF06IGAlJHsgbG9naW4gfSVgIH0gfSA6IHt9O1xyXG4gICAgY29uc3QgdXNlcnM6IFVzZXJbXSA9IGF3YWl0IFVzZXIuZmluZEFsbCh7IG9mZnNldDogb2Zmc2V0LCBsaW1pdDogbGltaXQsIHdoZXJlIH0pO1xyXG5cclxuICAgIHJldHVybiB1c2Vyc1RvUmVzcG9uc2UodXNlcnMpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VXNlciA9IGFzeW5jICh1c2VyX2lkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXJUb1Jlc3BvbnNlPiA9PiB7XHJcbiAgICBjb25zdCB1c2VyOiBVc2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgd2hlcmU6IHsgdXNlcl9pZDogdXNlcl9pZCB9IH0pO1xyXG5cclxuICAgIGlmICggIXVzZXIgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDQsIHsgbWVzc2FnZTogYCR7IEVOVElUWV9OQU1FIH0gJHsgRVJST1JTLm5vdEZvdW5kIH1gIH0pO1xyXG5cclxuICAgIHJldHVybiB1c2VyVG9SZXNwb25zZSh1c2VyKTtcclxufTtcclxuXHJcbmNvbnN0IGluc2VydFVzZXIgPSBhc3luYyAodXNlck1vZGVsOiBVc2VyKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBjb25zdCB1c2VyOiBVc2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgd2hlcmU6IHsgbG9naW46IHVzZXJNb2RlbC5sb2dpbiB9IH0pO1xyXG5cclxuICAgIGlmICggdXNlciApIHRocm93IGNyZWF0ZUVycm9yKDQwMCwgeyBtZXNzYWdlOiBgJHsgRU5USVRZX05BTUUgfSAkeyBFUlJPUlMuZXhpc3QgfWAgfSk7XHJcblxyXG4gICAgdXNlck1vZGVsLnNhdmUoKTtcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZVVzZXIgPSBhc3luYyAodXNlcl9pZDogc3RyaW5nLCB1c2VyVG9VcGRhdGU6IFVzZXJUb1VwZGF0ZSk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc3QgdXNlcjogVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IHdoZXJlOiB7IHVzZXJfaWQ6IHVzZXJfaWQgfSB9KTtcclxuXHJcbiAgICBpZiAoICF1c2VyICkgdGhyb3cgY3JlYXRlRXJyb3IoNDA0LCB7IG1lc3NhZ2U6IGAkeyBFTlRJVFlfTkFNRSB9ICR7IEVSUk9SUy5ub3RGb3VuZCB9YCB9KTtcclxuXHJcbiAgICB1c2VyLmxvZ2luID0gdXNlclRvVXBkYXRlLmxvZ2luO1xyXG4gICAgdXNlci5hZ2UgPSB1c2VyVG9VcGRhdGUuYWdlO1xyXG5cclxuICAgIHVzZXIuc2F2ZSgpO1xyXG59O1xyXG5cclxuY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jICh1c2VyX2lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnN0IHVzZXI6IFVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyB3aGVyZTogeyB1c2VyX2lkOiB1c2VyX2lkIH0gfSk7XHJcblxyXG4gICAgaWYgKCAhdXNlciApIHRocm93IGNyZWF0ZUVycm9yKDQwNCwgeyBtZXNzYWdlOiBgJHsgRU5USVRZX05BTUUgfSAkeyBFUlJPUlMubm90Rm91bmQgfWAgfSk7XHJcblxyXG4gICAgdXNlci5kZXN0cm95KCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckRBTCA9IHtcclxuICAgIGdldEFsbCxcclxuICAgIGdldFVzZXIsXHJcbiAgICBpbnNlcnRVc2VyLFxyXG4gICAgdXBkYXRlVXNlcixcclxuICAgIGRlbGV0ZVVzZXJcclxufTtcclxuIiwiaW1wb3J0IHsgU2VxdWVsaXplIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xyXG5cclxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi4vbWlkZGxld2FyZXMvbG9nZ2VyJztcclxuaW1wb3J0IHsgR3JvdXAsIFVzZXIsIFVzZXJHcm91cCB9IGZyb20gJy4uL21vZGVscy8nO1xyXG5pbXBvcnQgeyB1c2VycywgZ3JvdXBzLCB1c2VyR3JvdXBzIH0gZnJvbSAnLi9iYWNrdXAnO1xyXG5pbXBvcnQgeyBMT0dfTUVTU0FHRVMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgZGJDb25maWcgZnJvbSAnLi8uLi8uLi9jb25maWcvY29uZmlnJztcclxuXHJcbmNvbnN0IG1vZGVscyA9IFtcclxuICAgIFVzZXIsXHJcbiAgICBHcm91cCxcclxuICAgIFVzZXJHcm91cFxyXG5dO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKFxyXG4gICAgZGJDb25maWcuZGF0YWJhc2UsXHJcbiAgICBkYkNvbmZpZy51c2VybmFtZSxcclxuICAgIGRiQ29uZmlnLnBhc3N3b3JkLFxyXG4gICAge1xyXG4gICAgICAgIGRlZmluZToge1xyXG4gICAgICAgICAgICB0aW1lc3RhbXBzOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3J0OiBkYkNvbmZpZy5wb3J0LFxyXG4gICAgICAgIGRpYWxlY3Q6IGRiQ29uZmlnLmRpYWxlY3QsXHJcbiAgICAgICAgaG9zdDogZGJDb25maWcuaG9zdCxcclxuICAgICAgICBkaWFsZWN0T3B0aW9uczogeyBzc2w6IHRydWUgfSxcclxuICAgICAgICBwb29sOiBkYkNvbmZpZy5wb29sLFxyXG4gICAgICAgIG1vZGVsczogWyAuLi5tb2RlbHMgXVxyXG4gICAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRiQ29ubmVjdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IHNlcXVlbGl6ZS5zeW5jKHsgZm9yY2U6IHRydWUgfSk7XHJcbiAgICBsb2dnZXIuaW5mbyhMT0dfTUVTU0FHRVMuY29ubmVjdGlvblN1Y2Nlc3MpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsb2dnZXIuaW5mbygnRGF0YWJhc2UgcmVzdG9yaW5nIGluIHByb2Nlc3MuLi4nKTtcclxuICAgICAgICBhd2FpdCBVc2VyLmJ1bGtDcmVhdGUodXNlcnMpO1xyXG4gICAgICAgIGF3YWl0IEdyb3VwLmJ1bGtDcmVhdGUoZ3JvdXBzKTtcclxuICAgICAgICBhd2FpdCBVc2VyR3JvdXAuYnVsa0NyZWF0ZSh1c2VyR3JvdXBzKTtcclxuICAgICAgICBsb2dnZXIuaW5mbygnRGF0YWJhc2UgcmVzdG9yaW5nIGNvbXBsZXRlIScpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBsb2dnZXIuZXJyb3IoeyBuYW1lOiBlcnJvci5uYW1lLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLCBzdGFjazogZXJyb3Iuc3RhY2sgfSk7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vZGFsL3VzZXJEQUwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RhbC9ncm91cC5EQUwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RhbC91c2VyLWdyb3VwLkRBTCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZGInO1xyXG5leHBvcnQgKiBmcm9tICcuL3VzZXJzLnBhcnNlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vdHlwaW5ncyc7XHJcbiIsImltcG9ydCB7IFVzZXJUb1Jlc3BvbnNlLCBVc2VyVG9BZGQsIFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3R5cGluZ3MnO1xyXG5pbXBvcnQgeyBVc2VyIGFzIFVzZXJNb2RlbCB9IGZyb20gJy4vLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJUb1Jlc3BvbnNlID0gKHVzZXI6IFVzZXIpOiBVc2VyVG9SZXNwb25zZSA9PiAoe1xyXG4gICAgdXNlcl9pZDogdXNlci51c2VyX2lkLFxyXG4gICAgbG9naW46IHVzZXIubG9naW4sXHJcbiAgICBhZ2U6IHVzZXIuYWdlXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJzVG9SZXNwb25zZSA9ICh1c2VyczogVXNlcltdKTogVXNlclRvUmVzcG9uc2VbXSA9PiB1c2Vycy5tYXAodXNlciA9PiB1c2VyVG9SZXNwb25zZSh1c2VyKSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclRvRGIgPSAodXNlcjogVXNlclRvQWRkLCB1c2VyX2lkOiBzdHJpbmcpOiBVc2VyTW9kZWwgPT5cclxuICAgIG5ldyBVc2VyTW9kZWwoe1xyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJfaWQsXHJcbiAgICAgICAgbG9naW46IHVzZXIubG9naW4sXHJcbiAgICAgICAgYWdlOiB1c2VyLmFnZSxcclxuICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgfSk7XHJcbiIsImV4cG9ydCBjb25zdCBMT0dfRElSTkFNRTogc3RyaW5nID0gJ2xvZ3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhBTkRMRTogeyBbIGtleTogc3RyaW5nIF06IHsgbWVzc2FnZTogc3RyaW5nOyB9IH0gPSB7XHJcbiAgICBbICd1bmhhbmRsZWRSZWplY3Rpb24nIF06IHtcclxuICAgICAgICBtZXNzYWdlOiAnVW5oYW5kbGVkIFJlamVjdGlvbiBhdCdcclxuICAgIH0sXHJcbiAgICBbICd1bmNhdWdodEV4Y2VwdGlvbicgXToge1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVbmNhdWdodCBFeGNlcHRpb24gdGhyb3duJ1xyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IGBwYXJhbXM6ICR7IEpTT04uc3RyaW5naWZ5KHJlcXVlc3QucGFyYW1zKSB9YDtcclxuICAgIGNvbnN0IGJvZHkgPSBgYm9keTogJHsgSlNPTi5zdHJpbmdpZnkocmVxdWVzdC5ib2R5KSB9YDtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYHF1ZXJ5OiAkeyBKU09OLnN0cmluZ2lmeShyZXF1ZXN0LnF1ZXJ5KSB9YDtcclxuICAgIGNvbnN0IHVybCA9IGB1cmw6ICR7IHJlcXVlc3QudXJsIH1gO1xyXG4gICAgY29uc3QgbWV0aG9kID0gYG1ldGhvZDogJHsgcmVxdWVzdC5tZXRob2QgfWA7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdGFydDogbnVtYmVyID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgbGV0IGV4ZWN1dGlvblRpbWU6IHN0cmluZztcclxuICAgICAgICByZXF1ZXN0Lm9uKCdjbG9zZScsICgpID0+IHtcclxuICAgICAgICAgICAgZXhlY3V0aW9uVGltZSA9IGBleGVjdXRpb25UaW1lOiAkeyBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0IH0gbWxzYDtcclxuICAgICAgICAgICAgbG9nZ2VyLmluZm8oYCR7IG1ldGhvZCB9ICR7IHVybCB9ICR7IHBhcmFtcyB9ICR7IHF1ZXJ5IH0gJHsgYm9keSB9ICR7IGV4ZWN1dGlvblRpbWUgfWApXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikgeyBsb2dnZXIuZXJyb3IoZXJyb3IpIH1cclxuXHJcbiAgICBuZXh0KCk7XHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vdmFsaWRhdGlvbi5zZXJ2aXNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9wYXJzZXJzJztcclxuZXhwb3J0ICogZnJvbSAnLi9wcm9jZXNzLnVuaGFuZGxlZEVycm9yJztcclxuZXhwb3J0ICogZnJvbSAnLi9odHRwLWxvZ2dlcic7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUxvZ2dlciwgdHJhbnNwb3J0cywgZm9ybWF0IH0gZnJvbSAnd2luc3RvbidcclxuaW1wb3J0IHsgVHJhbnNmb3JtYWJsZUluZm8gfSBmcm9tICdsb2dmb3JtJztcclxuXHJcbmNvbnN0IExPR19ESVJOQU1FID0gJ2xvZ3MnO1xyXG5cclxuY29uc3QgTE9HX0ZJTEVfTUFYX1NJWkU6IG51bWJlciA9IDUwMDA7XHJcblxyXG5jb25zdCB7IGNvbG9yaXplLCBjb21iaW5lLCBwcmludGYsIHRpbWVzdGFtcCB9ID0gZm9ybWF0O1xyXG5jb25zdCBmb3JtYXR0ZXIgPSBwcmludGYoKHsgbGV2ZWwsIG1lc3NhZ2UsIHRpbWVzdGFtcCB9OiBUcmFuc2Zvcm1hYmxlSW5mbyk6IHN0cmluZyA9PiBgJHsgdGltZXN0YW1wIH0gWyR7IGxldmVsIH1dOiAkeyBtZXNzYWdlIH1gKTtcclxuXHJcbmNvbnN0IGNvbnNvbGVUcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0cy5Db25zb2xlKHsgZm9ybWF0OiBjb21iaW5lKGNvbG9yaXplKCksIHRpbWVzdGFtcCgpLCBmb3JtYXR0ZXIpIH0pO1xyXG5jb25zdCBlcnJvclRyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRzLkZpbGUoeyBkaXJuYW1lOiBMT0dfRElSTkFNRSwgZmlsZW5hbWU6ICdlcnJvcnMubG9nJywgbGV2ZWw6ICdlcnJvcicsIG1heHNpemU6IExPR19GSUxFX01BWF9TSVpFIH0pO1xyXG5jb25zdCB3YXJuVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydHMuRmlsZSh7IGRpcm5hbWU6IExPR19ESVJOQU1FLCBmaWxlbmFtZTogJ3dhcm5pbmdzLmxvZycsIGxldmVsOiAnd2FybicsIG1heHNpemU6IExPR19GSUxFX01BWF9TSVpFIH0pO1xyXG5jb25zdCBpbmZvVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydHMuRmlsZSh7IGRpcm5hbWU6IExPR19ESVJOQU1FLCBmaWxlbmFtZTogJ2luZm8ubG9nJywgbGV2ZWw6ICdpbmZvJywgbWF4c2l6ZTogTE9HX0ZJTEVfTUFYX1NJWkUgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKHtcclxuICAgIGV4aXRPbkVycm9yOiBmYWxzZSxcclxuICAgIGZvcm1hdDogY29tYmluZSh0aW1lc3RhbXAoKSwgZm9ybWF0dGVyKSxcclxuICAgIHRyYW5zcG9ydHM6IFtcclxuICAgICAgICBjb25zb2xlVHJhbnNwb3J0LFxyXG4gICAgICAgIGVycm9yVHJhbnNwb3J0LFxyXG4gICAgICAgIGluZm9UcmFuc3BvcnQsXHJcbiAgICAgICAgd2FyblRyYW5zcG9ydFxyXG4gICAgXVxyXG59KTtcclxuIiwiaW1wb3J0IHsgR3JvdXAsIEdyb3VwVG9EYiwgVXNlciwgVXNlclRvQWRkLCBVc2VyVG9SZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcbmltcG9ydCB7IFVzZXIgYXMgVXNlck1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBHcm91cCBhcyBHcm91cE1vZGVsIH0gZnJvbSAnLi8uLi9tb2RlbHMvZ3JvdXAubW9kZWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyb3VwVG9SZXNwb25zZSA9IChncm91cDogR3JvdXApOiBHcm91cCA9PiAoe1xyXG4gICAgZ3JvdXBfaWQ6IGdyb3VwLmdyb3VwX2lkLFxyXG4gICAgbmFtZTogZ3JvdXAubmFtZSxcclxuICAgIHBlcm1pc3Npb25zOiBncm91cC5wZXJtaXNzaW9uc1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cHNUb1Jlc3BvbnNlID0gKGdyb3VwczogR3JvdXBbXSk6IEdyb3VwW10gPT4gZ3JvdXBzLm1hcChncm91cCA9PiBncm91cFRvUmVzcG9uc2UoZ3JvdXApKTtcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cFRvRGIgPSAoZ3JvdXA6IEdyb3VwVG9EYiwgZ3JvdXBfaWQ6IHN0cmluZykgPT5cclxuICAgIG5ldyBHcm91cE1vZGVsKHtcclxuICAgICAgICBncm91cF9pZDogZ3JvdXBfaWQsXHJcbiAgICAgICAgbmFtZTogZ3JvdXAubmFtZSxcclxuICAgICAgICBwZXJtaXNzaW9uczogZ3JvdXAucGVybWlzc2lvbnNcclxuICAgIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJUb1Jlc3BvbnNlID0gKHVzZXI6IFVzZXIpOiBVc2VyVG9SZXNwb25zZSA9PiAoe1xyXG4gICAgdXNlcl9pZDogdXNlci51c2VyX2lkLFxyXG4gICAgbG9naW46IHVzZXIubG9naW4sXHJcbiAgICBhZ2U6IHVzZXIuYWdlXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJzVG9SZXNwb25zZSA9ICh1c2VyczogVXNlcltdKTogVXNlclRvUmVzcG9uc2VbXSA9PiB1c2Vycy5tYXAodXNlciA9PiB1c2VyVG9SZXNwb25zZSh1c2VyKSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclRvRGIgPSAodXNlcjogVXNlclRvQWRkLCB1c2VyX2lkOiBzdHJpbmcpOiBVc2VyTW9kZWwgPT5cclxuICAgIG5ldyBVc2VyTW9kZWwoe1xyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJfaWQsXHJcbiAgICAgICAgbG9naW46IHVzZXIubG9naW4sXHJcbiAgICAgICAgYWdlOiB1c2VyLmFnZSxcclxuICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgfSk7XHJcbiIsImltcG9ydCB7IEhBTkRMRSB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2Nlc3NVbmhhbmRsZWRFcnJvciA9ICgpID0+IHtcclxuICAgIHByb2Nlc3NcclxuICAgICAgICAub24oJ3VuaGFuZGxlZFJlamVjdGlvbicsIChyZWFzb246IG51bWJlciwgcHJvbWlzZTogUHJvbWlzZTxhbnk+KSA9PiB7XHJcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgJHsgSEFORExFWyAndW5oYW5kbGVkUmVqZWN0aW9uJyBdLm1lc3NhZ2UgfTogJHsgSlNPTi5zdHJpbmdpZnkocHJvbWlzZSkgfSwgcmVhc29uOiAkeyByZWFzb24gfWApO1xyXG4gICAgICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oJ3VuY2F1Z2h0RXhjZXB0aW9uJywgKGVycm9yOiBFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoYCR7IEhBTkRMRVsgJ3VuY2F1Z2h0RXhjZXB0aW9uJyBdLm1lc3NhZ2UgfSAtICR7IGVycm9yIH1gKTtcclxuICAgICAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xyXG4gICAgICAgIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyBKb2kgZnJvbSAnQGhhcGkvam9pJztcclxuaW1wb3J0IHsgY3JlYXRlVmFsaWRhdG9yIH0gZnJvbSAnZXhwcmVzcy1qb2ktdmFsaWRhdGlvbic7XHJcblxyXG5jb25zdCBNSU5fQUdFID0gNDtcclxuY29uc3QgTUFYX0FHRSA9IDEzMDtcclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0b3IgPSBjcmVhdGVWYWxpZGF0b3IoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRVc2VyQm9keVNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgbG9naW46IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgYWdlOiBKb2kubnVtYmVyKCkuZ3JlYXRlcihNSU5fQUdFKS5sZXNzKE1BWF9BR0UpLnJlcXVpcmVkKCksXHJcbiAgICBwYXNzd29yZDogSm9pLnN0cmluZygpLmFscGhhbnVtKCkucmVxdWlyZWQoKVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyQm9keVNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgbG9naW46IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgYWdlOiBKb2kubnVtYmVyKCkuZ3JlYXRlcihNSU5fQUdFKS5sZXNzKE1BWF9BR0UpLnJlcXVpcmVkKClcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlclF1ZXJ5U2NoZW1hID0gSm9pLm9iamVjdCh7XHJcbiAgICB1c2VyX2lkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRHcm91cEJvZHlTY2hlbWEgPSBKb2kub2JqZWN0KHtcclxuICAgIG5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgcGVybWlzc2lvbnM6IEpvaS5hcnJheSgpLml0ZW1zKEpvaS5zdHJpbmcoKSkucmVxdWlyZWQoKVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVHcm91cFF1ZXJ5U2NoZW1hID0gSm9pLm9iamVjdCh7XHJcbiAgICBncm91cF9pZDogSm9pLnN0cmluZygpLnJlcXVpcmVkKClcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlR3JvdXBCb2R5U2NoZW1hID0gSm9pLm9iamVjdCh7XHJcbiAgICBuYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIHBlcm1pc3Npb25zOiBKb2kuYXJyYXkoKS5pdGVtcyhKb2kuc3RyaW5nKCkpLnJlcXVpcmVkKClcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVXNlcnNUb0dyb3VwUXVlcnlTY2hlbWEgPSBKb2kub2JqZWN0KHtcclxuICAgIGdyb3VwX2lkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRVc2Vyc1RvR3JvdXBCb2R5U2NoZW1hID0gSm9pLm9iamVjdCh7XHJcbiAgICB1c2VySWRzOiBKb2kuYXJyYXkoKS5pdGVtcyhKb2kuc3RyaW5nKCkpLnJlcXVpcmVkKClcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHNjaGVtYTogJ25ldycsXHJcbiAgICB0YWJsZXM6IHtcclxuICAgICAgICB1c2VyczogJ3VzZXJzJyxcclxuICAgICAgICBncm91cHM6ICdncm91cHMnLFxyXG4gICAgICAgIHVzZXJHcm91cHM6ICd1c2VyLWdyb3VwcydcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBbGxvd051bGwsIEJlbG9uZ3NUb01hbnksIENvbHVtbiwgRGF0YVR5cGUsIE1vZGVsLCBQcmltYXJ5S2V5LCBUYWJsZSwgVW5pcXVlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCB7IFVzZXJHcm91cCB9IGZyb20gJy4vdXNlci1ncm91cC5tb2RlbCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXIubW9kZWwnO1xyXG5cclxuZXhwb3J0IHR5cGUgUGVybWlzc2lvbnNUeXBlID0gJ1JFQUQnIHwgJ1dSSVRFJyB8ICdERUxFVEUnIHwgJ1NIQVJFJyB8ICdVUExPQURfRklMRVMnO1xyXG5cclxuQFRhYmxlKHtcclxuICAgIHNjaGVtYTogY29uZmlnLnNjaGVtYSxcclxuICAgIHRhYmxlTmFtZTogY29uZmlnLnRhYmxlcy5ncm91cHMsXHJcbiAgICBwYXJhbm9pZDogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIEdyb3VwIGV4dGVuZHMgTW9kZWw8R3JvdXA+IHtcclxuICAgIEBCZWxvbmdzVG9NYW55KCgpID0+IFVzZXIsICgpID0+IFVzZXJHcm91cClcclxuICAgIHVzZXJzOiBVc2VyW107XHJcblxyXG4gICAgLy8gYWRkVXNlcnM6IEJlbG9uZ3NUb01hbnlBZGRBc3NvY2lhdGlvbnNNaXhpbjxVc2VyLCBzdHJpbmc+OyBKdXN0IGFuIGV4YW1wbGUgb2YgYWRkaW5nIG1ldGhvZHMgdG8gbW9kZWxcclxuXHJcbiAgICBAUHJpbWFyeUtleVxyXG4gICAgQFVuaXF1ZSh0cnVlKVxyXG4gICAgQEFsbG93TnVsbChmYWxzZSlcclxuICAgIEBDb2x1bW5cclxuICAgIGdyb3VwX2lkOiBzdHJpbmc7XHJcblxyXG4gICAgQENvbHVtblxyXG4gICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBDb2x1bW4oRGF0YVR5cGUuQVJSQVkoRGF0YVR5cGUuU1RSSU5HKSlcclxuICAgIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9uc1R5cGVbXTtcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL3VzZXIubW9kZWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2dyb3VwLm1vZGVsJztcclxuZXhwb3J0ICogZnJvbSAnLi91c2VyLWdyb3VwLm1vZGVsJztcclxuIiwiaW1wb3J0IHsgQXV0b0luY3JlbWVudCwgQ29sdW1uLCBGb3JlaWduS2V5LCBNb2RlbCwgUHJpbWFyeUtleSwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuL2dyb3VwLm1vZGVsJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlci5tb2RlbCc7XHJcblxyXG5AVGFibGUoe1xyXG4gICAgc2NoZW1hOiBjb25maWcuc2NoZW1hLFxyXG4gICAgdGFibGVOYW1lOiBjb25maWcudGFibGVzLnVzZXJHcm91cHMsXHJcbiAgICBwYXJhbm9pZDogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckdyb3VwIGV4dGVuZHMgTW9kZWw8VXNlckdyb3VwPiB7XHJcbiAgICBAUHJpbWFyeUtleVxyXG4gICAgQEF1dG9JbmNyZW1lbnRcclxuICAgIEBDb2x1bW5cclxuICAgIHVzZXJfZ3JvdXBfaWQ6IG51bWJlcjtcclxuXHJcbiAgICBARm9yZWlnbktleSgoKSA9PiBHcm91cClcclxuICAgIEBDb2x1bW5cclxuICAgIGdyb3VwX2lkOiBzdHJpbmc7XHJcblxyXG4gICAgQEZvcmVpZ25LZXkoKCkgPT4gVXNlcilcclxuICAgIEBDb2x1bW5cclxuICAgIHVzZXJfaWQ6IHN0cmluZztcclxufVxyXG4iLCJpbXBvcnQgeyBDb2x1bW4sIFRhYmxlLCBNb2RlbCwgUHJpbWFyeUtleSwgQWxsb3dOdWxsLCBVbmlxdWUsIERhdGFUeXBlLCBCZWxvbmdzVG9NYW55IH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi9ncm91cC5tb2RlbCc7XHJcbmltcG9ydCB7IFVzZXJHcm91cCB9IGZyb20gJy4vdXNlci1ncm91cC5tb2RlbCc7XHJcblxyXG5AVGFibGUoe1xyXG4gICAgc2NoZW1hOiBjb25maWcuc2NoZW1hLFxyXG4gICAgdGFibGVOYW1lOiBjb25maWcudGFibGVzLnVzZXJzLFxyXG4gICAgcGFyYW5vaWQ6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBNb2RlbDxVc2VyPiB7XHJcbiAgICBAQmVsb25nc1RvTWFueSgoKSA9PiBHcm91cCwgKCkgPT4gVXNlckdyb3VwKVxyXG4gICAgZ3JvdXBzOiBHcm91cFtdO1xyXG5cclxuICAgIEBQcmltYXJ5S2V5XHJcbiAgICBAVW5pcXVlKHRydWUpXHJcbiAgICBAQWxsb3dOdWxsKGZhbHNlKVxyXG4gICAgQENvbHVtbihEYXRhVHlwZS5TVFJJTkcpXHJcbiAgICBAQ29sdW1uXHJcbiAgICB1c2VyX2lkOiBzdHJpbmc7XHJcblxyXG4gICAgQEFsbG93TnVsbChmYWxzZSlcclxuICAgIEBVbmlxdWUodHJ1ZSlcclxuICAgIEBDb2x1bW5cclxuICAgIGxvZ2luOiBzdHJpbmc7XHJcblxyXG4gICAgQEFsbG93TnVsbChmYWxzZSlcclxuICAgIEBDb2x1bW5cclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcblxyXG4gICAgQEFsbG93TnVsbChmYWxzZSlcclxuICAgIEBDb2x1bW5cclxuICAgIGFnZTogbnVtYmVyO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBST1VURVMgPSB7XHJcbiAgICB1c2VyUm91dGVzOiB7XHJcbiAgICAgICAgcm9vdDogJy8nLFxyXG4gICAgICAgIHVzZXJfaWQ6ICcvOnVzZXJfaWQnLFxyXG4gICAgICAgIHVzZXJzOiAnL3VzZXJzJ1xyXG4gICAgfSxcclxuICAgIGdyb3VwUm91dGVzOiB7XHJcbiAgICAgICAgcm9vdDogJy8nLFxyXG4gICAgICAgIGdyb3VwX2lkOiAnLzpncm91cF9pZC8nLFxyXG4gICAgICAgIHVzZXJzOiAnLzpncm91cF9pZC91c2VycycsXHJcbiAgICAgICAgZ3JvdXBzOiAnL2dyb3VwcydcclxuICAgIH0sXHJcbiAgICB1c2VyR3JvdXBSb3V0ZXM6IHtcclxuICAgICAgICByb290OiAnLycsXHJcbiAgICAgICAgZ3JvdXBfaWQ6ICcvOmdyb3VwX2lkJyxcclxuICAgICAgICB1c2Vyc19ncm91cDogJy91c2Vyc19ncm91cCcsXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZDoge1xyXG4gICAgICAgIHJvb3Q6ICcqJ1xyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IGdyb3VwQ29udHJvbGxlciwgdXNlcnNHcm91cENvbnRyb2xsZXIsIG5vdEFsbG93ZWQgfSBmcm9tICcuLi9jb250cm9sbGVycyc7XHJcbmltcG9ydCB7XHJcbiAgICBhZGRHcm91cEJvZHlTY2hlbWEsXHJcbiAgICBhZGRVc2Vyc1RvR3JvdXBCb2R5U2NoZW1hLFxyXG4gICAgYWRkVXNlcnNUb0dyb3VwUXVlcnlTY2hlbWEsXHJcbiAgICB1cGRhdGVHcm91cEJvZHlTY2hlbWEsXHJcbiAgICB1cGRhdGVHcm91cFF1ZXJ5U2NoZW1hLFxyXG4gICAgdmFsaWRhdG9yXHJcbn0gZnJvbSAnLi4vbWlkZGxld2FyZXMnO1xyXG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBncm91cFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbmNvbnN0IHJvdXRlcyA9IFJPVVRFUy5ncm91cFJvdXRlcztcclxuXHJcbmdyb3VwUm91dGVyLnJvdXRlKHJvdXRlcy5yb290KVxyXG4gICAgLmdldChncm91cENvbnRyb2xsZXIuZ2V0R3JvdXBzKVxyXG4gICAgLnBvc3QodmFsaWRhdG9yLmJvZHkoYWRkR3JvdXBCb2R5U2NoZW1hKSwgZ3JvdXBDb250cm9sbGVyLmFkZEdyb3VwKVxyXG4gICAgLmFsbChub3RBbGxvd2VkKTtcclxuXHJcbmdyb3VwUm91dGVyLnJvdXRlKHJvdXRlcy5ncm91cF9pZClcclxuICAgIC5nZXQoZ3JvdXBDb250cm9sbGVyLmdldEdyb3VwQnlJZClcclxuICAgIC5wdXQodmFsaWRhdG9yLnBhcmFtcyh1cGRhdGVHcm91cFF1ZXJ5U2NoZW1hKSwgdmFsaWRhdG9yLmJvZHkodXBkYXRlR3JvdXBCb2R5U2NoZW1hKSwgZ3JvdXBDb250cm9sbGVyLnVwZGF0ZUdyb3VwKVxyXG4gICAgLmRlbGV0ZShncm91cENvbnRyb2xsZXIuZGVsZXRlR3JvdXApXHJcbiAgICAuYWxsKG5vdEFsbG93ZWQpO1xyXG5cclxuZ3JvdXBSb3V0ZXIucm91dGUocm91dGVzLnVzZXJzKVxyXG4gICAgLnBvc3QoXHJcbiAgICAgICAgdmFsaWRhdG9yLnBhcmFtcyhhZGRVc2Vyc1RvR3JvdXBRdWVyeVNjaGVtYSksXHJcbiAgICAgICAgdmFsaWRhdG9yLmJvZHkoYWRkVXNlcnNUb0dyb3VwQm9keVNjaGVtYSksXHJcbiAgICAgICAgdXNlcnNHcm91cENvbnRyb2xsZXIuYWRkVXNlcnNUb0dyb3VwXHJcbiAgICApXHJcbiAgICAuYWxsKG5vdEFsbG93ZWQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ3JvdXBSb3V0ZXI7XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgZ3JvdXBSb3V0ZXIgZnJvbSAnLi9ncm91cC1yb3V0ZXInO1xyXG5pbXBvcnQgaW52YWxpZFJvdXRlciBmcm9tICcuL2ludmFsaWQtcm91dGVzJztcclxuaW1wb3J0IHVzZXJSb3V0ZXIgZnJvbSAnLi91c2VyLXJvdXRlcic7XHJcblxyXG5jb25zdCByb290Um91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxucm9vdFJvdXRlci51c2UoUk9VVEVTLnVzZXJSb3V0ZXMudXNlcnMsIHVzZXJSb3V0ZXIpO1xyXG5yb290Um91dGVyLnVzZShST1VURVMuZ3JvdXBSb3V0ZXMuZ3JvdXBzLCBncm91cFJvdXRlcik7XHJcbnJvb3RSb3V0ZXIudXNlKFJPVVRFUy5pbnZhbGlkLnJvb3QsIGludmFsaWRSb3V0ZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJvdXRlcjtcclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBpbnZhbGlkQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzJztcclxuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgaW52YWxpZFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbmNvbnN0IHJvdXRlcyA9IFJPVVRFUy5pbnZhbGlkO1xyXG5cclxuaW52YWxpZFJvdXRlci5yb3V0ZShyb3V0ZXMucm9vdCkuYWxsKGludmFsaWRDb250cm9sbGVyLm5vdEFsbG93ZWQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW52YWxpZFJvdXRlcjtcclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyB1c2Vyc0NvbnRyb2xsZXIsIG5vdEFsbG93ZWQgfSBmcm9tICcuLi9jb250cm9sbGVycyc7XHJcbmltcG9ydCB7IGFkZFVzZXJCb2R5U2NoZW1hLCB1cGRhdGVVc2VyQm9keVNjaGVtYSwgdXBkYXRlVXNlclF1ZXJ5U2NoZW1hLCB2YWxpZGF0b3IgfSBmcm9tICcuLi9taWRkbGV3YXJlcyc7XHJcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IHVzZXJSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5jb25zdCByb3V0ZXMgPSBST1VURVMudXNlclJvdXRlcztcclxuXHJcbnVzZXJSb3V0ZXIucm91dGUocm91dGVzLnJvb3QpXHJcbiAgICAuZ2V0KHVzZXJzQ29udHJvbGxlci5nZXRVc2VycylcclxuICAgIC5wb3N0KHZhbGlkYXRvci5ib2R5KGFkZFVzZXJCb2R5U2NoZW1hKSwgdXNlcnNDb250cm9sbGVyLmFkZFVzZXIpXHJcbiAgICAuYWxsKG5vdEFsbG93ZWQpO1xyXG5cclxudXNlclJvdXRlci5yb3V0ZShyb3V0ZXMudXNlcl9pZClcclxuICAgIC5nZXQodXNlcnNDb250cm9sbGVyLmdldFVzZXJCeUlkKVxyXG4gICAgLnB1dCh2YWxpZGF0b3IucGFyYW1zKHVwZGF0ZVVzZXJRdWVyeVNjaGVtYSksIHZhbGlkYXRvci5ib2R5KHVwZGF0ZVVzZXJCb2R5U2NoZW1hKSwgdXNlcnNDb250cm9sbGVyLnVwZGF0ZVVzZXIpXHJcbiAgICAuZGVsZXRlKHVzZXJzQ29udHJvbGxlci5kZWxldGVVc2VyKVxyXG4gICAgLmFsbChub3RBbGxvd2VkKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJSb3V0ZXI7XHJcbiIsImltcG9ydCB1dWlkIGZyb20gJ3V1aWQnO1xyXG5cclxuaW1wb3J0IHsgZ3JvdXBEQUwsIFF1ZXJ5UGFyYW1zIH0gZnJvbSAnLi4vZGF0YS1hY2Nlc3MnO1xyXG5pbXBvcnQgeyBHcm91cCwgR3JvdXBUb0RiLCBHcm91cFRvVXBkYXRlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90eXBpbmdzJztcclxuaW1wb3J0IHsgZ3JvdXBUb0RiIH0gZnJvbSAnLi4vbWlkZGxld2FyZXMnO1xyXG5pbXBvcnQgeyB1c2Vyc0dyb3VwU2VydmljZSB9IGZyb20gJy4vdXNlcnMtZ3JvdXAuc2VydmlzZSc7XHJcblxyXG5jb25zdCBnZXRBbGxHcm91cHMgPSAocXVlcnk6IFF1ZXJ5UGFyYW1zKTogUHJvbWlzZTxHcm91cFtdPiA9PlxyXG4gICAgZ3JvdXBEQUwuZ2V0QWxsKHF1ZXJ5KTtcclxuXHJcbmNvbnN0IGdldEdyb3VwQnlJZCA9IChncm91cF9pZDogc3RyaW5nKTogUHJvbWlzZTxHcm91cD4gPT5cclxuICAgIGdyb3VwREFMLmdldEdyb3VwKGdyb3VwX2lkKTtcclxuXHJcbmNvbnN0IGFkZEdyb3VwID0gKG5ld0dyb3VwOiBHcm91cFRvRGIpOiBQcm9taXNlPHZvaWQ+ID0+XHJcbiAgICBncm91cERBTC5pbnNlcnRHcm91cChncm91cFRvRGIobmV3R3JvdXAsIHV1aWQudjEoKS50b1N0cmluZygpKSk7XHJcblxyXG5jb25zdCB1cGRhdGVHcm91cCA9IChncm91cF9pZDogc3RyaW5nLCBncm91cFRvVXBkYXRlOiBHcm91cFRvVXBkYXRlKTogUHJvbWlzZTx2b2lkPiA9PlxyXG4gICAgZ3JvdXBEQUwudXBkYXRlR3JvdXAoZ3JvdXBfaWQsIGdyb3VwVG9VcGRhdGUpO1xyXG5cclxuY29uc3QgZGVsZXRlR3JvdXAgPSAoZ3JvdXBfaWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT5cclxuICAgIGdyb3VwREFMLmRlbGV0ZUdyb3VwKGdyb3VwX2lkKTtcclxuXHJcbmNvbnN0IGFkZFVzZXJzVG9Hcm91cCA9IHVzZXJzR3JvdXBTZXJ2aWNlLmFkZFVzZXJzVG9Hcm91cDtcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cFNlcnZpY2UgPSB7XHJcbiAgICBnZXRBbGxHcm91cHMsXHJcbiAgICBnZXRHcm91cEJ5SWQsXHJcbiAgICBhZGRHcm91cCxcclxuICAgIHVwZGF0ZUdyb3VwLFxyXG4gICAgZGVsZXRlR3JvdXAsXHJcbiAgICBhZGRVc2Vyc1RvR3JvdXBcclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi91c2VyLnNlcnZpc2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2dyb3VwLnNlcnZpc2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3VzZXJzLWdyb3VwLnNlcnZpc2UnO1xyXG4iLCJpbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgdXNlckRBTCwgdXNlclRvRGIgfSBmcm9tICcuLi9kYXRhLWFjY2Vzcyc7XHJcblxyXG5pbXBvcnQgeyBVc2VyVG9BZGQsIFVzZXJUb1Jlc3BvbnNlLCBVc2VyVG9VcGRhdGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3R5cGluZ3MnO1xyXG5cclxuY29uc3QgZ2V0QWxsVXNlcnMgPSAocXVlcnk6IHsgbG9naW4/OiBzdHJpbmcsIGxpbWl0Pzogc3RyaW5nLCBvZmZzZXQ/OiBzdHJpbmcgfSk6IFByb21pc2U8VXNlclRvUmVzcG9uc2VbXT4gPT4gdXNlckRBTC5nZXRBbGwocXVlcnkpO1xyXG5cclxuY29uc3QgZ2V0VXNlckJ5SWQgPSAodXNlcl9pZDogc3RyaW5nKTogUHJvbWlzZTxVc2VyVG9SZXNwb25zZT4gPT4gdXNlckRBTC5nZXRVc2VyKHVzZXJfaWQpO1xyXG5cclxuY29uc3QgYWRkVXNlciA9IChuZXdVc2VyOiBVc2VyVG9BZGQpOiBQcm9taXNlPHZvaWQ+ID0+IHVzZXJEQUwuaW5zZXJ0VXNlcih1c2VyVG9EYihuZXdVc2VyLCB1dWlkLnYxKCkudG9TdHJpbmcoKSkpO1xyXG5cclxuY29uc3QgdXBkYXRlVXNlciA9ICh1c2VyX2lkOiBzdHJpbmcsIHVzZXJUb1VwZGF0ZTogVXNlclRvVXBkYXRlKTogUHJvbWlzZTx2b2lkPiA9PiB1c2VyREFMLnVwZGF0ZVVzZXIodXNlcl9pZCwgdXNlclRvVXBkYXRlKTtcclxuXHJcbmNvbnN0IGRlbGV0ZVVzZXIgPSAodXNlcl9pZDogc3RyaW5nKSA9PiB1c2VyREFMLmRlbGV0ZVVzZXIodXNlcl9pZCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclNlcnZpY2UgPSB7XHJcbiAgICBnZXRBbGxVc2VycyxcclxuICAgIGdldFVzZXJCeUlkLFxyXG4gICAgYWRkVXNlcixcclxuICAgIHVwZGF0ZVVzZXIsXHJcbiAgICBkZWxldGVVc2VyXHJcbn07XHJcbiIsImltcG9ydCB7IHVzZXJzR3JvdXBEQUwgfSBmcm9tICcuLi9kYXRhLWFjY2Vzcy9kYWwvdXNlci1ncm91cC5EQUwnO1xyXG5cclxuY29uc3QgYWRkVXNlcnNUb0dyb3VwID0gYXN5bmMgKGdyb3VwX2lkOiBzdHJpbmcsIHVzZXJfaWRzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiA9PlxyXG4gICAgYXdhaXQgdXNlcnNHcm91cERBTC5hZGRVc2Vyc1RvR3JvdXAoZ3JvdXBfaWQsIHVzZXJfaWRzKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2Vyc0dyb3VwU2VydmljZSA9IHsgYWRkVXNlcnNUb0dyb3VwIH07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBoYXBpL2pvaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtam9pLXZhbGlkYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cC1lcnJvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2luc3RvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9