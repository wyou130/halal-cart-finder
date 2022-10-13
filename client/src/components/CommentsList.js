import { useEffect, useState } from "react";
import CommentItem from "./CommentItem";

function CommentsList({ review }) {

    const [displayedComments, setDisplayedComments] = useState([])

    useEffect(() => {
        fetch(`/comments/${review}`)
            .then(res => res.json())
            .then(commentsForSpecificReview => setDisplayedComments(commentsForSpecificReview))
    }, [])
    
    return (
        <div>
            {displayedComments.map(comment => <CommentItem key={comment.id} comment={comment} />) }
        </div>
    )
}

export default CommentsList