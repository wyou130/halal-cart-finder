import { useState, useContext } from "react"
import { UserContext } from '../context/UserProvider'

function CommentItem({ comment, onUpdateComment }) {

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
        // console.log(editInput)
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

    // console.log(currentUser.id)
    // console.log(comment)

    return (
        <>
            {
                isEditing ?  
                <form onSubmit={handleEdit}>
                    <label htmlFor="comment">Comment: </label>
                        <input 
                            required 
                            type="text" 
                            name="review" 
                            value={commentInput}
                            onChange={e => setCommentInput(e.target.value)}
                        />
                    <button type="submit">Update Comment</button>
                </form>
                : 
                <p>{comment.user_name} replied: {comment.comment}</p>
            }
            {
                comment.user_id === currentUser.id ? 
                <button onClick={toggleEdit}>{isEditing ? "Cancel" : "Edit Comment"}</button> 
                : 
                null
            }
        </>
    )
}

export default CommentItem