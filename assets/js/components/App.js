import React, { Component } from 'react';
import AllBooks from './AllBooks';
import MyList from './MyList';
import { connect } from 'react-redux';
import { openList } from '../actions/allActions';

class App extends Component {
	render() {
		return (
			<div
				id="approot"
				className={this.props.appState.popupOpen ? 'popupOpen' : ''}
			>
				<div className="container">
					<div className="open-list" onClick={this.props.openList}>
						<i className="fa fa-bars"></i>
					</div>
					<AllBooks />
				</div>
				<MyList />
			</div>
		);
	}
}

// get the appState and booksData reducers via
// the props of the <Provider> that this is wrapped in
const mapStateToProps = state => {
	console.log(state);
	return state;
};

// connect to the openList action by mapping it to
// a function of the same name here in the props of
// this component
export default connect(mapStateToProps, {
	openList
})(App);
