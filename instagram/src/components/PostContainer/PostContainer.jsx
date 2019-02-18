import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
	console.log('Post Container props: ', props);
	return (
		<div className="post">
			<div className="post-header">
				<img src={props.post.thumbnailUrl} alt="user-img" />
				<p>{props.post.username}</p>
			</div>

			<div className="post-img">
				<img src={props.post.imageUrl} alt="post-img" />
			</div>

			<CommentSection comments={props.post.comments} likes={props.post.likes} timestamp={props.post.timestamp} />
		</div>
	);
};

PostContainer.propTypes = {
	thumbnailUrl: PropTypes.string,
	username: PropTypes.string,
	comments: PropTypes.arrayOf(
		PropTypes.shape({
			username: PropTypes.string,
			text: PropTypes.string
		})
	),
	likes: PropTypes.number,
	timestamp: PropTypes.string
};

export default PostContainer;
