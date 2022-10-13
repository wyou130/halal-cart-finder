import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ReviewItem from "./ReviewItem";

function CartDetails() {

    let { id } = useParams()

    const [displayedCart, setDisplayedCart] = useState("")

    useEffect(() => {
        fetch(`/carts/${id}`)
            .then(res => res.json())
            .then(oneCart => setDisplayedCart(oneCart))
    }, [])

    // console.log("cart's reviews:")
    // console.log(displayedCart.comments)

    return (
        <div>
            <div>
                <h3>Cart Details</h3>
                <p>{displayedCart.name}</p>
                <p>Typically at {displayedCart.street} and {displayedCart.avenue}</p>
                <p>Approximate hours: {displayedCart.approximate_hours}</p>
                <p>Chicken over rice: ${displayedCart.chicken_over_rice}</p>
                <p>Combo over rice: ${displayedCart.combo_over_rice}</p>
            </div>
            <div>
                {/* map of cart reviews goes here and rendering a ReviewItem component for each */}
                <h3>Reviews</h3>
                {displayedCart.reviews ? 
                    displayedCart.reviews.map(review => <ReviewItem key={review.id} review={review} comments={displayedCart.comments} />)
                    :
                    null
                }
            </div>
        </div>
    )
}

export default CartDetails