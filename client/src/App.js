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
import ReviewsList from './components/ReviewsList'
import UserList from './components/UserList'
import Home from './components/Home'

function App() {

  return (
    <UserProvider>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
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
            <ReviewsList />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/users/:id">
            <UserDetails />
          </Route>
          <Route path="/">
            <Home /> 
          </Route>
        </Switch>
      </div>
    </UserProvider>
  )
}

export default App;
