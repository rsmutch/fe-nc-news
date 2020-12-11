import { getArticles } from './api';
import ArticleCard from './ArticleCard';
import { useState, useEffect } from 'react';
import Sorter from './Sorter';
import Loading from './Loading';
import ErrorDisplay from './Error';

const ArticleList = ({ topic, author, username, setUsername }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    getArticles(topic, author, sortBy, sortOrder)
      .then((res) => {
        setArticles(res);
        setIsLoading(false);
      })
      .catch((err) => {
        const {
          response: {
            status,
            data: { msg }
          }
        } = err;
        setHasError(true);
        setErrorMessage({ status, statusText: msg });
      });
  }, [topic, author, sortBy, sortOrder, setUsername]);

  if (hasError)
    return (
      <ErrorDisplay
        errCode={errorMessage.status}
        errMessage={errorMessage.statusText}
      />
    );
  if (isLoading) return <Loading />;
  return (
    <div className="article-list">
      <Sorter setSortBy={setSortBy} setSortOrder={setSortOrder} />
      {articles.map((article) => {
        return (
          <ArticleCard
            username={username}
            key={article.article_id}
            {...article}
          />
        );
      })}
      ;
    </div>
  );
};

export default ArticleList;
