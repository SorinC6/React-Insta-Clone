import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => {
	return (
		<div className="comment-container">
			<p className="name-container">
				{props.username} <span className="text-container">{props.text}</span>
			</p>
		</div>
	);
};

export default Comment;
