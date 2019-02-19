import React, { Component } from 'react';
import DummyData from './dummy-data';
import './App.css';
import PropType from 'prop-types';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dummyData: []
		};
	}

	componentDidMount() {
		// this.setState({
		// 	dummyData: DummyData
		// }).catch(err=> console.log('Error fa'))
		console.log('Component did mounth');
		fetch(DummyData)
			.then(this.setState({ dummyData: DummyData }))
			.catch((err) => console.log('error fetching data'));
	}

	render() {
		return (
			<div className="App">
				<h1>INSTACLONE</h1>

				<SearchBar />

				{this.state.dummyData.map((post, i) => {
					return <PostContainer key={i} post={post} />;
				})}
			</div>
		);
	}
}

App.propTypes = {
	dummyData: PropType.shape({
		comments: PropType.arrayOf(
			PropType.shape({
				username: PropType.string.isRequired,
				text: PropType.string
			})
		),
		username: PropType.string,
		thumbnailURL: PropType.string,
		imageUrl: PropType.string,
		likes: PropType.number
	})
};

export default App;
