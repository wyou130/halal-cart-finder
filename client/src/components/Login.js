import { useState } from 'react'

function Login () {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        // let loginInput = {
        //     email: email,
        //     password: password
        // }
        // console.log(loginInput)
        // fetch("/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type" : "application/json"
        //     },
        //     body: JSON.stringify(loginInput)
        // })
        //     .then(res => res.json())
        //     .then(loggedInUser => {
        //         onLogIn(loggedInUser)
        //         history.push('/')
        //     })
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
                {/* <input type="checkbox" onClick={showPassword}>Show Password</input> */}
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Login