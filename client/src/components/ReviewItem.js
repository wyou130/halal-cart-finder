import { useEffect, useState, useContext } from "react"
import CommentForm from "./CommentForm"
import CommentsList from "./CommentsList"
import { UserContext } from '../context/UserProvider'

function ReviewItem({ review, onUpdateReview }) {

    let [currentUser, setCurrentUser] = useContext(UserContext)

    const [displayedComments, setDisplayedComments] = useState([])
    const [isShowingForm, setIsShowingForm] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [rating, setRating] = useState(review.rating)
    const [hotSauceSpice, setHotSauceSpice] = useState(review.hot_sauce_spice)
    const [reviewInput, setReviewInput] = useState(review.review)

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

    function toggleEdit() {
        setIsEditing(!isEditing)
    }

    function onUpdateComment(updatedComment) {
        const updatedCommentList = displayedComments.map(comment => {
            if (comment.id === updatedComment.id) return updatedComment
            else return comment
        })
        setDisplayedComments(updatedCommentList)
    }

    function handleEdit(e) {
        e.preventDefault()
        let editInput = {
            rating: rating,
            review: reviewInput,
            hot_sauce_spice: hotSauceSpice
        }
        fetch(`/reviews/${review.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(editInput)
        }) 
            .then(res => {
                if(res.ok) {
                    res.json()
                    .then((updatedReview) => {
                        onUpdateReview(updatedReview)
                        setIsEditing(false)
                    })
                    alert('Review successfully updated!')
                }
            })
    }

    return (
        <div>
            <p>{review.cart_name}</p>
            <p>Visited on: {review.date_visited}</p>
            <p>By {review.user_name}</p>
            {
                isEditing ?
                <form onSubmit={handleEdit}>
                    {/* <datalist id="tickmarks">
                        <option value="0" label="0"></option>
                        <option value="1" label="1"></option>
                        <option value="2" label="2"></option>
                        <option value="3" label="3"></option>
                        <option value="4" label="4"></option>
                        <option value="5" label="5"></option>
                    </datalist> */}
                    <label htmlFor="rating">Rating</label>
                    <div>
                        <input 
                            required 
                            type="range" 
                            min="0"
                            max="5"
                            step="1"
                            list="tickmarks"
                            name="rating" 
                            value={rating}
                            onChange={e => setRating(e.target.value)}
                        />
                        <datalist id="tickmarks">
                            <option value="0" label="0"></option>
                            <option value="1" label="1"></option>
                            <option value="2" label="2"></option>
                            <option value="3" label="3"></option>
                            <option value="4" label="4"></option>
                            <option value="5" label="5"></option>
                        </datalist>
                    </div>
                    <label htmlFor="hotSauceSpice">How hot is the hot sauce?</label>
                    <div>
                        <input 
                            required 
                            type="range" 
                            min="0"
                            max="5"
                            step="1"
                            list="tickmarks"
                            name="hotSauceSpice" 
                            value={hotSauceSpice}
                            onChange={e => setHotSauceSpice(e.target.value)}
                        />
                        <datalist id="tickmarks">
                            <option value="0" label="0"></option>
                            <option value="1" label="1"></option>
                            <option value="2" label="2"></option>
                            <option value="3" label="3"></option>
                            <option value="4" label="4"></option>
                            <option value="5" label="5"></option>
                        </datalist>
                    </div>
                    <label htmlFor="review">Review</label>
                    <div>
                        <input 
                            required 
                            type="text" 
                            name="review" 
                            value={reviewInput}
                            onChange={e => setReviewInput(e.target.value)}
                        />
                    </div>
                    <button type="submit">Update Review</button>
                </form>
                :
                <>
                    <p>Overall rating: {review.rating}</p>
                    <p>Hot sauce spice rating: {review.hot_sauce_spice}</p>
                    <p>{review.review}</p>
                </>
            }
            {
                review.user_id === currentUser.id ? 
                <button onClick={toggleEdit}>{isEditing ? "Cancel" : "Edit Review"}</button> 
                : 
                null
            }
            <div>
                <p>Comments</p>
                {/* {comments ? 
                    <CommentsList comments={comments}/>
                    :
                    <CommentsList comments={review.comments}/>
                } */}
                <CommentsList displayedComments={displayedComments} onUpdateComment={onUpdateComment} />
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