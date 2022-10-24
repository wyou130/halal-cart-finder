import { useEffect, useState, useContext } from "react"
import { Link } from 'react-router-dom'
import CommentForm from "./CommentForm"
import CommentsList from "./CommentsList"
import { UserContext } from '../context/UserProvider'
import { Divider, Button, Icon, Item } from 'semantic-ui-react'

function ReviewItem({ review, onUpdateReview, onDeleteReview }) {

    let [currentUser, setCurrentUser] = useContext(UserContext)

    const [displayedComments, setDisplayedComments] = useState([])
    const [isShowingForm, setIsShowingForm] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [rating, setRating] = useState(review.rating)
    const [hotSauceSpice, setHotSauceSpice] = useState(review.hot_sauce_spice)
    const [reviewInput, setReviewInput] = useState(review.review)
    const [isShowingComments, setIsShowingComments] = useState(false)
    const [totalComments, setTotalComments] = useState(review.total_comments)

    useEffect(() => {
        fetch(`/comments/${review.id}`)
            .then(res => res.json())
            .then(commentsForSpecificReview => setDisplayedComments(commentsForSpecificReview))
    }, [])

    function toggleForm() {
        setIsShowingForm(!isShowingForm)
    }

    function onSubmitNewComment(newComment) {
        setIsShowingForm(false)
        setDisplayedComments([...displayedComments, newComment])
        setTotalComments(totalComments => totalComments + 1)
    }

    function toggleEdit() {
        setIsEditing(!isEditing)
    }

    function toggleComments() {
        setIsShowingComments(!isShowingComments)
    }

    function onUpdateComment(updatedComment) {
        const updatedCommentList = displayedComments.map(comment => {
            if (comment.id === updatedComment.id) return updatedComment
            else return comment
        })
        setDisplayedComments(updatedCommentList)
    }

    function onDeleteComment(deletedComment) {
        const updatedCommentList = displayedComments.filter(comment => {
            return comment.id !== deletedComment.id
        })
        setDisplayedComments(updatedCommentList)
        setTotalComments(totalComments => totalComments - 1)
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

    function handleDelete(review) {
        // console.log(review)
        if(window.confirm('Are you sure you want to delete your review?')) {
            fetch(`/reviews/${review.id}`, {
                method: "DELETE"
            })
              .then(() => {
                onDeleteReview(review)
              })
        } 
    }

    return (
        <Item>
            <Item.Image src={review.user_image} avatar size='tiny'/>
            <Item.Content>
                <Item.Header>
                    <Link to={`/users/${review.user_id}`}>{review.user_name}</Link> visited <Link to={`/carts/${review.cart_id}`}>{review.cart_name}</Link>
                </Item.Header>
                <Item.Meta>on {review.date_visited}</Item.Meta>
                {
                    isEditing ?
                    <form onSubmit={handleEdit}>
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
                        <Item.Description>
                            Overall rating: {"⭐️".repeat(review.rating)} | Hot sauce spice rating: {"🌶".repeat(review.hot_sauce_spice)}
                        </Item.Description>
                        <Item.Description>{review.review}</Item.Description>
                    </>
                }
                {
                    review.user_id === currentUser.id ? 
                    <>
                        <Button icon onClick={toggleEdit}>
                            {isEditing ? <Icon name='cancel'/> : <Icon name='edit outline'/>}
                        </Button> 
                        <Button icon onClick={() => handleDelete(review)}>
                            <Icon name='trash alternate'/>
                        </Button> 
                    </>
                    : 
                    null
                }
                <br/>
                    {
                        isShowingComments ? 
                        <>
                            <CommentsList displayedComments={displayedComments} onUpdateComment={onUpdateComment} onDeleteComment={onDeleteComment} />
                            <br />
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
                        </>
                        :
                        <Item.Description>
                            {totalComments} Comments
                        </Item.Description> 
                    }
                    {/* <br/> */}
                    <Button onClick={toggleComments}>
                    {isShowingComments ? "Hide Comments" : "Show Comments"}
                </Button>
            </Item.Content>
        </Item>
    )
}

export default ReviewItem