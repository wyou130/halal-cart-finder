import { useState } from 'react'
import { Container, Form, Input, Button, Select } from 'semantic-ui-react'

function CartForm({ action, cart }) {

    const [cartName, setCartName] = useState(cart ? cart.name : "")
    const [image, setImage] = useState(cart ? cart.image : "")
    const [street, setStreet] = useState(cart ? cart.street : "")
    const [avenue, setAvenue] = useState(cart ? cart.avenue : "")
    const [latitude, setLatitude] = useState(cart ? cart.latitude : "")
    const [longitude, setLongitude] = useState(cart ? cart.longitude : "")
    const [landmarks, setLandmarks] = useState(cart ? cart.landmarks : "")
    const [acceptsCard, setAcceptsCard] = useState(cart ? cart.accepts_card : false)
    const [openingHours, setOpeningHours] = useState(cart ? cart.opening_hours : "")
    const [closingHours, setClosingHours] = useState(cart ? cart.closing_hours : "")
    const [openingAMPM, setOpeningAMPM] = useState(cart ? cart.opening_am_pm : "")
    const [closingAMPM, setClosingAMPM] = useState(cart? cart.closing_am_pm : "")
    const [chickenPrice, setChickenPrice] = useState(cart ? cart.chicken_over_rice : "")
    const [comboPrice, setComboPrice] = useState(cart ? cart.combo_over_rice : "")

    const hourOptions = [
        {
            key: 'AM',
            text: 'AM',
            value: 'AM'
        },
        {
            key: 'PM',
            text: 'PM',
            value: 'PM'
        }
    ]

    function handleSubmit(e) {
        e.preventDefault()
        let cartInput = {
            name: cartName,
            street: street,
            avenue: avenue,
            landmarks: landmarks,
            accepts_card: acceptsCard,
            approximate_hours: `${openingHours}${openingAMPM} to ${closingHours}${closingAMPM}`,
            chicken_over_rice: parseInt(chickenPrice),
            combo_over_rice: parseInt(comboPrice),
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            image: image
        }
        if(cart) {
            fetch(`/carts/${cart.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(cartInput)
            }) 
            .then(res => {
                if(res.ok) {
                    res.json()
                    alert('Cart successfully updated!')
                    // use callback function to setDisplayedCart to the updated cart object
                }
                // else for errors 
            })
        } else {fetch('/carts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cartInput)
        })
            .then(res => {
                if(res.ok) {
                    res.json()
                    alert('Cart successfully added!')
                    // history.push to the new cart details page?
                }
                // else for errors 
            })
        }
        setCartName("")
        setImage("")
        setStreet("")
        setAvenue("")
        setLatitude("")
        setLongitude("")
        setLandmarks("")
        setAcceptsCard(false)
        setOpeningHours("")
        setOpeningAMPM("")
        setClosingHours("")
        setClosingAMPM("")
        setChickenPrice("")
        setComboPrice("")
    }

    return (
        <Container textAlign='center'>
            <h3>{action} Cart</h3>
            <Form onSubmit={handleSubmit}>
                    <Form.Input 
                        required
                        label='Name'
                        type='text'
                        name='cartName'
                        value={cartName}
                        onChange={(e) => setCartName(e.target.value)}
                    />
                    <Form.Input 
                        required
                        label='Image'
                        type='text'
                        name='image'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                <Form.Group widths='equal'>
                        <Form.Input 
                            required
                            label='Cross Street'
                            type='text'
                            name='street'
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                        />
                        <Form.Input 
                            required
                            label='Cross Avenue'
                            type='text'
                            name='avenue'
                            value={avenue}
                            onChange={(e) => setAvenue(e.target.value)}
                        />
                </Form.Group>
                <Form.Group widths='equal'>
                        <Form.Input 
                            required
                            label='Latitude'
                            type='text'
                            name='latitude'
                            value={latitude}
                            onChange={(e) => setLatitude(e.target.value)}
                        />
                        <Form.Input 
                            required
                            label='Longitude'
                            type='text'
                            name='longitude'
                            value={longitude}
                            onChange={(e) => setLongitude(e.target.value)}
                        />
                        <Form.Input 
                            label='Landmarks'
                            type='text'
                            name='landmarks'
                            value={landmarks}
                            onChange={(e) => setLandmarks(e.target.value)}
                        />
                </Form.Group>
                <Form.Group inline>
                    <Form.Field required>
                        <label htmlFor='acceptsCard'>Accepts Card?</label>
                    </Form.Field>
                    <Form.Field>
                        <Form.Radio 
                            label='Yes'
                            name='acceptsCardYes'
                            value='Yes'
                            checked={acceptsCard === true}
                            onChange={() => setAcceptsCard(true)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Radio 
                            label='No'
                            name='acceptsCardNo'
                            value='No'
                            checked={acceptsCard === false}
                            onChange={() => setAcceptsCard(false)}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group inline>
                    <Form.Field required>
                        <label htmlFor='hours'>Approximate Hours</label>
                        <Input
                            required
                            type='number'
                            min='1'
                            max='12'
                            name='openingHours'
                            value={openingHours}
                            onChange={(e) => setOpeningHours(e.target.value)}
                        >
                            <input />
                            <Select placeholder='AM or PM' options={hourOptions} value={openingAMPM}
                            compact onChange={(e) => setOpeningAMPM(e.target.textContent)}/>
                        </Input>
                    </Form.Field>
                    <Form.Field>
                        <p> to </p>
                    </Form.Field>
                    <Form.Field>
                        <Input 
                            required
                            type='number'
                            min='1'
                            max='12'
                            name='closingHours'
                            value={closingHours}
                            onChange={(e) => setClosingHours(e.target.value)}
                        >
                            <input />
                            <Select placeholder='AM or PM' options={hourOptions} value={closingAMPM}
                            compact onChange={(e) => setClosingAMPM(e.target.textContent)}/>
                        </Input>
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                        <Form.Input 
                            required
                            min='1'
                            label='Chicken Over Rice Price'
                            type='number'
                            name='chickenPrice'
                            value={chickenPrice}
                            onChange={(e) => setChickenPrice(e.target.value)}
                        />
                        <Form.Input 
                            required
                            min='1'
                            label='Combo Over Rice Price'
                            type='number'
                            name='comboPrice'
                            value={comboPrice}
                            onChange={(e) => setComboPrice(e.target.value)}
                        />
                </Form.Group>
                <Button type='submit'>{action} Cart</Button>
            </Form>
        </Container>
    )
}

export default CartForm