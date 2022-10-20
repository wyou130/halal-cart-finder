import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { Menu } from 'semantic-ui-react'

function NavBar() {

    let [currentUser, setCurrentUser] = useContext(UserContext)

    function handleLogOut() {
        fetch('/logout', {
            method: 'DELETE'
        })
            .then(() => setCurrentUser(""))
    }

    return(
        // <nav>
        <Menu pointing secondary>
            {/* <Link to="/">Cart Finder</Link> */}
            <Menu.Item as={Link} to="/">Cart Finder</Menu.Item>
            {/* Above is for logo so not NavLink */}
            {/* <NavLink to="/carts">Carts</NavLink> */}
            <Menu.Item as={NavLink} to="/carts">Carts</Menu.Item>
            {/* <NavLink to="/reviews">Reviews</NavLink> */}
            <Menu.Item as={NavLink} to="/reviews">Reviews</Menu.Item>
            {
                currentUser ? 
                <>
                    {/* <NavLink to="/favorites">Favorites</NavLink> */}
                    <Menu.Item as={NavLink} to="/favorites">Favorites</Menu.Item>
                    {/* <NavLink to="/users">Users</NavLink> */}
                    <Menu.Item as={NavLink} to="/users">Users</Menu.Item>
                    {/* <NavLink to="/login" onClick={handleLogOut}>Log Out</NavLink> */}
                    <Menu.Item as={NavLink} to="/login" onClick={handleLogOut}>Log Out</Menu.Item>
                </>
                :
                // <NavLink to="/login">Log In / Sign Up</NavLink>
                <Menu.Item as={NavLink} to="/login">Log In / Sign Up</Menu.Item>
            }
        {/* </nav> */}
        </Menu>
    )
}

export default NavBar