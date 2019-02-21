import React from 'react';
import styled from 'styled-components';

const PostHeader = styled.div`
	display: flex;
	align-items: center;

	img {
		border-radius: 50%;
		height: 40px;
		margin: 8px;
	}
	p {
		font-weight: bold;
		font-size: italic;
		font-size: 16px;
		margin: 6px;
	}
`;

const PostImg = styled.div`
	img {
		max-width: 100%;
		height: auto;
	}
`;

const Post = (props) => {
	return (
		<div>
			<PostHeader>
				<img src={props.thumbnailUrl} alt="user-img" />
				<p>{props.username}</p>
			</PostHeader>

			<PostImg>
				<img src={props.imageUrl} alt="post-img" />
			</PostImg>
		</div>
	);
};

export default Post;
