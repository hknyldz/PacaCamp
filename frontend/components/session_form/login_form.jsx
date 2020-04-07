import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentWillUnmount() {
        this.props.clearErrors(); //will need to dispatch an action to clear session errors
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        const formUser = Object.assign({}, this.state)
        this.props.login(formUser).then(() => this.props.history.push('/'));
        this.setState({
            email: '',
            password: ''
        });
    }

    render() {
        const errors = this.props.errors.map((error, i) => <li key={i}>{error}</li>)
        return (
            <>
                <h1>Log In!</h1>
                <ul>{errors}</ul>
                <form>
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                    </label>
                    <button type="submit" onClick={this.handleSubmit}>Log In!</button>
                </form>
                <Link to='/signup'> Sign Up </Link>
            </>
        )
    }
}

export default LoginForm;