import { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import { Input, Icon, Button, Form, Container } from 'semantic-ui-react'

function Signup() {

    let [currentUser, setCurrentUser] = useContext(UserContext)
    let history = useHistory()
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [location, setLocation] = useState("")
    const [image, setImage] = useState("")
    const [errors, setErrors] = useState([])
    const [isShowingPassword, setIsShowingPassword] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        let signupInput = {
            name: name,
            email: email,
            password: password,
            location: location,
            image: image
        }
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(signupInput)
        })
            .then(res => {
                if(res.ok) {
                    res.json()
                    .then(newUser => {
                        setCurrentUser(newUser)
                        history.push('/')
                    })
                } else {
                    res.json()
                    .then(errors => setErrors(errors.error))
                }
            })
        setName("")
        setEmail("")
        setPassword("")
        setLocation("")
        setImage("")
    }

    return (
        <Container>
            <h1>Create an Account</h1>
            <Form onSubmit={handleSubmit}>
                {/* <label htmlFor="name">Username</label> */}
                <div>
                    <Input 
                        required 
                        placeholder="Username"
                        type="text" 
                        name="name" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                {/* <label htmlFor="email">Email</label> */}
                <div>
                    <Input 
                        required 
                        placeholder="Email"
                        type="text" 
                        name="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                {/* <label htmlFor="password">Password</label> */}
                <div>
                    <Input 
                        required 
                        placeholder="Password"
                        type={isShowingPassword ? "text" : "password"} 
                        name="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Icon name={isShowingPassword ? 'eye slash' : 'eye'} size='large' onClick={() => setIsShowingPassword(!isShowingPassword)}/>
                </div>
                {/* <label htmlFor="location">Location</label> */}
                <div>
                    <Input 
                        required 
                        placeholder="Location"
                        type="text" 
                        name="location" 
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                    />
                </div>
                {/* <label htmlFor="image">Profile Picture</label> */}
                <div>
                    <Input 
                        placeholder="Image"
                        type="text" 
                        name="image" 
                        value={image}
                        onChange={e => setImage(e.target.value)}
                    />
                </div>
                <Button type="submit">Create Account</Button>
            </Form>
            {errors.map(error => <p key={error} className='error'><Icon name='attention'/>{error}</p>)}
            <br/>
            <div>
                Already have an account? <Link to='/login'>Log in now!</Link>
            </div>
        </Container>
    )
}

export default Signup