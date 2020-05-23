import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
        this.props.login(formUser).then(() => {
            this.setState({
                email: '',
                password: ''
            });

            this.props.closeModal();

            if (this.props.location.pathname.includes('/login')) {
                this.props.history.push('/');
            }
        });
    }

    handleClick(e) {
        const demoUser = {email: 'happyalpaca@aa.io', password: 'humming'};
        this.props.login(demoUser).then(() => {
            this.setState({
                email: '',
                password: ''
            });

            this.props.closeModal();
            
            if (this.props.location.pathname.includes('/login')) {
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
                <h1>Welcome back!</h1>
                <h2>It's about time for another camping trip</h2>

                {errorsUl}
                
                <button id="demo-user-button" onClick={this.handleClick}>Demo User</button>
                
                <div className="strike">
                    <span className="or">or</span>
                </div>
                
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
                    &nbsp;
                    <strong><Link to='/signup' onClick={this.props.closeModal}>Sign Up!</Link></strong>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginForm);