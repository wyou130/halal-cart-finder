import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

function CartItem({ cart }) {

    return (
        <Grid.Column as={Link} to={`/carts/${cart.id}`}>
        {/* <Link to={`/carts/${cart.id}`}> */}
            {/* <div> */}
                <p>{cart.name}</p>
                <p>Average Rating: {"⭐️".repeat(cart.average_rating)}</p>
                <em>{cart.average_rating} out of 5</em>
                <p>Average Spice Rating: {"🌶".repeat(cart.average_spice_rating)}</p>
                <em>{cart.average_spice_rating} out of 5</em>
                <p>Typically at {cart.street} and {cart.avenue}</p>
                <p>Approximate hours: {cart.approximate_hours}</p>
                <p>Chicken over rice: ${cart.chicken_over_rice}</p>
                <p>Combo over rice: ${cart.combo_over_rice}</p>
            {/* </div> */}
        {/* </Link> */}
        </Grid.Column>
    )
}

export default CartItem