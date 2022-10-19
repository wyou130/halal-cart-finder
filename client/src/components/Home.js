import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { FcRating } from 'react-icons/fc'

function Home() {

    let [currentUser, setCurrentUser] = useContext(UserContext)

    const [cartsList, setCartsList] = useState([])
    const [selectedCart, setSelectedCart] = useState(null)

    // console.log(selectedCart)

    useEffect(() => {
        fetch('/carts')
            .then(res => res.json())
            .then(carts => {setCartsList(carts)})
    }, [])


    // const cartCoordinates = cartsList.map(cart => cart.latitude)

    // console.log(typeof cartsList[0].latitude)

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
                    {cartsList.map(cart => {
                        return (
                            <>
                                <Marker 
                                    key={cart.id}
                                    latitude={cart.latitude}
                                    longitude={cart.longitude}
                                >
                                    <FcRating 
                                        onClick={e => {
                                            e.preventDefault()
                                            // e.stopPropagation()
                                            setSelectedCart(cart)
                                        }}
                                    />
                                </Marker>
                            </>
                        )
                    })}
                    {selectedCart ? 
                        <Popup
                            key={selectedCart.id}
                            latitude={selectedCart.latitude}
                            longitude={selectedCart.longitude}
                            onClose={() => setSelectedCart(null)}
                        >
                            <div>
                                <h4>{selectedCart.name}</h4>
                                <p>{selectedCart.street} & {selectedCart.avenue}</p>
                            </div>
                        </Popup>
                        :
                        null
                    }
                </ReactMapGL>
            </div>
        </div>
    )
}

export default Home 