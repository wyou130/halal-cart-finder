// import { useEffect, useState } from "react";
import CommentItem from "./CommentItem"
import { Comment, Header } from 'semantic-ui-react'

function CommentsList({ displayedComments, onUpdateComment, onDeleteComment }) {

    // const [displayedComments, setDisplayedComments] = useState([])

    // useEffect(() => {
    //     fetch(`/comments/${review}`)
    //         .then(res => res.json())
    //         .then(commentsForSpecificReview => setDisplayedComments(commentsForSpecificReview))
    // }, [])

    // function onSubmitNewComment(newComment) {
    //     console.log(newComment)
    // }
    
    return (
        <Comment.Group>
            <Header as='h4' dividing>Comments</Header>
            {displayedComments.map(comment => <CommentItem key={comment.id} comment={comment} onUpdateComment={onUpdateComment} onDeleteComment={onDeleteComment} />) }
        </Comment.Group>
    )
}

export default CommentsList