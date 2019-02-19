import React, { Component } from 'react';

class CommentsHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			totalLikes: props.likes,
			likeCount: 0
		};
	}

	addLike = (event) => {
      console.log('like pressed')
		if (this.state.likeCount === 0) {
         this.setState(prevState =>({totalLikes: ++prevState.totalLikes}))
         this.setState(prevState =>({likeCount: ++prevState.likeCount}))
         event.target.classList.remove('far');
         event.target.classList.add('fas');
         event.target.classList.add('red');
		} else if (this.state.likeCount === 1) {
         this.setState(prevState =>({totalLikes: --prevState.totalLikes}))
         this.setState(prevState =>({likeCount: --prevState.likeCount}))
         event.target.classList.remove('fas')
         event.target.classList.add('far')
         event.target.classList.remove('red')
		}
	};

	render() {
		return (
			<div>
				<div className="action-buttons">
					<i className="far fa-heart" onClick={this.addLike}/>
					<i className="far fa-comment" />
				</div>

				<div>
					<p className="like-btn">
						{this.state.totalLikes} likes
					</p>
				</div>
			</div>
		);
	}
}

export default CommentsHeader;
