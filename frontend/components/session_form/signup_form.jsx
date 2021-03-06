import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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

    componentDidMount() {
        this.props.clearErrors(); 
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        this.props.clearErrors(); 
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formUser = Object.assign({}, this.state);
    
        this.props.signup(formUser).then(() => {
            this.setState({
                first_name: '',
                last_name: '',
                email: '',
                password: ''
            });

            this.props.closeModal();

            if (this.props.location.pathname.includes('/signup')) {
                this.props.history.push('/');
            }
        });
    }

    render() {
        const errors = this.props.errors.map((error, i) => <li key={i}>{error}</li>)
        let errorsClass;
        errorsClass = errors.length ? "errors" : null;
        const errorsUl = <ul className={errorsClass}>{errors}</ul>;

        return (
            <div className="session-form">
                <h1>Join PacaCamp</h1>
                <h2>Discover the best camping near me</h2>

                {errorsUl}

                <form>
                    <div className="name-input">
                        <input type="text" placeholder="First name..." value={this.state.first_name} onChange={this.handleInput('first_name')} />

                        <input type="text" placeholder="Last name..." value={this.state.last_name} onChange={this.handleInput('last_name')} />
                    </div>

                    <div className="form-input">
                        <input type="text" placeholder="Email address..." value={this.state.email} onChange={this.handleInput('email')} />
                    </div>

                    <div className="form-input">
                        <input type="password" placeholder="Password..." value={this.state.password} onChange={this.handleInput('password')} />
                    </div>
                    
                    <button className="signup-button" type="submit" onClick={this.handleSubmit}>Join PacaCamp</button>

                    <p className="terms">
                        By signing up, I agree to PacaCamp's 
                        <br/>
                        terms and privacy policy.
                    </p>
                </form>

                <div className="redirect">
                    <span>Have an account?</span>
                    &nbsp;
                    <strong><Link to='/login' onClick={this.props.closeModal}>Sign in</Link></strong>
                </div>
            </div>
        )
    }
}

export default withRouter(SignupForm);