import { useState, createContext, useEffect } from "react";

const UserContext = createContext()

function UserProvider({ children }) {

    const [currentUser, setCurrentUser] = useState("");

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