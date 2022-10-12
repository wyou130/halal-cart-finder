import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {

    const [displayedUser, setDisplayedUser] = useState("")
    let { id } = useParams()

    useEffect(() => {
        fetch(`/users/${id}`)
        .then(res => {
            if(res.ok) {
                res.json()
                .then(oneUser => setDisplayedUser(oneUser))
            }
        })
    }, [id])

    return(
        <div>
            <p>{displayedUser.name}</p>
            <p>{displayedUser.location}</p>
            <p>{displayedUser.number_of_reviews} Reviews</p>
        </div>
    )
}

export default UserDetails