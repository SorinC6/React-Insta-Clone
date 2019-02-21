import React, { Component, useState, useEffect } from 'react';
import DummyData from '../../dummy-data';
import './PostsPage.css';
import PropType from 'prop-types';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';
import styled from 'styled-components';

const Header = styled.h1`
	max-width: 40%;
	margin: 20px auto;
`;

const PostsPage = (props) => {
	const [ dummyData, setDummyData ] = useState([]);
	const [ filtredData, setFiltredData ] = useState([]);
	const [ search, setSearch ] = useState('');

	useEffect(() => {
      fetch(DummyData)
         .then(setDummyData(DummyData))
         .catch((err) => console.log('error fetching data'));
	});

	//console.group(dummyData);

	const handleChanges = (event) => {
		setSearch(event.target.value);

		const filtred = dummyData.filter((post) => {
			if (post.username.includes(search)) {
				return post;
			} else return null;
		});

		setFiltredData(filtred)
	};

	return (
		<div>
			<Header>INSTACLONE PROJECT</Header>

			<SearchBar handleChanges={handleChanges} {...props} />
			{filtredData.length === 0 ? (
				dummyData.map((post, i) => {
					return (
						<div key={i}>
							<PostContainer key={i} post={post} />
						</div>
					);
				})
			) : (
				filtredData.map((post, i) => {
					return <PostContainer key={i} post={post} />;
				})
			)}
		</div>
	);
};

// class PostsPage extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			dummyData: [],
// 			filteredData: [],
// 			search: ''
// 		};
// 	}

// 	componentDidMount() {
// 		console.log('Component did mounth');
// 	fetch(DummyData)
// 		.then(this.setState({ dummyData: DummyData }))
// 		.catch((err) => console.log('error fetching data'));
// }

// handleChanges = (event) => {
// 	this.setState({
// 		search: event.target.value
// 	});
// 	const filtred = this.state.dummyData.filter((post) => {
// 		if (post.username.includes(this.state.search)) {
// 			return post;
// 		} else return null;
// 	});

// 	this.setState({
// 		filteredData: filtred
// 	});
// };

// 	render() {
// 		return (
// 			<div>
// <Header>INSTACLONE PROJECT</Header>

// <SearchBar handleChanges={this.handleChanges} {...this.props} />
// {this.state.filteredData.length === 0 ? (
// 	this.state.dummyData.map((post, i) => {
// 		return (
// 			<div key={i}>
// 				<PostContainer key={i} post={post} />
// 			</div>
// 		);
// 	})
// ) : (
// 	this.state.filteredData.map((post, i) => {
// 		return <PostContainer key={i} post={post} />;
// 	})
// )}
// 			</div>
// 		);
// 	}
// }

PostsPage.propTypes = {
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

export default PostsPage;
