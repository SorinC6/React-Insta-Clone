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
			dummyData: [],
			filteredData: [],
			search: ''
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

	handleChanges = (event) => {
		//this.setState({[event.target.name]: event.target.value})
		this.setState({
			search: event.target.value
		});
		const filtred = this.state.dummyData.filter((post) => {
			if (post.username.includes(this.state.search)) {
				return post;
			}
		});

		this.setState({
			filteredData: filtred
		});
		// this.setState({
		//    filteredData: [...this.state.filteredData, filtred]
		// })
		// this.setState(prevState=>({
		//    filteredData: prevState.filteredData.concat(filtred)
		// }))

		console.log(this.state.filteredData);
		console.log(this.state.filteredData.length);
		// console.log(filtred)
		// console.log(filtred.length)
		// console.log(event.target.value);
		// console.log(event.target.name);
	};

	render() {
		return (
			<div className="App">
				<h1>INSTACLONE PROJECT</h1>

				<SearchBar handleChanges={this.handleChanges} />
				{this.state.filteredData.length > 0 ? (
					this.state.filteredData.map((post,i) => {
						return <PostContainer key={i} post={post} />;
					})
				) : (
					this.state.dummyData.map((post, i) => {
						return <PostContainer key={i} post={post} />;
					})
				)}
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
