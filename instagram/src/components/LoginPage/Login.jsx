import React, { Component } from 'react';
import './Login.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';

const FormStrap = styled.div`
	max-width: 30%;
	margin: 0 auto;
	margin-top: 200px;
	background: grey;
	border-radius: 5px;
`;

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	handleChanges = (ev) => {
		this.setState({ [ev.target.name]: ev.target.value });
	};

	loginSubmit = (e) => {
		//e.preventDefault();
		if (this.state.username && this.state.password) {
			localStorage.setItem('username', this.state.username);
			localStorage.setItem('password', this.state.password);
		}
	};

	render() {
		return (
			<FormStrap className="form-strap">
				<Form onSubmit={this.loginSubmit}>
					<FormGroup>
						<Label>Username:</Label> <Input type="text" onChange={this.handleChanges} name="username" />
						<Label>Password:</Label> <Input type="password" onChange={this.handleChanges} name="password" />
						<Button color="secondary" size="lg" block onSubmit={this.loginSubmit}>
							Login
						</Button>
					</FormGroup>
				</Form>
			</FormStrap>
		);
	}
}

export default Login;
