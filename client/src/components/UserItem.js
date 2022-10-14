import { Link } from 'react-router-dom'
function UserItem({ user }) {

    // console.log(user)

    return (
        <Link to={`/users/${user.id}`}>
            <div>
                <img src={user.image} alt={user.name}/>
                <p>{user.name}</p>
                <p>{user.location}</p>
            </div>
        </Link>
    )
}

export default UserItem