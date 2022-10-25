import { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { Rating, Form, Input, TextArea, Button } from 'semantic-ui-react'

function ReviewForm({ cart, onSubmitNewReview }) {

    let [currentUser, setCurrentUser] = useContext(UserContext)

    const [dateVisited, setDateVisited] = useState("")
    const [rating, setRating] = useState("")
    const [hotSauceSpice, setHotSauceSpice] = useState("")
    const [review, setReview] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        let reviewInput = {
            date_visited: dateVisited,
            rating: rating,
            review: review,
            hot_sauce_spice: hotSauceSpice,
            user_id: currentUser.id,
            cart_id: cart
        }
        fetch('/reviews', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(reviewInput)
        })
            .then(res => {
                if(res.ok) {
                    res.json()
                    .then(newReview => onSubmitNewReview(newReview))
                    alert('Review successfully added!')
                } else {
                    res.json()
                    .then(errors => setErrors(errors.error))
                }
            })
        setDateVisited("")
        setRating("")
        setHotSauceSpice("")
        setReview("")
    }

    return (
        <div>
            <h4>Add a Review</h4>
            <Form onSubmit={handleSubmit}>
                <datalist id="tickmarks">
                    <option value="0" label="0"></option>
                    <option value="1" label="1"></option>
                    <option value="2" label="2"></option>
                    <option value="3" label="3"></option>
                    <option value="4" label="4"></option>
                    <option value="5" label="5"></option>
                </datalist>
                <label htmlFor="dateVisited">Date Visited</label>
                <div>
                    <Input 
                        required 
                        type="date" 
                        name="dateVisited" 
                        value={dateVisited}
                        onChange={e => setDateVisited(e.target.value)}
                    />
                </div>
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
                        placeholder="Share your thoughts on this cart"
                        type="text" 
                        name="review" 
                        value={review}
                        onChange={e => setReview(e.target.value)}
                    />
                </div>
                <Button type="submit">Add Review</Button>
            </Form>
            {errors.map(error => <p key={error} className='error'>{error}</p>)}
        </div>
    )
}

export default ReviewForm