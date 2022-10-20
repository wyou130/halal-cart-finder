import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

function UserItem({ user }) {

    return (
        <Grid.Column as={Link} to={`/users/${user.id}`}>
        {/* <Link to={`/users/${user.id}`}> */}
                <img src={user.image} alt={user.name}/>
                <p>{user.name}</p>
                <p>{user.location}</p>
        {/* </Link> */}
        </Grid.Column>
    )
}

export default UserItem