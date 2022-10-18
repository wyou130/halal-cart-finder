import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import ReactMapGL, { Marker } from 'react-map-gl'

function Home() {

    let [currentUser, setCurrentUser] = useContext(UserContext)

    const [viewport, setViewport] = useState({
        latitude: 40.770627,
        longitude: -73.974409,
        width: '80vw',
        height: '80vh',
        zoom: 11
    })

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
            {/* Map from Mapbox */}
            <div>
                <ReactMapGL 
                    {...viewport} 
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/wyou130/cl9erkbg2002c14lakm41xosh"
                    onViewportChange={viewport => {
                        setViewport(viewport)
                    }}
                >
                    markers here
                </ReactMapGL>
            </div>
        </div>
    )
}

export default Home 