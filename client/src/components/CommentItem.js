function CommentItem({ comment }) {
    // console.log(comment.user_name)
    return (
        <p>{comment.user_name} replied: {comment.comment}</p>
    )
}

export default CommentItem