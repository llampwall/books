import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeList } from '../actions/allActions';
import { removeBook } from '../actions/allActions';

class MyList extends Component {
	constructor() {
		super();
		this.state = {};
	}

	showBookList = () => {
		return this.props.appState.myList.map(book => {
			return (
				<li key={book.id}>
					{book.title}
					<span
						className="delete-btn"
						onClick={this.props.removeBook.bind(null, book)}
					>
						Delete
					</span>
				</li>
			);
		});
	};

	render() {
		return (
			<section
				id="myList"
				className={this.props.appState.listOpen ? 'active' : ''}
			>
				<h3>Book List</h3>
				<ul>
					{this.showBookList()}
					<div className="close-list" onClick={this.props.closeList}>
						Close List
					</div>
				</ul>
			</section>
		);
	}
}

// get the appState and booksData reducers via
// the props of the <Provider> that this is wrapped in
const mapStateToProps = state => {
	console.log(state);
	return state;
};

// connect to the closeList action by mapping it to
// a function of the same name here in the props of
// this component
export default connect(mapStateToProps, {
	closeList,
	removeBook
})(MyList);
