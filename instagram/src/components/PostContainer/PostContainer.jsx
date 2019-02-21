import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import Post from './Post';

const PostContainer = (props) => {
	//onsole.log('Post Container props: ', props);
	return (
		<div className="post">

         <Post 
            {...props.post}
          />

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
