import { Link } from 'react-router-dom'
import { Grid, Card, Divider, Icon, Image } from 'semantic-ui-react'

function CartItem({ cart }) {

    return (
        <Grid.Column as={Link} to={`/carts/${cart.id}`}>
            <Card style={{width: 'auto', height: '680px'}}>
            <img
                alt={cart.name} 
                src={cart.image} 
                style={{width: '100%', height: '50%', objectFit: 'cover'}}
            />
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
                    <Icon name='food'/>
                    {cart.total_reviews} Reviews
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

export default CartItem