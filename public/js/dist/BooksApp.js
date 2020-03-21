(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        BooksApp: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/index.js", "vendors~BooksApp" ]);
    return checkDeferredModules();
})({
    "./assets/js/actions/allActions.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return removeBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return openBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return closeBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return openList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return closeList; });\n// these are all objects that will be able to be used via importing\n// and mapping to props with "connect"\nconst addBook = book => {\n  return {\n    type: \'ADD_BOOK\',\n    payload: book\n  };\n};\nconst removeBook = book => {\n  return {\n    type: \'REMOVE_BOOK\',\n    payload: book\n  };\n};\nconst openBook = book => {\n  return {\n    type: \'OPEN_BOOK\',\n    payload: book\n  };\n};\nconst closeBook = book => {\n  return {\n    type: \'CLOSE_BOOK\',\n    payload: book\n  };\n};\nconst openList = () => {\n  return {\n    type: \'OPEN_LIST\'\n  };\n};\nconst closeList = () => {\n  return {\n    type: \'CLOSE_LIST\'\n  };\n};\n\n//# sourceURL=webpack:///./assets/js/actions/allActions.js?');
    },
    "./assets/js/components/AllBooks.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var _actions_allActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/allActions */ "./assets/js/actions/allActions.js");\n\n\n\n\nclass AllBooks extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.showAllBooks = () => {\n      return this.props.booksData.map(book => {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "book-container",\n          key: book.id\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "book",\n          onClick: this.props.openBook.bind(null, book),\n          style: {\n            backgroundImage: "url(\'".concat(book.coverURL, "\')")\n          }\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "book-title"\n        }, book.title));\n      });\n    };\n\n    this.state = {};\n  } // get all books from the booksData and format them\n  // and pass the book to the openBook function\n\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "all-books"\n    }, this.showAllBooks());\n  }\n\n} // get the appState and booksData reducers via\n// the props of the <Provider> that this is wrapped in\n\n\nconst mapStateToProps = state => {\n  console.log(state);\n  return state;\n}; // connect to the openBook action by mapping it to\n// a function of the same name here in the props of\n// this component\n\n\n/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[/* connect */ "b"])(mapStateToProps, {\n  openBook: _actions_allActions__WEBPACK_IMPORTED_MODULE_2__[/* openBook */ "d"]\n})(AllBooks));\n\n//# sourceURL=webpack:///./assets/js/components/AllBooks.js?');
    },
    "./assets/js/components/App.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AllBooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllBooks */ "./assets/js/components/AllBooks.js");\n/* harmony import */ var _MyList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyList */ "./assets/js/components/MyList.js");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var _actions_allActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/allActions */ "./assets/js/actions/allActions.js");\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      id: "approot",\n      className: this.props.appState.popupOpen ? \'popupOpen\' : \'\'\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "container"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "open-list",\n      onClick: this.props.openList\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fa fa-bars"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AllBooks__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MyList__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null));\n  }\n\n} // get the appState and booksData reducers via\n// the props of the <Provider> that this is wrapped in\n\n\nconst mapStateToProps = state => {\n  console.log(state);\n  return state;\n}; // connect to the openList action by mapping it to\n// a function of the same name here in the props of\n// this component\n\n\n/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[/* connect */ "b"])(mapStateToProps, {\n  openList: _actions_allActions__WEBPACK_IMPORTED_MODULE_4__[/* openList */ "e"]\n})(App));\n\n//# sourceURL=webpack:///./assets/js/components/App.js?');
    },
    "./assets/js/components/Modal.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var _actions_allActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/allActions */ "./assets/js/actions/allActions.js");\n\n\n\n\n\nclass Modal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {};\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "modal",\n      className: this.props.appState.popupOpen ? \'active\' : \'\'\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "modal-container"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "close-modal",\n      onClick: this.props.closeBook\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fa fa-times"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "modal-grid"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "images"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "cover",\n      style: {\n        backgroundImage: "url(\'".concat(this.props.appState.openBook.coverURL, "\')")\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "add-btn",\n      onClick: this.props.addBook.bind(null, this.props.appState.openBook)\n    }, "Add to My List")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "info"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, this.props.appState.openBook.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "info-line"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Author: "), this.props.appState.openBook.author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "info-line"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Category: "), this.props.appState.openBook.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "info-line"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Published: "), this.props.appState.openBook.published), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "info-line"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, this.props.appState.openBook.review))))));\n  }\n\n} // get the appState and booksData reducers via\n// the props of the <Provider> that this is wrapped in\n\n\nconst mapStateToProps = state => {\n  console.log(state);\n  return state;\n}; // connect to the closeBook action by mapping it to\n// a function of the same name here in the props of\n// this component\n\n\n/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[/* connect */ "b"])(mapStateToProps, {\n  closeBook: _actions_allActions__WEBPACK_IMPORTED_MODULE_2__[/* closeBook */ "b"],\n  addBook: _actions_allActions__WEBPACK_IMPORTED_MODULE_2__[/* addBook */ "a"]\n})(Modal));\n\n//# sourceURL=webpack:///./assets/js/components/Modal.js?');
    },
    "./assets/js/components/MyList.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var _actions_allActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/allActions */ "./assets/js/actions/allActions.js");\n\n\n\n\n\nclass MyList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.showBookList = () => {\n      return this.props.appState.myList.map(book => {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n          key: book.id\n        }, book.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "delete-btn",\n          onClick: this.props.removeBook.bind(null, book)\n        }, "Delete"));\n      });\n    };\n\n    this.state = {};\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "myList",\n      className: this.props.appState.listOpen ? \'active\' : \'\'\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Book List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.showBookList(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "close-list",\n      onClick: this.props.closeList\n    }, "Close List")));\n  }\n\n} // get the appState and booksData reducers via\n// the props of the <Provider> that this is wrapped in\n\n\nconst mapStateToProps = state => {\n  console.log(state);\n  return state;\n}; // connect to the closeList action by mapping it to\n// a function of the same name here in the props of\n// this component\n\n\n/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[/* connect */ "b"])(mapStateToProps, {\n  closeList: _actions_allActions__WEBPACK_IMPORTED_MODULE_2__[/* closeList */ "c"],\n  removeBook: _actions_allActions__WEBPACK_IMPORTED_MODULE_2__[/* removeBook */ "f"]\n})(MyList));\n\n//# sourceURL=webpack:///./assets/js/components/MyList.js?');
    },
    "./assets/js/index.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./assets/js/components/App.js");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Modal */ "./assets/js/components/Modal.js");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");\n/* harmony import */ var _reducers_allReducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/allReducers */ "./assets/js/reducers/allReducers.js");\n\n\n\n\n\n\n // this is the app entry point as referenced in webpackconfig and the html\n// make a store from all of the reducers, with the necessary data that\n// the components can then connect to via the provider, which is the parent\n// wrapper around all components. it can pass the store down to its children\n// as props\n\nconst globalStore = Object(redux__WEBPACK_IMPORTED_MODULE_5__[/* createStore */ "c"])(_reducers_allReducers__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]); // wrap modal in <Provider> and insert into DOM\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__[/* Provider */ "a"], {\n  store: globalStore\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null)), document.getElementById(\'app\')); // wrap modal in <Provider> and insert into DOM\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__[/* Provider */ "a"], {\n  store: globalStore\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null)), document.getElementById(\'modalroot\'));\n\n//# sourceURL=webpack:///./assets/js/index.js?');
    },
    "./assets/js/reducers/allReducers.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var _appStateReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appStateReducer */ "./assets/js/reducers/appStateReducer.js");\n/* harmony import */ var _booksDataReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booksDataReducer */ "./assets/js/reducers/booksDataReducer.js");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");\n\n\n // use redux to combine all reducers into one and return that\n\n/* harmony default export */ __webpack_exports__["a"] = (Object(redux__WEBPACK_IMPORTED_MODULE_2__[/* combineReducers */ "b"])({\n  appState: _appStateReducer__WEBPACK_IMPORTED_MODULE_0__[/* appStateReducer */ "a"],\n  booksData: _booksDataReducer__WEBPACK_IMPORTED_MODULE_1__[/* booksDataReducer */ "a"]\n}));\n\n//# sourceURL=webpack:///./assets/js/reducers/allReducers.js?');
    },
    "./assets/js/reducers/appStateReducer.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return appStateReducer; });\n// define a prototype of the state\nconst initialState = {\n  myList: [],\n  openBook: {},\n  popupOpen: false,\n  listOpen: false\n}; // this reducer takes all of the actions defined in allActions.js,\n// parses them by type (what they do), and then performs the action\n// by updating the state accordingly\n\nlet newState;\nconst appStateReducer = function appStateReducer() {\n  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  let action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'ADD_BOOK':\n      var newList = [...state.myList, action.payload];\n      newList = [...new Set(newList)];\n      newState = Object.assign({}, state, {\n        myList: newList\n      });\n      return newState;\n      break;\n\n    case 'REMOVE_BOOK':\n      var newList = state.myList.filter(item => item.id != action.payload.id);\n      newState = Object.assign({}, state, {\n        myList: newList\n      });\n      return newState;\n      break;\n\n    case 'OPEN_BOOK':\n      newState = Object.assign({}, state, {\n        popupOpen: true,\n        openBook: action.payload\n      });\n      return newState;\n      break;\n\n    case 'CLOSE_BOOK':\n      newState = Object.assign({}, state, {\n        popupOpen: false\n      });\n      return newState;\n      break;\n\n    case 'OPEN_LIST':\n      newState = Object.assign({}, state, {\n        listOpen: true\n      });\n      return newState;\n      break;\n\n    case 'CLOSE_LIST':\n      newState = Object.assign({}, state, {\n        listOpen: false\n      });\n      return newState;\n      break;\n\n    default:\n      return state;\n      break;\n  }\n};\n\n//# sourceURL=webpack:///./assets/js/reducers/appStateReducer.js?");
    },
    "./assets/js/reducers/booksDataReducer.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return booksDataReducer; });\n// this reducer is essentially a json file for the book data\nconst booksDataReducer = () => {\n  return [{\n    id: 1,\n    title: 'Batman: The Killing Joke',\n    author: 'Alan Moore',\n    category: 'Fantasy Fiction',\n    published: 'DC Comics',\n    coverURL: 'https://images-na.ssl-images-amazon.com/images/I/51dk0KJMIdL.jpg',\n    review: 'Batman: The Killing Joke is a 1988 DC Comics one-shot graphic novel featuring the characters Batman and the Joker written by Alan Moore and illustrated by Brian Bolland. The Killing Joke provides an origin story for the supervillain the Joker, loosely adapted from the 1951 story arc \"The Man Behind the Red Hood!\".'\n  }, {\n    id: 2,\n    title: 'X-Men: Days of Future Past',\n    author: 'Chris Claremont',\n    category: 'Graphic novel',\n    published: 'Marvel Comics',\n    coverURL: 'https://images-na.ssl-images-amazon.com/images/I/61s7EqhPIHL._SX323_BO1,204,203,200_.jpg',\n    review: 'Days of Future Past\" is a storyline in the Marvel Comics comic book The Uncanny X-Men issues #141–142, published in 1981. It deals with a dystopian future in which mutants are incarcerated in internment camps.'\n  }, {\n    id: 3,\n    title: 'X-Men: God Loves, Man Kills',\n    author: 'Chris Claremont',\n    category: 'Graphic novel',\n    published: 'Marvel Comics',\n    coverURL: 'https://images-na.ssl-images-amazon.com/images/I/511QZUPfXAL._SX339_BO1,204,203,200_.jpg',\n    review: 'X-Men: God Loves, Man Kills is an original graphic novel published in 1982 by Marvel Comics, starring their popular superhero team the X-Men. It was written by Chris Claremont and illustrated by Brent Anderson. The book served as a primary inspiration for the film X2.'\n  }, {\n    id: 4,\n    title: 'Born Again',\n    author: 'Frank Miller',\n    category: 'Graphic novel',\n    published: 'Marvel Comics',\n    coverURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1483036515i/343662.jpg',\n    review: '\"Born Again\" is a 1986 comic book story arc that appeared in the Marvel Comics series Daredevil. Written by Frank Miller, and drawn by David Mazzucchelli, the storyline first appeared in Daredevil #227–231.'\n  }, {\n    id: 5,\n    title: 'Teen Titans: Raven',\n    author: 'Kami Garcia',\n    category: 'Graphic novel',\n    published: 'DC Comics',\n    coverURL: 'https://images-na.ssl-images-amazon.com/images/I/51jze5vQT1L._SX326_BO1,204,203,200_.jpg',\n    review: \"USA Today and Publishers Weekly bestseller! When a tragic accident takes the life of 17-year-old Raven Roth's foster mom--and Raven's memory--she moves to New Orleans to recover and finish her senior year of high school. Starting over isn't easy.\"\n  }, {\n    id: 6,\n    title: 'The Night Gwen Stacy Died',\n    author: 'Gerry Conway and Stan Lee',\n    category: 'Marvel Comics',\n    published: 'Graphic novel',\n    coverURL: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/53579/DIG013105_1._SX360_CLs%7C360,552%7Ccu/cmx-cu-sash-lg.png%7C0,0,361,553%20208,400,152,152_QL80_TTD_.jpg',\n    review: '\"The Night Gwen Stacy Died\" is a story arc of the Marvel Comics comic book series The Amazing Spider-Man #121–122, that became a watershed event in the life of the superhero Spider-Man, one of popular culture\\'s most enduring and recognizable fictional characters.'\n  }];\n};\n\n//# sourceURL=webpack:///./assets/js/reducers/booksDataReducer.js?");
    }
});