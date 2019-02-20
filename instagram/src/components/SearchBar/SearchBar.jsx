import React from 'react';
import './SearchBar.css';
import Logo from '../../../src/assets/logo.png';
import LogoutMenu from './LogoutMenu';

const SearchBar = (props) => {
	return (
		<div className="search-bar">
			<div className="insta-logo">
				<i className="fab fa-instagram" />
				<img src={Logo} alt="insta-logo" />
			</div>

			<div className="search-input">
				<input placeholder="&#128269; Search" type="text" name="search" onChange={props.handleChanges} />
			</div>

			<div className="leftside-icons">
				<i className="far fa-compass" />
				<i className="far fa-heart" />
				<i onClick={props.onToggle} className="far fa-user" />
			</div>

			<LogoutMenu username={props.username} {...props} />
		</div>
	);
};

export default SearchBar;
