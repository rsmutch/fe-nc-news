import { useEffect, useState } from 'react';
import { deleteComment, getComments } from './api';
import CommentCard from './CommentCard';
import CommentAdder from './CommentAdder';
import { Link } from '@reach/router';
import Loading from './Loading';

const Comments = ({ article_id, username }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [showCommentAdder, setShowCommentAdder] = useState(false);

  useEffect(() => {
    getComments(article_id).then((res) => {
      setComments(res);
      setIsLoading(false);
    });
  }, [article_id]);

  const removeComment = (comment_id) => {
    deleteComment(comment_id);
    setComments(
      comments.filter((comment) => {
        return comment.comment_id !== comment_id;
      })
    );
  };

  const toggleCommentAdder = () => {
    setShowCommentAdder(!showCommentAdder);
  };

  if (isLoading) return <Loading />;
  return (
    <div className="comments-container">
      {username ? (
        showCommentAdder ? (
          <CommentAdder
            article_id={article_id}
            username={username}
            comments={comments}
            setComments={setComments}
          />
        ) : (
          <button className="toggle-comment-adder" onClick={toggleCommentAdder}>
            Add Comment
          </button>
        )
      ) : (
        <Link className="comments-login" to={`/login`}>
          Login to leave comments
        </Link>
      )}
      {comments.map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            {...comment}
            removeComment={removeComment}
            username={username}
          />
        );
      })}
    </div>
  );
};

export default Comments;
