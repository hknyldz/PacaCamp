import React from 'react';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.currentUser.id,
            first_name: this.props.currentUser.first_name,
            last_name: this.props.currentUser.last_name,
            email: this.props.currentUser.email,
            message: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleInput(field) {
        return (event) => this.setState({ [field]: event.currentTarget.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.updateUser(this.state).then(
            () => this.setState({ message: true }), 
            () => this.setState({ message: false })
        );
    }

    render() {
        if (this.props.currentUser.id !== parseInt(this.props.userId)) return null;
        if (this.props.currentUser.id === 1) {
            return (
                <div className="user-edit-form">
                    <div className="left"></div>

                    <div className="body">
                        <h3>Edit your profile</h3>
                        <h4>
                            <i className="fas fa-lock"></i>
                            &nbsp;Personal information
                        </h4>

                        <form className="demo-user">
                            <div className="labelled-input">
                                <div className="params border-bottom">
                                    <span>First name</span>
                                    <input
                                    className="right-col"
                                    type="text"
                                    value={this.state.first_name}
                                    readOnly
                                    />
                                </div>
                            </div>

                            <div className="labelled-input">
                                <div className="params border-bottom">
                                    <span>Last name</span>
                                    <div className="right-col">
                                        <div className="last-name">
                                            <input
                                            type="text"
                                            value={this.state.last_name}
                                            readOnly
                                            />
                                        </div>
                                        <p>
                                            Full names are only shared privately between PacaCampers and Hosts with confirmed bookings. Publicly around PacaCamp your name will be displayed as "{`${this.props.currentUser.first_name} ${this.props.currentUser.last_name[0]}.`}"
                                        </p>
                                    </div>
                                </div>
                                <i className="fas fa-lock"></i>
                            </div>

                            <div className="labelled-input">
                                <div className="params">
                                    <span>Email</span>
                                    <input
                                    className="right-col"
                                    type="text"
                                    value={this.state.email}
                                    readOnly
                                    />
                                </div>
                                <i className="fas fa-lock"></i>
                            </div>
                        </form>

                        <p className="notice">The demo user does not having profile-editing privileges.</p>
                        <div className="vertical-space"></div>
                    </div>

                    <div className="right"></div>
                </div>
            );
        }

        let successMessage;
        if (this.state.message) {
            successMessage = <ul className="success-message"><li><i className="fas fa-check"></i>&nbsp;Success! We updated your profile.</li></ul>;
        } else {
            successMessage = null;
        }

        const errors = this.props.errors.map((error, i) => <li key={i}>Your {error[0].toLowerCase() + error.slice(1)}</li>)
        let errorsClass;
        errorsClass = errors.length ? "errors" : null;
        const errorsUl = <ul className={errorsClass}>{errors}</ul>;

        return (
            <div className="user-edit-form">
                <div className="left"></div>

                <div className="body">
                    <h3>Edit your profile</h3>

                    {successMessage}
                    {errorsUl}

                    <h4>
                        <i className="fas fa-lock"></i>
                        &nbsp;Personal information
                    </h4>

                    <form>
                        <div className="labelled-input">
                            <div className="params border-bottom">
                                <span>First name</span>
                                <input 
                                className="right-col"
                                type="text" 
                                placeholder="First name"
                                value={this.state.first_name}
                                onChange={this.handleInput('first_name')} 
                                />
                            </div>
                        </div>

                        <div className="labelled-input">
                            <div className="params border-bottom">
                                <span>Last name</span>
                                <div className="right-col">
                                    <div className="last-name">
                                        <input 
                                        type="text"
                                        placeholder="Last name"
                                        value={this.state.last_name} 
                                        onChange={this.handleInput('last_name')} 
                                        />
                                    </div>
                                    <p>
                                        Full names are only shared privately between PacaCampers and Hosts with confirmed bookings. Publicly around PacaCamp your name will be displayed as "{`${this.props.currentUser.first_name} ${this.props.currentUser.last_name[0]}.`}"
                                    </p>
                                </div>
                            </div>
                            <i className="fas fa-lock"></i>
                        </div>

                        <div className="labelled-input">
                            <div className="params">
                                <span>Email</span>
                                <input 
                                className="right-col"
                                type="text" 
                                value={this.state.email} 
                                onChange={this.handleInput('email')} 
                                />
                            </div>
                            <i className="fas fa-lock"></i>
                        </div>
                    </form>

                    <button className="update-btn" type="submit" onClick={this.handleSubmit}>Save changes</button>
                    <div className="vertical-space"></div>
                </div>

                <div className="right"></div>
            </div>
        );
    }
}

export default UserForm;