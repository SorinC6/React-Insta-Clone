import React from 'react';

const Post = (props) => {
	return (
		<div>
			<div className="post-header">
				<img src={props.thumbnailUrl} alt="user-img" />
				<p>{props.username}</p>
			</div>

			<div className="post-img">
				<img src={props.imageUrl} alt="post-img" />
			</div>
		</div>
	);
};

export default Post;
