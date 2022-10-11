import { useState } from 'react'

function Signup() {
    
        const [name, setName] = useState("")
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [location, setLocation] = useState("")
        const [image, setImage] = useState("")
        // let history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        // let signupInput = {
        //     name: name,
        //     email: email,
        //     password: password,
        //     location: location,
        //     image: image
        // }
        // console.log(signupInput)
        // fetch('/signup', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type' : 'application/json'
        //     },
        //     body: JSON.stringify(signupInput)
        // })
            // .then(res => {
            //     if(res.ok) {
            //         res.json()
            //         .then(newUser => onLogIn(newUser))
                    // history.push('/')
                // }
            // })
        setName("")
        setEmail("")
        setPassword("")
        setLocation("")
        setImage("")
    }

    return (
        <div>
            <h1>Create an Account</h1>
            <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Username</label>
                    <div>
                        <input 
                            className='form-control'
                            required 
                            type="text" 
                            name="name" 
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <label htmlFor="email">Email</label>
                    <div>
                        <input 
                            className='form-control'
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
                            className='form-control'
                            required 
                            type="password" 
                            name="password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <label htmlFor="location">Location</label>
                    <div>
                        <input 
                            className='form-control'
                            required 
                            type="text" 
                            name="location" 
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                        />
                    </div>
                    <label htmlFor="image">Profile Picture</label>
                    <div>
                        <input 
                            className='form-control'
                            required 
                            type="text" 
                            name="image" 
                            value={image}
                            onChange={e => setImage(e.target.value)}
                        />
                    </div>
                <button type="submit">Create Account</button>
            </form>
        </div>
    )
}

export default Signup