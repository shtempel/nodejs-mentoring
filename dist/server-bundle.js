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
/*! exports provided: usersController, groupController, usersGroupController, invalidController */
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
/* harmony import */ var _controllers_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/helper */ "./src/controllers/helper.ts");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middlewares */ "./src/middlewares/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/routes/constants.ts");





const groupRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
const routes = _constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].groupRoutes;
groupRouter.route(routes.root)
    .get(_controllers__WEBPACK_IMPORTED_MODULE_1__["groupController"].getGroups)
    .post(_middlewares__WEBPACK_IMPORTED_MODULE_3__["validator"].body(_middlewares__WEBPACK_IMPORTED_MODULE_3__["addGroupBodySchema"]), _controllers__WEBPACK_IMPORTED_MODULE_1__["groupController"].addGroup)
    .all(_controllers_helper__WEBPACK_IMPORTED_MODULE_2__["notAllowed"]);
groupRouter.route(routes.group_id)
    .get(_controllers__WEBPACK_IMPORTED_MODULE_1__["groupController"].getGroupById)
    .put(_middlewares__WEBPACK_IMPORTED_MODULE_3__["validator"].params(_middlewares__WEBPACK_IMPORTED_MODULE_3__["updateGroupQuerySchema"]), _middlewares__WEBPACK_IMPORTED_MODULE_3__["validator"].body(_middlewares__WEBPACK_IMPORTED_MODULE_3__["updateGroupBodySchema"]), _controllers__WEBPACK_IMPORTED_MODULE_1__["groupController"].updateGroup)
    .delete(_controllers__WEBPACK_IMPORTED_MODULE_1__["groupController"].deleteGroup)
    .all(_controllers_helper__WEBPACK_IMPORTED_MODULE_2__["notAllowed"]);
groupRouter.route(routes.users)
    .post(_middlewares__WEBPACK_IMPORTED_MODULE_3__["validator"].params(_middlewares__WEBPACK_IMPORTED_MODULE_3__["addUsersToGroupQuerySchema"]), _middlewares__WEBPACK_IMPORTED_MODULE_3__["validator"].body(_middlewares__WEBPACK_IMPORTED_MODULE_3__["addUsersToGroupBodySchema"]), _controllers__WEBPACK_IMPORTED_MODULE_1__["usersGroupController"].addUsersToGroup)
    .all(_controllers_helper__WEBPACK_IMPORTED_MODULE_2__["notAllowed"]);
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
/* harmony import */ var _controllers_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/helper */ "./src/controllers/helper.ts");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middlewares */ "./src/middlewares/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/routes/constants.ts");





const userRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
const routes = _constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].userRoutes;
userRouter.route(routes.root)
    .get(_controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].getUsers)
    .post(_middlewares__WEBPACK_IMPORTED_MODULE_3__["validator"].body(_middlewares__WEBPACK_IMPORTED_MODULE_3__["addUserBodySchema"]), _controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].addUser)
    .all(_controllers_helper__WEBPACK_IMPORTED_MODULE_2__["notAllowed"]);
