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
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/routes/index.ts");



var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());
app.use('/', _routes__WEBPACK_IMPORTED_MODULE_2__["default"]);
app.listen(_constants__WEBPACK_IMPORTED_MODULE_1__["PORT"], function () { return console.log("Listening on port " + _constants__WEBPACK_IMPORTED_MODULE_1__["PORT"]); });


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: PORT, ERRORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT", function() { return PORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERRORS", function() { return ERRORS; });
var PORT = process.env.PORT || 4001;
var ERRORS = {
    userNotFound: 'User not Found!',
    methodNotAllowed: 'Method not allowed here!',
    userExist: 'login name already exist!'
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
/* harmony import */ var _services_service_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/service.helpers */ "./src/services/service.helpers.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var getUsers = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, _services__WEBPACK_IMPORTED_MODULE_2__["userService"].getAllUsers(request.query)];
            case 1:
                users = _a.sent();
                return [2 /*return*/, response.json(users).send({ status: 'success' })];
            case 2:
                error_1 = _a.sent();
                response.status(error_1.status).send();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getUserById = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var user, error_2, err;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, _services__WEBPACK_IMPORTED_MODULE_2__["userService"].getUserById(request.params.userId)];
            case 1:
                user = _a.sent();
                if (!user)
                    throw ({ status: 404, message: _constants__WEBPACK_IMPORTED_MODULE_1__["ERRORS"].userNotFound });
                return [2 /*return*/, response.send({ user: Object(_services_service_helpers__WEBPACK_IMPORTED_MODULE_3__["userToResponse"])(user), status: 'success' })];
            case 2:
                error_2 = _a.sent();
                err = http_errors__WEBPACK_IMPORTED_MODULE_0___default()(400, { message: error_2.message });
                response.status(error_2.status).send({ error: err });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var addUser = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var user, error_3, err;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, _services__WEBPACK_IMPORTED_MODULE_2__["userService"].addUser(request.body)];
            case 1:
                user = _a.sent();
                response.send({ status: 'success' }).json(user);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                err = http_errors__WEBPACK_IMPORTED_MODULE_0___default()(400, { message: error_3.message });
                response.status(err.status).send({ error: err });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var updateUser = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var error_4, err;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, _services__WEBPACK_IMPORTED_MODULE_2__["userService"].updateUser(request.params.userId, request.body)];
            case 1:
                _a.sent();
                response.send({ status: 'success' });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                err = http_errors__WEBPACK_IMPORTED_MODULE_0___default()(404, { message: error_4.message });
                response.status(err.status).send({ error: err });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var deleteUser = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var error_5, err;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, _services__WEBPACK_IMPORTED_MODULE_2__["userService"].deleteUser(request.params.userId)];
            case 1:
                _a.sent();
                response.send({ status: 'success' });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                err = http_errors__WEBPACK_IMPORTED_MODULE_0___default()(404, { message: error_5.message });
                response.status(err.status).send({ error: err });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var notAllowed = function (request, response) {
    var err = http_errors__WEBPACK_IMPORTED_MODULE_0___default()(405, _constants__WEBPACK_IMPORTED_MODULE_1__["ERRORS"].methodNotAllowed);
    response.status(err.status).send({ status: err.status, message: err.message });
};
var usersController = {
    getUsers: getUsers,
    deleteUser: deleteUser,
    updateUser: updateUser,
    getUserById: getUserById,
    addUser: addUser,
    notAllowed: notAllowed
};


/***/ }),

/***/ "./src/dto/constants.ts":
/*!******************************!*\
  !*** ./src/dto/constants.ts ***!
  \******************************/
/*! exports provided: DTO_CONSTANTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DTO_CONSTANTS", function() { return DTO_CONSTANTS; });
var DTO_CONSTANTS = {
    users: 'users'
};


/***/ }),

/***/ "./src/dto/dal.helpers.ts":
/*!********************************!*\
  !*** ./src/dto/dal.helpers.ts ***!
  \********************************/
/*! exports provided: getUsersBySubstring */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersBySubstring", function() { return getUsersBySubstring; });
var getUsersBySubstring = function (collection, substring) {
    return substring && collection.filter(function (user) { return user.login.toLowerCase().includes(substring.toLowerCase()); }) || [];
};


/***/ }),

/***/ "./src/dto/db.ts":
/*!***********************!*\
  !*** ./src/dto/db.ts ***!
  \***********************/
