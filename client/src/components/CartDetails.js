import { useEffect, useState, useContext } from "react"
import { useParams, useHistory, Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import ReviewItem from "./ReviewItem"
import ReviewForm from "./ReviewForm"
import { Item, Button, Container, Divider, Modal } from 'semantic-ui-react'
import CartForm from "./CartForm"

function CartDetails() {

    let { id } = useParams()
    let history = useHistory()
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
        <Container>
            <div>
                <Button onClick={() => history.goBack()}>Go Back</Button>
            </div>
            <Divider/>
            <br/>
            <Item.Group>
                <Item>
                    <img 
                        alt={displayedCart.name}
                        src={displayedCart.image} 
                        style={{width: '360px', height: '360px', objectFit: 'cover', marginRight: "3em"}}
                    />
                    <Item.Content>
                        <Item.Header>{displayedCart.name}</Item.Header>
                        <Item.Description>Average Rating: {"⭐️".repeat(displayedCart.average_rating)}</Item.Description>
                        <Item.Meta>{displayedCart.average_rating} out of 5</Item.Meta>
                        <Item.Description>Average Spice Rating: {"🌶".repeat(displayedCart.average_spice_rating)}</Item.Description>
                        <Item.Meta>{displayedCart.average_spice_rating} out of 5</Item.Meta>
                        <Item.Description>
                            <p>Location: around {displayedCart.street} and {displayedCart.avenue}</p>
                            <p>Approximate hours: {displayedCart.opening_hours}{displayedCart.opening_am_pm} to {displayedCart.closing_hours}{displayedCart.closing_am_pm}</p>
                            <p>Chicken over rice: ${displayedCart.chicken_over_rice}</p>
                            <p>Combo over rice: ${displayedCart.combo_over_rice}</p>
                        </Item.Description>
                        <br/>
                        <Button onClick={handleFavorited}>
                            {usersFavorited.includes(currentUser.id) ? "Remove from Favorites 🚫" : "Add to Favorites ❤️"}
                        </Button>
                        {/* <Link to={`/carts/edit/${displayedCart.id}`}> */}
                            {/* <Button>
                                Edit ✏️
                            </Button> */}
                        {/* </Link> */}
                        <Modal
                            size="large"
                            trigger={<Button>Update ✏️</Button>}
                        >
                            <CartForm action='Update' cart={displayedCart}/>
                        </Modal>
                        <Item.Extra>* All details subject to change. Please visit the physical cart and owner for the most updated information.</Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
            <br/>
            <Divider horizontal>{displayedCart.total_reviews} Reviews</Divider>
            {/* <br/> */}
            <Container textAlign='center'>
                {/* <h3>{displayedCart.total_reviews} Reviews</h3> */}
                <Button onClick={toggleForm}>
                    {isShowingForm ?
                        "Cancel"
                        :
                        "Review This Cart"
                    }
                </Button>
                {isShowingForm ? 
                    <ReviewForm cart={displayedCart.id} onSubmitNewReview={onSubmitNewReview} /> 
                    : 
                    null
                }
            </Container>
            <br/>
            {/* <br/> */}
            <div>
                <Item.Group divided>
                    {displayedReviews.map(review => <ReviewItem 
                            key={review.id} 
                            review={review} 
                            onUpdateReview={onUpdateReview} 
                            onDeleteReview={onDeleteReview} 
                        />)}
                </Item.Group>
            </div>
        </Container>
    )
}

export default CartDetails