import React from 'react';
//import './SearchBar.css';
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
	align-items: center;
	justify-content: flex-start;

	i {
		font-size: 34px;
		border-right: 1px solid grey;
		padding-right: 20px;
		margin-left: 20px;
	}

	img {
		width: 90px;
		margin-left: 10px;
	}
`;

const Icons = styled.div`
	display: flex;
	justify-content: flex-end;

	i {
		margin: 0 20px;
		font-size: 25px;
	}
`;

const SearchInput = styled.div`
	input {
		width: 200px;
		height: 20px;
		font-size: 16px;
		text-align: center;
	}
`;


//console.log(SearchDiv);
const SearchBar = (props) => {
	return (
		<SearchDiv>
			<LogoDiv>
				<i className="fab fa-instagram" />
				<img src={Logo} alt="insta-logo" />
			</LogoDiv>

			<SearchInput>
				<input placeholder="&#128269; Search" type="text" name="search" onChange={props.handleChanges} />
			</SearchInput>

			<Icons>
				<i className="far fa-compass" />
				<i className="far fa-heart" />
				<i className="far fa-user" />
			</Icons>

			<LogoutMenu username={props.username} {...props} />
		</SearchDiv>
	);
};

export default SearchBar;
