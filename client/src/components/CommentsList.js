import CommentItem from "./CommentItem";

function CommentsList({ comments }) {

    // console.log(comments)
    
    return (
        <div>
            {comments.map(comment => <CommentItem key={comment.id} comment={comment} />) }
        </div>
    )
}

export default CommentsList