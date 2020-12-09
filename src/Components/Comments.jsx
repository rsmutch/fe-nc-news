import { useEffect, useState } from 'react';
import { getComments } from './api';
import CommentCard from './CommentCard';
import CommentAdder from './CommentAdder';

const Comments = ({ article_id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [Comments, setComments] = useState({});
  const [showCommentAdder, setShowCommentAdder] = useState(false);

  useEffect(() => {
    getComments(article_id).then((res) => {
      setComments(res);
      setIsLoading(false);
    });
  }, [article_id]);

  const addCommentToState = () => {};

  const toggleCommentAdder = () => {
    setShowCommentAdder(!showCommentAdder);
  };

  if (isLoading) return <p>Loading comments...</p>;
  return (
    <div className="comments-container">
      {showCommentAdder ? (
        <CommentAdder article_id={article_id} />
      ) : (
        <button onClick={toggleCommentAdder}>Add Comment</button>
      )}
      {Comments.map((comment) => {
        return <CommentCard key={comment.comment_id} {...comment} />;
      })}
    </div>
  );
};

export default Comments;
