import CommentsList from "./CommentsList"

function ReviewItem({ review }) {

    // console.log(review.comments)

    return (
        <div>
            <p>{review.cart.name}</p>
            <p>Visited on: {review.date_visited}</p>
            <p>By {review.user.name}</p>
            <p>Overall rating: {review.rating}</p>
            <p>Hot sauce spice rating: {review.hot_sauce_spice}</p>
            <p>{review.review}</p>
            <div>
                <p>Comments</p>
                <CommentsList comments={review.comments}/>
            </div>
        </div>
    )
}

export default ReviewItem