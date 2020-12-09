import { timeFormatter } from '../utils/timeFormatter';
import Voter from './Voter';

const CommentCard = ({ author, body, created_at, votes, comment_id }) => {
  return (
    <div className="comment-card">
      <h4 className="comment-card-author">{author}</h4>
      <p className="comment-card-body">{body}</p>
      <p className="comment-card-created">{timeFormatter(created_at)}</p>
      <div className="comment-card-votes">
        <Voter comment_id={comment_id} votes={votes} />
      </div>
    </div>
  );
};

export default CommentCard;
