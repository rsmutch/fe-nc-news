import { useEffect, useState } from 'react';
import { getComments } from './api';
import CommentCard from './CommentCard';
import CommentAdder from './CommentAdder';
import { Link } from '@reach/router';

const Comments = ({ article_id, username }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [showCommentAdder, setShowCommentAdder] = useState(false);
  const [justAdded, setJustAdded] = useState();

  useEffect(() => {
    getComments(article_id).then((res) => {
      setComments(res);
      setIsLoading(false);
    });
  }, [article_id, justAdded]);

  const deleteComment = (comment_id) => {
    console.log('hello');
    deleteComment(comment_id);
  };

  const toggleCommentAdder = () => {
    setShowCommentAdder(!showCommentAdder);
  };

  if (isLoading) return <p>Loading comments...</p>;
  return (
    <div className="comments-container">
      {username ? (
        showCommentAdder ? (
          <CommentAdder
            article_id={article_id}
            username={username}
            comments={comments}
            setComments={setComments}
            setJustAdded={setJustAdded}
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
            deleteComment={deleteComment}
            username={username}
          />
        );
      })}
    </div>
  );
};

export default Comments;
