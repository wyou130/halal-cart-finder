import { useState, createContext, useEffect } from "react";

const UserContext = createContext()

function UserProvider({ children }) {

    const [currentUser, setCurrentUser] = useState("");

    // Don't need these because useContext passes BOTH variables and setter functions 
    
    // function onUserEntry(user) {
    //   setCurrentUser(user)
    // }
    
    // function onLogOut() {
    //   setCurrentUser(null)
    // }

    useEffect(() => {
        fetch('/me')
          .then(res => {
            if(res.ok) {
              res.json()
              .then((loggedInUser) => setCurrentUser(loggedInUser))
            }
          })
      }, [])
  
    return (
      <UserContext.Provider value={[currentUser, setCurrentUser]}>
        {children}
      </UserContext.Provider>
    );
  }

  export { UserProvider, UserContext }