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
/* harmony import */ var _middlewares_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middlewares/logger */ "./src/middlewares/logger.ts");
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
app.use(_routes__WEBPACK_IMPORTED_MODULE_4__["default"]);
app.listen(_constants__WEBPACK_IMPORTED_MODULE_1__["PORT"], () => __awaiter(void 0, void 0, void 0, function* () {
    _middlewares_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].info(`${_constants__WEBPACK_IMPORTED_MODULE_1__["LOG_MESSAGES"].portListening} ${_constants__WEBPACK_IMPORTED_MODULE_1__["PORT"]}`);
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
    userNotFound: 'User not Found!',
    methodNotAllowed: 'Method not allowed here!',
    userExist: 'This login name already exist!'
};
const LOG_MESSAGES = {
    connectionSuccess: 'Connection has been established successfully!',
    connectionFailed: 'Unable to connect to the database:',
    portListening: 'Listening on port'
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
/*! exports provided: usersController, groupController, usersGroupController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _users_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.controller */ "./src/controllers/users.controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usersController", function() { return _users_controller__WEBPACK_IMPORTED_MODULE_0__["usersController"]; });

/* harmony import */ var _group_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group.controller */ "./src/controllers/group.controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupController", function() { return _group_controller__WEBPACK_IMPORTED_MODULE_1__["groupController"]; });

/* harmony import */ var _users_group_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-group.controller */ "./src/controllers/users-group.controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usersGroupController", function() { return _users_group_controller__WEBPACK_IMPORTED_MODULE_2__["usersGroupController"]; });






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
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-errors */ "http-errors");
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _users_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users.parser */ "./src/data-access/users.parser.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/user.model */ "./src/models/user.model.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT = 20;
const getAll = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { login, offsetParam, limitParam } = params;
    const offset = offsetParam && parseInt(offsetParam, 10) || DEFAULT_OFFSET;
    const limit = limitParam && parseInt(limitParam, 10) + offset || DEFAULT_LIMIT;
    const where = login ? { loginname: { [sequelize__WEBPACK_IMPORTED_MODULE_1__["Op"].iLike]: `%${login}%` } } : {};
    const users = yield _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"].findAll({ offset: offset, limit: limit, where });
    return Object(_users_parser__WEBPACK_IMPORTED_MODULE_3__["usersToResponse"])(users);
});
const getUser = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"].findOne({ where: { user_id: user_id } });
    if (!user)
        throw http_errors__WEBPACK_IMPORTED_MODULE_0___default()(404, { message: _constants__WEBPACK_IMPORTED_MODULE_2__["ERRORS"].userNotFound });
    return Object(_users_parser__WEBPACK_IMPORTED_MODULE_3__["userToResponse"])(user);
});
const insertUser = (userModel) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"].findOne({ where: { login: userModel.login } });
    if (user)
        throw http_errors__WEBPACK_IMPORTED_MODULE_0___default()(400, { message: _constants__WEBPACK_IMPORTED_MODULE_2__["ERRORS"].userExist });
    userModel.save();
});
const updateUser = (user_id, userToUpdate) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"].findOne({ where: { user_id: user_id } });
    if (!user)
        throw http_errors__WEBPACK_IMPORTED_MODULE_0___default()(404, { message: _constants__WEBPACK_IMPORTED_MODULE_2__["ERRORS"].userNotFound });
    user.login = userToUpdate.login;
    user.age = userToUpdate.age;
    user.save();
});
const deleteUser = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"].findOne({ where: { user_id: user_id } });
    if (!user)
        throw http_errors__WEBPACK_IMPORTED_MODULE_0___default()(404, { message: _constants__WEBPACK_IMPORTED_MODULE_2__["ERRORS"].userNotFound });
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

/***/ "./src/middlewares/index.ts":
/*!**********************************!*\
  !*** ./src/middlewares/index.ts ***!
  \**********************************/
