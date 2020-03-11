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
/*! exports provided: corsOptions, dbConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "corsOptions", function() { return corsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbConfig", function() { return dbConfig; });
const dialect = 'postgres';
const corsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET, PUT, POST, DELETE",
    origin: "some url",
    preflightContinue: false
};
const dbConfig = {
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
};


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
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config */ "./config/config.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-access */ "./src/data-access/index.ts");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middlewares */ "./src/middlewares/index.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes */ "./src/routes/index.ts");
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
app.use(_middlewares__WEBPACK_IMPORTED_MODULE_5__["httpLogger"]);
app.use(_routes__WEBPACK_IMPORTED_MODULE_6__["default"]);
app.use(cors__WEBPACK_IMPORTED_MODULE_1__(_config_config__WEBPACK_IMPORTED_MODULE_2__["corsOptions"]));
Object(_middlewares__WEBPACK_IMPORTED_MODULE_5__["processUnhandledError"])();
app.listen(_constants__WEBPACK_IMPORTED_MODULE_3__["PORT"], () => __awaiter(void 0, void 0, void 0, function* () {
    _middlewares__WEBPACK_IMPORTED_MODULE_5__["logger"].info(`${_constants__WEBPACK_IMPORTED_MODULE_3__["LOG_MESSAGES"].portListening} ${_constants__WEBPACK_IMPORTED_MODULE_3__["PORT"]}`);
    try {
        yield Object(_data_access__WEBPACK_IMPORTED_MODULE_4__["dbConnect"])();
    }
    catch (error) {
        _middlewares__WEBPACK_IMPORTED_MODULE_5__["logger"].error(error);
        throw error;
    }
}));


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: PORT, JWT_TOKEN, ERRORS, LOG_MESSAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT", function() { return PORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWT_TOKEN", function() { return JWT_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERRORS", function() { return ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_MESSAGES", function() { return LOG_MESSAGES; });
const PORT = process.env.PORT || 4001;
const JWT_TOKEN = 'big_secret';
const ERRORS = {
    notFound: 'not found!',
    groupNotFound: 'Group not Found!',
    methodNotAllowed: 'Method not allowed here!',
    exist: 'already exist!',
    routNotExist: 'This route is not exist!',
    badLogin: 'Bad login/password combination!',
    badToken: 'Failed to authenticate token!',
    noToken: 'No token provided!'
};
const LOG_MESSAGES = {
    connectionSuccess: 'Connection has been established successfully!',
    connectionFailed: 'Unable to connect to the database:',
    portListening: 'Listening on port...',
    dataBaseRestoringInProcess: 'Database restoring in process...',
    dataBaseRestoringComplete: 'Database restoring complete!'
};


/***/ }),

/***/ "./src/controllers/authenticate.controller.ts":
/*!****************************************************!*\
  !*** ./src/controllers/authenticate.controller.ts ***!
  \****************************************************/
/*! exports provided: authenticateController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticateController", function() { return authenticateController; });
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


const authenticate = (request, response) => __awaiter(void 0, void 0, void 0, function* () { return Object(_helper__WEBPACK_IMPORTED_MODULE_1__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_0__["authenticateService"].authenticate(request.body.login, request.body.password), response, request); });
const authenticateController = { authenticate };


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
/*! exports provided: usersController, groupController, usersGroupController, invalidController, authenticateController, requestHelper, notAllowed */
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

/* harmony import */ var _authenticate_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authenticate.controller */ "./src/controllers/authenticate.controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authenticateController", function() { return _authenticate_controller__WEBPACK_IMPORTED_MODULE_4__["authenticateController"]; });

/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper */ "./src/controllers/helper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestHelper", function() { return _helper__WEBPACK_IMPORTED_MODULE_5__["requestHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notAllowed", function() { return _helper__WEBPACK_IMPORTED_MODULE_5__["notAllowed"]; });









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

/***/ "./src/data-access/dal/authenticateDAL.ts":
/*!************************************************!*\
  !*** ./src/data-access/dal/authenticateDAL.ts ***!
  \************************************************/
/*! exports provided: authenticateDAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticateDAL", function() { return authenticateDAL; });
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-errors */ "http-errors");
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./src/models/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const authenticate = (login, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield _models__WEBPACK_IMPORTED_MODULE_3__["User"].findOne({ where: { [sequelize__WEBPACK_IMPORTED_MODULE_1__["Op"].and]: { login: login, password: password } } });
    if (!user)
        throw http_errors__WEBPACK_IMPORTED_MODULE_0___default()(403, { message: `${_constants__WEBPACK_IMPORTED_MODULE_2__["ERRORS"].badLogin}` });
    return user;
});
const authenticateDAL = { authenticate };


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
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/config */ "./config/config.ts");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares */ "./src/middlewares/index.ts");
/* harmony import */ var _backup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backup */ "./src/data-access/backup.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






const models = [_models__WEBPACK_IMPORTED_MODULE_5__["User"], _models__WEBPACK_IMPORTED_MODULE_5__["Group"], _models__WEBPACK_IMPORTED_MODULE_5__["UserGroup"]];
const sequelize = new sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Sequelize"](_config_config__WEBPACK_IMPORTED_MODULE_1__["dbConfig"].database, _config_config__WEBPACK_IMPORTED_MODULE_1__["dbConfig"].username, _config_config__WEBPACK_IMPORTED_MODULE_1__["dbConfig"].password, {
    define: { timestamps: true },
    port: _config_config__WEBPACK_IMPORTED_MODULE_1__["dbConfig"].port,
    dialect: _config_config__WEBPACK_IMPORTED_MODULE_1__["dbConfig"].dialect,
    host: _config_config__WEBPACK_IMPORTED_MODULE_1__["dbConfig"].host,
    dialectOptions: { ssl: true },
    pool: _config_config__WEBPACK_IMPORTED_MODULE_1__["dbConfig"].pool,
    models: [...models]
});
const dbConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    yield sequelize.sync({ force: true });
    _middlewares__WEBPACK_IMPORTED_MODULE_2__["logger"].info(_constants__WEBPACK_IMPORTED_MODULE_4__["LOG_MESSAGES"].connectionSuccess);
    try {
        _middlewares__WEBPACK_IMPORTED_MODULE_2__["logger"].info(_constants__WEBPACK_IMPORTED_MODULE_4__["LOG_MESSAGES"].dataBaseRestoringInProcess);
        yield Object(_backup__WEBPACK_IMPORTED_MODULE_3__["dataBaseRestoring"])();
        _middlewares__WEBPACK_IMPORTED_MODULE_2__["logger"].info(_constants__WEBPACK_IMPORTED_MODULE_4__["LOG_MESSAGES"].dataBaseRestoringComplete);
    }
    catch (error) {
        _middlewares__WEBPACK_IMPORTED_MODULE_2__["logger"].error({ name: error.name, message: error.message, stack: error.stack });
    }
});


/***/ }),

/***/ "./src/data-access/index.ts":
/*!**********************************!*\
  !*** ./src/data-access/index.ts ***!
  \**********************************/
/*! exports provided: userDAL, groupDAL, usersGroupDAL, authenticateDAL, sequelize, dbConnect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dal_user_DAL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dal/user.DAL */ "./src/data-access/dal/user.DAL.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userDAL", function() { return _dal_user_DAL__WEBPACK_IMPORTED_MODULE_0__["userDAL"]; });

/* harmony import */ var _dal_group_DAL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dal/group.DAL */ "./src/data-access/dal/group.DAL.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupDAL", function() { return _dal_group_DAL__WEBPACK_IMPORTED_MODULE_1__["groupDAL"]; });

/* harmony import */ var _dal_user_group_DAL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dal/user-group.DAL */ "./src/data-access/dal/user-group.DAL.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usersGroupDAL", function() { return _dal_user_group_DAL__WEBPACK_IMPORTED_MODULE_2__["usersGroupDAL"]; });

/* harmony import */ var _dal_authenticateDAL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dal/authenticateDAL */ "./src/data-access/dal/authenticateDAL.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authenticateDAL", function() { return _dal_authenticateDAL__WEBPACK_IMPORTED_MODULE_3__["authenticateDAL"]; });

/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./db */ "./src/data-access/db.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sequelize", function() { return _db__WEBPACK_IMPORTED_MODULE_4__["sequelize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dbConnect", function() { return _db__WEBPACK_IMPORTED_MODULE_4__["dbConnect"]; });








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

/***/ "./src/middlewares/guard.ts":
/*!**********************************!*\
  !*** ./src/middlewares/guard.ts ***!
  \**********************************/
/*! exports provided: checkToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkToken", function() { return checkToken; });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");


const checkToken = (request, response, next) => {
    let token = request.headers['x-access-token'];
    if (token) {
        jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, _constants__WEBPACK_IMPORTED_MODULE_1__["JWT_TOKEN"], (err) => {
            if (err) {
                response.status(401).json({ success: false, message: _constants__WEBPACK_IMPORTED_MODULE_1__["ERRORS"].badToken });
            }
            else {
                response.locals.user_id = decodeToken(token).user_id;
                next();
            }
        });
    }
    else {
        response.status(403).send({ success: false, message: _constants__WEBPACK_IMPORTED_MODULE_1__["ERRORS"].noToken });
    }
};
const decodeToken = (token) => jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.decode(token);


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

/***/ "./src/routes/authenticate-router.ts":
/*!*******************************************!*\
  !*** ./src/routes/authenticate-router.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers */ "./src/controllers/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/routes/constants.ts");




const authenticateRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
const routes = _constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].authenticate;
authenticateRouter.route(routes.root)
    .post(_controllers__WEBPACK_IMPORTED_MODULE_1__["authenticateController"].authenticate)
    .all(_controllers__WEBPACK_IMPORTED_MODULE_1__["notAllowed"]);
/* harmony default export */ __webpack_exports__["default"] = (authenticateRouter);


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
    authenticate: {
        root: '/',
        auth: '/auth'
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
/* harmony import */ var _authenticate_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authenticate-router */ "./src/routes/authenticate-router.ts");






const rootRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
rootRouter.use(_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].userRoutes.users, _user_router__WEBPACK_IMPORTED_MODULE_3__["default"]);
rootRouter.use(_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].groupRoutes.groups, _group_router__WEBPACK_IMPORTED_MODULE_2__["default"]);
rootRouter.use(_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].authenticate.auth, _authenticate_router__WEBPACK_IMPORTED_MODULE_5__["default"]);
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
/* harmony import */ var _middlewares_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middlewares/guard */ "./src/middlewares/guard.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/routes/constants.ts");






const userRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
const routes = _constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].userRoutes;
userRouter.route(routes.root)
    .get(_middlewares_guard__WEBPACK_IMPORTED_MODULE_3__["checkToken"], _controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].getUsers)
    .post(_middlewares__WEBPACK_IMPORTED_MODULE_2__["validator"].body(_middlewares__WEBPACK_IMPORTED_MODULE_2__["addUserBodySchema"]), _controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].addUser)
    .all(_controllers__WEBPACK_IMPORTED_MODULE_1__["notAllowed"]);
userRouter.route(routes.user_id)
    .get(_controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].getUserById)
    .put(_middlewares__WEBPACK_IMPORTED_MODULE_2__["validator"].params(_middlewares__WEBPACK_IMPORTED_MODULE_2__["updateUserQuerySchema"]), _middlewares__WEBPACK_IMPORTED_MODULE_2__["validator"].body(_middlewares__WEBPACK_IMPORTED_MODULE_2__["updateUserBodySchema"]), _controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].updateUser)
    .delete(_controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].deleteUser)
    .all(_controllers__WEBPACK_IMPORTED_MODULE_1__["notAllowed"]);
/* harmony default export */ __webpack_exports__["default"] = (userRouter);


/***/ }),

/***/ "./src/services/authenticate.service.ts":
/*!**********************************************!*\
  !*** ./src/services/authenticate.service.ts ***!
  \**********************************************/
