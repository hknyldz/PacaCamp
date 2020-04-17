import React from 'react';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.currentUser.id,
            first_name: this.props.currentUser.first_name,
            last_name: this.props.currentUser.last_name,
            email: this.props.currentUser.email
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleInput(field) {
        return (event) => this.setState({ [field]: event.currentTarget.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.updateUser(this.state);
    }

    render() {
        if (this.props.currentUser.id !== parseInt(this.props.userId)) return null;

        const errors = this.props.errors.map((error, i) => <li key={i}>{error}</li>)
        let errorsClass;
        errorsClass = errors.length ? "errors" : null;
        const errorsUl = <ul className={errorsClass}>{errors}</ul>;

        return (
            <div className="user-edit-form">
                <div className="left"></div>

                <div className="body">
                    <h3>Edit your profile</h3>

                    {errorsUl}
                    <form>
                        <div className="params border-bottom">
                            <span>First name</span>
                            <input 
                            className="right-col"
                            type="text" 
                            value={this.state.first_name}
                            onChange={this.handleInput('first_name')} 
                            />
                        </div>

                        <div className="params border-bottom">
                            <span>Last name</span>
                            <div className="right-col">
                                <input 
                                type="text"
                                value={this.state.last_name} 
                                onChange={this.handleInput('last_name')} 
                                />
                                <p>
                                    Full names are only shared privately between PacaCampers and Hosts with confirmed bookings. Publicly around PacaCamp your name will be displayed as "{`${this.state.first_name} ${this.state.last_name[0]}.`}"
                                </p>
                            </div>
                        </div>

                        <div className="params">
                            <span>Email</span>
                            <input 
                            className="right-col"
                            type="text" 
                            value={this.state.email} 
                            onChange={this.handleInput('email')} 
                            />
                        </div>
                    </form>

                    <button className="update-btn" type="submit" onClick={this.handleSubmit}>Save changes</button>
                </div>

                <div className="right"></div>
            </div>
        )
    }
}

export default UserForm;