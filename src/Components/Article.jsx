import { useEffect, useState } from 'react';
import { getArticleById } from './api';
import { timeFormatter } from '../utils/timeFormatter';
import { Link } from '@reach/router';
import commentImg from '../images/comment.svg';
import Comments from './Comments';
import Voter from './Voter';
import Loading from './Loading';
import ErrorDisplay from './Error';

const Article = ({ article_id, username, commentsonload }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [article, setArticle] = useState({});
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    getArticleById(article_id)
      .then((res) => {
        setArticle(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.dir(err);
        const {
          response: {
            status,
            data: { msg }
          }
        } = err;
        setHasError(true);
        setErrorMessage({ status, statusText: msg });
      });
  }, [article_id]);

  const toggleComments = () => {
    setShowComments(!showComments);
  };
  if (hasError)
    return (
      <ErrorDisplay
        errCode={errorMessage.status}
        errMessage={errorMessage.statusText}
      />
    );
  if (isLoading) return <Loading />;
  const { title, body, author, votes, comment_count, created_at } = article;
  return (
    <div className="article-page">
      <div className="article-container">
        <h3 className="article-container-title">{title}</h3>
        <h4 className="article-container-author">
          <Link to={`articles/authors/${author}`} username={username}>
            by {author}
          </Link>
        </h4>
        <p className="article-container-created">{timeFormatter(created_at)}</p>
        <p className="article-container-body">{body}</p>
        <Voter article_id={article_id} votes={votes} />
        <p className="article-container-comments" onClick={toggleComments}>
          <img src={commentImg} alt="comment icon" />
          {comment_count}
        </p>
        {showComments ? (
          <div
            className="article-container-show-comments"
            onClick={toggleComments}
          >
            HIDE COMMENTS
          </div>
        ) : (
          <div
            className="article-container-show-comments"
            onClick={toggleComments}
          >
            SHOW COMMENTS
          </div>
        )}
      </div>
      {showComments ? (
        <Comments article_id={article_id} username={username} />
      ) : null}
    </div>
  );
};

export default Article;
