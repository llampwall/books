import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openBook } from '../actions/allActions';

class AllBooks extends Component {
	constructor() {
		super();
		this.state = {};
	}

	// get all books from the booksData and format them
	// and pass the book to the openBook function
	showAllBooks = () => {
		return this.props.booksData.map(book => {
			return (
				<div className="book-container" key={book.id}>
					<div
						className="book"
						onClick={this.props.openBook.bind(null, book)}
						style={{
							backgroundImage: `url('${book.coverURL}')`
						}}
					/>
					<div className="book-title">{book.title}</div>
				</div>
			);
		});
	};

	render() {
		return <section className="all-books">{this.showAllBooks()}</section>;
	}
}

// get the appState and booksData reducers via
// the props of the <Provider> that this is wrapped in
const mapStateToProps = state => {
	console.log(state);
	return state;
};

// connect to the openBook action by mapping it to
// a function of the same name here in the props of
// this component
export default connect(mapStateToProps, {
	openBook
})(AllBooks);
