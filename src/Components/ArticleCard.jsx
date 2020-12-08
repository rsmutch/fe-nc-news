import commentImg from '../images/comment.svg';
import authorImg from '../images/author.svg';
import { timeFormatter } from '../utils/timeFormatter';

const ArticleCard = ({
  title,
  author,
  created_at,
  votes,
  topic,
  comment_count
}) => {
  return (
    <div className="article-card">
      <p className="article-card-topic">{topic}</p>
      <h3 className="article-card-title">{title}</h3>
      <p className="article-card-created">{timeFormatter(created_at)}</p>
      <p className="article-card-author">
        <img src={authorImg} alt="author icon"></img>
        {author}
      </p>
      <p className="article-card-comments">
        <img src={commentImg} alt="comment icon"></img>
        {comment_count}
      </p>

      <p className="article-card-votes">{votes}</p>
    </div>
  );
};

export default ArticleCard;
