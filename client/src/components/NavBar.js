import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { Menu, Image } from 'semantic-ui-react'
import logo from "../assets/logo.png"

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
            <Menu.Item as={Link} to="/">
                <Image src={logo} size='small' alt='Halal Cart Finder'/>
            </Menu.Item>
            <Menu.Item as={NavLink} to="/carts" style={{marginBottom: '0.35em'}}>Carts</Menu.Item>
            <Menu.Item as={NavLink} to="/reviews" style={{marginBottom: '0.35em'}}>Reviews</Menu.Item>
            {
                currentUser ? 
                <>
                    <Menu.Item as={NavLink} to="/favorites" style={{marginBottom: '0.35em'}}>Favorites</Menu.Item>
                    <Menu.Item as={NavLink} to="/users" style={{marginBottom: '0.35em'}}>Users</Menu.Item>
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
                    <Menu.Item as={NavLink} to="/login" style={{marginBottom: '0.35em'}}>Log In / Sign Up</Menu.Item>
                </Menu.Menu>
            }
        </Menu>
    )
}

export default NavBar