userRouter.route(routes.user_id)
    .get(_controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].getUserById)
    .put(_middlewares__WEBPACK_IMPORTED_MODULE_3__["validator"].params(_middlewares__WEBPACK_IMPORTED_MODULE_3__["updateUserQuerySchema"]), _middlewares__WEBPACK_IMPORTED_MODULE_3__["validator"].body(_middlewares__WEBPACK_IMPORTED_MODULE_3__["updateUserBodySchema"]), _controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].updateUser)
    .delete(_controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].deleteUser)
    .all(_controllers_helper__WEBPACK_IMPORTED_MODULE_2__["notAllowed"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2dyb3VwLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2hlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2ludmFsaWQuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvdXNlcnMtZ3JvdXAuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvdXNlcnMuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1hY2Nlc3MvYmFja3VwLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLWFjY2Vzcy9kYWwvZ3JvdXAuREFMLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLWFjY2Vzcy9kYWwvdXNlci1ncm91cC5EQUwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtYWNjZXNzL2RhbC91c2VyREFMLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLWFjY2Vzcy9kYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1hY2Nlc3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtYWNjZXNzL3VzZXJzLnBhcnNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlcy9odHRwLWxvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pZGRsZXdhcmVzL2xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvcGFyc2Vycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvcHJvY2Vzcy51bmhhbmRsZWRFcnJvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvdmFsaWRhdGlvbi5zZXJ2aXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvZ3JvdXAubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3VzZXItZ3JvdXAubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy91c2VyLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvZ3JvdXAtcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9pbnZhbGlkLXJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3VzZXItcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9ncm91cC5zZXJ2aXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdXNlci5zZXJ2aXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy91c2Vycy1ncm91cC5zZXJ2aXNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBoYXBpL2pvaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLWpvaS12YWxpZGF0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cC1lcnJvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemUtdHlwZXNjcmlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV1aWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5zdG9uXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUFBLE1BQU0sT0FBTyxHQUFZLFVBQVUsQ0FBQztBQUVyQjtJQUNYLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLElBQUksRUFBRSxvREFBb0Q7SUFDMUQsSUFBSSxFQUFFLElBQUk7SUFDVixRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsUUFBUSxFQUFFLGtFQUFrRTtJQUM1RSxJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUUsQ0FBQztRQUNOLEdBQUcsRUFBRSxDQUFDO1FB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Q0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCZ0U7QUFFbEUsTUFBTSxlQUFlLEdBQUcsQ0FBTyxRQUFnQixFQUFFLFFBQWtCLEVBQWdCLEVBQUUsa0RBQ2pGLGFBQU0sNkVBQWEsQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxLQUFDO0FBRXJELE1BQU0saUJBQWlCLEdBQUcsRUFBRSxlQUFlLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7O0FDTHJELHNDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InNlcnZlci1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAudHNcIik7XG4iLCJpbXBvcnQgeyBEaWFsZWN0IH0gZnJvbSAnc2VxdWVsaXplJztcclxuXHJcbmNvbnN0IGRpYWxlY3Q6IERpYWxlY3QgPSAncG9zdGdyZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGlhbGVjdDogZGlhbGVjdCxcclxuICAgIGhvc3Q6IFwiZWMyLTU0LTI0Ni0xMDAtMjQ2LmV1LXdlc3QtMS5jb21wdXRlLmFtYXpvbmF3cy5jb21cIixcclxuICAgIHBvcnQ6IDU0MzIsXHJcbiAgICBkYXRhYmFzZTogXCJkM292czBraGo4MmEzaFwiLFxyXG4gICAgdXNlcm5hbWU6IFwieGRkcXZyZnp3ZHdlY3JcIixcclxuICAgIHBhc3N3b3JkOiBcIjNmNDFiNTA0N2NkZGJiNTI2MWQwN2UyYTZlODJlYjNmNjQ1MWRlOGIzODg1ZTAxY2Y2MTM2YWY1OTU0ZDdhMzdcIixcclxuICAgIHBvb2w6IHtcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgbWF4OiA1LFxyXG4gICAgICAgIGFjcXVpcmU6IDMwMDAwLFxyXG4gICAgICAgIGlkbGU6IDEwMDAwXHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCBleHByZXNzLCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBMT0dfTUVTU0FHRVMsIFBPUlQgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGRiQ29ubmVjdCB9IGZyb20gJy4vZGF0YS1hY2Nlc3MnO1xyXG5pbXBvcnQgeyBwcm9jZXNzVW5oYW5kbGVkRXJyb3IgfSBmcm9tICcuL21pZGRsZXdhcmVzJztcclxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9taWRkbGV3YXJlcy9sb2dnZXInO1xyXG5pbXBvcnQgcm9vdFJvdXRlciBmcm9tICcuL3JvdXRlcyc7XHJcbmltcG9ydCBodHRwTG9nZ2VyIGZyb20gJy4vbWlkZGxld2FyZXMvaHR0cC1sb2dnZXInO1xyXG5cclxuY29uc3QgYXBwOiBBcHBsaWNhdGlvbiA9IGV4cHJlc3MoKTtcclxuXHJcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xyXG5hcHAudXNlKGh0dHBMb2dnZXIpO1xyXG5hcHAudXNlKHJvb3RSb3V0ZXIpO1xyXG5cclxucHJvY2Vzc1VuaGFuZGxlZEVycm9yKCk7XHJcblxyXG5hcHAubGlzdGVuKFBPUlQsIGFzeW5jICgpID0+IHtcclxuICAgIGxvZ2dlci5pbmZvKGAkeyBMT0dfTUVTU0FHRVMucG9ydExpc3RlbmluZyB9ICR7IFBPUlQgfWApO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgbG9nZ2VyLmVycm9yKGVycm9yKTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxufSk7XHJcbiIsImV4cG9ydCBjb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA0MDAxO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVSUk9SUyA9IHtcclxuICAgIG5vdEZvdW5kOiAnbm90IGZvdW5kIScsXHJcbiAgICBncm91cE5vdEZvdW5kOiAnR3JvdXAgbm90IEZvdW5kIScsXHJcbiAgICBtZXRob2ROb3RBbGxvd2VkOiAnTWV0aG9kIG5vdCBhbGxvd2VkIGhlcmUhJyxcclxuICAgIGV4aXN0OiAnYWxyZWFkeSBleGlzdCEnLFxyXG4gICAgcm91dE5vdEV4aXN0OiAnVGhpcyByb3V0ZSBpcyBub3QgZXhpc3QhJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19NRVNTQUdFUyA9IHtcclxuICAgIGNvbm5lY3Rpb25TdWNjZXNzOiAnQ29ubmVjdGlvbiBoYXMgYmVlbiBlc3RhYmxpc2hlZCBzdWNjZXNzZnVsbHkhJyxcclxuICAgIGNvbm5lY3Rpb25GYWlsZWQ6ICdVbmFibGUgdG8gY29ubmVjdCB0byB0aGUgZGF0YWJhc2U6JyxcclxuICAgIHBvcnRMaXN0ZW5pbmc6ICdMaXN0ZW5pbmcgb24gcG9ydC4uLidcclxufTtcclxuXHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBncm91cFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IHJlcXVlc3RIZWxwZXIgfSBmcm9tICcuL2hlbHBlcic7XHJcblxyXG5jb25zdCBnZXRHcm91cHMgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiBncm91cFNlcnZpY2UuZ2V0QWxsR3JvdXBzKHJlcXVlc3QucXVlcnkpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCBnZXRHcm91cEJ5SWQgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiBncm91cFNlcnZpY2UuZ2V0R3JvdXBCeUlkKHJlcXVlc3QucGFyYW1zLmdyb3VwX2lkKSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuY29uc3QgYWRkR3JvdXAgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiBncm91cFNlcnZpY2UuYWRkR3JvdXAocmVxdWVzdC5ib2R5KSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuY29uc3QgYWRkVXNlcnNUb0dyb3VwID0gKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gZ3JvdXBTZXJ2aWNlLmFkZFVzZXJzVG9Hcm91cChyZXF1ZXN0LnBhcmFtcy5ncm91cF9pZCwgcmVxdWVzdC5ib2R5LnVzZXJJZHMpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCB1cGRhdGVHcm91cCA9IChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IGdyb3VwU2VydmljZS51cGRhdGVHcm91cChyZXF1ZXN0LnBhcmFtcy5ncm91cF9pZCwgcmVxdWVzdC5ib2R5KSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuY29uc3QgZGVsZXRlR3JvdXAgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXF1ZXN0SGVscGVyKCgpID0+XHJcbiAgICBncm91cFNlcnZpY2UuZGVsZXRlR3JvdXAocmVxdWVzdC5wYXJhbXMuZ3JvdXBfaWQpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5leHBvcnQgY29uc3QgZ3JvdXBDb250cm9sbGVyID0ge1xyXG4gICAgZ2V0R3JvdXBzLFxyXG4gICAgZ2V0R3JvdXBCeUlkLFxyXG4gICAgYWRkR3JvdXAsXHJcbiAgICB1cGRhdGVHcm91cCxcclxuICAgIGRlbGV0ZUdyb3VwLFxyXG4gICAgYWRkVXNlcnNUb0dyb3VwXHJcbn07XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBjcmVhdGVFcnJvciwgeyBIdHRwRXJyb3IgfSBmcm9tICdodHRwLWVycm9ycyc7XHJcblxyXG5pbXBvcnQgeyBFUlJPUlMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi9taWRkbGV3YXJlcy9sb2dnZXInO1xyXG5cclxuY29uc3QgZ2V0TG9nTWVzc2FnZSA9IChyZXF1ZXN0OiBSZXF1ZXN0KTogc3RyaW5nID0+IHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IGBwYXJhbXM6ICR7IEpTT04uc3RyaW5naWZ5KHJlcXVlc3QucGFyYW1zKSB9YDtcclxuICAgIGNvbnN0IGJvZHkgPSBgYm9keTogJHsgSlNPTi5zdHJpbmdpZnkocmVxdWVzdC5ib2R5KSB9YDtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYHF1ZXJ5OiAkeyBKU09OLnN0cmluZ2lmeShyZXF1ZXN0LnF1ZXJ5KSB9YDtcclxuICAgIGNvbnN0IHVybCA9IGB1cmw6ICR7IHJlcXVlc3QudXJsIH1gO1xyXG4gICAgY29uc3QgbWV0aG9kID0gYG1ldGhvZDogJHsgcmVxdWVzdC5tZXRob2QgfWA7XHJcblxyXG4gICAgcmV0dXJuIGAkeyBtZXRob2QgfSAkeyB1cmwgfSAkeyBwYXJhbXMgfSAkeyBxdWVyeSB9ICR7IGJvZHkgfWA7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdEhlbHBlciA9IGFzeW5jIChmbjogYW55LCByZXNwb25zZTogUmVzcG9uc2UsIHJlcXVlc3Q6IFJlcXVlc3QpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZuKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgICAgICAgPyByZXNwb25zZS5zZW5kKHsgZGF0YSwgc3RhdHVzOiAnc3VjY2VzcycgfSlcclxuICAgICAgICAgICAgOiByZXNwb25zZS5zZW5kKHsgc3RhdHVzOiAnc3VjY2VzcycgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGxvZ2dlci5lcnJvcihgc3RhdHVzOiAkeyBlcnJvci5zdGF0dXMgfHwgNTAwIH0sIG1lc3NhZ2U6ICR7IGVycm9yLm1lc3NhZ2UgfSwgJHsgZ2V0TG9nTWVzc2FnZShyZXF1ZXN0KSB9YCk7XHJcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzKGVycm9yLnN0YXR1cyB8fCA1MDApLnNlbmQoeyBlcnJvcjogeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0gfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgbm90QWxsb3dlZCA9IChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgIGxldCBlcnJvcjogSHR0cEVycm9yID0gY3JlYXRlRXJyb3IoNDA1LCBFUlJPUlMubWV0aG9kTm90QWxsb3dlZCk7XHJcbiAgICBsb2dnZXIuZXJyb3IoYHN0YXR1czogJHsgNDA1IH0sIG1lc3NhZ2U6ICR7IGVycm9yLm1lc3NhZ2UgfWApO1xyXG5cclxuICAgIHJlc3BvbnNlLnN0YXR1cyhlcnJvci5zdGF0dXMpLnNlbmQoeyBzdGF0dXM6IGVycm9yLnN0YXR1cywgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi91c2Vycy5jb250cm9sbGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9ncm91cC5jb250cm9sbGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi91c2Vycy1ncm91cC5jb250cm9sbGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9pbnZhbGlkLmNvbnRyb2xsZXInO1xyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IsIHsgSHR0cEVycm9yIH0gZnJvbSAnaHR0cC1lcnJvcnMnO1xyXG5cclxuaW1wb3J0IHsgRVJST1JTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi4vbWlkZGxld2FyZXMvbG9nZ2VyJztcclxuXHJcbmNvbnN0IG5vdEFsbG93ZWQgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICBsZXQgZXJyb3I6IEh0dHBFcnJvciA9IGNyZWF0ZUVycm9yKDQwNCwgRVJST1JTLnJvdXROb3RFeGlzdCk7XHJcblxyXG4gICAgbG9nZ2VyLmVycm9yKGBzdGF0dXM6ICR7IDQwNCB9LCBtZXNzYWdlOiAkeyBlcnJvci5tZXNzYWdlIH1gKTtcclxuICAgIHJlc3BvbnNlLnN0YXR1cyhlcnJvci5zdGF0dXMpLnNlbmQoeyBzdGF0dXM6IGVycm9yLnN0YXR1cywgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbnZhbGlkQ29udHJvbGxlciA9IHsgbm90QWxsb3dlZCB9O1xyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgdXNlcnNHcm91cFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IHJlcXVlc3RIZWxwZXIgfSBmcm9tICcuL2hlbHBlcic7XHJcblxyXG5jb25zdCBhZGRVc2Vyc1RvR3JvdXAgPSBhc3luYyAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiB1c2Vyc0dyb3VwU2VydmljZS5hZGRVc2Vyc1RvR3JvdXAocmVxdWVzdC5wYXJhbXMuZ3JvdXBfaWQsIHJlcXVlc3QuYm9keS51c2VySWRzKSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJzR3JvdXBDb250cm9sbGVyID0geyBhZGRVc2Vyc1RvR3JvdXAgfTtcclxuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IHVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQgeyByZXF1ZXN0SGVscGVyIH0gZnJvbSAnLi9oZWxwZXInO1xyXG5cclxuY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiB1c2VyU2VydmljZS5nZXRBbGxVc2VycyhyZXF1ZXN0LnF1ZXJ5KSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuY29uc3QgZ2V0VXNlckJ5SWQgPSBhc3luYyAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiB1c2VyU2VydmljZS5nZXRVc2VyQnlJZChyZXF1ZXN0LnBhcmFtcy51c2VyX2lkKSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuY29uc3QgYWRkVXNlciA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJTZXJ2aWNlLmFkZFVzZXIocmVxdWVzdC5ib2R5KSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuY29uc3QgdXBkYXRlVXNlciA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJTZXJ2aWNlLnVwZGF0ZVVzZXIocmVxdWVzdC5wYXJhbXMudXNlcl9pZCwgcmVxdWVzdC5ib2R5KSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJTZXJ2aWNlLmRlbGV0ZVVzZXIocmVxdWVzdC5wYXJhbXMudXNlcl9pZCksIHJlc3BvbnNlLCByZXF1ZXN0KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2Vyc0NvbnRyb2xsZXIgPSB7XHJcbiAgICBnZXRVc2VycyxcclxuICAgIGRlbGV0ZVVzZXIsXHJcbiAgICB1cGRhdGVVc2VyLFxyXG4gICAgZ2V0VXNlckJ5SWQsXHJcbiAgICBhZGRVc2VyXHJcbn07XHJcbiIsImltcG9ydCB1dWlkIGZyb20gJ3V1aWQnO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25zVHlwZSB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlcnM6IFVzZXJbXSA9IFtcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiAnYW5ha2luJyxcclxuICAgICAgICBsb2dpbjogJ0FuYWtpblNreXdhbGtlcicsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdhbmFraW5wYXNzJyxcclxuICAgICAgICBhZ2U6IDMyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6ICdtYWNlV2luZHUnLFxyXG4gICAgICAgIGxvZ2luOiAnTWFjZVdpbmR1JyxcclxuICAgICAgICBwYXNzd29yZDogJ21hY2VwYXNzJyxcclxuICAgICAgICBhZ2U6IDcyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6ICdsdWtlU2t5d2Fsa2VyJyxcclxuICAgICAgICBsb2dpbjogJ0x1a2VTa3l3YWxrZXInLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnbHVrZXBhc3MnLFxyXG4gICAgICAgIGFnZTogMjNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogJ2MzcDAnLFxyXG4gICAgICAgIGxvZ2luOiAnQy0zUE8nLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnYzNwMHBhc3MnLFxyXG4gICAgICAgIGFnZTogMzJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogJ2RhcnRoTWF1bCcsXHJcbiAgICAgICAgbG9naW46ICdEYXJ0aE1hdWwnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnZGFydGhwYXNzJyxcclxuICAgICAgICBhZ2U6IDQ0XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiAnUXVpR29uSmlubicsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdxdWlwYXNzJyxcclxuICAgICAgICBhZ2U6IDgwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiAnT2JpV2FuS2Vub2JpJyxcclxuICAgICAgICBwYXNzd29yZDogJ29iaXBhc3MnLFxyXG4gICAgICAgIGFnZTogNDdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogJ3BhbHBhdGluZScsXHJcbiAgICAgICAgbG9naW46ICdQYWxwYXRpbmUnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAncGFscGF0aW5lcGFzcycsXHJcbiAgICAgICAgYWdlOiA4MlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogJ1lvZGEnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAneW9kYXBhc3MnLFxyXG4gICAgICAgIGFnZTogMTMwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiAnU25va2UnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnc25va2VwYXNzJyxcclxuICAgICAgICBhZ2U6IDUzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiAnQm9iYUZldHQnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnYm9iYXBhc3MnLFxyXG4gICAgICAgIGFnZTogMzZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdDaGV3YmFjY2EnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnY2hld2JhY2NhcGFzcycsXHJcbiAgICAgICAgYWdlOiAxMzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdIYW5Tb2xvJyxcclxuICAgICAgICBwYXNzd29yZDogJ2hhbnBhc3MnLFxyXG4gICAgICAgIGFnZTogNjZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdLeWxvUmVuJyxcclxuICAgICAgICBwYXNzd29yZDogJ2t5bG9wYXNzJyxcclxuICAgICAgICBhZ2U6IDMwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiAnTGVpYU9yZ2FuYScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdsZWlhcGFzcycsXHJcbiAgICAgICAgYWdlOiA1M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogJ1BhZG1lQW1pZGFsYScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdwYWRtZXBhc3MnLFxyXG4gICAgICAgIGFnZTogMjdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdDb3VudERvb2t1JyxcclxuICAgICAgICBwYXNzd29yZDogJ2Rva29vcGFzcycsXHJcbiAgICAgICAgYWdlOiAxMDJcclxuICAgIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cHM6IHsgZ3JvdXBfaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBwZXJtaXNzaW9uczogUGVybWlzc2lvbnNUeXBlW10gfVtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIGdyb3VwX2lkOiAnbGlnaHRfc2lkZScsXHJcbiAgICAgICAgbmFtZTogJ2xpZ2h0X3NpZGUnLFxyXG4gICAgICAgIHBlcm1pc3Npb25zOiBbICdXUklURScsICdERUxFVEUnIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZ3JvdXBfaWQ6ICdkYXJrX3NpZGUnLFxyXG4gICAgICAgIG5hbWU6ICdkYXJrX3NpZGUnLFxyXG4gICAgICAgIHBlcm1pc3Npb25zOiBbICdXUklURScsICdSRUFEJyBdXHJcbiAgICB9XHJcbl07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJHcm91cHM6IHsgZ3JvdXBfaWQ6IHN0cmluZywgdXNlcl9pZDogc3RyaW5nIH1bXSA9IFtcclxuICAgIHtcclxuICAgICAgICBncm91cF9pZDogJ2xpZ2h0X3NpZGUnLFxyXG4gICAgICAgIHVzZXJfaWQ6ICdhbmFraW4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGdyb3VwX2lkOiAnZGFya19zaWRlJyxcclxuICAgICAgICB1c2VyX2lkOiAncGFscGF0aW5lJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBncm91cF9pZDogJ2xpZ2h0X3NpZGUnLFxyXG4gICAgICAgIHVzZXJfaWQ6ICdtYWNlV2luZHUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGdyb3VwX2lkOiAnbGlnaHRfc2lkZScsXHJcbiAgICAgICAgdXNlcl9pZDogJ2x1a2VTa3l3YWxrZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGdyb3VwX2lkOiAnZGFya19zaWRlJyxcclxuICAgICAgICB1c2VyX2lkOiAnYW5ha2luJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBncm91cF9pZDogJ2Rhcmtfc2lkZScsXHJcbiAgICAgICAgdXNlcl9pZDogJ2RhcnRoTWF1bCdcclxuICAgIH1cclxuXTtcclxuIiwiaW1wb3J0IGNyZWF0ZUVycm9yIGZyb20gJ2h0dHAtZXJyb3JzJztcclxuaW1wb3J0IHsgT3AsIFdoZXJlT3B0aW9ucyB9IGZyb20gJ3NlcXVlbGl6ZSc7XHJcbmltcG9ydCB7IGdyb3Vwc1RvUmVzcG9uc2UsIGdyb3VwVG9SZXNwb25zZSB9IGZyb20gJy4uLy4uL21pZGRsZXdhcmVzL3BhcnNlcnMnO1xyXG5cclxuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ3JvdXAubW9kZWwnO1xyXG5cclxuXHJcbmNvbnN0IEVOVElUWV9OQU1FOiBzdHJpbmcgPSAnZ3JvdXAnO1xyXG5jb25zdCBERUZBVUxUX09GRlNFVDogbnVtYmVyID0gMDtcclxuY29uc3QgREVGQVVMVF9MSU1JVDogbnVtYmVyID0gMTA7XHJcblxyXG5jb25zdCBnZXRBbGwgPSBhc3luYyAocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueVtdPiA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIG9mZnNldFBhcmFtLCBsaW1pdFBhcmFtIH0gPSBwYXJhbXM7XHJcbiAgICBjb25zdCBvZmZzZXQ6IG51bWJlciA9IG9mZnNldFBhcmFtICYmIHBhcnNlSW50KG9mZnNldFBhcmFtLCAxMCkgfHwgREVGQVVMVF9PRkZTRVQ7XHJcbiAgICBjb25zdCBsaW1pdDogbnVtYmVyID0gbGltaXRQYXJhbSAmJiBwYXJzZUludChsaW1pdFBhcmFtLCAxMCkgKyBvZmZzZXQgfHwgREVGQVVMVF9MSU1JVDtcclxuICAgIGNvbnN0IHdoZXJlOiBXaGVyZU9wdGlvbnMgPSBuYW1lID8geyBuYW1lOiB7IFsgT3AuaUxpa2UgXTogYCUkeyBuYW1lIH0lYCB9IH0gOiB7fTtcclxuICAgIGNvbnN0IGdyb3VwcyA9IGF3YWl0IEdyb3VwLmZpbmRBbGwoeyBvZmZzZXQ6IG9mZnNldCwgbGltaXQ6IGxpbWl0LCB3aGVyZSB9KTtcclxuXHJcbiAgICByZXR1cm4gZ3JvdXBzVG9SZXNwb25zZShncm91cHMpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0R3JvdXAgPSBhc3luYyAoZ3JvdXBfaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBncm91cCA9IGF3YWl0IEdyb3VwLmZpbmRPbmUoeyB3aGVyZTogeyBncm91cF9pZDogZ3JvdXBfaWQgfSB9KTtcclxuXHJcbiAgICBpZiAoICFncm91cCApIHRocm93IGNyZWF0ZUVycm9yKDQwNCwgeyBtZXNzYWdlOiBgJHsgRU5USVRZX05BTUUgfSBFUlJPUlMubm90Rm91bmRgIH0pO1xyXG5cclxuICAgIHJldHVybiBncm91cFRvUmVzcG9uc2UoZ3JvdXApO1xyXG59O1xyXG5cclxuY29uc3QgaW5zZXJ0R3JvdXAgPSBhc3luYyAoZ3JvdXBNb2RlbDogR3JvdXApOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnN0IGdyb3VwID0gYXdhaXQgR3JvdXAuZmluZE9uZSh7IHdoZXJlOiB7IG5hbWU6IGdyb3VwTW9kZWwubmFtZSB9IH0pO1xyXG5cclxuICAgIGlmICggZ3JvdXAgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDAsIHsgbWVzc2FnZTogYCR7IEVOVElUWV9OQU1FIH0gRVJST1JTLmV4aXN0YCB9KTtcclxuXHJcbiAgICBncm91cE1vZGVsLnNhdmUoKTtcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZUdyb3VwID0gYXN5bmMgKGdyb3VwX2lkOiBzdHJpbmcsIGdyb3VwVG9VcGRhdGU6IGFueSk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc3QgZ3JvdXAgPSBhd2FpdCBHcm91cC5maW5kT25lKHsgd2hlcmU6IHsgZ3JvdXBfaWQ6IGdyb3VwX2lkIH0gfSk7XHJcblxyXG4gICAgaWYgKCAhZ3JvdXAgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDQsIHsgbWVzc2FnZTogYCR7IEVOVElUWV9OQU1FIH0gRVJST1JTLm5vdEZvdW5kIGAgfSk7XHJcblxyXG4gICAgZ3JvdXAubmFtZSA9IGdyb3VwVG9VcGRhdGUubmFtZTtcclxuICAgIGdyb3VwLnBlcm1pc3Npb25zID0gZ3JvdXBUb1VwZGF0ZS5wZXJtaXNzaW9ucztcclxuXHJcbiAgICBncm91cC5zYXZlKCk7XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVHcm91cCA9IGFzeW5jIChncm91cF9pZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBjb25zdCBncm91cCA9IGF3YWl0IEdyb3VwLmZpbmRPbmUoeyB3aGVyZTogeyBncm91cF9pZDogZ3JvdXBfaWQgfSB9KTtcclxuXHJcbiAgICBpZiAoICFncm91cCApIHRocm93IGNyZWF0ZUVycm9yKDQwNCwgeyBtZXNzYWdlOiBgJHsgRU5USVRZX05BTUUgfSBFUlJPUlMubm90Rm91bmRgIH0pO1xyXG5cclxuICAgIGdyb3VwLmRlc3Ryb3koKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cERBTCA9IHtcclxuICAgIGdldEFsbCxcclxuICAgIGdldEdyb3VwLFxyXG4gICAgaW5zZXJ0R3JvdXAsXHJcbiAgICB1cGRhdGVHcm91cCxcclxuICAgIGRlbGV0ZUdyb3VwXHJcbn07XHJcbiIsImltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSAnc2VxdWVsaXplJztcclxuXHJcbmltcG9ydCB7IFVzZXJzR3JvdXAgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3R5cGluZ3MnO1xyXG5pbXBvcnQgeyBHcm91cCwgVXNlckdyb3VwIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgc2VxdWVsaXplIGFzIGRiSW5zdGFuY2UgfSBmcm9tICcuLi9kYic7XHJcblxyXG5jb25zdCBhZGRVc2Vyc1RvR3JvdXAgPSAoZ3JvdXBfaWQ6IHN0cmluZywgdXNlcl9pZHM6IHN0cmluZ1tdKTogUHJvbWlzZTx2b2lkPiA9PlxyXG4gICAgZGJJbnN0YW5jZS50cmFuc2FjdGlvbihcclxuICAgICAgICBhc3luYyAodHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IEdyb3VwLmZpbmRPbmUoeyB3aGVyZTogeyBncm91cF9pZDogZ3JvdXBfaWQgfSwgdHJhbnNhY3Rpb24gfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBncm91cHM6IFVzZXJzR3JvdXBbXSA9XHJcbiAgICAgICAgICAgICAgICB1c2VyX2lkcy5tYXAoKHVzZXJJZDogc3RyaW5nKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwX2lkOiBncm91cF9pZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VySWRcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IFVzZXJHcm91cC5idWxrQ3JlYXRlKGdyb3VwcywgeyB0cmFuc2FjdGlvbiB9KTtcclxuICAgICAgICAgICAgLy8gYXdhaXQgZ3JvdXAuYWRkVXNlcnModXNlcl9pZHMsIHsgdHJhbnNhY3Rpb24gfSk7IGp1c3QgYW4gZXhhbXBsZSBvZiB1c2luZyBtZXRob2QgZGVmaW5lZCBpbiBtb2RlbFxyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlcnNHcm91cERBTCA9IHsgYWRkVXNlcnNUb0dyb3VwIH07XHJcbiIsImltcG9ydCB7IE9wLCBXaGVyZU9wdGlvbnMgfSBmcm9tICdzZXF1ZWxpemUnO1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IgZnJvbSAnaHR0cC1lcnJvcnMnO1xyXG5cclxuaW1wb3J0IHsgRVJST1JTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgVXNlclRvUmVzcG9uc2UsIFVzZXJUb1VwZGF0ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyB1c2Vyc1RvUmVzcG9uc2UsIHVzZXJUb1Jlc3BvbnNlIH0gZnJvbSAnLi4vLi4vbWlkZGxld2FyZXMnO1xyXG5pbXBvcnQgeyBRdWVyeVBhcmFtcyB9IGZyb20gJy4uL3R5cGluZ3MnO1xyXG5cclxuY29uc3QgRU5USVRZX05BTUU6IHN0cmluZyA9ICd1c2VyJztcclxuY29uc3QgREVGQVVMVF9PRkZTRVQ6IG51bWJlciA9IDA7XHJcbmNvbnN0IERFRkFVTFRfTElNSVQ6IG51bWJlciA9IDEwO1xyXG5cclxuY29uc3QgZ2V0QWxsID0gYXN5bmMgKHBhcmFtczogUXVlcnlQYXJhbXMpOiBQcm9taXNlPFVzZXJUb1Jlc3BvbnNlW10+ID0+IHtcclxuICAgIGNvbnN0IHsgbG9naW4sIG9mZnNldFBhcmFtLCBsaW1pdFBhcmFtIH0gPSBwYXJhbXM7XHJcbiAgICBjb25zdCBvZmZzZXQ6IG51bWJlciA9IG9mZnNldFBhcmFtICYmIHBhcnNlSW50KG9mZnNldFBhcmFtLCAxMCkgfHwgREVGQVVMVF9PRkZTRVQ7XHJcbiAgICBjb25zdCBsaW1pdDogbnVtYmVyID0gbGltaXRQYXJhbSAmJiBwYXJzZUludChsaW1pdFBhcmFtLCAxMCkgKyBvZmZzZXQgfHwgREVGQVVMVF9MSU1JVDtcclxuICAgIGNvbnN0IHdoZXJlOiBXaGVyZU9wdGlvbnMgPSBsb2dpbiA/IHsgbG9naW46IHsgWyBPcC5pTGlrZSBdOiBgJSR7IGxvZ2luIH0lYCB9IH0gOiB7fTtcclxuICAgIGNvbnN0IHVzZXJzOiBVc2VyW10gPSBhd2FpdCBVc2VyLmZpbmRBbGwoeyBvZmZzZXQ6IG9mZnNldCwgbGltaXQ6IGxpbWl0LCB3aGVyZSB9KTtcclxuXHJcbiAgICByZXR1cm4gdXNlcnNUb1Jlc3BvbnNlKHVzZXJzKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFVzZXIgPSBhc3luYyAodXNlcl9pZDogc3RyaW5nKTogUHJvbWlzZTxVc2VyVG9SZXNwb25zZT4gPT4ge1xyXG4gICAgY29uc3QgdXNlcjogVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IHdoZXJlOiB7IHVzZXJfaWQ6IHVzZXJfaWQgfSB9KTtcclxuXHJcbiAgICBpZiAoICF1c2VyICkgdGhyb3cgY3JlYXRlRXJyb3IoNDA0LCB7IG1lc3NhZ2U6IGAkeyBFTlRJVFlfTkFNRSB9ICR7IEVSUk9SUy5ub3RGb3VuZCB9YCB9KTtcclxuXHJcbiAgICByZXR1cm4gdXNlclRvUmVzcG9uc2UodXNlcik7XHJcbn07XHJcblxyXG5jb25zdCBpbnNlcnRVc2VyID0gYXN5bmMgKHVzZXJNb2RlbDogVXNlcik6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc3QgdXNlcjogVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IHdoZXJlOiB7IGxvZ2luOiB1c2VyTW9kZWwubG9naW4gfSB9KTtcclxuXHJcbiAgICBpZiAoIHVzZXIgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDAsIHsgbWVzc2FnZTogYCR7IEVOVElUWV9OQU1FIH0gJHsgRVJST1JTLmV4aXN0IH1gIH0pO1xyXG5cclxuICAgIHVzZXJNb2RlbC5zYXZlKCk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKHVzZXJfaWQ6IHN0cmluZywgdXNlclRvVXBkYXRlOiBVc2VyVG9VcGRhdGUpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnN0IHVzZXI6IFVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyB3aGVyZTogeyB1c2VyX2lkOiB1c2VyX2lkIH0gfSk7XHJcblxyXG4gICAgaWYgKCAhdXNlciApIHRocm93IGNyZWF0ZUVycm9yKDQwNCwgeyBtZXNzYWdlOiBgJHsgRU5USVRZX05BTUUgfSAkeyBFUlJPUlMubm90Rm91bmQgfWAgfSk7XHJcblxyXG4gICAgdXNlci5sb2dpbiA9IHVzZXJUb1VwZGF0ZS5sb2dpbjtcclxuICAgIHVzZXIuYWdlID0gdXNlclRvVXBkYXRlLmFnZTtcclxuXHJcbiAgICB1c2VyLnNhdmUoKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAodXNlcl9pZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBjb25zdCB1c2VyOiBVc2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgd2hlcmU6IHsgdXNlcl9pZDogdXNlcl9pZCB9IH0pO1xyXG5cclxuICAgIGlmICggIXVzZXIgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDQsIHsgbWVzc2FnZTogYCR7IEVOVElUWV9OQU1FIH0gJHsgRVJST1JTLm5vdEZvdW5kIH1gIH0pO1xyXG5cclxuICAgIHVzZXIuZGVzdHJveSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJEQUwgPSB7XHJcbiAgICBnZXRBbGwsXHJcbiAgICBnZXRVc2VyLFxyXG4gICAgaW5zZXJ0VXNlcixcclxuICAgIHVwZGF0ZVVzZXIsXHJcbiAgICBkZWxldGVVc2VyXHJcbn07XHJcbiIsImltcG9ydCB7IFNlcXVlbGl6ZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcclxuXHJcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uL21pZGRsZXdhcmVzL2xvZ2dlcic7XHJcbmltcG9ydCB7IEdyb3VwLCBVc2VyLCBVc2VyR3JvdXAgfSBmcm9tICcuLi9tb2RlbHMvJztcclxuaW1wb3J0IHsgdXNlcnMsIGdyb3VwcywgdXNlckdyb3VwcyB9IGZyb20gJy4vYmFja3VwJztcclxuaW1wb3J0IHsgTE9HX01FU1NBR0VTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IGRiQ29uZmlnIGZyb20gJy4vLi4vLi4vY29uZmlnL2NvbmZpZyc7XHJcblxyXG5jb25zdCBtb2RlbHMgPSBbXHJcbiAgICBVc2VyLFxyXG4gICAgR3JvdXAsXHJcbiAgICBVc2VyR3JvdXBcclxuXTtcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShcclxuICAgIGRiQ29uZmlnLmRhdGFiYXNlLFxyXG4gICAgZGJDb25maWcudXNlcm5hbWUsXHJcbiAgICBkYkNvbmZpZy5wYXNzd29yZCxcclxuICAgIHtcclxuICAgICAgICBkZWZpbmU6IHtcclxuICAgICAgICAgICAgdGltZXN0YW1wczogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9ydDogZGJDb25maWcucG9ydCxcclxuICAgICAgICBkaWFsZWN0OiBkYkNvbmZpZy5kaWFsZWN0LFxyXG4gICAgICAgIGhvc3Q6IGRiQ29uZmlnLmhvc3QsXHJcbiAgICAgICAgZGlhbGVjdE9wdGlvbnM6IHsgc3NsOiB0cnVlIH0sXHJcbiAgICAgICAgcG9vbDogZGJDb25maWcucG9vbCxcclxuICAgICAgICBtb2RlbHM6IFsgLi4ubW9kZWxzIF1cclxuICAgIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBkYkNvbm5lY3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBzZXF1ZWxpemUuc3luYyh7IGZvcmNlOiB0cnVlIH0pO1xyXG4gICAgbG9nZ2VyLmluZm8oTE9HX01FU1NBR0VTLmNvbm5lY3Rpb25TdWNjZXNzKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9nZ2VyLmluZm8oJ0RhdGFiYXNlIHJlc3RvcmluZyBpbiBwcm9jZXNzLi4uJyk7XHJcbiAgICAgICAgYXdhaXQgVXNlci5idWxrQ3JlYXRlKHVzZXJzKTtcclxuICAgICAgICBhd2FpdCBHcm91cC5idWxrQ3JlYXRlKGdyb3Vwcyk7XHJcbiAgICAgICAgYXdhaXQgVXNlckdyb3VwLmJ1bGtDcmVhdGUodXNlckdyb3Vwcyk7XHJcbiAgICAgICAgbG9nZ2VyLmluZm8oJ0RhdGFiYXNlIHJlc3RvcmluZyBjb21wbGV0ZSEnKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgbG9nZ2VyLmVycm9yKHsgbmFtZTogZXJyb3IubmFtZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSwgc3RhY2s6IGVycm9yLnN0YWNrIH0pO1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG59O1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL2RhbC91c2VyREFMJztcclxuZXhwb3J0ICogZnJvbSAnLi9kYWwvZ3JvdXAuREFMJztcclxuZXhwb3J0ICogZnJvbSAnLi9kYWwvdXNlci1ncm91cC5EQUwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RiJztcclxuZXhwb3J0ICogZnJvbSAnLi91c2Vycy5wYXJzZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL3R5cGluZ3MnO1xyXG4iLCJpbXBvcnQgeyBVc2VyVG9SZXNwb25zZSwgVXNlclRvQWRkLCBVc2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90eXBpbmdzJztcclxuaW1wb3J0IHsgVXNlciBhcyBVc2VyTW9kZWwgfSBmcm9tICcuLy4uL21vZGVscy91c2VyLm1vZGVsJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyVG9SZXNwb25zZSA9ICh1c2VyOiBVc2VyKTogVXNlclRvUmVzcG9uc2UgPT4gKHtcclxuICAgIHVzZXJfaWQ6IHVzZXIudXNlcl9pZCxcclxuICAgIGxvZ2luOiB1c2VyLmxvZ2luLFxyXG4gICAgYWdlOiB1c2VyLmFnZVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2Vyc1RvUmVzcG9uc2UgPSAodXNlcnM6IFVzZXJbXSk6IFVzZXJUb1Jlc3BvbnNlW10gPT4gdXNlcnMubWFwKHVzZXIgPT4gdXNlclRvUmVzcG9uc2UodXNlcikpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJUb0RiID0gKHVzZXI6IFVzZXJUb0FkZCwgdXNlcl9pZDogc3RyaW5nKTogVXNlck1vZGVsID0+XHJcbiAgICBuZXcgVXNlck1vZGVsKHtcclxuICAgICAgICB1c2VyX2lkOiB1c2VyX2lkLFxyXG4gICAgICAgIGxvZ2luOiB1c2VyLmxvZ2luLFxyXG4gICAgICAgIGFnZTogdXNlci5hZ2UsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcclxuICAgIH0pO1xyXG4iLCJleHBvcnQgY29uc3QgTE9HX0RJUk5BTUU6IHN0cmluZyA9ICdsb2dzJztcclxuXHJcbmV4cG9ydCBjb25zdCBIQU5ETEU6IHsgWyBrZXk6IHN0cmluZyBdOiB7IG1lc3NhZ2U6IHN0cmluZzsgfSB9ID0ge1xyXG4gICAgWyAndW5oYW5kbGVkUmVqZWN0aW9uJyBdOiB7XHJcbiAgICAgICAgbWVzc2FnZTogJ1VuaGFuZGxlZCBSZWplY3Rpb24gYXQnXHJcbiAgICB9LFxyXG4gICAgWyAndW5jYXVnaHRFeGNlcHRpb24nIF06IHtcclxuICAgICAgICBtZXNzYWdlOiAnVW5jYXVnaHQgRXhjZXB0aW9uIHRocm93bidcclxuICAgIH1cclxufTtcclxuIiwiaW1wb3J0IHsgTmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBgcGFyYW1zOiAkeyBKU09OLnN0cmluZ2lmeShyZXF1ZXN0LnBhcmFtcykgfWA7XHJcbiAgICBjb25zdCBib2R5ID0gYGJvZHk6ICR7IEpTT04uc3RyaW5naWZ5KHJlcXVlc3QuYm9keSkgfWA7XHJcbiAgICBjb25zdCBxdWVyeSA9IGBxdWVyeTogJHsgSlNPTi5zdHJpbmdpZnkocmVxdWVzdC5xdWVyeSkgfWA7XHJcbiAgICBjb25zdCB1cmwgPSBgdXJsOiAkeyByZXF1ZXN0LnVybCB9YDtcclxuICAgIGNvbnN0IG1ldGhvZCA9IGBtZXRob2Q6ICR7IHJlcXVlc3QubWV0aG9kIH1gO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQ6IG51bWJlciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGxldCBleGVjdXRpb25UaW1lOiBzdHJpbmc7XHJcbiAgICAgICAgcmVxdWVzdC5vbignY2xvc2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGV4ZWN1dGlvblRpbWUgPSBgZXhlY3V0aW9uVGltZTogJHsgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydCB9IG1sc2A7XHJcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvKGAkeyBtZXRob2QgfSAkeyB1cmwgfSAkeyBwYXJhbXMgfSAkeyBxdWVyeSB9ICR7IGJvZHkgfSAkeyBleGVjdXRpb25UaW1lIH1gKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgbG9nZ2VyLmVycm9yKGVycm9yKSB9XHJcblxyXG4gICAgbmV4dCgpO1xyXG59O1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL3ZhbGlkYXRpb24uc2VydmlzZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcGFyc2Vycyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcHJvY2Vzcy51bmhhbmRsZWRFcnJvcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vaHR0cC1sb2dnZXInO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVMb2dnZXIsIHRyYW5zcG9ydHMsIGZvcm1hdCB9IGZyb20gJ3dpbnN0b24nXHJcbmltcG9ydCB7IFRyYW5zZm9ybWFibGVJbmZvIH0gZnJvbSAnbG9nZm9ybSc7XHJcblxyXG5jb25zdCBMT0dfRElSTkFNRSA9ICdsb2dzJztcclxuXHJcbmNvbnN0IExPR19GSUxFX01BWF9TSVpFOiBudW1iZXIgPSA1MDAwO1xyXG5cclxuY29uc3QgeyBjb2xvcml6ZSwgY29tYmluZSwgcHJpbnRmLCB0aW1lc3RhbXAgfSA9IGZvcm1hdDtcclxuY29uc3QgZm9ybWF0dGVyID0gcHJpbnRmKCh7IGxldmVsLCBtZXNzYWdlLCB0aW1lc3RhbXAgfTogVHJhbnNmb3JtYWJsZUluZm8pOiBzdHJpbmcgPT4gYCR7IHRpbWVzdGFtcCB9IFskeyBsZXZlbCB9XTogJHsgbWVzc2FnZSB9YCk7XHJcblxyXG5jb25zdCBjb25zb2xlVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydHMuQ29uc29sZSh7IGZvcm1hdDogY29tYmluZShjb2xvcml6ZSgpLCB0aW1lc3RhbXAoKSwgZm9ybWF0dGVyKSB9KTtcclxuY29uc3QgZXJyb3JUcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0cy5GaWxlKHsgZGlybmFtZTogTE9HX0RJUk5BTUUsIGZpbGVuYW1lOiAnZXJyb3JzLmxvZycsIGxldmVsOiAnZXJyb3InLCBtYXhzaXplOiBMT0dfRklMRV9NQVhfU0laRSB9KTtcclxuY29uc3Qgd2FyblRyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRzLkZpbGUoeyBkaXJuYW1lOiBMT0dfRElSTkFNRSwgZmlsZW5hbWU6ICd3YXJuaW5ncy5sb2cnLCBsZXZlbDogJ3dhcm4nLCBtYXhzaXplOiBMT0dfRklMRV9NQVhfU0laRSB9KTtcclxuY29uc3QgaW5mb1RyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRzLkZpbGUoeyBkaXJuYW1lOiBMT0dfRElSTkFNRSwgZmlsZW5hbWU6ICdpbmZvLmxvZycsIGxldmVsOiAnaW5mbycsIG1heHNpemU6IExPR19GSUxFX01BWF9TSVpFIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2dlciA9IGNyZWF0ZUxvZ2dlcih7XHJcbiAgICBleGl0T25FcnJvcjogZmFsc2UsXHJcbiAgICBmb3JtYXQ6IGNvbWJpbmUodGltZXN0YW1wKCksIGZvcm1hdHRlciksXHJcbiAgICB0cmFuc3BvcnRzOiBbXHJcbiAgICAgICAgY29uc29sZVRyYW5zcG9ydCxcclxuICAgICAgICBlcnJvclRyYW5zcG9ydCxcclxuICAgICAgICBpbmZvVHJhbnNwb3J0LFxyXG4gICAgICAgIHdhcm5UcmFuc3BvcnRcclxuICAgIF1cclxufSk7XHJcbiIsImltcG9ydCB7IEdyb3VwLCBHcm91cFRvRGIsIFVzZXIsIFVzZXJUb0FkZCwgVXNlclRvUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3R5cGluZ3MnO1xyXG5pbXBvcnQgeyBVc2VyIGFzIFVzZXJNb2RlbCB9IGZyb20gJy4uL21vZGVscy91c2VyLm1vZGVsJztcclxuaW1wb3J0IHsgR3JvdXAgYXMgR3JvdXBNb2RlbCB9IGZyb20gJy4vLi4vbW9kZWxzL2dyb3VwLm1vZGVsJztcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cFRvUmVzcG9uc2UgPSAoZ3JvdXA6IEdyb3VwKTogR3JvdXAgPT4gKHtcclxuICAgIGdyb3VwX2lkOiBncm91cC5ncm91cF9pZCxcclxuICAgIG5hbWU6IGdyb3VwLm5hbWUsXHJcbiAgICBwZXJtaXNzaW9uczogZ3JvdXAucGVybWlzc2lvbnNcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ3JvdXBzVG9SZXNwb25zZSA9IChncm91cHM6IEdyb3VwW10pOiBHcm91cFtdID0+IGdyb3Vwcy5tYXAoZ3JvdXAgPT4gZ3JvdXBUb1Jlc3BvbnNlKGdyb3VwKSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ3JvdXBUb0RiID0gKGdyb3VwOiBHcm91cFRvRGIsIGdyb3VwX2lkOiBzdHJpbmcpID0+XHJcbiAgICBuZXcgR3JvdXBNb2RlbCh7XHJcbiAgICAgICAgZ3JvdXBfaWQ6IGdyb3VwX2lkLFxyXG4gICAgICAgIG5hbWU6IGdyb3VwLm5hbWUsXHJcbiAgICAgICAgcGVybWlzc2lvbnM6IGdyb3VwLnBlcm1pc3Npb25zXHJcbiAgICB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyVG9SZXNwb25zZSA9ICh1c2VyOiBVc2VyKTogVXNlclRvUmVzcG9uc2UgPT4gKHtcclxuICAgIHVzZXJfaWQ6IHVzZXIudXNlcl9pZCxcclxuICAgIGxvZ2luOiB1c2VyLmxvZ2luLFxyXG4gICAgYWdlOiB1c2VyLmFnZVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2Vyc1RvUmVzcG9uc2UgPSAodXNlcnM6IFVzZXJbXSk6IFVzZXJUb1Jlc3BvbnNlW10gPT4gdXNlcnMubWFwKHVzZXIgPT4gdXNlclRvUmVzcG9uc2UodXNlcikpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJUb0RiID0gKHVzZXI6IFVzZXJUb0FkZCwgdXNlcl9pZDogc3RyaW5nKTogVXNlck1vZGVsID0+XHJcbiAgICBuZXcgVXNlck1vZGVsKHtcclxuICAgICAgICB1c2VyX2lkOiB1c2VyX2lkLFxyXG4gICAgICAgIGxvZ2luOiB1c2VyLmxvZ2luLFxyXG4gICAgICAgIGFnZTogdXNlci5hZ2UsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcclxuICAgIH0pO1xyXG4iLCJpbXBvcnQgeyBIQU5ETEUgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9jZXNzVW5oYW5kbGVkRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBwcm9jZXNzXHJcbiAgICAgICAgLm9uKCd1bmhhbmRsZWRSZWplY3Rpb24nLCAocmVhc29uOiBudW1iZXIsIHByb21pc2U6IFByb21pc2U8YW55PikgPT4ge1xyXG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoYCR7IEhBTkRMRVsgJ3VuaGFuZGxlZFJlamVjdGlvbicgXS5tZXNzYWdlIH06ICR7IEpTT04uc3RyaW5naWZ5KHByb21pc2UpIH0sIHJlYXNvbjogJHsgcmVhc29uIH1gKTtcclxuICAgICAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKCd1bmNhdWdodEV4Y2VwdGlvbicsIChlcnJvcjogRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGAkeyBIQU5ETEVbICd1bmNhdWdodEV4Y2VwdGlvbicgXS5tZXNzYWdlIH0gLSAkeyBlcnJvciB9YCk7XHJcbiAgICAgICAgICAgIHByb2Nlc3MuZXhpdCgxKTtcclxuICAgICAgICB9KTtcclxufTtcclxuIiwiaW1wb3J0ICogYXMgSm9pIGZyb20gJ0BoYXBpL2pvaSc7XHJcbmltcG9ydCB7IGNyZWF0ZVZhbGlkYXRvciB9IGZyb20gJ2V4cHJlc3Mtam9pLXZhbGlkYXRpb24nO1xyXG5cclxuY29uc3QgTUlOX0FHRSA9IDQ7XHJcbmNvbnN0IE1BWF9BR0UgPSAxMzA7XHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRhdG9yID0gY3JlYXRlVmFsaWRhdG9yKCk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVXNlckJvZHlTY2hlbWEgPSBKb2kub2JqZWN0KHtcclxuICAgIGxvZ2luOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIGFnZTogSm9pLm51bWJlcigpLmdyZWF0ZXIoTUlOX0FHRSkubGVzcyhNQVhfQUdFKS5yZXF1aXJlZCgpLFxyXG4gICAgcGFzc3dvcmQ6IEpvaS5zdHJpbmcoKS5hbHBoYW51bSgpLnJlcXVpcmVkKClcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlckJvZHlTY2hlbWEgPSBKb2kub2JqZWN0KHtcclxuICAgIGxvZ2luOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIGFnZTogSm9pLm51bWJlcigpLmdyZWF0ZXIoTUlOX0FHRSkubGVzcyhNQVhfQUdFKS5yZXF1aXJlZCgpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXJRdWVyeVNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgdXNlcl9pZDogSm9pLnN0cmluZygpLnJlcXVpcmVkKClcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkR3JvdXBCb2R5U2NoZW1hID0gSm9pLm9iamVjdCh7XHJcbiAgICBuYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIHBlcm1pc3Npb25zOiBKb2kuYXJyYXkoKS5pdGVtcyhKb2kuc3RyaW5nKCkpLnJlcXVpcmVkKClcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlR3JvdXBRdWVyeVNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgZ3JvdXBfaWQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUdyb3VwQm9keVNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgbmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICBwZXJtaXNzaW9uczogSm9pLmFycmF5KCkuaXRlbXMoSm9pLnN0cmluZygpKS5yZXF1aXJlZCgpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFVzZXJzVG9Hcm91cFF1ZXJ5U2NoZW1hID0gSm9pLm9iamVjdCh7XHJcbiAgICBncm91cF9pZDogSm9pLnN0cmluZygpLnJlcXVpcmVkKClcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVXNlcnNUb0dyb3VwQm9keVNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgdXNlcklkczogSm9pLmFycmF5KCkuaXRlbXMoSm9pLnN0cmluZygpKS5yZXF1aXJlZCgpXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzY2hlbWE6ICduZXcnLFxyXG4gICAgdGFibGVzOiB7XHJcbiAgICAgICAgdXNlcnM6ICd1c2VycycsXHJcbiAgICAgICAgZ3JvdXBzOiAnZ3JvdXBzJyxcclxuICAgICAgICB1c2VyR3JvdXBzOiAndXNlci1ncm91cHMnXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWxsb3dOdWxsLCBCZWxvbmdzVG9NYW55LCBDb2x1bW4sIERhdGFUeXBlLCBNb2RlbCwgUHJpbWFyeUtleSwgVGFibGUsIFVuaXF1ZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgeyBVc2VyR3JvdXAgfSBmcm9tICcuL3VzZXItZ3JvdXAubW9kZWwnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyLm1vZGVsJztcclxuXHJcbmV4cG9ydCB0eXBlIFBlcm1pc3Npb25zVHlwZSA9ICdSRUFEJyB8ICdXUklURScgfCAnREVMRVRFJyB8ICdTSEFSRScgfCAnVVBMT0FEX0ZJTEVTJztcclxuXHJcbkBUYWJsZSh7XHJcbiAgICBzY2hlbWE6IGNvbmZpZy5zY2hlbWEsXHJcbiAgICB0YWJsZU5hbWU6IGNvbmZpZy50YWJsZXMuZ3JvdXBzLFxyXG4gICAgcGFyYW5vaWQ6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcm91cCBleHRlbmRzIE1vZGVsPEdyb3VwPiB7XHJcbiAgICBAQmVsb25nc1RvTWFueSgoKSA9PiBVc2VyLCAoKSA9PiBVc2VyR3JvdXApXHJcbiAgICB1c2VyczogVXNlcltdO1xyXG5cclxuICAgIC8vIGFkZFVzZXJzOiBCZWxvbmdzVG9NYW55QWRkQXNzb2NpYXRpb25zTWl4aW48VXNlciwgc3RyaW5nPjsgSnVzdCBhbiBleGFtcGxlIG9mIGFkZGluZyBtZXRob2RzIHRvIG1vZGVsXHJcblxyXG4gICAgQFByaW1hcnlLZXlcclxuICAgIEBVbmlxdWUodHJ1ZSlcclxuICAgIEBBbGxvd051bGwoZmFsc2UpXHJcbiAgICBAQ29sdW1uXHJcbiAgICBncm91cF9pZDogc3RyaW5nO1xyXG5cclxuICAgIEBDb2x1bW5cclxuICAgIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBAQ29sdW1uKERhdGFUeXBlLkFSUkFZKERhdGFUeXBlLlNUUklORykpXHJcbiAgICBwZXJtaXNzaW9uczogUGVybWlzc2lvbnNUeXBlW107XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi91c2VyLm1vZGVsJztcclxuZXhwb3J0ICogZnJvbSAnLi9ncm91cC5tb2RlbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdXNlci1ncm91cC5tb2RlbCc7XHJcbiIsImltcG9ydCB7IEF1dG9JbmNyZW1lbnQsIENvbHVtbiwgRm9yZWlnbktleSwgTW9kZWwsIFByaW1hcnlLZXksIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi9ncm91cC5tb2RlbCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXIubW9kZWwnO1xyXG5cclxuQFRhYmxlKHtcclxuICAgIHNjaGVtYTogY29uZmlnLnNjaGVtYSxcclxuICAgIHRhYmxlTmFtZTogY29uZmlnLnRhYmxlcy51c2VyR3JvdXBzLFxyXG4gICAgcGFyYW5vaWQ6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJHcm91cCBleHRlbmRzIE1vZGVsPFVzZXJHcm91cD4ge1xyXG4gICAgQFByaW1hcnlLZXlcclxuICAgIEBBdXRvSW5jcmVtZW50XHJcbiAgICBAQ29sdW1uXHJcbiAgICB1c2VyX2dyb3VwX2lkOiBudW1iZXI7XHJcblxyXG4gICAgQEZvcmVpZ25LZXkoKCkgPT4gR3JvdXApXHJcbiAgICBAQ29sdW1uXHJcbiAgICBncm91cF9pZDogc3RyaW5nO1xyXG5cclxuICAgIEBGb3JlaWduS2V5KCgpID0+IFVzZXIpXHJcbiAgICBAQ29sdW1uXHJcbiAgICB1c2VyX2lkOiBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29sdW1uLCBUYWJsZSwgTW9kZWwsIFByaW1hcnlLZXksIEFsbG93TnVsbCwgVW5pcXVlLCBEYXRhVHlwZSwgQmVsb25nc1RvTWFueSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4vZ3JvdXAubW9kZWwnO1xyXG5pbXBvcnQgeyBVc2VyR3JvdXAgfSBmcm9tICcuL3VzZXItZ3JvdXAubW9kZWwnO1xyXG5cclxuQFRhYmxlKHtcclxuICAgIHNjaGVtYTogY29uZmlnLnNjaGVtYSxcclxuICAgIHRhYmxlTmFtZTogY29uZmlnLnRhYmxlcy51c2VycyxcclxuICAgIHBhcmFub2lkOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgTW9kZWw8VXNlcj4ge1xyXG4gICAgQEJlbG9uZ3NUb01hbnkoKCkgPT4gR3JvdXAsICgpID0+IFVzZXJHcm91cClcclxuICAgIGdyb3VwczogR3JvdXBbXTtcclxuXHJcbiAgICBAUHJpbWFyeUtleVxyXG4gICAgQFVuaXF1ZSh0cnVlKVxyXG4gICAgQEFsbG93TnVsbChmYWxzZSlcclxuICAgIEBDb2x1bW4oRGF0YVR5cGUuU1RSSU5HKVxyXG4gICAgQENvbHVtblxyXG4gICAgdXNlcl9pZDogc3RyaW5nO1xyXG5cclxuICAgIEBBbGxvd051bGwoZmFsc2UpXHJcbiAgICBAVW5pcXVlKHRydWUpXHJcbiAgICBAQ29sdW1uXHJcbiAgICBsb2dpbjogc3RyaW5nO1xyXG5cclxuICAgIEBBbGxvd051bGwoZmFsc2UpXHJcbiAgICBAQ29sdW1uXHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuICAgIEBBbGxvd051bGwoZmFsc2UpXHJcbiAgICBAQ29sdW1uXHJcbiAgICBhZ2U6IG51bWJlcjtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgUk9VVEVTID0ge1xyXG4gICAgdXNlclJvdXRlczoge1xyXG4gICAgICAgIHJvb3Q6ICcvJyxcclxuICAgICAgICB1c2VyX2lkOiAnLzp1c2VyX2lkJyxcclxuICAgICAgICB1c2VyczogJy91c2VycydcclxuICAgIH0sXHJcbiAgICBncm91cFJvdXRlczoge1xyXG4gICAgICAgIHJvb3Q6ICcvJyxcclxuICAgICAgICBncm91cF9pZDogJy86Z3JvdXBfaWQvJyxcclxuICAgICAgICB1c2VyczogJy86Z3JvdXBfaWQvdXNlcnMnLFxyXG4gICAgICAgIGdyb3VwczogJy9ncm91cHMnXHJcbiAgICB9LFxyXG4gICAgdXNlckdyb3VwUm91dGVzOiB7XHJcbiAgICAgICAgcm9vdDogJy8nLFxyXG4gICAgICAgIGdyb3VwX2lkOiAnLzpncm91cF9pZCcsXHJcbiAgICAgICAgdXNlcnNfZ3JvdXA6ICcvdXNlcnNfZ3JvdXAnLFxyXG4gICAgfSxcclxuICAgIGludmFsaWQ6IHtcclxuICAgICAgICByb290OiAnKidcclxuICAgIH1cclxufTtcclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBncm91cENvbnRyb2xsZXIsIHVzZXJzR3JvdXBDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMnO1xyXG5pbXBvcnQgeyBub3RBbGxvd2VkIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvaGVscGVyJztcclxuaW1wb3J0IHtcclxuICAgIGFkZEdyb3VwQm9keVNjaGVtYSxcclxuICAgIGFkZFVzZXJzVG9Hcm91cEJvZHlTY2hlbWEsXHJcbiAgICBhZGRVc2Vyc1RvR3JvdXBRdWVyeVNjaGVtYSxcclxuICAgIHVwZGF0ZUdyb3VwQm9keVNjaGVtYSxcclxuICAgIHVwZGF0ZUdyb3VwUXVlcnlTY2hlbWEsXHJcbiAgICB2YWxpZGF0b3JcclxufSBmcm9tICcuLi9taWRkbGV3YXJlcyc7XHJcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IGdyb3VwUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuY29uc3Qgcm91dGVzID0gUk9VVEVTLmdyb3VwUm91dGVzO1xyXG5cclxuZ3JvdXBSb3V0ZXIucm91dGUocm91dGVzLnJvb3QpXHJcbiAgICAuZ2V0KGdyb3VwQ29udHJvbGxlci5nZXRHcm91cHMpXHJcbiAgICAucG9zdCh2YWxpZGF0b3IuYm9keShhZGRHcm91cEJvZHlTY2hlbWEpLCBncm91cENvbnRyb2xsZXIuYWRkR3JvdXApXHJcbiAgICAuYWxsKG5vdEFsbG93ZWQpO1xyXG5cclxuZ3JvdXBSb3V0ZXIucm91dGUocm91dGVzLmdyb3VwX2lkKVxyXG4gICAgLmdldChncm91cENvbnRyb2xsZXIuZ2V0R3JvdXBCeUlkKVxyXG4gICAgLnB1dCh2YWxpZGF0b3IucGFyYW1zKHVwZGF0ZUdyb3VwUXVlcnlTY2hlbWEpLCB2YWxpZGF0b3IuYm9keSh1cGRhdGVHcm91cEJvZHlTY2hlbWEpLCBncm91cENvbnRyb2xsZXIudXBkYXRlR3JvdXApXHJcbiAgICAuZGVsZXRlKGdyb3VwQ29udHJvbGxlci5kZWxldGVHcm91cClcclxuICAgIC5hbGwobm90QWxsb3dlZCk7XHJcblxyXG5ncm91cFJvdXRlci5yb3V0ZShyb3V0ZXMudXNlcnMpXHJcbiAgICAucG9zdChcclxuICAgICAgICB2YWxpZGF0b3IucGFyYW1zKGFkZFVzZXJzVG9Hcm91cFF1ZXJ5U2NoZW1hKSxcclxuICAgICAgICB2YWxpZGF0b3IuYm9keShhZGRVc2Vyc1RvR3JvdXBCb2R5U2NoZW1hKSxcclxuICAgICAgICB1c2Vyc0dyb3VwQ29udHJvbGxlci5hZGRVc2Vyc1RvR3JvdXBcclxuICAgIClcclxuICAgIC5hbGwobm90QWxsb3dlZCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBncm91cFJvdXRlcjtcclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCBncm91cFJvdXRlciBmcm9tICcuL2dyb3VwLXJvdXRlcic7XHJcbmltcG9ydCBpbnZhbGlkUm91dGVyIGZyb20gJy4vaW52YWxpZC1yb3V0ZXMnO1xyXG5pbXBvcnQgdXNlclJvdXRlciBmcm9tICcuL3VzZXItcm91dGVyJztcclxuXHJcbmNvbnN0IHJvb3RSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5yb290Um91dGVyLnVzZShST1VURVMudXNlclJvdXRlcy51c2VycywgdXNlclJvdXRlcik7XHJcbnJvb3RSb3V0ZXIudXNlKFJPVVRFUy5ncm91cFJvdXRlcy5ncm91cHMsIGdyb3VwUm91dGVyKTtcclxucm9vdFJvdXRlci51c2UoUk9VVEVTLmludmFsaWQucm9vdCwgaW52YWxpZFJvdXRlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290Um91dGVyO1xyXG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IGludmFsaWRDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMnO1xyXG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBpbnZhbGlkUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuY29uc3Qgcm91dGVzID0gUk9VVEVTLmludmFsaWQ7XHJcblxyXG5pbnZhbGlkUm91dGVyLnJvdXRlKHJvdXRlcy5yb290KS5hbGwoaW52YWxpZENvbnRyb2xsZXIubm90QWxsb3dlZCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnZhbGlkUm91dGVyO1xyXG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IHVzZXJzQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzJztcclxuaW1wb3J0IHsgbm90QWxsb3dlZCB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL2hlbHBlcic7XHJcbmltcG9ydCB7IGFkZFVzZXJCb2R5U2NoZW1hLCB1cGRhdGVVc2VyQm9keVNjaGVtYSwgdXBkYXRlVXNlclF1ZXJ5U2NoZW1hLCB2YWxpZGF0b3IgfSBmcm9tICcuLi9taWRkbGV3YXJlcyc7XHJcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IHVzZXJSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5jb25zdCByb3V0ZXMgPSBST1VURVMudXNlclJvdXRlcztcclxuXHJcbnVzZXJSb3V0ZXIucm91dGUocm91dGVzLnJvb3QpXHJcbiAgICAuZ2V0KHVzZXJzQ29udHJvbGxlci5nZXRVc2VycylcclxuICAgIC5wb3N0KHZhbGlkYXRvci5ib2R5KGFkZFVzZXJCb2R5U2NoZW1hKSwgdXNlcnNDb250cm9sbGVyLmFkZFVzZXIpXHJcbiAgICAuYWxsKG5vdEFsbG93ZWQpO1xyXG5cclxudXNlclJvdXRlci5yb3V0ZShyb3V0ZXMudXNlcl9pZClcclxuICAgIC5nZXQodXNlcnNDb250cm9sbGVyLmdldFVzZXJCeUlkKVxyXG4gICAgLnB1dCh2YWxpZGF0b3IucGFyYW1zKHVwZGF0ZVVzZXJRdWVyeVNjaGVtYSksIHZhbGlkYXRvci5ib2R5KHVwZGF0ZVVzZXJCb2R5U2NoZW1hKSwgdXNlcnNDb250cm9sbGVyLnVwZGF0ZVVzZXIpXHJcbiAgICAuZGVsZXRlKHVzZXJzQ29udHJvbGxlci5kZWxldGVVc2VyKVxyXG4gICAgLmFsbChub3RBbGxvd2VkKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJSb3V0ZXI7XHJcbiIsImltcG9ydCB1dWlkIGZyb20gJ3V1aWQnO1xyXG5cclxuaW1wb3J0IHsgZ3JvdXBEQUwsIFF1ZXJ5UGFyYW1zIH0gZnJvbSAnLi4vZGF0YS1hY2Nlc3MnO1xyXG5pbXBvcnQgeyBHcm91cCwgR3JvdXBUb0RiLCBHcm91cFRvVXBkYXRlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90eXBpbmdzJztcclxuaW1wb3J0IHsgZ3JvdXBUb0RiIH0gZnJvbSAnLi4vbWlkZGxld2FyZXMnO1xyXG5pbXBvcnQgeyB1c2Vyc0dyb3VwU2VydmljZSB9IGZyb20gJy4vdXNlcnMtZ3JvdXAuc2VydmlzZSc7XHJcblxyXG5jb25zdCBnZXRBbGxHcm91cHMgPSAocXVlcnk6IFF1ZXJ5UGFyYW1zKTogUHJvbWlzZTxHcm91cFtdPiA9PlxyXG4gICAgZ3JvdXBEQUwuZ2V0QWxsKHF1ZXJ5KTtcclxuXHJcbmNvbnN0IGdldEdyb3VwQnlJZCA9IChncm91cF9pZDogc3RyaW5nKTogUHJvbWlzZTxHcm91cD4gPT5cclxuICAgIGdyb3VwREFMLmdldEdyb3VwKGdyb3VwX2lkKTtcclxuXHJcbmNvbnN0IGFkZEdyb3VwID0gKG5ld0dyb3VwOiBHcm91cFRvRGIpOiBQcm9taXNlPHZvaWQ+ID0+XHJcbiAgICBncm91cERBTC5pbnNlcnRHcm91cChncm91cFRvRGIobmV3R3JvdXAsIHV1aWQudjEoKS50b1N0cmluZygpKSk7XHJcblxyXG5jb25zdCB1cGRhdGVHcm91cCA9IChncm91cF9pZDogc3RyaW5nLCBncm91cFRvVXBkYXRlOiBHcm91cFRvVXBkYXRlKTogUHJvbWlzZTx2b2lkPiA9PlxyXG4gICAgZ3JvdXBEQUwudXBkYXRlR3JvdXAoZ3JvdXBfaWQsIGdyb3VwVG9VcGRhdGUpO1xyXG5cclxuY29uc3QgZGVsZXRlR3JvdXAgPSAoZ3JvdXBfaWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT5cclxuICAgIGdyb3VwREFMLmRlbGV0ZUdyb3VwKGdyb3VwX2lkKTtcclxuXHJcbmNvbnN0IGFkZFVzZXJzVG9Hcm91cCA9IHVzZXJzR3JvdXBTZXJ2aWNlLmFkZFVzZXJzVG9Hcm91cDtcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cFNlcnZpY2UgPSB7XHJcbiAgICBnZXRBbGxHcm91cHMsXHJcbiAgICBnZXRHcm91cEJ5SWQsXHJcbiAgICBhZGRHcm91cCxcclxuICAgIHVwZGF0ZUdyb3VwLFxyXG4gICAgZGVsZXRlR3JvdXAsXHJcbiAgICBhZGRVc2Vyc1RvR3JvdXBcclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi91c2VyLnNlcnZpc2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2dyb3VwLnNlcnZpc2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3VzZXJzLWdyb3VwLnNlcnZpc2UnO1xyXG4iLCJpbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgdXNlckRBTCwgdXNlclRvRGIgfSBmcm9tICcuLi9kYXRhLWFjY2Vzcyc7XHJcblxyXG5pbXBvcnQgeyBVc2VyVG9BZGQsIFVzZXJUb1Jlc3BvbnNlLCBVc2VyVG9VcGRhdGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3R5cGluZ3MnO1xyXG5cclxuY29uc3QgZ2V0QWxsVXNlcnMgPSAocXVlcnk6IHsgbG9naW4/OiBzdHJpbmcsIGxpbWl0Pzogc3RyaW5nLCBvZmZzZXQ/OiBzdHJpbmcgfSk6IFByb21pc2U8VXNlclRvUmVzcG9uc2VbXT4gPT4gdXNlckRBTC5nZXRBbGwocXVlcnkpO1xyXG5cclxuY29uc3QgZ2V0VXNlckJ5SWQgPSAodXNlcl9pZDogc3RyaW5nKTogUHJvbWlzZTxVc2VyVG9SZXNwb25zZT4gPT4gdXNlckRBTC5nZXRVc2VyKHVzZXJfaWQpO1xyXG5cclxuY29uc3QgYWRkVXNlciA9IChuZXdVc2VyOiBVc2VyVG9BZGQpOiBQcm9taXNlPHZvaWQ+ID0+IHVzZXJEQUwuaW5zZXJ0VXNlcih1c2VyVG9EYihuZXdVc2VyLCB1dWlkLnYxKCkudG9TdHJpbmcoKSkpO1xyXG5cclxuY29uc3QgdXBkYXRlVXNlciA9ICh1c2VyX2lkOiBzdHJpbmcsIHVzZXJUb1VwZGF0ZTogVXNlclRvVXBkYXRlKTogUHJvbWlzZTx2b2lkPiA9PiB1c2VyREFMLnVwZGF0ZVVzZXIodXNlcl9pZCwgdXNlclRvVXBkYXRlKTtcclxuXHJcbmNvbnN0IGRlbGV0ZVVzZXIgPSAodXNlcl9pZDogc3RyaW5nKSA9PiB1c2VyREFMLmRlbGV0ZVVzZXIodXNlcl9pZCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclNlcnZpY2UgPSB7XHJcbiAgICBnZXRBbGxVc2VycyxcclxuICAgIGdldFVzZXJCeUlkLFxyXG4gICAgYWRkVXNlcixcclxuICAgIHVwZGF0ZVVzZXIsXHJcbiAgICBkZWxldGVVc2VyXHJcbn07XHJcbiIsImltcG9ydCB7IHVzZXJzR3JvdXBEQUwgfSBmcm9tICcuLi9kYXRhLWFjY2Vzcy9kYWwvdXNlci1ncm91cC5EQUwnO1xyXG5cclxuY29uc3QgYWRkVXNlcnNUb0dyb3VwID0gYXN5bmMgKGdyb3VwX2lkOiBzdHJpbmcsIHVzZXJfaWRzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiA9PlxyXG4gICAgYXdhaXQgdXNlcnNHcm91cERBTC5hZGRVc2Vyc1RvR3JvdXAoZ3JvdXBfaWQsIHVzZXJfaWRzKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2Vyc0dyb3VwU2VydmljZSA9IHsgYWRkVXNlcnNUb0dyb3VwIH07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBoYXBpL2pvaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtam9pLXZhbGlkYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cC1lcnJvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2luc3RvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9