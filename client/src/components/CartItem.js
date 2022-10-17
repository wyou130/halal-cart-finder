import { Link } from 'react-router-dom'
function CartItem({ cart }) {

    return (
        <Link to={`/carts/${cart.id}`}>
            <div>
                <p>{cart.name}</p>
                <p>Typically at {cart.street} and {cart.avenue}</p>
                <p>Approximate hours: {cart.approximate_hours}</p>
                <p>Chicken over rice: ${cart.chicken_over_rice}</p>
                <p>Combo over rice: ${cart.combo_over_rice}</p>
            </div>
        </Link>
    )
}

export default CartItem