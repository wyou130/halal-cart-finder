import { Link } from 'react-router-dom'
import { Grid, Card, Icon, Image } from 'semantic-ui-react'

function UserItem({ user }) {

    return (
        <Grid.Column as={Link} to={`/users/${user.id}`}>
            <Card style={{width: 'auto', height: '360px'}}>
                <img alt={user.name} src={user.image} style={{width: '100%', height: '65%', objectFit: 'cover'}}/>
                <Card.Content> 
                    <Card.Header>{user.name}</Card.Header>
                    <Card.Description><Icon name='home'/>{user.location}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='food'/>
                    {user.total_reviews} Reviews
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

export default UserItem