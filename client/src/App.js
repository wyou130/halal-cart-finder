import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Signup from './components/Signup'
import UserDetails from './components/UserDetails'
import './App.css'

function App() {
  
  // const [count, setCount] = useState(0)
  const [currentUser, setCurrentUser] = useState(null)

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count))
  // }, [])

  useEffect(() => {
    fetch('/me')
      .then(res => {
        if(res.ok) {
          res.json()
          .then((loggedInUser) => setCurrentUser(loggedInUser))
        }
      })
  }, [])

  function onUserEntry(user) {
    setCurrentUser(user)
  }

  function onLogOut() {
    setCurrentUser(null)
  }
  
  // console.log(currentUser)

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar currentUser={currentUser} onLogOut={onLogOut} />
        <Switch>
          <Route path="/login">
            <Login onUserEntry={onUserEntry} />
          </Route>
          <Route path="/signup">
            <Signup onUserEntry={onUserEntry} />
          </Route>
          <Route path="/carts">
            <h1>Carts</h1>
          </Route>
          <Route path="/favorites">
            <h1>Favorites</h1>
          </Route>
          <Route path="/reviews">
            <h1>Reviews</h1>
          </Route>
          <Route path="/users/:id">
            <UserDetails />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
