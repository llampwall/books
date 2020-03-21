import { appStateReducer } from './appStateReducer';
import { booksDataReducer } from './booksDataReducer';
import { combineReducers } from 'redux';

// use redux to combine all reducers into one and return that

export default combineReducers({
	appState: appStateReducer,
	booksData: booksDataReducer
});
