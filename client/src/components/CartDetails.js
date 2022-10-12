import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

function CartDetails() {

    let { id } = useParams()

    const [displayedCart, setDisplayedCart] = useState("")

    useEffect(() => {
        fetch(`/carts/${id}`)
            .then(res => res.json())
            .then(oneCart => setDisplayedCart(oneCart))
    }, [])

    console.log(displayedCart.reviews)

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
            </div>
        </div>
    )
}

export default CartDetails