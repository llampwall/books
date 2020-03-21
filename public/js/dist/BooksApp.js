(function(modules){function webpackJsonpCallback(data){var chunkIds=data[0];var moreModules=data[1];var executeModules=data[2];var moduleId,chunkId,i=0,resolves=[];for(;i<chunkIds.length;i++){chunkId=chunkIds[i];if(Object.prototype.hasOwnProperty.call(installedChunks,chunkId)&&installedChunks[chunkId])resolves.push(installedChunks[chunkId][0]);installedChunks[chunkId]=0}for(moduleId in moreModules)if(Object.prototype.hasOwnProperty.call(moreModules,moduleId))modules[moduleId]=moreModules[moduleId];if(parentJsonpFunction)parentJsonpFunction(data);while(resolves.length)resolves.shift()();deferredModules.push.apply(deferredModules,executeModules||[]);return checkDeferredModules()}function checkDeferredModules(){var result;for(var i=0;i<deferredModules.length;i++){var deferredModule=deferredModules[i];var fulfilled=true;for(var j=1;j<deferredModule.length;j++){var depId=deferredModule[j];if(0!==installedChunks[depId])fulfilled=false}if(fulfilled){deferredModules.splice(i--,1);result=__webpack_require__(__webpack_require__.s=deferredModule[0])}}return result}var installedModules={};var installedChunks={0:0};var deferredModules=[];function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name))Object.defineProperty(exports,name,{enumerable:true,get:getter})};__webpack_require__.r=function(exports){if("undefined"!==typeof Symbol&&Symbol.toStringTag)Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(1&mode)value=__webpack_require__(value);if(8&mode)return value;if(4&mode&&"object"===typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module["default"]}:function(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";var jsonpArray=window["webpackJsonp"]=window["webpackJsonp"]||[];var oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback;jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;deferredModules.push([20,1]);return checkDeferredModules()})({20:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0);var react_default=__webpack_require__.n(react);var react_dom=__webpack_require__(6);var react_dom_default=__webpack_require__.n(react_dom);var es=__webpack_require__(2);const addBook=book=>{return{type:"ADD_BOOK",payload:book}};const removeBook=book=>{return{type:"REMOVE_BOOK",payload:book}};const openBook=book=>{return{type:"OPEN_BOOK",payload:book}};const closeBook=book=>{return{type:"CLOSE_BOOK",payload:book}};const openList=()=>{return{type:"OPEN_LIST"}};const closeList=()=>{return{type:"CLOSE_LIST"}};class AllBooks_AllBooks extends react["Component"]{constructor(){super();this.showAllBooks=(()=>{return this.props.booksData.map(book=>{return react_default.a.createElement("div",{className:"book-container",key:book.id},react_default.a.createElement("div",{className:"book",onClick:this.props.openBook.bind(null,book),style:{backgroundImage:"url('".concat(book.coverURL,"')")}}),react_default.a.createElement("div",{className:"book-title"},book.title))})});this.state={}}render(){return react_default.a.createElement("section",{className:"all-books"},this.showAllBooks())}}const mapStateToProps=state=>{console.log(state);return state};var components_AllBooks=Object(es["b"])(mapStateToProps,{openBook:openBook})(AllBooks_AllBooks);class MyList_MyList extends react["Component"]{constructor(){super();this.showBookList=(()=>{return this.props.appState.myList.map(book=>{return react_default.a.createElement("li",{key:book.id},book.title,react_default.a.createElement("span",{className:"delete-btn",onClick:this.props.removeBook.bind(null,book)},"Delete"))})});this.state={}}render(){return react_default.a.createElement("section",{id:"myList",className:this.props.appState.listOpen?"active":""},react_default.a.createElement("h3",null,"Book List"),react_default.a.createElement("ul",null,this.showBookList(),react_default.a.createElement("div",{className:"close-list",onClick:this.props.closeList},"Close List")))}}const MyList_mapStateToProps=state=>{console.log(state);return state};var components_MyList=Object(es["b"])(MyList_mapStateToProps,{closeList:closeList,removeBook:removeBook})(MyList_MyList);class App_App extends react["Component"]{render(){return react_default.a.createElement("div",{id:"approot",className:this.props.appState.popupOpen?"popupOpen":""},react_default.a.createElement("div",{className:"container"},react_default.a.createElement("div",{className:"open-list",onClick:this.props.openList},react_default.a.createElement("i",{className:"fa fa-bars"})),react_default.a.createElement(components_AllBooks,null)),react_default.a.createElement(components_MyList,null))}}const App_mapStateToProps=state=>{console.log(state);return state};var components_App=Object(es["b"])(App_mapStateToProps,{openList:openList})(App_App);class Modal_Modal extends react["Component"]{constructor(){super();this.state={}}render(){return react_default.a.createElement("section",{id:"modal",className:this.props.appState.popupOpen?"active":""},react_default.a.createElement("div",{className:"modal-container"},react_default.a.createElement("div",{className:"close-modal",onClick:this.props.closeBook},react_default.a.createElement("i",{className:"fa fa-times"})),react_default.a.createElement("div",{className:"modal-grid"},react_default.a.createElement("div",{className:"images"},react_default.a.createElement("div",{className:"cover",style:{backgroundImage:"url('".concat(this.props.appState.openBook.coverURL,"')")}}),react_default.a.createElement("div",{className:"add-btn",onClick:this.props.addBook.bind(null,this.props.appState.openBook)},"Add to My List")),react_default.a.createElement("div",{className:"info"},react_default.a.createElement("h2",null,this.props.appState.openBook.title),react_default.a.createElement("div",{className:"info-line"},react_default.a.createElement("span",null,"Author: "),this.props.appState.openBook.author),react_default.a.createElement("div",{className:"info-line"},react_default.a.createElement("span",null,"Category: "),this.props.appState.openBook.category),react_default.a.createElement("div",{className:"info-line"},react_default.a.createElement("span",null,"Published: "),this.props.appState.openBook.published),react_default.a.createElement("div",{className:"info-line"},react_default.a.createElement("p",null,this.props.appState.openBook.review))))))}}const Modal_mapStateToProps=state=>{console.log(state);return state};var components_Modal=Object(es["b"])(Modal_mapStateToProps,{closeBook:closeBook,addBook:addBook})(Modal_Modal);var redux=__webpack_require__(3);const initialState={myList:[],openBook:{},popupOpen:false,listOpen:false};let newState;const appStateReducer=function(){let state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState;let action=arguments.length>1?arguments[1]:void 0;switch(action.type){case"ADD_BOOK":var newList=[...state.myList,action.payload];newList=[...new Set(newList)];newState=Object.assign({},state,{myList:newList});return newState;break;case"REMOVE_BOOK":newList=state.myList.filter(item=>item.id!=action.payload.id);newState=Object.assign({},state,{myList:newList});return newState;break;case"OPEN_BOOK":newState=Object.assign({},state,{popupOpen:true,openBook:action.payload});return newState;break;case"CLOSE_BOOK":newState=Object.assign({},state,{popupOpen:false});return newState;break;case"OPEN_LIST":newState=Object.assign({},state,{listOpen:true});return newState;break;case"CLOSE_LIST":newState=Object.assign({},state,{listOpen:false});return newState;break;default:return state;break}};const booksDataReducer=()=>{return[{id:1,title:"Batman: The Killing Joke",author:"Alan Moore",category:"Fantasy Fiction",published:"DC Comics",coverURL:"https://images-na.ssl-images-amazon.com/images/I/51dk0KJMIdL.jpg",review:'Batman: The Killing Joke is a 1988 DC Comics one-shot graphic novel featuring the characters Batman and the Joker written by Alan Moore and illustrated by Brian Bolland. The Killing Joke provides an origin story for the supervillain the Joker, loosely adapted from the 1951 story arc "The Man Behind the Red Hood!".'},{id:2,title:"X-Men: Days of Future Past",author:"Chris Claremont",category:"Graphic novel",published:"Marvel Comics",coverURL:"https://images-na.ssl-images-amazon.com/images/I/61s7EqhPIHL._SX323_BO1,204,203,200_.jpg",review:'Days of Future Past" is a storyline in the Marvel Comics comic book The Uncanny X-Men issues #141–142, published in 1981. It deals with a dystopian future in which mutants are incarcerated in internment camps.'},{id:3,title:"X-Men: God Loves, Man Kills",author:"Chris Claremont",category:"Graphic novel",published:"Marvel Comics",coverURL:"https://images-na.ssl-images-amazon.com/images/I/511QZUPfXAL._SX339_BO1,204,203,200_.jpg",review:"X-Men: God Loves, Man Kills is an original graphic novel published in 1982 by Marvel Comics, starring their popular superhero team the X-Men. It was written by Chris Claremont and illustrated by Brent Anderson. The book served as a primary inspiration for the film X2."},{id:4,title:"Born Again",author:"Frank Miller",category:"Graphic novel",published:"Marvel Comics",coverURL:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1483036515i/343662.jpg",review:'"Born Again" is a 1986 comic book story arc that appeared in the Marvel Comics series Daredevil. Written by Frank Miller, and drawn by David Mazzucchelli, the storyline first appeared in Daredevil #227–231.'},{id:5,title:"Teen Titans: Raven",author:"Kami Garcia",category:"Graphic novel",published:"DC Comics",coverURL:"https://images-na.ssl-images-amazon.com/images/I/51jze5vQT1L._SX326_BO1,204,203,200_.jpg",review:"USA Today and Publishers Weekly bestseller! When a tragic accident takes the life of 17-year-old Raven Roth's foster mom--and Raven's memory--she moves to New Orleans to recover and finish her senior year of high school. Starting over isn't easy."},{id:6,title:"The Night Gwen Stacy Died",author:"Gerry Conway and Stan Lee",category:"Marvel Comics",published:"Graphic novel",coverURL:"https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/53579/DIG013105_1._SX360_CLs%7C360,552%7Ccu/cmx-cu-sash-lg.png%7C0,0,361,553%20208,400,152,152_QL80_TTD_.jpg",review:'"The Night Gwen Stacy Died" is a story arc of the Marvel Comics comic book series The Amazing Spider-Man #121–122, that became a watershed event in the life of the superhero Spider-Man, one of popular culture\'s most enduring and recognizable fictional characters.'}]};var allReducers=Object(redux["b"])({appState:appStateReducer,booksData:booksDataReducer});const globalStore=Object(redux["c"])(allReducers);react_dom_default.a.render(react_default.a.createElement(es["a"],{store:globalStore},react_default.a.createElement(components_App,null)),document.getElementById("app"));react_dom_default.a.render(react_default.a.createElement(es["a"],{store:globalStore},react_default.a.createElement(components_Modal,null)),document.getElementById("modalroot"))}});