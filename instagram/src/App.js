import React, { Component } from 'react';
import DummyData from './dummy-data';
import './App.css';
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
		this.setState({
			dummyData: DummyData
		});
	}

	render() {
		return (
			<div className="App">
				<h1>INSTACLONE</h1>

            <SearchBar/>
            {
               this.state.dummyData.map(post =>{
                  return(
                     <PostContainer post={post}/>
                  )
               })
            }
			</div>
		);
	}
}

export default App;
