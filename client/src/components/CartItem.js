import { Link } from 'react-router-dom'
import { Grid, Card, Divider } from 'semantic-ui-react'

function CartItem({ cart }) {

    // console.log(cart)

    return (
        <Grid.Column as={Link} to={`/carts/${cart.id}`}>
        {/* <Link to={`/carts/${cart.id}`}> */}
            {/* <div> */}
            <Card>
                <Card.Content>
                    <Card.Header>{cart.name}</Card.Header>
                    <Card.Description>Around {cart.street} and {cart.avenue}</Card.Description>
                    <Card.Description>Approximate hours: {cart.approximate_hours}</Card.Description>
                    <Card.Description>Typical platter price: ${cart.average_price}</Card.Description>
                    <Divider section />
                    <Card.Description>Average Rating: {"⭐️".repeat(cart.average_rating)}</Card.Description>
                    <Card.Meta>{cart.average_rating} out of 5</Card.Meta>
                    <Card.Description>Average Spice Rating: {"🌶".repeat(cart.average_spice_rating)}</Card.Description>
                    <Card.Meta>{cart.average_spice_rating} out of 5</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <p>Icon and # of Reviews</p>
                </Card.Content>
            {/* </div> */}
            </Card>
        {/* </Link> */}
        </Grid.Column>
    )
}

export default CartItem