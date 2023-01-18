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
import UsersList from './components/UsersList'
import Home from './components/Home'
import Favorites from './components/Favorites'
import CartForm from './components/CartForm'
import Footer from './components/Footer'

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
            <Favorites />
          </Route>
          <Route path="/reviews">
            <ReviewsList />
          </Route>
          <Route exact path="/users">
            <UsersList />
          </Route>
          <Route exact path="/users/:id">
            <UserDetails />
          </Route>
          <Route exact path="/cart/new">
            <CartForm action='Add New'/>
          </Route>
          <Route path="/">
            <Home /> 
          </Route>
        </Switch>
        <Footer />
      </div>
    </UserProvider>
  )
}

export default App;
