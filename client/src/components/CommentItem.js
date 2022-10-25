import { useState, useContext } from "react"
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import { Comment, Button, Icon, Form, Input } from 'semantic-ui-react'

function CommentItem({ comment, onUpdateComment, onDeleteComment }) {

    let [currentUser, setCurrentUser] = useContext(UserContext)

    const [isEditing, setIsEditing] = useState(false)
    const [commentInput, setCommentInput] = useState(comment.comment)

    function toggleEdit() {
        setIsEditing(!isEditing)
    }

    function handleEdit(e) {
        e.preventDefault()
        let editInput = {
            comment: commentInput
        }
        fetch(`/comments/${comment.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(editInput)
        }) 
            .then(res => {
                if(res.ok) {
                    res.json()
                    .then((updatedComment) => {
                        onUpdateComment(updatedComment)
                        setIsEditing(false)
                    })
                    alert('Comment successfully updated!')
                }
            })
    }

    function handleDelete(comment) {
        if(window.confirm('Are you sure you want to delete your comment?')) {
            fetch(`/comments/${comment.id}`, {
                method: "DELETE"
            })
              .then(() => {
                  onDeleteComment(comment)
              })
        } 
        
    }

    return (
        <>
            {
                isEditing ?  
                <Form onSubmit={handleEdit}>
                    {/* <label htmlFor="comment">Comment: </label> */}
                        <Input 
                            required 
                            type="text" 
                            name="review" 
                            value={commentInput}
                            onChange={e => setCommentInput(e.target.value)}
                        />
                    <Button type="submit">Update Comment</Button>
                </Form>
                : 
                <Comment>
                    <Comment.Avatar src={comment.user_image}/>
                    <Comment.Content>
                        <Comment.Author as={Link} to={`/users/${comment.user_id}`}>{comment.user_name}</Comment.Author>
                        <Comment.Metadata>on {comment.created_at}, last updated {comment.updated_at}</Comment.Metadata>
                        <Comment.Text>{comment.comment}</Comment.Text>
                    </Comment.Content>
                </Comment>
            }
            {
                comment.user_id === currentUser.id ? 
                <>
                    <Button size='mini' icon onClick={toggleEdit}>
                        {isEditing ? <Icon name='cancel'/> : <Icon name='edit outline'/>}
                    </Button> 
                    <Button size='mini' icon onClick={() => handleDelete(comment)}>
                        <Icon name='trash alternate'/>
                    </Button>
                </>
                : 
                null
            }
        </>
    )
}

export default CommentItem