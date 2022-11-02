import { useEffect, useState, useContext } from "react"
import { Link } from 'react-router-dom'
import CommentForm from "./CommentForm"
import CommentsList from "./CommentsList"
import { UserContext } from '../context/UserProvider'
import { Form, Button, Icon, Item, Input, TextArea, Rating } from 'semantic-ui-react'

function ReviewItem({ review, onUpdateReview, onDeleteReview }) {

    let [currentUser] = useContext(UserContext)

    const [displayedComments, setDisplayedComments] = useState([])
    const [isShowingCommentsForm, setIsShowingCommentsForm] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [rating, setRating] = useState(review.rating)
    const [hotSauceSpice, setHotSauceSpice] = useState(review.hot_sauce_spice)
    const [reviewInput, setReviewInput] = useState(review.review)
    const [totalComments, setTotalComments] = useState(review.total_comments)
    const [totalLikes, setTotalLikes] = useState(review.total_likes)
    const [isLiked, setIsLiked] = useState(review.liked_by.includes(currentUser.id))

    useEffect(() => {
        fetch(`/comments/${review.id}`)
            .then(res => res.json())
            .then(commentsForSpecificReview => setDisplayedComments(commentsForSpecificReview))
    }, [])

    function onSubmitNewComment(newComment) {
        setIsShowingCommentsForm(false)
        setDisplayedComments([...displayedComments, newComment])
        setTotalComments(totalComments => totalComments + 1)
    }

    function toggleEdit() {
        setIsEditing(!isEditing)
    }

    function toggleCommentsForm() {
        setIsShowingCommentsForm(!isShowingCommentsForm)
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

    function onLikeReview() {
        setTotalLikes(totalLikes => totalLikes + 1)
        setIsLiked(true)
    }

    function onUnlikeReview() {
        setTotalLikes(totalLikes => totalLikes - 1)
        setIsLiked(false)
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
        if(window.confirm('Are you sure you want to delete your review?')) {
            fetch(`/reviews/${review.id}`, {
                method: "DELETE"
            })
              .then(() => {
                onDeleteReview(review)
              })
        } 
    }

    function handleLiked() {
        if(isLiked) {
            fetch(`/likes_reviews/${currentUser.id}/${review.id}`, {
                method: "DELETE"
            })
                .then(onUnlikeReview())
        } else {
            let newLike ={
                user_id: currentUser.id,
                review_id: review.id
            }
            fetch('/likes_reviews', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(newLike)
            })
                .then(res => {
                    if(res.ok) {
                        res.json()
                        .then(onLikeReview())
                    }
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
                <Item.Meta>on {review.date_visited_formatted}</Item.Meta>
                {
                    isEditing ?
                    <Form onSubmit={handleEdit}>
                        <datalist id="tickmarks">
                            <option value="0" label="0"></option>
                            <option value="1" label="1"></option>
                            <option value="2" label="2"></option>
                            <option value="3" label="3"></option>
                            <option value="4" label="4"></option>
                            <option value="5" label="5"></option>
                        </datalist>
                        <label htmlFor="rating">Rating</label>
                        <div>
                            <Input 
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
                            <br/>
                            <Rating icon='star' size='huge' rating={rating} maxRating={5}/>
                        </div>
                        <label htmlFor="hotSauceSpice">How hot is the hot sauce?</label>
                        <div>
                            <Input 
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
                            <br/>
                            <Rating icon='star' size='huge' rating={hotSauceSpice} maxRating={5}/>
                        </div>
                        <label htmlFor="review">Review</label>
                        <div>
                            <TextArea 
                                required 
                                type="text" 
                                name="review" 
                                value={reviewInput}
                                onChange={e => setReviewInput(e.target.value)}
                            />
                        </div>
                        <Button type="submit">Update Review</Button>
                    </Form>
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
                <Item.Extra>Posted on {review.created_at}, last updated {review.updated_at}</Item.Extra>
                <Button icon onClick={handleLiked} color={isLiked ? 'grey' : null}>
                    <Icon 
                        name={isLiked ? 'thumbs up' : 'thumbs up outline'}
                    />
                </Button>
                <Button icon onClick={toggleCommentsForm}>
                    <Icon name={'comment outline'}/>
                </Button>
                <Item.Description>{totalLikes} likes</Item.Description>
                {
                    isShowingCommentsForm ? 
                    <>
                        <CommentsList displayedComments={displayedComments} onUpdateComment={onUpdateComment} onDeleteComment={onDeleteComment} />
                        <br/>
                        <CommentForm review={review.id} onSubmitNewComment={onSubmitNewComment} />
                    </>
                    :
                    null
                }
                <br/>
                <Button onClick={toggleCommentsForm}>
                    {isShowingCommentsForm ? "Hide Comments" : `Show ${totalComments} Comments`}
                </Button>
            </Item.Content>
        </Item>
    )
}

export default ReviewItem