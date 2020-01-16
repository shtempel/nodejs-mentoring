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
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield Object(_data_access_db__WEBPACK_IMPORTED_MODULE_2__["dbConnect"])();
    app.listen(_constants__WEBPACK_IMPORTED_MODULE_1__["PORT"], () => console.log(`Listening on port ${_constants__WEBPACK_IMPORTED_MODULE_1__["PORT"]}`));
}))();


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
    userExist: 'login name already exist!'
};
const LOG_MESSAGES = {
    connectionSuccess: 'Connection has been established successfully!',
    connectionFailed: 'Unable to connect to the database:'
};


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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const getUsers = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield _services__WEBPACK_IMPORTED_MODULE_2__["userService"].getAllUsers(request.query);
        return response.json(users).send({ status: 'success' });
    }
    catch (error) {
        response.status(error.status).send();
    }
});
const getUserById = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield _services__WEBPACK_IMPORTED_MODULE_2__["userService"].getUserById(request.params.userId);
        if (!user)
            throw ({ status: 404, message: _constants__WEBPACK_IMPORTED_MODULE_1__["ERRORS"].userNotFound });
        return response.send({ user: user, status: 'success' });
    }
    catch (error) {
        const err = http_errors__WEBPACK_IMPORTED_MODULE_0___default()(400, { message: error.message });
        response.status(error.status).send({ error: err });
    }
});
const addUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield _services__WEBPACK_IMPORTED_MODULE_2__["userService"].addUser(request.body);
        response.send({ status: 'success' }).json(user);
    }
    catch (error) {
        const err = http_errors__WEBPACK_IMPORTED_MODULE_0___default()(400, { message: error.message });
        response.status(err.status).send({ error: err });
    }
});
const updateUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield _services__WEBPACK_IMPORTED_MODULE_2__["userService"].updateUser(request.params.userId, request.body);
        response.send({ status: 'success' });
    }
    catch (error) {
        const err = http_errors__WEBPACK_IMPORTED_MODULE_0___default()(404, { message: _constants__WEBPACK_IMPORTED_MODULE_1__["ERRORS"].userNotFound });
        response.status(err.status).send({ error: err });
    }
});
const deleteUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield _services__WEBPACK_IMPORTED_MODULE_2__["userService"].deleteUser(request.params.userId);
        response.send({ status: 'success' });
    }
    catch (error) {
        const err = http_errors__WEBPACK_IMPORTED_MODULE_0___default()(404, { message: error.message });
        response.status(err.status).send({ error: err });
    }
});
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config/config */ "./config/config.ts");




const sequelize = new sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Sequelize"](_config_config__WEBPACK_IMPORTED_MODULE_3__["default"].database, _config_config__WEBPACK_IMPORTED_MODULE_3__["default"].username, _config_config__WEBPACK_IMPORTED_MODULE_3__["default"].password, {
    define: {
        timestamps: true,
        paranoid: true
    },
    port: _config_config__WEBPACK_IMPORTED_MODULE_3__["default"].port,
    dialect: _config_config__WEBPACK_IMPORTED_MODULE_3__["default"].dialect,
    host: _config_config__WEBPACK_IMPORTED_MODULE_3__["default"].host,
    dialectOptions: { ssl: true },
    pool: _config_config__WEBPACK_IMPORTED_MODULE_3__["default"].pool,
    models: [..._models__WEBPACK_IMPORTED_MODULE_2__["models"]]
});
const dbConnect = () => {
    return sequelize
        .sync()
        .then(() => {
        console.log(_constants__WEBPACK_IMPORTED_MODULE_1__["LOG_MESSAGES"].connectionSuccess);
    })
        .catch(error => {
        console.error(_constants__WEBPACK_IMPORTED_MODULE_1__["LOG_MESSAGES"].connectionFailed, error);
    });
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
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _services_users_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.parser */ "./src/services/users.parser.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../models/user.model */ "./src/models/user.model.ts");
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
const getAll = (params) => {
    const { login, offsetParam, limitParam } = params;
    const offset = offsetParam && parseInt(offsetParam, 10) || DEFAULT_OFFSET;
    const limit = limitParam && parseInt(limitParam, 10) + offset || DEFAULT_LIMIT;
    const where = login ? { loginname: { [sequelize__WEBPACK_IMPORTED_MODULE_0__["Op"].iLike]: `%${login}%` } } : {};
    return _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]
        .findAll({ offset: offset, limit: limit, where })
        .then(users => Object(_services_users_parser__WEBPACK_IMPORTED_MODULE_2__["usersToResponse"])(users));
};
const getUser = (userId) => _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]
    .findOne({ where: { user_id: userId } })
    .then(user => user ? Object(_services_users_parser__WEBPACK_IMPORTED_MODULE_2__["userToResponse"])(user) : null);
