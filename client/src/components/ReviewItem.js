function ReviewItem({ review }) {

    // console.log(review)

    return (
        <div>
            <p>{review.cart.name}</p>
            <p>Visited on: {review.date_visited}</p>
            <p>By {review.user.name}</p>
            <p>Overall rating: {review.rating}</p>
            <p>Hot sauce spice rating: {review.hot_sauce_spice}</p>
            <p>{review.review}</p>
        </div>
    )
}

export default ReviewItem