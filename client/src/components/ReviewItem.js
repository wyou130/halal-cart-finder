import { useEffect, useState } from "react";
import CommentForm from "./CommentForm"
import CommentsList from "./CommentsList"

function ReviewItem({ review }) {

    const [displayedComments, setDisplayedComments] = useState([])

    // console.log(review.id)

    useEffect(() => {
        fetch(`/comments/${review.id}`)
            .then(res => res.json())
            .then(commentsForSpecificReview => setDisplayedComments(commentsForSpecificReview))
    }, [])

    function onSubmitNewComment(newComment) {
        setDisplayedComments([...displayedComments, newComment])
    }

    return (
        <div>
            <p>{review.cart_name}</p>
            <p>Visited on: {review.date_visited}</p>
            <p>By {review.user_name}</p>
            <p>Overall rating: {review.rating}</p>
            <p>Hot sauce spice rating: {review.hot_sauce_spice}</p>
            <p>{review.review}</p>
            <div>
                <p>Comments</p>
                {/* {comments ? 
                    <CommentsList comments={comments}/>
                    :
                    <CommentsList comments={review.comments}/>
                } */}
                <CommentsList displayedComments={displayedComments} />
                <button>Write Comment</button>
                <CommentForm review={review.id} onSubmitNewComment={onSubmitNewComment} />
            </div>
        </div>
    )
}

export default ReviewItem