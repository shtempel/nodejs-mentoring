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

/***/ "./src/controllers/error.helper.ts":
/*!*****************************************!*\
  !*** ./src/controllers/error.helper.ts ***!
  \*****************************************/
/*! exports provided: requestHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestHelper", function() { return requestHelper; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const requestHelper = (fn, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fn();
        return data
            ? response.send({ data, status: 'success' })
            : response.send({ status: 'success' });
    }
    catch (error) {
        response.status(error.status || 500).send({ error: { message: error.message } });
    }
});


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
/* harmony import */ var _error_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.helper */ "./src/controllers/error.helper.ts");


const getGroups = (request, response) => {
    console.log('here');
    return Object(_error_helper__WEBPACK_IMPORTED_MODULE_1__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_0__["groupService"].getAllGroups(request.query), response);
};
const getGroupById = (request, response) => Object(_error_helper__WEBPACK_IMPORTED_MODULE_1__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_0__["groupService"].getGroupById(request.params.group_id), response);
const addGroup = (request, response) => Object(_error_helper__WEBPACK_IMPORTED_MODULE_1__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_0__["groupService"].addGroup(request.body), response);
const updateGroup = (request, response) => Object(_error_helper__WEBPACK_IMPORTED_MODULE_1__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_0__["groupService"].updateGroup(request.params.group_id, request.body), response);
const deleteGroup = (request, response) => Object(_error_helper__WEBPACK_IMPORTED_MODULE_1__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_0__["groupService"].deleteGroup(request.params.group_id), response);
const groupController = {
    getGroups,
    getGroupById,
    addGroup,
    updateGroup,
    deleteGroup
};


/***/ }),

/***/ "./src/controllers/index.ts":
/*!**********************************!*\
  !*** ./src/controllers/index.ts ***!
  \**********************************/
/*! exports provided: usersController, groupController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _users_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.controller */ "./src/controllers/users.controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usersController", function() { return _users_controller__WEBPACK_IMPORTED_MODULE_0__["usersController"]; });

/* harmony import */ var _group_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group.controller */ "./src/controllers/group.controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupController", function() { return _group_controller__WEBPACK_IMPORTED_MODULE_1__["groupController"]; });





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
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-errors */ "http-errors");
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/services/index.ts");
/* harmony import */ var _error_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.helper */ "./src/controllers/error.helper.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const getUsers = (request, response) => __awaiter(void 0, void 0, void 0, function* () { return Object(_error_helper__WEBPACK_IMPORTED_MODULE_3__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_2__["userService"].getAllUsers(request.query), response); });
const getUserById = (request, response) => __awaiter(void 0, void 0, void 0, function* () { return Object(_error_helper__WEBPACK_IMPORTED_MODULE_3__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_2__["userService"].getUserById(request.params.user_id), response); });
const addUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () { return Object(_error_helper__WEBPACK_IMPORTED_MODULE_3__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_2__["userService"].addUser(request.body), response); });
const updateUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () { return Object(_error_helper__WEBPACK_IMPORTED_MODULE_3__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_2__["userService"].updateUser(request.params.user_id, request.body), response); });
const deleteUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () { return Object(_error_helper__WEBPACK_IMPORTED_MODULE_3__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_2__["userService"].deleteUser(request.params.user_id), response); });
const notAllowed = (request, response) => {
    let err = http_errors__WEBPACK_IMPORTED_MODULE_0___default()(405, _constants__WEBPACK_IMPORTED_MODULE_1__["ERRORS"].methodNotAllowed);
    response.status(err.status).send({ status: err.status, message: err.message });
};
const usersController = {
    getUsers,
    deleteUser,
    updateUser,
    getUserById,
    addUser,
    notAllowed
};


/***/ }),

/***/ "./src/data-access/backup.ts":
/*!***********************************!*\
  !*** ./src/data-access/backup.ts ***!
  \***********************************/
/*! exports provided: groups, users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groups", function() { return groups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

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
const users = [
    {
        user_id: 'blablabla',
        login: "AnakinSkywalker",
        password: "anakinpass",
        age: 32
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "MaceWindu",
        password: "macepass",
        age: 72
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "C-3PO",
        password: "c3p0pass",
        age: 32
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "LukeSkywalker",
        password: "lukepass",
        age: 23
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "DarthMaul",
        password: "darthpass",
        age: 44
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "QuiGonJinn",
        password: "quipass",
        age: 80
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "ObiWanKenobi",
        password: "obipass",
        age: 47
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "Palpatine",
        password: "palpatinepass",
        age: 82
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "Yoda",
        password: "yodapass",
        age: 130
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "Snoke",
        password: "snokepass",
        age: 53
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "BobaFett",
        password: "bobapass",
        age: 36
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "Chewbacca",
        password: "chewbaccapass",
        age: 130
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "HanSolo",
        password: "hanpass",
        age: 66
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "KyloRen",
        password: "kylopass",
        age: 30
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "LeiaOrgana",
        password: "leiapass",
        age: 53
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "PadmeAmidala",
        password: "padmepass",
        age: 27
    },
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "CountDooku",
        password: "dokoopass",
        age: 102
    }
];


/***/ }),

/***/ "./src/data-access/db.ts":
/*!*******************************!*\
  !*** ./src/data-access/db.ts ***!
  \*******************************/
/*! exports provided: dbConnect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbConnect", function() { return dbConnect; });
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middlewares_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middlewares/logger */ "./src/middlewares/logger.ts");
/* harmony import */ var _models_group_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/group.model */ "./src/models/group.model.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user.model */ "./src/models/user.model.ts");
/* harmony import */ var _backup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./backup */ "./src/data-access/backup.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../config/config */ "./config/config.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const sequelize = new sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Sequelize"](_config_config__WEBPACK_IMPORTED_MODULE_7__["default"].database, _config_config__WEBPACK_IMPORTED_MODULE_7__["default"].username, _config_config__WEBPACK_IMPORTED_MODULE_7__["default"].password, {
    define: {
        timestamps: true
    },
    port: _config_config__WEBPACK_IMPORTED_MODULE_7__["default"].port,
    dialect: _config_config__WEBPACK_IMPORTED_MODULE_7__["default"].dialect,
    host: _config_config__WEBPACK_IMPORTED_MODULE_7__["default"].host,
    dialectOptions: { ssl: true },
    pool: _config_config__WEBPACK_IMPORTED_MODULE_7__["default"].pool,
    models: [..._models__WEBPACK_IMPORTED_MODULE_6__["models"]]
});
const dbConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    yield sequelize.sync({ force: true });
    _middlewares_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].info(_constants__WEBPACK_IMPORTED_MODULE_5__["LOG_MESSAGES"].connectionSuccess);
    try {
        yield _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"].bulkCreate(_backup__WEBPACK_IMPORTED_MODULE_4__["users"]);
        yield _models_group_model__WEBPACK_IMPORTED_MODULE_2__["Group"].bulkCreate(_backup__WEBPACK_IMPORTED_MODULE_4__["groups"]);
        _middlewares_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].info('Database restoring complete!');
    }
    catch (e) {
        throw e;
    }
    // return sequelize
    //     .sync({ force: true })
    //     .then(() => console.log(LOG_MESSAGES.connectionSuccess))
    //     .then(() => users.forEach(user => userToDb(user, user.user_id).save()))
    //     .catch(error => console.error(LOG_MESSAGES.connectionFailed, error));
});


/***/ }),

/***/ "./src/data-access/group.DAL.ts":
/*!**************************************!*\
  !*** ./src/data-access/group.DAL.ts ***!
  \**************************************/
/*! exports provided: groupDAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupDAL", function() { return groupDAL; });
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-errors */ "http-errors");
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _middlewares_parsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares/parsers */ "./src/middlewares/parsers.ts");
/* harmony import */ var _models_group_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/group.model */ "./src/models/group.model.ts");
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

/***/ "./src/data-access/index.ts":
/*!**********************************!*\
  !*** ./src/data-access/index.ts ***!
  \**********************************/
/*! exports provided: userDAL, dbConnect, userToResponse, usersToResponse, userToDb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userDAL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userDAL */ "./src/data-access/userDAL.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userDAL", function() { return _userDAL__WEBPACK_IMPORTED_MODULE_0__["userDAL"]; });

