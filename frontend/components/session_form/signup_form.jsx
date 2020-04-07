import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
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
        const formUser = Object.assign({}, this.state);
        this.setState({
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        });
        this.props.signup(formUser).then(() => this.props.history.push('/'));
    }

    render() {
        const errors = this.props.errors.map((error, i) => <li key={i}>{error}</li>)
        return (
            <>
                <h1>Sign Up!</h1>
                <ul>{errors}</ul>
                <form>
                    <label>First name:
                        <input type="text" value={this.state.first_name} onChange={this.handleInput('first_name')} />
                    </label>
                    <label>Last name:
                        <input type="text" value={this.state.last_name} onChange={this.handleInput('last_name')} />
                    </label>
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                    </label>
                    <button type="submit" onClick={this.handleSubmit}>Sign Up!</button>
                </form>
                <Link to='/login'>Log In</Link>
            </>
        )
    }
}

export default SignupForm;