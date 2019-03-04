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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/ShowCard.js":
/*!*********************************!*\
  !*** ./src/scripts/ShowCard.js ***!
  \*********************************/
/*! exports provided: ShowCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowCard", function() { return ShowCard; });
var ShowCard = function ShowCard(block, userInfo, user) {
  var cardsItem = document.createElement('div');
  cardsItem.className = 'cards__item';
  block.appendChild(cardsItem);
  var cardsTitle = document.createElement('h2');
  cardsTitle.innerText = "\u263A " + user.fullName;
  cardsTitle.className = 'cards__title';
  cardsItem.appendChild(cardsTitle);
  var cardsImage = document.createElement('img');
  cardsImage.className = 'cards__image';
  cardsImage.setAttribute('src', userInfo.avatar_url);
  cardsImage.setAttribute('alt', userInfo.login);
  cardsItem.appendChild(cardsImage);
};



/***/ }),

/***/ "./src/scripts/UniversalFunction.js":
/*!******************************************!*\
  !*** ./src/scripts/UniversalFunction.js ***!
  \******************************************/
/*! exports provided: UniversalFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversalFunction", function() { return UniversalFunction; });
var UniversalFunction = function UniversalFunction(sampleUrl) {
  return new Promise(function (resolve, reject) {
    var requestUrl = new XMLHttpRequest();
    requestUrl.open('GET', sampleUrl, true);

    requestUrl.onload = function () {
      if (requestUrl.status === 200) {
        resolve(requestUrl.responseText);
      } else {
        var error = new Error(requestUrl.statusText);
        error.code = requestUrl.status;
        reject(error);
      }
    };

    requestUrl.onerror = function () {
      reject(new Error('Network Error'));
    };

    requestUrl.send();
  });
};



/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UniversalFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UniversalFunction */ "./src/scripts/UniversalFunction.js");
/* harmony import */ var _ShowCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowCard */ "./src/scripts/ShowCard.js");


Object(_UniversalFunction__WEBPACK_IMPORTED_MODULE_0__["UniversalFunction"])('https://tanuhaua.github.io/datas-file-json/github_users.json').then(function (response) {
  var users = JSON.parse(response);
  return users;
}).then(function (users) {
  var cards = document.querySelector('.js-cards');
  users.forEach(function (user) {
    Object(_UniversalFunction__WEBPACK_IMPORTED_MODULE_0__["UniversalFunction"])("https://api.github.com/users/".concat(user.githubName)).then(function (response) {
      var userInfo = JSON.parse(response);
      Object(_ShowCard__WEBPACK_IMPORTED_MODULE_1__["ShowCard"])(cards, userInfo, user);
    }).catch(function (error) {
      console.log("Rejected: ".concat(error));
    });
  }).catch(function (error) {
    console.log("Rejected: ".concat(error));
  });
});
fetch('https://tanuhaua.github.io/datas-file-json/github_users.json').then(function (response) {
  var users = response.json();
  return users;
}).then(function (users) {
  var usersBlock = document.createElement('section');
  document.body.appendChild(usersBlock);
  var sectionTitle = document.createElement('h1');
  sectionTitle.className = 'section-title';
  sectionTitle.innerText = 'Users with fetch';
  usersBlock.appendChild(sectionTitle);
  var cards = document.createElement('div');
  cards.className = 'cards';
  usersBlock.appendChild(cards);
  users.forEach(function (user) {
    fetch("https://api.github.com/users/".concat(user.githubName)).then(function (response) {
      var userInfo = response.json();
      return userInfo;
    }).then(function (userInfo) {
      Object(_ShowCard__WEBPACK_IMPORTED_MODULE_1__["ShowCard"])(cards, userInfo, user);
    }).catch(function (error) {
      console.log("Rejected: ".concat(error));
    });
  }).catch(function (error) {
    console.log("Rejected: ".concat(error));
  });
});

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map