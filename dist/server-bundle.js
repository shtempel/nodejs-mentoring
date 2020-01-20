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
/* harmony import */ var _data_access_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-access/db */ "./src/data-access/db.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/routes/index.ts");
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
app.use('/', _routes__WEBPACK_IMPORTED_MODULE_3__["default"]);
app.listen(_constants__WEBPACK_IMPORTED_MODULE_1__["PORT"], () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Listening on port ${_constants__WEBPACK_IMPORTED_MODULE_1__["PORT"]}`);
    try {
        yield Object(_data_access_db__WEBPACK_IMPORTED_MODULE_2__["dbConnect"])();
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
    connectionFailed: 'Unable to connect to the database:'
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
const getUserById = (request, response) => __awaiter(void 0, void 0, void 0, function* () { return Object(_error_helper__WEBPACK_IMPORTED_MODULE_3__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_2__["userService"].getUserById(request.params.userId), response); });
const addUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () { return Object(_error_helper__WEBPACK_IMPORTED_MODULE_3__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_2__["userService"].addUser(request.body), response); });
const updateUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () { return Object(_error_helper__WEBPACK_IMPORTED_MODULE_3__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_2__["userService"].updateUser(request.params.userId, request.body), response); });
const deleteUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () { return Object(_error_helper__WEBPACK_IMPORTED_MODULE_3__["requestHelper"])(() => _services__WEBPACK_IMPORTED_MODULE_2__["userService"].deleteUser(request.params.userId), response); });
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
        userId: '1',
        login: "AnakinSkywalker",
        password: "anakinpass",
        age: 32
    },
    {
        userId: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "MaceWindu",
        password: "macepass",
        age: 72
    },
    {
        userId: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "C-3PO",
        password: "c3p0pass",
        age: 32
    },
    {
        userId: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "LukeSkywalker",
        password: "lukepass",
        age: 23
    },
    {
        userId: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "DarthMaul",
        password: "darthpass",
        age: 44
    },
    {
        userId: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "QuiGonJinn",
        password: "quipass",
        age: 80
    },
    {
        userId: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "ObiWanKenobi",
        password: "obipass",
        age: 47
    },
    {
        userId: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "Palpatine",
        password: "palpatinepass",
        age: 82
    },
    {
        userId: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "Yoda",
        password: "yodapass",
        age: 130
    },
    {
        userId: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "Snoke",
        password: "snokepass",
        age: 53
    },
    {
        userId: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "BobaFett",
        password: "bobapass",
        age: 36
    },
    {
        userId: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "Chewbacca",
        password: "chewbaccapass",
        age: 130
    },
    {
        userId: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "HanSolo",
        password: "hanpass",
        age: 66
    },
    {
        userId: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "KyloRen",
        password: "kylopass",
        age: 30
    },
    {
        userId: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "LeiaOrgana",
        password: "leiapass",
        age: 53
    },
    {
        userId: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
        login: "PadmeAmidala",
        password: "padmepass",
        age: 27
    },
    {
        userId: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString(),
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
/* harmony import */ var _backup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backup */ "./src/data-access/backup.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../config/config */ "./config/config.ts");
/* harmony import */ var _users_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users.parser */ "./src/data-access/users.parser.ts");






const sequelize = new sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Sequelize"](_config_config__WEBPACK_IMPORTED_MODULE_4__["default"].database, _config_config__WEBPACK_IMPORTED_MODULE_4__["default"].username, _config_config__WEBPACK_IMPORTED_MODULE_4__["default"].password, {
    define: {
        timestamps: true,
        paranoid: true
    },
    port: _config_config__WEBPACK_IMPORTED_MODULE_4__["default"].port,
    dialect: _config_config__WEBPACK_IMPORTED_MODULE_4__["default"].dialect,
    host: _config_config__WEBPACK_IMPORTED_MODULE_4__["default"].host,
    dialectOptions: { ssl: true },
    pool: _config_config__WEBPACK_IMPORTED_MODULE_4__["default"].pool,
    models: [..._models__WEBPACK_IMPORTED_MODULE_3__["models"]]
});
const dbConnect = () => {
    return sequelize
        .sync({ force: true })
        .then(() => console.log(_constants__WEBPACK_IMPORTED_MODULE_2__["LOG_MESSAGES"].connectionSuccess))
        .then(() => _backup__WEBPACK_IMPORTED_MODULE_1__["users"].forEach(user => Object(_users_parser__WEBPACK_IMPORTED_MODULE_5__["userToDb"])(user, user.userId).save()))
        .catch(error => console.error(_constants__WEBPACK_IMPORTED_MODULE_2__["LOG_MESSAGES"].connectionFailed, error));
};


/***/ }),

/***/ "./src/data-access/index.ts":
/*!**********************************!*\
  !*** ./src/data-access/index.ts ***!
  \**********************************/
/*! exports provided: userDAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userDAL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userDAL */ "./src/data-access/userDAL.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userDAL", function() { return _userDAL__WEBPACK_IMPORTED_MODULE_0__["userDAL"]; });




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
const getUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"].findOne({ where: { user_id: userId } });
    if (!user)
        throw http_errors__WEBPACK_IMPORTED_MODULE_0___default()(404, { message: _constants__WEBPACK_IMPORTED_MODULE_2__["ERRORS"].userNotFound });
    return Object(_users_parser__WEBPACK_IMPORTED_MODULE_3__["userToResponse"])(user);
});
const insertUser = (userModel) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"].findOne({ where: { loginname: userModel.loginname } });
    if (user)
        throw http_errors__WEBPACK_IMPORTED_MODULE_0___default()(400, { message: _constants__WEBPACK_IMPORTED_MODULE_2__["ERRORS"].userExist });
    userModel.save();
});
const updateUser = (userId, userToUpdate) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"].findOne({ where: { user_id: userId } });
    if (!user)
        throw http_errors__WEBPACK_IMPORTED_MODULE_0___default()(404, { message: _constants__WEBPACK_IMPORTED_MODULE_2__["ERRORS"].userNotFound });
    user.loginname = userToUpdate.login;
    user.age = userToUpdate.age;
    user.save();
});
const deleteUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"].findOne({ where: { user_id: userId } });
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
    userId: user.user_id,
    login: user.loginname,
    age: user.age
});
const usersToResponse = (users) => users.map(user => userToResponse(user));
const userToDb = (user, userId) => new _models_user_model__WEBPACK_IMPORTED_MODULE_0__["User"]({
    user_id: userId,
    loginname: user.login,
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
    userId: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["string"]().required()
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
    sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Column"],
    __metadata("design:type", String)
], User.prototype, "user_id", void 0);
__decorate([
    sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Column"],
    __metadata("design:type", String)
], User.prototype, "loginname", void 0);
__decorate([
    sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Column"],
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
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
        userId: '/:userId',
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
userRouter.route(routes.userId)
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
/* harmony import */ var _data_access_users_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-access/users.parser */ "./src/data-access/users.parser.ts");



const getAllUsers = (query) => _data_access__WEBPACK_IMPORTED_MODULE_1__["userDAL"].getAll(query);
const getUserById = (userId) => _data_access__WEBPACK_IMPORTED_MODULE_1__["userDAL"].getUser(userId);
const addUser = (newUser) => _data_access__WEBPACK_IMPORTED_MODULE_1__["userDAL"].insertUser(Object(_data_access_users_parser__WEBPACK_IMPORTED_MODULE_2__["userToDb"])(newUser, uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString()));
const updateUser = (userId, userToUpdate) => _data_access__WEBPACK_IMPORTED_MODULE_1__["userDAL"].updateUser(userId, userToUpdate);
const deleteUser = (userId) => _data_access__WEBPACK_IMPORTED_MODULE_1__["userDAL"].deleteUser(userId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2Vycm9yLmhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL3VzZXJzLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtYWNjZXNzL2JhY2t1cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1hY2Nlc3MvZGIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtYWNjZXNzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLWFjY2Vzcy91c2VyREFMLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLWFjY2Vzcy91c2Vycy5wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pZGRsZXdhcmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlcy92YWxpZGF0aW9uLnNlcnZpc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3VzZXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3VzZXItcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdXNlci5zZXJ2aXNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBoYXBpL2pvaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLWpvaS12YWxpZGF0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cC1lcnJvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemUtdHlwZXNjcmlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV1aWRcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQUEsTUFBTSxPQUFPLEdBQVksVUFBVSxDQUFDO0FBRXJCO0lBQ1gsT0FBTyxFQUFFLE9BQU87SUFDaEIsSUFBSSxFQUFFLG9EQUFvRDtJQUMxRCxJQUFJLEVBQUUsSUFBSTtJQUNWLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixRQUFR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LENBQUMsb0RBQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFM0QsTUFBTSxXQUFXLEdBQUc7SUFDdkIsV0FBVztJQUNYLFdBQVc7SUFDWCxPQUFPO0lBQ1AsVUFBVTtJQUNWLFVBQVU7Q0FDYixDQUFDOzs7Ozs7Ozs7Ozs7QUN0QkYsc0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoic2VydmVyLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC50c1wiKTtcbiIsImltcG9ydCB7IERpYWxlY3QgfSBmcm9tICdzZXF1ZWxpemUnO1xyXG5cclxuY29uc3QgZGlhbGVjdDogRGlhbGVjdCA9ICdwb3N0Z3Jlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkaWFsZWN0OiBkaWFsZWN0LFxyXG4gICAgaG9zdDogXCJlYzItNTQtMjQ2LTEwMC0yNDYuZXUtd2VzdC0xLmNvbXB1dGUuYW1hem9uYXdzLmNvbVwiLFxyXG4gICAgcG9ydDogNTQzMixcclxuICAgIGRhdGFiYXNlOiBcImQzb3ZzMGtoajgyYTNoXCIsXHJcbiAgICB1c2VybmFtZTogXCJ4ZGRxdnJmendkd2VjclwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiM2Y0MWI1MDQ3Y2RkYmI1MjYxZDA3ZTJhNmU4MmViM2Y2NDUxZGU4YjM4ODVlMDFjZjYxMzZhZjU5NTRkN2EzN1wiLFxyXG4gICAgcG9vbDoge1xyXG4gICAgICAgIG1pbjogMCxcclxuICAgICAgICBtYXg6IDUsXHJcbiAgICAgICAgYWNxdWlyZTogMzAwMDAsXHJcbiAgICAgICAgaWRsZTogMTAwMDBcclxuICAgIH1cclxufTtcclxuIiwiaW1wb3J0IGV4cHJlc3MsIHsgQXBwbGljYXRpb24gfSBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IFBPUlQgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGRiQ29ubmVjdCB9IGZyb20gJy4vZGF0YS1hY2Nlc3MvZGInO1xyXG5pbXBvcnQgcm9vdFJvdXRlciBmcm9tICcuL3JvdXRlcyc7XHJcblxyXG5jb25zdCBhcHA6IEFwcGxpY2F0aW9uID0gZXhwcmVzcygpO1xyXG5cclxuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XHJcbmFwcC51c2UoJy8nLCByb290Um91dGVyKTtcclxuXHJcbmFwcC5saXN0ZW4oUE9SVCwgYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYExpc3RlbmluZyBvbiBwb3J0ICR7IFBPUlQgfWApO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgIHRocm93IGU7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJleHBvcnQgY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNDAwMTtcclxuXHJcbmV4cG9ydCBjb25zdCBFUlJPUlMgPSB7XHJcbiAgICB1c2VyTm90Rm91bmQ6ICdVc2VyIG5vdCBGb3VuZCEnLFxyXG4gICAgbWV0aG9kTm90QWxsb3dlZDogJ01ldGhvZCBub3QgYWxsb3dlZCBoZXJlIScsXHJcbiAgICB1c2VyRXhpc3Q6ICdUaGlzIGxvZ2luIG5hbWUgYWxyZWFkeSBleGlzdCEnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX01FU1NBR0VTID0ge1xyXG4gICAgY29ubmVjdGlvblN1Y2Nlc3M6ICdDb25uZWN0aW9uIGhhcyBiZWVuIGVzdGFibGlzaGVkIHN1Y2Nlc3NmdWxseSEnLFxyXG4gICAgY29ubmVjdGlvbkZhaWxlZDogJ1VuYWJsZSB0byBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZTonXHJcbn07XHJcbiIsImltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdEhlbHBlciA9IGFzeW5jIChmbjogYW55LCByZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZuKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgICAgICAgPyByZXNwb25zZS5zZW5kKHsgZGF0YSwgc3RhdHVzOiAnc3VjY2VzcycgfSlcclxuICAgICAgICAgICAgOiByZXNwb25zZS5zZW5kKHsgc3RhdHVzOiAnc3VjY2VzcycgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlc3BvbnNlLnN0YXR1cyhlcnJvci5zdGF0dXMgfHwgNTAwKS5zZW5kKHsgZXJyb3I6IHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9IH0pO1xyXG4gICAgfVxyXG59O1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL3VzZXJzLmNvbnRyb2xsZXInO1xyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IsIHsgSHR0cEVycm9yIH0gZnJvbSAnaHR0cC1lcnJvcnMnO1xyXG5cclxuaW1wb3J0IHsgRVJST1JTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgdXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IHJlcXVlc3RIZWxwZXIgfSBmcm9tICcuL2Vycm9yLmhlbHBlcic7XHJcblxyXG5jb25zdCBnZXRVc2VycyA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJTZXJ2aWNlLmdldEFsbFVzZXJzKHJlcXVlc3QucXVlcnkpLCByZXNwb25zZSk7XHJcblxyXG5jb25zdCBnZXRVc2VyQnlJZCA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJTZXJ2aWNlLmdldFVzZXJCeUlkKHJlcXVlc3QucGFyYW1zLnVzZXJJZCksIHJlc3BvbnNlKTtcclxuXHJcbmNvbnN0IGFkZFVzZXIgPSBhc3luYyAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiB1c2VyU2VydmljZS5hZGRVc2VyKHJlcXVlc3QuYm9keSksIHJlc3BvbnNlKTtcclxuXHJcbmNvbnN0IHVwZGF0ZVVzZXIgPSBhc3luYyAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PlxyXG4gICAgcmVxdWVzdEhlbHBlcigoKSA9PiB1c2VyU2VydmljZS51cGRhdGVVc2VyKHJlcXVlc3QucGFyYW1zLnVzZXJJZCwgcmVxdWVzdC5ib2R5KSwgcmVzcG9uc2UpO1xyXG5cclxuY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+XHJcbiAgICByZXF1ZXN0SGVscGVyKCgpID0+IHVzZXJTZXJ2aWNlLmRlbGV0ZVVzZXIocmVxdWVzdC5wYXJhbXMudXNlcklkKSwgcmVzcG9uc2UpO1xyXG5cclxuY29uc3Qgbm90QWxsb3dlZCA9IChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgIGxldCBlcnI6IEh0dHBFcnJvciA9IGNyZWF0ZUVycm9yKDQwNSwgRVJST1JTLm1ldGhvZE5vdEFsbG93ZWQpO1xyXG5cclxuICAgIHJlc3BvbnNlLnN0YXR1cyhlcnIuc3RhdHVzKS5zZW5kKHsgc3RhdHVzOiBlcnIuc3RhdHVzLCBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2Vyc0NvbnRyb2xsZXIgPSB7XHJcbiAgICBnZXRVc2VycyxcclxuICAgIGRlbGV0ZVVzZXIsXHJcbiAgICB1cGRhdGVVc2VyLFxyXG4gICAgZ2V0VXNlckJ5SWQsXHJcbiAgICBhZGRVc2VyLFxyXG4gICAgbm90QWxsb3dlZFxyXG59O1xyXG4iLCJpbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3R5cGluZ3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJzOiBVc2VyW10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcklkOiAnMScsXHJcbiAgICAgICAgbG9naW46IFwiQW5ha2luU2t5d2Fsa2VyXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiYW5ha2lucGFzc1wiLFxyXG4gICAgICAgIGFnZTogMzJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcklkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJNYWNlV2luZHVcIixcclxuICAgICAgICBwYXNzd29yZDogXCJtYWNlcGFzc1wiLFxyXG4gICAgICAgIGFnZTogNzJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcklkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJDLTNQT1wiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcImMzcDBwYXNzXCIsXHJcbiAgICAgICAgYWdlOiAzMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VySWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiBcIkx1a2VTa3l3YWxrZXJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJsdWtlcGFzc1wiLFxyXG4gICAgICAgIGFnZTogMjNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcklkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJEYXJ0aE1hdWxcIixcclxuICAgICAgICBwYXNzd29yZDogXCJkYXJ0aHBhc3NcIixcclxuICAgICAgICBhZ2U6IDQ0XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJJZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46IFwiUXVpR29uSmlublwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcInF1aXBhc3NcIixcclxuICAgICAgICBhZ2U6IDgwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJJZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46IFwiT2JpV2FuS2Vub2JpXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwib2JpcGFzc1wiLFxyXG4gICAgICAgIGFnZTogNDdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcklkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJQYWxwYXRpbmVcIixcclxuICAgICAgICBwYXNzd29yZDogXCJwYWxwYXRpbmVwYXNzXCIsXHJcbiAgICAgICAgYWdlOiA4MlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VySWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiBcIllvZGFcIixcclxuICAgICAgICBwYXNzd29yZDogXCJ5b2RhcGFzc1wiLFxyXG4gICAgICAgIGFnZTogMTMwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJJZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46IFwiU25va2VcIixcclxuICAgICAgICBwYXNzd29yZDogXCJzbm9rZXBhc3NcIixcclxuICAgICAgICBhZ2U6IDUzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJJZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46IFwiQm9iYUZldHRcIixcclxuICAgICAgICBwYXNzd29yZDogXCJib2JhcGFzc1wiLFxyXG4gICAgICAgIGFnZTogMzZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcklkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJDaGV3YmFjY2FcIixcclxuICAgICAgICBwYXNzd29yZDogXCJjaGV3YmFjY2FwYXNzXCIsXHJcbiAgICAgICAgYWdlOiAxMzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcklkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJIYW5Tb2xvXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiaGFucGFzc1wiLFxyXG4gICAgICAgIGFnZTogNjZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcklkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJLeWxvUmVuXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwia3lsb3Bhc3NcIixcclxuICAgICAgICBhZ2U6IDMwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJJZDogdXVpZC52MSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgbG9naW46IFwiTGVpYU9yZ2FuYVwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcImxlaWFwYXNzXCIsXHJcbiAgICAgICAgYWdlOiA1M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VySWQ6IHV1aWQudjEoKS50b1N0cmluZygpLFxyXG4gICAgICAgIGxvZ2luOiBcIlBhZG1lQW1pZGFsYVwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcInBhZG1lcGFzc1wiLFxyXG4gICAgICAgIGFnZTogMjdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcklkOiB1dWlkLnYxKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBsb2dpbjogXCJDb3VudERvb2t1XCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiZG9rb29wYXNzXCIsXHJcbiAgICAgICAgYWdlOiAxMDJcclxuICAgIH1cclxuXTtcclxuIiwiaW1wb3J0IHsgU2VxdWVsaXplIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xyXG5cclxuaW1wb3J0IHsgdXNlcnMgfSBmcm9tICcuL2JhY2t1cCc7XHJcbmltcG9ydCB7IExPR19NRVNTQUdFUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IG1vZGVscyB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCBkYkNvbmZpZyBmcm9tICcuLy4uLy4uL2NvbmZpZy9jb25maWcnO1xyXG5pbXBvcnQgeyB1c2VyVG9EYiB9IGZyb20gJy4vdXNlcnMucGFyc2VyJztcclxuXHJcbmNvbnN0IHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoXHJcbiAgICBkYkNvbmZpZy5kYXRhYmFzZSxcclxuICAgIGRiQ29uZmlnLnVzZXJuYW1lLFxyXG4gICAgZGJDb25maWcucGFzc3dvcmQsXHJcbiAgICB7XHJcbiAgICAgICAgZGVmaW5lOiB7XHJcbiAgICAgICAgICAgIHRpbWVzdGFtcHM6IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFub2lkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3J0OiBkYkNvbmZpZy5wb3J0LFxyXG4gICAgICAgIGRpYWxlY3Q6IGRiQ29uZmlnLmRpYWxlY3QsXHJcbiAgICAgICAgaG9zdDogZGJDb25maWcuaG9zdCxcclxuICAgICAgICBkaWFsZWN0T3B0aW9uczogeyBzc2w6IHRydWUgfSxcclxuICAgICAgICBwb29sOiBkYkNvbmZpZy5wb29sLFxyXG4gICAgICAgIG1vZGVsczogWyAuLi5tb2RlbHMgXVxyXG4gICAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRiQ29ubmVjdCA9ICgpID0+IHtcclxuICAgIHJldHVybiBzZXF1ZWxpemVcclxuICAgICAgICAuc3luYyh7IGZvcmNlOiB0cnVlIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coTE9HX01FU1NBR0VTLmNvbm5lY3Rpb25TdWNjZXNzKSlcclxuICAgICAgICAudGhlbigoKSA9PiB1c2Vycy5mb3JFYWNoKHVzZXIgPT4gdXNlclRvRGIodXNlciwgdXNlci51c2VySWQpLnNhdmUoKSkpXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoTE9HX01FU1NBR0VTLmNvbm5lY3Rpb25GYWlsZWQsIGVycm9yKSk7XHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vdXNlckRBTCc7XHJcbiIsImltcG9ydCBjcmVhdGVFcnJvciBmcm9tICdodHRwLWVycm9ycyc7XHJcbmltcG9ydCB7IFdoZXJlT3B0aW9ucywgT3AgfSBmcm9tICdzZXF1ZWxpemUnO1xyXG5cclxuaW1wb3J0IHsgRVJST1JTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgVXNlclRvUmVzcG9uc2UsIFVzZXJUb1VwZGF0ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcbmltcG9ydCB7IHVzZXJzVG9SZXNwb25zZSwgdXNlclRvUmVzcG9uc2UgfSBmcm9tICcuL3VzZXJzLnBhcnNlcic7XHJcbmltcG9ydCB7IFVzZXIgYXMgVXNlck1vZGVsIH0gZnJvbSAnLi8uLi9tb2RlbHMvdXNlci5tb2RlbCc7XHJcblxyXG5jb25zdCBERUZBVUxUX09GRlNFVDogbnVtYmVyID0gMDtcclxuY29uc3QgREVGQVVMVF9MSU1JVDogbnVtYmVyID0gMTA7XHJcblxyXG5jb25zdCBnZXRBbGwgPSBhc3luYyAocGFyYW1zOiB7IGxvZ2luPzogc3RyaW5nLCBsaW1pdFBhcmFtPzogc3RyaW5nLCBvZmZzZXRQYXJhbT86IHN0cmluZyB9KTogUHJvbWlzZTxVc2VyVG9SZXNwb25zZVtdPiA9PiB7XHJcbiAgICBjb25zdCB7IGxvZ2luLCBvZmZzZXRQYXJhbSwgbGltaXRQYXJhbSB9ID0gcGFyYW1zO1xyXG4gICAgY29uc3Qgb2Zmc2V0OiBudW1iZXIgPSBvZmZzZXRQYXJhbSAmJiBwYXJzZUludChvZmZzZXRQYXJhbSwgMTApIHx8IERFRkFVTFRfT0ZGU0VUO1xyXG4gICAgY29uc3QgbGltaXQ6IG51bWJlciA9IGxpbWl0UGFyYW0gJiYgcGFyc2VJbnQobGltaXRQYXJhbSwgMTApICsgb2Zmc2V0IHx8IERFRkFVTFRfTElNSVQ7XHJcbiAgICBjb25zdCB3aGVyZTogV2hlcmVPcHRpb25zID0gbG9naW4gPyB7IGxvZ2lubmFtZTogeyBbIE9wLmlMaWtlIF06IGAlJHsgbG9naW4gfSVgIH0gfSA6IHt9O1xyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBVc2VyTW9kZWwuZmluZEFsbCh7IG9mZnNldDogb2Zmc2V0LCBsaW1pdDogbGltaXQsIHdoZXJlIH0pO1xyXG5cclxuICAgIHJldHVybiB1c2Vyc1RvUmVzcG9uc2UodXNlcnMpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VXNlciA9IGFzeW5jICh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8VXNlclRvUmVzcG9uc2U+ID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IHdoZXJlOiB7IHVzZXJfaWQ6IHVzZXJJZCB9IH0pO1xyXG5cclxuICAgIGlmICggIXVzZXIgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDQsIHsgbWVzc2FnZTogRVJST1JTLnVzZXJOb3RGb3VuZCB9KTtcclxuXHJcbiAgICByZXR1cm4gdXNlclRvUmVzcG9uc2UodXNlcik7XHJcbn07XHJcblxyXG5jb25zdCBpbnNlcnRVc2VyID0gYXN5bmMgKHVzZXJNb2RlbDogVXNlck1vZGVsKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoeyB3aGVyZTogeyBsb2dpbm5hbWU6IHVzZXJNb2RlbC5sb2dpbm5hbWUgfSB9KTtcclxuXHJcbiAgICBpZiAoIHVzZXIgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDAsIHsgbWVzc2FnZTogRVJST1JTLnVzZXJFeGlzdCB9KTtcclxuXHJcbiAgICB1c2VyTW9kZWwuc2F2ZSgpO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlVXNlciA9IGFzeW5jICh1c2VySWQ6IHN0cmluZywgdXNlclRvVXBkYXRlOiBVc2VyVG9VcGRhdGUpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IHdoZXJlOiB7IHVzZXJfaWQ6IHVzZXJJZCB9IH0pO1xyXG5cclxuICAgIGlmICggIXVzZXIgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDQsIHsgbWVzc2FnZTogRVJST1JTLnVzZXJOb3RGb3VuZCB9KTtcclxuXHJcbiAgICB1c2VyLmxvZ2lubmFtZSA9IHVzZXJUb1VwZGF0ZS5sb2dpbjtcclxuICAgIHVzZXIuYWdlID0gdXNlclRvVXBkYXRlLmFnZTtcclxuXHJcbiAgICB1c2VyLnNhdmUoKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IHdoZXJlOiB7IHVzZXJfaWQ6IHVzZXJJZCB9IH0pO1xyXG5cclxuICAgIGlmICggIXVzZXIgKSB0aHJvdyBjcmVhdGVFcnJvcig0MDQsIHsgbWVzc2FnZTogRVJST1JTLnVzZXJOb3RGb3VuZCB9KTtcclxuXHJcbiAgICB1c2VyLmRlc3Ryb3koKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyREFMID0ge1xyXG4gICAgZ2V0QWxsLFxyXG4gICAgZ2V0VXNlcixcclxuICAgIGluc2VydFVzZXIsXHJcbiAgICB1cGRhdGVVc2VyLFxyXG4gICAgZGVsZXRlVXNlclxyXG59O1xyXG4iLCJpbXBvcnQgeyBEYlVzZXIsIFVzZXJUb1Jlc3BvbnNlLCBVc2VyVG9BZGQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3R5cGluZ3MnO1xyXG5pbXBvcnQgeyBVc2VyIGFzIFVzZXJNb2RlbCB9IGZyb20gJy4vLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJUb1Jlc3BvbnNlID0gKHVzZXI6IERiVXNlcik6IFVzZXJUb1Jlc3BvbnNlID0+ICh7XHJcbiAgICB1c2VySWQ6IHVzZXIudXNlcl9pZCxcclxuICAgIGxvZ2luOiB1c2VyLmxvZ2lubmFtZSxcclxuICAgIGFnZTogdXNlci5hZ2VcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlcnNUb1Jlc3BvbnNlID0gKHVzZXJzOiBEYlVzZXJbXSk6IFVzZXJUb1Jlc3BvbnNlW10gPT4gdXNlcnMubWFwKHVzZXIgPT4gdXNlclRvUmVzcG9uc2UodXNlcikpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJUb0RiID0gKHVzZXI6IFVzZXJUb0FkZCwgdXNlcklkOiBzdHJpbmcpOiBVc2VyTW9kZWwgPT5cclxuICAgIG5ldyBVc2VyTW9kZWwoe1xyXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcclxuICAgICAgICBsb2dpbm5hbWU6IHVzZXIubG9naW4sXHJcbiAgICAgICAgYWdlOiB1c2VyLmFnZSxcclxuICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgfSk7XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vdmFsaWRhdGlvbi5zZXJ2aXNlJztcclxuIiwiaW1wb3J0ICogYXMgSm9pIGZyb20gJ0BoYXBpL2pvaSc7XHJcbmltcG9ydCB7IGNyZWF0ZVZhbGlkYXRvciB9IGZyb20gJ2V4cHJlc3Mtam9pLXZhbGlkYXRpb24nO1xyXG5cclxuY29uc3QgTUlOX0FHRSA9IDQ7XHJcbmNvbnN0IE1BWF9BR0UgPSAxMzA7XHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRhdG9yID0gY3JlYXRlVmFsaWRhdG9yKCk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVXNlckJvZHlTY2hlbWEgPSBKb2kub2JqZWN0KHtcclxuICAgIGxvZ2luOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIGFnZTogSm9pLm51bWJlcigpLnJlcXVpcmVkKCkuZ3JlYXRlcihNSU5fQUdFKS5sZXNzKE1BWF9BR0UpLFxyXG4gICAgcGFzc3dvcmQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLmFscGhhbnVtKClcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlckJvZHlTY2hlbWEgPSBKb2kub2JqZWN0KHtcclxuICAgIGxvZ2luOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIGFnZTogSm9pLm51bWJlcigpLnJlcXVpcmVkKCkuZ3JlYXRlcihNSU5fQUdFKS5sZXNzKE1BWF9BR0UpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXJRdWVyeVNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgdXNlcklkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKVxyXG59KTtcclxuIiwiaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlci5tb2RlbCc7XHJcblxyXG5leHBvcnQgY29uc3QgbW9kZWxzID0gW1xyXG4gICAgVXNlclxyXG5dO1xyXG4iLCJpbXBvcnQgeyBDb2x1bW4sIFRhYmxlLCBNb2RlbCwgUHJpbWFyeUtleSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcclxuXHJcbkBUYWJsZSh7XHJcbiAgICBzY2hlbWE6ICduZXcnLFxyXG4gICAgdGFibGVOYW1lOiAndXNlcnMnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgTW9kZWw8VXNlcj4ge1xyXG4gICAgQFByaW1hcnlLZXlcclxuICAgIEBDb2x1bW5cclxuICAgIHVzZXJfaWQ6IHN0cmluZztcclxuXHJcbiAgICBAQ29sdW1uXHJcbiAgICBsb2dpbm5hbWU6IHN0cmluZztcclxuXHJcbiAgICBAQ29sdW1uXHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuICAgIEBDb2x1bW5cclxuICAgIGFnZTogbnVtYmVyO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBST1VURVMgPSB7XHJcbiAgICB1c2VyUm91dGVzOiB7XHJcbiAgICAgICAgcm9vdDogJy8nLFxyXG4gICAgICAgIHVzZXJJZDogJy86dXNlcklkJyxcclxuICAgICAgICB1c2VyczogJy91c2VycydcclxuICAgIH1cclxufTtcclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB1c2VyUm91dGVyIGZyb20gJy4vdXNlci1yb3V0ZXInO1xyXG5cclxuY29uc3Qgcm9vdFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbnJvb3RSb3V0ZXIudXNlKFJPVVRFUy51c2VyUm91dGVzLnVzZXJzLCB1c2VyUm91dGVyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSb3V0ZXI7XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgdXNlcnNDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMnO1xyXG5pbXBvcnQgeyBhZGRVc2VyQm9keVNjaGVtYSwgdXBkYXRlVXNlckJvZHlTY2hlbWEsIHVwZGF0ZVVzZXJRdWVyeVNjaGVtYSwgdmFsaWRhdG9yIH0gZnJvbSAnLi4vbWlkZGxld2FyZXMnO1xyXG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCB1c2VyUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuY29uc3Qgcm91dGVzID0gUk9VVEVTLnVzZXJSb3V0ZXM7XHJcblxyXG51c2VyUm91dGVyLnJvdXRlKHJvdXRlcy5yb290KVxyXG4gICAgLmdldCh1c2Vyc0NvbnRyb2xsZXIuZ2V0VXNlcnMpXHJcbiAgICAucG9zdCh2YWxpZGF0b3IuYm9keShhZGRVc2VyQm9keVNjaGVtYSksIHVzZXJzQ29udHJvbGxlci5hZGRVc2VyKVxyXG4gICAgLmFsbCh1c2Vyc0NvbnRyb2xsZXIubm90QWxsb3dlZCk7XHJcblxyXG51c2VyUm91dGVyLnJvdXRlKHJvdXRlcy51c2VySWQpXHJcbiAgICAuZ2V0KHVzZXJzQ29udHJvbGxlci5nZXRVc2VyQnlJZClcclxuICAgIC5wdXQodmFsaWRhdG9yLnBhcmFtcyh1cGRhdGVVc2VyUXVlcnlTY2hlbWEpLCB2YWxpZGF0b3IuYm9keSh1cGRhdGVVc2VyQm9keVNjaGVtYSksIHVzZXJzQ29udHJvbGxlci51cGRhdGVVc2VyKVxyXG4gICAgLmRlbGV0ZSh1c2Vyc0NvbnRyb2xsZXIuZGVsZXRlVXNlcilcclxuICAgIC5hbGwodXNlcnNDb250cm9sbGVyLm5vdEFsbG93ZWQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclJvdXRlcjtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi91c2VyLnNlcnZpc2UnO1xyXG5cclxuIiwiaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XHJcblxyXG5pbXBvcnQgeyB1c2VyREFMIH0gZnJvbSAnLi4vZGF0YS1hY2Nlc3MnO1xyXG5pbXBvcnQgeyB1c2VyVG9EYiB9IGZyb20gJy4uL2RhdGEtYWNjZXNzL3VzZXJzLnBhcnNlcic7XHJcbmltcG9ydCB7IFVzZXJUb0FkZCwgVXNlclRvUmVzcG9uc2UsIFVzZXJUb1VwZGF0ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcblxyXG5jb25zdCBnZXRBbGxVc2VycyA9IChxdWVyeTogeyBsb2dpbj86IHN0cmluZywgbGltaXQ/OiBzdHJpbmcsIG9mZnNldD86IHN0cmluZyB9KTogUHJvbWlzZTxVc2VyVG9SZXNwb25zZVtdPiA9PiB1c2VyREFMLmdldEFsbChxdWVyeSk7XHJcblxyXG5jb25zdCBnZXRVc2VyQnlJZCA9ICh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8VXNlclRvUmVzcG9uc2U+ID0+IHVzZXJEQUwuZ2V0VXNlcih1c2VySWQpO1xyXG5cclxuY29uc3QgYWRkVXNlciA9IChuZXdVc2VyOiBVc2VyVG9BZGQpOiBQcm9taXNlPHZvaWQ+ID0+IHVzZXJEQUwuaW5zZXJ0VXNlcih1c2VyVG9EYihuZXdVc2VyLCB1dWlkLnYxKCkudG9TdHJpbmcoKSkpO1xyXG5cclxuY29uc3QgdXBkYXRlVXNlciA9ICh1c2VySWQ6IHN0cmluZywgdXNlclRvVXBkYXRlOiBVc2VyVG9VcGRhdGUpOiBQcm9taXNlPHZvaWQ+ID0+IHVzZXJEQUwudXBkYXRlVXNlcih1c2VySWQsIHVzZXJUb1VwZGF0ZSk7XHJcblxyXG5jb25zdCBkZWxldGVVc2VyID0gKHVzZXJJZDogc3RyaW5nKSA9PiB1c2VyREFMLmRlbGV0ZVVzZXIodXNlcklkKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyU2VydmljZSA9IHtcclxuICAgIGdldEFsbFVzZXJzLFxyXG4gICAgZ2V0VXNlckJ5SWQsXHJcbiAgICBhZGRVc2VyLFxyXG4gICAgdXBkYXRlVXNlcixcclxuICAgIGRlbGV0ZVVzZXJcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGhhcGkvam9pXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1qb2ktdmFsaWRhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwLWVycm9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplLXR5cGVzY3JpcHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9