/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ "./src/data-access/db.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dbConnect", function() { return _db__WEBPACK_IMPORTED_MODULE_1__["dbConnect"]; });

/* harmony import */ var _users_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.parser */ "./src/data-access/users.parser.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userToResponse", function() { return _users_parser__WEBPACK_IMPORTED_MODULE_2__["userToResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usersToResponse", function() { return _users_parser__WEBPACK_IMPORTED_MODULE_2__["usersToResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userToDb", function() { return _users_parser__WEBPACK_IMPORTED_MODULE_2__["userToDb"]; });






/***/ }),

/***/ "./src/data-access/userDAL.ts":
/*!************************************!*\
  !*** ./src/data-access/userDAL.ts ***!
  \************************************/
/*! exports provided: userDAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userDAL", function() { return userDAL; });
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-errors */ "http-errors");
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _users_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.parser */ "./src/data-access/users.parser.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../models/user.model */ "./src/models/user.model.ts");
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
/*! exports provided: validator, addUserBodySchema, updateUserBodySchema, updateUserQuerySchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validation_servise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation.servise */ "./src/middlewares/validation.servise.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validator", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_0__["validator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addUserBodySchema", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_0__["addUserBodySchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateUserBodySchema", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_0__["updateUserBodySchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateUserQuerySchema", function() { return _validation_servise__WEBPACK_IMPORTED_MODULE_0__["updateUserQuerySchema"]; });




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
        schema: 'new',
        tableName: 'groups',
        paranoid: false
    })
], Group);



/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/*! exports provided: models */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "models", function() { return models; });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ "./src/models/user.model.ts");
/* harmony import */ var _group_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group.model */ "./src/models/group.model.ts");


const models = [
    _user_model__WEBPACK_IMPORTED_MODULE_0__["User"],
    _group_model__WEBPACK_IMPORTED_MODULE_1__["Group"]
];


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
    sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["PrimaryKey"],
    Object(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Unique"])(true),
    Object(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["AllowNull"])(false),
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
        schema: 'new',
        tableName: 'users',
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
    .post(_middlewares__WEBPACK_IMPORTED_MODULE_2__["validator"].body(_middlewares__WEBPACK_IMPORTED_MODULE_2__["addUserBodySchema"]), _controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].addUser)
    .all(_controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].notAllowed);
userRouter.route(routes.user_id)
    .get(_controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].getUserById)
    .put(_middlewares__WEBPACK_IMPORTED_MODULE_2__["validator"].params(_middlewares__WEBPACK_IMPORTED_MODULE_2__["updateUserQuerySchema"]), _middlewares__WEBPACK_IMPORTED_MODULE_2__["validator"].body(_middlewares__WEBPACK_IMPORTED_MODULE_2__["updateUserBodySchema"]), _controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].updateUser)
    .delete(_controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].deleteUser)
    .all(_controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].notAllowed);
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
/* harmony import */ var _data_access_group_DAL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-access/group.DAL */ "./src/data-access/group.DAL.ts");
/* harmony import */ var _middlewares_parsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares/parsers */ "./src/middlewares/parsers.ts");



const getAllGroups = (query) => _data_access_group_DAL__WEBPACK_IMPORTED_MODULE_1__["groupDAL"].getAll(query);
const getGroupById = (group_id) => _data_access_group_DAL__WEBPACK_IMPORTED_MODULE_1__["groupDAL"].getGroup(group_id);
const addGroup = (newGroup) => _data_access_group_DAL__WEBPACK_IMPORTED_MODULE_1__["groupDAL"].insertGroup(Object(_middlewares_parsers__WEBPACK_IMPORTED_MODULE_2__["groupToDb"])(newGroup, uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString()));
const updateGroup = (group_id, groupToUpdate) => _data_access_group_DAL__WEBPACK_IMPORTED_MODULE_1__["groupDAL"].updateGroup(group_id, groupToUpdate);
const deleteGroup = (group_id) => _data_access_group_DAL__WEBPACK_IMPORTED_MODULE_1__["groupDAL"].deleteGroup(group_id);
const groupService = {
    getAllGroups,
    getGroupById,
    addGroup,
    updateGroup,
    deleteGroup
};


/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/*! exports provided: userService, groupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_servise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.servise */ "./src/services/user.servise.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userService", function() { return _user_servise__WEBPACK_IMPORTED_MODULE_0__["userService"]; });

