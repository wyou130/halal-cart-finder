import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import Map from "./Map"
import SortFilter from "./SortFilter";

function CartsList() {

    const [cartsList, setCartsList] = useState([])
    const [search, setSearch] = useState("")
    const [isShowingAcceptsCard, setIsShowingAcceptsCard] = useState(false)

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

    const sortedFilteredCarts = cartsList
        .filter(cart => cart.name.toLowerCase().includes(search.toLowerCase()))
        .filter(cart => isShowingAcceptsCard ? cart.accepts_card : true )

    // console.log(cartsList)
    console.log(sortedFilteredCarts)

    return (
        <>
            <div>
                <h3>All Carts</h3>
                <SortFilter onHandleSearch={onHandleSearch} onHandleShowAcceptsCard={onHandleShowAcceptsCard} isShowingAcceptsCard={isShowingAcceptsCard} />
                {cartsList.map(cart => <CartItem key={cart.id} cart={cart} />)}
            </div>
            <div>
                {/* <Map /> */}
            </div>
        </>
    )
}

export default CartsList