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
app.use(_routes__WEBPACK_IMPORTED_MODULE_5__["default"]);
Object(_middlewares__WEBPACK_IMPORTED_MODULE_3__["processUnhandledError"])();
app.listen(_constants__WEBPACK_IMPORTED_MODULE_1__["PORT"], () => __awaiter(void 0, void 0, void 0, function* () {
    _middlewares_logger__WEBPACK_IMPORTED_MODULE_4__["logger"].info(`${_constants__WEBPACK_IMPORTED_MODULE_1__["LOG_MESSAGES"].portListening} ${_constants__WEBPACK_IMPORTED_MODULE_1__["PORT"]}`);
    try {
        yield Object(_data_access__WEBPACK_IMPORTED_MODULE_2__["dbConnect"])();
    }
    catch (e) {
        throw e;
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
    catch (e) {
        throw e;
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
/* harmony import */ var _user_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-router */ "./src/routes/user-router.ts");




const rootRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
rootRouter.use(_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].userRoutes.users, _user_router__WEBPACK_IMPORTED_MODULE_3__["default"]);
rootRouter.use(_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].groupRoutes.groups, _group_router__WEBPACK_IMPORTED_MODULE_2__["default"]);
rootRouter.use(_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].invalid.root, _group_router__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (rootRouter);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2dyb3VwLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2hlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2ludmFsaWQuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvdXNlcnMtZ3JvdXAuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvdXNlcnMuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1hY2Nlc3MvYmFja3VwLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLWFjY2Vzcy9kYWwvZ3JvdXAuREFMLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLWFjY2Vzcy9kYWwvdXNlci1ncm91cC5EQUwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtYWNjZXNzL2RhbC91c2VyREFMLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLWFjY2Vzcy9kYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1hY2Nlc3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtYWNjZXNzL3VzZXJzLnBhcnNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvbG9nZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlcy9wYXJzZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlcy9wcm9jZXNzLnVuaGFuZGxlZEVycm9yLnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlcy92YWxpZGF0aW9uLnNlcnZpc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9ncm91cC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvdXNlci1ncm91cC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3VzZXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9ncm91cC1yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3VzZXItcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9ncm91cC5zZXJ2aXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdXNlci5zZXJ2aXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy91c2Vycy1ncm91cC5zZXJ2aXNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBoYXBpL2pvaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLWpvaS12YWxpZGF0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cC1lcnJvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemUtdHlwZXNjcmlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV1aWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5zdG9uXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUFBLE1BQU0sT0FBTyxHQUFZLFVBQVUsQ0FBQztBQUVyQjtJQUNYLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLElBQUksRUFBRSxvREFBb0Q7SUFDMUQsSUFBSSxFQUFFLElBQUk7SUFDVixRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsUUFBUSxFQUFFLGtFQUFrRTtJQUM1RSxJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUUsQ0FBQztRQUNOLEdBQUcsRUFBRSxDQUFDO1FBQ04sT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUUsS0FBSztLQUNkO0NBQ0osRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakI2QztB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QWtCLEVBQWlCLEVBQUUsQ0FBQyxvREFBTyxDQUFDLFVBQVUsQ0FBQyw2REFBUSxDQUFDLE9BQU8sRUFBRSwyQ0FBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUVuSCxNQUFNLFVBQVUsR0FBRyxDQUFDLE9BQWUsRUFBRSxZQUEwQixFQUFpQixFQUFFLENBQUMsb0RBQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBRTdILE1BQU0sVUFBVSxHQUFHLENBQUMsT0FBZSxFQUFFLEVBQUUsQ0FBQyxvREFBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUU3RCxNQUFNLFdBQVcsR0FBRztJQUN2QixXQUFXO0lBQ1gsV0FBVztJQUNYLE9BQU87SUFDUCxVQUFVO0lBQ1YsVUFBVTtDQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmdFO0FBRWxFLE1BQU0sZUFBZSxHQUFHLENBQU8sUUFBZ0IsRUFBRSxRQUFrQixFQUFnQixFQUFFLGtEQUNqRixhQUFNLDZFQUFhLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsS0FBQztBQUVyRCxNQUFNLGlCQUFpQixHQUFHLEVBQUUsZUFBZSxFQUFFLENBQUM7Ozs7Ozs7Ozs7OztBQ0xyRCxzQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJzZXJ2ZXItYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiaW1wb3J0IHsgRGlhbGVjdCB9IGZyb20gJ3NlcXVlbGl6ZSc7XHJcblxyXG5jb25zdCBkaWFsZWN0OiBEaWFsZWN0ID0gJ3Bvc3RncmVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRpYWxlY3Q6IGRpYWxlY3QsXHJcbiAgICBob3N0OiBcImVjMi01NC0yNDYtMTAwLTI0Ni5ldS13ZXN0LTEuY29tcHV0ZS5hbWF6b25hd3MuY29tXCIsXHJcbiAgICBwb3J0OiA1NDMyLFxyXG4gICAgZGF0YWJhc2U6IFwiZDNvdnMwa2hqODJhM2hcIixcclxuICAgIHVzZXJuYW1lOiBcInhkZHF2cmZ6d2R3ZWNyXCIsXHJcbiAgICBwYXNzd29yZDogXCIzZjQxYjUwNDdjZGRiYjUyNjFkMDdlMmE2ZTgyZWIzZjY0NTFkZThiMzg4NWUwMWNmNjEzNmFmNTk1NGQ3YTM3XCIsXHJcbiAgICBwb29sOiB7XHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgICAgIG1heDogNSxcclxuICAgICAgICBhY3F1aXJlOiAzMDAwMCxcclxuICAgICAgICBpZGxlOiAxMDAwMFxyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgZXhwcmVzcywgeyBBcHBsaWNhdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgTE9HX01FU1NBR0VTLCBQT1JUIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBkYkNvbm5lY3QgfSBmcm9tICcuL2RhdGEtYWNjZXNzJztcclxuaW1wb3J0IHsgcHJvY2Vzc1VuaGFuZGxlZEVycm9yIH0gZnJvbSAnLi9taWRkbGV3YXJlcyc7XHJcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vbWlkZGxld2FyZXMvbG9nZ2VyJztcclxuaW1wb3J0IHJvb3RSb3V0ZXIgZnJvbSAnLi9yb3V0ZXMnO1xyXG5cclxuY29uc3QgYXBwOiBBcHBsaWNhdGlvbiA9IGV4cHJlc3MoKTtcclxuXHJcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xyXG5hcHAudXNlKHJvb3RSb3V0ZXIpO1xyXG5cclxucHJvY2Vzc1VuaGFuZGxlZEVycm9yKCk7XHJcblxyXG5hcHAubGlzdGVuKFBPUlQsIGFzeW5jICgpID0+IHtcclxuICAgIGxvZ2dlci5pbmZvKGAkeyBMT0dfTUVTU0FHRVMucG9ydExpc3RlbmluZyB9ICR7IFBPUlQgfWApO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBlO1xyXG4gICAgfVxyXG59KTtcclxuIiwiZXhwb3J0IGNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQwMDE7XHJcblxyXG5leHBvcnQgY29uc3QgRVJST1JTID0ge1xyXG4gICAgbm90Rm91bmQ6ICdub3QgZm91bmQhJyxcclxuICAgIGdyb3VwTm90Rm91bmQ6ICdHcm91cCBub3QgRm91bmQhJyxcclxuICAgIG1ldGhvZE5vdEFsbG93ZWQ6ICdNZXRob2Qgbm90IGFsbG93ZWQgaGVyZSEnLFxyXG4gICAgZXhpc3Q6ICdhbHJlYWR5IGV4aXN0IScsXHJcbiAgICByb3V0Tm90RXhpc3Q6ICdUaGlzIHJvdXRlIGlzIG5vdCBleGlzdCEnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX01FU1NBR0VTID0ge1xyXG4gICAgY29ubmVjdGlvblN1Y2Nlc3M6ICdDb25uZWN0aW9uIGhhcyBiZWVuIGVzdGFibGlzaGVkIHN1Y2Nlc3NmdWxseSEnLFxyXG4gICAgY29ubmVjdGlvbkZhaWxlZDogJ1VuYWJsZSB0byBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZTonLFxyXG4gICAgcG9ydExpc3RlbmluZzogJ0xpc3RlbmluZyBvbiBwb3J0Li4uJ1xyXG59O1xyXG5cclxuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IGdyb3VwU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgcmVxdWVzdEhlbHBlciB9IGZyb20gJy4vaGVscGVyJztcclxuXHJcbmNvbnN0IGdldEdyb3VwcyA9IChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IGdyb3VwU2VydmljZS5nZXRBbGxHcm91cHMocmVxdWVzdC5xdWVyeSksIHJlc3BvbnNlLCByZXF1ZXN0KTtcclxuXHJcbmNvbnN0IGdldEdyb3VwQnlJZCA9IChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IGdyb3VwU2VydmljZS5nZXRHcm91cEJ5SWQocmVxdWVzdC5wYXJhbXMuZ3JvdXBfaWQpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCBhZGRHcm91cCA9IChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IGdyb3VwU2VydmljZS5hZGRHcm91cChyZXF1ZXN0LmJvZHkpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCBhZGRVc2Vyc1RvR3JvdXAgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiBncm91cFNlcnZpY2UuYWRkVXNlcnNUb0dyb3VwKHJlcXVlc3QucGFyYW1zLmdyb3VwX2lkLCByZXF1ZXN0LmJvZHkudXNlcklkcyksIHJlc3BvbnNlLCByZXF1ZXN0KTtcclxuXHJcbmNvbnN0IHVwZGF0ZUdyb3VwID0gKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gZ3JvdXBTZXJ2aWNlLnVwZGF0ZUdyb3VwKHJlcXVlc3QucGFyYW1zLmdyb3VwX2lkLCByZXF1ZXN0LmJvZHkpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCBkZWxldGVHcm91cCA9IChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+IHJlcXVlc3RIZWxwZXIoKCkgPT5cclxuICAgIGdyb3VwU2VydmljZS5kZWxldGVHcm91cChyZXF1ZXN0LnBhcmFtcy5ncm91cF9pZCksIHJlc3BvbnNlLCByZXF1ZXN0KTtcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cENvbnRyb2xsZXIgPSB7XHJcbiAgICBnZXRHcm91cHMsXHJcbiAgICBnZXRHcm91cEJ5SWQsXHJcbiAgICBhZGRHcm91cCxcclxuICAgIHVwZGF0ZUdyb3VwLFxyXG4gICAgZGVsZXRlR3JvdXAsXHJcbiAgICBhZGRVc2Vyc1RvR3JvdXBcclxufTtcclxuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGNyZWF0ZUVycm9yLCB7IEh0dHBFcnJvciB9IGZyb20gJ2h0dHAtZXJyb3JzJztcclxuXHJcbmltcG9ydCB7IEVSUk9SUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uL21pZGRsZXdhcmVzL2xvZ2dlcic7XHJcblxyXG5jb25zdCBnZXRMb2dNZXNzYWdlID0gKHJlcXVlc3Q6IFJlcXVlc3QpOiBzdHJpbmcgPT4ge1xyXG4gICAgY29uc3QgcGFyYW1zID0gYHBhcmFtczogJHsgSlNPTi5zdHJpbmdpZnkocmVxdWVzdC5wYXJhbXMpIH1gO1xyXG4gICAgY29uc3QgYm9keSA9IGBib2R5OiAkeyBKU09OLnN0cmluZ2lmeShyZXF1ZXN0LmJvZHkpIH1gO1xyXG4gICAgY29uc3QgcXVlcnkgPSBgcXVlcnk6ICR7IEpTT04uc3RyaW5naWZ5KHJlcXVlc3QucXVlcnkpIH1gO1xyXG4gICAgY29uc3QgdXJsID0gYHVybDogJHsgcmVxdWVzdC51cmwgfWA7XHJcbiAgICBjb25zdCBtZXRob2QgPSBgbWV0aG9kOiAkeyByZXF1ZXN0Lm1ldGhvZCB9YDtcclxuXHJcbiAgICByZXR1cm4gYCR7IG1ldGhvZCB9ICR7IHVybCB9ICR7IHBhcmFtcyB9ICR7IHF1ZXJ5IH0gJHsgYm9keSB9YDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0SGVscGVyID0gYXN5bmMgKGZuOiBhbnksIHJlc3BvbnNlOiBSZXNwb25zZSwgcmVxdWVzdDogUmVxdWVzdCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZm4oKTtcclxuICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgICAgICAgICA/IHJlc3BvbnNlLnNlbmQoeyBkYXRhLCBzdGF0dXM6ICdzdWNjZXNzJyB9KVxyXG4gICAgICAgICAgICA6IHJlc3BvbnNlLnNlbmQoeyBzdGF0dXM6ICdzdWNjZXNzJyB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgbG9nZ2VyLmVycm9yKGBzdGF0dXM6ICR7IGVycm9yLnN0YXR1cyB8fCA1MDAgfSwgbWVzc2FnZTogJHsgZXJyb3IubWVzc2FnZSB9LCAkeyBnZXRMb2dNZXNzYWdlKHJlcXVlc3QpIH1gKTtcclxuICAgICAgICByZXNwb25zZS5zdGF0dXMoZXJyb3Iuc3RhdHVzIHx8IDUwMCkuc2VuZCh7IGVycm9yOiB7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBub3RBbGxvd2VkID0gKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgbGV0IGVycm9yOiBIdHRwRXJyb3IgPSBjcmVhdGVFcnJvcig0MDUsIEVSUk9SUy5tZXRob2ROb3RBbGxvd2VkKTtcclxuICAgIGxvZ2dlci5lcnJvcihgc3RhdHVzOiAkeyA0MDUgfSwgbWVzc2FnZTogJHsgZXJyb3IubWVzc2FnZSB9YCk7XHJcblxyXG4gICAgcmVzcG9uc2Uuc3RhdHVzKGVycm9yLnN0YXR1cykuc2VuZCh7IHN0YXR1czogZXJyb3Iuc3RhdHVzLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xyXG59O1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL3VzZXJzLmNvbnRyb2xsZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2dyb3VwLmNvbnRyb2xsZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL3VzZXJzLWdyb3VwLmNvbnRyb2xsZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2ludmFsaWQuY29udHJvbGxlcic7XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBjcmVhdGVFcnJvciwgeyBIdHRwRXJyb3IgfSBmcm9tICdodHRwLWVycm9ycyc7XHJcblxyXG5pbXBvcnQgeyBFUlJPUlMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi9taWRkbGV3YXJlcy9sb2dnZXInO1xyXG5cclxuY29uc3Qgbm90QWxsb3dlZCA9IChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgIGxldCBlcnJvcjogSHR0cEVycm9yID0gY3JlYXRlRXJyb3IoNDA0LCBFUlJPUlMucm91dE5vdEV4aXN0KTtcclxuXHJcbiAgICBsb2dnZXIuZXJyb3IoYHN0YXR1czogJHsgNDA0IH0sIG1lc3NhZ2U6ICR7IGVycm9yLm1lc3NhZ2UgfWApO1xyXG4gICAgcmVzcG9uc2Uuc3RhdHVzKGVycm9yLnN0YXR1cykuc2VuZCh7IHN0YXR1czogZXJyb3Iuc3RhdHVzLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGludmFsaWRDb250cm9sbGVyID0geyBub3RBbGxvd2VkIH07XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyB1c2Vyc0dyb3VwU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgcmVxdWVzdEhlbHBlciB9IGZyb20gJy4vaGVscGVyJztcclxuXHJcbmNvbnN0IGFkZFVzZXJzVG9Hcm91cCA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJzR3JvdXBTZXJ2aWNlLmFkZFVzZXJzVG9Hcm91cChyZXF1ZXN0LnBhcmFtcy5ncm91cF9pZCwgcmVxdWVzdC5ib2R5LnVzZXJJZHMpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlcnNHcm91cENvbnRyb2xsZXIgPSB7IGFkZFVzZXJzVG9Hcm91cCB9O1xyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgdXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IHJlcXVlc3RIZWxwZXIgfSBmcm9tICcuL2hlbHBlcic7XHJcblxyXG5jb25zdCBnZXRVc2VycyA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJTZXJ2aWNlLmdldEFsbFVzZXJzKHJlcXVlc3QucXVlcnkpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCBnZXRVc2VyQnlJZCA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJTZXJ2aWNlLmdldFVzZXJCeUlkKHJlcXVlc3QucGFyYW1zLnVzZXJfaWQpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCBhZGRVc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gdXNlclNlcnZpY2UuYWRkVXNlcihyZXF1ZXN0LmJvZHkpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gdXNlclNlcnZpY2UudXBkYXRlVXNlcihyZXF1ZXN0LnBhcmFtcy51c2VyX2lkLCByZXF1ZXN0LmJvZHkpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gdXNlclNlcnZpY2UuZGVsZXRlVXNlcihyZXF1ZXN0LnBhcmFtcy51c2VyX2lkKSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJzQ29udHJvbGxlciA9IHtcclxuICAgIGdldFVzZXJzLFxyXG4gICAgZGVsZXRlVXNlcixcclxuICAgIHVwZGF0ZVVzZXIsXHJcbiAgICBnZXRVc2VyQnlJZCxcclxuICAgIGFkZFVzZXJcclxufTtcclxuIiwiaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90eXBpbmdzJztcclxuaW1wb3J0IHsgUGVybWlzc2lvbnNUeXBlIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyczogVXNlcltdID0gW1xyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6ICdhbmFraW4nLFxyXG4gICAgICAgIGxvZ2luOiAnQW5ha2luU2t5d2Fsa2VyJyxcclxuICAgICAgICBwYXNzd29yZDogJ2FuYWtpbnBhc3MnLFxyXG4gICAgICAgIGFnZTogMzJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogJ21hY2VXaW5kdScsXHJcbiAgICAgICAgbG9naW46ICdNYWNlV2luZHUnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnbWFjZXBhc3MnLFxyXG4gICAgICAgIGFnZTogNzJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogJ2x1a2VTa3l3YWxrZXInLFxyXG4gICAgICAgIGxvZ2luOiAnTHVrZVNreXdhbGtlcicsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdsdWtlcGFzcycsXHJcbiAgICAgICAgYWdlOiAyM1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiAnYzNwMCcsXHJcbiAgICAgICAgbG9naW46ICdDLTNQTycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdjM3AwcGFzcycsXHJcbiAgICAgICAgYWdlOiAzMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiAnZGFydGhNYXVsJyxcclxuICAgICAgICBsb2dpbjogJ0RhcnRoTWF1bCcsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdkYXJ0aHBhc3MnLFxyXG4gICAgICAgIGFnZTogNDRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdRdWlHb25KaW5uJyxcclxuICAgICAgICBwYXNzd29yZDogJ3F1aXBhc3MnLFxyXG4gICAgICAgIGFnZTogODBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdPYmlXYW5LZW5vYmknLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnb2JpcGFzcycsXHJcbiAgICAgICAgYWdlOiA0N1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiAncGFscGF0aW5lJyxcclxuICAgICAgICBsb2dpbjogJ1BhbHBhdGluZScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdwYWxwYXRpbmVwYXNzJyxcclxuICAgICAgICBhZ2U6IDgyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiAnWW9kYScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICd5b2RhcGFzcycsXHJcbiAgICAgICAgYWdlOiAxMzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdTbm9rZScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdzbm9rZXBhc3MnLFxyXG4gICAgICAgIGFnZTogNTNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdCb2JhRmV0dCcsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdib2JhcGFzcycsXHJcbiAgICAgICAgYWdlOiAzNlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogJ0NoZXdiYWNjYScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdjaGV3YmFjY2FwYXNzJyxcclxuICAgICAgICBhZ2U6IDEzMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogJ0hhblNvbG8nLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnaGFucGFzcycsXHJcbiAgICAgICAgYWdlOiA2NlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogJ0t5bG9SZW4nLFxyXG4gICAgICAgIHBhc3N3b3JkOiAna3lsb3Bhc3MnLFxyXG4gICAgICAgIGFnZTogMzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdMZWlhT3JnYW5hJyxcclxuICAgICAgICBwYXNzd29yZDogJ2xlaWFwYXNzJyxcclxuICAgICAgICBhZ2U6IDUzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiAnUGFkbWVBbWlkYWxhJyxcclxuICAgICAgICBwYXNzd29yZDogJ3BhZG1lcGFzcycsXHJcbiAgICAgICAgYWdlOiAyN1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogJ0NvdW50RG9va3UnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnZG9rb29wYXNzJyxcclxuICAgICAgICBhZ2U6IDEwMlxyXG4gICAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyb3VwczogeyBncm91cF9pZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9uc1R5cGVbXSB9W10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgZ3JvdXBfaWQ6ICdsaWdodF9zaWRlJyxcclxuICAgICAgICBuYW1lOiAnbGlnaHRfc2lkZScsXHJcbiAgICAgICAgcGVybWlzc2lvbnM6IFsgJ1dSSVRFJywgJ0RFTEVURScgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBncm91cF9pZDogJ2Rhcmtfc2lkZScsXHJcbiAgICAgICAgbmFtZTogJ2Rhcmtfc2lkZScsXHJcbiAgICAgICAgcGVybWlzc2lvbnM6IFsgJ1dSSVRFJywgJ1JFQUQnIF1cclxuICAgIH1cclxuXTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgdXNlckdyb3VwczogeyBncm91cF9pZDogc3RyaW5nLCB1c2VyX2lkOiBzdHJpbmcgfVtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIGdyb3VwX2lkOiAnbGlnaHRfc2lkZScsXHJcbiAgICAgICAgdXNlcl9pZDogJ2FuYWtpbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZ3JvdXBfaWQ6ICdkYXJrX3NpZGUnLFxyXG4gICAgICAgIHVzZXJfaWQ6ICdwYWxwYXRpbmUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGdyb3VwX2lkOiAnbGlnaHRfc2lkZScsXHJcbiAgICAgICAgdXNlcl9pZDogJ21hY2VXaW5kdSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZ3JvdXBfaWQ6ICdsaWdodF9zaWRlJyxcclxuICAgICAgICB1c2VyX2lkOiAnbHVrZVNreXdhbGtlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZ3JvdXBfaWQ6ICdkYXJrX3NpZGUnLFxyXG4gICAgICAgIHVzZXJfaWQ6ICdhbmFraW4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGdyb3VwX2lkOiAnZGFya19zaWRlJyxcclxuICAgICAgICB1c2VyX2lkOiAnZGFydGhNYXVsJ1xyXG4gICAgfVxyXG5dO1xyXG4iLCJpbXBvcnQgY3JlYXRlRXJyb3IgZnJvbSAnaHR0cC1lcnJvcnMnO1xyXG5pbXBvcnQgeyBPcCwgV2hlcmVPcHRpb25zIH0gZnJvbSAnc2VxdWVsaXplJztcclxuaW1wb3J0IHsgZ3JvdXBzVG9SZXNwb25zZSwgZ3JvdXBUb1Jlc3BvbnNlIH0gZnJvbSAnLi4vLi4vbWlkZGxld2FyZXMvcGFyc2Vycyc7XHJcblxyXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uLy4uL21vZGVscy9ncm91cC5tb2RlbCc7XHJcblxyXG5cclxuY29uc3QgRU5USVRZX05BTUU6IHN0cmluZyA9ICdncm91cCc7XHJcbmNvbnN0IERFRkFVTFRfT0ZGU0VUOiBudW1iZXIgPSAwO1xyXG5jb25zdCBERUZBVUxUX0xJTUlUOiBudW1iZXIgPSAxMDtcclxuXHJcbmNvbnN0IGdldEFsbCA9IGFzeW5jIChwYXJhbXM6IGFueSk6IFByb21pc2U8YW55W10+ID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgb2Zmc2V0UGFyYW0sIGxpbWl0UGFyYW0gfSA9IHBhcmFtcztcclxuICAgIGNvbnN0IG9mZnNldDogbnVtYmVyID0gb2Zmc2V0UGFyYW0gJiYgcGFyc2VJbnQob2Zmc2V0UGFyYW0sIDEwKSB8fCBERUZBVUxUX09GRlNFVDtcclxuICAgIGNvbnN0IGxpbWl0OiBudW1iZXIgPSBsaW1pdFBhcmFtICYmIHBhcnNlSW50KGxpbWl0UGFyYW0sIDEwKSArIG9mZnNldCB8fCBERUZBVUxUX0xJTUlUO1xyXG4gICAgY29uc3Qgd2hlcmU6IFdoZXJlT3B0aW9ucyA9IG5hbWUgPyB7IG5hbWU6IHsgWyBPcC5pTGlrZSBdOiBgJSR7IG5hbWUgfSVgIH0gfSA6IHt9O1xyXG4gICAgY29uc3QgZ3JvdXBzID0gYXdhaXQgR3JvdXAuZmluZEFsbCh7IG9mZnNldDogb2Zmc2V0LCBsaW1pdDogbGltaXQsIHdoZXJlIH0pO1xyXG5cclxuICAgIHJldHVybiBncm91cHNUb1Jlc3BvbnNlKGdyb3Vwcyk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRHcm91cCA9IGFzeW5jIChncm91cF9pZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IGdyb3VwID0gYXdhaXQgR3JvdXAuZmluZE9uZSh7IHdoZXJlOiB7IGdyb3VwX2lkOiBncm91cF9pZCB9IH0pO1xyXG5cclxuICAgIGlmICggIWdyb3VwICkgdGhyb3cgY3JlYXRlRXJyb3IoNDA0LCB7IG1lc3NhZ2U6IGAkeyBFTlRJVFlfTkFNRSB9IEVSUk9SUy5ub3RGb3VuZGAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGdyb3VwVG9SZXNwb25zZShncm91cCk7XHJcbn07XHJcblxyXG5jb25zdCBpbnNlcnRHcm91cCA9IGFzeW5jIChncm91cE1vZGVsOiBHcm91cCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc3QgZ3JvdXAgPSBhd2FpdCBHcm91cC5maW5kT25lKHsgd2hlcmU6IHsgbmFtZTogZ3JvdXBNb2RlbC5uYW1lIH0gfSk7XHJcblxyXG4gICAgaWYgKCBncm91cCApIHRocm93IGNyZWF0ZUVycm9yKDQwMCwgeyBtZXNzYWdlOiBgJHsgRU5USVRZX05BTUUgfSBFUlJPUlMuZXhpc3RgIH0pO1xyXG5cclxuICAgIGdyb3VwTW9kZWwuc2F2ZSgpO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlR3JvdXAgPSBhc3luYyAoZ3JvdXBfaWQ6IHN0cmluZywgZ3JvdXBUb1VwZGF0ZTogYW55KTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBjb25zdCBncm91cCA9IGF3YWl0IEdyb3VwLmZpbmRPbmUoeyB3aGVyZTogeyBncm91cF9pZDogZ3JvdXBfaWQgfSB9KTtcclxuXHJcbiAgICBpZiAoICFncm91cCApIHRocm93IGNyZWF0ZUVycm9yKDQwNCwgeyBtZXNzYWdlOiBgJHsgRU5USVRZX05BTUUgfSBFUlJPUlMubm90Rm91bmQgYCB9KTtcclxuXHJcbiAgICBncm91cC5uYW1lID0gZ3JvdXBUb1VwZGF0ZS5uYW1lO1xyXG4gICAgZ3JvdXAucGVybWlzc2lvbnMgPSBncm91cFRvVXBkYXRlLnBlcm1pc3Npb25zO1xyXG5cclxuICAgIGdyb3VwLnNhdmUoKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZUdyb3VwID0gYXN5bmMgKGdyb3VwX2lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnN0IGdyb3VwID0gYXdhaXQgR3JvdXAuZmluZE9uZSh7IHdoZXJlOiB7IGdyb3VwX2lkOiBncm91cF9pZCB9IH0pO1xyXG5cclxuICAgIGlmICggIWdyb3VwICkgdGhyb3cgY3JlYXRlRXJyb3IoNDA0LCB7IG1lc3NhZ2U6IGAkeyBFTlRJVFlfTkFNRSB9IEVSUk9SUy5ub3RGb3VuZGAgfSk7XHJcblxyXG4gICAgZ3JvdXAuZGVzdHJveSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyb3VwREFMID0ge1xyXG4gICAgZ2V0QWxsLFxyXG4gICAgZ2V0R3JvdXAsXHJcbiAgICBpbnNlcnRHcm91cCxcclxuICAgIHVwZGF0ZUdyb3VwLFxyXG4gICAgZGVsZXRlR3JvdXBcclxufTtcclxuIiwiaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tICdzZXF1ZWxpemUnO1xyXG5cclxuaW1wb3J0IHsgVXNlcnNHcm91cCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcbmltcG9ydCB7IEdyb3VwLCBVc2VyR3JvdXAgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBzZXF1ZWxpemUgYXMgZGJJbnN0YW5jZSB9IGZyb20gJy4uL2RiJztcclxuXHJcbmNvbnN0IGFkZFVzZXJzVG9Hcm91cCA9IChncm91cF9pZDogc3RyaW5nLCB1c2VyX2lkczogc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+ID0+XHJcbiAgICBkYkluc3RhbmNlLnRyYW5zYWN0aW9uKFxyXG4gICAgICAgIGFzeW5jICh0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgR3JvdXAuZmluZE9uZSh7IHdoZXJlOiB7IGdyb3VwX2lkOiBncm91cF9pZCB9LCB0cmFuc2FjdGlvbiB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwczogVXNlcnNHcm91cFtdID1cclxuICAgICAgICAgICAgICAgIHVzZXJfaWRzLm1hcCgodXNlcklkOiBzdHJpbmcpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBfaWQ6IGdyb3VwX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJJZFxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgVXNlckdyb3VwLmJ1bGtDcmVhdGUoZ3JvdXBzLCB7IHRyYW5zYWN0aW9uIH0pO1xyXG4gICAgICAgICAgICAvLyBhd2FpdCBncm91cC5hZGRVc2Vycyh1c2VyX2lkcywgeyB0cmFuc2FjdGlvbiB9KTsganVzdCBhbiBleGFtcGxlIG9mIHVzaW5nIG1ldGhvZCBkZWZpbmVkIGluIG1vZGVsXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2Vyc0dyb3VwREFMID0geyBhZGRVc2Vyc1RvR3JvdXAgfTtcclxuIiwiaW1wb3J0IHsgT3AsIFdoZXJlT3B0aW9ucyB9IGZyb20gJ3NlcXVlbGl6ZSc7XHJcbmltcG9ydCBjcmVhdGVFcnJvciBmcm9tICdodHRwLWVycm9ycyc7XHJcblxyXG5pbXBvcnQgeyBFUlJPUlMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBVc2VyVG9SZXNwb25zZSwgVXNlclRvVXBkYXRlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy90eXBpbmdzJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcbmltcG9ydCB7IHVzZXJzVG9SZXNwb25zZSwgdXNlclRvUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9taWRkbGV3YXJlcyc7XHJcbmltcG9ydCB7IFF1ZXJ5UGFyYW1zIH0gZnJvbSAnLi4vdHlwaW5ncyc7XHJcblxyXG5jb25zdCBFTlRJVFlfTkFNRTogc3RyaW5nID0gJ3VzZXInO1xyXG5jb25zdCBERUZBVUxUX09GRlNFVDogbnVtYmVyID0gMDtcclxuY29uc3QgREVGQVVMVF9MSU1JVDogbnVtYmVyID0gMTA7XHJcblxyXG5jb25zdCBnZXRBbGwgPSBhc3luYyAocGFyYW1zOiBRdWVyeVBhcmFtcyk6IFByb21pc2U8VXNlclRvUmVzcG9uc2VbXT4gPT4ge1xyXG4gICAgY29uc3QgeyBsb2dpbiwgb2Zmc2V0UGFyYW0sIGxpbWl0UGFyYW0gfSA9IHBhcmFtcztcclxuICAgIGNvbnN0IG9mZnNldDogbnVtYmVyID0gb2Zmc2V0UGFyYW0gJiYgcGFyc2VJbnQob2Zmc2V0UGFyYW0sIDEwKSB8fCBERUZBVUxUX09GRlNFVDtcclxuICAgIGNvbnN0IGxpbWl0OiBudW1iZXIgPSBsaW1pdFBhcmFtICYmIHBhcnNlSW50KGxpbWl0UGFyYW0sIDEwKSArIG9mZnNldCB8fCBERUZBVUxUX0xJTUlUO1xyXG4gICAgY29uc3Qgd2hlcmU6IFdoZXJlT3B0aW9ucyA9IGxvZ2luID8geyBsb2dpbjogeyBbIE9wLmlMaWtlIF06IGAlJHsgbG9naW4gfSVgIH0gfSA6IHt9O1xyXG4gICAgY29uc3QgdXNlcnM6IFVzZXJbXSA9IGF3YWl0IFVzZXIuZmluZEFsbCh7IG9mZnNldDogb2Zmc2V0LCBsaW1pdDogbGltaXQsIHdoZXJlIH0pO1xyXG5cclxuICAgIHJldHVybiB1c2Vyc1RvUmVzcG9uc2UodXNlcnMpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VXNlciA9IGFzeW5jICh1c2VyX2lkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXJUb1Jlc3BvbnNlPiA9PiB7XHJcbiAgICBjb25zdCB1c2VyOiBVc2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgd2hlcmU6IHsgdXNlcl9pZDogdXNlcl9pZCB9IH0pO1xyXG5cclxuICAgIGlmICggIXVzZXIgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDQsIHsgbWVzc2FnZTogYCR7IEVOVElUWV9OQU1FIH0gJHsgRVJST1JTLm5vdEZvdW5kIH1gIH0pO1xyXG5cclxuICAgIHJldHVybiB1c2VyVG9SZXNwb25zZSh1c2VyKTtcclxufTtcclxuXHJcbmNvbnN0IGluc2VydFVzZXIgPSBhc3luYyAodXNlck1vZGVsOiBVc2VyKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBjb25zdCB1c2VyOiBVc2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgd2hlcmU6IHsgbG9naW46IHVzZXJNb2RlbC5sb2dpbiB9IH0pO1xyXG5cclxuICAgIGlmICggdXNlciApIHRocm93IGNyZWF0ZUVycm9yKDQwMCwgeyBtZXNzYWdlOiBgJHsgRU5USVRZX05BTUUgfSAkeyBFUlJPUlMuZXhpc3QgfWAgfSk7XHJcblxyXG4gICAgdXNlck1vZGVsLnNhdmUoKTtcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZVVzZXIgPSBhc3luYyAodXNlcl9pZDogc3RyaW5nLCB1c2VyVG9VcGRhdGU6IFVzZXJUb1VwZGF0ZSk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc3QgdXNlcjogVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IHdoZXJlOiB7IHVzZXJfaWQ6IHVzZXJfaWQgfSB9KTtcclxuXHJcbiAgICBpZiAoICF1c2VyICkgdGhyb3cgY3JlYXRlRXJyb3IoNDA0LCB7IG1lc3NhZ2U6IGAkeyBFTlRJVFlfTkFNRSB9ICR7IEVSUk9SUy5ub3RGb3VuZCB9YCB9KTtcclxuXHJcbiAgICB1c2VyLmxvZ2luID0gdXNlclRvVXBkYXRlLmxvZ2luO1xyXG4gICAgdXNlci5hZ2UgPSB1c2VyVG9VcGRhdGUuYWdlO1xyXG5cclxuICAgIHVzZXIuc2F2ZSgpO1xyXG59O1xyXG5cclxuY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jICh1c2VyX2lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnN0IHVzZXI6IFVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyB3aGVyZTogeyB1c2VyX2lkOiB1c2VyX2lkIH0gfSk7XHJcblxyXG4gICAgaWYgKCAhdXNlciApIHRocm93IGNyZWF0ZUVycm9yKDQwNCwgeyBtZXNzYWdlOiBgJHsgRU5USVRZX05BTUUgfSAkeyBFUlJPUlMubm90Rm91bmQgfWAgfSk7XHJcblxyXG4gICAgdXNlci5kZXN0cm95KCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckRBTCA9IHtcclxuICAgIGdldEFsbCxcclxuICAgIGdldFVzZXIsXHJcbiAgICBpbnNlcnRVc2VyLFxyXG4gICAgdXBkYXRlVXNlcixcclxuICAgIGRlbGV0ZVVzZXJcclxufTtcclxuIiwiaW1wb3J0IHsgU2VxdWVsaXplIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xyXG5cclxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi4vbWlkZGxld2FyZXMvbG9nZ2VyJztcclxuaW1wb3J0IHsgR3JvdXAsIFVzZXIsIFVzZXJHcm91cCB9IGZyb20gJy4uL21vZGVscy8nO1xyXG5pbXBvcnQgeyB1c2VycywgZ3JvdXBzLCB1c2VyR3JvdXBzIH0gZnJvbSAnLi9iYWNrdXAnO1xyXG5pbXBvcnQgeyBMT0dfTUVTU0FHRVMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgZGJDb25maWcgZnJvbSAnLi8uLi8uLi9jb25maWcvY29uZmlnJztcclxuXHJcbmNvbnN0IG1vZGVscyA9IFtcclxuICAgIFVzZXIsXHJcbiAgICBHcm91cCxcclxuICAgIFVzZXJHcm91cFxyXG5dO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKFxyXG4gICAgZGJDb25maWcuZGF0YWJhc2UsXHJcbiAgICBkYkNvbmZpZy51c2VybmFtZSxcclxuICAgIGRiQ29uZmlnLnBhc3N3b3JkLFxyXG4gICAge1xyXG4gICAgICAgIGRlZmluZToge1xyXG4gICAgICAgICAgICB0aW1lc3RhbXBzOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3J0OiBkYkNvbmZpZy5wb3J0LFxyXG4gICAgICAgIGRpYWxlY3Q6IGRiQ29uZmlnLmRpYWxlY3QsXHJcbiAgICAgICAgaG9zdDogZGJDb25maWcuaG9zdCxcclxuICAgICAgICBkaWFsZWN0T3B0aW9uczogeyBzc2w6IHRydWUgfSxcclxuICAgICAgICBwb29sOiBkYkNvbmZpZy5wb29sLFxyXG4gICAgICAgIG1vZGVsczogWyAuLi5tb2RlbHMgXVxyXG4gICAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRiQ29ubmVjdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IHNlcXVlbGl6ZS5zeW5jKHsgZm9yY2U6IHRydWUgfSk7XHJcbiAgICBsb2dnZXIuaW5mbyhMT0dfTUVTU0FHRVMuY29ubmVjdGlvblN1Y2Nlc3MpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsb2dnZXIuaW5mbygnRGF0YWJhc2UgcmVzdG9yaW5nIGluIHByb2Nlc3MuLi4nKTtcclxuICAgICAgICBhd2FpdCBVc2VyLmJ1bGtDcmVhdGUodXNlcnMpO1xyXG4gICAgICAgIGF3YWl0IEdyb3VwLmJ1bGtDcmVhdGUoZ3JvdXBzKTtcclxuICAgICAgICBhd2FpdCBVc2VyR3JvdXAuYnVsa0NyZWF0ZSh1c2VyR3JvdXBzKTtcclxuICAgICAgICBsb2dnZXIuaW5mbygnRGF0YWJhc2UgcmVzdG9yaW5nIGNvbXBsZXRlIScpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICB9XHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vZGFsL3VzZXJEQUwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RhbC9ncm91cC5EQUwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RhbC91c2VyLWdyb3VwLkRBTCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZGInO1xyXG5leHBvcnQgKiBmcm9tICcuL3VzZXJzLnBhcnNlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vdHlwaW5ncyc7XHJcbiIsImltcG9ydCB7IFVzZXJUb1Jlc3BvbnNlLCBVc2VyVG9BZGQsIFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3R5cGluZ3MnO1xyXG5pbXBvcnQgeyBVc2VyIGFzIFVzZXJNb2RlbCB9IGZyb20gJy4vLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJUb1Jlc3BvbnNlID0gKHVzZXI6IFVzZXIpOiBVc2VyVG9SZXNwb25zZSA9PiAoe1xyXG4gICAgdXNlcl9pZDogdXNlci51c2VyX2lkLFxyXG4gICAgbG9naW46IHVzZXIubG9naW4sXHJcbiAgICBhZ2U6IHVzZXIuYWdlXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJzVG9SZXNwb25zZSA9ICh1c2VyczogVXNlcltdKTogVXNlclRvUmVzcG9uc2VbXSA9PiB1c2Vycy5tYXAodXNlciA9PiB1c2VyVG9SZXNwb25zZSh1c2VyKSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclRvRGIgPSAodXNlcjogVXNlclRvQWRkLCB1c2VyX2lkOiBzdHJpbmcpOiBVc2VyTW9kZWwgPT5cclxuICAgIG5ldyBVc2VyTW9kZWwoe1xyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJfaWQsXHJcbiAgICAgICAgbG9naW46IHVzZXIubG9naW4sXHJcbiAgICAgICAgYWdlOiB1c2VyLmFnZSxcclxuICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgfSk7XHJcbiIsImV4cG9ydCBjb25zdCBMT0dfRElSTkFNRTogc3RyaW5nID0gJ2xvZ3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhBTkRMRTogeyBbIGtleTogc3RyaW5nIF06IHsgbWVzc2FnZTogc3RyaW5nOyB9IH0gPSB7XHJcbiAgICBbICd1bmhhbmRsZWRSZWplY3Rpb24nIF06IHtcclxuICAgICAgICBtZXNzYWdlOiAnVW5oYW5kbGVkIFJlamVjdGlvbiBhdCdcclxuICAgIH0sXHJcbiAgICBbICd1bmNhdWdodEV4Y2VwdGlvbicgXToge1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVbmNhdWdodCBFeGNlcHRpb24gdGhyb3duJ1xyXG4gICAgfVxyXG59O1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL3ZhbGlkYXRpb24uc2VydmlzZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcGFyc2Vycyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcHJvY2Vzcy51bmhhbmRsZWRFcnJvcic7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUxvZ2dlciwgdHJhbnNwb3J0cywgZm9ybWF0IH0gZnJvbSAnd2luc3RvbidcclxuaW1wb3J0IHsgVHJhbnNmb3JtYWJsZUluZm8gfSBmcm9tICdsb2dmb3JtJztcclxuXHJcbmNvbnN0IExPR19ESVJOQU1FID0gJ2xvZ3MnO1xyXG5cclxuY29uc3QgTE9HX0ZJTEVfTUFYX1NJWkU6IG51bWJlciA9IDUwMDA7XHJcblxyXG5jb25zdCB7IGNvbG9yaXplLCBjb21iaW5lLCBwcmludGYsIHRpbWVzdGFtcCB9ID0gZm9ybWF0O1xyXG5jb25zdCBmb3JtYXR0ZXIgPSBwcmludGYoKHsgbGV2ZWwsIG1lc3NhZ2UsIHRpbWVzdGFtcCB9OiBUcmFuc2Zvcm1hYmxlSW5mbyk6IHN0cmluZyA9PiBgJHsgdGltZXN0YW1wIH0gWyR7IGxldmVsIH1dOiAkeyBtZXNzYWdlIH1gKTtcclxuXHJcbmNvbnN0IGNvbnNvbGVUcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0cy5Db25zb2xlKHsgZm9ybWF0OiBjb21iaW5lKGNvbG9yaXplKCksIHRpbWVzdGFtcCgpLCBmb3JtYXR0ZXIpIH0pO1xyXG5jb25zdCBlcnJvclRyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRzLkZpbGUoeyBkaXJuYW1lOiBMT0dfRElSTkFNRSwgZmlsZW5hbWU6ICdlcnJvcnMubG9nJywgbGV2ZWw6ICdlcnJvcicsIG1heHNpemU6IExPR19GSUxFX01BWF9TSVpFIH0pO1xyXG5jb25zdCB3YXJuVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydHMuRmlsZSh7IGRpcm5hbWU6IExPR19ESVJOQU1FLCBmaWxlbmFtZTogJ3dhcm5pbmdzLmxvZycsIGxldmVsOiAnd2FybicsIG1heHNpemU6IExPR19GSUxFX01BWF9TSVpFIH0pO1xyXG5jb25zdCBpbmZvVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydHMuRmlsZSh7IGRpcm5hbWU6IExPR19ESVJOQU1FLCBmaWxlbmFtZTogJ2luZm8ubG9nJywgbGV2ZWw6ICdpbmZvJywgbWF4c2l6ZTogTE9HX0ZJTEVfTUFYX1NJWkUgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKHtcclxuICAgIGV4aXRPbkVycm9yOiBmYWxzZSxcclxuICAgIGZvcm1hdDogY29tYmluZSh0aW1lc3RhbXAoKSwgZm9ybWF0dGVyKSxcclxuICAgIHRyYW5zcG9ydHM6IFtcclxuICAgICAgICBjb25zb2xlVHJhbnNwb3J0LFxyXG4gICAgICAgIGVycm9yVHJhbnNwb3J0LFxyXG4gICAgICAgIGluZm9UcmFuc3BvcnQsXHJcbiAgICAgICAgd2FyblRyYW5zcG9ydFxyXG4gICAgXVxyXG59KTtcclxuIiwiaW1wb3J0IHsgR3JvdXAsIEdyb3VwVG9EYiwgVXNlciwgVXNlclRvQWRkLCBVc2VyVG9SZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcbmltcG9ydCB7IFVzZXIgYXMgVXNlck1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBHcm91cCBhcyBHcm91cE1vZGVsIH0gZnJvbSAnLi8uLi9tb2RlbHMvZ3JvdXAubW9kZWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyb3VwVG9SZXNwb25zZSA9IChncm91cDogR3JvdXApOiBHcm91cCA9PiAoe1xyXG4gICAgZ3JvdXBfaWQ6IGdyb3VwLmdyb3VwX2lkLFxyXG4gICAgbmFtZTogZ3JvdXAubmFtZSxcclxuICAgIHBlcm1pc3Npb25zOiBncm91cC5wZXJtaXNzaW9uc1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cHNUb1Jlc3BvbnNlID0gKGdyb3VwczogR3JvdXBbXSk6IEdyb3VwW10gPT4gZ3JvdXBzLm1hcChncm91cCA9PiBncm91cFRvUmVzcG9uc2UoZ3JvdXApKTtcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cFRvRGIgPSAoZ3JvdXA6IEdyb3VwVG9EYiwgZ3JvdXBfaWQ6IHN0cmluZykgPT5cclxuICAgIG5ldyBHcm91cE1vZGVsKHtcclxuICAgICAgICBncm91cF9pZDogZ3JvdXBfaWQsXHJcbiAgICAgICAgbmFtZTogZ3JvdXAubmFtZSxcclxuICAgICAgICBwZXJtaXNzaW9uczogZ3JvdXAucGVybWlzc2lvbnNcclxuICAgIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJUb1Jlc3BvbnNlID0gKHVzZXI6IFVzZXIpOiBVc2VyVG9SZXNwb25zZSA9PiAoe1xyXG4gICAgdXNlcl9pZDogdXNlci51c2VyX2lkLFxyXG4gICAgbG9naW46IHVzZXIubG9naW4sXHJcbiAgICBhZ2U6IHVzZXIuYWdlXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJzVG9SZXNwb25zZSA9ICh1c2VyczogVXNlcltdKTogVXNlclRvUmVzcG9uc2VbXSA9PiB1c2Vycy5tYXAodXNlciA9PiB1c2VyVG9SZXNwb25zZSh1c2VyKSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclRvRGIgPSAodXNlcjogVXNlclRvQWRkLCB1c2VyX2lkOiBzdHJpbmcpOiBVc2VyTW9kZWwgPT5cclxuICAgIG5ldyBVc2VyTW9kZWwoe1xyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJfaWQsXHJcbiAgICAgICAgbG9naW46IHVzZXIubG9naW4sXHJcbiAgICAgICAgYWdlOiB1c2VyLmFnZSxcclxuICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgfSk7XHJcbiIsImltcG9ydCB7IEhBTkRMRSB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2Nlc3NVbmhhbmRsZWRFcnJvciA9ICgpID0+IHtcclxuICAgIHByb2Nlc3NcclxuICAgICAgICAub24oJ3VuaGFuZGxlZFJlamVjdGlvbicsIChyZWFzb246IG51bWJlciwgcHJvbWlzZTogUHJvbWlzZTxhbnk+KSA9PiB7XHJcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgJHsgSEFORExFWyAndW5oYW5kbGVkUmVqZWN0aW9uJyBdLm1lc3NhZ2UgfTogJHsgSlNPTi5zdHJpbmdpZnkocHJvbWlzZSkgfSwgcmVhc29uOiAkeyByZWFzb24gfWApO1xyXG4gICAgICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oJ3VuY2F1Z2h0RXhjZXB0aW9uJywgKGVycm9yOiBFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoYCR7IEhBTkRMRVsgJ3VuY2F1Z2h0RXhjZXB0aW9uJyBdLm1lc3NhZ2UgfSAtICR7IGVycm9yIH1gKTtcclxuICAgICAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xyXG4gICAgICAgIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyBKb2kgZnJvbSAnQGhhcGkvam9pJztcclxuaW1wb3J0IHsgY3JlYXRlVmFsaWRhdG9yIH0gZnJvbSAnZXhwcmVzcy1qb2ktdmFsaWRhdGlvbic7XHJcblxyXG5jb25zdCBNSU5fQUdFID0gNDtcclxuY29uc3QgTUFYX0FHRSA9IDEzMDtcclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0b3IgPSBjcmVhdGVWYWxpZGF0b3IoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRVc2VyQm9keVNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgbG9naW46IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgYWdlOiBKb2kubnVtYmVyKCkuZ3JlYXRlcihNSU5fQUdFKS5sZXNzKE1BWF9BR0UpLnJlcXVpcmVkKCksXHJcbiAgICBwYXNzd29yZDogSm9pLnN0cmluZygpLmFscGhhbnVtKCkucmVxdWlyZWQoKVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyQm9keVNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgbG9naW46IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgYWdlOiBKb2kubnVtYmVyKCkuZ3JlYXRlcihNSU5fQUdFKS5sZXNzKE1BWF9BR0UpLnJlcXVpcmVkKClcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlclF1ZXJ5U2NoZW1hID0gSm9pLm9iamVjdCh7XHJcbiAgICB1c2VyX2lkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRHcm91cEJvZHlTY2hlbWEgPSBKb2kub2JqZWN0KHtcclxuICAgIG5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgcGVybWlzc2lvbnM6IEpvaS5hcnJheSgpLml0ZW1zKEpvaS5zdHJpbmcoKSkucmVxdWlyZWQoKVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVHcm91cFF1ZXJ5U2NoZW1hID0gSm9pLm9iamVjdCh7XHJcbiAgICBncm91cF9pZDogSm9pLnN0cmluZygpLnJlcXVpcmVkKClcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlR3JvdXBCb2R5U2NoZW1hID0gSm9pLm9iamVjdCh7XHJcbiAgICBuYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIHBlcm1pc3Npb25zOiBKb2kuYXJyYXkoKS5pdGVtcyhKb2kuc3RyaW5nKCkpLnJlcXVpcmVkKClcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVXNlcnNUb0dyb3VwUXVlcnlTY2hlbWEgPSBKb2kub2JqZWN0KHtcclxuICAgIGdyb3VwX2lkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRVc2Vyc1RvR3JvdXBCb2R5U2NoZW1hID0gSm9pLm9iamVjdCh7XHJcbiAgICB1c2VySWRzOiBKb2kuYXJyYXkoKS5pdGVtcyhKb2kuc3RyaW5nKCkpLnJlcXVpcmVkKClcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHNjaGVtYTogJ25ldycsXHJcbiAgICB0YWJsZXM6IHtcclxuICAgICAgICB1c2VyczogJ3VzZXJzJyxcclxuICAgICAgICBncm91cHM6ICdncm91cHMnLFxyXG4gICAgICAgIHVzZXJHcm91cHM6ICd1c2VyLWdyb3VwcydcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBbGxvd051bGwsIEJlbG9uZ3NUb01hbnksIENvbHVtbiwgRGF0YVR5cGUsIE1vZGVsLCBQcmltYXJ5S2V5LCBUYWJsZSwgVW5pcXVlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCB7IFVzZXJHcm91cCB9IGZyb20gJy4vdXNlci1ncm91cC5tb2RlbCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXIubW9kZWwnO1xyXG5cclxuZXhwb3J0IHR5cGUgUGVybWlzc2lvbnNUeXBlID0gJ1JFQUQnIHwgJ1dSSVRFJyB8ICdERUxFVEUnIHwgJ1NIQVJFJyB8ICdVUExPQURfRklMRVMnO1xyXG5cclxuQFRhYmxlKHtcclxuICAgIHNjaGVtYTogY29uZmlnLnNjaGVtYSxcclxuICAgIHRhYmxlTmFtZTogY29uZmlnLnRhYmxlcy5ncm91cHMsXHJcbiAgICBwYXJhbm9pZDogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIEdyb3VwIGV4dGVuZHMgTW9kZWw8R3JvdXA+IHtcclxuICAgIEBCZWxvbmdzVG9NYW55KCgpID0+IFVzZXIsICgpID0+IFVzZXJHcm91cClcclxuICAgIHVzZXJzOiBVc2VyW107XHJcblxyXG4gICAgLy8gYWRkVXNlcnM6IEJlbG9uZ3NUb01hbnlBZGRBc3NvY2lhdGlvbnNNaXhpbjxVc2VyLCBzdHJpbmc+OyBKdXN0IGFuIGV4YW1wbGUgb2YgYWRkaW5nIG1ldGhvZHMgdG8gbW9kZWxcclxuXHJcbiAgICBAUHJpbWFyeUtleVxyXG4gICAgQFVuaXF1ZSh0cnVlKVxyXG4gICAgQEFsbG93TnVsbChmYWxzZSlcclxuICAgIEBDb2x1bW5cclxuICAgIGdyb3VwX2lkOiBzdHJpbmc7XHJcblxyXG4gICAgQENvbHVtblxyXG4gICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBDb2x1bW4oRGF0YVR5cGUuQVJSQVkoRGF0YVR5cGUuU1RSSU5HKSlcclxuICAgIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9uc1R5cGVbXTtcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL3VzZXIubW9kZWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2dyb3VwLm1vZGVsJztcclxuZXhwb3J0ICogZnJvbSAnLi91c2VyLWdyb3VwLm1vZGVsJztcclxuIiwiaW1wb3J0IHsgQXV0b0luY3JlbWVudCwgQ29sdW1uLCBGb3JlaWduS2V5LCBNb2RlbCwgUHJpbWFyeUtleSwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuL2dyb3VwLm1vZGVsJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlci5tb2RlbCc7XHJcblxyXG5AVGFibGUoe1xyXG4gICAgc2NoZW1hOiBjb25maWcuc2NoZW1hLFxyXG4gICAgdGFibGVOYW1lOiBjb25maWcudGFibGVzLnVzZXJHcm91cHMsXHJcbiAgICBwYXJhbm9pZDogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckdyb3VwIGV4dGVuZHMgTW9kZWw8VXNlckdyb3VwPiB7XHJcbiAgICBAUHJpbWFyeUtleVxyXG4gICAgQEF1dG9JbmNyZW1lbnRcclxuICAgIEBDb2x1bW5cclxuICAgIHVzZXJfZ3JvdXBfaWQ6IG51bWJlcjtcclxuXHJcbiAgICBARm9yZWlnbktleSgoKSA9PiBHcm91cClcclxuICAgIEBDb2x1bW5cclxuICAgIGdyb3VwX2lkOiBzdHJpbmc7XHJcblxyXG4gICAgQEZvcmVpZ25LZXkoKCkgPT4gVXNlcilcclxuICAgIEBDb2x1bW5cclxuICAgIHVzZXJfaWQ6IHN0cmluZztcclxufVxyXG4iLCJpbXBvcnQgeyBDb2x1bW4sIFRhYmxlLCBNb2RlbCwgUHJpbWFyeUtleSwgQWxsb3dOdWxsLCBVbmlxdWUsIERhdGFUeXBlLCBCZWxvbmdzVG9NYW55IH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi9ncm91cC5tb2RlbCc7XHJcbmltcG9ydCB7IFVzZXJHcm91cCB9IGZyb20gJy4vdXNlci1ncm91cC5tb2RlbCc7XHJcblxyXG5AVGFibGUoe1xyXG4gICAgc2NoZW1hOiBjb25maWcuc2NoZW1hLFxyXG4gICAgdGFibGVOYW1lOiBjb25maWcudGFibGVzLnVzZXJzLFxyXG4gICAgcGFyYW5vaWQ6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBNb2RlbDxVc2VyPiB7XHJcbiAgICBAQmVsb25nc1RvTWFueSgoKSA9PiBHcm91cCwgKCkgPT4gVXNlckdyb3VwKVxyXG4gICAgZ3JvdXBzOiBHcm91cFtdO1xyXG5cclxuICAgIEBQcmltYXJ5S2V5XHJcbiAgICBAVW5pcXVlKHRydWUpXHJcbiAgICBAQWxsb3dOdWxsKGZhbHNlKVxyXG4gICAgQENvbHVtbihEYXRhVHlwZS5TVFJJTkcpXHJcbiAgICBAQ29sdW1uXHJcbiAgICB1c2VyX2lkOiBzdHJpbmc7XHJcblxyXG4gICAgQEFsbG93TnVsbChmYWxzZSlcclxuICAgIEBVbmlxdWUodHJ1ZSlcclxuICAgIEBDb2x1bW5cclxuICAgIGxvZ2luOiBzdHJpbmc7XHJcblxyXG4gICAgQEFsbG93TnVsbChmYWxzZSlcclxuICAgIEBDb2x1bW5cclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcblxyXG4gICAgQEFsbG93TnVsbChmYWxzZSlcclxuICAgIEBDb2x1bW5cclxuICAgIGFnZTogbnVtYmVyO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBST1VURVMgPSB7XHJcbiAgICB1c2VyUm91dGVzOiB7XHJcbiAgICAgICAgcm9vdDogJy8nLFxyXG4gICAgICAgIHVzZXJfaWQ6ICcvOnVzZXJfaWQnLFxyXG4gICAgICAgIHVzZXJzOiAnL3VzZXJzJ1xyXG4gICAgfSxcclxuICAgIGdyb3VwUm91dGVzOiB7XHJcbiAgICAgICAgcm9vdDogJy8nLFxyXG4gICAgICAgIGdyb3VwX2lkOiAnLzpncm91cF9pZC8nLFxyXG4gICAgICAgIHVzZXJzOiAnLzpncm91cF9pZC91c2VycycsXHJcbiAgICAgICAgZ3JvdXBzOiAnL2dyb3VwcydcclxuICAgIH0sXHJcbiAgICB1c2VyR3JvdXBSb3V0ZXM6IHtcclxuICAgICAgICByb290OiAnLycsXHJcbiAgICAgICAgZ3JvdXBfaWQ6ICcvOmdyb3VwX2lkJyxcclxuICAgICAgICB1c2Vyc19ncm91cDogJy91c2Vyc19ncm91cCcsXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZDoge1xyXG4gICAgICAgIHJvb3Q6ICcqJ1xyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IGdyb3VwQ29udHJvbGxlciwgdXNlcnNHcm91cENvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVycyc7XHJcbmltcG9ydCB7IG5vdEFsbG93ZWQgfSBmcm9tICcuLi9jb250cm9sbGVycy9oZWxwZXInO1xyXG5pbXBvcnQge1xyXG4gICAgYWRkR3JvdXBCb2R5U2NoZW1hLFxyXG4gICAgYWRkVXNlcnNUb0dyb3VwQm9keVNjaGVtYSxcclxuICAgIGFkZFVzZXJzVG9Hcm91cFF1ZXJ5U2NoZW1hLFxyXG4gICAgdXBkYXRlR3JvdXBCb2R5U2NoZW1hLFxyXG4gICAgdXBkYXRlR3JvdXBRdWVyeVNjaGVtYSxcclxuICAgIHZhbGlkYXRvclxyXG59IGZyb20gJy4uL21pZGRsZXdhcmVzJztcclxuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgZ3JvdXBSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5jb25zdCByb3V0ZXMgPSBST1VURVMuZ3JvdXBSb3V0ZXM7XHJcblxyXG5ncm91cFJvdXRlci5yb3V0ZShyb3V0ZXMucm9vdClcclxuICAgIC5nZXQoZ3JvdXBDb250cm9sbGVyLmdldEdyb3VwcylcclxuICAgIC5wb3N0KHZhbGlkYXRvci5ib2R5KGFkZEdyb3VwQm9keVNjaGVtYSksIGdyb3VwQ29udHJvbGxlci5hZGRHcm91cClcclxuICAgIC5hbGwobm90QWxsb3dlZCk7XHJcblxyXG5ncm91cFJvdXRlci5yb3V0ZShyb3V0ZXMuZ3JvdXBfaWQpXHJcbiAgICAuZ2V0KGdyb3VwQ29udHJvbGxlci5nZXRHcm91cEJ5SWQpXHJcbiAgICAucHV0KHZhbGlkYXRvci5wYXJhbXModXBkYXRlR3JvdXBRdWVyeVNjaGVtYSksIHZhbGlkYXRvci5ib2R5KHVwZGF0ZUdyb3VwQm9keVNjaGVtYSksIGdyb3VwQ29udHJvbGxlci51cGRhdGVHcm91cClcclxuICAgIC5kZWxldGUoZ3JvdXBDb250cm9sbGVyLmRlbGV0ZUdyb3VwKVxyXG4gICAgLmFsbChub3RBbGxvd2VkKTtcclxuXHJcbmdyb3VwUm91dGVyLnJvdXRlKHJvdXRlcy51c2VycylcclxuICAgIC5wb3N0KFxyXG4gICAgICAgIHZhbGlkYXRvci5wYXJhbXMoYWRkVXNlcnNUb0dyb3VwUXVlcnlTY2hlbWEpLFxyXG4gICAgICAgIHZhbGlkYXRvci5ib2R5KGFkZFVzZXJzVG9Hcm91cEJvZHlTY2hlbWEpLFxyXG4gICAgICAgIHVzZXJzR3JvdXBDb250cm9sbGVyLmFkZFVzZXJzVG9Hcm91cFxyXG4gICAgKVxyXG4gICAgLmFsbChub3RBbGxvd2VkKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdyb3VwUm91dGVyO1xyXG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IGdyb3VwUm91dGVyIGZyb20gJy4vZ3JvdXAtcm91dGVyJztcclxuaW1wb3J0IHVzZXJSb3V0ZXIgZnJvbSAnLi91c2VyLXJvdXRlcic7XHJcblxyXG5jb25zdCByb290Um91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxucm9vdFJvdXRlci51c2UoUk9VVEVTLnVzZXJSb3V0ZXMudXNlcnMsIHVzZXJSb3V0ZXIpO1xyXG5yb290Um91dGVyLnVzZShST1VURVMuZ3JvdXBSb3V0ZXMuZ3JvdXBzLCBncm91cFJvdXRlcik7XHJcbnJvb3RSb3V0ZXIudXNlKFJPVVRFUy5pbnZhbGlkLnJvb3QsIGdyb3VwUm91dGVyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSb3V0ZXI7XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgdXNlcnNDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMnO1xyXG5pbXBvcnQgeyBub3RBbGxvd2VkIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvaGVscGVyJztcclxuaW1wb3J0IHsgYWRkVXNlckJvZHlTY2hlbWEsIHVwZGF0ZVVzZXJCb2R5U2NoZW1hLCB1cGRhdGVVc2VyUXVlcnlTY2hlbWEsIHZhbGlkYXRvciB9IGZyb20gJy4uL21pZGRsZXdhcmVzJztcclxuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgdXNlclJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbmNvbnN0IHJvdXRlcyA9IFJPVVRFUy51c2VyUm91dGVzO1xyXG5cclxudXNlclJvdXRlci5yb3V0ZShyb3V0ZXMucm9vdClcclxuICAgIC5nZXQodXNlcnNDb250cm9sbGVyLmdldFVzZXJzKVxyXG4gICAgLnBvc3QodmFsaWRhdG9yLmJvZHkoYWRkVXNlckJvZHlTY2hlbWEpLCB1c2Vyc0NvbnRyb2xsZXIuYWRkVXNlcilcclxuICAgIC5hbGwobm90QWxsb3dlZCk7XHJcblxyXG51c2VyUm91dGVyLnJvdXRlKHJvdXRlcy51c2VyX2lkKVxyXG4gICAgLmdldCh1c2Vyc0NvbnRyb2xsZXIuZ2V0VXNlckJ5SWQpXHJcbiAgICAucHV0KHZhbGlkYXRvci5wYXJhbXModXBkYXRlVXNlclF1ZXJ5U2NoZW1hKSwgdmFsaWRhdG9yLmJvZHkodXBkYXRlVXNlckJvZHlTY2hlbWEpLCB1c2Vyc0NvbnRyb2xsZXIudXBkYXRlVXNlcilcclxuICAgIC5kZWxldGUodXNlcnNDb250cm9sbGVyLmRlbGV0ZVVzZXIpXHJcbiAgICAuYWxsKG5vdEFsbG93ZWQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclJvdXRlcjtcclxuIiwiaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XHJcblxyXG5pbXBvcnQgeyBncm91cERBTCwgUXVlcnlQYXJhbXMgfSBmcm9tICcuLi9kYXRhLWFjY2Vzcyc7XHJcbmltcG9ydCB7IEdyb3VwLCBHcm91cFRvRGIsIEdyb3VwVG9VcGRhdGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3R5cGluZ3MnO1xyXG5pbXBvcnQgeyBncm91cFRvRGIgfSBmcm9tICcuLi9taWRkbGV3YXJlcyc7XHJcbmltcG9ydCB7IHVzZXJzR3JvdXBTZXJ2aWNlIH0gZnJvbSAnLi91c2Vycy1ncm91cC5zZXJ2aXNlJztcclxuXHJcbmNvbnN0IGdldEFsbEdyb3VwcyA9IChxdWVyeTogUXVlcnlQYXJhbXMpOiBQcm9taXNlPEdyb3VwW10+ID0+XHJcbiAgICBncm91cERBTC5nZXRBbGwocXVlcnkpO1xyXG5cclxuY29uc3QgZ2V0R3JvdXBCeUlkID0gKGdyb3VwX2lkOiBzdHJpbmcpOiBQcm9taXNlPEdyb3VwPiA9PlxyXG4gICAgZ3JvdXBEQUwuZ2V0R3JvdXAoZ3JvdXBfaWQpO1xyXG5cclxuY29uc3QgYWRkR3JvdXAgPSAobmV3R3JvdXA6IEdyb3VwVG9EYik6IFByb21pc2U8dm9pZD4gPT5cclxuICAgIGdyb3VwREFMLmluc2VydEdyb3VwKGdyb3VwVG9EYihuZXdHcm91cCwgdXVpZC52MSgpLnRvU3RyaW5nKCkpKTtcclxuXHJcbmNvbnN0IHVwZGF0ZUdyb3VwID0gKGdyb3VwX2lkOiBzdHJpbmcsIGdyb3VwVG9VcGRhdGU6IEdyb3VwVG9VcGRhdGUpOiBQcm9taXNlPHZvaWQ+ID0+XHJcbiAgICBncm91cERBTC51cGRhdGVHcm91cChncm91cF9pZCwgZ3JvdXBUb1VwZGF0ZSk7XHJcblxyXG5jb25zdCBkZWxldGVHcm91cCA9IChncm91cF9pZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PlxyXG4gICAgZ3JvdXBEQUwuZGVsZXRlR3JvdXAoZ3JvdXBfaWQpO1xyXG5cclxuY29uc3QgYWRkVXNlcnNUb0dyb3VwID0gdXNlcnNHcm91cFNlcnZpY2UuYWRkVXNlcnNUb0dyb3VwO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyb3VwU2VydmljZSA9IHtcclxuICAgIGdldEFsbEdyb3VwcyxcclxuICAgIGdldEdyb3VwQnlJZCxcclxuICAgIGFkZEdyb3VwLFxyXG4gICAgdXBkYXRlR3JvdXAsXHJcbiAgICBkZWxldGVHcm91cCxcclxuICAgIGFkZFVzZXJzVG9Hcm91cFxyXG59O1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL3VzZXIuc2VydmlzZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZ3JvdXAuc2VydmlzZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdXNlcnMtZ3JvdXAuc2VydmlzZSc7XHJcbiIsImltcG9ydCB1dWlkIGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyB1c2VyREFMLCB1c2VyVG9EYiB9IGZyb20gJy4uL2RhdGEtYWNjZXNzJztcclxuXHJcbmltcG9ydCB7IFVzZXJUb0FkZCwgVXNlclRvUmVzcG9uc2UsIFVzZXJUb1VwZGF0ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcblxyXG5jb25zdCBnZXRBbGxVc2VycyA9IChxdWVyeTogeyBsb2dpbj86IHN0cmluZywgbGltaXQ/OiBzdHJpbmcsIG9mZnNldD86IHN0cmluZyB9KTogUHJvbWlzZTxVc2VyVG9SZXNwb25zZVtdPiA9PiB1c2VyREFMLmdldEFsbChxdWVyeSk7XHJcblxyXG5jb25zdCBnZXRVc2VyQnlJZCA9ICh1c2VyX2lkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXJUb1Jlc3BvbnNlPiA9PiB1c2VyREFMLmdldFVzZXIodXNlcl9pZCk7XHJcblxyXG5jb25zdCBhZGRVc2VyID0gKG5ld1VzZXI6IFVzZXJUb0FkZCk6IFByb21pc2U8dm9pZD4gPT4gdXNlckRBTC5pbnNlcnRVc2VyKHVzZXJUb0RiKG5ld1VzZXIsIHV1aWQudjEoKS50b1N0cmluZygpKSk7XHJcblxyXG5jb25zdCB1cGRhdGVVc2VyID0gKHVzZXJfaWQ6IHN0cmluZywgdXNlclRvVXBkYXRlOiBVc2VyVG9VcGRhdGUpOiBQcm9taXNlPHZvaWQ+ID0+IHVzZXJEQUwudXBkYXRlVXNlcih1c2VyX2lkLCB1c2VyVG9VcGRhdGUpO1xyXG5cclxuY29uc3QgZGVsZXRlVXNlciA9ICh1c2VyX2lkOiBzdHJpbmcpID0+IHVzZXJEQUwuZGVsZXRlVXNlcih1c2VyX2lkKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyU2VydmljZSA9IHtcclxuICAgIGdldEFsbFVzZXJzLFxyXG4gICAgZ2V0VXNlckJ5SWQsXHJcbiAgICBhZGRVc2VyLFxyXG4gICAgdXBkYXRlVXNlcixcclxuICAgIGRlbGV0ZVVzZXJcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlcnNHcm91cERBTCB9IGZyb20gJy4uL2RhdGEtYWNjZXNzL2RhbC91c2VyLWdyb3VwLkRBTCc7XHJcblxyXG5jb25zdCBhZGRVc2Vyc1RvR3JvdXAgPSBhc3luYyAoZ3JvdXBfaWQ6IHN0cmluZywgdXNlcl9pZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+ID0+XHJcbiAgICBhd2FpdCB1c2Vyc0dyb3VwREFMLmFkZFVzZXJzVG9Hcm91cChncm91cF9pZCwgdXNlcl9pZHMpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJzR3JvdXBTZXJ2aWNlID0geyBhZGRVc2Vyc1RvR3JvdXAgfTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGhhcGkvam9pXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1qb2ktdmFsaWRhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwLWVycm9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplLXR5cGVzY3JpcHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3aW5zdG9uXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=