/* harmony import */ var _group_servise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group.servise */ "./src/services/group.servise.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupService", function() { return _group_servise__WEBPACK_IMPORTED_MODULE_1__["groupService"]; });





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2Vycm9yLmhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvZ3JvdXAuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL3VzZXJzLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtYWNjZXNzL2JhY2t1cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1hY2Nlc3MvZGIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtYWNjZXNzL2dyb3VwLkRBTC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1hY2Nlc3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtYWNjZXNzL3VzZXJEQUwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtYWNjZXNzL3VzZXJzLnBhcnNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pZGRsZXdhcmVzL2xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvcGFyc2Vycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvdmFsaWRhdGlvbi5zZXJ2aXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvZ3JvdXAubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3VzZXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9ncm91cC1yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3VzZXItcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9ncm91cC5zZXJ2aXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdXNlci5zZXJ2aXNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBoYXBpL2pvaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLWpvaS12YWxpZGF0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cC1lcnJvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemUtdHlwZXNjcmlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV1aWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5zdG9uXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlD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Q0FBQyxvREFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUVySSxNQUFNLFdBQVcsR0FBRyxDQUFDLE9BQWUsRUFBMkIsRUFBRSxDQUFDLG9EQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTNGLE1BQU0sT0FBTyxHQUFHLENBQUMsT0FBa0IsRUFBaUIsRUFBRSxDQUFDLG9EQUFPLENBQUMsVUFBVSxDQUFDLDZEQUFRLENBQUMsT0FBTyxFQUFFLDJDQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRW5ILE1BQU0sVUFBVSxHQUFHLENBQUMsT0FBZSxFQUFFLFlBQTBCLEVBQWlCLEVBQUUsQ0FBQyxvREFBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFFN0gsTUFBTSxVQUFVLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRSxDQUFDLG9EQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTdELE1BQU0sV0FBVyxHQUFHO0lBQ3ZCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsT0FBTztJQUNQLFVBQVU7SUFDVixVQUFVO0NBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7O0FDckJGLHNDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InNlcnZlci1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAudHNcIik7XG4iLCJpbXBvcnQgeyBEaWFsZWN0IH0gZnJvbSAnc2VxdWVsaXplJztcclxuXHJcbmNvbnN0IGRpYWxlY3Q6IERpYWxlY3QgPSAncG9zdGdyZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGlhbGVjdDogZGlhbGVjdCxcclxuICAgIGhvc3Q6IFwiZWMyLTU0LTI0Ni0xMDAtMjQ2LmV1LXdlc3QtMS5jb21wdXRlLmFtYXpvbmF3cy5jb21cIixcclxuICAgIHBvcnQ6IDU0MzIsXHJcbiAgICBkYXRhYmFzZTogXCJkM292czBraGo4MmEzaFwiLFxyXG4gICAgdXNlcm5hbWU6IFwieGRkcXZyZnp3ZHdlY3JcIixcclxuICAgIHBhc3N3b3JkOiBcIjNmNDFiNTA0N2NkZGJiNTI2MWQwN2UyYTZlODJlYjNmNjQ1MWRlOGIzODg1ZTAxY2Y2MTM2YWY1OTU0ZDdhMzdcIixcclxuICAgIHBvb2w6IHtcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgbWF4OiA1LFxyXG4gICAgICAgIGFjcXVpcmU6IDMwMDAwLFxyXG4gICAgICAgIGlkbGU6IDEwMDAwXHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCBleHByZXNzLCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBMT0dfTUVTU0FHRVMsIFBPUlQgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGRiQ29ubmVjdCB9IGZyb20gJy4vZGF0YS1hY2Nlc3MnO1xyXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL21pZGRsZXdhcmVzL2xvZ2dlcic7XHJcbmltcG9ydCByb290Um91dGVyIGZyb20gJy4vcm91dGVzJztcclxuXHJcbmNvbnN0IGFwcDogQXBwbGljYXRpb24gPSBleHByZXNzKCk7XHJcblxyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuYXBwLnVzZShyb290Um91dGVyKTtcclxuXHJcbmFwcC5saXN0ZW4oUE9SVCwgYXN5bmMgKCkgPT4ge1xyXG4gICAgbG9nZ2VyLmluZm8oYCR7IExPR19NRVNTQUdFUy5wb3J0TGlzdGVuaW5nIH0gJHsgUE9SVCB9YCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJleHBvcnQgY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNDAwMTtcclxuXHJcbmV4cG9ydCBjb25zdCBFUlJPUlMgPSB7XHJcbiAgICB1c2VyTm90Rm91bmQ6ICdVc2VyIG5vdCBGb3VuZCEnLFxyXG4gICAgbWV0aG9kTm90QWxsb3dlZDogJ01ldGhvZCBub3QgYWxsb3dlZCBoZXJlIScsXHJcbiAgICB1c2VyRXhpc3Q6ICdUaGlzIGxvZ2luIG5hbWUgYWxyZWFkeSBleGlzdCEnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX01FU1NBR0VTID0ge1xyXG4gICAgY29ubmVjdGlvblN1Y2Nlc3M6ICdDb25uZWN0aW9uIGhhcyBiZWVuIGVzdGFibGlzaGVkIHN1Y2Nlc3NmdWxseSEnLFxyXG4gICAgY29ubmVjdGlvbkZhaWxlZDogJ1VuYWJsZSB0byBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZTonLFxyXG4gICAgcG9ydExpc3RlbmluZzogJ0xpc3RlbmluZyBvbiBwb3J0J1xyXG59O1xyXG4iLCJpbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RIZWxwZXIgPSBhc3luYyAoZm46IGFueSwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmbigpO1xyXG4gICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgICAgICAgID8gcmVzcG9uc2Uuc2VuZCh7IGRhdGEsIHN0YXR1czogJ3N1Y2Nlc3MnIH0pXHJcbiAgICAgICAgICAgIDogcmVzcG9uc2Uuc2VuZCh7IHN0YXR1czogJ3N1Y2Nlc3MnIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXNwb25zZS5zdGF0dXMoZXJyb3Iuc3RhdHVzIHx8IDUwMCkuc2VuZCh7IGVycm9yOiB7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSB9KTtcclxuICAgIH1cclxufTtcclxuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgZ3JvdXBTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5cclxuaW1wb3J0IHsgcmVxdWVzdEhlbHBlciB9IGZyb20gJy4vZXJyb3IuaGVscGVyJztcclxuXHJcbmNvbnN0IGdldEdyb3VwcyA9IChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdoZXJlJyk7XHJcbiAgICByZXR1cm4gcmVxdWVzdEhlbHBlcigoKSA9PiBncm91cFNlcnZpY2UuZ2V0QWxsR3JvdXBzKHJlcXVlc3QucXVlcnkpLCByZXNwb25zZSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRHcm91cEJ5SWQgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiBncm91cFNlcnZpY2UuZ2V0R3JvdXBCeUlkKHJlcXVlc3QucGFyYW1zLmdyb3VwX2lkKSwgcmVzcG9uc2UpO1xyXG5cclxuY29uc3QgYWRkR3JvdXAgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiBncm91cFNlcnZpY2UuYWRkR3JvdXAocmVxdWVzdC5ib2R5KSwgcmVzcG9uc2UpO1xyXG5cclxuY29uc3QgdXBkYXRlR3JvdXAgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiBncm91cFNlcnZpY2UudXBkYXRlR3JvdXAocmVxdWVzdC5wYXJhbXMuZ3JvdXBfaWQsIHJlcXVlc3QuYm9keSksIHJlc3BvbnNlKTtcclxuXHJcbmNvbnN0IGRlbGV0ZUdyb3VwID0gKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVxdWVzdEhlbHBlcigoKSA9PlxyXG4gICAgZ3JvdXBTZXJ2aWNlLmRlbGV0ZUdyb3VwKHJlcXVlc3QucGFyYW1zLmdyb3VwX2lkKSwgcmVzcG9uc2UpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBncm91cENvbnRyb2xsZXIgPSB7XHJcbiAgICBnZXRHcm91cHMsXHJcbiAgICBnZXRHcm91cEJ5SWQsXHJcbiAgICBhZGRHcm91cCxcclxuICAgIHVwZGF0ZUdyb3VwLFxyXG4gICAgZGVsZXRlR3JvdXBcclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi91c2Vycy5jb250cm9sbGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9ncm91cC5jb250cm9sbGVyJztcclxuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGNyZWF0ZUVycm9yLCB7IEh0dHBFcnJvciB9IGZyb20gJ2h0dHAtZXJyb3JzJztcclxuXHJcbmltcG9ydCB7IEVSUk9SUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IHVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQgeyByZXF1ZXN0SGVscGVyIH0gZnJvbSAnLi9lcnJvci5oZWxwZXInO1xyXG5cclxuY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiB1c2VyU2VydmljZS5nZXRBbGxVc2VycyhyZXF1ZXN0LnF1ZXJ5KSwgcmVzcG9uc2UpO1xyXG5cclxuY29uc3QgZ2V0VXNlckJ5SWQgPSBhc3luYyAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiB1c2VyU2VydmljZS5nZXRVc2VyQnlJZChyZXF1ZXN0LnBhcmFtcy51c2VyX2lkKSwgcmVzcG9uc2UpO1xyXG5cclxuY29uc3QgYWRkVXNlciA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJTZXJ2aWNlLmFkZFVzZXIocmVxdWVzdC5ib2R5KSwgcmVzcG9uc2UpO1xyXG5cclxuY29uc3QgdXBkYXRlVXNlciA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJTZXJ2aWNlLnVwZGF0ZVVzZXIocmVxdWVzdC5wYXJhbXMudXNlcl9pZCwgcmVxdWVzdC5ib2R5KSwgcmVzcG9uc2UpO1xyXG5cclxuY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJTZXJ2aWNlLmRlbGV0ZVVzZXIocmVxdWVzdC5wYXJhbXMudXNlcl9pZCksIHJlc3BvbnNlKTtcclxuXHJcbmNvbnN0IG5vdEFsbG93ZWQgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICBsZXQgZXJyOiBIdHRwRXJyb3IgPSBjcmVhdGVFcnJvcig0MDUsIEVSUk9SUy5tZXRob2ROb3RBbGxvd2VkKTtcclxuXHJcbiAgICByZXNwb25zZS5zdGF0dXMoZXJyLnN0YXR1cykuc2VuZCh7IHN0YXR1czogZXJyLnN0YXR1cywgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlcnNDb250cm9sbGVyID0ge1xyXG4gICAgZ2V0VXNlcnMsXHJcbiAgICBkZWxldGVVc2VyLFxyXG4gICAgdXBkYXRlVXNlcixcclxuICAgIGdldFVzZXJCeUlkLFxyXG4gICAgYWRkVXNlcixcclxuICAgIG5vdEFsbG93ZWRcclxufTtcclxuIiwiaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90eXBpbmdzJztcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cHM6IHsgZ3JvdXBfaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBwZXJtaXNzaW9uczogYW55W10gfVtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIGdyb3VwX2lkOiAnbGlnaHRfc2lkZScsXHJcbiAgICAgICAgbmFtZTogJ2xpZ2h0X3NpZGUnLFxyXG4gICAgICAgIHBlcm1pc3Npb25zOiBbICdXUklURScsICdERUxFVEUnIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZ3JvdXBfaWQ6ICdkYXJrX3NpZGUnLFxyXG4gICAgICAgIG5hbWU6ICdkYXJrX3NpZGUnLFxyXG4gICAgICAgIHBlcm1pc3Npb25zOiBbICdXUklURScsICdSRUFEJyBdXHJcbiAgICB9XHJcbl07XHJcbmV4cG9ydCBjb25zdCB1c2VyczogVXNlcltdID0gW1xyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6ICdibGFibGFibGEnLFxyXG4gICAgICAgIGxvZ2luOiBcIkFuYWtpblNreXdhbGtlclwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcImFuYWtpbnBhc3NcIixcclxuICAgICAgICBhZ2U6IDMyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiBcIk1hY2VXaW5kdVwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIm1hY2VwYXNzXCIsXHJcbiAgICAgICAgYWdlOiA3MlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJDLTNQT1wiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcImMzcDBwYXNzXCIsXHJcbiAgICAgICAgYWdlOiAzMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJMdWtlU2t5d2Fsa2VyXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwibHVrZXBhc3NcIixcclxuICAgICAgICBhZ2U6IDIzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiBcIkRhcnRoTWF1bFwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcImRhcnRocGFzc1wiLFxyXG4gICAgICAgIGFnZTogNDRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46IFwiUXVpR29uSmlublwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcInF1aXBhc3NcIixcclxuICAgICAgICBhZ2U6IDgwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiBcIk9iaVdhbktlbm9iaVwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIm9iaXBhc3NcIixcclxuICAgICAgICBhZ2U6IDQ3XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiBcIlBhbHBhdGluZVwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcInBhbHBhdGluZXBhc3NcIixcclxuICAgICAgICBhZ2U6IDgyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiBcIllvZGFcIixcclxuICAgICAgICBwYXNzd29yZDogXCJ5b2RhcGFzc1wiLFxyXG4gICAgICAgIGFnZTogMTMwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiBcIlNub2tlXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwic25va2VwYXNzXCIsXHJcbiAgICAgICAgYWdlOiA1M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJCb2JhRmV0dFwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcImJvYmFwYXNzXCIsXHJcbiAgICAgICAgYWdlOiAzNlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJDaGV3YmFjY2FcIixcclxuICAgICAgICBwYXNzd29yZDogXCJjaGV3YmFjY2FwYXNzXCIsXHJcbiAgICAgICAgYWdlOiAxMzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46IFwiSGFuU29sb1wiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcImhhbnBhc3NcIixcclxuICAgICAgICBhZ2U6IDY2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiBcIkt5bG9SZW5cIixcclxuICAgICAgICBwYXNzd29yZDogXCJreWxvcGFzc1wiLFxyXG4gICAgICAgIGFnZTogMzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46IFwiTGVpYU9yZ2FuYVwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcImxlaWFwYXNzXCIsXHJcbiAgICAgICAgYWdlOiA1M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJQYWRtZUFtaWRhbGFcIixcclxuICAgICAgICBwYXNzd29yZDogXCJwYWRtZXBhc3NcIixcclxuICAgICAgICBhZ2U6IDI3XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiBcIkNvdW50RG9va3VcIixcclxuICAgICAgICBwYXNzd29yZDogXCJkb2tvb3Bhc3NcIixcclxuICAgICAgICBhZ2U6IDEwMlxyXG4gICAgfVxyXG5dO1xyXG4iLCJpbXBvcnQgeyBTZXF1ZWxpemUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XHJcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uL21pZGRsZXdhcmVzL2xvZ2dlcic7XHJcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi4vbW9kZWxzL2dyb3VwLm1vZGVsJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVscy91c2VyLm1vZGVsJztcclxuXHJcbmltcG9ydCB7IHVzZXJzLCBncm91cHMgfSBmcm9tICcuL2JhY2t1cCc7XHJcbmltcG9ydCB7IExPR19NRVNTQUdFUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IG1vZGVscyB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCBkYkNvbmZpZyBmcm9tICcuLy4uLy4uL2NvbmZpZy9jb25maWcnO1xyXG5cclxuY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShcclxuICAgIGRiQ29uZmlnLmRhdGFiYXNlLFxyXG4gICAgZGJDb25maWcudXNlcm5hbWUsXHJcbiAgICBkYkNvbmZpZy5wYXNzd29yZCxcclxuICAgIHtcclxuICAgICAgICBkZWZpbmU6IHtcclxuICAgICAgICAgICAgdGltZXN0YW1wczogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9ydDogZGJDb25maWcucG9ydCxcclxuICAgICAgICBkaWFsZWN0OiBkYkNvbmZpZy5kaWFsZWN0LFxyXG4gICAgICAgIGhvc3Q6IGRiQ29uZmlnLmhvc3QsXHJcbiAgICAgICAgZGlhbGVjdE9wdGlvbnM6IHsgc3NsOiB0cnVlIH0sXHJcbiAgICAgICAgcG9vbDogZGJDb25maWcucG9vbCxcclxuICAgICAgICBtb2RlbHM6IFsgLi4ubW9kZWxzIF1cclxuICAgIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBkYkNvbm5lY3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBzZXF1ZWxpemUuc3luYyh7IGZvcmNlOiB0cnVlIH0pO1xyXG4gICAgbG9nZ2VyLmluZm8oTE9HX01FU1NBR0VTLmNvbm5lY3Rpb25TdWNjZXNzKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgVXNlci5idWxrQ3JlYXRlKHVzZXJzKTtcclxuICAgICAgICBhd2FpdCBHcm91cC5idWxrQ3JlYXRlKGdyb3Vwcyk7XHJcbiAgICAgICAgbG9nZ2VyLmluZm8oJ0RhdGFiYXNlIHJlc3RvcmluZyBjb21wbGV0ZSEnKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgZTtcclxuICAgIH1cclxuICAgIC8vIHJldHVybiBzZXF1ZWxpemVcclxuICAgIC8vICAgICAuc3luYyh7IGZvcmNlOiB0cnVlIH0pXHJcbiAgICAvLyAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coTE9HX01FU1NBR0VTLmNvbm5lY3Rpb25TdWNjZXNzKSlcclxuICAgIC8vICAgICAudGhlbigoKSA9PiB1c2Vycy5mb3JFYWNoKHVzZXIgPT4gdXNlclRvRGIodXNlciwgdXNlci51c2VyX2lkKS5zYXZlKCkpKVxyXG4gICAgLy8gICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKExPR19NRVNTQUdFUy5jb25uZWN0aW9uRmFpbGVkLCBlcnJvcikpO1xyXG59O1xyXG4iLCJpbXBvcnQgY3JlYXRlRXJyb3IgZnJvbSAnaHR0cC1lcnJvcnMnO1xyXG5pbXBvcnQgeyBPcCwgV2hlcmVPcHRpb25zIH0gZnJvbSAnc2VxdWVsaXplJztcclxuaW1wb3J0IHsgZ3JvdXBzVG9SZXNwb25zZSwgZ3JvdXBUb1Jlc3BvbnNlIH0gZnJvbSAnLi4vbWlkZGxld2FyZXMvcGFyc2Vycyc7XHJcblxyXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uL21vZGVscy9ncm91cC5tb2RlbCc7XHJcblxyXG5cclxuY29uc3QgRU5USVRZX05BTUU6IHN0cmluZyA9ICdncm91cCc7XHJcbmNvbnN0IERFRkFVTFRfT0ZGU0VUOiBudW1iZXIgPSAwO1xyXG5jb25zdCBERUZBVUxUX0xJTUlUOiBudW1iZXIgPSAxMDtcclxuXHJcbmNvbnN0IGdldEFsbCA9IGFzeW5jIChwYXJhbXM6IGFueSk6IFByb21pc2U8YW55W10+ID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgb2Zmc2V0UGFyYW0sIGxpbWl0UGFyYW0gfSA9IHBhcmFtcztcclxuICAgIGNvbnN0IG9mZnNldDogbnVtYmVyID0gb2Zmc2V0UGFyYW0gJiYgcGFyc2VJbnQob2Zmc2V0UGFyYW0sIDEwKSB8fCBERUZBVUxUX09GRlNFVDtcclxuICAgIGNvbnN0IGxpbWl0OiBudW1iZXIgPSBsaW1pdFBhcmFtICYmIHBhcnNlSW50KGxpbWl0UGFyYW0sIDEwKSArIG9mZnNldCB8fCBERUZBVUxUX0xJTUlUO1xyXG4gICAgY29uc3Qgd2hlcmU6IFdoZXJlT3B0aW9ucyA9IG5hbWUgPyB7IG5hbWU6IHsgWyBPcC5pTGlrZSBdOiBgJSR7IG5hbWUgfSVgIH0gfSA6IHt9O1xyXG4gICAgY29uc3QgZ3JvdXBzID0gYXdhaXQgR3JvdXAuZmluZEFsbCh7IG9mZnNldDogb2Zmc2V0LCBsaW1pdDogbGltaXQsIHdoZXJlIH0pO1xyXG5cclxuICAgIHJldHVybiBncm91cHNUb1Jlc3BvbnNlKGdyb3Vwcyk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRHcm91cCA9IGFzeW5jIChncm91cF9pZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IGdyb3VwID0gYXdhaXQgR3JvdXAuZmluZE9uZSh7IHdoZXJlOiB7IGdyb3VwX2lkOiBncm91cF9pZCB9IH0pO1xyXG5cclxuICAgIGlmICggIWdyb3VwICkgdGhyb3cgY3JlYXRlRXJyb3IoNDA0LCB7IG1lc3NhZ2U6IGAkeyBFTlRJVFlfTkFNRSB9IEVSUk9SUy5ub3RGb3VuZGAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGdyb3VwVG9SZXNwb25zZShncm91cCk7XHJcbn07XHJcblxyXG5jb25zdCBpbnNlcnRHcm91cCA9IGFzeW5jIChncm91cE1vZGVsOiBHcm91cCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc3QgZ3JvdXAgPSBhd2FpdCBHcm91cC5maW5kT25lKHsgd2hlcmU6IHsgbmFtZTogZ3JvdXBNb2RlbC5uYW1lIH0gfSk7XHJcblxyXG4gICAgaWYgKCBncm91cCApIHRocm93IGNyZWF0ZUVycm9yKDQwMCwgeyBtZXNzYWdlOiBgJHsgRU5USVRZX05BTUUgfSBFUlJPUlMuZXhpc3RgIH0pO1xyXG5cclxuICAgIGdyb3VwTW9kZWwuc2F2ZSgpO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlR3JvdXAgPSBhc3luYyAoZ3JvdXBfaWQ6IHN0cmluZywgZ3JvdXBUb1VwZGF0ZTogYW55KTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBjb25zdCBncm91cCA9IGF3YWl0IEdyb3VwLmZpbmRPbmUoeyB3aGVyZTogeyBncm91cF9pZDogZ3JvdXBfaWQgfSB9KTtcclxuXHJcbiAgICBpZiAoICFncm91cCApIHRocm93IGNyZWF0ZUVycm9yKDQwNCwgeyBtZXNzYWdlOiBgJHsgRU5USVRZX05BTUUgfSBFUlJPUlMubm90Rm91bmQgYCB9KTtcclxuXHJcbiAgICBncm91cC5uYW1lID0gZ3JvdXBUb1VwZGF0ZS5uYW1lO1xyXG4gICAgZ3JvdXAucGVybWlzc2lvbnMgPSBncm91cFRvVXBkYXRlLnBlcm1pc3Npb25zO1xyXG5cclxuICAgIGdyb3VwLnNhdmUoKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZUdyb3VwID0gYXN5bmMgKGdyb3VwX2lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnN0IGdyb3VwID0gYXdhaXQgR3JvdXAuZmluZE9uZSh7IHdoZXJlOiB7IGdyb3VwX2lkOiBncm91cF9pZCB9IH0pO1xyXG5cclxuICAgIGlmICggIWdyb3VwICkgdGhyb3cgY3JlYXRlRXJyb3IoNDA0LCB7IG1lc3NhZ2U6IGAkeyBFTlRJVFlfTkFNRSB9IEVSUk9SUy5ub3RGb3VuZGAgfSk7XHJcblxyXG4gICAgZ3JvdXAuZGVzdHJveSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyb3VwREFMID0ge1xyXG4gICAgZ2V0QWxsLFxyXG4gICAgZ2V0R3JvdXAsXHJcbiAgICBpbnNlcnRHcm91cCxcclxuICAgIHVwZGF0ZUdyb3VwLFxyXG4gICAgZGVsZXRlR3JvdXBcclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi91c2VyREFMJztcclxuZXhwb3J0ICogZnJvbSAnLi9kYic7XHJcbmV4cG9ydCAqIGZyb20gJy4vdXNlcnMucGFyc2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi90eXBpbmdzJztcclxuIiwiaW1wb3J0IGNyZWF0ZUVycm9yIGZyb20gJ2h0dHAtZXJyb3JzJztcclxuaW1wb3J0IHsgV2hlcmVPcHRpb25zLCBPcCB9IGZyb20gJ3NlcXVlbGl6ZSc7XHJcblxyXG5pbXBvcnQgeyBFUlJPUlMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBVc2VyVG9SZXNwb25zZSwgVXNlclRvVXBkYXRlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90eXBpbmdzJztcclxuaW1wb3J0IHsgUXVlcnlQYXJhbXMgfSBmcm9tICcuL3R5cGluZ3MnO1xyXG5pbXBvcnQgeyB1c2Vyc1RvUmVzcG9uc2UsIHVzZXJUb1Jlc3BvbnNlIH0gZnJvbSAnLi91c2Vycy5wYXJzZXInO1xyXG5pbXBvcnQgeyBVc2VyIGFzIFVzZXJNb2RlbCB9IGZyb20gJy4vLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xyXG5cclxuY29uc3QgREVGQVVMVF9PRkZTRVQ6IG51bWJlciA9IDA7XHJcbmNvbnN0IERFRkFVTFRfTElNSVQ6IG51bWJlciA9IDIwO1xyXG5cclxuY29uc3QgZ2V0QWxsID0gYXN5bmMgKHBhcmFtczogUXVlcnlQYXJhbXMpOiBQcm9taXNlPFVzZXJUb1Jlc3BvbnNlW10+ID0+IHtcclxuICAgIGNvbnN0IHsgbG9naW4sIG9mZnNldFBhcmFtLCBsaW1pdFBhcmFtIH0gPSBwYXJhbXM7XHJcbiAgICBjb25zdCBvZmZzZXQ6IG51bWJlciA9IG9mZnNldFBhcmFtICYmIHBhcnNlSW50KG9mZnNldFBhcmFtLCAxMCkgfHwgREVGQVVMVF9PRkZTRVQ7XHJcbiAgICBjb25zdCBsaW1pdDogbnVtYmVyID0gbGltaXRQYXJhbSAmJiBwYXJzZUludChsaW1pdFBhcmFtLCAxMCkgKyBvZmZzZXQgfHwgREVGQVVMVF9MSU1JVDtcclxuICAgIGNvbnN0IHdoZXJlOiBXaGVyZU9wdGlvbnMgPSBsb2dpbiA/IHsgbG9naW5uYW1lOiB7IFsgT3AuaUxpa2UgXTogYCUkeyBsb2dpbiB9JWAgfSB9IDoge307XHJcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IFVzZXJNb2RlbC5maW5kQWxsKHsgb2Zmc2V0OiBvZmZzZXQsIGxpbWl0OiBsaW1pdCwgd2hlcmUgfSk7XHJcblxyXG4gICAgcmV0dXJuIHVzZXJzVG9SZXNwb25zZSh1c2Vycyk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRVc2VyID0gYXN5bmMgKHVzZXJfaWQ6IHN0cmluZyk6IFByb21pc2U8VXNlclRvUmVzcG9uc2U+ID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IHdoZXJlOiB7IHVzZXJfaWQ6IHVzZXJfaWQgfSB9KTtcclxuXHJcbiAgICBpZiAoICF1c2VyICkgdGhyb3cgY3JlYXRlRXJyb3IoNDA0LCB7IG1lc3NhZ2U6IEVSUk9SUy51c2VyTm90Rm91bmQgfSk7XHJcblxyXG4gICAgcmV0dXJuIHVzZXJUb1Jlc3BvbnNlKHVzZXIpO1xyXG59O1xyXG5cclxuY29uc3QgaW5zZXJ0VXNlciA9IGFzeW5jICh1c2VyTW9kZWw6IFVzZXJNb2RlbCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kT25lKHsgd2hlcmU6IHsgbG9naW46IHVzZXJNb2RlbC5sb2dpbiB9IH0pO1xyXG5cclxuICAgIGlmICggdXNlciApIHRocm93IGNyZWF0ZUVycm9yKDQwMCwgeyBtZXNzYWdlOiBFUlJPUlMudXNlckV4aXN0IH0pO1xyXG5cclxuICAgIHVzZXJNb2RlbC5zYXZlKCk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKHVzZXJfaWQ6IHN0cmluZywgdXNlclRvVXBkYXRlOiBVc2VyVG9VcGRhdGUpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IHdoZXJlOiB7IHVzZXJfaWQ6IHVzZXJfaWQgfSB9KTtcclxuXHJcbiAgICBpZiAoICF1c2VyICkgdGhyb3cgY3JlYXRlRXJyb3IoNDA0LCB7IG1lc3NhZ2U6IEVSUk9SUy51c2VyTm90Rm91bmQgfSk7XHJcblxyXG4gICAgdXNlci5sb2dpbiA9IHVzZXJUb1VwZGF0ZS5sb2dpbjtcclxuICAgIHVzZXIuYWdlID0gdXNlclRvVXBkYXRlLmFnZTtcclxuXHJcbiAgICB1c2VyLnNhdmUoKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAodXNlcl9pZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoeyB3aGVyZTogeyB1c2VyX2lkOiB1c2VyX2lkIH0gfSk7XHJcblxyXG4gICAgaWYgKCAhdXNlciApIHRocm93IGNyZWF0ZUVycm9yKDQwNCwgeyBtZXNzYWdlOiBFUlJPUlMudXNlck5vdEZvdW5kIH0pO1xyXG5cclxuICAgIHVzZXIuZGVzdHJveSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJEQUwgPSB7XHJcbiAgICBnZXRBbGwsXHJcbiAgICBnZXRVc2VyLFxyXG4gICAgaW5zZXJ0VXNlcixcclxuICAgIHVwZGF0ZVVzZXIsXHJcbiAgICBkZWxldGVVc2VyXHJcbn07XHJcbiIsImltcG9ydCB7IFVzZXJUb1Jlc3BvbnNlLCBVc2VyVG9BZGQsIFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3R5cGluZ3MnO1xyXG5pbXBvcnQgeyBVc2VyIGFzIFVzZXJNb2RlbCB9IGZyb20gJy4vLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJUb1Jlc3BvbnNlID0gKHVzZXI6IFVzZXIpOiBVc2VyVG9SZXNwb25zZSA9PiAoe1xyXG4gICAgdXNlcl9pZDogdXNlci51c2VyX2lkLFxyXG4gICAgbG9naW46IHVzZXIubG9naW4sXHJcbiAgICBhZ2U6IHVzZXIuYWdlXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJzVG9SZXNwb25zZSA9ICh1c2VyczogVXNlcltdKTogVXNlclRvUmVzcG9uc2VbXSA9PiB1c2Vycy5tYXAodXNlciA9PiB1c2VyVG9SZXNwb25zZSh1c2VyKSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclRvRGIgPSAodXNlcjogVXNlclRvQWRkLCB1c2VyX2lkOiBzdHJpbmcpOiBVc2VyTW9kZWwgPT5cclxuICAgIG5ldyBVc2VyTW9kZWwoe1xyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJfaWQsXHJcbiAgICAgICAgbG9naW46IHVzZXIubG9naW4sXHJcbiAgICAgICAgYWdlOiB1c2VyLmFnZSxcclxuICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgfSk7XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vdmFsaWRhdGlvbi5zZXJ2aXNlJztcclxuIiwiaW1wb3J0IHsgY3JlYXRlTG9nZ2VyLCB0cmFuc3BvcnRzLCBmb3JtYXQgfSBmcm9tICd3aW5zdG9uJ1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm1hYmxlSW5mbyB9IGZyb20gJ2xvZ2Zvcm0nO1xyXG5cclxuY29uc3QgTE9HX0RJUk5BTUUgPSAnbG9ncyc7XHJcblxyXG5jb25zdCBMT0dfRklMRV9NQVhfU0laRTogbnVtYmVyID0gNTAwMDtcclxuXHJcbmNvbnN0IHsgY29sb3JpemUsIGNvbWJpbmUsIHByaW50ZiwgdGltZXN0YW1wIH0gPSBmb3JtYXQ7XHJcbmNvbnN0IGZvcm1hdHRlciA9IHByaW50ZigoeyBsZXZlbCwgbWVzc2FnZSwgdGltZXN0YW1wIH06IFRyYW5zZm9ybWFibGVJbmZvKTogc3RyaW5nID0+IGAkeyB0aW1lc3RhbXAgfSBbJHsgbGV2ZWwgfV06ICR7IG1lc3NhZ2UgfWApO1xyXG5cclxuY29uc3QgY29uc29sZVRyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRzLkNvbnNvbGUoeyBmb3JtYXQ6IGNvbWJpbmUoY29sb3JpemUoKSwgdGltZXN0YW1wKCksIGZvcm1hdHRlcikgfSk7XHJcbmNvbnN0IGVycm9yVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydHMuRmlsZSh7IGRpcm5hbWU6IExPR19ESVJOQU1FLCBmaWxlbmFtZTogJ2Vycm9ycy5sb2cnLCBsZXZlbDogJ2Vycm9yJywgbWF4c2l6ZTogTE9HX0ZJTEVfTUFYX1NJWkUgfSk7XHJcbmNvbnN0IHdhcm5UcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0cy5GaWxlKHsgZGlybmFtZTogTE9HX0RJUk5BTUUsIGZpbGVuYW1lOiAnd2FybmluZ3MubG9nJywgbGV2ZWw6ICd3YXJuJywgbWF4c2l6ZTogTE9HX0ZJTEVfTUFYX1NJWkUgfSk7XHJcbmNvbnN0IGluZm9UcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0cy5GaWxlKHsgZGlybmFtZTogTE9HX0RJUk5BTUUsIGZpbGVuYW1lOiAnaW5mby5sb2cnLCBsZXZlbDogJ2luZm8nLCBtYXhzaXplOiBMT0dfRklMRV9NQVhfU0laRSB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dnZXIgPSBjcmVhdGVMb2dnZXIoe1xyXG4gICAgZXhpdE9uRXJyb3I6IGZhbHNlLFxyXG4gICAgZm9ybWF0OiBjb21iaW5lKHRpbWVzdGFtcCgpLCBmb3JtYXR0ZXIpLFxyXG4gICAgdHJhbnNwb3J0czogW1xyXG4gICAgICAgIGNvbnNvbGVUcmFuc3BvcnQsXHJcbiAgICAgICAgZXJyb3JUcmFuc3BvcnQsXHJcbiAgICAgICAgaW5mb1RyYW5zcG9ydCxcclxuICAgICAgICB3YXJuVHJhbnNwb3J0XHJcbiAgICBdXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBVc2VyLCBVc2VyVG9BZGQsIFVzZXJUb1Jlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90eXBpbmdzJztcclxuaW1wb3J0IHsgVXNlciBhcyBVc2VyTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvdXNlci5tb2RlbCc7XHJcbmltcG9ydCB7IEdyb3VwIGFzIEdyb3VwTW9kZWwgfSBmcm9tICcuLy4uL21vZGVscy9ncm91cC5tb2RlbCc7XHJcblxyXG5leHBvcnQgY29uc3QgZ3JvdXBUb1Jlc3BvbnNlID0gKGdyb3VwOiBhbnkpOiBhbnkgPT4gKHtcclxuICAgIGdyb3VwX2lkOiBncm91cC5ncm91cF9pZCxcclxuICAgIG5hbWU6IGdyb3VwLm5hbWUsXHJcbiAgICBwZXJtaXNzaW9uczogZ3JvdXAucGVybWlzc2lvbnNcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ3JvdXBzVG9SZXNwb25zZSA9IChncm91cHM6IGFueVtdKTogYW55W10gPT4gZ3JvdXBzLm1hcChncm91cCA9PiBncm91cFRvUmVzcG9uc2UoZ3JvdXApKTtcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cFRvRGIgPSAoZ3JvdXA6IGFueSwgZ3JvdXBfaWQ6IHN0cmluZykgPT5cclxuICAgIG5ldyBHcm91cE1vZGVsKHtcclxuICAgICAgICBncm91cF9pZDogZ3JvdXBfaWQsXHJcbiAgICAgICAgbmFtZTogZ3JvdXAubmFtZSxcclxuICAgICAgICBwZXJtaXNzaW9uczogZ3JvdXAucGVybWlzc2lvbnNcclxuICAgIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJUb1Jlc3BvbnNlID0gKHVzZXI6IFVzZXIpOiBVc2VyVG9SZXNwb25zZSA9PiAoe1xyXG4gICAgdXNlcl9pZDogdXNlci51c2VyX2lkLFxyXG4gICAgbG9naW46IHVzZXIubG9naW4sXHJcbiAgICBhZ2U6IHVzZXIuYWdlXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJzVG9SZXNwb25zZSA9ICh1c2VyczogVXNlcltdKTogVXNlclRvUmVzcG9uc2VbXSA9PiB1c2Vycy5tYXAodXNlciA9PiB1c2VyVG9SZXNwb25zZSh1c2VyKSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclRvRGIgPSAodXNlcjogVXNlclRvQWRkLCB1c2VyX2lkOiBzdHJpbmcpOiBVc2VyTW9kZWwgPT5cclxuICAgIG5ldyBVc2VyTW9kZWwoe1xyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJfaWQsXHJcbiAgICAgICAgbG9naW46IHVzZXIubG9naW4sXHJcbiAgICAgICAgYWdlOiB1c2VyLmFnZSxcclxuICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgfSk7XHJcbiIsImltcG9ydCAqIGFzIEpvaSBmcm9tICdAaGFwaS9qb2knO1xyXG5pbXBvcnQgeyBjcmVhdGVWYWxpZGF0b3IgfSBmcm9tICdleHByZXNzLWpvaS12YWxpZGF0aW9uJztcclxuXHJcbmNvbnN0IE1JTl9BR0UgPSA0O1xyXG5jb25zdCBNQVhfQUdFID0gMTMwO1xyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRvciA9IGNyZWF0ZVZhbGlkYXRvcigpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFVzZXJCb2R5U2NoZW1hID0gSm9pLm9iamVjdCh7XHJcbiAgICBsb2dpbjogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICBhZ2U6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLmdyZWF0ZXIoTUlOX0FHRSkubGVzcyhNQVhfQUdFKSxcclxuICAgIHBhc3N3b3JkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5hbHBoYW51bSgpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXJCb2R5U2NoZW1hID0gSm9pLm9iamVjdCh7XHJcbiAgICBsb2dpbjogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICBhZ2U6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLmdyZWF0ZXIoTUlOX0FHRSkubGVzcyhNQVhfQUdFKVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyUXVlcnlTY2hlbWEgPSBKb2kub2JqZWN0KHtcclxuICAgIHVzZXJfaWQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBBbGxvd051bGwsIEJlbG9uZ3NUb01hbnksIENvbHVtbiwgRGF0YVR5cGUsIE1vZGVsLCBQcmltYXJ5S2V5LCBUYWJsZSwgVW5pcXVlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xyXG5cclxuZXhwb3J0IHR5cGUgUGVybWlzc2lvbnNUeXBlID0gJ1JFQUQnIHwgJ1dSSVRFJyB8ICdERUxFVEUnIHwgJ1NIQVJFJyB8ICdVUExPQURfRklMRVMnO1xyXG5cclxuQFRhYmxlKHtcclxuICAgIHNjaGVtYTogJ25ldycsXHJcbiAgICB0YWJsZU5hbWU6ICdncm91cHMnLFxyXG4gICAgcGFyYW5vaWQ6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcm91cCBleHRlbmRzIE1vZGVsPEdyb3VwPiB7XHJcbiAgICAvLyBAQmVsb25nc1RvTWFueSgoKSA9PiBVc2VyLCAoKSA9PiBVc2VyR3JvdXApXHJcbiAgICAvLyB1c2VyczogVXNlcltdO1xyXG5cclxuICAgIC8vIGFkZFVzZXJzOiBCZWxvbmdzVG9NYW55QWRkQXNzb2NpYXRpb25zTWl4aW48VXNlciwgc3RyaW5nPjsgSnVzdCBhbiBleGFtcGxlIG9mIGFkZGluZyBtZXRob2RzIHRvIG1vZGVsXHJcblxyXG4gICAgQFByaW1hcnlLZXlcclxuICAgIEBVbmlxdWUodHJ1ZSlcclxuICAgIEBBbGxvd051bGwoZmFsc2UpXHJcbiAgICBAQ29sdW1uXHJcbiAgICBncm91cF9pZDogc3RyaW5nO1xyXG5cclxuICAgIEBDb2x1bW5cclxuICAgIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBAQ29sdW1uKERhdGFUeXBlLkFSUkFZKERhdGFUeXBlLlNUUklORykpXHJcbiAgICBwZXJtaXNzaW9uczogUGVybWlzc2lvbnNUeXBlW107XHJcbn1cclxuIiwiaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlci5tb2RlbCc7XHJcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi9ncm91cC5tb2RlbCc7XHJcblxyXG5leHBvcnQgY29uc3QgbW9kZWxzID0gW1xyXG4gICAgVXNlcixcclxuICAgIEdyb3VwXHJcbl07XHJcbiIsImltcG9ydCB7IENvbHVtbiwgVGFibGUsIE1vZGVsLCBQcmltYXJ5S2V5LCBBbGxvd051bGwsIFVuaXF1ZSwgRGF0YVR5cGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XHJcblxyXG5AVGFibGUoe1xyXG4gICAgc2NoZW1hOiAnbmV3JyxcclxuICAgIHRhYmxlTmFtZTogJ3VzZXJzJyxcclxuICAgIHBhcmFub2lkOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgTW9kZWw8VXNlcj4ge1xyXG4gICAgQFByaW1hcnlLZXlcclxuICAgIEBVbmlxdWUodHJ1ZSlcclxuICAgIEBBbGxvd051bGwoZmFsc2UpXHJcbiAgICBAQ29sdW1uXHJcbiAgICB1c2VyX2lkOiBzdHJpbmc7XHJcblxyXG4gICAgQEFsbG93TnVsbChmYWxzZSlcclxuICAgIEBVbmlxdWUodHJ1ZSlcclxuICAgIEBDb2x1bW5cclxuICAgIGxvZ2luOiBzdHJpbmc7XHJcblxyXG4gICAgQEFsbG93TnVsbChmYWxzZSlcclxuICAgIEBDb2x1bW5cclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcblxyXG4gICAgQEFsbG93TnVsbChmYWxzZSlcclxuICAgIEBDb2x1bW5cclxuICAgIGFnZTogbnVtYmVyO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBST1VURVMgPSB7XHJcbiAgICB1c2VyUm91dGVzOiB7XHJcbiAgICAgICAgcm9vdDogJy8nLFxyXG4gICAgICAgIHVzZXJfaWQ6ICcvOnVzZXJfaWQnLFxyXG4gICAgICAgIHVzZXJzOiAnL3VzZXJzJ1xyXG4gICAgfSxcclxuICAgIGdyb3VwUm91dGVzOiB7XHJcbiAgICAgICAgcm9vdDogJy8nLFxyXG4gICAgICAgIGdyb3VwX2lkOiAnLzpncm91cF9pZCcsXHJcbiAgICAgICAgZ3JvdXBzOiAnL2dyb3VwcydcclxuICAgIH0sXHJcbn07XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgZ3JvdXBDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMnO1xyXG5cclxuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgZ3JvdXBSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5jb25zdCByb3V0ZXMgPSBST1VURVMuZ3JvdXBSb3V0ZXM7XHJcblxyXG5ncm91cFJvdXRlci5yb3V0ZShyb3V0ZXMucm9vdClcclxuICAgIC5nZXQoZ3JvdXBDb250cm9sbGVyLmdldEdyb3VwcylcclxuICAgIC5wb3N0KGdyb3VwQ29udHJvbGxlci5hZGRHcm91cCk7XHJcblxyXG5ncm91cFJvdXRlci5yb3V0ZShyb3V0ZXMuZ3JvdXBfaWQpXHJcbiAgICAuZ2V0KGdyb3VwQ29udHJvbGxlci5nZXRHcm91cEJ5SWQpXHJcbiAgICAucHV0KGdyb3VwQ29udHJvbGxlci51cGRhdGVHcm91cClcclxuICAgIC5kZWxldGUoZ3JvdXBDb250cm9sbGVyLmRlbGV0ZUdyb3VwKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdyb3VwUm91dGVyO1xyXG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IGdyb3VwUm91dGVyIGZyb20gJy4vZ3JvdXAtcm91dGVyJztcclxuaW1wb3J0IHVzZXJSb3V0ZXIgZnJvbSAnLi91c2VyLXJvdXRlcic7XHJcblxyXG5jb25zdCByb290Um91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxucm9vdFJvdXRlci51c2UoUk9VVEVTLnVzZXJSb3V0ZXMudXNlcnMsIHVzZXJSb3V0ZXIpO1xyXG5yb290Um91dGVyLnVzZShST1VURVMuZ3JvdXBSb3V0ZXMuZ3JvdXBzLCBncm91cFJvdXRlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290Um91dGVyO1xyXG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IHVzZXJzQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzJztcclxuaW1wb3J0IHsgYWRkVXNlckJvZHlTY2hlbWEsIHVwZGF0ZVVzZXJCb2R5U2NoZW1hLCB1cGRhdGVVc2VyUXVlcnlTY2hlbWEsIHZhbGlkYXRvciB9IGZyb20gJy4uL21pZGRsZXdhcmVzJztcclxuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgdXNlclJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbmNvbnN0IHJvdXRlcyA9IFJPVVRFUy51c2VyUm91dGVzO1xyXG5cclxudXNlclJvdXRlci5yb3V0ZShyb3V0ZXMucm9vdClcclxuICAgIC5nZXQodXNlcnNDb250cm9sbGVyLmdldFVzZXJzKVxyXG4gICAgLnBvc3QodmFsaWRhdG9yLmJvZHkoYWRkVXNlckJvZHlTY2hlbWEpLCB1c2Vyc0NvbnRyb2xsZXIuYWRkVXNlcilcclxuICAgIC5hbGwodXNlcnNDb250cm9sbGVyLm5vdEFsbG93ZWQpO1xyXG5cclxudXNlclJvdXRlci5yb3V0ZShyb3V0ZXMudXNlcl9pZClcclxuICAgIC5nZXQodXNlcnNDb250cm9sbGVyLmdldFVzZXJCeUlkKVxyXG4gICAgLnB1dCh2YWxpZGF0b3IucGFyYW1zKHVwZGF0ZVVzZXJRdWVyeVNjaGVtYSksIHZhbGlkYXRvci5ib2R5KHVwZGF0ZVVzZXJCb2R5U2NoZW1hKSwgdXNlcnNDb250cm9sbGVyLnVwZGF0ZVVzZXIpXHJcbiAgICAuZGVsZXRlKHVzZXJzQ29udHJvbGxlci5kZWxldGVVc2VyKVxyXG4gICAgLmFsbCh1c2Vyc0NvbnRyb2xsZXIubm90QWxsb3dlZCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyUm91dGVyO1xyXG4iLCJpbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcclxuXHJcbmltcG9ydCB7IFF1ZXJ5UGFyYW1zIH0gZnJvbSAnLi4vZGF0YS1hY2Nlc3MnO1xyXG5pbXBvcnQgeyBncm91cERBTCB9IGZyb20gJy4uL2RhdGEtYWNjZXNzL2dyb3VwLkRBTCc7XHJcbmltcG9ydCB7IGdyb3VwVG9EYiB9IGZyb20gJy4uL21pZGRsZXdhcmVzL3BhcnNlcnMnO1xyXG5cclxuXHJcbmNvbnN0IGdldEFsbEdyb3VwcyA9IChxdWVyeTogUXVlcnlQYXJhbXMpOiBQcm9taXNlPGFueVtdPiA9PlxyXG4gICAgZ3JvdXBEQUwuZ2V0QWxsKHF1ZXJ5KTtcclxuXHJcbmNvbnN0IGdldEdyb3VwQnlJZCA9IChncm91cF9pZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+ID0+XHJcbiAgICBncm91cERBTC5nZXRHcm91cChncm91cF9pZCk7XHJcblxyXG5jb25zdCBhZGRHcm91cCA9IChuZXdHcm91cDogYW55KTogUHJvbWlzZTx2b2lkPiA9PlxyXG4gICAgZ3JvdXBEQUwuaW5zZXJ0R3JvdXAoZ3JvdXBUb0RiKG5ld0dyb3VwLCB1dWlkLnYxKCkudG9TdHJpbmcoKSkpO1xyXG5cclxuY29uc3QgdXBkYXRlR3JvdXAgPSAoZ3JvdXBfaWQ6IHN0cmluZywgZ3JvdXBUb1VwZGF0ZTogYW55KTogUHJvbWlzZTx2b2lkPiA9PlxyXG4gICAgZ3JvdXBEQUwudXBkYXRlR3JvdXAoZ3JvdXBfaWQsIGdyb3VwVG9VcGRhdGUpO1xyXG5cclxuY29uc3QgZGVsZXRlR3JvdXAgPSAoZ3JvdXBfaWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT5cclxuICAgIGdyb3VwREFMLmRlbGV0ZUdyb3VwKGdyb3VwX2lkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cFNlcnZpY2UgPSB7XHJcbiAgICBnZXRBbGxHcm91cHMsXHJcbiAgICBnZXRHcm91cEJ5SWQsXHJcbiAgICBhZGRHcm91cCxcclxuICAgIHVwZGF0ZUdyb3VwLFxyXG4gICAgZGVsZXRlR3JvdXBcclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi91c2VyLnNlcnZpc2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2dyb3VwLnNlcnZpc2UnO1xyXG4iLCJpbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgdXNlckRBTCwgdXNlclRvRGIgfSBmcm9tICcuLi9kYXRhLWFjY2Vzcyc7XHJcblxyXG5pbXBvcnQgeyBVc2VyVG9BZGQsIFVzZXJUb1Jlc3BvbnNlLCBVc2VyVG9VcGRhdGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3R5cGluZ3MnO1xyXG5cclxuY29uc3QgZ2V0QWxsVXNlcnMgPSAocXVlcnk6IHsgbG9naW4/OiBzdHJpbmcsIGxpbWl0Pzogc3RyaW5nLCBvZmZzZXQ/OiBzdHJpbmcgfSk6IFByb21pc2U8VXNlclRvUmVzcG9uc2VbXT4gPT4gdXNlckRBTC5nZXRBbGwocXVlcnkpO1xyXG5cclxuY29uc3QgZ2V0VXNlckJ5SWQgPSAodXNlcl9pZDogc3RyaW5nKTogUHJvbWlzZTxVc2VyVG9SZXNwb25zZT4gPT4gdXNlckRBTC5nZXRVc2VyKHVzZXJfaWQpO1xyXG5cclxuY29uc3QgYWRkVXNlciA9IChuZXdVc2VyOiBVc2VyVG9BZGQpOiBQcm9taXNlPHZvaWQ+ID0+IHVzZXJEQUwuaW5zZXJ0VXNlcih1c2VyVG9EYihuZXdVc2VyLCB1dWlkLnYxKCkudG9TdHJpbmcoKSkpO1xyXG5cclxuY29uc3QgdXBkYXRlVXNlciA9ICh1c2VyX2lkOiBzdHJpbmcsIHVzZXJUb1VwZGF0ZTogVXNlclRvVXBkYXRlKTogUHJvbWlzZTx2b2lkPiA9PiB1c2VyREFMLnVwZGF0ZVVzZXIodXNlcl9pZCwgdXNlclRvVXBkYXRlKTtcclxuXHJcbmNvbnN0IGRlbGV0ZVVzZXIgPSAodXNlcl9pZDogc3RyaW5nKSA9PiB1c2VyREFMLmRlbGV0ZVVzZXIodXNlcl9pZCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclNlcnZpY2UgPSB7XHJcbiAgICBnZXRBbGxVc2VycyxcclxuICAgIGdldFVzZXJCeUlkLFxyXG4gICAgYWRkVXNlcixcclxuICAgIHVwZGF0ZVVzZXIsXHJcbiAgICBkZWxldGVVc2VyXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBoYXBpL2pvaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtam9pLXZhbGlkYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cC1lcnJvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2luc3RvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9