/*! exports provided: getDbInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDbInstance", function() { return getDbInstance; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;

var getDbInstance = function () { return DB; };
var getDbCollection = function (collection) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, getDbInstance().db[collection]];
}); }); };
var DB = {
    getCollection: getDbCollection,
    db: (_a = {},
        _a['users'] = [
            {
                id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1(),
                login: 'Jake',
                password: 'ewq',
                age: 35,
                isDeleted: false
            },
            {
                id: '123',
                login: 'Kit',
                password: 'qwe',
                age: 35,
                isDeleted: true
            },
            {
                id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1(),
                login: 'Nik',
                password: 'qwe',
                age: 35,
                isDeleted: false
            },
            {
                id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1(),
                login: 'Bruce',
                password: 'qwe',
                age: 35,
                isDeleted: false
            },
            {
                id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1(),
                login: 'John',
                password: 'qwe',
                age: 35,
                isDeleted: true
            },
            {
                id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1(),
                login: 'Mike',
                password: 'qwe',
                age: 35,
                isDeleted: false
            }
        ],
        _a)
};


/***/ }),

/***/ "./src/dto/index.ts":
/*!**************************!*\
  !*** ./src/dto/index.ts ***!
  \**************************/
/*! exports provided: userDAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userDAL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userDAL */ "./src/dto/userDAL.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userDAL", function() { return _userDAL__WEBPACK_IMPORTED_MODULE_0__["userDAL"]; });




/***/ }),

/***/ "./src/dto/userDAL.ts":
/*!****************************!*\
  !*** ./src/dto/userDAL.ts ***!
  \****************************/
/*! exports provided: userDAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userDAL", function() { return userDAL; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _services_users_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.parser */ "./src/services/users.parser.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/dto/constants.ts");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./db */ "./src/dto/db.ts");
/* harmony import */ var _dal_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dal.helpers */ "./src/dto/dal.helpers.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var dbInstance = Object(_db__WEBPACK_IMPORTED_MODULE_3__["getDbInstance"])();
var IS_DELETED = false;
var DEFAULT_START = 0;
var DEFAULT_END = 10;
var getAll = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var login, limit, offset, users, _a, start, end;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                login = params.login, limit = params.limit, offset = params.offset;
                _a = _services_users_parser__WEBPACK_IMPORTED_MODULE_1__["usersParser"];
                return [4 /*yield*/, dbInstance.getCollection(_constants__WEBPACK_IMPORTED_MODULE_2__["DTO_CONSTANTS"].users)];
            case 1:
                users = _a.apply(void 0, [_b.sent()]);
                start = offset && parseInt(offset, 10) || DEFAULT_START;
                end = limit && parseInt(limit, 10) + start || DEFAULT_END;
                return [2 /*return*/, login
                        ? Object(_dal_helpers__WEBPACK_IMPORTED_MODULE_4__["getUsersBySubstring"])(users, login).slice(start, end)
                        : users.slice(start, end)];
        }
    });
}); };
var getUser = function (userId) { return __awaiter(void 0, void 0, void 0, function () {
    var collection;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dbInstance.getCollection(_constants__WEBPACK_IMPORTED_MODULE_2__["DTO_CONSTANTS"].users).then(function (users) { return users.filter(function (user) { return !user.isDeleted; }); })];
            case 1:
                collection = _a.sent();
                return [4 /*yield*/, collection.find(function (collectionItem) { return collectionItem.id === userId; })];
            case 2: return [2 /*return*/, (_a.sent()) || undefined];
        }
    });
}); };
var insertUser = function (newUser, id) { return __awaiter(void 0, void 0, void 0, function () {
    var collection;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dbInstance.getCollection(_constants__WEBPACK_IMPORTED_MODULE_2__["DTO_CONSTANTS"].users)];
            case 1:
                collection = _a.sent();
                if (collection.some(function (existingUser) { return existingUser.login.toLowerCase() === newUser.login.toLowerCase(); })) {
                    throw new Error(newUser.login + " " + _constants__WEBPACK_IMPORTED_MODULE_0__["ERRORS"].userExist);
                }
                collection.push({
                    id: id,
                    login: newUser.login,
                    password: newUser.password,
                    age: newUser.age,
                    isDeleted: IS_DELETED
                });
                return [2 /*return*/];
        }
    });
}); };
var updateUser = function (userId, userToUpdate) { return __awaiter(void 0, void 0, void 0, function () {
    var collection, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dbInstance.getCollection(_constants__WEBPACK_IMPORTED_MODULE_2__["DTO_CONSTANTS"].users)];
            case 1:
                collection = _a.sent();
                user = collection.find(function (collectionItem) { return collectionItem.id === userId; });
                if (!user) {
                    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__["ERRORS"].userNotFound);
                }
                else {
                    Object.assign(user, userToUpdate);
                }
                return [2 /*return*/];
        }
    });
}); };
var deleteUser = function (userId) { return __awaiter(void 0, void 0, void 0, function () {
    var collection, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dbInstance.getCollection(_constants__WEBPACK_IMPORTED_MODULE_2__["DTO_CONSTANTS"].users)];
            case 1:
                collection = _a.sent();
                user = collection.find(function (collectionItem) { return collectionItem.id === userId; });
                if (user && user.isDeleted || !user) {
                    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__["ERRORS"].userNotFound);
                }
                else {
                    user.isDeleted = true;
                }
                return [2 /*return*/];
        }
    });
}); };
var userDAL = {
    getAll: getAll,
    getUser: getUser,
    insertUser: insertUser,
    updateUser: updateUser,
    deleteUser: deleteUser
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


var MIN_AGE = 4;
var MAX_AGE = 130;
var validator = Object(express_joi_validation__WEBPACK_IMPORTED_MODULE_1__["createValidator"])();
var addUserBodySchema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["object"]({
    login: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["string"]().required(),
    age: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["number"]().required().greater(MIN_AGE).less(MAX_AGE),
    password: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["string"]().required().alphanum()
});
var updateUserBodySchema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["object"]({
    login: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["string"]().required(),
    age: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["number"]().required().greater(MIN_AGE).less(MAX_AGE)
});
var updateUserQuerySchema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["object"]({
    userId: _hapi_joi__WEBPACK_IMPORTED_MODULE_0__["string"]().required()
});


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
var ROUTES = {
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


var rootRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
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




var userRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
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

/***/ "./src/services/service.helpers.ts":
/*!*****************************************!*\
  !*** ./src/services/service.helpers.ts ***!
  \*****************************************/
/*! exports provided: userToResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userToResponse", function() { return userToResponse; });
var userToResponse = function (response) { return ({
    id: response.id,
    login: response.login,
    age: response.age
}); };


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
/* harmony import */ var _dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dto */ "./src/dto/index.ts");


var getAllUsers = function (query) { return _dto__WEBPACK_IMPORTED_MODULE_1__["userDAL"].getAll(query); };
var getUserById = function (userId) { return _dto__WEBPACK_IMPORTED_MODULE_1__["userDAL"].getUser(userId); };
var addUser = function (newUser) { return _dto__WEBPACK_IMPORTED_MODULE_1__["userDAL"].insertUser(newUser, uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1().toString()); };
var updateUser = function (userId, userToUpdate) { return _dto__WEBPACK_IMPORTED_MODULE_1__["userDAL"].updateUser(userId, userToUpdate); };
var deleteUser = function (userId) { return _dto__WEBPACK_IMPORTED_MODULE_1__["userDAL"].deleteUser(userId); };
var userService = {
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    addUser: addUser,
    updateUser: updateUser,
    deleteUser: deleteUser
};


/***/ }),

