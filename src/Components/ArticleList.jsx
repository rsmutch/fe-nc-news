import { getArticles } from './api';
import ArticleCard from './ArticleCard';
import { useState, useEffect } from 'react';
import Sorter from './Sorter';

const ArticleList = ({ topic, author, username, setUsername, location }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    getArticles(topic, author, sortBy, sortOrder).then((res) => {
      setArticles(res);
      setIsLoading(false);
    });
    if (location.state.username) {
      setUsername(location.state.username);
    }
  }, [topic, author, sortBy, sortOrder, location.state.username, setUsername]);

  if (isLoading) return <p>Loading...</p>;
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
