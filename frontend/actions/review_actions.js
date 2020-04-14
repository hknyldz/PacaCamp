import * as reviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'; 
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS'; 

const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
});

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
});

const receiveErrors = (errors) => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_REVIEW_ERRORS
});

export const fetchReviews = (spotId) => dispatch => reviewAPIUtil.fetchReviews(spotId).then((reviews) => dispatch(receiveReviews(reviews)), (errors) => dispatch(receiveErrors(errors.responseJSON)));

export const createReview = (review) => dispatch => reviewAPIUtil.createReview(review).then((review) => dispatch(receiveReview(review)), (errors) => dispatch(receiveErrors(errors.responseJSON)));

export const updateReview = (review) => dispatch => reviewAPIUtil.updateReview(review).then((review) => dispatch(receiveReview(review)), (errors) => dispatch(receiveErrors(errors.responseJSON)));

export const deleteReview = (reviewId) => dispatch => reviewAPIUtil.deleteReview(reviewId).then((review) => dispatch(removeReview(review.id)), (errors) => dispatch(receiveErrors(errors.responseJSON)));


