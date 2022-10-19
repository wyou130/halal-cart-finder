import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import Map from "./Map"

function Home() {

    let [currentUser, setCurrentUser] = useContext(UserContext)

    return(
        <div>
            <h1>Halal Cart Finder</h1>
            <h3>{currentUser ? `Welcome, ${currentUser.name}!` : "find the cart for you"}</h3>
            <br/>
            <div>
                {currentUser ?
                    <div>
                        <Link to='/reviews'>
                            <button>Browse Reviews</button>
                        </Link>
                        <Link to='/favorites'>
                            <button>My Favorites</button>
                        </Link>
                    </div>
                    : 
                    <div>
                        <Link to='/login'>
                            <button>Log In / Sign Up</button>
                        </Link>
                        <Link to='/carts'>
                            <button>Browse Carts</button>
                        </Link>
                    </div>
                }
            </div>
            <br/>
            <Map /> 
        </div>
    )
}

export default Home 