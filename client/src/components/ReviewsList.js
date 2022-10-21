import { useEffect, useState } from "react"
import ReviewItem from "./ReviewItem"
import { Grid } from 'semantic-ui-react'

function ReviewsList() {

    const [reviewsList, setReviewsList] = useState([])

    useEffect(() => {
        fetch('/reviews')
            .then(res => res.json())
            .then(reviews => setReviewsList(reviews))
    }, [])

    function onUpdateReview(updatedReview) {
        const updatedReviewList = reviewsList.map(review => {
            if (review.id === updatedReview.id) return updatedReview
            else return review
        })
        setReviewsList(updatedReviewList)
    }

    function onDeleteReview(deletedReview) {
        const updatedReviewList = reviewsList.filter(review => {
            return review.id !== deletedReview.id
        })
        setReviewsList(updatedReviewList)
    }

    return (
        <div>
            <h3>All Reviews</h3>
            <Grid columns={3} padded> 
                {reviewsList.map(review => <ReviewItem onUpdateReview={onUpdateReview} onDeleteReview={onDeleteReview} key={review.id} review={review}/>)}
            </Grid>
        </div>
    )
}

export default ReviewsList