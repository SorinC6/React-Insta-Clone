import React from 'react';
import styled from 'styled-components';

const Name = styled.p`
	font-weight: bold;
	font-size: 15px;
	padding: 0;
	margin: 4px;
`;

const Text = styled.span`
	font-weight: normal;
	font-size: 15px;
	margin: 0;
`;

const Comment = (props) => {
	return (
		<div>
			<Name>
				{props.username} <Text>{props.text}</Text>
			</Name>
		</div>
	);
};

export default Comment;
