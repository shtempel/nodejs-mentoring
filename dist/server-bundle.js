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
/*! exports provided: users2, users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users2", function() { return users2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

const users2 = [
    {
        user_id: 'hueta',
        login: "hueta",
        password: "hueta",
        age: 3
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
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model */ "./src/models/user.model.ts");
/* harmony import */ var _backup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backup */ "./src/data-access/backup.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../config/config */ "./config/config.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const sequelize = new sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Sequelize"](_config_config__WEBPACK_IMPORTED_MODULE_6__["default"].database, _config_config__WEBPACK_IMPORTED_MODULE_6__["default"].username, _config_config__WEBPACK_IMPORTED_MODULE_6__["default"].password, {
    define: {
        timestamps: true
    },
    port: _config_config__WEBPACK_IMPORTED_MODULE_6__["default"].port,
    dialect: _config_config__WEBPACK_IMPORTED_MODULE_6__["default"].dialect,
    host: _config_config__WEBPACK_IMPORTED_MODULE_6__["default"].host,
    dialectOptions: { ssl: true },
    pool: _config_config__WEBPACK_IMPORTED_MODULE_6__["default"].pool,
    models: [..._models__WEBPACK_IMPORTED_MODULE_5__["models"]]
});
const dbConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    yield sequelize.sync({ force: true });
    _middlewares_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].info(_constants__WEBPACK_IMPORTED_MODULE_4__["LOG_MESSAGES"].connectionSuccess);
    try {
        yield _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"].bulkCreate(_backup__WEBPACK_IMPORTED_MODULE_3__["users"]);
        yield _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"].bulkCreate(_backup__WEBPACK_IMPORTED_MODULE_3__["users2"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2Vycm9yLmhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL3VzZXJzLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtYWNjZXNzL2JhY2t1cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1hY2Nlc3MvZGIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtYWNjZXNzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLWFjY2Vzcy91c2VyREFMLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLWFjY2Vzcy91c2Vycy5wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pZGRsZXdhcmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlcy9sb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pZGRsZXdhcmVzL3ZhbGlkYXRpb24uc2VydmlzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvdXNlci5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvdXNlci1yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy91c2VyLnNlcnZpc2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGhhcGkvam9pXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3Mtam9pLXZhbGlkYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwLWVycm9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbnN0b25cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQUEsTUFBTSxPQUFPLEdBQVksVUFBVSxDQUFDO0FBRXJCO0lBQ1gsT0FBTyxFQUFFLE9BQU87SUFDaEIsSUFBSSxFQUFFLG9EQUFvRDtJQUMxRCxJQUFJLEVBQUUsSUFBSTtJQUNWLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixRQUFRLEVBQUUsa0VBQWtFO0lBQzVFLElBQUksRUFBRTtRQUNGLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLENBQUM7UUFDTixPQUFPLEVBQUUsS0FBSztRQUNkLElBQUksRUFBRSxLQUFLO0tBQ2Q7Q0FDSixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCNkM7QUFFRTtBQUNQO0FBQ1I7QUFDVTtBQUU1QyxNQUFNLEdBQUcsR0FBZ0IsOENBQU8sRUFBRSxDQUFDO0FBRW5DLEdBQUcsQ0FBQyxHQUFHLENBQUMsOENBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsd0RBQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLCtDQUFVLENBQUMsQ0FBQztBQUU1QyxHQUFHLENBQUMsTUFBTSxDQUFDLCtDQUFJLEVBQUUsR0FBUyxFQUFFO0lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBSSx1REFBWSxDQUFDLGFBQWMsSUFBSywrQ0FBSyxFQUFFLENBQUMsQ0FBQztJQUN6RCxJQUFJO1FBQ0EsTUFBTSw4REFBUyxFQUFFLENBQUM7S0FDckI7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE1BQU0sQ0FBQyxDQUFDO0tBQ1g7QUFDTCxDQUFDLEVBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ25CSDtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztBQUV0QyxNQUFNLE1BQU0sR0FBRztJQUNsQixZQUFZLEVBQUUsaUJBQWlCO0lBQy9CLGdCQUFnQixFQUFFLDBCQUEwQjtJQUM1QyxTQUFTLEVBQUUsZ0NBQWdDO0NBQzlDLENBQUM7QUFFSyxNQUFNLFlBQVksR0FBRztJQUN4QixpQkFBaUIsRUFBRSwrQ0FBK0M7SUFDbEUsZ0JBQWdCLEVBQUUsb0NBQW9DO0lBQ3RELGFBQWEsRUFBRSxtQkFBbUI7Q0FDckMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkssTUFBTSxhQUFhLEdBQUcsQ0FBTyxFQUFPLEVBQUUsUUFBa0IsRUFBRSxFQUFFO0lBQy9ELElBQUk7UUFDQSxNQUFNLElBQUksR0FBRyxNQUFNLEVBQUUsRUFBRSxDQUFDO1FBQ3hCLE9BQU8sSUFBSTtZQUNQLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQztZQUM1QyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0tBQzlDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDWixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDcEY7QUFDTCxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNYRjtBQUFBO0FBQUE7QUFBQTtBQUFtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDa0I7QUFFZjtBQUNJO0FBQ0s7QUFFL0MsTUFBTSxRQUFRLEdBQUcsQ0FBTyxPQUFnQixFQUFFLFFBQWtCLEVBQUUsRUFBRSxrREFDNUQsMEVBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxxREFBVyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLEtBQUM7QUFFMUUsTUFBTSxXQUFXLEdBQUcsQ0FBTyxPQUFnQixFQUFFLFFBQWtCLEVBQUUsRUFBRSxrREFDL0QsMEVBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxxREFBVyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsQ0FBQyxLQUFDO0FBRW5GLE1BQU0sT0FBTyxHQUFHLENBQU8sT0FBZ0IsRUFBRSxRQUFrQixFQUFFLEVBQUUsa0RBQzNELDBFQUFhLENBQUMsR0FBRyxFQUFFLENBQUMscURBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxLQUFDO0FBRXJFLE1BQU0sVUFBVSxHQUFHLENBQU8sT0FBZ0IsRUFBRSxRQUFrQixFQUFFLEVBQUUsa0RBQzlELDBFQUFhLENBQUMsR0FBRyxFQUFFLENBQUMscURBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxLQUFDO0FBRWhHLE1BQU0sVUFBVSxHQUFHLENBQU8sT0FBZ0IsRUFBRSxRQUFrQixFQUFFLEVBQUUsa0RBQzlELDBFQUFhLENBQUMsR0FBRyxFQUFFLENBQUMscURBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLENBQUMsS0FBQztBQUVsRixNQUFNLFVBQVUsR0FBRyxDQUFDLE9BQWdCLEVBQUUsUUFBa0IsRUFBRSxFQUFFO0lBQ3hELElBQUksR0FBRyxHQUFjLGtEQUFXLENBQUMsR0FBRyxFQUFFLGlEQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUUvRCxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDbkYsQ0FBQyxDQUFDO0FBRUssTUFBTSxlQUFlLEdBQUc7SUFDM0IsUUFBUTtJQUNSLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLE9BQU87SUFDUCxVQUFVO0NBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ25DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdCO0FBSWpCLE1BQU0sTUFBTSxHQUFXO0lBQzFCO1FBQ0ksT0FBTyxFQUFFLE9BQU87UUFDaEIsS0FBSyxFQUFFLE9BQU87UUFDZCxRQUFRLEVBQUUsT0FBTztRQUNqQixHQUFHLEVBQUUsQ0FBQztLQUNUO0NBQ0osQ0FBQztBQUNLLE1BQU0sS0FBSyxHQUFXO0lBQ3pCO1FBQ0ksT0FBTyxFQUFFLFdBQVc7UUFDcEIsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QixRQUFRLEVBQUUsWUFBWTtRQUN0QixHQUFHLEVBQUUsRUFBRTtLQUNWO0lBQ0Q7UUFDSSxPQUFPLEVBQUUsMkNBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDN0IsS0FBSyxFQUFFLFdBQVc7UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsR0FBRyxFQUFFLEVBQUU7S0FDVjtJQUNEO1FBQ0ksT0FBTyxFQUFFLDJDQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFO1FBQzdCLEtBQUssRUFBRSxPQUFPO1FBQ2QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsR0FBRyxFQUFFLEVBQUU7S0FDVjtJQUNEO1FBQ0ksT0FBTyxFQUFFLDJDQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFO1FBQzdCLEtBQUssRUFBRSxlQUFlO1FBQ3RCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEdBQUcsRUFBRSxFQUFFO0tBQ1Y7SUFDRDtRQUNJLE9BQU8sRUFBRSwyQ0FBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRTtRQUM3QixLQUFLLEVBQUUsV0FBVztRQUNsQixRQUFRLEVBQUUsV0FBVztRQUNyQixHQUFHLEVBQUUsRUFBRTtLQUNWO0lBQ0Q7UUFDSSxPQUFPLEVBQUUsMkNBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDN0IsS0FBSyxFQUFFLFlBQVk7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsR0FBRyxFQUFFLEVBQUU7S0FDVjtJQUNEO1FBQ0ksT0FBTyxFQUFFLDJDQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFO1FBQzdCLEtBQUssRUFBRSxjQUFjO1FBQ3JCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLEdBQUcsRUFBRSxFQUFFO0tBQ1Y7SUFDRDtRQUNJLE9BQU8sRUFBRSwyQ0FBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRTtRQUM3QixLQUFLLEVBQUUsV0FBVztRQUNsQixRQUFRLEVBQUUsZUFBZTtRQUN6QixHQUFHLEVBQUUsRUFBRTtLQUNWO0lBQ0Q7UUFDSSxPQUFPLEVBQUUsMkNBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDN0IsS0FBSyxFQUFFLE1BQU07UUFDYixRQUFRLEVBQUUsVUFBVTtRQUNwQixHQUFHLEVBQUUsR0FBRztLQUNYO0lBQ0Q7UUFDSSxPQUFPLEVBQUUsMkNBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDN0IsS0FBSyxFQUFFLE9BQU87UUFDZCxRQUFRLEVBQUUsV0FBVztRQUNyQixHQUFHLEVBQUUsRUFBRTtLQUNWO0lBQ0Q7UUFDSSxPQUFPLEVBQUUsMkNBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDN0IsS0FBSyxFQUFFLFVBQVU7UUFDakIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsR0FBRyxFQUFFLEVBQUU7S0FDVjtJQUNEO1FBQ0ksT0FBTyxFQUFFLDJDQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFO1FBQzdCLEtBQUssRUFBRSxXQUFXO1FBQ2xCLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLEdBQUcsRUFBRSxHQUFHO0tBQ1g7SUFDRDtRQUNJLE9BQU8sRUFBRSwyQ0FBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRTtRQUM3QixLQUFLLEVBQUUsU0FBUztRQUNoQixRQUFRLEVBQUUsU0FBUztRQUNuQixHQUFHLEVBQUUsRUFBRTtLQUNWO0lBQ0Q7UUFDSSxPQUFPLEVBQUUsMkNBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDN0IsS0FBSyxFQUFFLFNBQVM7UUFDaEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsR0FBRyxFQUFFLEVBQUU7S0FDVjtJQUNEO1FBQ0ksT0FBTyxFQUFFLDJDQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFO1FBQzdCLEtBQUssRUFBRSxZQUFZO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEdBQUcsRUFBRSxFQUFFO0tBQ1Y7SUFDRDtRQUNJLE9BQU8sRUFBRSwyQ0FBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRTtRQUM3QixLQUFLLEVBQUUsY0FBYztRQUNyQixRQUFRLEVBQUUsV0FBVztRQUNyQixHQUFHLEVBQUUsRUFBRTtLQUNWO0lBQ0Q7UUFDSSxPQUFPLEVBQUUsMkNBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDN0IsS0FBSyxFQUFFLFlBQVk7UUFDbkIsUUFBUSxFQUFFLFdBQVc7UUFDckIsR0FBRyxFQUFFLEdBQUc7S0FDWDtDQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkgrQztBQUNGO0FBQ0g7QUFFSDtBQUNHO0FBQ1Q7QUFDVTtBQUU3QyxNQUFNLFNBQVMsR0FBRyxJQUFJLDhEQUFTLENBQzNCLHNEQUFRLENBQUMsUUFBUSxFQUNqQixzREFBUSxDQUFDLFFBQVEsRUFDakIsc0RBQVEsQ0FBQyxRQUFRLEVBQ2pCO0lBQ0ksTUFBTSxFQUFFO1FBQ0osVUFBVSxFQUFFLElBQUk7S0FDbkI7SUFDRCxJQUFJLEVBQUUsc0RBQVEsQ0FBQyxJQUFJO0lBQ25CLE9BQU8sRUFBRSxzREFBUSxDQUFDLE9BQU87SUFDekIsSUFBSSxFQUFFLHNEQUFRLENBQUMsSUFBSTtJQUNuQixjQUFjLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO0lBQzdCLElBQUksRUFBRSxzREFBUSxDQUFDLElBQUk7SUFDbkIsTUFBTSxFQUFFLENBQUUsR0FBRyw4Q0FBTSxDQUFFO0NBQ3hCLENBQ0osQ0FBQztBQUVLLE1BQU0sU0FBUyxHQUFHLEdBQVMsRUFBRTtJQUNoQyxNQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN0QywwREFBTSxDQUFDLElBQUksQ0FBQyx1REFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDNUMsSUFBSTtRQUNBLE1BQU0sdURBQUksQ0FBQyxVQUFVLENBQUMsNkNBQUssQ0FBQyxDQUFDO1FBQzdCLE1BQU0sdURBQUksQ0FBQyxVQUFVLENBQUMsOENBQU0sQ0FBQyxDQUFDO1FBQzlCLDBEQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7S0FDL0M7SUFDRCxPQUFPLENBQUMsRUFBRTtRQUNOLE1BQU0sQ0FBQyxDQUFDO0tBQ1g7SUFDRCxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLCtEQUErRDtJQUMvRCw4RUFBOEU7SUFDOUUsNEVBQTRFO0FBQ2hGLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQzFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ0w7QUFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZPO0FBQ087QUFFUDtBQUcyQjtBQUNOO0FBRTNELE1BQU0sY0FBYyxHQUFXLENBQUMsQ0FBQztBQUNqQyxNQUFNLGFBQWEsR0FBVyxFQUFFLENBQUM7QUFFakMsTUFBTSxNQUFNLEdBQUcsQ0FBTyxNQUFtQixFQUE2QixFQUFFO0lBQ3BFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUNsRCxNQUFNLE1BQU0sR0FBVyxXQUFXLElBQUksUUFBUSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxjQUFjLENBQUM7SUFDbEYsTUFBTSxLQUFLLEdBQVcsVUFBVSxJQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLEdBQUcsTUFBTSxJQUFJLGFBQWEsQ0FBQztJQUN2RixNQUFNLEtBQUssR0FBaUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUUsNENBQUUsQ0FBQyxLQUFLLENBQUUsRUFBRSxJQUFLLEtBQU0sR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3pGLE1BQU0sS0FBSyxHQUFHLE1BQU0sdURBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUUvRSxPQUFPLHFFQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEMsQ0FBQyxFQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUcsQ0FBTyxPQUFlLEVBQTJCLEVBQUU7SUFDL0QsTUFBTSxJQUFJLEdBQUcsTUFBTSx1REFBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFdEUsSUFBSyxDQUFDLElBQUk7UUFBRyxNQUFNLGtEQUFXLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLGlEQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUV0RSxPQUFPLG9FQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEMsQ0FBQyxFQUFDO0FBRUYsTUFBTSxVQUFVLEdBQUcsQ0FBTyxTQUFvQixFQUFpQixFQUFFO0lBQzdELE1BQU0sSUFBSSxHQUFHLE1BQU0sdURBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUU1RSxJQUFLLElBQUk7UUFBRyxNQUFNLGtEQUFXLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLGlEQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUVsRSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDckIsQ0FBQyxFQUFDO0FBRUYsTUFBTSxVQUFVLEdBQUcsQ0FBTyxPQUFlLEVBQUUsWUFBMEIsRUFBaUIsRUFBRTtJQUNwRixNQUFNLElBQUksR0FBRyxNQUFNLHVEQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUV0RSxJQUFLLENBQUMsSUFBSTtRQUFHLE1BQU0sa0RBQVcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsaURBQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBRXRFLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztJQUNoQyxJQUFJLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUM7SUFFNUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2hCLENBQUMsRUFBQztBQUVGLE1BQU0sVUFBVSxHQUFHLENBQU8sT0FBZSxFQUFpQixFQUFFO0lBQ3hELE1BQU0sSUFBSSxHQUFHLE1BQU0sdURBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRXRFLElBQUssQ0FBQyxJQUFJO1FBQUcsTUFBTSxrREFBVyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxpREFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFFdEUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ25CLENBQUMsRUFBQztBQUVLLE1BQU0sT0FBTyxHQUFHO0lBQ25CLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtJQUNWLFVBQVU7SUFDVixVQUFVO0NBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzlERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBRXBELE1BQU0sY0FBYyxHQUFHLENBQUMsSUFBVSxFQUFrQixFQUFFLENBQUMsQ0FBQztJQUMzRCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87SUFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO0lBQ2pCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztDQUNoQixDQUFDLENBQUM7QUFFSSxNQUFNLGVBQWUsR0FBRyxDQUFDLEtBQWEsRUFBb0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUVyRyxNQUFNLFFBQVEsR0FBRyxDQUFDLElBQWUsRUFBRSxPQUFlLEVBQWEsRUFBRSxDQUNwRSxJQUFJLHVEQUFTLENBQUM7SUFDVixPQUFPLEVBQUUsT0FBTztJQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7SUFDakIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO0NBQzFCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2pCUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxQzs7Ozs7Ozs7Ozs7OztBQ0FyQztBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUcxRCxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUM7QUFFM0IsTUFBTSxpQkFBaUIsR0FBVyxJQUFJLENBQUM7QUFFdkMsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLDhDQUFNLENBQUM7QUFDeEQsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBcUIsRUFBVSxFQUFFLENBQUMsR0FBSSxTQUFVLEtBQU0sS0FBTSxNQUFPLE9BQVEsRUFBRSxDQUFDLENBQUM7QUFFcEksTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGtEQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDekcsTUFBTSxjQUFjLEdBQUcsSUFBSSxrREFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7QUFDekksTUFBTSxhQUFhLEdBQUcsSUFBSSxrREFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7QUFDekksTUFBTSxhQUFhLEdBQUcsSUFBSSxrREFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7QUFFOUgsTUFBTSxNQUFNLEdBQUcsNERBQVksQ0FBQztJQUMvQixXQUFXLEVBQUUsS0FBSztJQUNsQixNQUFNLEVBQUUsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLFNBQVMsQ0FBQztJQUN2QyxVQUFVLEVBQUU7UUFDUixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGFBQWE7UUFDYixhQUFhO0tBQ2hCO0NBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDeEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpQztBQUN3QjtBQUV6RCxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDbEIsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDO0FBRWIsTUFBTSxTQUFTLEdBQUcsOEVBQWUsRUFBRSxDQUFDO0FBRXBDLE1BQU0saUJBQWlCLEdBQUcsZ0RBQVUsQ0FBQztJQUN4QyxLQUFLLEVBQUUsZ0RBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUM5QixHQUFHLEVBQUUsZ0RBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzNELFFBQVEsRUFBRSxnREFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFO0NBQy9DLENBQUMsQ0FBQztBQUVJLE1BQU0sb0JBQW9CLEdBQUcsZ0RBQVUsQ0FBQztJQUMzQyxLQUFLLEVBQUUsZ0RBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUM5QixHQUFHLEVBQUUsZ0RBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0NBQzlELENBQUMsQ0FBQztBQUVJLE1BQU0scUJBQXFCLEdBQUcsZ0RBQVUsQ0FBQztJQUM1QyxPQUFPLEVBQUUsZ0RBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRTtDQUNuQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNyQkg7QUFBQTtBQUFBO0FBQW9DO0FBRTdCLE1BQU0sTUFBTSxHQUFHO0lBQ2xCLGdEQUFJO0NBQ1AsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbUc7QUFPckcsSUFBYSxJQUFJLEdBQWpCLE1BQWEsSUFBSyxTQUFRLDBEQUFXO0NBbUJwQztBQWRHO0lBSkMsK0RBQVU7SUFDVixtRUFBTSxDQUFDLElBQUksQ0FBQztJQUNaLHNFQUFTLENBQUMsS0FBSyxDQUFDO0lBQ2hCLDJEQUFNOztxQ0FDUztBQUtoQjtJQUhDLHNFQUFTLENBQUMsS0FBSyxDQUFDO0lBQ2hCLG1FQUFNLENBQUMsSUFBSSxDQUFDO0lBQ1osMkRBQU07O21DQUNPO0FBSWQ7SUFGQyxzRUFBUyxDQUFDLEtBQUssQ0FBQztJQUNoQiwyREFBTTs7c0NBQ1U7QUFJakI7SUFGQyxzRUFBUyxDQUFDLEtBQUssQ0FBQztJQUNoQiwyREFBTTs7aUNBQ0s7QUFsQkgsSUFBSTtJQUxoQixrRUFBSyxDQUFDO1FBQ0gsTUFBTSxFQUFFLEtBQUs7UUFDYixTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsSUFBSTtLQUNqQixDQUFDO0dBQ1csSUFBSSxDQW1CaEI7QUFuQmdCOzs7Ozs7Ozs7Ozs7O0FDUGpCO0FBQUE7QUFBTyxNQUFNLE1BQU0sR0FBRztJQUNsQixVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsR0FBRztRQUNULE9BQU8sRUFBRSxXQUFXO1FBQ3BCLEtBQUssRUFBRSxRQUFRO0tBQ2xCO0NBQ0osQ0FBQzs7Ozs7Ozs7Ozs7OztBQ05GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEI7QUFFTztBQUNFO0FBRXZDLE1BQU0sVUFBVSxHQUFHLDhDQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDcEMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxpREFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsb0RBQVUsQ0FBQyxDQUFDO0FBRXJDLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNSMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBRW1CO0FBQzBEO0FBQ3RFO0FBRXJDLE1BQU0sVUFBVSxHQUFHLDhDQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDcEMsTUFBTSxNQUFNLEdBQUcsaURBQU0sQ0FBQyxVQUFVLENBQUM7QUFFakMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ3hCLEdBQUcsQ0FBQyw0REFBZSxDQUFDLFFBQVEsQ0FBQztLQUM3QixJQUFJLENBQUMsc0RBQVMsQ0FBQyxJQUFJLENBQUMsOERBQWlCLENBQUMsRUFBRSw0REFBZSxDQUFDLE9BQU8sQ0FBQztLQUNoRSxHQUFHLENBQUMsNERBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUVyQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7S0FDM0IsR0FBRyxDQUFDLDREQUFlLENBQUMsV0FBVyxDQUFDO0tBQ2hDLEdBQUcsQ0FBQyxzREFBUyxDQUFDLE1BQU0sQ0FBQyxrRUFBcUIsQ0FBQyxFQUFFLHNEQUFTLENBQUMsSUFBSSxDQUFDLGlFQUFvQixDQUFDLEVBQUUsNERBQWUsQ0FBQyxVQUFVLENBQUM7S0FDOUcsTUFBTSxDQUFDLDREQUFlLENBQUMsVUFBVSxDQUFDO0tBQ2xDLEdBQUcsQ0FBQyw0REFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRXRCLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNwQjFCO0FBQUE7QUFBQTtBQUFBO0FBQStCOzs7Ozs7Ozs7Ozs7O0FDQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0I7QUFFMkI7QUFHbkQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUEwRCxFQUE2QixFQUFFLENBQUMsb0RBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFckksTUFBTSxXQUFXLEdBQUcsQ0FBQyxPQUFlLEVBQTJCLEVBQUUsQ0FBQyxvREFBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUUzRixNQUFNLE9BQU8sR0FBRyxDQUFDLE9BQWtCLEVBQWlCLEVBQUUsQ0FBQyxvREFBTyxDQUFDLFVBQVUsQ0FBQyw2REFBUSxDQUFDLE9BQU8sRUFBRSwyQ0FBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUVuSCxNQUFNLFVBQVUsR0FBRyxDQUFDLE9BQWUsRUFBRSxZQUEwQixFQUFpQixFQUFFLENBQUMsb0RBQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBRTdILE1BQU0sVUFBVSxHQUFHLENBQUMsT0FBZSxFQUFFLEVBQUUsQ0FBQyxvREFBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUU3RCxNQUFNLFdBQVcsR0FBRztJQUN2QixXQUFXO0lBQ1gsV0FBVztJQUNYLE9BQU87SUFDUCxVQUFVO0lBQ1YsVUFBVTtDQUNiLENBQUM7Ozs7Ozs7Ozs7OztBQ3JCRixzQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJzZXJ2ZXItYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiaW1wb3J0IHsgRGlhbGVjdCB9IGZyb20gJ3NlcXVlbGl6ZSc7XHJcblxyXG5jb25zdCBkaWFsZWN0OiBEaWFsZWN0ID0gJ3Bvc3RncmVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRpYWxlY3Q6IGRpYWxlY3QsXHJcbiAgICBob3N0OiBcImVjMi01NC0yNDYtMTAwLTI0Ni5ldS13ZXN0LTEuY29tcHV0ZS5hbWF6b25hd3MuY29tXCIsXHJcbiAgICBwb3J0OiA1NDMyLFxyXG4gICAgZGF0YWJhc2U6IFwiZDNvdnMwa2hqODJhM2hcIixcclxuICAgIHVzZXJuYW1lOiBcInhkZHF2cmZ6d2R3ZWNyXCIsXHJcbiAgICBwYXNzd29yZDogXCIzZjQxYjUwNDdjZGRiYjUyNjFkMDdlMmE2ZTgyZWIzZjY0NTFkZThiMzg4NWUwMWNmNjEzNmFmNTk1NGQ3YTM3XCIsXHJcbiAgICBwb29sOiB7XHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgICAgIG1heDogNSxcclxuICAgICAgICBhY3F1aXJlOiAzMDAwMCxcclxuICAgICAgICBpZGxlOiAxMDAwMFxyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgZXhwcmVzcywgeyBBcHBsaWNhdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgTE9HX01FU1NBR0VTLCBQT1JUIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBkYkNvbm5lY3QgfSBmcm9tICcuL2RhdGEtYWNjZXNzJztcclxuaW1wb3J0IHJvb3RSb3V0ZXIgZnJvbSAnLi9yb3V0ZXMnO1xyXG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuL3JvdXRlcy9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgYXBwOiBBcHBsaWNhdGlvbiA9IGV4cHJlc3MoKTtcclxuXHJcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xyXG5hcHAudXNlKFJPVVRFUy51c2VyUm91dGVzLnJvb3QsIHJvb3RSb3V0ZXIpO1xyXG5cclxuYXBwLmxpc3RlbihQT1JULCBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgJHsgTE9HX01FU1NBR0VTLnBvcnRMaXN0ZW5pbmcgfSAkeyBQT1JUIH1gKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGJDb25uZWN0KCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgZTtcclxuICAgIH1cclxufSk7XHJcbiIsImV4cG9ydCBjb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA0MDAxO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVSUk9SUyA9IHtcclxuICAgIHVzZXJOb3RGb3VuZDogJ1VzZXIgbm90IEZvdW5kIScsXHJcbiAgICBtZXRob2ROb3RBbGxvd2VkOiAnTWV0aG9kIG5vdCBhbGxvd2VkIGhlcmUhJyxcclxuICAgIHVzZXJFeGlzdDogJ1RoaXMgbG9naW4gbmFtZSBhbHJlYWR5IGV4aXN0ISdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfTUVTU0FHRVMgPSB7XHJcbiAgICBjb25uZWN0aW9uU3VjY2VzczogJ0Nvbm5lY3Rpb24gaGFzIGJlZW4gZXN0YWJsaXNoZWQgc3VjY2Vzc2Z1bGx5IScsXHJcbiAgICBjb25uZWN0aW9uRmFpbGVkOiAnVW5hYmxlIHRvIGNvbm5lY3QgdG8gdGhlIGRhdGFiYXNlOicsXHJcbiAgICBwb3J0TGlzdGVuaW5nOiAnTGlzdGVuaW5nIG9uIHBvcnQnXHJcbn07XHJcbiIsImltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdEhlbHBlciA9IGFzeW5jIChmbjogYW55LCByZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZuKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgICAgICAgPyByZXNwb25zZS5zZW5kKHsgZGF0YSwgc3RhdHVzOiAnc3VjY2VzcycgfSlcclxuICAgICAgICAgICAgOiByZXNwb25zZS5zZW5kKHsgc3RhdHVzOiAnc3VjY2VzcycgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlc3BvbnNlLnN0YXR1cyhlcnJvci5zdGF0dXMgfHwgNTAwKS5zZW5kKHsgZXJyb3I6IHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9IH0pO1xyXG4gICAgfVxyXG59O1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL3VzZXJzLmNvbnRyb2xsZXInO1xyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IsIHsgSHR0cEVycm9yIH0gZnJvbSAnaHR0cC1lcnJvcnMnO1xyXG5cclxuaW1wb3J0IHsgRVJST1JTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgdXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IHJlcXVlc3RIZWxwZXIgfSBmcm9tICcuL2Vycm9yLmhlbHBlcic7XHJcblxyXG5jb25zdCBnZXRVc2VycyA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJTZXJ2aWNlLmdldEFsbFVzZXJzKHJlcXVlc3QucXVlcnkpLCByZXNwb25zZSk7XHJcblxyXG5jb25zdCBnZXRVc2VyQnlJZCA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJTZXJ2aWNlLmdldFVzZXJCeUlkKHJlcXVlc3QucGFyYW1zLnVzZXJfaWQpLCByZXNwb25zZSk7XHJcblxyXG5jb25zdCBhZGRVc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gdXNlclNlcnZpY2UuYWRkVXNlcihyZXF1ZXN0LmJvZHkpLCByZXNwb25zZSk7XHJcblxyXG5jb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gdXNlclNlcnZpY2UudXBkYXRlVXNlcihyZXF1ZXN0LnBhcmFtcy51c2VyX2lkLCByZXF1ZXN0LmJvZHkpLCByZXNwb25zZSk7XHJcblxyXG5jb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT5cclxuICAgIHJlcXVlc3RIZWxwZXIoKCkgPT4gdXNlclNlcnZpY2UuZGVsZXRlVXNlcihyZXF1ZXN0LnBhcmFtcy51c2VyX2lkKSwgcmVzcG9uc2UpO1xyXG5cclxuY29uc3Qgbm90QWxsb3dlZCA9IChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgIGxldCBlcnI6IEh0dHBFcnJvciA9IGNyZWF0ZUVycm9yKDQwNSwgRVJST1JTLm1ldGhvZE5vdEFsbG93ZWQpO1xyXG5cclxuICAgIHJlc3BvbnNlLnN0YXR1cyhlcnIuc3RhdHVzKS5zZW5kKHsgc3RhdHVzOiBlcnIuc3RhdHVzLCBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2Vyc0NvbnRyb2xsZXIgPSB7XHJcbiAgICBnZXRVc2VycyxcclxuICAgIGRlbGV0ZVVzZXIsXHJcbiAgICB1cGRhdGVVc2VyLFxyXG4gICAgZ2V0VXNlckJ5SWQsXHJcbiAgICBhZGRVc2VyLFxyXG4gICAgbm90QWxsb3dlZFxyXG59O1xyXG4iLCJpbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3R5cGluZ3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJzMjogVXNlcltdID0gW1xyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6ICdodWV0YScsXHJcbiAgICAgICAgbG9naW46IFwiaHVldGFcIixcclxuICAgICAgICBwYXNzd29yZDogXCJodWV0YVwiLFxyXG4gICAgICAgIGFnZTogM1xyXG4gICAgfVxyXG5dO1xyXG5leHBvcnQgY29uc3QgdXNlcnM6IFVzZXJbXSA9IFtcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiAnYmxhYmxhYmxhJyxcclxuICAgICAgICBsb2dpbjogXCJBbmFraW5Ta3l3YWxrZXJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJhbmFraW5wYXNzXCIsXHJcbiAgICAgICAgYWdlOiAzMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJNYWNlV2luZHVcIixcclxuICAgICAgICBwYXNzd29yZDogXCJtYWNlcGFzc1wiLFxyXG4gICAgICAgIGFnZTogNzJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46IFwiQy0zUE9cIixcclxuICAgICAgICBwYXNzd29yZDogXCJjM3AwcGFzc1wiLFxyXG4gICAgICAgIGFnZTogMzJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46IFwiTHVrZVNreXdhbGtlclwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcImx1a2VwYXNzXCIsXHJcbiAgICAgICAgYWdlOiAyM1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJEYXJ0aE1hdWxcIixcclxuICAgICAgICBwYXNzd29yZDogXCJkYXJ0aHBhc3NcIixcclxuICAgICAgICBhZ2U6IDQ0XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiBcIlF1aUdvbkppbm5cIixcclxuICAgICAgICBwYXNzd29yZDogXCJxdWlwYXNzXCIsXHJcbiAgICAgICAgYWdlOiA4MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJPYmlXYW5LZW5vYmlcIixcclxuICAgICAgICBwYXNzd29yZDogXCJvYmlwYXNzXCIsXHJcbiAgICAgICAgYWdlOiA0N1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJQYWxwYXRpbmVcIixcclxuICAgICAgICBwYXNzd29yZDogXCJwYWxwYXRpbmVwYXNzXCIsXHJcbiAgICAgICAgYWdlOiA4MlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJZb2RhXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwieW9kYXBhc3NcIixcclxuICAgICAgICBhZ2U6IDEzMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJTbm9rZVwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcInNub2tlcGFzc1wiLFxyXG4gICAgICAgIGFnZTogNTNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46IFwiQm9iYUZldHRcIixcclxuICAgICAgICBwYXNzd29yZDogXCJib2JhcGFzc1wiLFxyXG4gICAgICAgIGFnZTogMzZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46IFwiQ2hld2JhY2NhXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiY2hld2JhY2NhcGFzc1wiLFxyXG4gICAgICAgIGFnZTogMTMwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiBcIkhhblNvbG9cIixcclxuICAgICAgICBwYXNzd29yZDogXCJoYW5wYXNzXCIsXHJcbiAgICAgICAgYWdlOiA2NlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJLeWxvUmVuXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwia3lsb3Bhc3NcIixcclxuICAgICAgICBhZ2U6IDMwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJfaWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiBcIkxlaWFPcmdhbmFcIixcclxuICAgICAgICBwYXNzd29yZDogXCJsZWlhcGFzc1wiLFxyXG4gICAgICAgIGFnZTogNTNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcl9pZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46IFwiUGFkbWVBbWlkYWxhXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwicGFkbWVwYXNzXCIsXHJcbiAgICAgICAgYWdlOiAyN1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VyX2lkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJDb3VudERvb2t1XCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiZG9rb29wYXNzXCIsXHJcbiAgICAgICAgYWdlOiAxMDJcclxuICAgIH1cclxuXTtcclxuIiwiaW1wb3J0IHsgU2VxdWVsaXplIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xyXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi9taWRkbGV3YXJlcy9sb2dnZXInO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xyXG5cclxuaW1wb3J0IHsgdXNlcnMsIHVzZXJzMiB9IGZyb20gJy4vYmFja3VwJztcclxuaW1wb3J0IHsgTE9HX01FU1NBR0VTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgbW9kZWxzIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IGRiQ29uZmlnIGZyb20gJy4vLi4vLi4vY29uZmlnL2NvbmZpZyc7XHJcblxyXG5jb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKFxyXG4gICAgZGJDb25maWcuZGF0YWJhc2UsXHJcbiAgICBkYkNvbmZpZy51c2VybmFtZSxcclxuICAgIGRiQ29uZmlnLnBhc3N3b3JkLFxyXG4gICAge1xyXG4gICAgICAgIGRlZmluZToge1xyXG4gICAgICAgICAgICB0aW1lc3RhbXBzOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3J0OiBkYkNvbmZpZy5wb3J0LFxyXG4gICAgICAgIGRpYWxlY3Q6IGRiQ29uZmlnLmRpYWxlY3QsXHJcbiAgICAgICAgaG9zdDogZGJDb25maWcuaG9zdCxcclxuICAgICAgICBkaWFsZWN0T3B0aW9uczogeyBzc2w6IHRydWUgfSxcclxuICAgICAgICBwb29sOiBkYkNvbmZpZy5wb29sLFxyXG4gICAgICAgIG1vZGVsczogWyAuLi5tb2RlbHMgXVxyXG4gICAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRiQ29ubmVjdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IHNlcXVlbGl6ZS5zeW5jKHsgZm9yY2U6IHRydWUgfSk7XHJcbiAgICBsb2dnZXIuaW5mbyhMT0dfTUVTU0FHRVMuY29ubmVjdGlvblN1Y2Nlc3MpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBVc2VyLmJ1bGtDcmVhdGUodXNlcnMpO1xyXG4gICAgICAgIGF3YWl0IFVzZXIuYnVsa0NyZWF0ZSh1c2VyczIpO1xyXG4gICAgICAgIGxvZ2dlci5pbmZvKCdEYXRhYmFzZSByZXN0b3JpbmcgY29tcGxldGUhJyk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4gc2VxdWVsaXplXHJcbiAgICAvLyAgICAgLnN5bmMoeyBmb3JjZTogdHJ1ZSB9KVxyXG4gICAgLy8gICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKExPR19NRVNTQUdFUy5jb25uZWN0aW9uU3VjY2VzcykpXHJcbiAgICAvLyAgICAgLnRoZW4oKCkgPT4gdXNlcnMuZm9yRWFjaCh1c2VyID0+IHVzZXJUb0RiKHVzZXIsIHVzZXIudXNlcl9pZCkuc2F2ZSgpKSlcclxuICAgIC8vICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihMT0dfTUVTU0FHRVMuY29ubmVjdGlvbkZhaWxlZCwgZXJyb3IpKTtcclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi91c2VyREFMJztcclxuZXhwb3J0ICogZnJvbSAnLi9kYic7XHJcbmV4cG9ydCAqIGZyb20gJy4vdXNlcnMucGFyc2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi90eXBpbmdzJztcclxuIiwiaW1wb3J0IGNyZWF0ZUVycm9yIGZyb20gJ2h0dHAtZXJyb3JzJztcclxuaW1wb3J0IHsgV2hlcmVPcHRpb25zLCBPcCB9IGZyb20gJ3NlcXVlbGl6ZSc7XHJcblxyXG5pbXBvcnQgeyBFUlJPUlMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBVc2VyVG9SZXNwb25zZSwgVXNlclRvVXBkYXRlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90eXBpbmdzJztcclxuaW1wb3J0IHsgUXVlcnlQYXJhbXMgfSBmcm9tICcuL3R5cGluZ3MnO1xyXG5pbXBvcnQgeyB1c2Vyc1RvUmVzcG9uc2UsIHVzZXJUb1Jlc3BvbnNlIH0gZnJvbSAnLi91c2Vycy5wYXJzZXInO1xyXG5pbXBvcnQgeyBVc2VyIGFzIFVzZXJNb2RlbCB9IGZyb20gJy4vLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xyXG5cclxuY29uc3QgREVGQVVMVF9PRkZTRVQ6IG51bWJlciA9IDA7XHJcbmNvbnN0IERFRkFVTFRfTElNSVQ6IG51bWJlciA9IDIwO1xyXG5cclxuY29uc3QgZ2V0QWxsID0gYXN5bmMgKHBhcmFtczogUXVlcnlQYXJhbXMpOiBQcm9taXNlPFVzZXJUb1Jlc3BvbnNlW10+ID0+IHtcclxuICAgIGNvbnN0IHsgbG9naW4sIG9mZnNldFBhcmFtLCBsaW1pdFBhcmFtIH0gPSBwYXJhbXM7XHJcbiAgICBjb25zdCBvZmZzZXQ6IG51bWJlciA9IG9mZnNldFBhcmFtICYmIHBhcnNlSW50KG9mZnNldFBhcmFtLCAxMCkgfHwgREVGQVVMVF9PRkZTRVQ7XHJcbiAgICBjb25zdCBsaW1pdDogbnVtYmVyID0gbGltaXRQYXJhbSAmJiBwYXJzZUludChsaW1pdFBhcmFtLCAxMCkgKyBvZmZzZXQgfHwgREVGQVVMVF9MSU1JVDtcclxuICAgIGNvbnN0IHdoZXJlOiBXaGVyZU9wdGlvbnMgPSBsb2dpbiA/IHsgbG9naW5uYW1lOiB7IFsgT3AuaUxpa2UgXTogYCUkeyBsb2dpbiB9JWAgfSB9IDoge307XHJcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IFVzZXJNb2RlbC5maW5kQWxsKHsgb2Zmc2V0OiBvZmZzZXQsIGxpbWl0OiBsaW1pdCwgd2hlcmUgfSk7XHJcblxyXG4gICAgcmV0dXJuIHVzZXJzVG9SZXNwb25zZSh1c2Vycyk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRVc2VyID0gYXN5bmMgKHVzZXJfaWQ6IHN0cmluZyk6IFByb21pc2U8VXNlclRvUmVzcG9uc2U+ID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IHdoZXJlOiB7IHVzZXJfaWQ6IHVzZXJfaWQgfSB9KTtcclxuXHJcbiAgICBpZiAoICF1c2VyICkgdGhyb3cgY3JlYXRlRXJyb3IoNDA0LCB7IG1lc3NhZ2U6IEVSUk9SUy51c2VyTm90Rm91bmQgfSk7XHJcblxyXG4gICAgcmV0dXJuIHVzZXJUb1Jlc3BvbnNlKHVzZXIpO1xyXG59O1xyXG5cclxuY29uc3QgaW5zZXJ0VXNlciA9IGFzeW5jICh1c2VyTW9kZWw6IFVzZXJNb2RlbCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kT25lKHsgd2hlcmU6IHsgbG9naW46IHVzZXJNb2RlbC5sb2dpbiB9IH0pO1xyXG5cclxuICAgIGlmICggdXNlciApIHRocm93IGNyZWF0ZUVycm9yKDQwMCwgeyBtZXNzYWdlOiBFUlJPUlMudXNlckV4aXN0IH0pO1xyXG5cclxuICAgIHVzZXJNb2RlbC5zYXZlKCk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKHVzZXJfaWQ6IHN0cmluZywgdXNlclRvVXBkYXRlOiBVc2VyVG9VcGRhdGUpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IHdoZXJlOiB7IHVzZXJfaWQ6IHVzZXJfaWQgfSB9KTtcclxuXHJcbiAgICBpZiAoICF1c2VyICkgdGhyb3cgY3JlYXRlRXJyb3IoNDA0LCB7IG1lc3NhZ2U6IEVSUk9SUy51c2VyTm90Rm91bmQgfSk7XHJcblxyXG4gICAgdXNlci5sb2dpbiA9IHVzZXJUb1VwZGF0ZS5sb2dpbjtcclxuICAgIHVzZXIuYWdlID0gdXNlclRvVXBkYXRlLmFnZTtcclxuXHJcbiAgICB1c2VyLnNhdmUoKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAodXNlcl9pZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoeyB3aGVyZTogeyB1c2VyX2lkOiB1c2VyX2lkIH0gfSk7XHJcblxyXG4gICAgaWYgKCAhdXNlciApIHRocm93IGNyZWF0ZUVycm9yKDQwNCwgeyBtZXNzYWdlOiBFUlJPUlMudXNlck5vdEZvdW5kIH0pO1xyXG5cclxuICAgIHVzZXIuZGVzdHJveSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJEQUwgPSB7XHJcbiAgICBnZXRBbGwsXHJcbiAgICBnZXRVc2VyLFxyXG4gICAgaW5zZXJ0VXNlcixcclxuICAgIHVwZGF0ZVVzZXIsXHJcbiAgICBkZWxldGVVc2VyXHJcbn07XHJcbiIsImltcG9ydCB7IFVzZXJUb1Jlc3BvbnNlLCBVc2VyVG9BZGQsIFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3R5cGluZ3MnO1xyXG5pbXBvcnQgeyBVc2VyIGFzIFVzZXJNb2RlbCB9IGZyb20gJy4vLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJUb1Jlc3BvbnNlID0gKHVzZXI6IFVzZXIpOiBVc2VyVG9SZXNwb25zZSA9PiAoe1xyXG4gICAgdXNlcl9pZDogdXNlci51c2VyX2lkLFxyXG4gICAgbG9naW46IHVzZXIubG9naW4sXHJcbiAgICBhZ2U6IHVzZXIuYWdlXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJzVG9SZXNwb25zZSA9ICh1c2VyczogVXNlcltdKTogVXNlclRvUmVzcG9uc2VbXSA9PiB1c2Vycy5tYXAodXNlciA9PiB1c2VyVG9SZXNwb25zZSh1c2VyKSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclRvRGIgPSAodXNlcjogVXNlclRvQWRkLCB1c2VyX2lkOiBzdHJpbmcpOiBVc2VyTW9kZWwgPT5cclxuICAgIG5ldyBVc2VyTW9kZWwoe1xyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJfaWQsXHJcbiAgICAgICAgbG9naW46IHVzZXIubG9naW4sXHJcbiAgICAgICAgYWdlOiB1c2VyLmFnZSxcclxuICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgfSk7XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vdmFsaWRhdGlvbi5zZXJ2aXNlJztcclxuIiwiaW1wb3J0IHsgY3JlYXRlTG9nZ2VyLCB0cmFuc3BvcnRzLCBmb3JtYXQgfSBmcm9tICd3aW5zdG9uJ1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm1hYmxlSW5mbyB9IGZyb20gJ2xvZ2Zvcm0nO1xyXG5cclxuY29uc3QgTE9HX0RJUk5BTUUgPSAnbG9ncyc7XHJcblxyXG5jb25zdCBMT0dfRklMRV9NQVhfU0laRTogbnVtYmVyID0gNTAwMDtcclxuXHJcbmNvbnN0IHsgY29sb3JpemUsIGNvbWJpbmUsIHByaW50ZiwgdGltZXN0YW1wIH0gPSBmb3JtYXQ7XHJcbmNvbnN0IGZvcm1hdHRlciA9IHByaW50ZigoeyBsZXZlbCwgbWVzc2FnZSwgdGltZXN0YW1wIH06IFRyYW5zZm9ybWFibGVJbmZvKTogc3RyaW5nID0+IGAkeyB0aW1lc3RhbXAgfSBbJHsgbGV2ZWwgfV06ICR7IG1lc3NhZ2UgfWApO1xyXG5cclxuY29uc3QgY29uc29sZVRyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRzLkNvbnNvbGUoeyBmb3JtYXQ6IGNvbWJpbmUoY29sb3JpemUoKSwgdGltZXN0YW1wKCksIGZvcm1hdHRlcikgfSk7XHJcbmNvbnN0IGVycm9yVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydHMuRmlsZSh7IGRpcm5hbWU6IExPR19ESVJOQU1FLCBmaWxlbmFtZTogJ2Vycm9ycy5sb2cnLCBsZXZlbDogJ2Vycm9yJywgbWF4c2l6ZTogTE9HX0ZJTEVfTUFYX1NJWkUgfSk7XHJcbmNvbnN0IHdhcm5UcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0cy5GaWxlKHsgZGlybmFtZTogTE9HX0RJUk5BTUUsIGZpbGVuYW1lOiAnd2FybmluZ3MubG9nJywgbGV2ZWw6ICd3YXJuJywgbWF4c2l6ZTogTE9HX0ZJTEVfTUFYX1NJWkUgfSk7XHJcbmNvbnN0IGluZm9UcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0cy5GaWxlKHsgZGlybmFtZTogTE9HX0RJUk5BTUUsIGZpbGVuYW1lOiAnaW5mby5sb2cnLCBsZXZlbDogJ2luZm8nLCBtYXhzaXplOiBMT0dfRklMRV9NQVhfU0laRSB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dnZXIgPSBjcmVhdGVMb2dnZXIoe1xyXG4gICAgZXhpdE9uRXJyb3I6IGZhbHNlLFxyXG4gICAgZm9ybWF0OiBjb21iaW5lKHRpbWVzdGFtcCgpLCBmb3JtYXR0ZXIpLFxyXG4gICAgdHJhbnNwb3J0czogW1xyXG4gICAgICAgIGNvbnNvbGVUcmFuc3BvcnQsXHJcbiAgICAgICAgZXJyb3JUcmFuc3BvcnQsXHJcbiAgICAgICAgaW5mb1RyYW5zcG9ydCxcclxuICAgICAgICB3YXJuVHJhbnNwb3J0XHJcbiAgICBdXHJcbn0pO1xyXG4iLCJpbXBvcnQgKiBhcyBKb2kgZnJvbSAnQGhhcGkvam9pJztcclxuaW1wb3J0IHsgY3JlYXRlVmFsaWRhdG9yIH0gZnJvbSAnZXhwcmVzcy1qb2ktdmFsaWRhdGlvbic7XHJcblxyXG5jb25zdCBNSU5fQUdFID0gNDtcclxuY29uc3QgTUFYX0FHRSA9IDEzMDtcclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0b3IgPSBjcmVhdGVWYWxpZGF0b3IoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRVc2VyQm9keVNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgbG9naW46IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgYWdlOiBKb2kubnVtYmVyKCkucmVxdWlyZWQoKS5ncmVhdGVyKE1JTl9BR0UpLmxlc3MoTUFYX0FHRSksXHJcbiAgICBwYXNzd29yZDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCkuYWxwaGFudW0oKVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyQm9keVNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgbG9naW46IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgYWdlOiBKb2kubnVtYmVyKCkucmVxdWlyZWQoKS5ncmVhdGVyKE1JTl9BR0UpLmxlc3MoTUFYX0FHRSlcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlclF1ZXJ5U2NoZW1hID0gSm9pLm9iamVjdCh7XHJcbiAgICB1c2VyX2lkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKVxyXG59KTtcclxuIiwiaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlci5tb2RlbCc7XHJcblxyXG5leHBvcnQgY29uc3QgbW9kZWxzID0gW1xyXG4gICAgVXNlclxyXG5dO1xyXG4iLCJpbXBvcnQgeyBDb2x1bW4sIFRhYmxlLCBNb2RlbCwgUHJpbWFyeUtleSwgQWxsb3dOdWxsLCBVbmlxdWUsIERhdGFUeXBlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xyXG5cclxuQFRhYmxlKHtcclxuICAgIHNjaGVtYTogJ25ldycsXHJcbiAgICB0YWJsZU5hbWU6ICd1c2VycycsXHJcbiAgICBwYXJhbm9pZDogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlciBleHRlbmRzIE1vZGVsPFVzZXI+IHtcclxuICAgIEBQcmltYXJ5S2V5XHJcbiAgICBAVW5pcXVlKHRydWUpXHJcbiAgICBAQWxsb3dOdWxsKGZhbHNlKVxyXG4gICAgQENvbHVtblxyXG4gICAgdXNlcl9pZDogc3RyaW5nO1xyXG5cclxuICAgIEBBbGxvd051bGwoZmFsc2UpXHJcbiAgICBAVW5pcXVlKHRydWUpXHJcbiAgICBAQ29sdW1uXHJcbiAgICBsb2dpbjogc3RyaW5nO1xyXG5cclxuICAgIEBBbGxvd051bGwoZmFsc2UpXHJcbiAgICBAQ29sdW1uXHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuICAgIEBBbGxvd051bGwoZmFsc2UpXHJcbiAgICBAQ29sdW1uXHJcbiAgICBhZ2U6IG51bWJlcjtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgUk9VVEVTID0ge1xyXG4gICAgdXNlclJvdXRlczoge1xyXG4gICAgICAgIHJvb3Q6ICcvJyxcclxuICAgICAgICB1c2VyX2lkOiAnLzp1c2VyX2lkJyxcclxuICAgICAgICB1c2VyczogJy91c2VycydcclxuICAgIH1cclxufTtcclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB1c2VyUm91dGVyIGZyb20gJy4vdXNlci1yb3V0ZXInO1xyXG5cclxuY29uc3Qgcm9vdFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbnJvb3RSb3V0ZXIudXNlKFJPVVRFUy51c2VyUm91dGVzLnVzZXJzLCB1c2VyUm91dGVyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSb3V0ZXI7XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgdXNlcnNDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMnO1xyXG5pbXBvcnQgeyBhZGRVc2VyQm9keVNjaGVtYSwgdXBkYXRlVXNlckJvZHlTY2hlbWEsIHVwZGF0ZVVzZXJRdWVyeVNjaGVtYSwgdmFsaWRhdG9yIH0gZnJvbSAnLi4vbWlkZGxld2FyZXMnO1xyXG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCB1c2VyUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuY29uc3Qgcm91dGVzID0gUk9VVEVTLnVzZXJSb3V0ZXM7XHJcblxyXG51c2VyUm91dGVyLnJvdXRlKHJvdXRlcy5yb290KVxyXG4gICAgLmdldCh1c2Vyc0NvbnRyb2xsZXIuZ2V0VXNlcnMpXHJcbiAgICAucG9zdCh2YWxpZGF0b3IuYm9keShhZGRVc2VyQm9keVNjaGVtYSksIHVzZXJzQ29udHJvbGxlci5hZGRVc2VyKVxyXG4gICAgLmFsbCh1c2Vyc0NvbnRyb2xsZXIubm90QWxsb3dlZCk7XHJcblxyXG51c2VyUm91dGVyLnJvdXRlKHJvdXRlcy51c2VyX2lkKVxyXG4gICAgLmdldCh1c2Vyc0NvbnRyb2xsZXIuZ2V0VXNlckJ5SWQpXHJcbiAgICAucHV0KHZhbGlkYXRvci5wYXJhbXModXBkYXRlVXNlclF1ZXJ5U2NoZW1hKSwgdmFsaWRhdG9yLmJvZHkodXBkYXRlVXNlckJvZHlTY2hlbWEpLCB1c2Vyc0NvbnRyb2xsZXIudXBkYXRlVXNlcilcclxuICAgIC5kZWxldGUodXNlcnNDb250cm9sbGVyLmRlbGV0ZVVzZXIpXHJcbiAgICAuYWxsKHVzZXJzQ29udHJvbGxlci5ub3RBbGxvd2VkKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJSb3V0ZXI7XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vdXNlci5zZXJ2aXNlJztcclxuXHJcbiIsImltcG9ydCB1dWlkIGZyb20gJ3V1aWQnO1xyXG5cclxuaW1wb3J0IHsgdXNlckRBTCwgdXNlclRvRGIgfSBmcm9tICcuLi9kYXRhLWFjY2Vzcyc7XHJcbmltcG9ydCB7IFVzZXJUb0FkZCwgVXNlclRvUmVzcG9uc2UsIFVzZXJUb1VwZGF0ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcblxyXG5jb25zdCBnZXRBbGxVc2VycyA9IChxdWVyeTogeyBsb2dpbj86IHN0cmluZywgbGltaXQ/OiBzdHJpbmcsIG9mZnNldD86IHN0cmluZyB9KTogUHJvbWlzZTxVc2VyVG9SZXNwb25zZVtdPiA9PiB1c2VyREFMLmdldEFsbChxdWVyeSk7XHJcblxyXG5jb25zdCBnZXRVc2VyQnlJZCA9ICh1c2VyX2lkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXJUb1Jlc3BvbnNlPiA9PiB1c2VyREFMLmdldFVzZXIodXNlcl9pZCk7XHJcblxyXG5jb25zdCBhZGRVc2VyID0gKG5ld1VzZXI6IFVzZXJUb0FkZCk6IFByb21pc2U8dm9pZD4gPT4gdXNlckRBTC5pbnNlcnRVc2VyKHVzZXJUb0RiKG5ld1VzZXIsIHV1aWQudjEoKS50b1N0cmluZygpKSk7XHJcblxyXG5jb25zdCB1cGRhdGVVc2VyID0gKHVzZXJfaWQ6IHN0cmluZywgdXNlclRvVXBkYXRlOiBVc2VyVG9VcGRhdGUpOiBQcm9taXNlPHZvaWQ+ID0+IHVzZXJEQUwudXBkYXRlVXNlcih1c2VyX2lkLCB1c2VyVG9VcGRhdGUpO1xyXG5cclxuY29uc3QgZGVsZXRlVXNlciA9ICh1c2VyX2lkOiBzdHJpbmcpID0+IHVzZXJEQUwuZGVsZXRlVXNlcih1c2VyX2lkKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyU2VydmljZSA9IHtcclxuICAgIGdldEFsbFVzZXJzLFxyXG4gICAgZ2V0VXNlckJ5SWQsXHJcbiAgICBhZGRVc2VyLFxyXG4gICAgdXBkYXRlVXNlcixcclxuICAgIGRlbGV0ZVVzZXJcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGhhcGkvam9pXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1qb2ktdmFsaWRhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwLWVycm9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplLXR5cGVzY3JpcHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3aW5zdG9uXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=