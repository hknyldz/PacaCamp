import React from 'react';

const ReviewIndexItem = ({ review, users, currentUserId, deleteReview, openModal }) => {
    const dateOptions = { month: "long", day: "numeric", year: "numeric" };
    const date = new Date(review.created_at).toLocaleDateString("en-US", dateOptions); 

    let buttons;
    if (currentUserId === review.author_id) {
        buttons = (
            <div className="buttons">
                <button onClick={() => openModal('editReview', review.id)}><i className="far fa-edit"></i>&nbsp;Update</button>
                <button onClick={() => deleteReview(review.id)}><i className="far fa-trash-alt"></i>&nbsp;Delete</button>
            </div>
        )
    } else {
        buttons = null;
    }

    let title; 
    if (review.title) {
        title = (<h2>{review.title}</h2>);
    } else {
        title = null;
    }

    return (
        <li className="review-item">
            <div className="left"><img className="avatar" src={window.avatar} alt="avatar"/></div>

            <div className="right">
                {title}

                <div className="rec-date">
                    <div className="rec">
                        <span className="circle-icon"><i className="fas fa-thumbs-up" aria-hidden="true"></i></span>
                        &nbsp;
                        <span className="statement">
                            <span>{users[review.author_id].first_name + ` ${users[review.author_id].last_name[0]}`}.</span>
                            &nbsp;recommends this listing.
                        </span>
                    </div>

                    <div className="review-date">{date}</div>
                </div>

                <p>{review.body}</p>

                {buttons}
            </div>
        </li>
    )
}

export default ReviewIndexItem;