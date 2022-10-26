import { useEffect, useState } from "react"
import UserItem from "./UserItem"
import { Grid, Container } from 'semantic-ui-react'

function UsersList() {

    const [usersList, setUsersList] = useState([])

    useEffect(() => {
        fetch('/users')
            .then(res => res.json())
            .then(users => setUsersList(users))
    }, [])

    // console.log(usersList)

    return(
        <Container>
            <Container textAlign='center'>
                <h3>Users</h3>
            </Container>
            <br/>
            <Grid columns={3} padded> 
                {usersList.map(user => <UserItem key={user.id} user={user}/>)}
            </Grid>
        </Container>
    )
}

export default UsersList