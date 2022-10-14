import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

function NavBar() {

    let [currentUser, setCurrentUser] = useContext(UserContext)

    function handleLogOut() {
        fetch('/logout', {
            method: 'DELETE'
        })
            .then(() => setCurrentUser(null))
    }

    return(
        <nav>
            <Link to="/">Cart Finder</Link>
            {/* Above is for logo so not NavLink */}
            <NavLink to="/carts">Carts</NavLink>
            <NavLink to="/reviews">Reviews</NavLink>
            {
                currentUser ? 
                <span>
                    <NavLink to="/favorites">Favorites</NavLink>
                    <NavLink to="/users">Users</NavLink>
                    <NavLink to="/login" onClick={handleLogOut}>Log Out</NavLink>
                </span>
                :
                <NavLink to="/login">Log In / Sign Up</NavLink>
            }
        </nav>
    )
}

export default NavBar