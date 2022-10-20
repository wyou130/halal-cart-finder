import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import Map from "./Map"
import SortFilter from "./SortFilter";
import { Grid } from 'semantic-ui-react'

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

    const sortedFilteredCarts = cartsList
        .filter(cart => cart.name.toLowerCase().includes(search.toLowerCase()))
        .filter(cart => isShowingAcceptsCard ? cart.accepts_card : true )
        .sort((a, b) => {
            if (sortBy === "") return cartsList
            else if (sortBy === "rating") return b.average_rating - a.average_rating
            else if (sortBy === "price") return a.average_price - b.average_price
        })

    return (
        <>
            <div>
                <h3>All Carts</h3>
                <SortFilter 
                    onHandleSearch={onHandleSearch}    
                    onHandleShowAcceptsCard={onHandleShowAcceptsCard} 
                    isShowingAcceptsCard={isShowingAcceptsCard} 
                    onHandleSort={onHandleSort} 
                />
                <Grid columns={3}> 
                    {/* <Grid.Row> */}
                        {sortedFilteredCarts.map(cart => <CartItem key={cart.id} cart={cart} />)}
                    {/* </Grid.Row> */}
                </Grid>
            </div>
            <div>
                {/* <Map /> */}
            </div>
        </>
    )
}

export default CartsList