import React from 'react';
import ReviewIndexItem from './review_index_item';
import { withRouter } from 'react-router-dom';
import CreateReviewFormContainer from './create_review_form_container';

/*
Export a `ReviewIndex` presentational component that renders a list (`ul`) of
`ReviewIndexItems`. This component should receive `Reviews` from the store as a prop
via its container and fetch them once it has successfully mounted to the DOM.
Below the `ul`, render the `CreateReviewFormContainer` component.
*/

class ReviewIndex extends React.Component {
    componentDidMount() {
        this.props.fetchReviews(this.props.match.params.spotId);
    }

    render() {
        let numReviews;
        if (this.props.reviews.length === 1) {
            numReviews = '1 Written review';
        } else {
            numReviews = `${this.props.reviews.length} Written reviews`
        }


        return (
            <section className="reviews">
                <div className="review-index">
                    <h1>{numReviews}</h1>
                    <ul>
                        {this.props.reviews.map((review) =>
                            <ReviewIndexItem
                                key={review.id}
                                review={review}
                                users={this.props.users}
                                currentUserId={this.props.currentUserId}
                                deleteReview={this.props.deleteReview}
                            />
                        )}
                    </ul>

                    <CreateReviewFormContainer /> 
                    
                </div>  
            </section>
        )
    }
}

export default withRouter(ReviewIndex);