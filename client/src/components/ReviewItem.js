import CommentsList from "./CommentsList"

function ReviewItem({ review, comments }) {

    // console.log(review)
    // console.log(comments)

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
                <CommentsList comments={comments ? comments : review.comments}/>
            </div>
        </div>
    )
}

export default ReviewItem