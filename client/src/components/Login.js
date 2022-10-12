import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

function Login () {

    let [currentUser, setCurrentUser] = useContext(UserContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        let loginInput = {
            email: email,
            password: password
        }
        // console.log(loginInput)
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(loginInput)
        })
            .then(res => res.json())
            .then(loggedInUser => {
                setCurrentUser(loggedInUser)
                // history.push('/')
            })
        setEmail("")
        setPassword("")
    }

    return(
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <div>
                    <input 
                        required 
                        type="text" 
                        name="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <label htmlFor="password">Password</label>
                <div>
                    <input 
                        required 
                        type="password" 
                        name="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                {/* <input type="checkbox" onClick={showPassword}>Show Password</input> */}
                <button type="submit">Log In</button>
            </form>
            <br/>
            <div>
                Don't have an account yet? <Link to='/signup'>Sign up now!</Link>
            </div>
        </div>
    )
}

export default Login