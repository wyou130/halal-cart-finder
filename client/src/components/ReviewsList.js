import { useEffect, useState } from "react";
import ReviewItem from "./ReviewItem";

function ReviewsList() {

    const [reviewsList, setReviewsList] = useState([])

    useEffect(() => {
        fetch('/reviews')
            .then(res => res.json())
            .then(reviews => setReviewsList(reviews))
    }, [])

    return (
        <div>
            <h3>All Reviews</h3>
            {reviewsList.map(review => <ReviewItem key={review.id} review={review} />)}
        </div>
    )
}

export default ReviewsList