import React from 'react';

const LogoutMenu = (props) => {
	return (
		<div className="logout-container">
			<p>{localStorage.getItem('username')}</p>
			<button onClick={props.logout}>Logout</button>
		</div>
	);
};

export default LogoutMenu;
