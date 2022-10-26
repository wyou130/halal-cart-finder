import { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import { Input, Icon, Button, Form, Container } from 'semantic-ui-react'

function Login () {

    let [currentUser, setCurrentUser] = useContext(UserContext)
    let history = useHistory()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [isShowingPassword, setIsShowingPassword] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        let loginInput = {
            email: email,
            password: password
        }
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(loginInput)
        })
            .then(res => {
                if(res.ok) {
                    res.json()
                    .then(loggedInUser => {
                        setCurrentUser(loggedInUser)
                        history.push('/')
                    })
                } else {
                    res.json()
                    .then(errors => setErrors(errors.error))
                }
            })
        setEmail("")
        setPassword("")
    }
    
    // console.log(errors)

    return(
        <Container>
            <h1>Log In</h1>
            <Form onSubmit={handleSubmit}>
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
                <Button type="submit">Log In</Button>
            </Form>
            {errors.length === 0 ? null : <p className='error'><Icon name='attention'/>{errors}</p>}
            <br/>
            <div>
                Don't have an account yet? <Link to='/signup'>Sign up now!</Link>
            </div>
        </Container>
    )
}

export default Login