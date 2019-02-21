import React from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const Logout = styled.div`
	position: absolute;
	right: 2%;
	top: 20%;

	@media (max-width: 1053px) {
		top: 30%;
	}
`;

const LogoutMenu = (props) => {
	return (
		<Logout>
			<p>Hello {localStorage.getItem('username')}</p>
			<Button outline color="secondary" onClick={props.logout}>
				Logout
			</Button>
		</Logout>
	);
};

export default LogoutMenu;