const insertUser = (newUser, userId) => _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]
    .findOne({ where: { loginname: newUser.login } })
    .then(user => {
    if (user) {
        throw new Error(`${newUser.login} ${_constants__WEBPACK_IMPORTED_MODULE_1__["ERRORS"].userExist}`);
    }
    else {
        new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](Object(_services_users_parser__WEBPACK_IMPORTED_MODULE_2__["userToDb"])(newUser, userId)).save();
    }
});
const updateUser = (userId, userToUpdate) => _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]
    .findOne({ where: { user_id: userId } })
    .then(user => {
    user.loginname = userToUpdate.login;
    user.age = userToUpdate.age;
    return user.save();
});
const deleteUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]
        .findOne({ where: { user_id: userId } })
        .then(user => {
        if (!user) {
            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__["ERRORS"].userNotFound);
        }
        return user.destroy();
    });
});
const userDAL = {
    getAll,
    getUser,
    insertUser,
    updateUser,
    deleteUser
};


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
        userId: '/:userId'
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
/* harmony import */ var _user_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-router */ "./src/routes/user-router.ts");


const rootRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
rootRouter.use('/users', _user_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
userRouter.route(_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].userRoutes.root)
    .get(_controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].getUsers)
    .post(_middlewares__WEBPACK_IMPORTED_MODULE_2__["validator"].body(_middlewares__WEBPACK_IMPORTED_MODULE_2__["addUserBodySchema"]), _controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].addUser)
    .all(_controllers__WEBPACK_IMPORTED_MODULE_1__["usersController"].notAllowed);
userRouter.route(_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].userRoutes.userId)
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
const getUserById = (userId) => _data_access__WEBPACK_IMPORTED_MODULE_1__["userDAL"].getUser(userId);
const addUser = (newUser) => _data_access__WEBPACK_IMPORTED_MODULE_1__["userDAL"].insertUser(newUser, uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString());
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

/***/ "./src/services/users.parser.ts":
/*!**************************************!*\
  !*** ./src/services/users.parser.ts ***!
  \**************************************/
