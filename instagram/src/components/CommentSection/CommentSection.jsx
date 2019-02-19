import React, { Component } from 'react';
import PropType from 'prop-types';
import moment from 'moment';
import Comment from './Comment';
import './CommentSection.css'
import CommentsHeader from './CommentsHeader';

class CommentSection extends Component {
	//console.log('Comment Section props',props);
	constructor(props) {
		super(props);
		this.state = {
			commentList: props.comments,
			comment: ''
      };
      
      this.time=moment().startOf('hour').fromNow(); 

		console.log(this.state.commentList);
	}
	handleChanges = (event) => {
		// this.setState({
		// 	comment: event.target.value
      // });
      
      this.setState({ [event.target.name]: event.target.value });  
	};

	// submitContent = (event) => {
	// 	event.preventDefault();

	// 	this.setState((prevState) => {
	// 		commentList: prevState.commentList.concat({
	// 			username: 'anonymus',
	// 			text: this.state.comment
	// 		});
   //    });
      
   //    this.setState({
   //       comment: '',
   //    })
   // };
   
   submitContent = (event) => {
		event.preventDefault();

		this.setState({
			commentList: [...this.state.commentList, {
            username: 'anonymus',
            text: this.state.comment,
         }],
         text: '',
      });
      
      this.setState({
         comment: '',
      })
      event.target.firstChild.value="";
	};

	render() {
		return (
			<div className='comment-section'>
				
            <CommentsHeader likes={this.props.likes}/>

				{this.state.commentList.map((comment, i) => {
					return <Comment key={i} username={comment.username} text={comment.text} />;
				})}

				<p className='time-container'>{this.props.timestamp}</p>
				{/* <input placeholder="Add a comment..." /> */}

				<form onSubmit={this.submitContent} className='add-container'>
					<input
						onChange={this.handleChanges}
						onSubmit={this.submitContent}
						name="comment"
                  placeholder="add a comment..."
                 
					/>
                <i className="fas fa-ellipsis-h"/>
				</form>
			</div>
		);
	}
}

CommentSection.propTypes = {
	username: PropType.string,
	text: PropType.string
};

export default CommentSection;
