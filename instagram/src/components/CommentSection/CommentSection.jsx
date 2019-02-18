import React from 'react';
import PropType from 'prop-types';
import Comment from './Comment';

const CommentSection = (props) => {
	//console.log('Comment Section props',props);

	return (
		<div>
			<div>
				<i className="far fa-heart" />
				<i className="far fa-comment" />
			</div>

			<div>
				<p>{props.likes} likes</p>
			</div>

			{props.comments.map((comment, i) => {
				return (
					<Comment key={i}
						username={comment.username}
						text={comment.text}
					/>
				);
			})}

			<p>{props.timestamp}</p>
			<input placeholder="Add a comment..." />
		</div>
	);
};

CommentSection.propTypes = {
	username: PropType.string,
	text: PropType.string
};

export default CommentSection;
