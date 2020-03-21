import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeBook } from '../actions/allActions';
import { addBook } from '../actions/allActions';

class Modal extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<section
				id="modal"
				className={this.props.appState.popupOpen ? 'active' : ''}
			>
				<div className="modal-container">
					<div className="close-modal" onClick={this.props.closeBook}>
						<i className="fa fa-times"></i>
					</div>
					<div className="modal-grid">
						<div className="images">
							<div
								className="cover"
								style={{
									backgroundImage: `url('${this.props.appState.openBook.coverURL}')`
								}}
							></div>
							<div
								className="add-btn"
								onClick={this.props.addBook.bind(
									null,
									this.props.appState.openBook
								)}
							>
								Add to My List
							</div>
						</div>
						<div className="info">
							<h2>{this.props.appState.openBook.title}</h2>
							<div className="info-line">
								<span>Author: </span>
								{this.props.appState.openBook.author}
							</div>
							<div className="info-line">
								<span>Category: </span>
								{this.props.appState.openBook.category}
							</div>
							<div className="info-line">
								<span>Published: </span>
								{this.props.appState.openBook.published}
							</div>
							<div className="info-line">
								<p>{this.props.appState.openBook.review}</p>
							</div>
						</div>
					</div>
				</div>
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

// connect to the closeBook action by mapping it to
// a function of the same name here in the props of
// this component
export default connect(mapStateToProps, {
	closeBook,
	addBook
})(Modal);