/***/ "./src/services/users.parser.ts":
/*!**************************************!*\
  !*** ./src/services/users.parser.ts ***!
  \**************************************/
/*! exports provided: usersParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersParser", function() { return usersParser; });
var usersParser = function (users) {
    return users
        .filter(function (user) { return !user.isDeleted; }).map(function (user) { return ({
        id: user.id,
        login: user.login,
        age: user.age
    }); });
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

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvdXNlcnMuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZHRvL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZHRvL2RhbC5oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9kdG8vZGIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R0by9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZHRvL3VzZXJEQUwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pZGRsZXdhcmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlcy92YWxpZGF0aW9uLnNlcnZpc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3VzZXItcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc2VydmljZS5oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy91c2VyLnNlcnZpc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3VzZXJzLnBhcnNlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAaGFwaS9qb2lcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1qb2ktdmFsaWRhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHAt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SUFDWCxXQUFXO0lBQ1gsT0FBTztJQUNQLFVBQVU7SUFDVixVQUFVO0NBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ25CRjtBQUFBO0FBQU8sSUFBTSxXQUFXLEdBQUcsVUFBQyxLQUFhO0lBQ3JDLE9BQU8sS0FBSztTQUNQLE1BQU0sQ0FBQyxjQUFJLElBQUksUUFBQyxJQUFJLENBQUMsU0FBUyxFQUFmLENBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFJLElBQUksUUFBQztRQUMxQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7UUFDWCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDakIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO0tBQ2hCLENBQUMsRUFKMkMsQ0FJM0MsQ0FBQztBQUNYLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDVEYsc0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoic2VydmVyLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC50c1wiKTtcbiIsImltcG9ydCBleHByZXNzLCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBQT1JUIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgcm9vdFJvdXRlciBmcm9tICcuL3JvdXRlcyc7XHJcblxyXG5jb25zdCBhcHA6IEFwcGxpY2F0aW9uID0gZXhwcmVzcygpO1xyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuYXBwLnVzZSgnLycsIHJvb3RSb3V0ZXIpO1xyXG5hcHAubGlzdGVuKFBPUlQsICgpID0+IGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgb24gcG9ydCAkeyBQT1JUIH1gKSk7XHJcbiIsImV4cG9ydCBjb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA0MDAxO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVSUk9SUyA9IHtcclxuICAgIHVzZXJOb3RGb3VuZDogJ1VzZXIgbm90IEZvdW5kIScsXHJcbiAgICBtZXRob2ROb3RBbGxvd2VkOiAnTWV0aG9kIG5vdCBhbGxvd2VkIGhlcmUhJyxcclxuICAgIHVzZXJFeGlzdDogJ2xvZ2luIG5hbWUgYWxyZWFkeSBleGlzdCEnXHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vdXNlcnMuY29udHJvbGxlcic7XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgY3JlYXRlRXJyb3IsIHsgSHR0cEVycm9yIH0gZnJvbSAnaHR0cC1lcnJvcnMnO1xyXG5pbXBvcnQgeyBFUlJPUlMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyB1c2VyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgdXNlclRvUmVzcG9uc2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXJ2aWNlLmhlbHBlcnMnO1xyXG5cclxuY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0QWxsVXNlcnMocmVxdWVzdC5xdWVyeSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKHVzZXJzKS5zZW5kKHsgc3RhdHVzOiAnc3VjY2VzcycgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlc3BvbnNlLnN0YXR1cyhlcnJvci5zdGF0dXMpLnNlbmQoKTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFVzZXJCeUlkID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0VXNlckJ5SWQocmVxdWVzdC5wYXJhbXMudXNlcklkKTtcclxuXHJcbiAgICAgICAgaWYgKCAhdXNlciApIHRocm93ICh7IHN0YXR1czogNDA0LCBtZXNzYWdlOiBFUlJPUlMudXNlck5vdEZvdW5kIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2Uuc2VuZCh7IHVzZXI6IHVzZXJUb1Jlc3BvbnNlKHVzZXIpLCBzdGF0dXM6ICdzdWNjZXNzJyB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBlcnI6IEh0dHBFcnJvciA9IGNyZWF0ZUVycm9yKDQwMCwgeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xyXG5cclxuICAgICAgICByZXNwb25zZS5zdGF0dXMoZXJyb3Iuc3RhdHVzKS5zZW5kKHsgZXJyb3I6IGVyciB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGFkZFVzZXIgPSBhc3luYyAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5hZGRVc2VyKHJlcXVlc3QuYm9keSk7XHJcblxyXG4gICAgICAgIHJlc3BvbnNlLnNlbmQoeyBzdGF0dXM6ICdzdWNjZXNzJyB9KS5qc29uKHVzZXIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBlcnI6IEh0dHBFcnJvciA9IGNyZWF0ZUVycm9yKDQwMCwgeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xyXG5cclxuICAgICAgICByZXNwb25zZS5zdGF0dXMoZXJyLnN0YXR1cykuc2VuZCh7IGVycm9yOiBlcnIgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCB1c2VyU2VydmljZS51cGRhdGVVc2VyKHJlcXVlc3QucGFyYW1zLnVzZXJJZCwgcmVxdWVzdC5ib2R5KTtcclxuXHJcbiAgICAgICAgcmVzcG9uc2Uuc2VuZCh7IHN0YXR1czogJ3N1Y2Nlc3MnIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBlcnI6IEh0dHBFcnJvciA9IGNyZWF0ZUVycm9yKDQwNCwgeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xyXG5cclxuICAgICAgICByZXNwb25zZS5zdGF0dXMoZXJyLnN0YXR1cykuc2VuZCh7IGVycm9yOiBlcnIgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCB1c2VyU2VydmljZS5kZWxldGVVc2VyKHJlcXVlc3QucGFyYW1zLnVzZXJJZCk7XHJcblxyXG4gICAgICAgIHJlc3BvbnNlLnNlbmQoeyBzdGF0dXM6ICdzdWNjZXNzJyB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgZXJyOiBIdHRwRXJyb3IgPSBjcmVhdGVFcnJvcig0MDQsIHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcclxuXHJcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzKGVyci5zdGF0dXMpLnNlbmQoeyBlcnJvcjogZXJyIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3Qgbm90QWxsb3dlZCA9IChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgIGxldCBlcnI6IEh0dHBFcnJvciA9IGNyZWF0ZUVycm9yKDQwNSwgRVJST1JTLm1ldGhvZE5vdEFsbG93ZWQpO1xyXG5cclxuICAgIHJlc3BvbnNlLnN0YXR1cyhlcnIuc3RhdHVzKS5zZW5kKHsgc3RhdHVzOiBlcnIuc3RhdHVzLCBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2Vyc0NvbnRyb2xsZXIgPSB7XHJcbiAgICBnZXRVc2VycyxcclxuICAgIGRlbGV0ZVVzZXIsXHJcbiAgICB1cGRhdGVVc2VyLFxyXG4gICAgZ2V0VXNlckJ5SWQsXHJcbiAgICBhZGRVc2VyLFxyXG4gICAgbm90QWxsb3dlZFxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgRFRPX0NPTlNUQU5UUyA9IHtcclxuICAgIHVzZXJzOiAndXNlcnMnXHJcbn07XHJcbiIsImltcG9ydCB7IFVzZXJUb1Jlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90eXBpbmdzJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2Vyc0J5U3Vic3RyaW5nID0gKGNvbGxlY3Rpb246IFVzZXJUb1Jlc3BvbnNlW10sIHN1YnN0cmluZz86IHN0cmluZykgPT5cclxuICAgIHN1YnN0cmluZyAmJiBjb2xsZWN0aW9uLmZpbHRlcigodXNlcjogVXNlclRvUmVzcG9uc2UpID0+IHVzZXIubG9naW4udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzdWJzdHJpbmcudG9Mb3dlckNhc2UoKSkpIHx8IFtdO1xyXG4iLCJpbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcblxyXG5pbnRlcmZhY2UgRGF0YUJhc2Uge1xyXG4gICAgZGI6IHtcclxuICAgICAgICBbIGtleTogc3RyaW5nIF06IFVzZXJbXVxyXG4gICAgfTtcclxuICAgIGdldENvbGxlY3Rpb246IChjb2xsZWN0aW9uOiBzdHJpbmcpID0+IFByb21pc2U8YW55W10+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGJJbnN0YW5jZSA9ICgpOiBEYXRhQmFzZSA9PiBEQjtcclxuXHJcbmNvbnN0IGdldERiQ29sbGVjdGlvbiA9IGFzeW5jIChjb2xsZWN0aW9uOiBzdHJpbmcpOiBQcm9taXNlPGFueVtdPiA9PiBnZXREYkluc3RhbmNlKCkuZGJbIGNvbGxlY3Rpb24gXTtcclxuXHJcbmNvbnN0IERCOiBEYXRhQmFzZSA9IHtcclxuICAgIGdldENvbGxlY3Rpb246IGdldERiQ29sbGVjdGlvbixcclxuICAgIGRiOiB7XHJcbiAgICAgICAgWyAndXNlcnMnIF06IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHV1aWQudjEoKSxcclxuICAgICAgICAgICAgICAgIGxvZ2luOiAnSmFrZScsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJ2V3cScsXHJcbiAgICAgICAgICAgICAgICBhZ2U6IDM1LFxyXG4gICAgICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEyMycsXHJcbiAgICAgICAgICAgICAgICBsb2dpbjogJ0tpdCcsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJ3F3ZScsXHJcbiAgICAgICAgICAgICAgICBhZ2U6IDM1LFxyXG4gICAgICAgICAgICAgICAgaXNEZWxldGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiB1dWlkLnYxKCksXHJcbiAgICAgICAgICAgICAgICBsb2dpbjogJ05paycsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJ3F3ZScsXHJcbiAgICAgICAgICAgICAgICBhZ2U6IDM1LFxyXG4gICAgICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogdXVpZC52MSgpLFxyXG4gICAgICAgICAgICAgICAgbG9naW46ICdCcnVjZScsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJ3F3ZScsXHJcbiAgICAgICAgICAgICAgICBhZ2U6IDM1LFxyXG4gICAgICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogdXVpZC52MSgpLFxyXG4gICAgICAgICAgICAgICAgbG9naW46ICdKb2huJyxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAncXdlJyxcclxuICAgICAgICAgICAgICAgIGFnZTogMzUsXHJcbiAgICAgICAgICAgICAgICBpc0RlbGV0ZWQ6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHV1aWQudjEoKSxcclxuICAgICAgICAgICAgICAgIGxvZ2luOiAnTWlrZScsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJ3F3ZScsXHJcbiAgICAgICAgICAgICAgICBhZ2U6IDM1LFxyXG4gICAgICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59O1xyXG5cclxuIiwiZXhwb3J0ICogZnJvbSAnLi91c2VyREFMJztcclxuIiwiaW1wb3J0IHsgRVJST1JTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgVXNlciwgVXNlclRvQWRkLCBVc2VyVG9SZXNwb25zZSwgVXNlclRvVXBkYXRlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90eXBpbmdzJztcclxuaW1wb3J0IHsgdXNlcnNQYXJzZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2Vycy5wYXJzZXInO1xyXG5pbXBvcnQgeyBEVE9fQ09OU1RBTlRTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBnZXREYkluc3RhbmNlIH0gZnJvbSAnLi9kYic7XHJcbmltcG9ydCB7IGdldFVzZXJzQnlTdWJzdHJpbmcgfSBmcm9tICcuL2RhbC5oZWxwZXJzJztcclxuXHJcbmNvbnN0IGRiSW5zdGFuY2UgPSBnZXREYkluc3RhbmNlKCk7XHJcbmNvbnN0IElTX0RFTEVURUQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuY29uc3QgREVGQVVMVF9TVEFSVDogbnVtYmVyID0gMDtcclxuY29uc3QgREVGQVVMVF9FTkQ6IG51bWJlciA9IDEwO1xyXG5cclxuY29uc3QgZ2V0QWxsID0gYXN5bmMgKHBhcmFtczogeyBsb2dpbj86IHN0cmluZywgbGltaXQ/OiBzdHJpbmcsIG9mZnNldD86IHN0cmluZyB9KTogUHJvbWlzZTxVc2VyVG9SZXNwb25zZVtdPiA9PiB7XHJcbiAgICBjb25zdCB7IGxvZ2luLCBsaW1pdCwgb2Zmc2V0IH0gPSBwYXJhbXM7XHJcbiAgICBjb25zdCB1c2VycyA9IHVzZXJzUGFyc2VyKGF3YWl0IGRiSW5zdGFuY2UuZ2V0Q29sbGVjdGlvbihEVE9fQ09OU1RBTlRTLnVzZXJzKSk7XHJcbiAgICBjb25zdCBzdGFydDogbnVtYmVyID0gb2Zmc2V0ICYmIHBhcnNlSW50KG9mZnNldCwgMTApIHx8IERFRkFVTFRfU1RBUlQ7XHJcbiAgICBjb25zdCBlbmQ6IG51bWJlciA9IGxpbWl0ICYmIHBhcnNlSW50KGxpbWl0LCAxMCkgKyBzdGFydCB8fCBERUZBVUxUX0VORDtcclxuXHJcbiAgICByZXR1cm4gbG9naW5cclxuICAgICAgICA/IGdldFVzZXJzQnlTdWJzdHJpbmcodXNlcnMsIGxvZ2luKS5zbGljZShzdGFydCwgZW5kKVxyXG4gICAgICAgIDogdXNlcnMuc2xpY2Uoc3RhcnQsIGVuZCk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRVc2VyID0gYXN5bmMgKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxVc2VyIHwgdW5kZWZpbmVkPiA9PiB7XHJcbiAgICBjb25zdCBjb2xsZWN0aW9uOiBVc2VyW10gPSBhd2FpdCBkYkluc3RhbmNlLmdldENvbGxlY3Rpb24oRFRPX0NPTlNUQU5UUy51c2VycykudGhlbih1c2VycyA9PiB1c2Vycy5maWx0ZXIodXNlciA9PiAhdXNlci5pc0RlbGV0ZWQpKTtcclxuXHJcbiAgICByZXR1cm4gYXdhaXQgY29sbGVjdGlvbi5maW5kKChjb2xsZWN0aW9uSXRlbTogVXNlcik6IGJvb2xlYW4gPT4gY29sbGVjdGlvbkl0ZW0uaWQgPT09IHVzZXJJZCkgfHwgdW5kZWZpbmVkO1xyXG59O1xyXG5cclxuY29uc3QgaW5zZXJ0VXNlciA9IGFzeW5jIChuZXdVc2VyOiBVc2VyVG9BZGQsIGlkOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGNvbGxlY3Rpb246IFVzZXJbXSA9IGF3YWl0IGRiSW5zdGFuY2UuZ2V0Q29sbGVjdGlvbihEVE9fQ09OU1RBTlRTLnVzZXJzKTtcclxuXHJcbiAgICBpZiAoIGNvbGxlY3Rpb24uc29tZShleGlzdGluZ1VzZXIgPT4gZXhpc3RpbmdVc2VyLmxvZ2luLnRvTG93ZXJDYXNlKCkgPT09IG5ld1VzZXIubG9naW4udG9Mb3dlckNhc2UoKSkgKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAkeyBuZXdVc2VyLmxvZ2luIH0gJHsgRVJST1JTLnVzZXJFeGlzdCB9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGVjdGlvbi5wdXNoKHtcclxuICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgbG9naW46IG5ld1VzZXIubG9naW4sXHJcbiAgICAgICAgcGFzc3dvcmQ6IG5ld1VzZXIucGFzc3dvcmQsXHJcbiAgICAgICAgYWdlOiBuZXdVc2VyLmFnZSxcclxuICAgICAgICBpc0RlbGV0ZWQ6IElTX0RFTEVURURcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlVXNlciA9IGFzeW5jICh1c2VySWQ6IHN0cmluZywgdXNlclRvVXBkYXRlOiBVc2VyVG9VcGRhdGUpID0+IHtcclxuICAgIGNvbnN0IGNvbGxlY3Rpb246IFVzZXJbXSA9IGF3YWl0IGRiSW5zdGFuY2UuZ2V0Q29sbGVjdGlvbihEVE9fQ09OU1RBTlRTLnVzZXJzKTtcclxuICAgIGNvbnN0IHVzZXI6IFVzZXIgfCB1bmRlZmluZWQgPSBjb2xsZWN0aW9uLmZpbmQoY29sbGVjdGlvbkl0ZW0gPT4gY29sbGVjdGlvbkl0ZW0uaWQgPT09IHVzZXJJZCk7XHJcblxyXG4gICAgaWYgKCAhdXNlciApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JTLnVzZXJOb3RGb3VuZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odXNlciwgdXNlclRvVXBkYXRlKTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAodXNlcklkOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGNvbGxlY3Rpb246IFVzZXJbXSA9IGF3YWl0IGRiSW5zdGFuY2UuZ2V0Q29sbGVjdGlvbihEVE9fQ09OU1RBTlRTLnVzZXJzKTtcclxuICAgIGNvbnN0IHVzZXI6IFVzZXIgfCB1bmRlZmluZWQgPSBjb2xsZWN0aW9uLmZpbmQoY29sbGVjdGlvbkl0ZW0gPT4gY29sbGVjdGlvbkl0ZW0uaWQgPT09IHVzZXJJZCk7XHJcblxyXG4gICAgaWYgKCB1c2VyICYmIHVzZXIuaXNEZWxldGVkIHx8ICF1c2VyICkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUlMudXNlck5vdEZvdW5kKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdXNlci5pc0RlbGV0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJEQUwgPSB7XHJcbiAgICBnZXRBbGwsXHJcbiAgICBnZXRVc2VyLFxyXG4gICAgaW5zZXJ0VXNlcixcclxuICAgIHVwZGF0ZVVzZXIsXHJcbiAgICBkZWxldGVVc2VyXHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vdmFsaWRhdGlvbi5zZXJ2aXNlJztcclxuIiwiaW1wb3J0ICogYXMgSm9pIGZyb20gJ0BoYXBpL2pvaSc7XHJcbmltcG9ydCB7IGNyZWF0ZVZhbGlkYXRvciB9IGZyb20gJ2V4cHJlc3Mtam9pLXZhbGlkYXRpb24nO1xyXG5cclxuY29uc3QgTUlOX0FHRSA9IDQ7XHJcbmNvbnN0IE1BWF9BR0UgPSAxMzA7XHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRhdG9yID0gY3JlYXRlVmFsaWRhdG9yKCk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVXNlckJvZHlTY2hlbWEgPSBKb2kub2JqZWN0KHtcclxuICAgIGxvZ2luOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIGFnZTogSm9pLm51bWJlcigpLnJlcXVpcmVkKCkuZ3JlYXRlcihNSU5fQUdFKS5sZXNzKE1BWF9BR0UpLFxyXG4gICAgcGFzc3dvcmQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLmFscGhhbnVtKClcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlckJvZHlTY2hlbWEgPSBKb2kub2JqZWN0KHtcclxuICAgIGxvZ2luOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIGFnZTogSm9pLm51bWJlcigpLnJlcXVpcmVkKCkuZ3JlYXRlcihNSU5fQUdFKS5sZXNzKE1BWF9BR0UpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXJRdWVyeVNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgdXNlcklkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKVxyXG59KTtcclxuIiwiZXhwb3J0IGNvbnN0IFJPVVRFUyA9IHtcclxuICAgIHVzZXJSb3V0ZXM6IHtcclxuICAgICAgICByb290OiAnLycsXHJcbiAgICAgICAgdXNlcklkOiAnLzp1c2VySWQnXHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHVzZXJSb3V0ZXIgZnJvbSAnLi91c2VyLXJvdXRlcic7XHJcblxyXG5jb25zdCByb290Um91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxucm9vdFJvdXRlci51c2UoJy91c2VycycsIHVzZXJSb3V0ZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJvdXRlcjtcclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyB1c2Vyc0NvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVycyc7XHJcbmltcG9ydCB7IGFkZFVzZXJCb2R5U2NoZW1hLCB1cGRhdGVVc2VyQm9keVNjaGVtYSwgdXBkYXRlVXNlclF1ZXJ5U2NoZW1hLCB2YWxpZGF0b3IgfSBmcm9tICcuLi9taWRkbGV3YXJlcyc7XHJcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IHVzZXJSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxudXNlclJvdXRlci5yb3V0ZShST1VURVMudXNlclJvdXRlcy5yb290KVxyXG4gICAgLmdldCh1c2Vyc0NvbnRyb2xsZXIuZ2V0VXNlcnMpXHJcbiAgICAucG9zdCh2YWxpZGF0b3IuYm9keShhZGRVc2VyQm9keVNjaGVtYSksIHVzZXJzQ29udHJvbGxlci5hZGRVc2VyKVxyXG4gICAgLmFsbCh1c2Vyc0NvbnRyb2xsZXIubm90QWxsb3dlZCk7XHJcblxyXG51c2VyUm91dGVyLnJvdXRlKFJPVVRFUy51c2VyUm91dGVzLnVzZXJJZClcclxuICAgIC5nZXQodXNlcnNDb250cm9sbGVyLmdldFVzZXJCeUlkKVxyXG4gICAgLnB1dCh2YWxpZGF0b3IucGFyYW1zKHVwZGF0ZVVzZXJRdWVyeVNjaGVtYSksIHZhbGlkYXRvci5ib2R5KHVwZGF0ZVVzZXJCb2R5U2NoZW1hKSwgdXNlcnNDb250cm9sbGVyLnVwZGF0ZVVzZXIpXHJcbiAgICAuZGVsZXRlKHVzZXJzQ29udHJvbGxlci5kZWxldGVVc2VyKVxyXG4gICAgLmFsbCh1c2Vyc0NvbnRyb2xsZXIubm90QWxsb3dlZCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyUm91dGVyO1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL3VzZXIuc2VydmlzZSc7XHJcblxyXG4iLCJpbXBvcnQgeyBVc2VyLCBVc2VyVG9SZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclRvUmVzcG9uc2UgPSAocmVzcG9uc2U6IFVzZXIpOiBVc2VyVG9SZXNwb25zZSA9PiAoe1xyXG4gICAgaWQ6IHJlc3BvbnNlLmlkLFxyXG4gICAgbG9naW46IHJlc3BvbnNlLmxvZ2luLFxyXG4gICAgYWdlOiByZXNwb25zZS5hZ2VcclxufSk7XHJcblxyXG4iLCJpbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcclxuXHJcbmltcG9ydCB7IHVzZXJEQUwgfSBmcm9tICcuLi9kdG8nO1xyXG5pbXBvcnQgeyBVc2VyLCBVc2VyVG9BZGQsIFVzZXJUb1Jlc3BvbnNlLCBVc2VyVG9VcGRhdGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3R5cGluZ3MnO1xyXG5cclxuY29uc3QgZ2V0QWxsVXNlcnMgPSAocXVlcnk6IHsgbG9naW4/OiBzdHJpbmcsIGxpbWl0Pzogc3RyaW5nLCBvZmZzZXQ/OiBzdHJpbmcgfSk6IFByb21pc2U8VXNlclRvUmVzcG9uc2VbXT4gPT4gdXNlckRBTC5nZXRBbGwocXVlcnkpO1xyXG5cclxuY29uc3QgZ2V0VXNlckJ5SWQgPSAodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXIgfCB1bmRlZmluZWQ+ID0+IHVzZXJEQUwuZ2V0VXNlcih1c2VySWQpO1xyXG5cclxuY29uc3QgYWRkVXNlciA9IChuZXdVc2VyOiBVc2VyVG9BZGQpID0+IHVzZXJEQUwuaW5zZXJ0VXNlcihuZXdVc2VyLCB1dWlkLnYxKCkudG9TdHJpbmcoKSk7XHJcblxyXG5jb25zdCB1cGRhdGVVc2VyID0gKHVzZXJJZDogc3RyaW5nLCB1c2VyVG9VcGRhdGU6IFVzZXJUb1VwZGF0ZSkgPT4gdXNlckRBTC51cGRhdGVVc2VyKHVzZXJJZCwgdXNlclRvVXBkYXRlKTtcclxuXHJcbmNvbnN0IGRlbGV0ZVVzZXIgPSAodXNlcklkOiBzdHJpbmcpID0+IHVzZXJEQUwuZGVsZXRlVXNlcih1c2VySWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJTZXJ2aWNlID0ge1xyXG4gICAgZ2V0QWxsVXNlcnMsXHJcbiAgICBnZXRVc2VyQnlJZCxcclxuICAgIGFkZFVzZXIsXHJcbiAgICB1cGRhdGVVc2VyLFxyXG4gICAgZGVsZXRlVXNlclxyXG59O1xyXG4iLCJpbXBvcnQgeyBVc2VyLCBVc2VyVG9SZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdHlwaW5ncyc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlcnNQYXJzZXIgPSAodXNlcnM6IFVzZXJbXSk6IFVzZXJUb1Jlc3BvbnNlW10gPT4ge1xyXG4gICAgcmV0dXJuIHVzZXJzXHJcbiAgICAgICAgLmZpbHRlcih1c2VyID0+ICF1c2VyLmlzRGVsZXRlZCkubWFwKHVzZXIgPT4gKHtcclxuICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgIGxvZ2luOiB1c2VyLmxvZ2luLFxyXG4gICAgICAgICAgICBhZ2U6IHVzZXIuYWdlXHJcbiAgICAgICAgfSkpXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBoYXBpL2pvaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtam9pLXZhbGlkYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cC1lcnJvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9