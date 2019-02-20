import React from 'react';
import { Button } from 'reactstrap';

const LogoutMenu = (props) => {
	return (
		<div className="logout-container">
			<p>Hello {localStorage.getItem('username')}</p>
			<Button outline color="secondary" onClick={props.logout}>Logout</Button>
		</div>
	);
};

export default LogoutMenu;
