import { useState } from 'react'
import { Container, Form, Input } from 'semantic-ui-react'

function CartForm() {

    const [cartName, setCartName] = useState("")
    const [street, setStreet] = useState("")
    const [avenue, setavenue] = useState("")
    const [landmarks, setLandmarks] = useState("")
    const [acceptsCard, setAcceptsCard] = useState(false)
    const [hours, setHours] = useState("")
    const [chickenPrice, setChickenPrice] = useState("")
    const [comboPrice, setcomboPrice] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [image, setImage] = useState("")

    return (
        <Container textAlign='center'>
            <h3>Add New Cart</h3>
            <Form>
                <label htmlFor='cartName'>Name</label>
                <div>
                    <Input 
                        required
                        type='text'
                        name='cartName'
                        value={cartName}
                    />
                </div>
                <label htmlFor='street'>Cross Street</label>
                <div>
                    <Input 
                        required
                        type='text'
                        name='street'
                        value={street}
                    />
                </div>
                <label htmlFor='avenue'>Cross Avenue</label>
                <div>
                    <Input 
                        required
                        type='text'
                        name='avenue'
                        value={avenue}
                    />
                </div>
                <label htmlFor='landmarks'>Landmarks</label>
                <div>
                    <Input 
                        type='text'
                        name='landmarks'
                        value={landmarks}
                    />
                </div>
                <label htmlFor='acceptsCard'>Accepts Card?</label>
                <div>
                    <Input 
                        required
                        type='text'
                        name='acceptsCard'
                        value={acceptsCard}
                    />
                </div>
                <label htmlFor='hours'>Approximate Hours</label>
                <div>
                    <Input 
                        required
                        type='text'
                        name='hours'
                        value={hours}
                    />
                </div>
                <label htmlFor='chickenPrice'>Chicken Over Rice Price</label>
                <div>
                    <Input 
                        required
                        type='text'
                        name='chickenPrice'
                        value={chickenPrice}
                    />
                </div>
                <label htmlFor='comboPrice'>Combo Over Rice Price</label>
                <div>
                    <Input 
                        required
                        type='text'
                        name='comboPrice'
                        value={comboPrice}
                    />
                </div>
                <label htmlFor='latitude'>Latitude</label>
                <div>
                    <Input 
                        required
                        type='text'
                        name='latitude'
                        value={latitude}
                    />
                </div>
                <label htmlFor='longitude'>Longitude</label>
                <div>
                    <Input 
                        required
                        type='text'
                        name='longitude'
                        value={longitude}
                    />
                </div>
                <label htmlFor='image'>Image</label>
                <div>
                    <Input 
                        required
                        type='text'
                        name='image'
                        value={image}
                    />
                </div>
            </Form>
        </Container>
    )
}

export default CartForm