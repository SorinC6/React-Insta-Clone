import React from 'react';
import './SearchBar.css';
import Logo from '../../../src/assets/logo.png';
import LogoutMenu from './LogoutMenu';
import styled from 'styled-components';

const SearchDiv = styled.div`
	display: flex;
	justify-content: space-between;
	border: 1px solid blue;
	align-items: center;
	font-size: 20px;
	height: 50px;
`;

const LogoDiv = styled.div`
display: flex;
align-items:center;
justify-content: flex-start;
`

//console.log(SearchDiv);
const SearchBar = (props) => {
	return (
		<SearchDiv>
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
				<i className="far fa-user" />
			</div>

			<LogoutMenu username={props.username} {...props} />
		</SearchDiv>
	);
};

export default SearchBar;
