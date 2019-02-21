import React, { Component } from 'react';
import styled from 'styled-components';

const Icons = styled.div`
	i {
		margin-top: 10px;
		margin-right: 10px;
      font-size: 25px;
	}
`;

const LikeBtn = styled.p`
	font-weight: bold;
	font-size: 14px;
`;

const RedColor = styled.i`
   color:red;
`

class CommentsHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			totalLikes: props.likes,
			likeCount: 0
		};
	}

	addLike = (event) => {
		console.log('like pressed');
		if (this.state.likeCount === 0) {
			this.setState((prevState) => ({ totalLikes: ++prevState.totalLikes }));
			this.setState((prevState) => ({ likeCount: ++prevState.likeCount }));
			event.target.classList.remove('far');
			event.target.classList.add('fas');
			//event.target.classList.add('RedColor');
		} else if (this.state.likeCount === 1) {
			this.setState((prevState) => ({ totalLikes: --prevState.totalLikes }));
			this.setState((prevState) => ({ likeCount: --prevState.likeCount }));
			event.target.classList.remove('fas');
			event.target.classList.add('far');
			//event.target.classList.remove('RedColor');
		}
	};

	render() {
		return (
			<div>
				<Icons>
					<RedColor className="far fa-heart" onClick={this.addLike} />
					<i className="far fa-comment" />
				</Icons>

				<div>
					<LikeBtn>{this.state.totalLikes} likes</LikeBtn>
				</div>
			</div>
		);
	}
}

export default CommentsHeader;
