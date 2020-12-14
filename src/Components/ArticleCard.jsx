import commentImg from '../images/comment.svg';
import authorImg from '../images/author.svg';
import { timeFormatter } from '../utils/timeFormatter';
import { Link } from '@reach/router';
import Voter from './Voter';

const ArticleCard = (
  { title, author, created_at, votes, topic, comment_count, article_id },
  { username }
) => {
  return (
    <div className="article-card">
      <p className="article-card-topic">{topic}</p>
      <h2 className="article-card-title">
        <Link to={`/articles/${article_id}`} username={username}>
          {title}
        </Link>
      </h2>
      <p className="article-card-created">{timeFormatter(created_at)}</p>
      <p className="article-card-author">
        <Link to={`/articles/authors/${author}`} username={username}>
          <img src={authorImg} alt="author icon"></img>
          {author}
        </Link>
      </p>
      <p className="article-card-comments">
        <Link to={`/articles/${article_id}`} username={username}>
          <img src={commentImg} alt="comment icon"></img>
          {comment_count}
        </Link>
      </p>

      <Voter article_id={article_id} votes={votes} />
    </div>
  );
};

export default ArticleCard;
