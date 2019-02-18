import React from 'react';

const CommentSection = (props) => {
	console.log('Comment Section props',props);

	return (
		<div>
         <div >
         <i class="far fa-heart"/>
         <i class="far fa-comment"/>
         </div>

         <div>
            <p>373 likes</p>
         </div>

			{props.comments.map((comment) => {
				return (
					<p>
						{comment.username} {comment.text}
					</p>
				);
         })}
         
         <p>2 Hours Ago</p>
			<input placeholder="Add a comment..." />
		</div>
	);
};

export default CommentSection;
