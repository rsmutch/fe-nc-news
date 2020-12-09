import { useState } from 'react';
import { postComment } from './api';

const CommentAdder = () => {
  const [charRemaining, setCharRemaining] = useState(280);
  const [newComment, setNewComment] = useState({});

  const handleChange = ({ target }) => {
    if (target.value.length <= 280) {
      setNewComment({ ...newComment, body: target.value });
      setCharRemaining(280 - target.value.length);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="comment-adder-form">
      <input
        className="comment-adder-textbox"
        type="textarea"
        value={newComment.body}
        onChange={handleChange}
        // rows="10"
        // cols="50"
      ></input>
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
