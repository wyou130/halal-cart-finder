import { useEffect, useState } from "react"
import UserItem from "./UserItem"
import { Grid } from 'semantic-ui-react'

function UserList() {

    const [usersList, setUsersList] = useState([])

    useEffect(() => {
        fetch('/users')
            .then(res => res.json())
            .then(users => setUsersList(users))
    }, [])

    // console.log(usersList)

    return(
        <div>
            <h3>Users List</h3>
            <Grid columns={3}> 
                {usersList.map(user => <UserItem key={user.id} user={user}/>)}
            </Grid>
        </div>
    )
}

export default UserList