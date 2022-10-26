import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactMapGL, { Marker, NavigationControl, Popup } from 'react-map-gl'
import { FcRating } from 'react-icons/fc'
// import { Container } from 'semantic-ui-react'

function Map() {

    const [cartsList, setCartsList] = useState([])
    const [selectedCart, setSelectedCart] = useState(null)

    useEffect(() => {
        fetch('/carts')
            .then(res => res.json())
            .then(carts => {setCartsList(carts)})
    }, [])

    const [viewport, setViewport] = useState({
        latitude: 40.770627,
        longitude: -73.974409,
        width: '100vw',
        height: '80vh',
        zoom: 11
    })


    return (
        // <Container textAlign='center'>
            <ReactMapGL 
                {...viewport} 
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/wyou130/cl9erkbg2002c14lakm41xosh"
                onViewportChange={viewport => {
                    setViewport(viewport)
                }}
            >
                <NavigationControl/>
                {cartsList.map(cart => {
                    return (
                        <>
                            <Marker 
                                key={cart.id}
                                latitude={cart.latitude}
                                longitude={cart.longitude}
                            >
                                <FcRating 
                                    // key={cart.name}
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
        // </Container>
    )
}

export default Map