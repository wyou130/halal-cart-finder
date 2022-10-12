// import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Signup from './components/Signup'
import UserDetails from './components/UserDetails'
import { UserProvider } from './context/UserProvider'
import './App.css'
import CartsList from './components/CartsList'
import CartDetails from './components/CartDetails'

function App() {

  // All currentUser state has been moved to UserProvider 

  // const [currentUser, setCurrentUser] = useState(null)

  // useEffect(() => {
  //   fetch('/me')
  //     .then(res => {
  //       if(res.ok) {
  //         res.json()
  //         .then((loggedInUser) => setCurrentUser(loggedInUser))
  //       }
  //     })
  // }, [])

  // function onUserEntry(user) {
  //   setCurrentUser(user)
  // }

  // function onLogOut() {
  //   setCurrentUser(null)
  // }

  return (
    <UserProvider>
      <div className="App">
        <NavBar 
            // currentUser={currentUser} onLogOut={onLogOut} 
        />
        <Switch>
          <Route path="/login">
            <Login 
              // onUserEntry={onUserEntry} 
            />
          </Route>
          <Route path="/signup">
            <Signup 
              // onUserEntry={onUserEntry} 
            />
          </Route>
          <Route exact path="/carts">
            <CartsList />
          </Route>
          <Route exact path="/carts/:id">
            <CartDetails />
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
    </UserProvider>
  )
}

export default App;
