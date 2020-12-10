import { useState } from 'react';
import { postComment } from './api';

const CommentAdder = ({
  article_id,
  username,
  comments,
  setComments,
  setJustAdded
}) => {
  const [charRemaining, setCharRemaining] = useState(280);
  const [newComment, setNewComment] = useState({ body: '' });
  const [commentAdded, setCommentAdded] = useState(false);

  const handleChange = ({ target }) => {
    if (target.value.length <= 280) {
      setNewComment({ body: target.value });
      setCharRemaining(280 - target.value.length);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setJustAdded(newComment);
    postComment(article_id, newComment.body, username).then((res) => {
      setComments([...comments, res]);
    });
    setCommentAdded(true);
    setNewComment({ body: '' });
  };
  if (commentAdded)
    return <p className="comment-adder-added">Comment Added!</p>;
  return (
    <form onSubmit={handleSubmit} className="comment-adder-form">
      <textarea
        className="comment-adder-textbox"
        type="textarea"
        value={newComment.body}
        onChange={handleChange}
        // rows="10"
        // cols="50"
      ></textarea>
      <>
        <p>{charRemaining} characters remaining</p>
        <button className="comment-adder-submit" type="submit">
          Post Comment
        </button>
      </>
    </form>
  );
};

export default CommentAdder;
