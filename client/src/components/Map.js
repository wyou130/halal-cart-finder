import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactMapGL, { Marker, NavigationControl, Popup, GeolocateControl } from 'react-map-gl'
import { FcRating } from 'react-icons/fc'
// import { Container } from 'semantic-ui-react'

function Map() {

    const [cartsList, setCartsList] = useState([])
    const [selectedCart, setSelectedCart] = useState(null)
    const [currentLocation, setCurrentLocation] = useState([])

    useEffect(() => {
        fetch('/carts')
            .then(res => res.json())
            .then(carts => {setCartsList(carts)})
    }, [])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCurrentLocation([position.coords.latitude, position.coords.longitude])
        })
    }, [])

    const [viewport, setViewport] = useState({
        latitude: 40.770627,
        longitude: -73.974409,
        width: '100vw',
        height: '80vh',
        zoom: 11
    })

    const geolocateControlStyle = {
        right: 10,
        top: 10
    }

    const navigationControlStyle = {
    left: 10,
    top: 10
    }

    return (
            <ReactMapGL 
                {...viewport} 
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/wyou130/cl9erkbg2002c14lakm41xosh"
                onViewportChange={viewport => {
                    setViewport(viewport)
                }}
            >
                <NavigationControl
                    style={navigationControlStyle}
                />
                <GeolocateControl
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                    style={geolocateControlStyle}
                    // onGeolocate={(position) => {
                    //     // get latitude and longitude of user current location
                    //     console.log(position.coords.latitude)
                    // }}
                />
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
                            <Link to={`/carts/${selectedCart.id}`}>
                                See More
                            </Link>
                        </div>
                    </Popup>
                    :
                    null
                }
            </ReactMapGL>
    )
}

export default Map