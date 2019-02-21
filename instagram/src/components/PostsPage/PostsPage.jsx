import React, { Component } from 'react';
import DummyData from '../../dummy-data';
import './PostsPage.css';
import PropType from 'prop-types';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';


class PostsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dummyData: [],
			filteredData: [],
			search: '',
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
            //localStorage.setItem('search',post)
				return post;
			} else return null;
		});

		this.setState({
			filteredData: filtred
      });
      console.log('Local Storage',localStorage.search)
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

	// message = () => {
	// 	return <h1>No Data</h1>;
   // };
   
	render() {
		return (
			<div className="App">
				<h1>INSTACLONE PROJECT</h1>

            <SearchBar 
               handleChanges={this.handleChanges} 
               {...this.props}
            />
				{this.state.filteredData.length === 0 ? (
					this.state.dummyData.map((post, i) => {
						return (
							<div key={i}>
                        {/* <h1>No Data Was Found</h1> */}
								<PostContainer key={i} post={post} />
							</div>
						);
					}) 
				) : (
					this.state.filteredData.map((post, i) => {
						return <PostContainer key={i} post={post} />;
					})
				)}
			</div>
		);
	}
}

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
