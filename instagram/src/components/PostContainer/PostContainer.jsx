import React from 'react';
//import './PostContainer.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import Post from './Post';

const PostDiv = styled.div`
	width: 44%;
	margin: 15px auto;
	border: 1px solid rgb(189, 189, 189);
	padding: 5px;
`;

const PostContainer = (props) => {
	//onsole.log('Post Container props: ', props);
	return (
		<PostDiv>
			<Post {...props.post} />

			<CommentSection comments={props.post.comments} likes={props.post.likes} timestamp={props.post.timestamp} />
		</PostDiv>
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
