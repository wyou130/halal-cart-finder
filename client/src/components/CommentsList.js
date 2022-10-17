// import { useEffect, useState } from "react";
import CommentItem from "./CommentItem";

function CommentsList({ displayedComments, onUpdateComment }) {

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
        <div>
            {displayedComments.map(comment => <CommentItem key={comment.id} comment={comment} onUpdateComment={onUpdateComment} />) }
        </div>
    )
}

export default CommentsList