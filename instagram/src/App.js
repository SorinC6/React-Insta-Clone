import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsPage/PostsPage'


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	
	render() {
		return (
			<div className="App">
            <PostsPage/>
			</div>
		);
   }
   
}

export default App;
