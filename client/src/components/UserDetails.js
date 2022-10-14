import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

function UserDetails() {

    let { id } = useParams()
    let [currentUser, setCurrentUser] = useContext(UserContext)

    const [isEditing, setIsEditing] = useState(false)
    const [displayedUser, setDisplayedUser] = useState("")
    const [name, setName] = useState()
    const [location, setLocation] = useState()
    const [image, setImage] = useState()

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

    return(
        <div>
            {
                isEditing ? 
                <form>
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
                {displayedUser.id === currentUser.id ? 
                    <button onClick={toggleForm}>
                    {isEditing ? "Cancel" : "Edit Profile"}
                    </button>
                    :
                    null
                }
                <p>{displayedUser.number_of_reviews} Reviews</p>
        </div>
    )
}

export default UserDetails