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
            <div className="session-form">
                <h1>Welcome back!</h1>
                <h2>It's about time for another camping trip</h2>
                <ul className="errors">{errors}</ul>
                <form>
                    
                    <div className="form-input">
                        <input type="text" placeholder="Email address" value={this.state.email} onChange={this.handleInput('email')} />
                    </div>

                    <div className="form-input">
                        <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleInput('password')} />
                    </div>

                    <button className="login-button" type="submit" onClick={this.handleSubmit}>Log In</button>
                </form>

                <div className="redirect">
                    <span>Don't have a PacaCamp account?</span>
                    <Link to='/signup'>Sign Up!</Link>
                </div>
            </div>
        )
    }
}

export default LoginForm;