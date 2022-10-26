import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { Menu, Image } from 'semantic-ui-react'

function NavBar() {

    let [currentUser, setCurrentUser] = useContext(UserContext)

    function handleLogOut() {
        fetch('/logout', {
            method: 'DELETE'
        })
            .then(() => setCurrentUser(""))
    }

    return(
        <Menu pointing secondary>
            <Menu.Item as={Link} to="/">Cart Finder</Menu.Item>
            <Menu.Item as={NavLink} to="/carts">Carts</Menu.Item>
            <Menu.Item as={NavLink} to="/reviews">Reviews</Menu.Item>
            {
                currentUser ? 
                <>
                    <Menu.Item as={NavLink} to="/favorites">Favorites</Menu.Item>
                    <Menu.Item as={NavLink} to="/users">Users</Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item as={NavLink} to={`/users/${currentUser.id}`}>
                            Logged in as {currentUser.name}
                            <Image avatar src={currentUser.image}/>
                        </Menu.Item>
                        <Menu.Item as={NavLink} to="/login" onClick={handleLogOut} style={{marginBottom: '0.35em'}}>
                            Log Out
                        </Menu.Item>
                    </Menu.Menu>
                </>
                :
                <Menu.Menu position='right'>
                    <Menu.Item as={NavLink} to="/login">Log In / Sign Up</Menu.Item>
                </Menu.Menu>
            }
        </Menu>
    )
}

export default NavBar