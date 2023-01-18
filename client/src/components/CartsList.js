import { useEffect, useState } from "react"
import CartItem from "./CartItem"
import Map from "./Map"
import Toggle from "./Toggle"
import Search from "./Search"
import { Grid, Container, Menu } from 'semantic-ui-react'
import Sort from "./Sort"


function CartsList() {

    const [cartsList, setCartsList] = useState([])
    const [search, setSearch] = useState("")
    const [isShowingAcceptsCard, setIsShowingAcceptsCard] = useState(false)
    const [sortBy, setSortBy] = useState("")

    useEffect(() => {
        fetch('/carts')
            .then(res => res.json())
            .then(carts => setCartsList(carts))
    }, [])

    function onHandleSearch(searchInput) {
        setSearch(searchInput)
    }

    function onHandleShowAcceptsCard() {
        setIsShowingAcceptsCard(!isShowingAcceptsCard)
    }

    function onHandleSort(sortInput) {
        setSortBy(sortInput)
    }

    const sortOptions = [
        {
            text: '',
            value: ''
        },
        {
            text: 'Rating High-to-Low',
            value: 'rating'
        },
        {
            text: 'Price Low-to-High',
            value: 'price'
        }
    ]

    const sortedFilteredCarts = cartsList
        .filter(cart => cart.name.toLowerCase().includes(search.toLowerCase()))
        .filter(cart => isShowingAcceptsCard ? cart.accepts_card : true )
        .sort((a, b) => {
            if (sortBy === "") return cartsList
            else if (sortBy === "Rating High-to-Low") return b.average_rating - a.average_rating
            else if (sortBy === "Price Low-to-High") return a.average_price - b.average_price
        })

    return (
        <Container>
            <Container textAlign='center' style={{width: '75%'}}>
                <h3>All Carts</h3>
                <Menu text widths={3}>
                    <Sort 
                        sortOptions={sortOptions} 
                        onHandleSort={onHandleSort} 
                    />
                    <Toggle 
                        onHandleShowAcceptsCard={onHandleShowAcceptsCard} 
                        isShowingAcceptsCard={isShowingAcceptsCard} 
                    />
                    <Search 
                        onHandleSearch={onHandleSearch} 
                        label="Carts" 
                        placeholder="by cart name"
                    />
                </Menu>
            </Container>
            <br/>
            <Grid columns={3} padded> 
                {sortedFilteredCarts.map(cart => <CartItem key={cart.id} cart={cart} />)}
            </Grid>
            <div>
                {/* <Map /> */}
            </div>
        </Container>
    )
}

export default CartsList