import { useState, useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import ReviewItem from "./ReviewItem"
import { Button, Icon, Item, Container, Divider, Form, Input } from 'semantic-ui-react'

function UserDetails() {

    let { id } = useParams()
    let history = useHistory()
    let [currentUser, setCurrentUser] = useContext(UserContext)

    const [isEditing, setIsEditing] = useState(false)
    const [displayedUser, setDisplayedUser] = useState("")
    const [name, setName] = useState()
    const [location, setLocation] = useState()
    const [image, setImage] = useState()
    const [displayedReviews, setDisplayedReviews] = useState([])
    const [errors, setErrors] = useState([])

    // This useEffect fixes the issue of initial state being set as undefined
    // This runs after rendering the first time (when currentUser is undefined)
    // After this runs, currentUser is then defined and the attributes can be accessed
    // Does not fix issue when page is refreshed
    // Changing Provider initial state of user to "" instead of null may be the fix...
    useEffect(() => {
        setName(currentUser.name)
        setLocation(currentUser.location)
        setImage(currentUser.image)
    }, [])

    useEffect(() => {
        fetch(`/users/${id}`)
        .then(res => {
            if(res.ok) {
                res.json()
                .then(oneUser => {
                    setDisplayedUser(oneUser)
                    setDisplayedReviews(oneUser.reviews)
                })
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
                        alert('Profile successfully updated!')
                    }) 
                } else {
                    res.json()
                    .then(errors => setErrors(errors.error))
                }
            })
    }

    function handleDelete(currentUser) {
        if(window.confirm('Are you sure you want to delete your account?')) {
            fetch(`/users/${currentUser.id}`, {
                method: 'DELETE'
              })
              .then(() => {
                  setCurrentUser("")
                  setDisplayedUser(null)
                  history.push('/login')
              })
        } 
    }

    function onUpdateReview(updatedReview) {
        const updatedReviewList = displayedReviews.map(review => {
            if (review.id === updatedReview.id) return updatedReview
            else return review
        })
        setDisplayedReviews(updatedReviewList)
    }

    function onDeleteReview(deletedReview) {
        const updatedReviewList = displayedReviews.filter(review => {
            return review.id !== deletedReview.id
        })
        setDisplayedReviews(updatedReviewList)
    }

    return(
        <Container>
            <div>
                <Button onClick={() => history.goBack()}>Go Back</Button>
            </div>
            <Divider/>
            <br/>
            <Item.Group>
                <Item>
                    {
                        currentUser && isEditing ? 
                        <Item.Content>
                            <Form onSubmit={handleUpdate}>
                                <label htmlFor="image">Profile Picture</label>
                                <div>
                                    <Input 
                                        type="text" 
                                        name="image" 
                                        value={image}
                                        onChange={e => setImage(e.target.value)}
                                    />
                                </div>
                                <label htmlFor="name">Username</label>
                                <div>
                                    <Input 
                                        required 
                                        type="text" 
                                        name="name" 
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                <label htmlFor="location">Location</label>
                                <div>
                                    <Input 
                                        required 
                                        type="text" 
                                        name="location" 
                                        value={location}
                                        onChange={e => setLocation(e.target.value)}
                                    />
                                </div>
                                <Button type="submit">Update Profile</Button>
                            </Form>
                            {errors.map(error => <p key={error} className='error'><Icon name='attention'/>{error}</p>)}
                            <br/>
                            <div>
                                <Button icon labelPosition='left' onClick={toggleForm}>
                                    <Icon name='cancel'/>
                                    Cancel Edit
                                </Button>
                                <Button icon labelPosition='left' onClick={() => handleDelete(currentUser)}>
                                    <Icon name='trash alternate'/>
                                    Delete Account
                                </Button>
                            </div>
                        </Item.Content>
                        :
                        <>
                        <img
                            alt={displayedUser.name} 
                            src={displayedUser.image}
                            style={{width: '240px', height: '240px', objectFit: 'cover', marginRight: "3em"}}
                        />
                        <Item.Content>
                            <Item.Header>{displayedUser.name}</Item.Header>
                            <Item.Meta>Joined on {displayedUser.created_at}</Item.Meta>
                            <Item.Description>
                                <Icon name='home'/>{displayedUser.location}
                            </Item.Description>
                            <br />
                            {currentUser && displayedUser.id === currentUser.id ? 
                                <div>
                                    <Button icon labelPosition='left' onClick={toggleForm}>
                                        <Icon name='edit outline'/>
                                        Edit Profile
                                    </Button>
                                    <Button icon labelPosition='left' onClick={() => handleDelete(currentUser)}>
                                        <Icon name='trash alternate'/>
                                        Delete Account
                                    </Button>
                                </div>
                                :
                                null
                            }
                        </Item.Content>
                    </>
                    }
                    </Item>
                </Item.Group>
                <br/>
                <Divider horizontal>{displayedUser.total_reviews} Reviews</Divider>
                <br/>
                <Item.Group divided>
                    {displayedReviews.map(review => <ReviewItem 
                            key={review.id} 
                            review={review} 
                            onUpdateReview={onUpdateReview} 
                            onDeleteReview={onDeleteReview} 
                        />)}
                </Item.Group>
        </Container>
    )
}

export default UserDetails