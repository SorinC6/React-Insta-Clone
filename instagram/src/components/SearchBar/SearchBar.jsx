import React from 'react';
import './SearchBar.css';
import Logo from '../../../src/assets/logo.png';

const SearchBar = (props) => {
	return (
		<div className="search-bar">
			<div className="insta-logo">
				<i class="fab fa-instagram" />
				<img src={Logo} alt="insta-logo" />
			</div>

			<div className="search-input">
				<input placeholder="Search" type="text" />
			</div>

			<div className="leftside-icons">
				<i class="far fa-compass" />
				<i class="far fa-heart" />
				<i class="far fa-user" />
			</div>
		</div>
	);
};

export default SearchBar;
