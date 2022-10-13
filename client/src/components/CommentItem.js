function CommentItem({ comment }) {
    return (
        <p>{comment.user_name} replied: {comment.comment}</p>
    )
}

export default CommentItem