/*! exports provided: validator, addUserBodySchema, updateUserBodySchema, updateUserQuerySchema, groupToResponse, groupsToResponse, groupToDb, userToResponse, usersToResponse, userToDb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validation_servise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation.servise */ "./src/middlewares/validation.servise.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validator", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_0__["validator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addUserBodySchema", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_0__["addUserBodySchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateUserBodySchema", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_0__["updateUserBodySchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateUserQuerySchema", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_0__["updateUserQuerySchema"]; });

/* harmony import */ var _parsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsers */ "./src/middlewares/parsers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupToResponse", function() { return _parsers__WEBPACK_IMPORTED_MODULE_1__["groupToResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupsToResponse", function() { return _parsers__WEBPACK_IMPORTED_MODULE_1__["groupsToResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupToDb", function() { return _parsers__WEBPACK_IMPORTED_MODULE_1__["groupToDb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userToResponse", function() { return _parsers__WEBPACK_IMPORTED_MODULE_1__["userToResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usersToResponse", function() { return _parsers__WEBPACK_IMPORTED_MODULE_1__["usersToResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userToDb", function() { return _parsers__WEBPACK_IMPORTED_MODULE_1__["userToDb"]; });





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

/***/ "./src/middlewares/validation.servise.ts":
/*!***********************************************!*\
  !*** ./src/middlewares/validation.servise.ts ***!
  \***********************************************/
/*! exports provided: validator, addUserBodySchema, updateUserBodySchema, updateUserQuerySchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validator", function() { return validator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUserBodySchema", function() { return addUserBodySchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserBodySchema", function() { return updateUserBodySchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserQuerySchema", function() { return updateUserQuerySchema; });
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/joi */ "@hapi/joi");
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express_joi_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-joi-validation */ "express-joi-validation");
/* harmony import */ var express_joi_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_joi_validation__WEBPACK_IMPORTED_MODULE_1__);


const MIN_AGE = 4;
const MAX_AGE = 130;
const validator = Object(express_joi_validation__WEBPACK_IMPORTED_MODULE_1__["createValidator"])();
const addUserBodySchema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["object"]({
    login: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["string"]().required(),
    age: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["number"]().required().greater(MIN_AGE).less(MAX_AGE),
    password: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["string"]().required().alphanum()
});
const updateUserBodySchema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["object"]({
    login: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["string"]().required(),
    age: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["number"]().required().greater(MIN_AGE).less(MAX_AGE)
});
const updateUserQuerySchema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["object"]({
    user_id: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["string"]().required()
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
        group_id: '/:group_id',
        groups: '/groups'
    },
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/routes/constants.ts");



const groupRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
const routes = _constants__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].groupRoutes;
groupRouter.route(routes.root)
    .get(_controllers__WEBPACK_IMPORTED_MODULE_1__["groupController"].getGroups)
    .post(_controllers__WEBPACK_IMPORTED_MODULE_1__["groupController"].addGroup);
groupRouter.route(routes.group_id)
    .get(_controllers__WEBPACK_IMPORTED_MODULE_1__["groupController"].getGroupById)
    .put(_controllers__WEBPACK_IMPORTED_MODULE_1__["groupController"].updateGroup)
    .delete(_controllers__WEBPACK_IMPORTED_MODULE_1__["groupController"].deleteGroup);
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
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares */ "./src/middlewares/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/routes/constants.ts");




const userRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
const routes = _constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].userRoutes;
userRouter.route(routes.root)
    .get(_controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].getUsers)
    .post(_middlewares__WEBPACK_IMPORTED_MODULE_2__["validator"].body(_middlewares__WEBPACK_IMPORTED_MODULE_2__["addUserBodySchema"]), _controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].addUser);
userRouter.route(routes.user_id)
    .get(_controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].getUserById)
    .put(_middlewares__WEBPACK_IMPORTED_MODULE_2__["validator"].params(_middlewares__WEBPACK_IMPORTED_MODULE_2__["updateUserQuerySchema"]), _middlewares__WEBPACK_IMPORTED_MODULE_2__["validator"].body(_middlewares__WEBPACK_IMPORTED_MODULE_2__["updateUserBodySchema"]), _controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].updateUser)
    .delete(_controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].deleteUser);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2dyb3VwLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2hlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL3VzZXJzLWdyb3VwLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL3VzZXJzLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtYWNjZXNzL2JhY2t1cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1hY2Nlc3MvZGFsL2dyb3VwLkRBTC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1hY2Nlc3MvZGFsL3VzZXItZ3JvdXAuREFMLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLWFjY2Vzcy9kYWwvdXNlckRBTC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1hY2Nlc3MvZGIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtYWNjZXNzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLWFjY2Vzcy91c2Vycy5wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pZGRsZXdhcmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlcy9sb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pZGRsZXdhcmVzL3BhcnNlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pZGRsZXdhcmVzL3ZhbGlkYXRpb24uc2VydmlzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2dyb3VwLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy91c2VyLWdyb3VwLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvdXNlci5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2dyb3VwLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvdXNlci1yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2dyb3VwLnNlcnZpc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy91c2VyLnNlcnZpc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3VzZXJzLWdyb3VwLnNlcnZpc2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGhhcGkvam9pXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3Mtam9pLXZhbGlkYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwLWVycm9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbnN0b25cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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Q0FBQyxPQUFlLEVBQUUsRUFBRSxDQUFDLG9EQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTdELE1BQU0sV0FBVyxHQUFHO0lBQ3ZCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsT0FBTztJQUNQLFVBQVU7SUFDVixVQUFVO0NBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCZ0U7QUFFbEUsTUFBTSxlQUFlLEdBQUcsQ0FBTyxRQUFnQixFQUFFLFFBQWtCLEVBQWdCLEVBQUUsa0RBQ2pGLGFBQU0sNkVBQWEsQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxLQUFDO0FBRXJELE1BQU0saUJBQWlCLEdBQUcsRUFBRSxlQUFlLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7O0FDTHJELHNDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InNlcnZlci1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAudHNcIik7XG4iLCJpbXBvcnQgeyBEaWFsZWN0IH0gZnJvbSAnc2VxdWVsaXplJztcclxuXHJcbmNvbnN0IGRpYWxlY3Q6IERpYWxlY3QgPSAncG9zdGdyZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGlhbGVjdDogZGlhbGVjdCxcclxuICAgIGhvc3Q6IFwiZWMyLTU0LTI0Ni0xMDAtMjQ2LmV1LXdlc3QtMS5jb21wdXRlLmFtYXpvbmF3cy5jb21cIixcclxuICAgIHBvcnQ6IDU0MzIsXHJcbiAgICBkYXRhYmFzZTogXCJkM292czBraGo4MmEzaFwiLFxyXG4gICAgdXNlcm5hbWU6IFwieGRkcXZyZnp3ZHdlY3JcIixcclxuICAgIHBhc3N3b3JkOiBcIjNmNDFiNTA0N2NkZGJiNTI2MWQwN2UyYTZlODJlYjNmNjQ1MWRlOGIzODg1ZTAxY2Y2MTM2YWY1OTU0ZDdhMzdcIixcclxuICAgIHBvb2w6IHtcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgbWF4OiA1LFxyXG4gICAgICAgIGFjcXVpcmU6IDMwMDAwLFxyXG4gICAgICAgIGlkbGU6IDEwMDAwXHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCBleHByZXNzLCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBMT0dfTUVTU0FHRVMsIFBPUlQgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGRiQ29ubmVjdCB9IGZyb20gJy4vZGF0YS1hY2Nlc3MnO1xyXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL21pZGRsZXdhcmVzL2xvZ2dlcic7XHJcbmltcG9ydCByb290Um91dGVyIGZyb20gJy4vcm91dGVzJztcclxuXHJcbmNvbnN0IGFwcDogQXBwbGljYXRpb24gPSBleHByZXNzKCk7XHJcblxyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuYXBwLnVzZShyb290Um91dGVyKTtcclxuXHJcbmFwcC5saXN0ZW4oUE9SVCwgYXN5bmMgKCkgPT4ge1xyXG4gICAgbG9nZ2VyLmluZm8oYCR7IExPR19NRVNTQUdFUy5wb3J0TGlzdGVuaW5nIH0gJHsgUE9SVCB9YCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJleHBvcnQgY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNDAwMTtcclxuXHJcbmV4cG9ydCBjb25zdCBFUlJPUlMgPSB7XHJcbiAgICB1c2VyTm90Rm91bmQ6ICdVc2VyIG5vdCBGb3VuZCEnLFxyXG4gICAgbWV0aG9kTm90QWxsb3dlZDogJ01ldGhvZCBub3QgYWxsb3dlZCBoZXJlIScsXHJcbiAgICB1c2VyRXhpc3Q6ICdUaGlzIGxvZ2luIG5hbWUgYWxyZWFkeSBleGlzdCEnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX01FU1NBR0VTID0ge1xyXG4gICAgY29ubmVjdGlvblN1Y2Nlc3M6ICdDb25uZWN0aW9uIGhhcyBiZWVuIGVzdGFibGlzaGVkIHN1Y2Nlc3NmdWxseSEnLFxyXG4gICAgY29ubmVjdGlvbkZhaWxlZDogJ1VuYWJsZSB0byBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZTonLFxyXG4gICAgcG9ydExpc3RlbmluZzogJ0xpc3RlbmluZyBvbiBwb3J0J1xyXG59O1xyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgZ3JvdXBTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQgeyByZXF1ZXN0SGVscGVyIH0gZnJvbSAnLi9oZWxwZXInO1xyXG5cclxuY29uc3QgZ2V0R3JvdXBzID0gKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gZ3JvdXBTZXJ2aWNlLmdldEFsbEdyb3VwcyhyZXF1ZXN0LnF1ZXJ5KSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuY29uc3QgZ2V0R3JvdXBCeUlkID0gKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gZ3JvdXBTZXJ2aWNlLmdldEdyb3VwQnlJZChyZXF1ZXN0LnBhcmFtcy5ncm91cF9pZCksIHJlc3BvbnNlLCByZXF1ZXN0KTtcclxuXHJcbmNvbnN0IGFkZEdyb3VwID0gKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gZ3JvdXBTZXJ2aWNlLmFkZEdyb3VwKHJlcXVlc3QuYm9keSksIHJlc3BvbnNlLCByZXF1ZXN0KTtcclxuXHJcbmNvbnN0IGFkZFVzZXJzVG9Hcm91cCA9IChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IGdyb3VwU2VydmljZS5hZGRVc2Vyc1RvR3JvdXAocmVxdWVzdC5wYXJhbXMuZ3JvdXBfaWQsIHJlcXVlc3QuYm9keS51c2VySWRzKSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuY29uc3QgdXBkYXRlR3JvdXAgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiBncm91cFNlcnZpY2UudXBkYXRlR3JvdXAocmVxdWVzdC5wYXJhbXMuZ3JvdXBfaWQsIHJlcXVlc3QuYm9keSksIHJlc3BvbnNlLCByZXF1ZXN0KTtcclxuXHJcbmNvbnN0IGRlbGV0ZUdyb3VwID0gKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVxdWVzdEhlbHBlcigoKSA9PlxyXG4gICAgZ3JvdXBTZXJ2aWNlLmRlbGV0ZUdyb3VwKHJlcXVlc3QucGFyYW1zLmdyb3VwX2lkKSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyb3VwQ29udHJvbGxlciA9IHtcclxuICAgIGdldEdyb3VwcyxcclxuICAgIGdldEdyb3VwQnlJZCxcclxuICAgIGFkZEdyb3VwLFxyXG4gICAgdXBkYXRlR3JvdXAsXHJcbiAgICBkZWxldGVHcm91cCxcclxuICAgIGFkZFVzZXJzVG9Hcm91cFxyXG59O1xyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IsIHsgSHR0cEVycm9yIH0gZnJvbSAnaHR0cC1lcnJvcnMnO1xyXG5cclxuaW1wb3J0IHsgRVJST1JTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi4vbWlkZGxld2FyZXMvbG9nZ2VyJztcclxuXHJcbmNvbnN0IGdldExvZ01lc3NhZ2UgPSAocmVxdWVzdDogUmVxdWVzdCk6IHN0cmluZyA9PiB7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBgcGFyYW1zOiAkeyBKU09OLnN0cmluZ2lmeShyZXF1ZXN0LnBhcmFtcykgfWA7XHJcbiAgICBjb25zdCBib2R5ID0gYGJvZHk6ICR7IEpTT04uc3RyaW5naWZ5KHJlcXVlc3QuYm9keSkgfWA7XHJcbiAgICBjb25zdCBxdWVyeSA9IGBxdWVyeTogJHsgSlNPTi5zdHJpbmdpZnkocmVxdWVzdC5xdWVyeSkgfWA7XHJcbiAgICBjb25zdCB1cmwgPSBgdXJsOiAkeyByZXF1ZXN0LnVybCB9YDtcclxuICAgIGNvbnN0IG1ldGhvZCA9IGBtZXRob2Q6ICR7IHJlcXVlc3QubWV0aG9kIH1gO1xyXG5cclxuICAgIHJldHVybiBgJHsgbWV0aG9kIH0gJHsgdXJsIH0gJHsgcGFyYW1zIH0gJHsgcXVlcnkgfSAkeyBib2R5IH1gO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RIZWxwZXIgPSBhc3luYyAoZm46IGFueSwgcmVzcG9uc2U6IFJlc3BvbnNlLCByZXF1ZXN0OiBSZXF1ZXN0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmbigpO1xyXG4gICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgICAgICAgID8gcmVzcG9uc2Uuc2VuZCh7IGRhdGEsIHN0YXR1czogJ3N1Y2Nlc3MnIH0pXHJcbiAgICAgICAgICAgIDogcmVzcG9uc2Uuc2VuZCh7IHN0YXR1czogJ3N1Y2Nlc3MnIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBsb2dnZXIuZXJyb3IoYHN0YXR1czogJHsgZXJyb3Iuc3RhdHVzIHx8IDUwMCB9LCBtZXNzYWdlOiAkeyBlcnJvci5tZXNzYWdlIH0sICR7IGdldExvZ01lc3NhZ2UocmVxdWVzdCkgfWApO1xyXG4gICAgICAgIHJlc3BvbnNlLnN0YXR1cyhlcnJvci5zdGF0dXMgfHwgNTAwKS5zZW5kKHsgZXJyb3I6IHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9IH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vdEFsbG93ZWQgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICBsZXQgZXJyb3I6IEh0dHBFcnJvciA9IGNyZWF0ZUVycm9yKDQwNSwgRVJST1JTLm1ldGhvZE5vdEFsbG93ZWQpO1xyXG4gICAgbG9nZ2VyLmVycm9yKGBzdGF0dXM6ICR7IDQwNSB9LCBtZXNzYWdlOiAkeyBlcnJvci5tZXNzYWdlIH1gKTtcclxuXHJcbiAgICByZXNwb25zZS5zdGF0dXMoZXJyb3Iuc3RhdHVzKS5zZW5kKHsgc3RhdHVzOiBlcnJvci5zdGF0dXMsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vdXNlcnMuY29udHJvbGxlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vZ3JvdXAuY29udHJvbGxlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vdXNlcnMtZ3JvdXAuY29udHJvbGxlcic7XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyB1c2Vyc0dyb3VwU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgcmVxdWVzdEhlbHBlciB9IGZyb20gJy4vaGVscGVyJztcclxuXHJcbmNvbnN0IGFkZFVzZXJzVG9Hcm91cCA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJzR3JvdXBTZXJ2aWNlLmFkZFVzZXJzVG9Hcm91cChyZXF1ZXN0LnBhcmFtcy5ncm91cF9pZCwgcmVxdWVzdC5ib2R5LnVzZXJJZHMpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlcnNHcm91cENvbnRyb2xsZXIgPSB7IGFkZFVzZXJzVG9Hcm91cCB9O1xyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgdXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IHJlcXVlc3RIZWxwZXIgfSBmcm9tICcuL2hlbHBlcic7XHJcblxyXG5jb25zdCBnZXRVc2VycyA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJTZXJ2aWNlLmdldEFsbFVzZXJzKHJlcXVlc3QucXVlcnkpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCBnZXRVc2VyQnlJZCA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJTZXJ2aWNlLmdldFVzZXJCeUlkKHJlcXVlc3QucGFyYW1zLnVzZXJfaWQpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCBhZGRVc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gdXNlclNlcnZpY2UuYWRkVXNlcihyZXF1ZXN0LmJvZHkpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gdXNlclNlcnZpY2UudXBkYXRlVXNlcihyZXF1ZXN0LnBhcmFtcy51c2VyX2lkLCByZXF1ZXN0LmJvZHkpLCByZXNwb25zZSwgcmVxdWVzdCk7XHJcblxyXG5jb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gdXNlclNlcnZpY2UuZGVsZXRlVXNlcihyZXF1ZXN0LnBhcmFtcy51c2VyX2lkKSwgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJzQ29udHJvbGxlciA9IHtcclxuICAgIGdldFVzZXJzLFxyXG4gICAgZGVsZXRlVXNlcixcclxuICAgIHVwZGF0ZVVzZXIsXHJcbiAgICBnZXRVc2VyQnlJZCxcclxuICAgIGFkZFVzZXJcclxufTtcclxuIiwiaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90eXBpbmdzJztcclxuaW1wb3J0IHsgUGVybWlzc2lvbnNUeXBlIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyczogVXNlcltdID0gW1xyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6ICdhbmFraW4nLFxyXG4gICAgICAgIGxvZ2luOiAnQW5ha2luU2t5d2Fsa2VyJyxcclxuICAgICAgICBwYXNzd29yZDogJ2FuYWtpbnBhc3MnLFxyXG4gICAgICAgIGFnZTogMzJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogJ21hY2VXaW5kdScsXHJcbiAgICAgICAgbG9naW46ICdNYWNlV2luZHUnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnbWFjZXBhc3MnLFxyXG4gICAgICAgIGFnZTogNzJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogJ2x1a2VTa3l3YWxrZXInLFxyXG4gICAgICAgIGxvZ2luOiAnTHVrZVNreXdhbGtlcicsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdsdWtlcGFzcycsXHJcbiAgICAgICAgYWdlOiAyM1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiAnYzNwMCcsXHJcbiAgICAgICAgbG9naW46ICdDLTNQTycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdjM3AwcGFzcycsXHJcbiAgICAgICAgYWdlOiAzMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiAnZGFydGhNYXVsJyxcclxuICAgICAgICBsb2dpbjogJ0RhcnRoTWF1bCcsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdkYXJ0aHBhc3MnLFxyXG4gICAgICAgIGFnZTogNDRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdRdWlHb25KaW5uJyxcclxuICAgICAgICBwYXNzd29yZDogJ3F1aXBhc3MnLFxyXG4gICAgICAgIGFnZTogODBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdPYmlXYW5LZW5vYmknLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnb2JpcGFzcycsXHJcbiAgICAgICAgYWdlOiA0N1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiAncGFscGF0aW5lJyxcclxuICAgICAgICBsb2dpbjogJ1BhbHBhdGluZScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdwYWxwYXRpbmVwYXNzJyxcclxuICAgICAgICBhZ2U6IDgyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiAnWW9kYScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICd5b2RhcGFzcycsXHJcbiAgICAgICAgYWdlOiAxMzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdTbm9rZScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdzbm9rZXBhc3MnLFxyXG4gICAgICAgIGFnZTogNTNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdCb2JhRmV0dCcsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdib2JhcGFzcycsXHJcbiAgICAgICAgYWdlOiAzNlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogJ0NoZXdiYWNjYScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdjaGV3YmFjY2FwYXNzJyxcclxuICAgICAgICBhZ2U6IDEzMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogJ0hhblNvbG8nLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnaGFucGFzcycsXHJcbiAgICAgICAgYWdlOiA2NlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogJ0t5bG9SZW4nLFxyXG4gICAgICAgIHBhc3N3b3JkOiAna3lsb3Bhc3MnLFxyXG4gICAgICAgIGFnZTogMzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46ICdMZWlhT3JnYW5hJyxcclxuICAgICAgICBwYXNzd29yZDogJ2xlaWFwYXNzJyxcclxuICAgICAgICBhZ2U6IDUzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiAnUGFkbWVBbWlkYWxhJyxcclxuICAgICAgICBwYXNzd29yZDogJ3BhZG1lcGFzcycsXHJcbiAgICAgICAgYWdlOiAyN1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogJ0NvdW50RG9va3UnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnZG9rb29wYXNzJyxcclxuICAgICAgICBhZ2U6IDEwMlxyXG4gICAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyb3VwczogeyBncm91cF9pZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9uc1R5cGVbXSB9W10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgZ3JvdXBfaWQ6ICdsaWdodF9zaWRlJyxcclxuICAgICAgICBuYW1lOiAnbGlnaHRfc2lkZScsXHJcbiAgICAgICAgcGVybWlzc2lvbnM6IFsgJ1dSSVRFJywgJ0RFTEVURScgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBncm91cF9pZDogJ2Rhcmtfc2lkZScsXHJcbiAgICAgICAgbmFtZTogJ2Rhcmtfc2lkZScsXHJcbiAgICAgICAgcGVybWlzc2lvbnM6IFsgJ1dSSVRFJywgJ1JFQUQnIF1cclxuICAgIH1cclxuXTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgdXNlckdyb3VwczogeyBncm91cF9pZDogc3RyaW5nLCB1c2VyX2lkOiBzdHJpbmcgfVtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIGdyb3VwX2lkOiAnbGlnaHRfc2lkZScsXHJcbiAgICAgICAgdXNlcl9pZDogJ2FuYWtpbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZ3JvdXBfaWQ6ICdkYXJrX3NpZGUnLFxyXG4gICAgICAgIHVzZXJfaWQ6ICdwYWxwYXRpbmUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGdyb3VwX2lkOiAnbGlnaHRfc2lkZScsXHJcbiAgICAgICAgdXNlcl9pZDogJ21hY2VXaW5kdSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZ3JvdXBfaWQ6ICdsaWdodF9zaWRlJyxcclxuICAgICAgICB1c2VyX2lkOiAnbHVrZVNreXdhbGtlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZ3JvdXBfaWQ6ICdkYXJrX3NpZGUnLFxyXG4gICAgICAgIHVzZXJfaWQ6ICdhbmFraW4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGdyb3VwX2lkOiAnZGFya19zaWRlJyxcclxuICAgICAgICB1c2VyX2lkOiAnZGFydGhNYXVsJ1xyXG4gICAgfVxyXG5dO1xyXG4iLCJpbXBvcnQgY3JlYXRlRXJyb3IgZnJvbSAnaHR0cC1lcnJvcnMnO1xyXG5pbXBvcnQgeyBPcCwgV2hlcmVPcHRpb25zIH0gZnJvbSAnc2VxdWVsaXplJztcclxuaW1wb3J0IHsgZ3JvdXBzVG9SZXNwb25zZSwgZ3JvdXBUb1Jlc3BvbnNlIH0gZnJvbSAnLi4vLi4vbWlkZGxld2FyZXMvcGFyc2Vycyc7XHJcblxyXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uLy4uL21vZGVscy9ncm91cC5tb2RlbCc7XHJcblxyXG5cclxuY29uc3QgRU5USVRZX05BTUU6IHN0cmluZyA9ICdncm91cCc7XHJcbmNvbnN0IERFRkFVTFRfT0ZGU0VUOiBudW1iZXIgPSAwO1xyXG5jb25zdCBERUZBVUxUX0xJTUlUOiBudW1iZXIgPSAxMDtcclxuXHJcbmNvbnN0IGdldEFsbCA9IGFzeW5jIChwYXJhbXM6IGFueSk6IFByb21pc2U8YW55W10+ID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgb2Zmc2V0UGFyYW0sIGxpbWl0UGFyYW0gfSA9IHBhcmFtcztcclxuICAgIGNvbnN0IG9mZnNldDogbnVtYmVyID0gb2Zmc2V0UGFyYW0gJiYgcGFyc2VJbnQob2Zmc2V0UGFyYW0sIDEwKSB8fCBERUZBVUxUX09GRlNFVDtcclxuICAgIGNvbnN0IGxpbWl0OiBudW1iZXIgPSBsaW1pdFBhcmFtICYmIHBhcnNlSW50KGxpbWl0UGFyYW0sIDEwKSArIG9mZnNldCB8fCBERUZBVUxUX0xJTUlUO1xyXG4gICAgY29uc3Qgd2hlcmU6IFdoZXJlT3B0aW9ucyA9IG5hbWUgPyB7IG5hbWU6IHsgWyBPcC5pTGlrZSBdOiBgJSR7IG5hbWUgfSVgIH0gfSA6IHt9O1xyXG4gICAgY29uc3QgZ3JvdXBzID0gYXdhaXQgR3JvdXAuZmluZEFsbCh7IG9mZnNldDogb2Zmc2V0LCBsaW1pdDogbGltaXQsIHdoZXJlIH0pO1xyXG5cclxuICAgIHJldHVybiBncm91cHNUb1Jlc3BvbnNlKGdyb3Vwcyk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRHcm91cCA9IGFzeW5jIChncm91cF9pZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IGdyb3VwID0gYXdhaXQgR3JvdXAuZmluZE9uZSh7IHdoZXJlOiB7IGdyb3VwX2lkOiBncm91cF9pZCB9IH0pO1xyXG5cclxuICAgIGlmICggIWdyb3VwICkgdGhyb3cgY3JlYXRlRXJyb3IoNDA0LCB7IG1lc3NhZ2U6IGAkeyBFTlRJVFlfTkFNRSB9IEVSUk9SUy5ub3RGb3VuZGAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGdyb3VwVG9SZXNwb25zZShncm91cCk7XHJcbn07XHJcblxyXG5jb25zdCBpbnNlcnRHcm91cCA9IGFzeW5jIChncm91cE1vZGVsOiBHcm91cCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc3QgZ3JvdXAgPSBhd2FpdCBHcm91cC5maW5kT25lKHsgd2hlcmU6IHsgbmFtZTogZ3JvdXBNb2RlbC5uYW1lIH0gfSk7XHJcblxyXG4gICAgaWYgKCBncm91cCApIHRocm93IGNyZWF0ZUVycm9yKDQwMCwgeyBtZXNzYWdlOiBgJHsgRU5USVRZX05BTUUgfSBFUlJPUlMuZXhpc3RgIH0pO1xyXG5cclxuICAgIGdyb3VwTW9kZWwuc2F2ZSgpO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlR3JvdXAgPSBhc3luYyAoZ3JvdXBfaWQ6IHN0cmluZywgZ3JvdXBUb1VwZGF0ZTogYW55KTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBjb25zdCBncm91cCA9IGF3YWl0IEdyb3VwLmZpbmRPbmUoeyB3aGVyZTogeyBncm91cF9pZDogZ3JvdXBfaWQgfSB9KTtcclxuXHJcbiAgICBpZiAoICFncm91cCApIHRocm93IGNyZWF0ZUVycm9yKDQwNCwgeyBtZXNzYWdlOiBgJHsgRU5USVRZX05BTUUgfSBFUlJPUlMubm90Rm91bmQgYCB9KTtcclxuXHJcbiAgICBncm91cC5uYW1lID0gZ3JvdXBUb1VwZGF0ZS5uYW1lO1xyXG4gICAgZ3JvdXAucGVybWlzc2lvbnMgPSBncm91cFRvVXBkYXRlLnBlcm1pc3Npb25zO1xyXG5cclxuICAgIGdyb3VwLnNhdmUoKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZUdyb3VwID0gYXN5bmMgKGdyb3VwX2lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnN0IGdyb3VwID0gYXdhaXQgR3JvdXAuZmluZE9uZSh7IHdoZXJlOiB7IGdyb3VwX2lkOiBncm91cF9pZCB9IH0pO1xyXG5cclxuICAgIGlmICggIWdyb3VwICkgdGhyb3cgY3JlYXRlRXJyb3IoNDA0LCB7IG1lc3NhZ2U6IGAkeyBFTlRJVFlfTkFNRSB9IEVSUk9SUy5ub3RGb3VuZGAgfSk7XHJcblxyXG4gICAgZ3JvdXAuZGVzdHJveSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyb3VwREFMID0ge1xyXG4gICAgZ2V0QWxsLFxyXG4gICAgZ2V0R3JvdXAsXHJcbiAgICBpbnNlcnRHcm91cCxcclxuICAgIHVwZGF0ZUdyb3VwLFxyXG4gICAgZGVsZXRlR3JvdXBcclxufTtcclxuIiwiaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tICdzZXF1ZWxpemUnO1xyXG5cclxuaW1wb3J0IHsgVXNlcnNHcm91cCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcbmltcG9ydCB7IEdyb3VwLCBVc2VyR3JvdXAgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBzZXF1ZWxpemUgYXMgZGJJbnN0YW5jZSB9IGZyb20gJy4uL2RiJztcclxuXHJcbmNvbnN0IGFkZFVzZXJzVG9Hcm91cCA9IChncm91cF9pZDogc3RyaW5nLCB1c2VyX2lkczogc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+ID0+XHJcbiAgICBkYkluc3RhbmNlLnRyYW5zYWN0aW9uKFxyXG4gICAgICAgIGFzeW5jICh0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgR3JvdXAuZmluZE9uZSh7IHdoZXJlOiB7IGdyb3VwX2lkOiBncm91cF9pZCB9LCB0cmFuc2FjdGlvbiB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwczogVXNlcnNHcm91cFtdID1cclxuICAgICAgICAgICAgICAgIHVzZXJfaWRzLm1hcCgodXNlcklkOiBzdHJpbmcpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBfaWQ6IGdyb3VwX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJJZFxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgVXNlckdyb3VwLmJ1bGtDcmVhdGUoZ3JvdXBzLCB7IHRyYW5zYWN0aW9uIH0pO1xyXG4gICAgICAgICAgICAvLyBhd2FpdCBncm91cC5hZGRVc2Vycyh1c2VyX2lkcywgeyB0cmFuc2FjdGlvbiB9KTsganVzdCBhbiBleGFtcGxlIG9mIHVzaW5nIG1ldGhvZCBkZWZpbmVkIGluIG1vZGVsXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2Vyc0dyb3VwREFMID0geyBhZGRVc2Vyc1RvR3JvdXAgfTtcclxuIiwiaW1wb3J0IGNyZWF0ZUVycm9yIGZyb20gJ2h0dHAtZXJyb3JzJztcclxuaW1wb3J0IHsgV2hlcmVPcHRpb25zLCBPcCB9IGZyb20gJ3NlcXVlbGl6ZSc7XHJcblxyXG5pbXBvcnQgeyBFUlJPUlMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBVc2VyVG9SZXNwb25zZSwgVXNlclRvVXBkYXRlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy90eXBpbmdzJztcclxuaW1wb3J0IHsgUXVlcnlQYXJhbXMgfSBmcm9tICcuLi90eXBpbmdzJztcclxuaW1wb3J0IHsgdXNlcnNUb1Jlc3BvbnNlLCB1c2VyVG9SZXNwb25zZSB9IGZyb20gJy4uL3VzZXJzLnBhcnNlcic7XHJcbmltcG9ydCB7IFVzZXIgYXMgVXNlck1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xyXG5cclxuY29uc3QgREVGQVVMVF9PRkZTRVQ6IG51bWJlciA9IDA7XHJcbmNvbnN0IERFRkFVTFRfTElNSVQ6IG51bWJlciA9IDIwO1xyXG5cclxuY29uc3QgZ2V0QWxsID0gYXN5bmMgKHBhcmFtczogUXVlcnlQYXJhbXMpOiBQcm9taXNlPFVzZXJUb1Jlc3BvbnNlW10+ID0+IHtcclxuICAgIGNvbnN0IHsgbG9naW4sIG9mZnNldFBhcmFtLCBsaW1pdFBhcmFtIH0gPSBwYXJhbXM7XHJcbiAgICBjb25zdCBvZmZzZXQ6IG51bWJlciA9IG9mZnNldFBhcmFtICYmIHBhcnNlSW50KG9mZnNldFBhcmFtLCAxMCkgfHwgREVGQVVMVF9PRkZTRVQ7XHJcbiAgICBjb25zdCBsaW1pdDogbnVtYmVyID0gbGltaXRQYXJhbSAmJiBwYXJzZUludChsaW1pdFBhcmFtLCAxMCkgKyBvZmZzZXQgfHwgREVGQVVMVF9MSU1JVDtcclxuICAgIGNvbnN0IHdoZXJlOiBXaGVyZU9wdGlvbnMgPSBsb2dpbiA/IHsgbG9naW5uYW1lOiB7IFsgT3AuaUxpa2UgXTogYCUkeyBsb2dpbiB9JWAgfSB9IDoge307XHJcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IFVzZXJNb2RlbC5maW5kQWxsKHsgb2Zmc2V0OiBvZmZzZXQsIGxpbWl0OiBsaW1pdCwgd2hlcmUgfSk7XHJcblxyXG4gICAgcmV0dXJuIHVzZXJzVG9SZXNwb25zZSh1c2Vycyk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRVc2VyID0gYXN5bmMgKHVzZXJfaWQ6IHN0cmluZyk6IFByb21pc2U8VXNlclRvUmVzcG9uc2U+ID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IHdoZXJlOiB7IHVzZXJfaWQ6IHVzZXJfaWQgfSB9KTtcclxuXHJcbiAgICBpZiAoICF1c2VyICkgdGhyb3cgY3JlYXRlRXJyb3IoNDA0LCB7IG1lc3NhZ2U6IEVSUk9SUy51c2VyTm90Rm91bmQgfSk7XHJcblxyXG4gICAgcmV0dXJuIHVzZXJUb1Jlc3BvbnNlKHVzZXIpO1xyXG59O1xyXG5cclxuY29uc3QgaW5zZXJ0VXNlciA9IGFzeW5jICh1c2VyTW9kZWw6IFVzZXJNb2RlbCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kT25lKHsgd2hlcmU6IHsgbG9naW46IHVzZXJNb2RlbC5sb2dpbiB9IH0pO1xyXG5cclxuICAgIGlmICggdXNlciApIHRocm93IGNyZWF0ZUVycm9yKDQwMCwgeyBtZXNzYWdlOiBFUlJPUlMudXNlckV4aXN0IH0pO1xyXG5cclxuICAgIHVzZXJNb2RlbC5zYXZlKCk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKHVzZXJfaWQ6IHN0cmluZywgdXNlclRvVXBkYXRlOiBVc2VyVG9VcGRhdGUpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IHdoZXJlOiB7IHVzZXJfaWQ6IHVzZXJfaWQgfSB9KTtcclxuXHJcbiAgICBpZiAoICF1c2VyICkgdGhyb3cgY3JlYXRlRXJyb3IoNDA0LCB7IG1lc3NhZ2U6IEVSUk9SUy51c2VyTm90Rm91bmQgfSk7XHJcblxyXG4gICAgdXNlci5sb2dpbiA9IHVzZXJUb1VwZGF0ZS5sb2dpbjtcclxuICAgIHVzZXIuYWdlID0gdXNlclRvVXBkYXRlLmFnZTtcclxuXHJcbiAgICB1c2VyLnNhdmUoKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAodXNlcl9pZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoeyB3aGVyZTogeyB1c2VyX2lkOiB1c2VyX2lkIH0gfSk7XHJcblxyXG4gICAgaWYgKCAhdXNlciApIHRocm93IGNyZWF0ZUVycm9yKDQwNCwgeyBtZXNzYWdlOiBFUlJPUlMudXNlck5vdEZvdW5kIH0pO1xyXG5cclxuICAgIHVzZXIuZGVzdHJveSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJEQUwgPSB7XHJcbiAgICBnZXRBbGwsXHJcbiAgICBnZXRVc2VyLFxyXG4gICAgaW5zZXJ0VXNlcixcclxuICAgIHVwZGF0ZVVzZXIsXHJcbiAgICBkZWxldGVVc2VyXHJcbn07XHJcbiIsImltcG9ydCB7IFNlcXVlbGl6ZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcclxuXHJcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uL21pZGRsZXdhcmVzL2xvZ2dlcic7XHJcbmltcG9ydCB7IEdyb3VwLCBVc2VyLCBVc2VyR3JvdXAgfSBmcm9tICcuLi9tb2RlbHMvJztcclxuaW1wb3J0IHsgdXNlcnMsIGdyb3VwcywgdXNlckdyb3VwcyB9IGZyb20gJy4vYmFja3VwJztcclxuaW1wb3J0IHsgTE9HX01FU1NBR0VTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IGRiQ29uZmlnIGZyb20gJy4vLi4vLi4vY29uZmlnL2NvbmZpZyc7XHJcblxyXG5jb25zdCBtb2RlbHMgPSBbXHJcbiAgICBVc2VyLFxyXG4gICAgR3JvdXAsXHJcbiAgICBVc2VyR3JvdXBcclxuXTtcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShcclxuICAgIGRiQ29uZmlnLmRhdGFiYXNlLFxyXG4gICAgZGJDb25maWcudXNlcm5hbWUsXHJcbiAgICBkYkNvbmZpZy5wYXNzd29yZCxcclxuICAgIHtcclxuICAgICAgICBkZWZpbmU6IHtcclxuICAgICAgICAgICAgdGltZXN0YW1wczogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9ydDogZGJDb25maWcucG9ydCxcclxuICAgICAgICBkaWFsZWN0OiBkYkNvbmZpZy5kaWFsZWN0LFxyXG4gICAgICAgIGhvc3Q6IGRiQ29uZmlnLmhvc3QsXHJcbiAgICAgICAgZGlhbGVjdE9wdGlvbnM6IHsgc3NsOiB0cnVlIH0sXHJcbiAgICAgICAgcG9vbDogZGJDb25maWcucG9vbCxcclxuICAgICAgICBtb2RlbHM6IFsgLi4ubW9kZWxzIF1cclxuICAgIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBkYkNvbm5lY3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBzZXF1ZWxpemUuc3luYyh7IGZvcmNlOiB0cnVlIH0pO1xyXG4gICAgbG9nZ2VyLmluZm8oTE9HX01FU1NBR0VTLmNvbm5lY3Rpb25TdWNjZXNzKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9nZ2VyLmluZm8oJ0RhdGFiYXNlIHJlc3RvcmluZyBpbiBwcm9jZXNzLi4uJyk7XHJcbiAgICAgICAgYXdhaXQgVXNlci5idWxrQ3JlYXRlKHVzZXJzKTtcclxuICAgICAgICBhd2FpdCBHcm91cC5idWxrQ3JlYXRlKGdyb3Vwcyk7XHJcbiAgICAgICAgYXdhaXQgVXNlckdyb3VwLmJ1bGtDcmVhdGUodXNlckdyb3Vwcyk7XHJcbiAgICAgICAgbG9nZ2VyLmluZm8oJ0RhdGFiYXNlIHJlc3RvcmluZyBjb21wbGV0ZSEnKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBlO1xyXG4gICAgfVxyXG59O1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL2RhbC91c2VyREFMJztcclxuZXhwb3J0ICogZnJvbSAnLi9kYWwvZ3JvdXAuREFMJztcclxuZXhwb3J0ICogZnJvbSAnLi9kYWwvdXNlci1ncm91cC5EQUwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RiJztcclxuZXhwb3J0ICogZnJvbSAnLi91c2Vycy5wYXJzZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL3R5cGluZ3MnO1xyXG4iLCJpbXBvcnQgeyBVc2VyVG9SZXNwb25zZSwgVXNlclRvQWRkLCBVc2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90eXBpbmdzJztcclxuaW1wb3J0IHsgVXNlciBhcyBVc2VyTW9kZWwgfSBmcm9tICcuLy4uL21vZGVscy91c2VyLm1vZGVsJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyVG9SZXNwb25zZSA9ICh1c2VyOiBVc2VyKTogVXNlclRvUmVzcG9uc2UgPT4gKHtcclxuICAgIHVzZXJfaWQ6IHVzZXIudXNlcl9pZCxcclxuICAgIGxvZ2luOiB1c2VyLmxvZ2luLFxyXG4gICAgYWdlOiB1c2VyLmFnZVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2Vyc1RvUmVzcG9uc2UgPSAodXNlcnM6IFVzZXJbXSk6IFVzZXJUb1Jlc3BvbnNlW10gPT4gdXNlcnMubWFwKHVzZXIgPT4gdXNlclRvUmVzcG9uc2UodXNlcikpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJUb0RiID0gKHVzZXI6IFVzZXJUb0FkZCwgdXNlcl9pZDogc3RyaW5nKTogVXNlck1vZGVsID0+XHJcbiAgICBuZXcgVXNlck1vZGVsKHtcclxuICAgICAgICB1c2VyX2lkOiB1c2VyX2lkLFxyXG4gICAgICAgIGxvZ2luOiB1c2VyLmxvZ2luLFxyXG4gICAgICAgIGFnZTogdXNlci5hZ2UsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcclxuICAgIH0pO1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL3ZhbGlkYXRpb24uc2VydmlzZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcGFyc2Vycyc7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUxvZ2dlciwgdHJhbnNwb3J0cywgZm9ybWF0IH0gZnJvbSAnd2luc3RvbidcclxuaW1wb3J0IHsgVHJhbnNmb3JtYWJsZUluZm8gfSBmcm9tICdsb2dmb3JtJztcclxuXHJcbmNvbnN0IExPR19ESVJOQU1FID0gJ2xvZ3MnO1xyXG5cclxuY29uc3QgTE9HX0ZJTEVfTUFYX1NJWkU6IG51bWJlciA9IDUwMDA7XHJcblxyXG5jb25zdCB7IGNvbG9yaXplLCBjb21iaW5lLCBwcmludGYsIHRpbWVzdGFtcCB9ID0gZm9ybWF0O1xyXG5jb25zdCBmb3JtYXR0ZXIgPSBwcmludGYoKHsgbGV2ZWwsIG1lc3NhZ2UsIHRpbWVzdGFtcCB9OiBUcmFuc2Zvcm1hYmxlSW5mbyk6IHN0cmluZyA9PiBgJHsgdGltZXN0YW1wIH0gWyR7IGxldmVsIH1dOiAkeyBtZXNzYWdlIH1gKTtcclxuXHJcbmNvbnN0IGNvbnNvbGVUcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0cy5Db25zb2xlKHsgZm9ybWF0OiBjb21iaW5lKGNvbG9yaXplKCksIHRpbWVzdGFtcCgpLCBmb3JtYXR0ZXIpIH0pO1xyXG5jb25zdCBlcnJvclRyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRzLkZpbGUoeyBkaXJuYW1lOiBMT0dfRElSTkFNRSwgZmlsZW5hbWU6ICdlcnJvcnMubG9nJywgbGV2ZWw6ICdlcnJvcicsIG1heHNpemU6IExPR19GSUxFX01BWF9TSVpFIH0pO1xyXG5jb25zdCB3YXJuVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydHMuRmlsZSh7IGRpcm5hbWU6IExPR19ESVJOQU1FLCBmaWxlbmFtZTogJ3dhcm5pbmdzLmxvZycsIGxldmVsOiAnd2FybicsIG1heHNpemU6IExPR19GSUxFX01BWF9TSVpFIH0pO1xyXG5jb25zdCBpbmZvVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydHMuRmlsZSh7IGRpcm5hbWU6IExPR19ESVJOQU1FLCBmaWxlbmFtZTogJ2luZm8ubG9nJywgbGV2ZWw6ICdpbmZvJywgbWF4c2l6ZTogTE9HX0ZJTEVfTUFYX1NJWkUgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKHtcclxuICAgIGV4aXRPbkVycm9yOiBmYWxzZSxcclxuICAgIGZvcm1hdDogY29tYmluZSh0aW1lc3RhbXAoKSwgZm9ybWF0dGVyKSxcclxuICAgIHRyYW5zcG9ydHM6IFtcclxuICAgICAgICBjb25zb2xlVHJhbnNwb3J0LFxyXG4gICAgICAgIGVycm9yVHJhbnNwb3J0LFxyXG4gICAgICAgIGluZm9UcmFuc3BvcnQsXHJcbiAgICAgICAgd2FyblRyYW5zcG9ydFxyXG4gICAgXVxyXG59KTtcclxuIiwiaW1wb3J0IHsgR3JvdXAsIEdyb3VwVG9EYiwgVXNlciwgVXNlclRvQWRkLCBVc2VyVG9SZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcbmltcG9ydCB7IFVzZXIgYXMgVXNlck1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBHcm91cCBhcyBHcm91cE1vZGVsIH0gZnJvbSAnLi8uLi9tb2RlbHMvZ3JvdXAubW9kZWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyb3VwVG9SZXNwb25zZSA9IChncm91cDogR3JvdXApOiBHcm91cCA9PiAoe1xyXG4gICAgZ3JvdXBfaWQ6IGdyb3VwLmdyb3VwX2lkLFxyXG4gICAgbmFtZTogZ3JvdXAubmFtZSxcclxuICAgIHBlcm1pc3Npb25zOiBncm91cC5wZXJtaXNzaW9uc1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cHNUb1Jlc3BvbnNlID0gKGdyb3VwczogR3JvdXBbXSk6IEdyb3VwW10gPT4gZ3JvdXBzLm1hcChncm91cCA9PiBncm91cFRvUmVzcG9uc2UoZ3JvdXApKTtcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cFRvRGIgPSAoZ3JvdXA6IEdyb3VwVG9EYiwgZ3JvdXBfaWQ6IHN0cmluZykgPT5cclxuICAgIG5ldyBHcm91cE1vZGVsKHtcclxuICAgICAgICBncm91cF9pZDogZ3JvdXBfaWQsXHJcbiAgICAgICAgbmFtZTogZ3JvdXAubmFtZSxcclxuICAgICAgICBwZXJtaXNzaW9uczogZ3JvdXAucGVybWlzc2lvbnNcclxuICAgIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJUb1Jlc3BvbnNlID0gKHVzZXI6IFVzZXIpOiBVc2VyVG9SZXNwb25zZSA9PiAoe1xyXG4gICAgdXNlcl9pZDogdXNlci51c2VyX2lkLFxyXG4gICAgbG9naW46IHVzZXIubG9naW4sXHJcbiAgICBhZ2U6IHVzZXIuYWdlXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJzVG9SZXNwb25zZSA9ICh1c2VyczogVXNlcltdKTogVXNlclRvUmVzcG9uc2VbXSA9PiB1c2Vycy5tYXAodXNlciA9PiB1c2VyVG9SZXNwb25zZSh1c2VyKSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclRvRGIgPSAodXNlcjogVXNlclRvQWRkLCB1c2VyX2lkOiBzdHJpbmcpOiBVc2VyTW9kZWwgPT5cclxuICAgIG5ldyBVc2VyTW9kZWwoe1xyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJfaWQsXHJcbiAgICAgICAgbG9naW46IHVzZXIubG9naW4sXHJcbiAgICAgICAgYWdlOiB1c2VyLmFnZSxcclxuICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgfSk7XHJcbiIsImltcG9ydCAqIGFzIEpvaSBmcm9tICdAaGFwaS9qb2knO1xyXG5pbXBvcnQgeyBjcmVhdGVWYWxpZGF0b3IgfSBmcm9tICdleHByZXNzLWpvaS12YWxpZGF0aW9uJztcclxuXHJcbmNvbnN0IE1JTl9BR0UgPSA0O1xyXG5jb25zdCBNQVhfQUdFID0gMTMwO1xyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRvciA9IGNyZWF0ZVZhbGlkYXRvcigpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFVzZXJCb2R5U2NoZW1hID0gSm9pLm9iamVjdCh7XHJcbiAgICBsb2dpbjogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICBhZ2U6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLmdyZWF0ZXIoTUlOX0FHRSkubGVzcyhNQVhfQUdFKSxcclxuICAgIHBhc3N3b3JkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5hbHBoYW51bSgpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXJCb2R5U2NoZW1hID0gSm9pLm9iamVjdCh7XHJcbiAgICBsb2dpbjogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICBhZ2U6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLmdyZWF0ZXIoTUlOX0FHRSkubGVzcyhNQVhfQUdFKVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyUXVlcnlTY2hlbWEgPSBKb2kub2JqZWN0KHtcclxuICAgIHVzZXJfaWQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzY2hlbWE6ICduZXcnLFxyXG4gICAgdGFibGVzOiB7XHJcbiAgICAgICAgdXNlcnM6ICd1c2VycycsXHJcbiAgICAgICAgZ3JvdXBzOiAnZ3JvdXBzJyxcclxuICAgICAgICB1c2VyR3JvdXBzOiAndXNlci1ncm91cHMnXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWxsb3dOdWxsLCBCZWxvbmdzVG9NYW55LCBDb2x1bW4sIERhdGFUeXBlLCBNb2RlbCwgUHJpbWFyeUtleSwgVGFibGUsIFVuaXF1ZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgeyBVc2VyR3JvdXAgfSBmcm9tICcuL3VzZXItZ3JvdXAubW9kZWwnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyLm1vZGVsJztcclxuXHJcbmV4cG9ydCB0eXBlIFBlcm1pc3Npb25zVHlwZSA9ICdSRUFEJyB8ICdXUklURScgfCAnREVMRVRFJyB8ICdTSEFSRScgfCAnVVBMT0FEX0ZJTEVTJztcclxuXHJcbkBUYWJsZSh7XHJcbiAgICBzY2hlbWE6IGNvbmZpZy5zY2hlbWEsXHJcbiAgICB0YWJsZU5hbWU6IGNvbmZpZy50YWJsZXMuZ3JvdXBzLFxyXG4gICAgcGFyYW5vaWQ6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcm91cCBleHRlbmRzIE1vZGVsPEdyb3VwPiB7XHJcbiAgICBAQmVsb25nc1RvTWFueSgoKSA9PiBVc2VyLCAoKSA9PiBVc2VyR3JvdXApXHJcbiAgICB1c2VyczogVXNlcltdO1xyXG5cclxuICAgIC8vIGFkZFVzZXJzOiBCZWxvbmdzVG9NYW55QWRkQXNzb2NpYXRpb25zTWl4aW48VXNlciwgc3RyaW5nPjsgSnVzdCBhbiBleGFtcGxlIG9mIGFkZGluZyBtZXRob2RzIHRvIG1vZGVsXHJcblxyXG4gICAgQFByaW1hcnlLZXlcclxuICAgIEBVbmlxdWUodHJ1ZSlcclxuICAgIEBBbGxvd051bGwoZmFsc2UpXHJcbiAgICBAQ29sdW1uXHJcbiAgICBncm91cF9pZDogc3RyaW5nO1xyXG5cclxuICAgIEBDb2x1bW5cclxuICAgIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBAQ29sdW1uKERhdGFUeXBlLkFSUkFZKERhdGFUeXBlLlNUUklORykpXHJcbiAgICBwZXJtaXNzaW9uczogUGVybWlzc2lvbnNUeXBlW107XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi91c2VyLm1vZGVsJztcclxuZXhwb3J0ICogZnJvbSAnLi9ncm91cC5tb2RlbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdXNlci1ncm91cC5tb2RlbCc7XHJcbiIsImltcG9ydCB7IEF1dG9JbmNyZW1lbnQsIENvbHVtbiwgRm9yZWlnbktleSwgTW9kZWwsIFByaW1hcnlLZXksIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi9ncm91cC5tb2RlbCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXIubW9kZWwnO1xyXG5cclxuQFRhYmxlKHtcclxuICAgIHNjaGVtYTogY29uZmlnLnNjaGVtYSxcclxuICAgIHRhYmxlTmFtZTogY29uZmlnLnRhYmxlcy51c2VyR3JvdXBzLFxyXG4gICAgcGFyYW5vaWQ6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJHcm91cCBleHRlbmRzIE1vZGVsPFVzZXJHcm91cD4ge1xyXG4gICAgQFByaW1hcnlLZXlcclxuICAgIEBBdXRvSW5jcmVtZW50XHJcbiAgICBAQ29sdW1uXHJcbiAgICB1c2VyX2dyb3VwX2lkOiBudW1iZXI7XHJcblxyXG4gICAgQEZvcmVpZ25LZXkoKCkgPT4gR3JvdXApXHJcbiAgICBAQ29sdW1uXHJcbiAgICBncm91cF9pZDogc3RyaW5nO1xyXG5cclxuICAgIEBGb3JlaWduS2V5KCgpID0+IFVzZXIpXHJcbiAgICBAQ29sdW1uXHJcbiAgICB1c2VyX2lkOiBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29sdW1uLCBUYWJsZSwgTW9kZWwsIFByaW1hcnlLZXksIEFsbG93TnVsbCwgVW5pcXVlLCBEYXRhVHlwZSwgQmVsb25nc1RvTWFueSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4vZ3JvdXAubW9kZWwnO1xyXG5pbXBvcnQgeyBVc2VyR3JvdXAgfSBmcm9tICcuL3VzZXItZ3JvdXAubW9kZWwnO1xyXG5cclxuQFRhYmxlKHtcclxuICAgIHNjaGVtYTogY29uZmlnLnNjaGVtYSxcclxuICAgIHRhYmxlTmFtZTogY29uZmlnLnRhYmxlcy51c2VycyxcclxuICAgIHBhcmFub2lkOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgTW9kZWw8VXNlcj4ge1xyXG4gICAgQEJlbG9uZ3NUb01hbnkoKCkgPT4gR3JvdXAsICgpID0+IFVzZXJHcm91cClcclxuICAgIGdyb3VwczogR3JvdXBbXTtcclxuXHJcbiAgICBAUHJpbWFyeUtleVxyXG4gICAgQFVuaXF1ZSh0cnVlKVxyXG4gICAgQEFsbG93TnVsbChmYWxzZSlcclxuICAgIEBDb2x1bW4oRGF0YVR5cGUuU1RSSU5HKVxyXG4gICAgQENvbHVtblxyXG4gICAgdXNlcl9pZDogc3RyaW5nO1xyXG5cclxuICAgIEBBbGxvd051bGwoZmFsc2UpXHJcbiAgICBAVW5pcXVlKHRydWUpXHJcbiAgICBAQ29sdW1uXHJcbiAgICBsb2dpbjogc3RyaW5nO1xyXG5cclxuICAgIEBBbGxvd051bGwoZmFsc2UpXHJcbiAgICBAQ29sdW1uXHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuICAgIEBBbGxvd051bGwoZmFsc2UpXHJcbiAgICBAQ29sdW1uXHJcbiAgICBhZ2U6IG51bWJlcjtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgUk9VVEVTID0ge1xyXG4gICAgdXNlclJvdXRlczoge1xyXG4gICAgICAgIHJvb3Q6ICcvJyxcclxuICAgICAgICB1c2VyX2lkOiAnLzp1c2VyX2lkJyxcclxuICAgICAgICB1c2VyczogJy91c2VycydcclxuICAgIH0sXHJcbiAgICBncm91cFJvdXRlczoge1xyXG4gICAgICAgIHJvb3Q6ICcvJyxcclxuICAgICAgICBncm91cF9pZDogJy86Z3JvdXBfaWQnLFxyXG4gICAgICAgIGdyb3VwczogJy9ncm91cHMnXHJcbiAgICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IGdyb3VwQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzJztcclxuXHJcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IGdyb3VwUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuY29uc3Qgcm91dGVzID0gUk9VVEVTLmdyb3VwUm91dGVzO1xyXG5cclxuZ3JvdXBSb3V0ZXIucm91dGUocm91dGVzLnJvb3QpXHJcbiAgICAuZ2V0KGdyb3VwQ29udHJvbGxlci5nZXRHcm91cHMpXHJcbiAgICAucG9zdChncm91cENvbnRyb2xsZXIuYWRkR3JvdXApO1xyXG5cclxuZ3JvdXBSb3V0ZXIucm91dGUocm91dGVzLmdyb3VwX2lkKVxyXG4gICAgLmdldChncm91cENvbnRyb2xsZXIuZ2V0R3JvdXBCeUlkKVxyXG4gICAgLnB1dChncm91cENvbnRyb2xsZXIudXBkYXRlR3JvdXApXHJcbiAgICAuZGVsZXRlKGdyb3VwQ29udHJvbGxlci5kZWxldGVHcm91cCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBncm91cFJvdXRlcjtcclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCBncm91cFJvdXRlciBmcm9tICcuL2dyb3VwLXJvdXRlcic7XHJcbmltcG9ydCB1c2VyUm91dGVyIGZyb20gJy4vdXNlci1yb3V0ZXInO1xyXG5cclxuY29uc3Qgcm9vdFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbnJvb3RSb3V0ZXIudXNlKFJPVVRFUy51c2VyUm91dGVzLnVzZXJzLCB1c2VyUm91dGVyKTtcclxucm9vdFJvdXRlci51c2UoUk9VVEVTLmdyb3VwUm91dGVzLmdyb3VwcywgZ3JvdXBSb3V0ZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJvdXRlcjtcclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyB1c2Vyc0NvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVycyc7XHJcbmltcG9ydCB7IGFkZFVzZXJCb2R5U2NoZW1hLCB1cGRhdGVVc2VyQm9keVNjaGVtYSwgdXBkYXRlVXNlclF1ZXJ5U2NoZW1hLCB2YWxpZGF0b3IgfSBmcm9tICcuLi9taWRkbGV3YXJlcyc7XHJcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IHVzZXJSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5jb25zdCByb3V0ZXMgPSBST1VURVMudXNlclJvdXRlcztcclxuXHJcbnVzZXJSb3V0ZXIucm91dGUocm91dGVzLnJvb3QpXHJcbiAgICAuZ2V0KHVzZXJzQ29udHJvbGxlci5nZXRVc2VycylcclxuICAgIC5wb3N0KHZhbGlkYXRvci5ib2R5KGFkZFVzZXJCb2R5U2NoZW1hKSwgdXNlcnNDb250cm9sbGVyLmFkZFVzZXIpO1xyXG5cclxudXNlclJvdXRlci5yb3V0ZShyb3V0ZXMudXNlcl9pZClcclxuICAgIC5nZXQodXNlcnNDb250cm9sbGVyLmdldFVzZXJCeUlkKVxyXG4gICAgLnB1dCh2YWxpZGF0b3IucGFyYW1zKHVwZGF0ZVVzZXJRdWVyeVNjaGVtYSksIHZhbGlkYXRvci5ib2R5KHVwZGF0ZVVzZXJCb2R5U2NoZW1hKSwgdXNlcnNDb250cm9sbGVyLnVwZGF0ZVVzZXIpXHJcbiAgICAuZGVsZXRlKHVzZXJzQ29udHJvbGxlci5kZWxldGVVc2VyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJSb3V0ZXI7XHJcbiIsImltcG9ydCB1dWlkIGZyb20gJ3V1aWQnO1xyXG5cclxuaW1wb3J0IHsgZ3JvdXBEQUwsIFF1ZXJ5UGFyYW1zIH0gZnJvbSAnLi4vZGF0YS1hY2Nlc3MnO1xyXG5pbXBvcnQgeyBHcm91cCwgR3JvdXBUb0RiLCBHcm91cFRvVXBkYXRlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90eXBpbmdzJztcclxuaW1wb3J0IHsgZ3JvdXBUb0RiIH0gZnJvbSAnLi4vbWlkZGxld2FyZXMnO1xyXG5pbXBvcnQgeyB1c2Vyc0dyb3VwU2VydmljZSB9IGZyb20gJy4vdXNlcnMtZ3JvdXAuc2VydmlzZSc7XHJcblxyXG5jb25zdCBnZXRBbGxHcm91cHMgPSAocXVlcnk6IFF1ZXJ5UGFyYW1zKTogUHJvbWlzZTxHcm91cFtdPiA9PlxyXG4gICAgZ3JvdXBEQUwuZ2V0QWxsKHF1ZXJ5KTtcclxuXHJcbmNvbnN0IGdldEdyb3VwQnlJZCA9IChncm91cF9pZDogc3RyaW5nKTogUHJvbWlzZTxHcm91cD4gPT5cclxuICAgIGdyb3VwREFMLmdldEdyb3VwKGdyb3VwX2lkKTtcclxuXHJcbmNvbnN0IGFkZEdyb3VwID0gKG5ld0dyb3VwOiBHcm91cFRvRGIpOiBQcm9taXNlPHZvaWQ+ID0+XHJcbiAgICBncm91cERBTC5pbnNlcnRHcm91cChncm91cFRvRGIobmV3R3JvdXAsIHV1aWQudjEoKS50b1N0cmluZygpKSk7XHJcblxyXG5jb25zdCB1cGRhdGVHcm91cCA9IChncm91cF9pZDogc3RyaW5nLCBncm91cFRvVXBkYXRlOiBHcm91cFRvVXBkYXRlKTogUHJvbWlzZTx2b2lkPiA9PlxyXG4gICAgZ3JvdXBEQUwudXBkYXRlR3JvdXAoZ3JvdXBfaWQsIGdyb3VwVG9VcGRhdGUpO1xyXG5cclxuY29uc3QgZGVsZXRlR3JvdXAgPSAoZ3JvdXBfaWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT5cclxuICAgIGdyb3VwREFMLmRlbGV0ZUdyb3VwKGdyb3VwX2lkKTtcclxuXHJcbmNvbnN0IGFkZFVzZXJzVG9Hcm91cCA9IHVzZXJzR3JvdXBTZXJ2aWNlLmFkZFVzZXJzVG9Hcm91cDtcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cFNlcnZpY2UgPSB7XHJcbiAgICBnZXRBbGxHcm91cHMsXHJcbiAgICBnZXRHcm91cEJ5SWQsXHJcbiAgICBhZGRHcm91cCxcclxuICAgIHVwZGF0ZUdyb3VwLFxyXG4gICAgZGVsZXRlR3JvdXAsXHJcbiAgICBhZGRVc2Vyc1RvR3JvdXBcclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi91c2VyLnNlcnZpc2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2dyb3VwLnNlcnZpc2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3VzZXJzLWdyb3VwLnNlcnZpc2UnO1xyXG4iLCJpbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgdXNlckRBTCwgdXNlclRvRGIgfSBmcm9tICcuLi9kYXRhLWFjY2Vzcyc7XHJcblxyXG5pbXBvcnQgeyBVc2VyVG9BZGQsIFVzZXJUb1Jlc3BvbnNlLCBVc2VyVG9VcGRhdGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3R5cGluZ3MnO1xyXG5cclxuY29uc3QgZ2V0QWxsVXNlcnMgPSAocXVlcnk6IHsgbG9naW4/OiBzdHJpbmcsIGxpbWl0Pzogc3RyaW5nLCBvZmZzZXQ/OiBzdHJpbmcgfSk6IFByb21pc2U8VXNlclRvUmVzcG9uc2VbXT4gPT4gdXNlckRBTC5nZXRBbGwocXVlcnkpO1xyXG5cclxuY29uc3QgZ2V0VXNlckJ5SWQgPSAodXNlcl9pZDogc3RyaW5nKTogUHJvbWlzZTxVc2VyVG9SZXNwb25zZT4gPT4gdXNlckRBTC5nZXRVc2VyKHVzZXJfaWQpO1xyXG5cclxuY29uc3QgYWRkVXNlciA9IChuZXdVc2VyOiBVc2VyVG9BZGQpOiBQcm9taXNlPHZvaWQ+ID0+IHVzZXJEQUwuaW5zZXJ0VXNlcih1c2VyVG9EYihuZXdVc2VyLCB1dWlkLnYxKCkudG9TdHJpbmcoKSkpO1xyXG5cclxuY29uc3QgdXBkYXRlVXNlciA9ICh1c2VyX2lkOiBzdHJpbmcsIHVzZXJUb1VwZGF0ZTogVXNlclRvVXBkYXRlKTogUHJvbWlzZTx2b2lkPiA9PiB1c2VyREFMLnVwZGF0ZVVzZXIodXNlcl9pZCwgdXNlclRvVXBkYXRlKTtcclxuXHJcbmNvbnN0IGRlbGV0ZVVzZXIgPSAodXNlcl9pZDogc3RyaW5nKSA9PiB1c2VyREFMLmRlbGV0ZVVzZXIodXNlcl9pZCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclNlcnZpY2UgPSB7XHJcbiAgICBnZXRBbGxVc2VycyxcclxuICAgIGdldFVzZXJCeUlkLFxyXG4gICAgYWRkVXNlcixcclxuICAgIHVwZGF0ZVVzZXIsXHJcbiAgICBkZWxldGVVc2VyXHJcbn07XHJcbiIsImltcG9ydCB7IHVzZXJzR3JvdXBEQUwgfSBmcm9tICcuLi9kYXRhLWFjY2Vzcy9kYWwvdXNlci1ncm91cC5EQUwnO1xyXG5cclxuY29uc3QgYWRkVXNlcnNUb0dyb3VwID0gYXN5bmMgKGdyb3VwX2lkOiBzdHJpbmcsIHVzZXJfaWRzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiA9PlxyXG4gICAgYXdhaXQgdXNlcnNHcm91cERBTC5hZGRVc2Vyc1RvR3JvdXAoZ3JvdXBfaWQsIHVzZXJfaWRzKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2Vyc0dyb3VwU2VydmljZSA9IHsgYWRkVXNlcnNUb0dyb3VwIH07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBoYXBpL2pvaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtam9pLXZhbGlkYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cC1lcnJvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2luc3RvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9