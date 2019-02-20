import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsPage/PostsPage';
import Login from './components/LoginPage/Login';
import authenticate from './components/Authenticate/authenticate';

class App extends Component {

	render() {
		return (
			<div className="App">
				<PostsPage {...this.props} />
			</div>
		);
	}
}

export default authenticate(App);
