// these are all objects that will be able to be used via importing
// and mapping to props with "connect"

export const addBook = book => {
	return {
		type: 'ADD_BOOK',
		payload: book
	};
};

export const removeBook = book => {
	return {
		type: 'REMOVE_BOOK',
		payload: book
	};
};

export const openBook = book => {
	return {
		type: 'OPEN_BOOK',
		payload: book
	};
};

export const closeBook = book => {
	return {
		type: 'CLOSE_BOOK',
		payload: book
	};
};

export const openList = () => {
	return {
		type: 'OPEN_LIST'
	};
};

export const closeList = () => {
	return {
		type: 'CLOSE_LIST'
	};
};
