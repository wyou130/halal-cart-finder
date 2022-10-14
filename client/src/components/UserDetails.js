import { useState, useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

function UserDetails() {

    let { id } = useParams()
    let history = useHistory()
    let [currentUser, setCurrentUser] = useContext(UserContext)

    const [isEditing, setIsEditing] = useState(false)
    const [displayedUser, setDisplayedUser] = useState("")
    const [name, setName] = useState()
    const [location, setLocation] = useState()
    const [image, setImage] = useState()

    // This useEffect fixes the issue of initial state being set as undefined
    // This runs after rendering the first time (when currentUser is undefined)
    // After this runs, currentUser is then defined and the attributes can be accessed
    // Does not fix issue when page is refreshed
    useEffect(() => {
        setName(currentUser.name)
        setLocation(currentUser.location)
        setImage(currentUser.image)
    }, [])
    
    // console.log(currentUser.name, name)

    useEffect(() => {
        fetch(`/users/${id}`)
        .then(res => {
            if(res.ok) {
                res.json()
                .then(oneUser => setDisplayedUser(oneUser))
            }
        })
    }, [id])

    function toggleForm() {
        setIsEditing(!isEditing)
    }

    function handleUpdate(e) {
        e.preventDefault()
        let updateInput = {
            name: name,
            location: location,
            image: image
        }
        // console.log(updateInput)
        fetch(`/users/${currentUser.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(updateInput)
        }) 
            .then(res => {
                if(res.ok) {
                    res.json()
                    .then((updatedUser) => {
                        setDisplayedUser(updatedUser)
                        setIsEditing(false)
                    }) 
                }
                alert('Profile successfully updated!')
            })
    }

    function handleDelete(currentUser) {
        // console.log(currentUser)
        if(window.confirm('Are you sure you want to delete your account?')) {
            fetch(`/users/${currentUser.id}`, {
                method: 'DELETE'
              })
              .then(() => {
                  setCurrentUser(null)
                  setDisplayedUser(null)
                  history.push('/login')
              })
        } 
    }

    return(
        <div>
            {
                currentUser && isEditing ? 
                <form onSubmit={handleUpdate}>
                    <label htmlFor="image">Profile Picture</label>
                    <div>
                        <input 
                            type="text" 
                            name="image" 
                            value={image}
                            onChange={e => setImage(e.target.value)}
                        />
                    </div>
                    <label htmlFor="name">Username</label>
                    <div>
                        <input 
                            required 
                            type="text" 
                            name="name" 
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <label htmlFor="location">Location</label>
                    <div>
                        <input 
                            required 
                            type="text" 
                            name="location" 
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                        />
                    </div>
                    <button type="submit">Update Profile</button>
                </form>
                :
                <div>
                    <p>{displayedUser.name}</p>
                    <p>{displayedUser.location}</p>
                </div>
            }
                {currentUser && displayedUser.id === currentUser.id ? 
                    <div>
                        <button onClick={toggleForm}>
                        {isEditing ? "Cancel" : "Edit Profile"}
                        </button>
                        <button onClick={() => handleDelete(currentUser)}>
                        Delete Account
                        </button>
                    </div>
                    :
                    null
                }
                <p>{displayedUser.number_of_reviews} Reviews</p>
        </div>
    )
}

export default UserDetails