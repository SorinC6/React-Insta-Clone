import React from 'react';
import LoginPage from '../LoginPage/Login'

const authenticate = (App) =>
	class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				username: '',
				password: '',
				loggedIn: false
			};
		}

		componentDidMount() {
			if (localStorage.getItem('username')) {
				this.setState({
					loggedIn: true,
					username: localStorage.getItem('username')
				});
			} else {
				this.setState({
					loggedIn: false,
					username: ''
				});
			}
		}

		logout = () => {
			localStorage.clear();
			this.setState({
				loggedIn: false
			});
		};

		render() {
			if (this.state.loggedIn) {
				return <App logout={this.logout} />;
			}
			return <LoginPage />;
		}
	};

export default authenticate;
