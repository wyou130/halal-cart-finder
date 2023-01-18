import { useContext } from "react"
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import CartForm from "./CartForm"
import { Menu, Modal } from 'semantic-ui-react'

function Footer() {

    let [currentUser] = useContext(UserContext)

    return (
        <Menu secondary color='grey' inverted size='tiny'>
            <Menu.Item as={Link} to="/">Halal Cart Finder 2023</Menu.Item>
            <Menu.Item>About</Menu.Item>
            {!currentUser.admin ? <Modal
                size="large"
                trigger={<Menu.Item>Suggest a Cart</Menu.Item>}
            >
                <CartForm action='Suggest a'/>
            </Modal>
            : null}
        </Menu>
    )
}

export default Footer