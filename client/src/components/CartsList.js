import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import Map from "./Map"

function CartsList() {

    const [cartsList, setCartsList] = useState([])

    useEffect(() => {
        fetch('/carts')
            .then(res => res.json())
            .then(carts => setCartsList(carts))
    }, [])

    return (
        <>
            <div>
                <h3>All Carts</h3>
                {cartsList.map(cart => <CartItem key={cart.id} cart={cart} />)}
            </div>
            <div>
                <Map />
            </div>
        </>
    )
}

export default CartsList