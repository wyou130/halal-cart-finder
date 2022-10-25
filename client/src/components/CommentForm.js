import { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

function CommentForm({ review, onSubmitNewComment }) {

    let [currentUser, setCurrentUser] = useContext(UserContext)

    const [comment, setComment] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        let commentInput = {
            comment: comment,
            review_id: review,
            user_id: currentUser.id
        }
        // console.log(commentInput)
        fetch('/comments', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(commentInput)
        })
            .then(res => {
                if(res.ok) {
                    res.json()
                    .then(newComment => onSubmitNewComment(newComment))
                    alert('Comment successfully added!')
                }
            })
        setComment("")
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="comment">Your Comment: </label>
                <div>
                    <TextArea 
                        required 
                        type="text" 
                        name="comment" 
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                </div>
                <Button type="submit">Add Comment</Button>
            </Form>
        </div>
    )
}

export default CommentForm