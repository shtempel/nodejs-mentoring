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
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/routes/index.ts");
/* harmony import */ var _routes_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/constants */ "./src/routes/constants.ts");
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
app.use(_routes_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].userRoutes.root, _routes__WEBPACK_IMPORTED_MODULE_3__["default"]);
app.listen(_constants__WEBPACK_IMPORTED_MODULE_1__["PORT"], () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`${_constants__WEBPACK_IMPORTED_MODULE_1__["LOG_MESSAGES"].portListening} ${_constants__WEBPACK_IMPORTED_MODULE_1__["PORT"]}`);
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

/***/ "./src/controllers/index.ts":
/*!**********************************!*\
  !*** ./src/controllers/index.ts ***!
  \**********************************/
/*! exports provided: usersController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _users_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.controller */ "./src/controllers/users.controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usersController", function() { return _users_controller__WEBPACK_IMPORTED_MODULE_0__["usersController"]; });




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
/*! exports provided: users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

const users = [
    {
        user_id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
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
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model */ "./src/models/user.model.ts");
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






const sequelize = new sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Sequelize"](_config_config__WEBPACK_IMPORTED_MODULE_5__["default"].database, _config_config__WEBPACK_IMPORTED_MODULE_5__["default"].username, _config_config__WEBPACK_IMPORTED_MODULE_5__["default"].password, {
    define: {
        timestamps: true,
        paranoid: true
    },
    port: _config_config__WEBPACK_IMPORTED_MODULE_5__["default"].port,
    dialect: _config_config__WEBPACK_IMPORTED_MODULE_5__["default"].dialect,
    host: _config_config__WEBPACK_IMPORTED_MODULE_5__["default"].host,
    dialectOptions: { ssl: true },
    pool: _config_config__WEBPACK_IMPORTED_MODULE_5__["default"].pool,
    models: [..._models__WEBPACK_IMPORTED_MODULE_4__["models"]]
});
const dbConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    yield sequelize.sync({ force: true });
    console.log(_constants__WEBPACK_IMPORTED_MODULE_3__["LOG_MESSAGES"].connectionSuccess);
    try {
        yield _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"].bulkCreate(_backup__WEBPACK_IMPORTED_MODULE_2__["users"]);
    }
    catch (e) {
        console.error(_constants__WEBPACK_IMPORTED_MODULE_3__["LOG_MESSAGES"].connectionFailed, e);
        throw e;
    }
    // return sequelize
    //     .sync({ force: true })
    //     .then(() => console.log(LOG_MESSAGES.connectionSuccess))
    //     .then(() => users.forEach(user => userToDb(user, user.user_id).save()))
    //     .catch(error => console.error(LOG_MESSAGES.connectionFailed, error));
});


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
const DEFAULT_LIMIT = 10;
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

const models = [
    _user_model__WEBPACK_IMPORTED_MODULE_0__["User"]
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
        tableName: 'users'
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
    }
};


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
/* harmony import */ var _user_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-router */ "./src/routes/user-router.ts");



const rootRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
rootRouter.use(_constants__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].userRoutes.users, _user_router__WEBPACK_IMPORTED_MODULE_2__["default"]);
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

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/*! exports provided: userService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_servise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.servise */ "./src/services/user.servise.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userService", function() { return _user_servise__WEBPACK_IMPORTED_MODULE_0__["userService"]; });




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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2Vycm9yLmhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL3VzZXJzLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtYWNjZXNzL2JhY2t1cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1hY2Nlc3MvZGIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtYWNjZXNzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLWFjY2Vzcy91c2VyREFMLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLWFjY2Vzcy91c2Vycy5wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pZGRsZXdhcmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlcy92YWxpZGF0aW9uLnNlcnZpc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3VzZXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3VzZXItcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdXNlci5zZXJ2aXNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBoYXBpL2pvaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLWpvaS12YWxpZGF0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cC1lcnJvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemUtdHlwZXNjcmlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV1aWRcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQUEsTUFBTSxPQUFPLEdBQVksVUFBVSxDQUFDO0FBRXJCO0lBQ1gsT0FBTyxFQUFFLE9BQU87SUFDaEIsSUFBSSxFQUFFLG9EQUFvRDtJQUMxRCxJQUFJLEVBQUUsSUFBSTtJQUNWLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixRQUFR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QUcsQ0FBQyxPQUFrQixFQUFpQixFQUFFLENBQUMsb0RBQU8sQ0FBQyxVQUFVLENBQUMsNkRBQVEsQ0FBQyxPQUFPLEVBQUUsMkNBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFbkgsTUFBTSxVQUFVLEdBQUcsQ0FBQyxPQUFlLEVBQUUsWUFBMEIsRUFBaUIsRUFBRSxDQUFDLG9EQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztBQUU3SCxNQUFNLFVBQVUsR0FBRyxDQUFDLE9BQWUsRUFBRSxFQUFFLENBQUMsb0RBQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFN0QsTUFBTSxXQUFXLEdBQUc7SUFDdkIsV0FBVztJQUNYLFdBQVc7SUFDWCxPQUFPO0lBQ1AsVUFBVTtJQUNWLFVBQVU7Q0FDYixDQUFDOzs7Ozs7Ozs7Ozs7QUNyQkYsc0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoic2VydmVyLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC50c1wiKTtcbiIsImltcG9ydCB7IERpYWxlY3QgfSBmcm9tICdzZXF1ZWxpemUnO1xyXG5cclxuY29uc3QgZGlhbGVjdDogRGlhbGVjdCA9ICdwb3N0Z3Jlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkaWFsZWN0OiBkaWFsZWN0LFxyXG4gICAgaG9zdDogXCJlYzItNTQtMjQ2LTEwMC0yNDYuZXUtd2VzdC0xLmNvbXB1dGUuYW1hem9uYXdzLmNvbVwiLFxyXG4gICAgcG9ydDogNTQzMixcclxuICAgIGRhdGFiYXNlOiBcImQzb3ZzMGtoajgyYTNoXCIsXHJcbiAgICB1c2VybmFtZTogXCJ4ZGRxdnJmendkd2VjclwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiM2Y0MWI1MDQ3Y2RkYmI1MjYxZDA3ZTJhNmU4MmViM2Y2NDUxZGU4YjM4ODVlMDFjZjYxMzZhZjU5NTRkN2EzN1wiLFxyXG4gICAgcG9vbDoge1xyXG4gICAgICAgIG1pbjogMCxcclxuICAgICAgICBtYXg6IDUsXHJcbiAgICAgICAgYWNxdWlyZTogMzAwMDAsXHJcbiAgICAgICAgaWRsZTogMTAwMDBcclxuICAgIH1cclxufTtcclxuIiwiaW1wb3J0IGV4cHJlc3MsIHsgQXBwbGljYXRpb24gfSBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IExPR19NRVNTQUdFUywgUE9SVCB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgZGJDb25uZWN0IH0gZnJvbSAnLi9kYXRhLWFjY2Vzcyc7XHJcbmltcG9ydCByb290Um91dGVyIGZyb20gJy4vcm91dGVzJztcclxuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi9yb3V0ZXMvY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IGFwcDogQXBwbGljYXRpb24gPSBleHByZXNzKCk7XHJcblxyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuYXBwLnVzZShST1VURVMudXNlclJvdXRlcy5yb290LCByb290Um91dGVyKTtcclxuXHJcbmFwcC5saXN0ZW4oUE9SVCwgYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYCR7IExPR19NRVNTQUdFUy5wb3J0TGlzdGVuaW5nIH0gJHsgUE9SVCB9YCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJleHBvcnQgY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNDAwMTtcclxuXHJcbmV4cG9ydCBjb25zdCBFUlJPUlMgPSB7XHJcbiAgICB1c2VyTm90Rm91bmQ6ICdVc2VyIG5vdCBGb3VuZCEnLFxyXG4gICAgbWV0aG9kTm90QWxsb3dlZDogJ01ldGhvZCBub3QgYWxsb3dlZCBoZXJlIScsXHJcbiAgICB1c2VyRXhpc3Q6ICdUaGlzIGxvZ2luIG5hbWUgYWxyZWFkeSBleGlzdCEnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX01FU1NBR0VTID0ge1xyXG4gICAgY29ubmVjdGlvblN1Y2Nlc3M6ICdDb25uZWN0aW9uIGhhcyBiZWVuIGVzdGFibGlzaGVkIHN1Y2Nlc3NmdWxseSEnLFxyXG4gICAgY29ubmVjdGlvbkZhaWxlZDogJ1VuYWJsZSB0byBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZTonLFxyXG4gICAgcG9ydExpc3RlbmluZzogJ0xpc3RlbmluZyBvbiBwb3J0J1xyXG59O1xyXG4iLCJpbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RIZWxwZXIgPSBhc3luYyAoZm46IGFueSwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmbigpO1xyXG4gICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgICAgICAgID8gcmVzcG9uc2Uuc2VuZCh7IGRhdGEsIHN0YXR1czogJ3N1Y2Nlc3MnIH0pXHJcbiAgICAgICAgICAgIDogcmVzcG9uc2Uuc2VuZCh7IHN0YXR1czogJ3N1Y2Nlc3MnIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXNwb25zZS5zdGF0dXMoZXJyb3Iuc3RhdHVzIHx8IDUwMCkuc2VuZCh7IGVycm9yOiB7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSB9KTtcclxuICAgIH1cclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi91c2Vycy5jb250cm9sbGVyJztcclxuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGNyZWF0ZUVycm9yLCB7IEh0dHBFcnJvciB9IGZyb20gJ2h0dHAtZXJyb3JzJztcclxuXHJcbmltcG9ydCB7IEVSUk9SUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IHVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQgeyByZXF1ZXN0SGVscGVyIH0gZnJvbSAnLi9lcnJvci5oZWxwZXInO1xyXG5cclxuY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiB1c2VyU2VydmljZS5nZXRBbGxVc2VycyhyZXF1ZXN0LnF1ZXJ5KSwgcmVzcG9uc2UpO1xyXG5cclxuY29uc3QgZ2V0VXNlckJ5SWQgPSBhc3luYyAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiB1c2VyU2VydmljZS5nZXRVc2VyQnlJZChyZXF1ZXN0LnBhcmFtcy51c2VyX2lkKSwgcmVzcG9uc2UpO1xyXG5cclxuY29uc3QgYWRkVXNlciA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJTZXJ2aWNlLmFkZFVzZXIocmVxdWVzdC5ib2R5KSwgcmVzcG9uc2UpO1xyXG5cclxuY29uc3QgdXBkYXRlVXNlciA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJTZXJ2aWNlLnVwZGF0ZVVzZXIocmVxdWVzdC5wYXJhbXMudXNlcl9pZCwgcmVxdWVzdC5ib2R5KSwgcmVzcG9uc2UpO1xyXG5cclxuY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJTZXJ2aWNlLmRlbGV0ZVVzZXIocmVxdWVzdC5wYXJhbXMudXNlcl9pZCksIHJlc3BvbnNlKTtcclxuXHJcbmNvbnN0IG5vdEFsbG93ZWQgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICBsZXQgZXJyOiBIdHRwRXJyb3IgPSBjcmVhdGVFcnJvcig0MDUsIEVSUk9SUy5tZXRob2ROb3RBbGxvd2VkKTtcclxuXHJcbiAgICByZXNwb25zZS5zdGF0dXMoZXJyLnN0YXR1cykuc2VuZCh7IHN0YXR1czogZXJyLnN0YXR1cywgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlcnNDb250cm9sbGVyID0ge1xyXG4gICAgZ2V0VXNlcnMsXHJcbiAgICBkZWxldGVVc2VyLFxyXG4gICAgdXBkYXRlVXNlcixcclxuICAgIGdldFVzZXJCeUlkLFxyXG4gICAgYWRkVXNlcixcclxuICAgIG5vdEFsbG93ZWRcclxufTtcclxuIiwiaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90eXBpbmdzJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyczogVXNlcltdID0gW1xyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiBcIkFuYWtpblNreXdhbGtlclwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcImFuYWtpbnBhc3NcIixcclxuICAgICAgICBhZ2U6IDMyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiBcIk1hY2VXaW5kdVwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIm1hY2VwYXNzXCIsXHJcbiAgICAgICAgYWdlOiA3MlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJDLTNQT1wiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcImMzcDBwYXNzXCIsXHJcbiAgICAgICAgYWdlOiAzMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJMdWtlU2t5d2Fsa2VyXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwibHVrZXBhc3NcIixcclxuICAgICAgICBhZ2U6IDIzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiBcIkRhcnRoTWF1bFwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcImRhcnRocGFzc1wiLFxyXG4gICAgICAgIGFnZTogNDRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46IFwiUXVpR29uSmlublwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcInF1aXBhc3NcIixcclxuICAgICAgICBhZ2U6IDgwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiBcIk9iaVdhbktlbm9iaVwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIm9iaXBhc3NcIixcclxuICAgICAgICBhZ2U6IDQ3XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiBcIlBhbHBhdGluZVwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcInBhbHBhdGluZXBhc3NcIixcclxuICAgICAgICBhZ2U6IDgyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiBcIllvZGFcIixcclxuICAgICAgICBwYXNzd29yZDogXCJ5b2RhcGFzc1wiLFxyXG4gICAgICAgIGFnZTogMTMwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiBcIlNub2tlXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwic25va2VwYXNzXCIsXHJcbiAgICAgICAgYWdlOiA1M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJCb2JhRmV0dFwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcImJvYmFwYXNzXCIsXHJcbiAgICAgICAgYWdlOiAzNlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJDaGV3YmFjY2FcIixcclxuICAgICAgICBwYXNzd29yZDogXCJjaGV3YmFjY2FwYXNzXCIsXHJcbiAgICAgICAgYWdlOiAxMzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46IFwiSGFuU29sb1wiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcImhhbnBhc3NcIixcclxuICAgICAgICBhZ2U6IDY2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiBcIkt5bG9SZW5cIixcclxuICAgICAgICBwYXNzd29yZDogXCJreWxvcGFzc1wiLFxyXG4gICAgICAgIGFnZTogMzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46IFwiTGVpYU9yZ2FuYVwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcImxlaWFwYXNzXCIsXHJcbiAgICAgICAgYWdlOiA1M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJQYWRtZUFtaWRhbGFcIixcclxuICAgICAgICBwYXNzd29yZDogXCJwYWRtZXBhc3NcIixcclxuICAgICAgICBhZ2U6IDI3XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiBcIkNvdW50RG9va3VcIixcclxuICAgICAgICBwYXNzd29yZDogXCJkb2tvb3Bhc3NcIixcclxuICAgICAgICBhZ2U6IDEwMlxyXG4gICAgfVxyXG5dO1xyXG4iLCJpbXBvcnQgeyBTZXF1ZWxpemUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNlci5tb2RlbCc7XHJcblxyXG5pbXBvcnQgeyB1c2VycyB9IGZyb20gJy4vYmFja3VwJztcclxuaW1wb3J0IHsgTE9HX01FU1NBR0VTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgbW9kZWxzIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IGRiQ29uZmlnIGZyb20gJy4vLi4vLi4vY29uZmlnL2NvbmZpZyc7XHJcblxyXG5jb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKFxyXG4gICAgZGJDb25maWcuZGF0YWJhc2UsXHJcbiAgICBkYkNvbmZpZy51c2VybmFtZSxcclxuICAgIGRiQ29uZmlnLnBhc3N3b3JkLFxyXG4gICAge1xyXG4gICAgICAgIGRlZmluZToge1xyXG4gICAgICAgICAgICB0aW1lc3RhbXBzOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbm9pZDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9ydDogZGJDb25maWcucG9ydCxcclxuICAgICAgICBkaWFsZWN0OiBkYkNvbmZpZy5kaWFsZWN0LFxyXG4gICAgICAgIGhvc3Q6IGRiQ29uZmlnLmhvc3QsXHJcbiAgICAgICAgZGlhbGVjdE9wdGlvbnM6IHsgc3NsOiB0cnVlIH0sXHJcbiAgICAgICAgcG9vbDogZGJDb25maWcucG9vbCxcclxuICAgICAgICBtb2RlbHM6IFsgLi4ubW9kZWxzIF1cclxuICAgIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBkYkNvbm5lY3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBzZXF1ZWxpemUuc3luYyh7IGZvcmNlOiB0cnVlIH0pO1xyXG4gICAgY29uc29sZS5sb2coTE9HX01FU1NBR0VTLmNvbm5lY3Rpb25TdWNjZXNzKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgVXNlci5idWxrQ3JlYXRlKHVzZXJzKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihMT0dfTUVTU0FHRVMuY29ubmVjdGlvbkZhaWxlZCwgZSk7XHJcbiAgICAgICAgdGhyb3cgZTtcclxuICAgIH1cclxuICAgIC8vIHJldHVybiBzZXF1ZWxpemVcclxuICAgIC8vICAgICAuc3luYyh7IGZvcmNlOiB0cnVlIH0pXHJcbiAgICAvLyAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coTE9HX01FU1NBR0VTLmNvbm5lY3Rpb25TdWNjZXNzKSlcclxuICAgIC8vICAgICAudGhlbigoKSA9PiB1c2Vycy5mb3JFYWNoKHVzZXIgPT4gdXNlclRvRGIodXNlciwgdXNlci51c2VyX2lkKS5zYXZlKCkpKVxyXG4gICAgLy8gICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKExPR19NRVNTQUdFUy5jb25uZWN0aW9uRmFpbGVkLCBlcnJvcikpO1xyXG59O1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL3VzZXJEQUwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RiJztcclxuZXhwb3J0ICogZnJvbSAnLi91c2Vycy5wYXJzZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL3R5cGluZ3MnO1xyXG4iLCJpbXBvcnQgY3JlYXRlRXJyb3IgZnJvbSAnaHR0cC1lcnJvcnMnO1xyXG5pbXBvcnQgeyBXaGVyZU9wdGlvbnMsIE9wIH0gZnJvbSAnc2VxdWVsaXplJztcclxuXHJcbmltcG9ydCB7IEVSUk9SUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFVzZXJUb1Jlc3BvbnNlLCBVc2VyVG9VcGRhdGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3R5cGluZ3MnO1xyXG5pbXBvcnQgeyBRdWVyeVBhcmFtcyB9IGZyb20gJy4vdHlwaW5ncyc7XHJcbmltcG9ydCB7IHVzZXJzVG9SZXNwb25zZSwgdXNlclRvUmVzcG9uc2UgfSBmcm9tICcuL3VzZXJzLnBhcnNlcic7XHJcbmltcG9ydCB7IFVzZXIgYXMgVXNlck1vZGVsIH0gZnJvbSAnLi8uLi9tb2RlbHMvdXNlci5tb2RlbCc7XHJcblxyXG5jb25zdCBERUZBVUxUX09GRlNFVDogbnVtYmVyID0gMDtcclxuY29uc3QgREVGQVVMVF9MSU1JVDogbnVtYmVyID0gMTA7XHJcblxyXG5jb25zdCBnZXRBbGwgPSBhc3luYyAocGFyYW1zOiBRdWVyeVBhcmFtcyk6IFByb21pc2U8VXNlclRvUmVzcG9uc2VbXT4gPT4ge1xyXG4gICAgY29uc3QgeyBsb2dpbiwgb2Zmc2V0UGFyYW0sIGxpbWl0UGFyYW0gfSA9IHBhcmFtcztcclxuICAgIGNvbnN0IG9mZnNldDogbnVtYmVyID0gb2Zmc2V0UGFyYW0gJiYgcGFyc2VJbnQob2Zmc2V0UGFyYW0sIDEwKSB8fCBERUZBVUxUX09GRlNFVDtcclxuICAgIGNvbnN0IGxpbWl0OiBudW1iZXIgPSBsaW1pdFBhcmFtICYmIHBhcnNlSW50KGxpbWl0UGFyYW0sIDEwKSArIG9mZnNldCB8fCBERUZBVUxUX0xJTUlUO1xyXG4gICAgY29uc3Qgd2hlcmU6IFdoZXJlT3B0aW9ucyA9IGxvZ2luID8geyBsb2dpbm5hbWU6IHsgWyBPcC5pTGlrZSBdOiBgJSR7IGxvZ2luIH0lYCB9IH0gOiB7fTtcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgVXNlck1vZGVsLmZpbmRBbGwoeyBvZmZzZXQ6IG9mZnNldCwgbGltaXQ6IGxpbWl0LCB3aGVyZSB9KTtcclxuXHJcbiAgICByZXR1cm4gdXNlcnNUb1Jlc3BvbnNlKHVzZXJzKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFVzZXIgPSBhc3luYyAodXNlcl9pZDogc3RyaW5nKTogUHJvbWlzZTxVc2VyVG9SZXNwb25zZT4gPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kT25lKHsgd2hlcmU6IHsgdXNlcl9pZDogdXNlcl9pZCB9IH0pO1xyXG5cclxuICAgIGlmICggIXVzZXIgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDQsIHsgbWVzc2FnZTogRVJST1JTLnVzZXJOb3RGb3VuZCB9KTtcclxuXHJcbiAgICByZXR1cm4gdXNlclRvUmVzcG9uc2UodXNlcik7XHJcbn07XHJcblxyXG5jb25zdCBpbnNlcnRVc2VyID0gYXN5bmMgKHVzZXJNb2RlbDogVXNlck1vZGVsKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoeyB3aGVyZTogeyBsb2dpbjogdXNlck1vZGVsLmxvZ2luIH0gfSk7XHJcblxyXG4gICAgaWYgKCB1c2VyICkgdGhyb3cgY3JlYXRlRXJyb3IoNDAwLCB7IG1lc3NhZ2U6IEVSUk9SUy51c2VyRXhpc3QgfSk7XHJcblxyXG4gICAgdXNlck1vZGVsLnNhdmUoKTtcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZVVzZXIgPSBhc3luYyAodXNlcl9pZDogc3RyaW5nLCB1c2VyVG9VcGRhdGU6IFVzZXJUb1VwZGF0ZSk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kT25lKHsgd2hlcmU6IHsgdXNlcl9pZDogdXNlcl9pZCB9IH0pO1xyXG5cclxuICAgIGlmICggIXVzZXIgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDQsIHsgbWVzc2FnZTogRVJST1JTLnVzZXJOb3RGb3VuZCB9KTtcclxuXHJcbiAgICB1c2VyLmxvZ2luID0gdXNlclRvVXBkYXRlLmxvZ2luO1xyXG4gICAgdXNlci5hZ2UgPSB1c2VyVG9VcGRhdGUuYWdlO1xyXG5cclxuICAgIHVzZXIuc2F2ZSgpO1xyXG59O1xyXG5cclxuY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jICh1c2VyX2lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IHdoZXJlOiB7IHVzZXJfaWQ6IHVzZXJfaWQgfSB9KTtcclxuXHJcbiAgICBpZiAoICF1c2VyICkgdGhyb3cgY3JlYXRlRXJyb3IoNDA0LCB7IG1lc3NhZ2U6IEVSUk9SUy51c2VyTm90Rm91bmQgfSk7XHJcblxyXG4gICAgdXNlci5kZXN0cm95KCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckRBTCA9IHtcclxuICAgIGdldEFsbCxcclxuICAgIGdldFVzZXIsXHJcbiAgICBpbnNlcnRVc2VyLFxyXG4gICAgdXBkYXRlVXNlcixcclxuICAgIGRlbGV0ZVVzZXJcclxufTtcclxuIiwiaW1wb3J0IHsgVXNlclRvUmVzcG9uc2UsIFVzZXJUb0FkZCwgVXNlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcbmltcG9ydCB7IFVzZXIgYXMgVXNlck1vZGVsIH0gZnJvbSAnLi8uLi9tb2RlbHMvdXNlci5tb2RlbCc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclRvUmVzcG9uc2UgPSAodXNlcjogVXNlcik6IFVzZXJUb1Jlc3BvbnNlID0+ICh7XHJcbiAgICB1c2VyX2lkOiB1c2VyLnVzZXJfaWQsXHJcbiAgICBsb2dpbjogdXNlci5sb2dpbixcclxuICAgIGFnZTogdXNlci5hZ2VcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlcnNUb1Jlc3BvbnNlID0gKHVzZXJzOiBVc2VyW10pOiBVc2VyVG9SZXNwb25zZVtdID0+IHVzZXJzLm1hcCh1c2VyID0+IHVzZXJUb1Jlc3BvbnNlKHVzZXIpKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyVG9EYiA9ICh1c2VyOiBVc2VyVG9BZGQsIHVzZXJfaWQ6IHN0cmluZyk6IFVzZXJNb2RlbCA9PlxyXG4gICAgbmV3IFVzZXJNb2RlbCh7XHJcbiAgICAgICAgdXNlcl9pZDogdXNlcl9pZCxcclxuICAgICAgICBsb2dpbjogdXNlci5sb2dpbixcclxuICAgICAgICBhZ2U6IHVzZXIuYWdlLFxyXG4gICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXHJcbiAgICB9KTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi92YWxpZGF0aW9uLnNlcnZpc2UnO1xyXG4iLCJpbXBvcnQgKiBhcyBKb2kgZnJvbSAnQGhhcGkvam9pJztcclxuaW1wb3J0IHsgY3JlYXRlVmFsaWRhdG9yIH0gZnJvbSAnZXhwcmVzcy1qb2ktdmFsaWRhdGlvbic7XHJcblxyXG5jb25zdCBNSU5fQUdFID0gNDtcclxuY29uc3QgTUFYX0FHRSA9IDEzMDtcclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0b3IgPSBjcmVhdGVWYWxpZGF0b3IoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRVc2VyQm9keVNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgbG9naW46IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgYWdlOiBKb2kubnVtYmVyKCkucmVxdWlyZWQoKS5ncmVhdGVyKE1JTl9BR0UpLmxlc3MoTUFYX0FHRSksXHJcbiAgICBwYXNzd29yZDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCkuYWxwaGFudW0oKVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyQm9keVNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgbG9naW46IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgYWdlOiBKb2kubnVtYmVyKCkucmVxdWlyZWQoKS5ncmVhdGVyKE1JTl9BR0UpLmxlc3MoTUFYX0FHRSlcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlclF1ZXJ5U2NoZW1hID0gSm9pLm9iamVjdCh7XHJcbiAgICB1c2VyX2lkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKVxyXG59KTtcclxuIiwiaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlci5tb2RlbCc7XHJcblxyXG5leHBvcnQgY29uc3QgbW9kZWxzID0gW1xyXG4gICAgVXNlclxyXG5dO1xyXG4iLCJpbXBvcnQgeyBDb2x1bW4sIFRhYmxlLCBNb2RlbCwgUHJpbWFyeUtleSwgQWxsb3dOdWxsLCBVbmlxdWUsIERhdGFUeXBlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xyXG5cclxuQFRhYmxlKHtcclxuICAgIHNjaGVtYTogJ25ldycsXHJcbiAgICB0YWJsZU5hbWU6ICd1c2VycydcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBNb2RlbDxVc2VyPiB7XHJcbiAgICBAUHJpbWFyeUtleVxyXG4gICAgQFVuaXF1ZSh0cnVlKVxyXG4gICAgQEFsbG93TnVsbChmYWxzZSlcclxuICAgIEBDb2x1bW5cclxuICAgIHVzZXJfaWQ6IHN0cmluZztcclxuXHJcbiAgICBAQWxsb3dOdWxsKGZhbHNlKVxyXG4gICAgQFVuaXF1ZSh0cnVlKVxyXG4gICAgQENvbHVtblxyXG4gICAgbG9naW46IHN0cmluZztcclxuXHJcbiAgICBAQWxsb3dOdWxsKGZhbHNlKVxyXG4gICAgQENvbHVtblxyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxuXHJcbiAgICBAQWxsb3dOdWxsKGZhbHNlKVxyXG4gICAgQENvbHVtblxyXG4gICAgYWdlOiBudW1iZXI7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IFJPVVRFUyA9IHtcclxuICAgIHVzZXJSb3V0ZXM6IHtcclxuICAgICAgICByb290OiAnLycsXHJcbiAgICAgICAgdXNlcl9pZDogJy86dXNlcl9pZCcsXHJcbiAgICAgICAgdXNlcnM6ICcvdXNlcnMnXHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgdXNlclJvdXRlciBmcm9tICcuL3VzZXItcm91dGVyJztcclxuXHJcbmNvbnN0IHJvb3RSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5yb290Um91dGVyLnVzZShST1VURVMudXNlclJvdXRlcy51c2VycywgdXNlclJvdXRlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290Um91dGVyO1xyXG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IHVzZXJzQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzJztcclxuaW1wb3J0IHsgYWRkVXNlckJvZHlTY2hlbWEsIHVwZGF0ZVVzZXJCb2R5U2NoZW1hLCB1cGRhdGVVc2VyUXVlcnlTY2hlbWEsIHZhbGlkYXRvciB9IGZyb20gJy4uL21pZGRsZXdhcmVzJztcclxuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgdXNlclJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbmNvbnN0IHJvdXRlcyA9IFJPVVRFUy51c2VyUm91dGVzO1xyXG5cclxudXNlclJvdXRlci5yb3V0ZShyb3V0ZXMucm9vdClcclxuICAgIC5nZXQodXNlcnNDb250cm9sbGVyLmdldFVzZXJzKVxyXG4gICAgLnBvc3QodmFsaWRhdG9yLmJvZHkoYWRkVXNlckJvZHlTY2hlbWEpLCB1c2Vyc0NvbnRyb2xsZXIuYWRkVXNlcilcclxuICAgIC5hbGwodXNlcnNDb250cm9sbGVyLm5vdEFsbG93ZWQpO1xyXG5cclxudXNlclJvdXRlci5yb3V0ZShyb3V0ZXMudXNlcl9pZClcclxuICAgIC5nZXQodXNlcnNDb250cm9sbGVyLmdldFVzZXJCeUlkKVxyXG4gICAgLnB1dCh2YWxpZGF0b3IucGFyYW1zKHVwZGF0ZVVzZXJRdWVyeVNjaGVtYSksIHZhbGlkYXRvci5ib2R5KHVwZGF0ZVVzZXJCb2R5U2NoZW1hKSwgdXNlcnNDb250cm9sbGVyLnVwZGF0ZVVzZXIpXHJcbiAgICAuZGVsZXRlKHVzZXJzQ29udHJvbGxlci5kZWxldGVVc2VyKVxyXG4gICAgLmFsbCh1c2Vyc0NvbnRyb2xsZXIubm90QWxsb3dlZCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyUm91dGVyO1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL3VzZXIuc2VydmlzZSc7XHJcblxyXG4iLCJpbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcclxuXHJcbmltcG9ydCB7IHVzZXJEQUwsIHVzZXJUb0RiIH0gZnJvbSAnLi4vZGF0YS1hY2Nlc3MnO1xyXG5pbXBvcnQgeyBVc2VyVG9BZGQsIFVzZXJUb1Jlc3BvbnNlLCBVc2VyVG9VcGRhdGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3R5cGluZ3MnO1xyXG5cclxuY29uc3QgZ2V0QWxsVXNlcnMgPSAocXVlcnk6IHsgbG9naW4/OiBzdHJpbmcsIGxpbWl0Pzogc3RyaW5nLCBvZmZzZXQ/OiBzdHJpbmcgfSk6IFByb21pc2U8VXNlclRvUmVzcG9uc2VbXT4gPT4gdXNlckRBTC5nZXRBbGwocXVlcnkpO1xyXG5cclxuY29uc3QgZ2V0VXNlckJ5SWQgPSAodXNlcl9pZDogc3RyaW5nKTogUHJvbWlzZTxVc2VyVG9SZXNwb25zZT4gPT4gdXNlckRBTC5nZXRVc2VyKHVzZXJfaWQpO1xyXG5cclxuY29uc3QgYWRkVXNlciA9IChuZXdVc2VyOiBVc2VyVG9BZGQpOiBQcm9taXNlPHZvaWQ+ID0+IHVzZXJEQUwuaW5zZXJ0VXNlcih1c2VyVG9EYihuZXdVc2VyLCB1dWlkLnYxKCkudG9TdHJpbmcoKSkpO1xyXG5cclxuY29uc3QgdXBkYXRlVXNlciA9ICh1c2VyX2lkOiBzdHJpbmcsIHVzZXJUb1VwZGF0ZTogVXNlclRvVXBkYXRlKTogUHJvbWlzZTx2b2lkPiA9PiB1c2VyREFMLnVwZGF0ZVVzZXIodXNlcl9pZCwgdXNlclRvVXBkYXRlKTtcclxuXHJcbmNvbnN0IGRlbGV0ZVVzZXIgPSAodXNlcl9pZDogc3RyaW5nKSA9PiB1c2VyREFMLmRlbGV0ZVVzZXIodXNlcl9pZCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclNlcnZpY2UgPSB7XHJcbiAgICBnZXRBbGxVc2VycyxcclxuICAgIGdldFVzZXJCeUlkLFxyXG4gICAgYWRkVXNlcixcclxuICAgIHVwZGF0ZVVzZXIsXHJcbiAgICBkZWxldGVVc2VyXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBoYXBpL2pvaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtam9pLXZhbGlkYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cC1lcnJvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==