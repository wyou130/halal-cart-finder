import { Link, NavLink } from 'react-router-dom'

function NavBar({ currentUser, onLogOut }) {

    function handleLogOut() {
        fetch('/logout', {
            method: 'DELETE'
        })
            .then(() => onLogOut())
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
                    <NavLink to="/login" onClick={handleLogOut}>Log Out</NavLink>
                </span>
                :
                <NavLink to="/login">Log In / Sign Up</NavLink>
            }
        </nav>
    )
}

export default NavBar