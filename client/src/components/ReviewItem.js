import { useEffect, useState } from "react";
import CommentForm from "./CommentForm"
import CommentsList from "./CommentsList"

function ReviewItem({ review }) {

    const [displayedComments, setDisplayedComments] = useState([])
    const [isShowingForm, setIsShowingForm] = useState(false)

    // console.log(review.id)

    useEffect(() => {
        fetch(`/comments/${review.id}`)
            .then(res => res.json())
            .then(commentsForSpecificReview => setDisplayedComments(commentsForSpecificReview))
    }, [])

    function toggleForm() {
        setIsShowingForm(!isShowingForm)
    }

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
                <button onClick={toggleForm}>
                    {isShowingForm ?
                        "Cancel"
                        :
                        "Comment on This Review"
                    }
                </button>
                {isShowingForm ? 
                    <CommentForm review={review.id} onSubmitNewComment={onSubmitNewComment} />
                    :
                    null 
                }
            </div>
        </div>
    )
}

export default ReviewItem