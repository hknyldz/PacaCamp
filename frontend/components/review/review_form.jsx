import React from 'react';
import { withRouter } from 'react-router-dom';

/*
Export a `ReviewForm` presentational component that creates a form to either
create or edit a review (it will be used by two separate containers). The form
should indicate whether it is a create or edit form based on the `formType`
prop. The form should initialize state to the `review` passed in from props. Use
controlled inputs and trigger the `action` passed in from the container upon
submission. Use a text input for the title and a textarea for the body.
*/

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            author_id: this.props.currentUserId,
            spot_id: this.props.match.params.spotId,
            title: '', 
            body: '', 
        },
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleInput(field) {
        return (event) => this.setState({ [field]: event.currentTarget.value });
    }

    handleSubmit(event) {
        event.preventDefault;
        this.props.action(this.state);
        this.setState({
            title: '',
            body: '', 
        });
    }


    render() {
        if (!this.props.currentUserId) return null;

        const errors = this.props.errors.map((error, i) => <li key={i}>{error}</li>)
        let errorsClass;
        errorsClass = errors.length ? "errors" : null;
        const errorsUl = <ul className={errorsClass}>{errors}</ul>;

        return (
            <div className="review-form">
                    <h3>{this.props.formType}</h3>

                    {errorsUl}
                    <form onSubmit={this.handleSubmit}>

                        <input
                            onChange={this.handleInput('title')}
                            type="text"
                            placeholder="Title"
                            value={this.state.title}
                        />
                    
                        <textarea
                            onChange={this.handleInput('body')}
                            placeholder="Share your experience"
                            value={this.state.body}
                        />
                    

                        <button type="submit">{this.props.formType}</button>
                    </form>
            </div>
        );
    }
}

export default withRouter(ReviewForm);