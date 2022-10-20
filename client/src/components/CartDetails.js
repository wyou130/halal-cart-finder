import { useEffect, useState, useContext } from "react";
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import ReviewItem from "./ReviewItem";
import ReviewForm from "./ReviewForm";

function CartDetails() {

    let { id } = useParams()
    let [currentUser, setCurrentUser] = useContext(UserContext)

    const [displayedCart, setDisplayedCart] = useState("")
    const [displayedReviews, setDisplayedReviews] = useState([])
    const [isShowingForm, setIsShowingForm] = useState(false)
    const [usersFavorited, setUsersFavorited] = useState([])

    useEffect(() => {
        fetch(`/carts/${id}`)
            .then(res => res.json())
            .then(oneCart => {
                setDisplayedCart(oneCart)
                setDisplayedReviews(oneCart.reviews)
                setUsersFavorited(oneCart.favorited_by)
            })
    }, [])

    function toggleForm() {
        setIsShowingForm(!isShowingForm)
    }

    function onSubmitNewReview(newReview) {
        setDisplayedReviews([...displayedReviews, newReview])
        setIsShowingForm(false)
    }

    function onUpdateReview(updatedReview) {
        const updatedReviewList = displayedReviews.map(review => {
            if (review.id === updatedReview.id) return updatedReview
            else return review
        })
        setDisplayedReviews(updatedReviewList)
    }

    function onDeleteReview(deletedReview) {
        const updatedReviewList = displayedReviews.filter(review => {
            return review.id !== deletedReview.id
        })
        setDisplayedReviews(updatedReviewList)
    }

    function onDeleteFavorited(userId) {
        let newFavoritesList = usersFavorited.filter(id => {
            return id !== userId
        })
        setUsersFavorited(newFavoritesList)
    }

    function onAddFavorited(newFavorite) {
        setUsersFavorited([...usersFavorited, newFavorite.user_id])
    }

    function handleFavorited() {
        if(usersFavorited.includes(currentUser.id)) {
            fetch(`/favorites/${currentUser.id}/${displayedCart.id}`, {
                method: "DELETE"
            })
              .then(() => {
                  onDeleteFavorited(currentUser.id)
                  alert('Cart removed from favorites')
              })
        }
        else {
            let newFavorite = {
            user_id: currentUser.id,
            cart_id: displayedCart.id
            }
            fetch('/favorites', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(newFavorite)
            })
                .then(res => {
                    if(res.ok) {
                        res.json()
                        .then(newFavorite => onAddFavorited(newFavorite))
                        alert('Cart successfully favorited!')
                    }
                })
        }
    }

    return (
        <div>
            <div>
                <h3>Cart Details</h3>
                <p>{displayedCart.name}</p>
                <p>Average Rating: {"⭐️".repeat(displayedCart.average_rating)}</p>
                <em>{displayedCart.average_rating} out of 5</em>
                <p>Typically at {displayedCart.street} and {displayedCart.avenue}</p>
                <p>Approximate hours: {displayedCart.approximate_hours}</p>
                <p>Chicken over rice: ${displayedCart.chicken_over_rice}</p>
                <p>Combo over rice: ${displayedCart.combo_over_rice}</p>
            </div>
            <button onClick={handleFavorited}>
                {usersFavorited.includes(currentUser.id) ? "Remove from Favorites" : "Add to Favorites"}
            </button>
            <div>
                <h3>Reviews</h3>
                <button onClick={toggleForm}>
                    {isShowingForm ?
                        "Cancel"
                        :
                        "Review This Cart"
                    }
                </button>
                {isShowingForm ? 
                    <ReviewForm cart={displayedCart.id} onSubmitNewReview={onSubmitNewReview} /> 
                    : 
                    null
                }
                {displayedReviews.map(review => <ReviewItem key={review.id} review={review} onUpdateReview={onUpdateReview} onDeleteReview={onDeleteReview} />)
                }
            </div>
        </div>
    )
}

export default CartDetails