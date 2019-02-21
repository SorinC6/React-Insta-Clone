import React, { Component } from 'react';
import PropType from 'prop-types';
import moment from 'moment';
import Comment from './Comment';
//import './CommentSection.css'
import CommentsHeader from './CommentsHeader';
import styled from 'styled-components';

const CommentDiv = styled.div`
	width: 95%;
	margin: 0 auto;
	padding: 0;
	margin: 0;

	input {
		width: 100%;
		border: 0;
		padding: 15px 0;
		font-size: 14px;
		outline: none;
	}
`;

const Form = styled.form`
	display: flex;
	align-items: center;
	height: 60px;
	border-top: 1px solid rgb(189, 189, 189);
`;

const Time = styled.p`
	font-size: 12px;
	padding-top: 5px;
	padding-bottom: 7px;
	color: rgb(141, 138, 138);
`;

class CommentSection extends Component {
	//console.log('Comment Section props',props);
	constructor(props) {
		super(props);
		this.state = {
			commentList: props.comments,
			comment: ''
		};

		this.time = moment().startOf('hour').fromNow();

		console.log(this.state.commentList);
	}
	handleChanges = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	submitContent = (event) => {
		event.preventDefault();

		this.setState({
			commentList: [
				...this.state.commentList,
				{
					username: 'anonymus',
					text: this.state.comment
				}
			],
			text: ''
		});
		window.localStorage.setItem('comments', JSON.stringify(this.state.commentList));

		this.setState({
			comment: ''
		});
		event.target.firstChild.value = '';

		console.log(window.localStorage.getItem('comments'));
	};

	render() {
		return (
			<CommentDiv>
				<CommentsHeader likes={this.props.likes} />

				{this.state.commentList.map((comment, i) => {
					return <Comment key={i} username={comment.username} text={comment.text} />;
				})}

				<Time className="time-container">{this.props.timestamp}</Time>
				{/* <input placeholder="Add a comment..." /> */}

				<Form onSubmit={this.submitContent}>
					<input
						onChange={this.handleChanges}
						onSubmit={this.submitContent}
						name="comment"
						placeholder="add a comment..."
					/>
					<i className="fas fa-ellipsis-h" />
				</Form>
			</CommentDiv>
		);
	}
}

CommentSection.propTypes = {
	username: PropType.string,
	text: PropType.string
};

export default CommentSection;
