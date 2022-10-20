import { useEffect, useState } from "react"
import CartItem from "./CartItem"
import { Grid } from 'semantic-ui-react'

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
            <Grid columns={3}> 
                {favoriteCartsList.map(cart => <CartItem key={cart.id} cart={cart.cart} />)}
            </Grid>
        </div>
    )
}

export default Favorites