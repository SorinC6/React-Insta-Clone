import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsPage/PostsPage';
import Login from './components/LoginPage/Login';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: props.username,
         password: '',
         loggedIn:props.loggedIn
		};
	}

	render() {
		return (
			<div className="App">
				<PostsPage />
			</div>
		);
	}
}

export default App;
