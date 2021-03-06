import React from 'react';

class EditReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.review;
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
        this.props.action(this.state).then(this.props.closeModal);
    }


    render() {
        if (!this.props.currentUserId) return null;

        const editErrors = this.props.errors.map((error, i) => <li key={i}>{error}</li>)
        let errorsClass;
        errorsClass = editErrors.length ? "edit-errors" : null;
        const editErrorsUl = <ul className={errorsClass}>{editErrors}</ul>;

        return (
            <div className="edit-review-form">
                <h3>{this.props.formType}</h3>

                {editErrorsUl}
                <form onSubmit={this.handleSubmit}>

                    <input
                        onChange={this.handleInput('title')}
                        type="text"
                        placeholder={this.props.review.title}
                        value={this.state.title}
                    />

                    <textarea
                        onChange={this.handleInput('body')}
                        placeholder={this.props.review.body}
                        value={this.state.body}
                    />


                    <button type="submit">Submit changes</button>
                </form>
            </div>
        );
    }
}

export default EditReviewForm;