/*! exports provided: authenticateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticateService", function() { return authenticateService; });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-access */ "./src/data-access/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const authenticate = (login, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield _data_access__WEBPACK_IMPORTED_MODULE_2__["authenticateDAL"].authenticate(login, password);
    let payload = { 'user_id': user.user_id, 'isActive': true };
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(payload, _constants__WEBPACK_IMPORTED_MODULE_1__["JWT_TOKEN"], { expiresIn: 10 });
});
const authenticateService = { authenticate };


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
/*! exports provided: userService, groupService, usersGroupService, authenticateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_servise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.servise */ "./src/services/user.servise.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userService", function() { return _user_servise__WEBPACK_IMPORTED_MODULE_0__["userService"]; });

/* harmony import */ var _group_servise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group.servise */ "./src/services/group.servise.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupService", function() { return _group_servise__WEBPACK_IMPORTED_MODULE_1__["groupService"]; });

/* harmony import */ var _users_group_servise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-group.servise */ "./src/services/users-group.servise.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usersGroupService", function() { return _users_group_servise__WEBPACK_IMPORTED_MODULE_2__["usersGroupService"]; });

/* harmony import */ var _authenticate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authenticate.service */ "./src/services/authenticate.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authenticateService", function() { return _authenticate_service__WEBPACK_IMPORTED_MODULE_3__["authenticateService"]; });







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

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

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

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2F1dGhlbnRpY2F0ZS5jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9ncm91cC5jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9pbnZhbGlkLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL3VzZXJzLWdyb3VwLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL3VzZXJzLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtYWNjZXNzL2JhY2t1cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1hY2Nlc3MvZGFsL2F1dGhlbnRpY2F0ZURBTC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1hY2Nlc3MvZGFsL2dyb3VwLkRBTC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1hY2Nlc3MvZGFsL3VzZXItZ3JvdXAuREFMLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLWFjY2Vzcy9kYWwvdXNlci5EQUwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtYWNjZXNzL2RiLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLWFjY2Vzcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlcy9ndWFyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvaHR0cC1sb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pZGRsZXdhcmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlcy9sb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pZGRsZXdhcmVzL3BhcnNlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pZGRsZXdhcmVzL3Byb2Nlc3MudW5oYW5kbGVkRXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pZGRsZXdhcmVzL3ZhbGlkYXRpb24uc2VydmlzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2dyb3VwLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy91c2VyLWdyb3VwLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvdXNlci5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2F1dGhlbnRpY2F0ZS1yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9ncm91cC1yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2ludmFsaWQtcm91dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvdXNlci1yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2F1dGhlbnRpY2F0ZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9ncm91cC5zZXJ2aXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdXNlci5zZXJ2aXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy91c2Vycy1ncm91cC5zZXJ2aXNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBoYXBpL2pvaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1qb2ktdmFsaWRhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHAtZXJyb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VxdWVsaXplXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VxdWVsaXplLXR5cGVzY3JpcHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luc3RvblwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFz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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEI2QztBQUUvQyxNQUFNLGVBQWUsR0FBRyxDQUFPLFFBQWdCLEVBQUUsUUFBa0IsRUFBZ0IsRUFBRSxrREFDakYsYUFBTSwwREFBYSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEtBQUM7QUFFckQsTUFBTSxpQkFBaUIsR0FBRyxFQUFFLGVBQWUsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7QUNMckQsc0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoic2VydmVyLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC50c1wiKTtcbiIsImltcG9ydCB7IENvcnNPcHRpb25zIH0gZnJvbSAnY29ycyc7XHJcbmltcG9ydCB7IERpYWxlY3QgfSBmcm9tICdzZXF1ZWxpemUnO1xyXG5cclxuY29uc3QgZGlhbGVjdDogRGlhbGVjdCA9ICdwb3N0Z3Jlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgY29yc09wdGlvbnM6IENvcnNPcHRpb25zID0ge1xyXG4gICAgYWxsb3dlZEhlYWRlcnM6IFsgXCJPcmlnaW5cIiwgXCJYLVJlcXVlc3RlZC1XaXRoXCIsIFwiQ29udGVudC1UeXBlXCIsIFwiQWNjZXB0XCIsIFwiWC1BY2Nlc3MtVG9rZW5cIiBdLFxyXG4gICAgY3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICBtZXRob2RzOiBcIkdFVCwgUFVULCBQT1NULCBERUxFVEVcIixcclxuICAgIG9yaWdpbjogXCJzb21lIHVybFwiLFxyXG4gICAgcHJlZmxpZ2h0Q29udGludWU6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGJDb25maWcgPSB7XHJcbiAgICBkaWFsZWN0OiBkaWFsZWN0LFxyXG4gICAgaG9zdDogXCJlYzItNTQtMjQ2LTEwMC0yNDYuZXUtd2VzdC0xLmNvbXB1dGUuYW1hem9uYXdzLmNvbVwiLFxyXG4gICAgcG9ydDogNTQzMixcclxuICAgIGRhdGFiYXNlOiBcImQzb3ZzMGtoajgyYTNoXCIsXHJcbiAgICB1c2VybmFtZTogXCJ4ZGRxdnJmendkd2VjclwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiM2Y0MWI1MDQ3Y2RkYmI1MjYxZDA3ZTJhNmU4MmViM2Y2NDUxZGU4YjM4ODVlMDFjZjYxMzZhZjU5NTRkN2EzN1wiLFxyXG4gICAgcG9vbDoge1xyXG4gICAgICAgIG1pbjogMCxcclxuICAgICAgICBtYXg6IDUsXHJcbiAgICAgICAgYWNxdWlyZTogMzAwMDAsXHJcbiAgICAgICAgaWRsZTogMTAwMDBcclxuICAgIH1cclxufTtcclxuIiwiaW1wb3J0IGV4cHJlc3MsIHsgQXBwbGljYXRpb24gfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0ICogYXMgY29ycyBmcm9tICdjb3JzJztcclxuXHJcbmltcG9ydCB7IGNvcnNPcHRpb25zIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZyc7XHJcbmltcG9ydCB7IExPR19NRVNTQUdFUywgUE9SVCB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgZGJDb25uZWN0IH0gZnJvbSAnLi9kYXRhLWFjY2Vzcyc7XHJcbmltcG9ydCB7IGh0dHBMb2dnZXIsIGxvZ2dlciwgcHJvY2Vzc1VuaGFuZGxlZEVycm9yIH0gZnJvbSAnLi9taWRkbGV3YXJlcyc7XHJcbmltcG9ydCByb290Um91dGVyIGZyb20gJy4vcm91dGVzJztcclxuXHJcbmNvbnN0IGFwcDogQXBwbGljYXRpb24gPSBleHByZXNzKCk7XHJcblxyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuYXBwLnVzZShodHRwTG9nZ2VyKTtcclxuYXBwLnVzZShyb290Um91dGVyKTtcclxuYXBwLnVzZShjb3JzKGNvcnNPcHRpb25zKSk7XHJcblxyXG5wcm9jZXNzVW5oYW5kbGVkRXJyb3IoKTtcclxuXHJcbmFwcC5saXN0ZW4oUE9SVCwgYXN5bmMgKCkgPT4ge1xyXG4gICAgbG9nZ2VyLmluZm8oYCR7IExPR19NRVNTQUdFUy5wb3J0TGlzdGVuaW5nIH0gJHsgUE9SVCB9YCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBsb2dnZXIuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4iLCJleHBvcnQgY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNDAwMTtcclxuXHJcbmV4cG9ydCBjb25zdCBKV1RfVE9LRU46IHN0cmluZyA9ICdiaWdfc2VjcmV0JztcclxuXHJcbiAgICBleHBvcnQgY29uc3QgRVJST1JTID0ge1xyXG4gICAgbm90Rm91bmQ6ICdub3QgZm91bmQhJyxcclxuICAgIGdyb3VwTm90Rm91bmQ6ICdHcm91cCBub3QgRm91bmQhJyxcclxuICAgIG1ldGhvZE5vdEFsbG93ZWQ6ICdNZXRob2Qgbm90IGFsbG93ZWQgaGVyZSEnLFxyXG4gICAgZXhpc3Q6ICdhbHJlYWR5IGV4aXN0IScsXHJcbiAgICByb3V0Tm90RXhpc3Q6ICdUaGlzIHJvdXRlIGlzIG5vdCBleGlzdCEnLFxyXG4gICAgYmFkTG9naW46ICdCYWQgbG9naW4vcGFzc3dvcmQgY29tYmluYXRpb24hJyxcclxuICAgIGJhZFRva2VuOiAnRmFpbGVkIHRvIGF1dGhlbnRpY2F0ZSB0b2tlbiEnLFxyXG4gICAgbm9Ub2tlbjogJ05vIHRva2VuIHByb3ZpZGVkISdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfTUVTU0FHRVMgPSB7XHJcbiAgICBjb25uZWN0aW9uU3VjY2VzczogJ0Nvbm5lY3Rpb24gaGFzIGJlZW4gZXN0YWJsaXNoZWQgc3VjY2Vzc2Z1bGx5IScsXHJcbiAgICBjb25uZWN0aW9uRmFpbGVkOiAnVW5hYmxlIHRvIGNvbm5lY3QgdG8gdGhlIGRhdGFiYXNlOicsXHJcbiAgICBwb3J0TGlzdGVuaW5nOiAnTGlzdGVuaW5nIG9uIHBvcnQuLi4nLFxyXG4gICAgZGF0YUJhc2VSZXN0b3JpbmdJblByb2Nlc3M6ICdEYXRhYmFzZSByZXN0b3JpbmcgaW4gcHJvY2Vzcy4uLicsXHJcbiAgICBkYXRhQmFzZVJlc3RvcmluZ0NvbXBsZXRlOiAnRGF0YWJhc2UgcmVzdG9yaW5nIGNvbXBsZXRlISdcclxufTtcclxuXHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBhdXRoZW50aWNhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQgeyByZXF1ZXN0SGVscGVyIH0gZnJvbSAnLi9oZWxwZXInO1xyXG5cclxuY29uc3QgYXV0aGVudGljYXRlID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gYXV0aGVudGljYXRlU2VydmljZS5hdXRoZW50aWNhdGUocmVxdWVzdC5ib2R5LmxvZ2luLCByZXF1ZXN0LmJvZHkucGFzc3dvcmQpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRlQ29udHJvbGxlciA9IHsgYXV0aGVudGljYXRlIH07XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBncm91cFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IHJlcXVlc3RIZWxwZXIgfSBmcm9tICcuL2hlbHBlcic7XHJcblxyXG5jb25zdCBnZXRHcm91cHMgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiBncm91cFNlcnZpY2UuZ2V0QWxsR3JvdXBzKHJlcXVlc3QucXVlcnkpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCBnZXRHcm91cEJ5SWQgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiBncm91cFNlcnZpY2UuZ2V0R3JvdXBCeUlkKHJlcXVlc3QucGFyYW1zLmdyb3VwX2lkKSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuY29uc3QgYWRkR3JvdXAgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiBncm91cFNlcnZpY2UuYWRkR3JvdXAocmVxdWVzdC5ib2R5KSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuY29uc3QgYWRkVXNlcnNUb0dyb3VwID0gKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gZ3JvdXBTZXJ2aWNlLmFkZFVzZXJzVG9Hcm91cChyZXF1ZXN0LnBhcmFtcy5ncm91cF9pZCwgcmVxdWVzdC5ib2R5LnVzZXJJZHMpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCB1cGRhdGVHcm91cCA9IChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IGdyb3VwU2VydmljZS51cGRhdGVHcm91cChyZXF1ZXN0LnBhcmFtcy5ncm91cF9pZCwgcmVxdWVzdC5ib2R5KSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuY29uc3QgZGVsZXRlR3JvdXAgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXF1ZXN0SGVscGVyKCgpID0+XHJcbiAgICBncm91cFNlcnZpY2UuZGVsZXRlR3JvdXAocmVxdWVzdC5wYXJhbXMuZ3JvdXBfaWQpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5leHBvcnQgY29uc3QgZ3JvdXBDb250cm9sbGVyID0ge1xyXG4gICAgZ2V0R3JvdXBzLFxyXG4gICAgZ2V0R3JvdXBCeUlkLFxyXG4gICAgYWRkR3JvdXAsXHJcbiAgICB1cGRhdGVHcm91cCxcclxuICAgIGRlbGV0ZUdyb3VwLFxyXG4gICAgYWRkVXNlcnNUb0dyb3VwXHJcbn07XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBjcmVhdGVFcnJvciwgeyBIdHRwRXJyb3IgfSBmcm9tICdodHRwLWVycm9ycyc7XHJcblxyXG5pbXBvcnQgeyBFUlJPUlMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi9taWRkbGV3YXJlcyc7XHJcblxyXG5jb25zdCBnZXRMb2dNZXNzYWdlID0gKHJlcXVlc3Q6IFJlcXVlc3QpOiBzdHJpbmcgPT4ge1xyXG4gICAgY29uc3QgcGFyYW1zID0gYHBhcmFtczogJHsgSlNPTi5zdHJpbmdpZnkocmVxdWVzdC5wYXJhbXMpIH1gO1xyXG4gICAgY29uc3QgYm9keSA9IGBib2R5OiAkeyBKU09OLnN0cmluZ2lmeShyZXF1ZXN0LmJvZHkpIH1gO1xyXG4gICAgY29uc3QgcXVlcnkgPSBgcXVlcnk6ICR7IEpTT04uc3RyaW5naWZ5KHJlcXVlc3QucXVlcnkpIH1gO1xyXG4gICAgY29uc3QgdXJsID0gYHVybDogJHsgcmVxdWVzdC51cmwgfWA7XHJcbiAgICBjb25zdCBtZXRob2QgPSBgbWV0aG9kOiAkeyByZXF1ZXN0Lm1ldGhvZCB9YDtcclxuXHJcbiAgICByZXR1cm4gYCR7IG1ldGhvZCB9ICR7IHVybCB9ICR7IHBhcmFtcyB9ICR7IHF1ZXJ5IH0gJHsgYm9keSB9YDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0SGVscGVyID0gYXN5bmMgKGZuOiBhbnksIHJlc3BvbnNlOiBSZXNwb25zZSwgcmVxdWVzdDogUmVxdWVzdCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZm4oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgICAgICAgPyByZXNwb25zZS5zZW5kKHsgZGF0YSwgc3RhdHVzOiAnc3VjY2VzcycgfSlcclxuICAgICAgICAgICAgOiByZXNwb25zZS5zZW5kKHsgc3RhdHVzOiAnc3VjY2VzcycgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGxvZ2dlci5lcnJvcihgc3RhdHVzOiAkeyBlcnJvci5zdGF0dXMgfHwgNTAwIH0sIG1lc3NhZ2U6ICR7IGVycm9yLm1lc3NhZ2UgfSwgJHsgZ2V0TG9nTWVzc2FnZShyZXF1ZXN0KSB9YCk7XHJcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzKGVycm9yLnN0YXR1cyB8fCA1MDApLnNlbmQoeyBlcnJvcjogeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0gfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgbm90QWxsb3dlZCA9IChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgIGxldCBlcnJvcjogSHR0cEVycm9yID0gY3JlYXRlRXJyb3IoNDA1LCBFUlJPUlMubWV0aG9kTm90QWxsb3dlZCk7XHJcbiAgICBsb2dnZXIuZXJyb3IoYHN0YXR1czogJHsgNDA1IH0sIG1lc3NhZ2U6ICR7IGVycm9yLm1lc3NhZ2UgfWApO1xyXG5cclxuICAgIHJlc3BvbnNlLnN0YXR1cyhlcnJvci5zdGF0dXMpLnNlbmQoeyBzdGF0dXM6IGVycm9yLnN0YXR1cywgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi91c2Vycy5jb250cm9sbGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9ncm91cC5jb250cm9sbGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi91c2Vycy1ncm91cC5jb250cm9sbGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9pbnZhbGlkLmNvbnRyb2xsZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2F1dGhlbnRpY2F0ZS5jb250cm9sbGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9oZWxwZXInO1xyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IsIHsgSHR0cEVycm9yIH0gZnJvbSAnaHR0cC1lcnJvcnMnO1xyXG5cclxuaW1wb3J0IHsgRVJST1JTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi4vbWlkZGxld2FyZXMnO1xyXG5cclxuY29uc3Qgbm90QWxsb3dlZCA9IChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgIGxldCBlcnJvcjogSHR0cEVycm9yID0gY3JlYXRlRXJyb3IoNDA0LCBFUlJPUlMucm91dE5vdEV4aXN0KTtcclxuXHJcbiAgICBsb2dnZXIuZXJyb3IoYHN0YXR1czogJHsgNDA0IH0sIG1lc3NhZ2U6ICR7IGVycm9yLm1lc3NhZ2UgfWApO1xyXG4gICAgcmVzcG9uc2Uuc3RhdHVzKGVycm9yLnN0YXR1cykuc2VuZCh7IHN0YXR1czogZXJyb3Iuc3RhdHVzLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGludmFsaWRDb250cm9sbGVyID0geyBub3RBbGxvd2VkIH07XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyB1c2Vyc0dyb3VwU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgcmVxdWVzdEhlbHBlciB9IGZyb20gJy4vaGVscGVyJztcclxuXHJcbmNvbnN0IGFkZFVzZXJzVG9Hcm91cCA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJzR3JvdXBTZXJ2aWNlLmFkZFVzZXJzVG9Hcm91cChyZXF1ZXN0LnBhcmFtcy5ncm91cF9pZCwgcmVxdWVzdC5ib2R5LnVzZXJJZHMpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlcnNHcm91cENvbnRyb2xsZXIgPSB7IGFkZFVzZXJzVG9Hcm91cCB9O1xyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgdXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IHJlcXVlc3RIZWxwZXIgfSBmcm9tICcuL2hlbHBlcic7XHJcblxyXG5jb25zdCBnZXRVc2VycyA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJTZXJ2aWNlLmdldEFsbFVzZXJzKHJlcXVlc3QucXVlcnkpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCBnZXRVc2VyQnlJZCA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJTZXJ2aWNlLmdldFVzZXJCeUlkKHJlcXVlc3QucGFyYW1zLnVzZXJfaWQpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCBhZGRVc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gdXNlclNlcnZpY2UuYWRkVXNlcihyZXF1ZXN0LmJvZHkpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gdXNlclNlcnZpY2UudXBkYXRlVXNlcihyZXF1ZXN0LnBhcmFtcy51c2VyX2lkLCByZXF1ZXN0LmJvZHkpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gdXNlclNlcnZpY2UuZGVsZXRlVXNlcihyZXF1ZXN0LnBhcmFtcy51c2VyX2lkKSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJzQ29udHJvbGxlciA9IHtcclxuICAgIGdldFVzZXJzLFxyXG4gICAgZGVsZXRlVXNlcixcclxuICAgIHVwZGF0ZVVzZXIsXHJcbiAgICBnZXRVc2VyQnlJZCxcclxuICAgIGFkZFVzZXJcclxufTtcclxuIiwiaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XHJcblxyXG5pbXBvcnQgeyBHcm91cCwgVXNlciwgVXNlcnNHcm91cCB9IGZyb20gJy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcbmltcG9ydCB7IFVzZXIgYXMgVXNlck1vZGVsLCBHcm91cCBhcyBHcm91cE1vZGVsLCBVc2VyR3JvdXAgYXMgVXNlckdyb3VwTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGFCYXNlUmVzdG9yaW5nID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgVXNlck1vZGVsLmJ1bGtDcmVhdGUodXNlcnMpO1xyXG4gICAgYXdhaXQgR3JvdXBNb2RlbC5idWxrQ3JlYXRlKGdyb3Vwcyk7XHJcbiAgICBhd2FpdCBVc2VyR3JvdXBNb2RlbC5idWxrQ3JlYXRlKHVzZXJHcm91cHMpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJzOiBVc2VyW10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogJ2FuYWtpbicsXHJcbiAgICAgICAgbG9naW46ICdBbmFraW5Ta3l3YWxrZXInLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnYW5ha2lucGFzcycsXHJcbiAgICAgICAgYWdlOiAzMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiAnbWFjZVdpbmR1JyxcclxuICAgICAgICBsb2dpbjogJ01hY2VXaW5kdScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdtYWNlcGFzcycsXHJcbiAgICAgICAgYWdlOiA3MlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiAnbHVrZVNreXdhbGtlcicsXHJcbiAgICAgICAgbG9naW46ICdMdWtlU2t5d2Fsa2VyJyxcclxuICAgICAgICBwYXNzd29yZDogJ2x1a2VwYXNzJyxcclxuICAgICAgICBhZ2U6IDIzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6ICdjM3AwJyxcclxuICAgICAgICBsb2dpbjogJ0MtM1BPJyxcclxuICAgICAgICBwYXNzd29yZDogJ2MzcDBwYXNzJyxcclxuICAgICAgICBhZ2U6IDMyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6ICdkYXJ0aE1hdWwnLFxyXG4gICAgICAgIGxvZ2luOiAnRGFydGhNYXVsJyxcclxuICAgICAgICBwYXNzd29yZDogJ2RhcnRocGFzcycsXHJcbiAgICAgICAgYWdlOiA0NFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogJ1F1aUdvbkppbm4nLFxyXG4gICAgICAgIHBhc3N3b3JkOiAncXVpcGFzcycsXHJcbiAgICAgICAgYWdlOiA4MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogJ09iaVdhbktlbm9iaScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdvYmlwYXNzJyxcclxuICAgICAgICBhZ2U6IDQ3XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6ICdwYWxwYXRpbmUnLFxyXG4gICAgICAgIGxvZ2luOiAnUGFscGF0aW5lJyxcclxuICAgICAgICBwYXNzd29yZDogJ3BhbHBhdGluZXBhc3MnLFxyXG4gICAgICAgIGFnZTogODJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdZb2RhJyxcclxuICAgICAgICBwYXNzd29yZDogJ3lvZGFwYXNzJyxcclxuICAgICAgICBhZ2U6IDEzMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogJ1Nub2tlJyxcclxuICAgICAgICBwYXNzd29yZDogJ3Nub2tlcGFzcycsXHJcbiAgICAgICAgYWdlOiA1M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogJ0JvYmFGZXR0JyxcclxuICAgICAgICBwYXNzd29yZDogJ2JvYmFwYXNzJyxcclxuICAgICAgICBhZ2U6IDM2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiAnQ2hld2JhY2NhJyxcclxuICAgICAgICBwYXNzd29yZDogJ2NoZXdiYWNjYXBhc3MnLFxyXG4gICAgICAgIGFnZTogMTMwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiAnSGFuU29sbycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdoYW5wYXNzJyxcclxuICAgICAgICBhZ2U6IDY2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiAnS3lsb1JlbicsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdreWxvcGFzcycsXHJcbiAgICAgICAgYWdlOiAzMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogJ0xlaWFPcmdhbmEnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnbGVpYXBhc3MnLFxyXG4gICAgICAgIGFnZTogNTNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdQYWRtZUFtaWRhbGEnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAncGFkbWVwYXNzJyxcclxuICAgICAgICBhZ2U6IDI3XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiAnQ291bnREb29rdScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdkb2tvb3Bhc3MnLFxyXG4gICAgICAgIGFnZTogMTAyXHJcbiAgICB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgZ3JvdXBzOiBHcm91cFtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIGdyb3VwX2lkOiAnbGlnaHRfc2lkZScsXHJcbiAgICAgICAgbmFtZTogJ2xpZ2h0X3NpZGUnLFxyXG4gICAgICAgIHBlcm1pc3Npb25zOiBbICdXUklURScsICdERUxFVEUnIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZ3JvdXBfaWQ6ICdkYXJrX3NpZGUnLFxyXG4gICAgICAgIG5hbWU6ICdkYXJrX3NpZGUnLFxyXG4gICAgICAgIHBlcm1pc3Npb25zOiBbICdXUklURScsICdSRUFEJyBdXHJcbiAgICB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckdyb3VwczogVXNlcnNHcm91cFtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIGdyb3VwX2lkOiAnbGlnaHRfc2lkZScsXHJcbiAgICAgICAgdXNlcl9pZDogJ2FuYWtpbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZ3JvdXBfaWQ6ICdkYXJrX3NpZGUnLFxyXG4gICAgICAgIHVzZXJfaWQ6ICdwYWxwYXRpbmUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGdyb3VwX2lkOiAnbGlnaHRfc2lkZScsXHJcbiAgICAgICAgdXNlcl9pZDogJ21hY2VXaW5kdSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZ3JvdXBfaWQ6ICdsaWdodF9zaWRlJyxcclxuICAgICAgICB1c2VyX2lkOiAnbHVrZVNreXdhbGtlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZ3JvdXBfaWQ6ICdkYXJrX3NpZGUnLFxyXG4gICAgICAgIHVzZXJfaWQ6ICdhbmFraW4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGdyb3VwX2lkOiAnZGFya19zaWRlJyxcclxuICAgICAgICB1c2VyX2lkOiAnZGFydGhNYXVsJ1xyXG4gICAgfVxyXG5dO1xyXG4iLCJpbXBvcnQgY3JlYXRlRXJyb3IgZnJvbSAnaHR0cC1lcnJvcnMnO1xyXG5pbXBvcnQgeyBPcCB9IGZyb20gJ3NlcXVlbGl6ZSc7XHJcblxyXG5pbXBvcnQgeyBFUlJPUlMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBVc2VyVG9SZXNwb25zZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5cclxuY29uc3QgYXV0aGVudGljYXRlID0gYXN5bmMgKGxvZ2luOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXJUb1Jlc3BvbnNlPiA9PiB7XHJcbiAgICBjb25zdCB1c2VyOiBVc2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgd2hlcmU6IHsgWyBPcC5hbmQgXTogeyBsb2dpbjogbG9naW4sIHBhc3N3b3JkOiBwYXNzd29yZCB9IH0gfSk7XHJcblxyXG4gICAgaWYgKCAhdXNlciApIHRocm93IGNyZWF0ZUVycm9yKDQwMywgeyBtZXNzYWdlOiBgJHsgRVJST1JTLmJhZExvZ2luIH1gIH0pO1xyXG5cclxuICAgIHJldHVybiB1c2VyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0ZURBTCA9IHsgYXV0aGVudGljYXRlIH07XHJcbiIsImltcG9ydCBjcmVhdGVFcnJvciBmcm9tICdodHRwLWVycm9ycyc7XHJcbmltcG9ydCB7IE9wLCBXaGVyZU9wdGlvbnMgfSBmcm9tICdzZXF1ZWxpemUnO1xyXG5cclxuaW1wb3J0IHsgRVJST1JTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgR3JvdXAgYXMgR3JvdXBUb0RCLCBHcm91cFRvVXBkYXRlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy90eXBpbmdzJztcclxuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBncm91cHNUb1Jlc3BvbnNlLCBncm91cFRvUmVzcG9uc2UsIH0gZnJvbSAnLi4vLi4vbWlkZGxld2FyZXMnO1xyXG5pbXBvcnQgeyBRdWVyeVBhcmFtcyB9IGZyb20gJy4uL3R5cGluZ3MnO1xyXG5cclxuY29uc3QgRU5USVRZX05BTUU6IHN0cmluZyA9ICdncm91cCc7XHJcbmNvbnN0IERFRkFVTFRfT0ZGU0VUOiBudW1iZXIgPSAwO1xyXG5jb25zdCBERUZBVUxUX0xJTUlUOiBudW1iZXIgPSAxMDtcclxuXHJcbmNvbnN0IGdldEFsbCA9IGFzeW5jIChwYXJhbXM6IFF1ZXJ5UGFyYW1zKTogUHJvbWlzZTxHcm91cFRvREJbXT4gPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCBvZmZzZXRQYXJhbSwgbGltaXRQYXJhbSB9ID0gcGFyYW1zO1xyXG4gICAgY29uc3Qgb2Zmc2V0OiBudW1iZXIgPSBvZmZzZXRQYXJhbSAmJiBwYXJzZUludChvZmZzZXRQYXJhbSwgMTApIHx8IERFRkFVTFRfT0ZGU0VUO1xyXG4gICAgY29uc3QgbGltaXQ6IG51bWJlciA9IGxpbWl0UGFyYW0gJiYgcGFyc2VJbnQobGltaXRQYXJhbSwgMTApICsgb2Zmc2V0IHx8IERFRkFVTFRfTElNSVQ7XHJcbiAgICBjb25zdCB3aGVyZTogV2hlcmVPcHRpb25zID0gbmFtZSA/IHsgbmFtZTogeyBbIE9wLmlMaWtlIF06IGAlJHsgbmFtZSB9JWAgfSB9IDoge307XHJcbiAgICBjb25zdCBncm91cHMgPSBhd2FpdCBHcm91cC5maW5kQWxsKHsgb2Zmc2V0OiBvZmZzZXQsIGxpbWl0OiBsaW1pdCwgd2hlcmUgfSk7XHJcblxyXG4gICAgcmV0dXJuIGdyb3Vwc1RvUmVzcG9uc2UoZ3JvdXBzKTtcclxufTtcclxuXHJcbmNvbnN0IGdldEdyb3VwID0gYXN5bmMgKGdyb3VwX2lkOiBzdHJpbmcpOiBQcm9taXNlPEdyb3VwVG9EQj4gPT4ge1xyXG4gICAgY29uc3QgZ3JvdXAgPSBhd2FpdCBHcm91cC5maW5kT25lKHsgd2hlcmU6IHsgZ3JvdXBfaWQ6IGdyb3VwX2lkIH0gfSk7XHJcblxyXG4gICAgaWYgKCAhZ3JvdXAgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDQsIHsgbWVzc2FnZTogYCR7IEVOVElUWV9OQU1FIH0gJHsgRVJST1JTLm5vdEZvdW5kIH1gIH0pO1xyXG5cclxuICAgIHJldHVybiBncm91cFRvUmVzcG9uc2UoZ3JvdXApO1xyXG59O1xyXG5cclxuY29uc3QgaW5zZXJ0R3JvdXAgPSBhc3luYyAoZ3JvdXBNb2RlbDogR3JvdXApOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnN0IGdyb3VwID0gYXdhaXQgR3JvdXAuZmluZE9uZSh7IHdoZXJlOiB7IG5hbWU6IGdyb3VwTW9kZWwubmFtZSB9IH0pO1xyXG5cclxuICAgIGlmICggZ3JvdXAgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDAsIHsgbWVzc2FnZTogYCR7IEVOVElUWV9OQU1FIH0gJHsgRVJST1JTLmV4aXN0IH1gIH0pO1xyXG5cclxuICAgIGdyb3VwTW9kZWwuc2F2ZSgpO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlR3JvdXAgPSBhc3luYyAoZ3JvdXBfaWQ6IHN0cmluZywgZ3JvdXBUb1VwZGF0ZTogR3JvdXBUb1VwZGF0ZSk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc3QgZ3JvdXAgPSBhd2FpdCBHcm91cC5maW5kT25lKHsgd2hlcmU6IHsgZ3JvdXBfaWQ6IGdyb3VwX2lkIH0gfSk7XHJcblxyXG4gICAgaWYgKCAhZ3JvdXAgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDQsIHsgbWVzc2FnZTogYCR7IEVOVElUWV9OQU1FIH0gJHsgRVJST1JTLm5vdEZvdW5kIH1gIH0pO1xyXG5cclxuICAgIGdyb3VwLm5hbWUgPSBncm91cFRvVXBkYXRlLm5hbWU7XHJcbiAgICBncm91cC5wZXJtaXNzaW9ucyA9IGdyb3VwVG9VcGRhdGUucGVybWlzc2lvbnM7XHJcblxyXG4gICAgZ3JvdXAuc2F2ZSgpO1xyXG59O1xyXG5cclxuY29uc3QgZGVsZXRlR3JvdXAgPSBhc3luYyAoZ3JvdXBfaWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc3QgZ3JvdXAgPSBhd2FpdCBHcm91cC5maW5kT25lKHsgd2hlcmU6IHsgZ3JvdXBfaWQ6IGdyb3VwX2lkIH0gfSk7XHJcblxyXG4gICAgaWYgKCAhZ3JvdXAgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDQsIHsgbWVzc2FnZTogYCR7IEVOVElUWV9OQU1FIH0gJHsgRVJST1JTLm5vdEZvdW5kIH1gIH0pO1xyXG5cclxuICAgIGdyb3VwLmRlc3Ryb3koKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cERBTCA9IHtcclxuICAgIGdldEFsbCxcclxuICAgIGdldEdyb3VwLFxyXG4gICAgaW5zZXJ0R3JvdXAsXHJcbiAgICB1cGRhdGVHcm91cCxcclxuICAgIGRlbGV0ZUdyb3VwXHJcbn07XHJcbiIsImltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSAnc2VxdWVsaXplJztcclxuXHJcbmltcG9ydCB7IFVzZXJzR3JvdXAgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3R5cGluZ3MnO1xyXG5pbXBvcnQgeyBHcm91cCwgVXNlckdyb3VwIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgc2VxdWVsaXplIGFzIGRiSW5zdGFuY2UgfSBmcm9tICcuLi9kYic7XHJcblxyXG5jb25zdCBhZGRVc2Vyc1RvR3JvdXAgPSAoZ3JvdXBfaWQ6IHN0cmluZywgdXNlcl9pZHM6IHN0cmluZ1tdKTogUHJvbWlzZTx2b2lkPiA9PlxyXG4gICAgZGJJbnN0YW5jZS50cmFuc2FjdGlvbihcclxuICAgICAgICBhc3luYyAodHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IEdyb3VwLmZpbmRPbmUoeyB3aGVyZTogeyBncm91cF9pZDogZ3JvdXBfaWQgfSwgdHJhbnNhY3Rpb24gfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBncm91cHM6IFVzZXJzR3JvdXBbXSA9XHJcbiAgICAgICAgICAgICAgICB1c2VyX2lkcy5tYXAoKHVzZXJJZDogc3RyaW5nKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwX2lkOiBncm91cF9pZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VySWRcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IFVzZXJHcm91cC5idWxrQ3JlYXRlKGdyb3VwcywgeyB0cmFuc2FjdGlvbiB9KTtcclxuICAgICAgICAgICAgLy8gYXdhaXQgZ3JvdXAuYWRkVXNlcnModXNlcl9pZHMsIHsgdHJhbnNhY3Rpb24gfSk7IGp1c3QgYW4gZXhhbXBsZSBvZiB1c2luZyBtZXRob2QgZGVmaW5lZCBpbiBtb2RlbFxyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlcnNHcm91cERBTCA9IHsgYWRkVXNlcnNUb0dyb3VwIH07XHJcbiIsImltcG9ydCB7IE9wLCBXaGVyZU9wdGlvbnMgfSBmcm9tICdzZXF1ZWxpemUnO1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IgZnJvbSAnaHR0cC1lcnJvcnMnO1xyXG5cclxuaW1wb3J0IHsgRVJST1JTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgVXNlclRvUmVzcG9uc2UsIFVzZXJUb1VwZGF0ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyB1c2Vyc1RvUmVzcG9uc2UsIHVzZXJUb1Jlc3BvbnNlIH0gZnJvbSAnLi4vLi4vbWlkZGxld2FyZXMnO1xyXG5pbXBvcnQgeyBRdWVyeVBhcmFtcyB9IGZyb20gJy4uL3R5cGluZ3MnO1xyXG5cclxuY29uc3QgRU5USVRZX05BTUU6IHN0cmluZyA9ICd1c2VyJztcclxuY29uc3QgREVGQVVMVF9PRkZTRVQ6IG51bWJlciA9IDA7XHJcbmNvbnN0IERFRkFVTFRfTElNSVQ6IG51bWJlciA9IDEwO1xyXG5cclxuY29uc3QgZ2V0QWxsID0gYXN5bmMgKHBhcmFtczogUXVlcnlQYXJhbXMpOiBQcm9taXNlPFVzZXJUb1Jlc3BvbnNlW10+ID0+IHtcclxuICAgIGNvbnN0IHsgbG9naW4sIG9mZnNldFBhcmFtLCBsaW1pdFBhcmFtIH0gPSBwYXJhbXM7XHJcbiAgICBjb25zdCBvZmZzZXQ6IG51bWJlciA9IG9mZnNldFBhcmFtICYmIHBhcnNlSW50KG9mZnNldFBhcmFtLCAxMCkgfHwgREVGQVVMVF9PRkZTRVQ7XHJcbiAgICBjb25zdCBsaW1pdDogbnVtYmVyID0gbGltaXRQYXJhbSAmJiBwYXJzZUludChsaW1pdFBhcmFtLCAxMCkgKyBvZmZzZXQgfHwgREVGQVVMVF9MSU1JVDtcclxuICAgIGNvbnN0IHdoZXJlOiBXaGVyZU9wdGlvbnMgPSBsb2dpbiA/IHsgbG9naW46IHsgWyBPcC5pTGlrZSBdOiBgJSR7IGxvZ2luIH0lYCB9IH0gOiB7fTtcclxuICAgIGNvbnN0IHVzZXJzOiBVc2VyW10gPSBhd2FpdCBVc2VyLmZpbmRBbGwoeyBvZmZzZXQ6IG9mZnNldCwgbGltaXQ6IGxpbWl0LCB3aGVyZSB9KTtcclxuXHJcbiAgICByZXR1cm4gdXNlcnNUb1Jlc3BvbnNlKHVzZXJzKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFVzZXIgPSBhc3luYyAodXNlcl9pZDogc3RyaW5nKTogUHJvbWlzZTxVc2VyVG9SZXNwb25zZT4gPT4ge1xyXG4gICAgY29uc3QgdXNlcjogVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IHdoZXJlOiB7IHVzZXJfaWQ6IHVzZXJfaWQgfSB9KTtcclxuXHJcbiAgICBpZiAoICF1c2VyICkgdGhyb3cgY3JlYXRlRXJyb3IoNDA0LCB7IG1lc3NhZ2U6IGAkeyBFTlRJVFlfTkFNRSB9ICR7IEVSUk9SUy5ub3RGb3VuZCB9YCB9KTtcclxuXHJcbiAgICByZXR1cm4gdXNlclRvUmVzcG9uc2UodXNlcik7XHJcbn07XHJcblxyXG5jb25zdCBpbnNlcnRVc2VyID0gYXN5bmMgKHVzZXJNb2RlbDogVXNlcik6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc3QgdXNlcjogVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IHdoZXJlOiB7IGxvZ2luOiB1c2VyTW9kZWwubG9naW4gfSB9KTtcclxuXHJcbiAgICBpZiAoIHVzZXIgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDAsIHsgbWVzc2FnZTogYCR7IEVOVElUWV9OQU1FIH0gJHsgRVJST1JTLmV4aXN0IH1gIH0pO1xyXG5cclxuICAgIHVzZXJNb2RlbC5zYXZlKCk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKHVzZXJfaWQ6IHN0cmluZywgdXNlclRvVXBkYXRlOiBVc2VyVG9VcGRhdGUpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnN0IHVzZXI6IFVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyB3aGVyZTogeyB1c2VyX2lkOiB1c2VyX2lkIH0gfSk7XHJcblxyXG4gICAgaWYgKCAhdXNlciApIHRocm93IGNyZWF0ZUVycm9yKDQwNCwgeyBtZXNzYWdlOiBgJHsgRU5USVRZX05BTUUgfSAkeyBFUlJPUlMubm90Rm91bmQgfWAgfSk7XHJcblxyXG4gICAgdXNlci5sb2dpbiA9IHVzZXJUb1VwZGF0ZS5sb2dpbjtcclxuICAgIHVzZXIuYWdlID0gdXNlclRvVXBkYXRlLmFnZTtcclxuXHJcbiAgICB1c2VyLnNhdmUoKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAodXNlcl9pZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBjb25zdCB1c2VyOiBVc2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgd2hlcmU6IHsgdXNlcl9pZDogdXNlcl9pZCB9IH0pO1xyXG5cclxuICAgIGlmICggIXVzZXIgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDQsIHsgbWVzc2FnZTogYCR7IEVOVElUWV9OQU1FIH0gJHsgRVJST1JTLm5vdEZvdW5kIH1gIH0pO1xyXG5cclxuICAgIHVzZXIuZGVzdHJveSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJEQUwgPSB7XHJcbiAgICBnZXRBbGwsXHJcbiAgICBnZXRVc2VyLFxyXG4gICAgaW5zZXJ0VXNlcixcclxuICAgIHVwZGF0ZVVzZXIsXHJcbiAgICBkZWxldGVVc2VyXHJcbn07XHJcbiIsImltcG9ydCB7IFNlcXVlbGl6ZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcclxuXHJcbmltcG9ydCB7IGRiQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZyc7XHJcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uL21pZGRsZXdhcmVzJztcclxuaW1wb3J0IHsgZGF0YUJhc2VSZXN0b3JpbmcgfSBmcm9tICcuL2JhY2t1cCc7XHJcbmltcG9ydCB7IExPR19NRVNTQUdFUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFVzZXIsIEdyb3VwLCBVc2VyR3JvdXAgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuY29uc3QgbW9kZWxzID0gWyBVc2VyLCBHcm91cCwgVXNlckdyb3VwIF07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShcclxuICAgIGRiQ29uZmlnLmRhdGFiYXNlLFxyXG4gICAgZGJDb25maWcudXNlcm5hbWUsXHJcbiAgICBkYkNvbmZpZy5wYXNzd29yZCxcclxuICAgIHtcclxuICAgICAgICBkZWZpbmU6IHsgdGltZXN0YW1wczogdHJ1ZSB9LFxyXG4gICAgICAgIHBvcnQ6IGRiQ29uZmlnLnBvcnQsXHJcbiAgICAgICAgZGlhbGVjdDogZGJDb25maWcuZGlhbGVjdCxcclxuICAgICAgICBob3N0OiBkYkNvbmZpZy5ob3N0LFxyXG4gICAgICAgIGRpYWxlY3RPcHRpb25zOiB7IHNzbDogdHJ1ZSB9LFxyXG4gICAgICAgIHBvb2w6IGRiQ29uZmlnLnBvb2wsXHJcbiAgICAgICAgbW9kZWxzOiBbIC4uLm1vZGVscyBdXHJcbiAgICB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgZGJDb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgc2VxdWVsaXplLnN5bmMoeyBmb3JjZTogdHJ1ZSB9KTtcclxuICAgIGxvZ2dlci5pbmZvKExPR19NRVNTQUdFUy5jb25uZWN0aW9uU3VjY2Vzcyk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxvZ2dlci5pbmZvKExPR19NRVNTQUdFUy5kYXRhQmFzZVJlc3RvcmluZ0luUHJvY2Vzcyk7XHJcbiAgICAgICAgYXdhaXQgZGF0YUJhc2VSZXN0b3JpbmcoKTtcclxuICAgICAgICBsb2dnZXIuaW5mbyhMT0dfTUVTU0FHRVMuZGF0YUJhc2VSZXN0b3JpbmdDb21wbGV0ZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGxvZ2dlci5lcnJvcih7IG5hbWU6IGVycm9yLm5hbWUsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsIHN0YWNrOiBlcnJvci5zdGFjayB9KTtcclxuICAgIH1cclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9kYWwvdXNlci5EQUwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RhbC9ncm91cC5EQUwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RhbC91c2VyLWdyb3VwLkRBTCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZGFsL2F1dGhlbnRpY2F0ZURBTCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZGInO1xyXG5leHBvcnQgKiBmcm9tICcuL3R5cGluZ3MnO1xyXG4iLCJleHBvcnQgY29uc3QgTE9HX0RJUk5BTUU6IHN0cmluZyA9ICdsb2dzJztcclxuXHJcbmV4cG9ydCBjb25zdCBIQU5ETEU6IHsgWyBrZXk6IHN0cmluZyBdOiB7IG1lc3NhZ2U6IHN0cmluZzsgfSB9ID0ge1xyXG4gICAgWyAndW5oYW5kbGVkUmVqZWN0aW9uJyBdOiB7XHJcbiAgICAgICAgbWVzc2FnZTogJ1VuaGFuZGxlZCBSZWplY3Rpb24gYXQnXHJcbiAgICB9LFxyXG4gICAgWyAndW5jYXVnaHRFeGNlcHRpb24nIF06IHtcclxuICAgICAgICBtZXNzYWdlOiAnVW5jYXVnaHQgRXhjZXB0aW9uIHRocm93bidcclxuICAgIH1cclxufTtcclxuIiwiaW1wb3J0IHsgTmV4dEZ1bmN0aW9uLCBSZXNwb25zZSwgUmVxdWVzdCB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcblxyXG5pbXBvcnQgeyBFUlJPUlMsIEpXVF9UT0tFTiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG5pbnRlcmZhY2UgRGVjb2RlZFRva2VuIHtcclxuICAgIHVzZXJfaWQ6IHN0cmluZztcclxuICAgIGlzQWN0aXZlOiBib29sZWFuO1xyXG4gICAgaWF0OiBudW1iZXI7XHJcbiAgICBleHA6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrVG9rZW4gPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcclxuICAgIGxldCB0b2tlbjogc3RyaW5nID0gcmVxdWVzdC5oZWFkZXJzWyAneC1hY2Nlc3MtdG9rZW4nIF0gYXMgc3RyaW5nO1xyXG5cclxuICAgIGlmICggdG9rZW4gKSB7XHJcbiAgICAgICAgand0LnZlcmlmeSh0b2tlbiwgSldUX1RPS0VOLCAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKCBlcnIgKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5zdGF0dXMoNDAxKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IEVSUk9SUy5iYWRUb2tlbiB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmxvY2Fscy51c2VyX2lkID0gZGVjb2RlVG9rZW4odG9rZW4pLnVzZXJfaWQ7XHJcbiAgICAgICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzKDQwMykuc2VuZCh7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBFUlJPUlMubm9Ub2tlbiB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGRlY29kZVRva2VuID0gKHRva2VuOiBzdHJpbmcpOiBEZWNvZGVkVG9rZW4gPT4gPERlY29kZWRUb2tlbj5qd3QuZGVjb2RlKHRva2VuKTtcclxuIiwiaW1wb3J0IHsgTmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGh0dHBMb2dnZXIgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IGBwYXJhbXM6ICR7IEpTT04uc3RyaW5naWZ5KHJlcXVlc3QucGFyYW1zKSB9YDtcclxuICAgIGNvbnN0IGJvZHkgPSBgYm9keTogJHsgSlNPTi5zdHJpbmdpZnkocmVxdWVzdC5ib2R5KSB9YDtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYHF1ZXJ5OiAkeyBKU09OLnN0cmluZ2lmeShyZXF1ZXN0LnF1ZXJ5KSB9YDtcclxuICAgIGNvbnN0IHVybCA9IGB1cmw6ICR7IHJlcXVlc3QudXJsIH1gO1xyXG4gICAgY29uc3QgbWV0aG9kID0gYG1ldGhvZDogJHsgcmVxdWVzdC5tZXRob2QgfWA7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdGFydDogbnVtYmVyID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgbGV0IGV4ZWN1dGlvblRpbWU6IHN0cmluZztcclxuICAgICAgICByZXF1ZXN0Lm9uKCdjbG9zZScsICgpID0+IHtcclxuICAgICAgICAgICAgZXhlY3V0aW9uVGltZSA9IGBleGVjdXRpb25UaW1lOiAkeyBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0IH0gbWxzYDtcclxuICAgICAgICAgICAgbG9nZ2VyLmluZm8oYCR7IG1ldGhvZCB9ICR7IHVybCB9ICR7IHBhcmFtcyB9ICR7IHF1ZXJ5IH0gJHsgYm9keSB9ICR7IGV4ZWN1dGlvblRpbWUgfWApXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikgeyBsb2dnZXIuZXJyb3IoZXJyb3IpIH1cclxuXHJcbiAgICBuZXh0KCk7XHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vaHR0cC1sb2dnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL3ZhbGlkYXRpb24uc2VydmlzZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcGFyc2Vycyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbG9nZ2VyJztcclxuZXhwb3J0ICogZnJvbScuL3Byb2Nlc3MudW5oYW5kbGVkRXJyb3InO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVMb2dnZXIsIHRyYW5zcG9ydHMsIGZvcm1hdCB9IGZyb20gJ3dpbnN0b24nXHJcbmltcG9ydCB7IFRyYW5zZm9ybWFibGVJbmZvIH0gZnJvbSAnbG9nZm9ybSc7XHJcbmltcG9ydCB7IEZpbGVUcmFuc3BvcnRJbnN0YW5jZSB9IGZyb20gJ3dpbnN0b24vbGliL3dpbnN0b24vdHJhbnNwb3J0cyc7XHJcblxyXG5pbXBvcnQgeyBMT0dfRElSTkFNRSB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IExPR19GSUxFX01BWF9TSVpFOiBudW1iZXIgPSA1MDAwO1xyXG5cclxuY29uc3QgY3JlYXRlRmlsZVRyYW5zcG9ydCA9IChmaWxlbmFtZTogc3RyaW5nLCBsZXZlbDogc3RyaW5nKTogRmlsZVRyYW5zcG9ydEluc3RhbmNlID0+XHJcbiAgICBuZXcgdHJhbnNwb3J0cy5GaWxlKHsgZGlybmFtZTogTE9HX0RJUk5BTUUsIGZpbGVuYW1lLCBsZXZlbCwgbWF4c2l6ZTogTE9HX0ZJTEVfTUFYX1NJWkUgfSk7XHJcblxyXG5jb25zdCB7IGNvbG9yaXplLCBjb21iaW5lLCBwcmludGYsIHRpbWVzdGFtcCB9ID0gZm9ybWF0O1xyXG5jb25zdCBmb3JtYXR0ZXIgPSBwcmludGYoKHsgbGV2ZWwsIG1lc3NhZ2UsIHRpbWVzdGFtcCB9OiBUcmFuc2Zvcm1hYmxlSW5mbyk6IHN0cmluZyA9PiBgJHsgdGltZXN0YW1wIH0gWyR7IGxldmVsIH1dOiAkeyBtZXNzYWdlIH1gKTtcclxuXHJcbmNvbnN0IGNvbnNvbGVUcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0cy5Db25zb2xlKHsgZm9ybWF0OiBjb21iaW5lKGNvbG9yaXplKCksIHRpbWVzdGFtcCgpLCBmb3JtYXR0ZXIpIH0pO1xyXG5jb25zdCBlcnJvclRyYW5zcG9ydCA9IGNyZWF0ZUZpbGVUcmFuc3BvcnQoJ2Vycm9ycy5sb2cnLCAnZXJyb3InKTtcclxuY29uc3Qgd2FyblRyYW5zcG9ydCA9IGNyZWF0ZUZpbGVUcmFuc3BvcnQoJ3dhcm5pbmdzLmxvZycsICd3YXJuJyk7XHJcbmNvbnN0IGluZm9UcmFuc3BvcnQgPSBjcmVhdGVGaWxlVHJhbnNwb3J0KCdpbmZvLmxvZycsICdpbmZvJyk7XHJcblxyXG5jb25zdCBsb2dnZXJUcmFuc3BvcnRzID0gWyBjb25zb2xlVHJhbnNwb3J0LCBlcnJvclRyYW5zcG9ydCwgaW5mb1RyYW5zcG9ydCwgd2FyblRyYW5zcG9ydCBdO1xyXG5cclxuLy8gTG9nZ2VyIGluc3RhbmNlXHJcbmV4cG9ydCBjb25zdCBsb2dnZXIgPSBjcmVhdGVMb2dnZXIoe1xyXG4gICAgZXhpdE9uRXJyb3I6IGZhbHNlLFxyXG4gICAgZm9ybWF0OiBjb21iaW5lKHRpbWVzdGFtcCgpLCBmb3JtYXR0ZXIpLFxyXG4gICAgdHJhbnNwb3J0czogbG9nZ2VyVHJhbnNwb3J0c1xyXG59KTtcclxuIiwiaW1wb3J0IHsgR3JvdXAsIEdyb3VwVG9EYiwgVXNlciwgVXNlclRvQWRkLCBVc2VyVG9SZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcbmltcG9ydCB7IFVzZXIgYXMgVXNlck1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBHcm91cCBhcyBHcm91cE1vZGVsIH0gZnJvbSAnLi8uLi9tb2RlbHMvZ3JvdXAubW9kZWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyb3VwVG9SZXNwb25zZSA9IChncm91cDogR3JvdXApOiBHcm91cCA9PiAoe1xyXG4gICAgZ3JvdXBfaWQ6IGdyb3VwLmdyb3VwX2lkLFxyXG4gICAgbmFtZTogZ3JvdXAubmFtZSxcclxuICAgIHBlcm1pc3Npb25zOiBncm91cC5wZXJtaXNzaW9uc1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cHNUb1Jlc3BvbnNlID0gKGdyb3VwczogR3JvdXBbXSk6IEdyb3VwW10gPT4gZ3JvdXBzLm1hcChncm91cCA9PiBncm91cFRvUmVzcG9uc2UoZ3JvdXApKTtcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cFRvRGIgPSAoZ3JvdXA6IEdyb3VwVG9EYiwgZ3JvdXBfaWQ6IHN0cmluZykgPT5cclxuICAgIG5ldyBHcm91cE1vZGVsKHtcclxuICAgICAgICBncm91cF9pZDogZ3JvdXBfaWQsXHJcbiAgICAgICAgbmFtZTogZ3JvdXAubmFtZSxcclxuICAgICAgICBwZXJtaXNzaW9uczogZ3JvdXAucGVybWlzc2lvbnNcclxuICAgIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJUb1Jlc3BvbnNlID0gKHVzZXI6IFVzZXIpOiBVc2VyVG9SZXNwb25zZSA9PiAoe1xyXG4gICAgdXNlcl9pZDogdXNlci51c2VyX2lkLFxyXG4gICAgbG9naW46IHVzZXIubG9naW4sXHJcbiAgICBhZ2U6IHVzZXIuYWdlXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJzVG9SZXNwb25zZSA9ICh1c2VyczogVXNlcltdKTogVXNlclRvUmVzcG9uc2VbXSA9PiB1c2Vycy5tYXAodXNlciA9PiB1c2VyVG9SZXNwb25zZSh1c2VyKSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclRvRGIgPSAodXNlcjogVXNlclRvQWRkLCB1c2VyX2lkOiBzdHJpbmcpOiBVc2VyTW9kZWwgPT5cclxuICAgIG5ldyBVc2VyTW9kZWwoe1xyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJfaWQsXHJcbiAgICAgICAgbG9naW46IHVzZXIubG9naW4sXHJcbiAgICAgICAgYWdlOiB1c2VyLmFnZSxcclxuICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgfSk7XHJcbiIsImltcG9ydCB7IEhBTkRMRSB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2Nlc3NVbmhhbmRsZWRFcnJvciA9ICgpID0+IHtcclxuICAgIHByb2Nlc3NcclxuICAgICAgICAub24oJ3VuaGFuZGxlZFJlamVjdGlvbicsIChyZWFzb246IG51bWJlciwgcHJvbWlzZTogUHJvbWlzZTxhbnk+KSA9PiB7XHJcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgJHsgSEFORExFWyAndW5oYW5kbGVkUmVqZWN0aW9uJyBdLm1lc3NhZ2UgfTogJHsgSlNPTi5zdHJpbmdpZnkocHJvbWlzZSkgfSwgcmVhc29uOiAkeyByZWFzb24gfWApO1xyXG4gICAgICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oJ3VuY2F1Z2h0RXhjZXB0aW9uJywgKGVycm9yOiBFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoYCR7IEhBTkRMRVsgJ3VuY2F1Z2h0RXhjZXB0aW9uJyBdLm1lc3NhZ2UgfSAtICR7IGVycm9yIH1gKTtcclxuICAgICAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xyXG4gICAgICAgIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyBKb2kgZnJvbSAnQGhhcGkvam9pJztcclxuaW1wb3J0IHsgY3JlYXRlVmFsaWRhdG9yIH0gZnJvbSAnZXhwcmVzcy1qb2ktdmFsaWRhdGlvbic7XHJcblxyXG5jb25zdCBNSU5fQUdFID0gNDtcclxuY29uc3QgTUFYX0FHRSA9IDEzMDtcclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0b3IgPSBjcmVhdGVWYWxpZGF0b3IoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRVc2VyQm9keVNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgbG9naW46IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgYWdlOiBKb2kubnVtYmVyKCkuZ3JlYXRlcihNSU5fQUdFKS5sZXNzKE1BWF9BR0UpLnJlcXVpcmVkKCksXHJcbiAgICBwYXNzd29yZDogSm9pLnN0cmluZygpLmFscGhhbnVtKCkucmVxdWlyZWQoKVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyQm9keVNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgbG9naW46IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgYWdlOiBKb2kubnVtYmVyKCkuZ3JlYXRlcihNSU5fQUdFKS5sZXNzKE1BWF9BR0UpLnJlcXVpcmVkKClcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlclF1ZXJ5U2NoZW1hID0gSm9pLm9iamVjdCh7XHJcbiAgICB1c2VyX2lkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRHcm91cEJvZHlTY2hlbWEgPSBKb2kub2JqZWN0KHtcclxuICAgIG5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgcGVybWlzc2lvbnM6IEpvaS5hcnJheSgpLml0ZW1zKEpvaS5zdHJpbmcoKSkucmVxdWlyZWQoKVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVHcm91cFF1ZXJ5U2NoZW1hID0gSm9pLm9iamVjdCh7XHJcbiAgICBncm91cF9pZDogSm9pLnN0cmluZygpLnJlcXVpcmVkKClcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlR3JvdXBCb2R5U2NoZW1hID0gSm9pLm9iamVjdCh7XHJcbiAgICBuYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIHBlcm1pc3Npb25zOiBKb2kuYXJyYXkoKS5pdGVtcyhKb2kuc3RyaW5nKCkpLnJlcXVpcmVkKClcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVXNlcnNUb0dyb3VwUXVlcnlTY2hlbWEgPSBKb2kub2JqZWN0KHtcclxuICAgIGdyb3VwX2lkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRVc2Vyc1RvR3JvdXBCb2R5U2NoZW1hID0gSm9pLm9iamVjdCh7XHJcbiAgICB1c2VySWRzOiBKb2kuYXJyYXkoKS5pdGVtcyhKb2kuc3RyaW5nKCkpLnJlcXVpcmVkKClcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHNjaGVtYTogJ25ldycsXHJcbiAgICB0YWJsZXM6IHtcclxuICAgICAgICB1c2VyczogJ3VzZXJzJyxcclxuICAgICAgICBncm91cHM6ICdncm91cHMnLFxyXG4gICAgICAgIHVzZXJHcm91cHM6ICd1c2VyLWdyb3VwcydcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBbGxvd051bGwsIEJlbG9uZ3NUb01hbnksIENvbHVtbiwgRGF0YVR5cGUsIE1vZGVsLCBQcmltYXJ5S2V5LCBUYWJsZSwgVW5pcXVlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCB7IFVzZXJHcm91cCB9IGZyb20gJy4vdXNlci1ncm91cC5tb2RlbCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXIubW9kZWwnO1xyXG5cclxuZXhwb3J0IHR5cGUgUGVybWlzc2lvbnNUeXBlID0gJ1JFQUQnIHwgJ1dSSVRFJyB8ICdERUxFVEUnIHwgJ1NIQVJFJyB8ICdVUExPQURfRklMRVMnO1xyXG5cclxuQFRhYmxlKHtcclxuICAgIHNjaGVtYTogY29uZmlnLnNjaGVtYSxcclxuICAgIHRhYmxlTmFtZTogY29uZmlnLnRhYmxlcy5ncm91cHMsXHJcbiAgICBwYXJhbm9pZDogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIEdyb3VwIGV4dGVuZHMgTW9kZWw8R3JvdXA+IHtcclxuICAgIEBCZWxvbmdzVG9NYW55KCgpID0+IFVzZXIsICgpID0+IFVzZXJHcm91cClcclxuICAgIHVzZXJzOiBVc2VyW107XHJcblxyXG4gICAgLy8gYWRkVXNlcnM6IEJlbG9uZ3NUb01hbnlBZGRBc3NvY2lhdGlvbnNNaXhpbjxVc2VyLCBzdHJpbmc+OyBKdXN0IGFuIGV4YW1wbGUgb2YgYWRkaW5nIG1ldGhvZHMgdG8gbW9kZWxcclxuXHJcbiAgICBAUHJpbWFyeUtleVxyXG4gICAgQFVuaXF1ZSh0cnVlKVxyXG4gICAgQEFsbG93TnVsbChmYWxzZSlcclxuICAgIEBDb2x1bW5cclxuICAgIGdyb3VwX2lkOiBzdHJpbmc7XHJcblxyXG4gICAgQENvbHVtblxyXG4gICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBDb2x1bW4oRGF0YVR5cGUuQVJSQVkoRGF0YVR5cGUuU1RSSU5HKSlcclxuICAgIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9uc1R5cGVbXTtcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL3VzZXIubW9kZWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2dyb3VwLm1vZGVsJztcclxuZXhwb3J0ICogZnJvbSAnLi91c2VyLWdyb3VwLm1vZGVsJztcclxuIiwiaW1wb3J0IHsgQXV0b0luY3JlbWVudCwgQ29sdW1uLCBGb3JlaWduS2V5LCBNb2RlbCwgUHJpbWFyeUtleSwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuL2dyb3VwLm1vZGVsJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlci5tb2RlbCc7XHJcblxyXG5AVGFibGUoe1xyXG4gICAgc2NoZW1hOiBjb25maWcuc2NoZW1hLFxyXG4gICAgdGFibGVOYW1lOiBjb25maWcudGFibGVzLnVzZXJHcm91cHMsXHJcbiAgICBwYXJhbm9pZDogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckdyb3VwIGV4dGVuZHMgTW9kZWw8VXNlckdyb3VwPiB7XHJcbiAgICBAUHJpbWFyeUtleVxyXG4gICAgQEF1dG9JbmNyZW1lbnRcclxuICAgIEBDb2x1bW5cclxuICAgIHVzZXJfZ3JvdXBfaWQ6IG51bWJlcjtcclxuXHJcbiAgICBARm9yZWlnbktleSgoKSA9PiBHcm91cClcclxuICAgIEBDb2x1bW5cclxuICAgIGdyb3VwX2lkOiBzdHJpbmc7XHJcblxyXG4gICAgQEZvcmVpZ25LZXkoKCkgPT4gVXNlcilcclxuICAgIEBDb2x1bW5cclxuICAgIHVzZXJfaWQ6IHN0cmluZztcclxufVxyXG4iLCJpbXBvcnQgeyBDb2x1bW4sIFRhYmxlLCBNb2RlbCwgUHJpbWFyeUtleSwgQWxsb3dOdWxsLCBVbmlxdWUsIEJlbG9uZ3NUb01hbnksIERhdGFUeXBlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi9ncm91cC5tb2RlbCc7XHJcbmltcG9ydCB7IFVzZXJHcm91cCB9IGZyb20gJy4vdXNlci1ncm91cC5tb2RlbCc7XHJcblxyXG5AVGFibGUoe1xyXG4gICAgc2NoZW1hOiBjb25maWcuc2NoZW1hLFxyXG4gICAgdGFibGVOYW1lOiBjb25maWcudGFibGVzLnVzZXJzLFxyXG4gICAgcGFyYW5vaWQ6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBNb2RlbDxVc2VyPiB7XHJcbiAgICBAQmVsb25nc1RvTWFueSgoKSA9PiBHcm91cCwgKCkgPT4gVXNlckdyb3VwKVxyXG4gICAgZ3JvdXBzOiBHcm91cFtdO1xyXG5cclxuICAgIEBQcmltYXJ5S2V5XHJcbiAgICBAQWxsb3dOdWxsKGZhbHNlKVxyXG4gICAgQFVuaXF1ZSh0cnVlKVxyXG4gICAgQENvbHVtbihEYXRhVHlwZS5TVFJJTkcpXHJcbiAgICB1c2VyX2lkOiBzdHJpbmc7XHJcblxyXG4gICAgQEFsbG93TnVsbChmYWxzZSlcclxuICAgIEBVbmlxdWUodHJ1ZSlcclxuICAgIEBDb2x1bW5cclxuICAgIGxvZ2luOiBzdHJpbmc7XHJcblxyXG4gICAgQEFsbG93TnVsbChmYWxzZSlcclxuICAgIEBDb2x1bW5cclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcblxyXG4gICAgQEFsbG93TnVsbChmYWxzZSlcclxuICAgIEBDb2x1bW5cclxuICAgIGFnZTogbnVtYmVyO1xyXG59XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgbm90QWxsb3dlZCB9IGZyb20gJy4uL2NvbnRyb2xsZXJzJztcclxuaW1wb3J0IHsgYXV0aGVudGljYXRlQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzJztcclxuXHJcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IGF1dGhlbnRpY2F0ZVJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbmNvbnN0IHJvdXRlcyA9IFJPVVRFUy5hdXRoZW50aWNhdGU7XHJcblxyXG5hdXRoZW50aWNhdGVSb3V0ZXIucm91dGUocm91dGVzLnJvb3QpXHJcbiAgICAucG9zdChhdXRoZW50aWNhdGVDb250cm9sbGVyLmF1dGhlbnRpY2F0ZSlcclxuICAgIC5hbGwobm90QWxsb3dlZCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoZW50aWNhdGVSb3V0ZXI7XHJcbiIsImV4cG9ydCBjb25zdCBST1VURVMgPSB7XHJcbiAgICB1c2VyUm91dGVzOiB7XHJcbiAgICAgICAgcm9vdDogJy8nLFxyXG4gICAgICAgIHVzZXJfaWQ6ICcvOnVzZXJfaWQnLFxyXG4gICAgICAgIHVzZXJzOiAnL3VzZXJzJ1xyXG4gICAgfSxcclxuICAgIGdyb3VwUm91dGVzOiB7XHJcbiAgICAgICAgcm9vdDogJy8nLFxyXG4gICAgICAgIGdyb3VwX2lkOiAnLzpncm91cF9pZC8nLFxyXG4gICAgICAgIHVzZXJzOiAnLzpncm91cF9pZC91c2VycycsXHJcbiAgICAgICAgZ3JvdXBzOiAnL2dyb3VwcydcclxuICAgIH0sXHJcbiAgICB1c2VyR3JvdXBSb3V0ZXM6IHtcclxuICAgICAgICByb290OiAnLycsXHJcbiAgICAgICAgZ3JvdXBfaWQ6ICcvOmdyb3VwX2lkJyxcclxuICAgICAgICB1c2Vyc19ncm91cDogJy91c2Vyc19ncm91cCcsXHJcbiAgICB9LFxyXG4gICAgYXV0aGVudGljYXRlOiB7XHJcbiAgICAgICAgcm9vdDogJy8nLFxyXG4gICAgICAgIGF1dGg6ICcvYXV0aCdcclxuICAgIH0sXHJcbiAgICBpbnZhbGlkOiB7XHJcbiAgICAgICAgcm9vdDogJyonXHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgZ3JvdXBDb250cm9sbGVyLCB1c2Vyc0dyb3VwQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzJztcclxuaW1wb3J0IHsgbm90QWxsb3dlZCB9IGZyb20gJy4uL2NvbnRyb2xsZXJzJztcclxuaW1wb3J0IHtcclxuICAgIGFkZEdyb3VwQm9keVNjaGVtYSxcclxuICAgIGFkZFVzZXJzVG9Hcm91cEJvZHlTY2hlbWEsXHJcbiAgICBhZGRVc2Vyc1RvR3JvdXBRdWVyeVNjaGVtYSxcclxuICAgIHVwZGF0ZUdyb3VwQm9keVNjaGVtYSxcclxuICAgIHVwZGF0ZUdyb3VwUXVlcnlTY2hlbWEsXHJcbiAgICB2YWxpZGF0b3JcclxufSBmcm9tICcuLi9taWRkbGV3YXJlcyc7XHJcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IGdyb3VwUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuY29uc3Qgcm91dGVzID0gUk9VVEVTLmdyb3VwUm91dGVzO1xyXG5cclxuZ3JvdXBSb3V0ZXIucm91dGUocm91dGVzLnJvb3QpXHJcbiAgICAuZ2V0KGdyb3VwQ29udHJvbGxlci5nZXRHcm91cHMpXHJcbiAgICAucG9zdCh2YWxpZGF0b3IuYm9keShhZGRHcm91cEJvZHlTY2hlbWEpLCBncm91cENvbnRyb2xsZXIuYWRkR3JvdXApXHJcbiAgICAuYWxsKG5vdEFsbG93ZWQpO1xyXG5cclxuZ3JvdXBSb3V0ZXIucm91dGUocm91dGVzLmdyb3VwX2lkKVxyXG4gICAgLmdldChncm91cENvbnRyb2xsZXIuZ2V0R3JvdXBCeUlkKVxyXG4gICAgLnB1dCh2YWxpZGF0b3IucGFyYW1zKHVwZGF0ZUdyb3VwUXVlcnlTY2hlbWEpLCB2YWxpZGF0b3IuYm9keSh1cGRhdGVHcm91cEJvZHlTY2hlbWEpLCBncm91cENvbnRyb2xsZXIudXBkYXRlR3JvdXApXHJcbiAgICAuZGVsZXRlKGdyb3VwQ29udHJvbGxlci5kZWxldGVHcm91cClcclxuICAgIC5hbGwobm90QWxsb3dlZCk7XHJcblxyXG5ncm91cFJvdXRlci5yb3V0ZShyb3V0ZXMudXNlcnMpXHJcbiAgICAucG9zdChcclxuICAgICAgICB2YWxpZGF0b3IucGFyYW1zKGFkZFVzZXJzVG9Hcm91cFF1ZXJ5U2NoZW1hKSxcclxuICAgICAgICB2YWxpZGF0b3IuYm9keShhZGRVc2Vyc1RvR3JvdXBCb2R5U2NoZW1hKSxcclxuICAgICAgICB1c2Vyc0dyb3VwQ29udHJvbGxlci5hZGRVc2Vyc1RvR3JvdXBcclxuICAgIClcclxuICAgIC5hbGwobm90QWxsb3dlZCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBncm91cFJvdXRlcjtcclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCBncm91cFJvdXRlciBmcm9tICcuL2dyb3VwLXJvdXRlcic7XHJcbmltcG9ydCB1c2VyUm91dGVyIGZyb20gJy4vdXNlci1yb3V0ZXInO1xyXG5pbXBvcnQgaW52YWxpZFJvdXRlciBmcm9tICcuL2ludmFsaWQtcm91dGVzJztcclxuaW1wb3J0IGF1dGhlbnRpY2F0ZVJvdXRlciBmcm9tICcuL2F1dGhlbnRpY2F0ZS1yb3V0ZXInO1xyXG5cclxuY29uc3Qgcm9vdFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbnJvb3RSb3V0ZXIudXNlKFJPVVRFUy51c2VyUm91dGVzLnVzZXJzLCB1c2VyUm91dGVyKTtcclxucm9vdFJvdXRlci51c2UoUk9VVEVTLmdyb3VwUm91dGVzLmdyb3VwcywgZ3JvdXBSb3V0ZXIpO1xyXG5yb290Um91dGVyLnVzZShST1VURVMuYXV0aGVudGljYXRlLmF1dGgsIGF1dGhlbnRpY2F0ZVJvdXRlcik7XHJcbnJvb3RSb3V0ZXIudXNlKFJPVVRFUy5pbnZhbGlkLnJvb3QsIGludmFsaWRSb3V0ZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJvdXRlcjtcclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBpbnZhbGlkQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzJztcclxuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgaW52YWxpZFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbmNvbnN0IHJvdXRlcyA9IFJPVVRFUy5pbnZhbGlkO1xyXG5cclxuaW52YWxpZFJvdXRlci5yb3V0ZShyb3V0ZXMucm9vdCkuYWxsKGludmFsaWRDb250cm9sbGVyLm5vdEFsbG93ZWQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW52YWxpZFJvdXRlcjtcclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyB1c2Vyc0NvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVycyc7XHJcbmltcG9ydCB7IG5vdEFsbG93ZWQgfSBmcm9tICcuLi9jb250cm9sbGVycyc7XHJcbmltcG9ydCB7IGFkZFVzZXJCb2R5U2NoZW1hLCB1cGRhdGVVc2VyQm9keVNjaGVtYSwgdXBkYXRlVXNlclF1ZXJ5U2NoZW1hLCB2YWxpZGF0b3IgfSBmcm9tICcuLi9taWRkbGV3YXJlcyc7XHJcbmltcG9ydCB7IGNoZWNrVG9rZW4gfSBmcm9tICcuLi9taWRkbGV3YXJlcy9ndWFyZCc7XHJcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IHVzZXJSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5jb25zdCByb3V0ZXMgPSBST1VURVMudXNlclJvdXRlcztcclxuXHJcbnVzZXJSb3V0ZXIucm91dGUocm91dGVzLnJvb3QpXHJcbiAgICAuZ2V0KGNoZWNrVG9rZW4sIHVzZXJzQ29udHJvbGxlci5nZXRVc2VycylcclxuICAgIC5wb3N0KHZhbGlkYXRvci5ib2R5KGFkZFVzZXJCb2R5U2NoZW1hKSwgdXNlcnNDb250cm9sbGVyLmFkZFVzZXIpXHJcbiAgICAuYWxsKG5vdEFsbG93ZWQpO1xyXG5cclxudXNlclJvdXRlci5yb3V0ZShyb3V0ZXMudXNlcl9pZClcclxuICAgIC5nZXQodXNlcnNDb250cm9sbGVyLmdldFVzZXJCeUlkKVxyXG4gICAgLnB1dCh2YWxpZGF0b3IucGFyYW1zKHVwZGF0ZVVzZXJRdWVyeVNjaGVtYSksIHZhbGlkYXRvci5ib2R5KHVwZGF0ZVVzZXJCb2R5U2NoZW1hKSwgdXNlcnNDb250cm9sbGVyLnVwZGF0ZVVzZXIpXHJcbiAgICAuZGVsZXRlKHVzZXJzQ29udHJvbGxlci5kZWxldGVVc2VyKVxyXG4gICAgLmFsbChub3RBbGxvd2VkKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJSb3V0ZXI7XHJcbiIsImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuXHJcbmltcG9ydCB7IEpXVF9UT0tFTiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGF1dGhlbnRpY2F0ZURBTCB9IGZyb20gJy4uL2RhdGEtYWNjZXNzJztcclxuXHJcbmNvbnN0IGF1dGhlbnRpY2F0ZSA9IGFzeW5jIChsb2dpbjogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdGVEQUwuYXV0aGVudGljYXRlKGxvZ2luLCBwYXNzd29yZCk7XHJcblxyXG4gICAgbGV0IHBheWxvYWQgPSB7ICd1c2VyX2lkJzogdXNlci51c2VyX2lkLCAnaXNBY3RpdmUnOiB0cnVlIH07XHJcblxyXG4gICAgcmV0dXJuIGp3dC5zaWduKHBheWxvYWQsIEpXVF9UT0tFTiwgeyBleHBpcmVzSW46IDEwIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0ZVNlcnZpY2UgPSB7IGF1dGhlbnRpY2F0ZSB9O1xyXG4iLCJpbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcclxuXHJcbmltcG9ydCB7IGdyb3VwREFMLCBRdWVyeVBhcmFtcyB9IGZyb20gJy4uL2RhdGEtYWNjZXNzJztcclxuaW1wb3J0IHsgR3JvdXAsIEdyb3VwVG9EYiwgR3JvdXBUb1VwZGF0ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcbmltcG9ydCB7IGdyb3VwVG9EYiB9IGZyb20gJy4uL21pZGRsZXdhcmVzJztcclxuaW1wb3J0IHsgdXNlcnNHcm91cFNlcnZpY2UgfSBmcm9tICcuL3VzZXJzLWdyb3VwLnNlcnZpc2UnO1xyXG5cclxuY29uc3QgZ2V0QWxsR3JvdXBzID0gKHF1ZXJ5OiBRdWVyeVBhcmFtcyk6IFByb21pc2U8R3JvdXBbXT4gPT5cclxuICAgIGdyb3VwREFMLmdldEFsbChxdWVyeSk7XHJcblxyXG5jb25zdCBnZXRHcm91cEJ5SWQgPSAoZ3JvdXBfaWQ6IHN0cmluZyk6IFByb21pc2U8R3JvdXA+ID0+XHJcbiAgICBncm91cERBTC5nZXRHcm91cChncm91cF9pZCk7XHJcblxyXG5jb25zdCBhZGRHcm91cCA9IChuZXdHcm91cDogR3JvdXBUb0RiKTogUHJvbWlzZTx2b2lkPiA9PlxyXG4gICAgZ3JvdXBEQUwuaW5zZXJ0R3JvdXAoZ3JvdXBUb0RiKG5ld0dyb3VwLCB1dWlkLnYxKCkudG9TdHJpbmcoKSkpO1xyXG5cclxuY29uc3QgdXBkYXRlR3JvdXAgPSAoZ3JvdXBfaWQ6IHN0cmluZywgZ3JvdXBUb1VwZGF0ZTogR3JvdXBUb1VwZGF0ZSk6IFByb21pc2U8dm9pZD4gPT5cclxuICAgIGdyb3VwREFMLnVwZGF0ZUdyb3VwKGdyb3VwX2lkLCBncm91cFRvVXBkYXRlKTtcclxuXHJcbmNvbnN0IGRlbGV0ZUdyb3VwID0gKGdyb3VwX2lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+XHJcbiAgICBncm91cERBTC5kZWxldGVHcm91cChncm91cF9pZCk7XHJcblxyXG5jb25zdCBhZGRVc2Vyc1RvR3JvdXAgPSB1c2Vyc0dyb3VwU2VydmljZS5hZGRVc2Vyc1RvR3JvdXA7XHJcblxyXG5leHBvcnQgY29uc3QgZ3JvdXBTZXJ2aWNlID0ge1xyXG4gICAgZ2V0QWxsR3JvdXBzLFxyXG4gICAgZ2V0R3JvdXBCeUlkLFxyXG4gICAgYWRkR3JvdXAsXHJcbiAgICB1cGRhdGVHcm91cCxcclxuICAgIGRlbGV0ZUdyb3VwLFxyXG4gICAgYWRkVXNlcnNUb0dyb3VwXHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vdXNlci5zZXJ2aXNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9ncm91cC5zZXJ2aXNlJztcclxuZXhwb3J0ICogZnJvbSAnLi91c2Vycy1ncm91cC5zZXJ2aXNlJ1xyXG5leHBvcnQgKiBmcm9tICcuL2F1dGhlbnRpY2F0ZS5zZXJ2aWNlJztcclxuIiwiaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XHJcblxyXG5pbXBvcnQgeyBRdWVyeVBhcmFtcywgdXNlckRBTCB9IGZyb20gJy4uL2RhdGEtYWNjZXNzJztcclxuaW1wb3J0IHsgVXNlclRvQWRkLCBVc2VyVG9SZXNwb25zZSwgVXNlclRvVXBkYXRlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90eXBpbmdzJztcclxuaW1wb3J0IHsgdXNlclRvRGIgfSBmcm9tICcuLi9taWRkbGV3YXJlcyc7XHJcblxyXG5jb25zdCBnZXRBbGxVc2VycyA9IChxdWVyeTogUXVlcnlQYXJhbXMpOiBQcm9taXNlPFVzZXJUb1Jlc3BvbnNlW10+ID0+IHVzZXJEQUwuZ2V0QWxsKHF1ZXJ5KTtcclxuXHJcbmNvbnN0IGdldFVzZXJCeUlkID0gKHVzZXJfaWQ6IHN0cmluZyk6IFByb21pc2U8VXNlclRvUmVzcG9uc2U+ID0+IHVzZXJEQUwuZ2V0VXNlcih1c2VyX2lkKTtcclxuXHJcbmNvbnN0IGFkZFVzZXIgPSAobmV3VXNlcjogVXNlclRvQWRkKTogUHJvbWlzZTx2b2lkPiA9PiB1c2VyREFMLmluc2VydFVzZXIodXNlclRvRGIobmV3VXNlciwgdXVpZC52MSgpLnRvU3RyaW5nKCkpKTtcclxuXHJcbmNvbnN0IHVwZGF0ZVVzZXIgPSAodXNlcl9pZDogc3RyaW5nLCB1c2VyVG9VcGRhdGU6IFVzZXJUb1VwZGF0ZSk6IFByb21pc2U8dm9pZD4gPT4gdXNlckRBTC51cGRhdGVVc2VyKHVzZXJfaWQsIHVzZXJUb1VwZGF0ZSk7XHJcblxyXG5jb25zdCBkZWxldGVVc2VyID0gKHVzZXJfaWQ6IHN0cmluZykgPT4gdXNlckRBTC5kZWxldGVVc2VyKHVzZXJfaWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJTZXJ2aWNlID0ge1xyXG4gICAgZ2V0QWxsVXNlcnMsXHJcbiAgICBnZXRVc2VyQnlJZCxcclxuICAgIGFkZFVzZXIsXHJcbiAgICB1cGRhdGVVc2VyLFxyXG4gICAgZGVsZXRlVXNlclxyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2Vyc0dyb3VwREFMIH0gZnJvbSAnLi4vZGF0YS1hY2Nlc3MnO1xyXG5cclxuY29uc3QgYWRkVXNlcnNUb0dyb3VwID0gYXN5bmMgKGdyb3VwX2lkOiBzdHJpbmcsIHVzZXJfaWRzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiA9PlxyXG4gICAgYXdhaXQgdXNlcnNHcm91cERBTC5hZGRVc2Vyc1RvR3JvdXAoZ3JvdXBfaWQsIHVzZXJfaWRzKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2Vyc0dyb3VwU2VydmljZSA9IHsgYWRkVXNlcnNUb0dyb3VwIH07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBoYXBpL2pvaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1qb2ktdmFsaWRhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwLWVycm9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2luc3RvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9