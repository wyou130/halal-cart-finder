import { Link } from 'react-router-dom'
import { Grid, Card, Icon, Image } from 'semantic-ui-react'

function UserItem({ user }) {

    return (
        <Grid.Column as={Link} to={`/users/${user.id}`}>
        {/* <Link to={`/users/${user.id}`}> */}
            <Card>
                <Image src={user.image} wrapped ui={false}/>
                <Card.Content> 
                    {/* <img src={user.image} alt={user.name}/> */}
                    <Card.Header>{user.name}</Card.Header>
                    <Card.Description>{user.location}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='food'/>
                    {user.total_reviews} Reviews
                </Card.Content>
            </Card>
        {/* </Link> */}
        </Grid.Column>
    )
}

export default UserItem