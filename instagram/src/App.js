import React, { Component } from 'react';
import DummyData from './dummy-data';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dummyData: []
		};
	}

	componentDidMount() {
		this.setState({
			dummyData: DummyData
		});
	}

	render() {
		return (
			<div className="App">
				<h1>INSTACLONE</h1>
			</div>
		);
	}
}

export default App;
