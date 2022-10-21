import { Link } from 'react-router-dom'
import { Grid, Card } from 'semantic-ui-react'

function UserItem({ user }) {

    return (
        <Grid.Column as={Link} to={`/users/${user.id}`}>
        {/* <Link to={`/users/${user.id}`}> */}
            <Card>
                <Card.Content> 
                    <img src={user.image} alt={user.name}/>
                    <Card.Header>{user.name}</Card.Header>
                    <Card.Description>{user.location}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <p>Icon and # of Reviews</p>
                </Card.Content>
            </Card>
        {/* </Link> */}
        </Grid.Column>
    )
}

export default UserItem