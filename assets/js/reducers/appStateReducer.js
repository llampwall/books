// define a prototype of the state

const initialState = {
	myList: [],
	openBook: {},
	popupOpen: false,
	listOpen: false
};

// this reducer takes all of the actions defined in allActions.js,
// parses them by type (what they do), and then performs the action
// by updating the state accordingly

let newState;

export const appStateReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_BOOK':
			var newList = [...state.myList, action.payload];
			newList = [...new Set(newList)];
			newState = Object.assign({}, state, {
				myList: newList
			});
			return newState;
			break;
		case 'REMOVE_BOOK':
			var newList = state.myList.filter(item => item.id != action.payload.id);
			newState = Object.assign({}, state, {
				myList: newList
			});
			return newState;
			break;
		case 'OPEN_BOOK':
			newState = Object.assign({}, state, {
				popupOpen: true,
				openBook: action.payload
			});
			return newState;
			break;
		case 'CLOSE_BOOK':
			newState = Object.assign({}, state, {
				popupOpen: false
			});
			return newState;
			break;
		case 'OPEN_LIST':
			newState = Object.assign({}, state, {
				listOpen: true
			});
			return newState;
			break;
		case 'CLOSE_LIST':
			newState = Object.assign({}, state, {
				listOpen: false
			});
			return newState;
			break;
		default:
			return state;
			break;
	}
};
