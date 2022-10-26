import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import Map from "./Map"
import { Container, Button } from 'semantic-ui-react'

function Home() {

    let [currentUser, setCurrentUser] = useContext(UserContext)

    return(
        <>
            <Container textAlign='center'>
                <h1>Halal Cart Finder</h1>
                <h3>{currentUser ? `Welcome, ${currentUser.name}!` : "find the cart for you"}</h3>
                <br/>
                <div>
                    {currentUser ?
                        <div>
                            <Button as={Link} to="/reviews" style={{width: "150px"}}>Browse Reviews</Button>
                            <br/>
                            <br/>
                            <Button as={Link} to="/favorites" style={{width: "150px"}}>My Favorites</Button>
                        </div>
                        : 
                        <div>
                            <Button as={Link} to='/login' style={{width: "150px"}}>Log In / Sign Up</Button>
                            <br/>
                            <br/>
                            <Button as={Link} to='/carts' style={{width: "150px"}}>Browse Carts</Button>
                        </div>
                    }
                </div>
                <br/>
            </Container>
            {/* <Container> */}
            <Map /> 
            {/* </Container> */}
        </>
    )
}

export default Home 