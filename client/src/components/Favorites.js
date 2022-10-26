import { useEffect, useState } from "react"
import CartItem from "./CartItem"
import { Grid, Container } from 'semantic-ui-react'

function Favorites() {

    const [favoriteCartsList, setFavoriteCartsList] = useState([])

    useEffect(() => {
        fetch('/favorites')
            .then(res => res.json())
            .then(favoriteCarts => setFavoriteCartsList(favoriteCarts))
    }, [])

    // console.log(cartsList)

    return (
        <Container>
            <Container textAlign='center'>
                <h3>My Favorites</h3>
            </Container>
            <br/>
            <Grid columns={3} padded> 
                {favoriteCartsList.map(cart => <CartItem key={cart.id} cart={cart.cart} />)}
            </Grid>
        </Container>
    )
}

export default Favorites