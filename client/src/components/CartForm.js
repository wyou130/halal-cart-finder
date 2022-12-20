import { useState } from 'react'
import { Container, Form, Input, Radio, Dropdown } from 'semantic-ui-react'

function CartForm() {

    const [cartName, setCartName] = useState("")
    const [street, setStreet] = useState("")
    const [avenue, setavenue] = useState("")
    const [landmarks, setLandmarks] = useState("")
    const [acceptsCard, setAcceptsCard] = useState(false)
    const [openingHours, setOpeningHours] = useState("")
    const [closingHours, setClosingHours] = useState("")
    const [chickenPrice, setChickenPrice] = useState("")
    const [comboPrice, setcomboPrice] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [image, setImage] = useState("")

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

    return (
        <Container textAlign='center'>
            <h3>Add New Cart</h3>
            <Form>
                {/* <label htmlFor='cartName'>Name</label> */}
                {/* <div> */}
                    <Form.Input 
                        required
                        label='Name'
                        type='text'
                        name='cartName'
                        value={cartName}
                    />
                    <Form.Input 
                        required
                        label='Image'
                        type='text'
                        name='image'
                        value={image}
                    />
                {/* </div> */}
                <Form.Group widths='equal'>
                    {/* <label htmlFor='street'>Cross Street</label> */}
                    {/* <div> */}
                        <Form.Input 
                            required
                            label='Cross Street'
                            type='text'
                            name='street'
                            value={street}
                        />
                    {/* // </div> */}
                    {/* <label htmlFor='avenue'>Cross Avenue</label> */}
                    {/* // <div> */}
                        <Form.Input 
                            required
                            label='Cross Avenue'
                            type='text'
                            name='avenue'
                            value={avenue}
                        />
                    {/* // </div> */}
                </Form.Group>
                <Form.Group widths='equal'>
                    {/* <label htmlFor='latitude'>Latitude</label> */}
                    {/* <div> */}
                        <Form.Input 
                            required
                            label='Latitude'
                            type='text'
                            name='latitude'
                            value={latitude}
                        />
                    {/* </div> */}
                    {/* <label htmlFor='longitude'>Longitude</label> */}
                    {/* <div> */}
                        <Form.Input 
                            required
                            label='Longitude'
                            type='text'
                            name='longitude'
                            value={longitude}
                        />
                    {/* </div> */}
                    {/* <label htmlFor='landmarks'>Landmarks</label> */}
                    {/* <div> */}
                        <Form.Input 
                            label='Landmarks'
                            type='text'
                            name='landmarks'
                            value={landmarks}
                        />
                    {/* </div> */}
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
                        />
                    </Form.Field>
                    <Form.Field>
                        <Dropdown 
                            placeholder='AM or PM'
                            selection
                            options={hourOptions}
                            compact
                        />
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
                        />
                    </Form.Field>
                    <Form.Field>
                        <Dropdown 
                            placeholder='AM or PM'
                            selection
                            options={hourOptions}
                            compact
                        />
                    </Form.Field>
                    {/* <div> */}
                        {/* <Form.Input 
                            required
                            // label='Approximate Hours'
                            type='number'
                            min='1'
                            max='12'
                            name='openingHours'
                            value={openingHours}
                        />
                        <Form.Dropdown 
                            placeholder='AM or PM'
                            selection
                            options={hourOptions}
                            compact
                        />
                        <p> to </p>
                        <Form.Input 
                            required
                            type='number'
                            min='1'
                            max='12'
                            name='closingHours'
                            value={closingHours}
                        />
                        <Form.Dropdown 
                            placeholder='AM or PM'
                            selection
                            options={hourOptions}
                            compact
                        /> */}
                    {/* </div> */}
                </Form.Group>
                <Form.Group widths='equal'>
                    {/* <label htmlFor='chickenPrice'>Chicken Over Rice Price</label> */}
                    {/* <div> */}
                        <Form.Input 
                            required
                            label='Chicken Over Rice Price'
                            type='number'
                            name='chickenPrice'
                            value={chickenPrice}
                        />
                    {/* </div> */}
                    {/* <label htmlFor='comboPrice'>Combo Over Rice Price</label> */}
                    {/* <div> */}
                        <Form.Input 
                            required
                            label='Combo Over Rice Price'
                            type='number'
                            name='comboPrice'
                            value={comboPrice}
                        />
                    {/* </div> */}
                </Form.Group>
            </Form>
        </Container>
    )
}

export default CartForm