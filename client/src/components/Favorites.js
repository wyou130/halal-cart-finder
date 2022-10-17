import { useEffect, useState } from "react"
import CartItem from "./CartItem"

function Favorites() {

    const [favoriteCartsList, setFavoriteCartsList] = useState([])

    useEffect(() => {
        fetch('/favorites')
            .then(res => res.json())
            .then(favoriteCarts => setFavoriteCartsList(favoriteCarts))
    }, [])

    // console.log(cartsList)

    return (
        <div>
            <h3>Favorite Carts</h3>
            {favoriteCartsList.map(cart => <CartItem key={cart.id} cart={cart.cart} />)}
        </div>
    )
}

export default Favorites