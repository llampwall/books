import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Modal from './components/Modal';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers/allReducers';

// this is the app entry point as referenced in webpackconfig and the html

// make a store from all of the reducers, with the necessary data that
// the components can then connect to via the provider, which is the parent
// wrapper around all components. it can pass the store down to its children
// as props

const globalStore = createStore(allReducers);

// wrap modal in <Provider> and insert into DOM
ReactDOM.render(
	<Provider store={globalStore}>
		<App />
	</Provider>,
	document.getElementById('app')
);

// wrap modal in <Provider> and insert into DOM
ReactDOM.render(
	<Provider store={globalStore}>
		<Modal />
	</Provider>,
	document.getElementById('modalroot')
);
