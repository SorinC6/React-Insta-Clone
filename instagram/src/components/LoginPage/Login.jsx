import React, { Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};
   }
   
   handleChanges = ev => {
      this.setState({[ev.target.name]: ev.target.value});
   }

   loginSubmit = e => {
      //e.preventDefault();
      if(this.state.username && this.state.password){
         localStorage.setItem('username',this.state.username);
         localStorage.setItem('password',this.state.password);
      }
   }

	render() {
		return (
			<div>
				<form onSubmit={this.loginSubmit}>
					Username: <input type="text" onChange={this.handleChanges} name="username" />
               Password: <input type='password' onChange={this.handleChanges} name='password' />
               <button onSubmit={this.loginSubmit}>Login</button>
				</form>
			</div>
		);
	}
}

export default Login;
