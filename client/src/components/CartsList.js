import { useEffect, useState } from "react";
import CartItem from "./CartItem";

function CartsList() {

    const [cartsList, setCartsList] = useState([])

    useEffect(() => {
        fetch('/carts')
            .then(res => res.json())
            .then(carts => setCartsList(carts))
    }, [])

    // console.log(cartsList)

    return (
        <div>
            <h3>All Carts</h3>
            {cartsList.map(cart => <CartItem key={cart.id} cart={cart} />)}
        </div>
    )
}

export default CartsList