/*! exports provided: userToResponse, usersToResponse, userToDb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userToResponse", function() { return userToResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersToResponse", function() { return usersToResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userToDb", function() { return userToDb; });
const userToResponse = (user) => ({
    userId: user.user_id,
    login: user.loginname,
    age: user.age
});
const usersToResponse = (users) => users.map(user => userToResponse(user));
const userToDb = (user, userId) => ({
    user_id: userId,
    loginname: user.login,
    age: user.age,
    password: user.password
});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy91c2Vycy5jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLWFjY2Vzcy9kYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1hY2Nlc3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtYWNjZXNzL3VzZXJEQUwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pZGRsZXdhcmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlcy92YWxpZGF0aW9uLnNlcnZpc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3VzZXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3VzZXItcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdXNlci5zZXJ2aXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy91c2Vycy5wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGhhcGkvam9pXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3Mtam9pLXZhbGlkYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwLWVycm9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFBQSxNQUFNLE9BQU8sR0FBWSxVQUFVLENBQUM7QUFFckI7SUFDWCxPQUFPLEVBQUUsT0FBTztJQUNoQixJQUFJLEVBQUUsb0RBQW9EO0lBQzFELElBQUksRUFBRSxJQUFJO0lBQ1YsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLFFBQVEsRUFBRSxrRUFBa0U7SUFDNUUsSUFBSSxFQUFFO1FBQ0YsR0FBRyxFQUFFLENBQUM7UUFDTixHQUFHLEVBQUUsQ0FBQztRQUNOLE9BQU8sRUFBRSxLQUFLO1FB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Q0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUV2RyxNQUFNLFFBQVEsR0FBRyxDQUFDLElBQWUsRUFBRSxNQUFjLEVBQVUsRUFBRSxDQUFDLENBQUM7SUFDbEUsT0FBTyxFQUFFLE1BQU07SUFDZixTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUs7SUFDckIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO0NBQzFCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDZkgsc0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoic2VydmVyLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC50c1wiKTtcbiIsImltcG9ydCB7IERpYWxlY3QgfSBmcm9tICdzZXF1ZWxpemUnO1xyXG5cclxuY29uc3QgZGlhbGVjdDogRGlhbGVjdCA9ICdwb3N0Z3Jlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkaWFsZWN0OiBkaWFsZWN0LFxyXG4gICAgaG9zdDogXCJlYzItNTQtMjQ2LTEwMC0yNDYuZXUtd2VzdC0xLmNvbXB1dGUuYW1hem9uYXdzLmNvbVwiLFxyXG4gICAgcG9ydDogNTQzMixcclxuICAgIGRhdGFiYXNlOiBcImQzb3ZzMGtoajgyYTNoXCIsXHJcbiAgICB1c2VybmFtZTogXCJ4ZGRxdnJmendkd2VjclwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiM2Y0MWI1MDQ3Y2RkYmI1MjYxZDA3ZTJhNmU4MmViM2Y2NDUxZGU4YjM4ODVlMDFjZjYxMzZhZjU5NTRkN2EzN1wiLFxyXG4gICAgcG9vbDoge1xyXG4gICAgICAgIG1pbjogMCxcclxuICAgICAgICBtYXg6IDUsXHJcbiAgICAgICAgYWNxdWlyZTogMzAwMDAsXHJcbiAgICAgICAgaWRsZTogMTAwMDBcclxuICAgIH1cclxufTtcclxuIiwiaW1wb3J0IGV4cHJlc3MsIHsgQXBwbGljYXRpb24gfSBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IFBPUlQgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGRiQ29ubmVjdCB9IGZyb20gJy4vZGF0YS1hY2Nlc3MvZGInO1xyXG5pbXBvcnQgcm9vdFJvdXRlciBmcm9tICcuL3JvdXRlcyc7XHJcblxyXG5jb25zdCBhcHA6IEFwcGxpY2F0aW9uID0gZXhwcmVzcygpO1xyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuYXBwLnVzZSgnLycsIHJvb3RSb3V0ZXIpO1xyXG5cclxuKGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG4gICAgYXBwLmxpc3RlbihQT1JULCAoKSA9PiBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIG9uIHBvcnQgJHsgUE9SVCB9YCkpO1xyXG59KSgpO1xyXG4iLCJleHBvcnQgY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNDAwMTtcclxuXHJcbmV4cG9ydCBjb25zdCBFUlJPUlMgPSB7XHJcbiAgICB1c2VyTm90Rm91bmQ6ICdVc2VyIG5vdCBGb3VuZCEnLFxyXG4gICAgbWV0aG9kTm90QWxsb3dlZDogJ01ldGhvZCBub3QgYWxsb3dlZCBoZXJlIScsXHJcbiAgICB1c2VyRXhpc3Q6ICdsb2dpbiBuYW1lIGFscmVhZHkgZXhpc3QhJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19NRVNTQUdFUyA9IHtcclxuICAgIGNvbm5lY3Rpb25TdWNjZXNzOiAnQ29ubmVjdGlvbiBoYXMgYmVlbiBlc3RhYmxpc2hlZCBzdWNjZXNzZnVsbHkhJyxcclxuICAgIGNvbm5lY3Rpb25GYWlsZWQ6ICdVbmFibGUgdG8gY29ubmVjdCB0byB0aGUgZGF0YWJhc2U6J1xyXG59O1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL3VzZXJzLmNvbnRyb2xsZXInO1xyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IsIHsgSHR0cEVycm9yIH0gZnJvbSAnaHR0cC1lcnJvcnMnO1xyXG5cclxuaW1wb3J0IHsgRVJST1JTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgdXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XHJcblxyXG5jb25zdCBnZXRVc2VycyA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRBbGxVc2VycyhyZXF1ZXN0LnF1ZXJ5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24odXNlcnMpLnNlbmQoeyBzdGF0dXM6ICdzdWNjZXNzJyB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzKGVycm9yLnN0YXR1cykuc2VuZCgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VXNlckJ5SWQgPSBhc3luYyAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXI6IGFueSA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldFVzZXJCeUlkKHJlcXVlc3QucGFyYW1zLnVzZXJJZCk7XHJcblxyXG4gICAgICAgIGlmICggIXVzZXIgKSB0aHJvdyAoeyBzdGF0dXM6IDQwNCwgbWVzc2FnZTogRVJST1JTLnVzZXJOb3RGb3VuZCB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnNlbmQoeyB1c2VyOiB1c2VyLCBzdGF0dXM6ICdzdWNjZXNzJyB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBlcnI6IEh0dHBFcnJvciA9IGNyZWF0ZUVycm9yKDQwMCwgeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xyXG5cclxuICAgICAgICByZXNwb25zZS5zdGF0dXMoZXJyb3Iuc3RhdHVzKS5zZW5kKHsgZXJyb3I6IGVyciB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGFkZFVzZXIgPSBhc3luYyAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5hZGRVc2VyKHJlcXVlc3QuYm9keSk7XHJcblxyXG4gICAgICAgIHJlc3BvbnNlLnNlbmQoeyBzdGF0dXM6ICdzdWNjZXNzJyB9KS5qc29uKHVzZXIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBlcnI6IEh0dHBFcnJvciA9IGNyZWF0ZUVycm9yKDQwMCwgeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xyXG5cclxuICAgICAgICByZXNwb25zZS5zdGF0dXMoZXJyLnN0YXR1cykuc2VuZCh7IGVycm9yOiBlcnIgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCB1c2VyU2VydmljZS51cGRhdGVVc2VyKHJlcXVlc3QucGFyYW1zLnVzZXJJZCwgcmVxdWVzdC5ib2R5KTtcclxuXHJcbiAgICAgICAgcmVzcG9uc2Uuc2VuZCh7IHN0YXR1czogJ3N1Y2Nlc3MnIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBlcnI6IEh0dHBFcnJvciA9IGNyZWF0ZUVycm9yKDQwNCwgeyBtZXNzYWdlOiBFUlJPUlMudXNlck5vdEZvdW5kIH0pO1xyXG5cclxuICAgICAgICByZXNwb25zZS5zdGF0dXMoZXJyLnN0YXR1cykuc2VuZCh7IGVycm9yOiBlcnIgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCB1c2VyU2VydmljZS5kZWxldGVVc2VyKHJlcXVlc3QucGFyYW1zLnVzZXJJZCk7XHJcblxyXG4gICAgICAgIHJlc3BvbnNlLnNlbmQoeyBzdGF0dXM6ICdzdWNjZXNzJyB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgZXJyOiBIdHRwRXJyb3IgPSBjcmVhdGVFcnJvcig0MDQsIHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcclxuXHJcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzKGVyci5zdGF0dXMpLnNlbmQoeyBlcnJvcjogZXJyIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3Qgbm90QWxsb3dlZCA9IChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgIGxldCBlcnI6IEh0dHBFcnJvciA9IGNyZWF0ZUVycm9yKDQwNSwgRVJST1JTLm1ldGhvZE5vdEFsbG93ZWQpO1xyXG5cclxuICAgIHJlc3BvbnNlLnN0YXR1cyhlcnIuc3RhdHVzKS5zZW5kKHsgc3RhdHVzOiBlcnIuc3RhdHVzLCBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2Vyc0NvbnRyb2xsZXIgPSB7XHJcbiAgICBnZXRVc2VycyxcclxuICAgIGRlbGV0ZVVzZXIsXHJcbiAgICB1cGRhdGVVc2VyLFxyXG4gICAgZ2V0VXNlckJ5SWQsXHJcbiAgICBhZGRVc2VyLFxyXG4gICAgbm90QWxsb3dlZFxyXG59O1xyXG4iLCJpbXBvcnQgeyBTZXF1ZWxpemUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XHJcblxyXG5pbXBvcnQgeyBMT0dfTUVTU0FHRVMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBtb2RlbHMgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgZGJDb25maWcgZnJvbSAnLi8uLi8uLi9jb25maWcvY29uZmlnJztcclxuXHJcbmNvbnN0IHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoXHJcbiAgICBkYkNvbmZpZy5kYXRhYmFzZSxcclxuICAgIGRiQ29uZmlnLnVzZXJuYW1lLFxyXG4gICAgZGJDb25maWcucGFzc3dvcmQsXHJcbiAgICB7XHJcbiAgICAgICAgZGVmaW5lOiB7XHJcbiAgICAgICAgICAgIHRpbWVzdGFtcHM6IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFub2lkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3J0OiBkYkNvbmZpZy5wb3J0LFxyXG4gICAgICAgIGRpYWxlY3Q6IGRiQ29uZmlnLmRpYWxlY3QsXHJcbiAgICAgICAgaG9zdDogZGJDb25maWcuaG9zdCxcclxuICAgICAgICBkaWFsZWN0T3B0aW9uczogeyBzc2w6IHRydWUgfSxcclxuICAgICAgICBwb29sOiBkYkNvbmZpZy5wb29sLFxyXG4gICAgICAgIG1vZGVsczogWyAuLi5tb2RlbHMgXVxyXG4gICAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRiQ29ubmVjdCA9ICgpID0+IHtcclxuICAgIHJldHVybiBzZXF1ZWxpemVcclxuICAgICAgICAuc3luYygpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhMT0dfTUVTU0FHRVMuY29ubmVjdGlvblN1Y2Nlc3MpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihMT0dfTUVTU0FHRVMuY29ubmVjdGlvbkZhaWxlZCwgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG59O1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL3VzZXJEQUwnO1xyXG4iLCJpbXBvcnQgeyBXaGVyZU9wdGlvbnMsIE9wIH0gZnJvbSAnc2VxdWVsaXplJztcclxuXHJcbmltcG9ydCB7IEVSUk9SUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFVzZXJUb0FkZCwgVXNlclRvUmVzcG9uc2UsIFVzZXJUb1VwZGF0ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcbmltcG9ydCB7IHVzZXJzVG9SZXNwb25zZSwgdXNlclRvRGIsIHVzZXJUb1Jlc3BvbnNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXNlcnMucGFyc2VyJztcclxuaW1wb3J0IHsgVXNlciBhcyBVc2VyTW9kZWwgfSBmcm9tICcuLy4uL21vZGVscy91c2VyLm1vZGVsJztcclxuXHJcbmNvbnN0IERFRkFVTFRfT0ZGU0VUOiBudW1iZXIgPSAwO1xyXG5jb25zdCBERUZBVUxUX0xJTUlUOiBudW1iZXIgPSAxMDtcclxuXHJcbmNvbnN0IGdldEFsbCA9IChwYXJhbXM6IHsgbG9naW4/OiBzdHJpbmcsIGxpbWl0UGFyYW0/OiBzdHJpbmcsIG9mZnNldFBhcmFtPzogc3RyaW5nIH0pOiBQcm9taXNlPFVzZXJUb1Jlc3BvbnNlW10+ID0+IHtcclxuICAgIGNvbnN0IHsgbG9naW4sIG9mZnNldFBhcmFtLCBsaW1pdFBhcmFtIH0gPSBwYXJhbXM7XHJcbiAgICBjb25zdCBvZmZzZXQ6IG51bWJlciA9IG9mZnNldFBhcmFtICYmIHBhcnNlSW50KG9mZnNldFBhcmFtLCAxMCkgfHwgREVGQVVMVF9PRkZTRVQ7XHJcbiAgICBjb25zdCBsaW1pdDogbnVtYmVyID0gbGltaXRQYXJhbSAmJiBwYXJzZUludChsaW1pdFBhcmFtLCAxMCkgKyBvZmZzZXQgfHwgREVGQVVMVF9MSU1JVDtcclxuICAgIGNvbnN0IHdoZXJlOiBXaGVyZU9wdGlvbnMgPSBsb2dpbiA/IHsgbG9naW5uYW1lOiB7IFsgT3AuaUxpa2UgXTogYCUkeyBsb2dpbiB9JWAgfSB9IDoge307XHJcblxyXG4gICAgcmV0dXJuIFVzZXJNb2RlbFxyXG4gICAgICAgIC5maW5kQWxsKHsgb2Zmc2V0OiBvZmZzZXQsIGxpbWl0OiBsaW1pdCwgd2hlcmUgfSlcclxuICAgICAgICAudGhlbih1c2VycyA9PiB1c2Vyc1RvUmVzcG9uc2UodXNlcnMpKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFVzZXIgPSAodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXJUb1Jlc3BvbnNlPiA9PlxyXG4gICAgVXNlck1vZGVsXHJcbiAgICAgICAgLmZpbmRPbmUoeyB3aGVyZTogeyB1c2VyX2lkOiB1c2VySWQgfSB9KVxyXG4gICAgICAgIC50aGVuKHVzZXIgPT4gdXNlciA/IHVzZXJUb1Jlc3BvbnNlKHVzZXIpIDogbnVsbCk7XHJcblxyXG5jb25zdCBpbnNlcnRVc2VyID0gKG5ld1VzZXI6IFVzZXJUb0FkZCwgdXNlcklkOiBzdHJpbmcpID0+XHJcbiAgICBVc2VyTW9kZWxcclxuICAgICAgICAuZmluZE9uZSh7IHdoZXJlOiB7IGxvZ2lubmFtZTogbmV3VXNlci5sb2dpbiB9IH0pXHJcbiAgICAgICAgLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIGlmICggdXNlciApIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHsgbmV3VXNlci5sb2dpbiB9ICR7IEVSUk9SUy51c2VyRXhpc3QgfWApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3IFVzZXJNb2RlbCh1c2VyVG9EYihuZXdVc2VyLCB1c2VySWQpKS5zYXZlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuY29uc3QgdXBkYXRlVXNlciA9ICh1c2VySWQ6IHN0cmluZywgdXNlclRvVXBkYXRlOiBVc2VyVG9VcGRhdGUpID0+XHJcbiAgICBVc2VyTW9kZWxcclxuICAgICAgICAuZmluZE9uZSh7IHdoZXJlOiB7IHVzZXJfaWQ6IHVzZXJJZCB9IH0pXHJcbiAgICAgICAgLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIHVzZXIubG9naW5uYW1lID0gdXNlclRvVXBkYXRlLmxvZ2luO1xyXG4gICAgICAgICAgICB1c2VyLmFnZSA9IHVzZXJUb1VwZGF0ZS5hZ2U7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdXNlci5zYXZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5jb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKHVzZXJJZDogc3RyaW5nKSA9PlxyXG4gICAgVXNlck1vZGVsXHJcbiAgICAgICAgLmZpbmRPbmUoeyB3aGVyZTogeyB1c2VyX2lkOiB1c2VySWQgfSB9KVxyXG4gICAgICAgIC50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoICF1c2VyICkgeyB0aHJvdyBuZXcgRXJyb3IoRVJST1JTLnVzZXJOb3RGb3VuZCk7IH1cclxuICAgICAgICAgICAgcmV0dXJuIHVzZXIuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJEQUwgPSB7XHJcbiAgICBnZXRBbGwsXHJcbiAgICBnZXRVc2VyLFxyXG4gICAgaW5zZXJ0VXNlcixcclxuICAgIHVwZGF0ZVVzZXIsXHJcbiAgICBkZWxldGVVc2VyXHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vdmFsaWRhdGlvbi5zZXJ2aXNlJztcclxuIiwiaW1wb3J0ICogYXMgSm9pIGZyb20gJ0BoYXBpL2pvaSc7XHJcbmltcG9ydCB7IGNyZWF0ZVZhbGlkYXRvciB9IGZyb20gJ2V4cHJlc3Mtam9pLXZhbGlkYXRpb24nO1xyXG5cclxuY29uc3QgTUlOX0FHRSA9IDQ7XHJcbmNvbnN0IE1BWF9BR0UgPSAxMzA7XHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRhdG9yID0gY3JlYXRlVmFsaWRhdG9yKCk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVXNlckJvZHlTY2hlbWEgPSBKb2kub2JqZWN0KHtcclxuICAgIGxvZ2luOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIGFnZTogSm9pLm51bWJlcigpLnJlcXVpcmVkKCkuZ3JlYXRlcihNSU5fQUdFKS5sZXNzKE1BWF9BR0UpLFxyXG4gICAgcGFzc3dvcmQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLmFscGhhbnVtKClcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlckJvZHlTY2hlbWEgPSBKb2kub2JqZWN0KHtcclxuICAgIGxvZ2luOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIGFnZTogSm9pLm51bWJlcigpLnJlcXVpcmVkKCkuZ3JlYXRlcihNSU5fQUdFKS5sZXNzKE1BWF9BR0UpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXJRdWVyeVNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgdXNlcklkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKVxyXG59KTtcclxuIiwiaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlci5tb2RlbCc7XHJcblxyXG5leHBvcnQgY29uc3QgbW9kZWxzID0gW1xyXG4gICAgVXNlclxyXG5dO1xyXG4iLCJpbXBvcnQgeyBDb2x1bW4sIFRhYmxlLCBNb2RlbCwgUHJpbWFyeUtleSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcclxuXHJcbkBUYWJsZSh7XHJcbiAgICBzY2hlbWE6ICduZXcnLFxyXG4gICAgdGFibGVOYW1lOiAndXNlcnMnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgTW9kZWw8VXNlcj4ge1xyXG4gICAgQFByaW1hcnlLZXlcclxuICAgIEBDb2x1bW5cclxuICAgIHVzZXJfaWQ6IHN0cmluZztcclxuXHJcbiAgICBAQ29sdW1uXHJcbiAgICBsb2dpbm5hbWU6IHN0cmluZztcclxuXHJcbiAgICBAQ29sdW1uXHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuICAgIEBDb2x1bW5cclxuICAgIGFnZTogbnVtYmVyO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBST1VURVMgPSB7XHJcbiAgICB1c2VyUm91dGVzOiB7XHJcbiAgICAgICAgcm9vdDogJy8nLFxyXG4gICAgICAgIHVzZXJJZDogJy86dXNlcklkJ1xyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB1c2VyUm91dGVyIGZyb20gJy4vdXNlci1yb3V0ZXInO1xyXG5cclxuY29uc3Qgcm9vdFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbnJvb3RSb3V0ZXIudXNlKCcvdXNlcnMnLCB1c2VyUm91dGVyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSb3V0ZXI7XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgdXNlcnNDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMnO1xyXG5pbXBvcnQgeyBhZGRVc2VyQm9keVNjaGVtYSwgdXBkYXRlVXNlckJvZHlTY2hlbWEsIHVwZGF0ZVVzZXJRdWVyeVNjaGVtYSwgdmFsaWRhdG9yIH0gZnJvbSAnLi4vbWlkZGxld2FyZXMnO1xyXG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCB1c2VyUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnVzZXJSb3V0ZXIucm91dGUoUk9VVEVTLnVzZXJSb3V0ZXMucm9vdClcclxuICAgIC5nZXQodXNlcnNDb250cm9sbGVyLmdldFVzZXJzKVxyXG4gICAgLnBvc3QodmFsaWRhdG9yLmJvZHkoYWRkVXNlckJvZHlTY2hlbWEpLCB1c2Vyc0NvbnRyb2xsZXIuYWRkVXNlcilcclxuICAgIC5hbGwodXNlcnNDb250cm9sbGVyLm5vdEFsbG93ZWQpO1xyXG5cclxudXNlclJvdXRlci5yb3V0ZShST1VURVMudXNlclJvdXRlcy51c2VySWQpXHJcbiAgICAuZ2V0KHVzZXJzQ29udHJvbGxlci5nZXRVc2VyQnlJZClcclxuICAgIC5wdXQodmFsaWRhdG9yLnBhcmFtcyh1cGRhdGVVc2VyUXVlcnlTY2hlbWEpLCB2YWxpZGF0b3IuYm9keSh1cGRhdGVVc2VyQm9keVNjaGVtYSksIHVzZXJzQ29udHJvbGxlci51cGRhdGVVc2VyKVxyXG4gICAgLmRlbGV0ZSh1c2Vyc0NvbnRyb2xsZXIuZGVsZXRlVXNlcilcclxuICAgIC5hbGwodXNlcnNDb250cm9sbGVyLm5vdEFsbG93ZWQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclJvdXRlcjtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi91c2VyLnNlcnZpc2UnO1xyXG5cclxuIiwiaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XHJcblxyXG5pbXBvcnQgeyB1c2VyREFMIH0gZnJvbSAnLi4vZGF0YS1hY2Nlc3MnO1xyXG5pbXBvcnQgeyBVc2VyVG9BZGQsIFVzZXJUb1Jlc3BvbnNlLCBVc2VyVG9VcGRhdGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3R5cGluZ3MnO1xyXG5cclxuY29uc3QgZ2V0QWxsVXNlcnMgPSAocXVlcnk6IHsgbG9naW4/OiBzdHJpbmcsIGxpbWl0Pzogc3RyaW5nLCBvZmZzZXQ/OiBzdHJpbmcgfSk6IFByb21pc2U8VXNlclRvUmVzcG9uc2VbXT4gPT4gdXNlckRBTC5nZXRBbGwocXVlcnkpO1xyXG5cclxuY29uc3QgZ2V0VXNlckJ5SWQgPSAodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXJUb1Jlc3BvbnNlPiA9PiB1c2VyREFMLmdldFVzZXIodXNlcklkKTtcclxuXHJcbmNvbnN0IGFkZFVzZXIgPSAobmV3VXNlcjogVXNlclRvQWRkKSA9PiB1c2VyREFMLmluc2VydFVzZXIobmV3VXNlciwgdXVpZC52MSgpLnRvU3RyaW5nKCkpO1xyXG5cclxuY29uc3QgdXBkYXRlVXNlciA9ICh1c2VySWQ6IHN0cmluZywgdXNlclRvVXBkYXRlOiBVc2VyVG9VcGRhdGUpID0+IHVzZXJEQUwudXBkYXRlVXNlcih1c2VySWQsIHVzZXJUb1VwZGF0ZSk7XHJcblxyXG5jb25zdCBkZWxldGVVc2VyID0gKHVzZXJJZDogc3RyaW5nKSA9PiB1c2VyREFMLmRlbGV0ZVVzZXIodXNlcklkKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyU2VydmljZSA9IHtcclxuICAgIGdldEFsbFVzZXJzLFxyXG4gICAgZ2V0VXNlckJ5SWQsXHJcbiAgICBhZGRVc2VyLFxyXG4gICAgdXBkYXRlVXNlcixcclxuICAgIGRlbGV0ZVVzZXJcclxufTtcclxuIiwiaW1wb3J0IHsgRGJVc2VyLCBVc2VyVG9SZXNwb25zZSwgVXNlciwgVXNlclRvQWRkIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90eXBpbmdzJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyVG9SZXNwb25zZSA9ICh1c2VyOiBEYlVzZXIpOiBVc2VyVG9SZXNwb25zZSA9PiAoe1xyXG4gICAgdXNlcklkOiB1c2VyLnVzZXJfaWQsXHJcbiAgICBsb2dpbjogdXNlci5sb2dpbm5hbWUsXHJcbiAgICBhZ2U6IHVzZXIuYWdlXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJzVG9SZXNwb25zZSA9ICh1c2VyczogRGJVc2VyW10pOiBVc2VyVG9SZXNwb25zZVtdID0+IHVzZXJzLm1hcCh1c2VyID0+IHVzZXJUb1Jlc3BvbnNlKHVzZXIpKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyVG9EYiA9ICh1c2VyOiBVc2VyVG9BZGQsIHVzZXJJZDogc3RyaW5nKTogRGJVc2VyID0+ICh7XHJcbiAgICB1c2VyX2lkOiB1c2VySWQsXHJcbiAgICBsb2dpbm5hbWU6IHVzZXIubG9naW4sXHJcbiAgICBhZ2U6IHVzZXIuYWdlLFxyXG4gICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBoYXBpL2pvaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtam9pLXZhbGlkYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cC1lcnJvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==