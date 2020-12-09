import { useEffect, useState } from 'react';
import { getArticleById } from './api';
import { timeFormatter } from '../utils/timeFormatter';
import commentImg from '../images/comment.svg';
import Comments from './Comments';
import Voter from './Voter';

const Article = ({ article_id }) => {
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
        const {
          response: { status, statusText }
        } = err;
        setHasError(true);
        setErrorMessage({ status, statusText });
      });
  }, [article_id]);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  if (hasError) return <p>{errorMessage}</p>;
  if (isLoading) return <p>Loading article...</p>;
  const { title, body, author, votes, comment_count, created_at } = article;
  return (
    <div className="article-page">
      <div className="article-container">
        <h3 className="article-container-title">{title}</h3>
        <h4 className="article-container-author">by {author}</h4>
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
      {showComments ? <Comments article_id={article_id} /> : null}
    </div>
  );
};

export default Article;
